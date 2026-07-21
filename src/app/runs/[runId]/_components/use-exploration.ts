"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import type { Hotspot } from "~/lib/screen";
import { isRunInteractive } from "~/lib/run-status";
import { api, type RouterOutputs } from "~/trpc/react";

type Action = NonNullable<RouterOutputs["reviewRun"]["getAction"]>;

/**
 * Shared manual-exploration actions (hotspot tap, back, resume, reset)
 * so the graph nodes and inspector sidebar stay in sync.
 */
export function useExploration({
  runId,
  runStatus,
  onSelectNode,
}: {
  runId: string;
  runStatus: string;
  onSelectNode: (id: string) => void;
}) {
  const utils = api.useUtils();
  const interactive = isRunInteractive(runStatus);
  const [pendingActionId, setPendingActionId] = useState<string | null>(null);
  const [exploring, setExploring] = useState(false);
  const handledActionRef = useRef<string | null>(null);

  const exploringRef = useRef(exploring);
  exploringRef.current = exploring;
  const interactiveRef = useRef(interactive);
  interactiveRef.current = interactive;
  const onSelectNodeRef = useRef(onSelectNode);
  onSelectNodeRef.current = onSelectNode;

  const actionQuery = api.reviewRun.getAction.useQuery(
    { id: pendingActionId! },
    {
      enabled: !!pendingActionId,
      refetchInterval: (q) => {
        const s = q.state.data?.status;
        return s === "pending" || s === "running" ? 100 : false;
      },
    },
  );

  const tap = api.reviewRun.performHotspotTap.useMutation({
    onError: (err) => {
      setExploring(false);
      setPendingActionId(null);
      toast.error(err.message);
    },
  });

  const pressBack = api.reviewRun.pressBack.useMutation({
    onError: (err) => {
      setExploring(false);
      setPendingActionId(null);
      toast.error(err.message);
    },
  });

  const resetRoot = api.reviewRun.resetToRoot.useMutation({
    onError: (err) => {
      setExploring(false);
      setPendingActionId(null);
      toast.error(err.message);
    },
  });

  const resume = api.reviewRun.resumeFromNode.useMutation({
    onError: (err) => {
      setExploring(false);
      setPendingActionId(null);
      toast.error(err.message);
    },
  });

  const refreshScreenshot = api.reviewRun.refreshScreenshot.useMutation({
    onError: (err) => {
      setExploring(false);
      setPendingActionId(null);
      toast.error(err.message);
    },
  });

  const tapRef = useRef(tap);
  tapRef.current = tap;
  const pressBackRef = useRef(pressBack);
  pressBackRef.current = pressBack;
  const resetRootRef = useRef(resetRoot);
  resetRootRef.current = resetRoot;
  const resumeRef = useRef(resume);
  resumeRef.current = resume;
  const refreshScreenshotRef = useRef(refreshScreenshot);
  refreshScreenshotRef.current = refreshScreenshot;

  const finishAction = useCallback(
    async (action: Action) => {
      if (handledActionRef.current === action.id) return;
      handledActionRef.current = action.id;
      setExploring(false);
      setPendingActionId(null);
      await utils.reviewRun.getGraph.invalidate({ runId });
      await utils.reviewRun.get.invalidate({ id: runId });

      if (action.status === "failed") {
        toast.error(action.errorMessage ?? "Action failed");
        return;
      }

      if (action.isExistingNode) {
        if (action.type === "refresh_screenshot") {
          toast.success("Screenshot refreshed");
        } else {
          toast.message("Existing screen found");
        }
      } else if (action.type === "resume_from_node") {
        toast.success("Resumed at this node");
      } else if (action.type === "reset_to_root") {
        toast.success("Reset to root");
      } else {
        toast.success("New screen captured");
      }

      if (action.resultNodeId) {
        onSelectNodeRef.current(action.resultNodeId);
      }
    },
    [runId, utils.reviewRun.get, utils.reviewRun.getGraph],
  );

  useEffect(() => {
    const data = actionQuery.data;
    if (!data) return;
    if (data.status === "completed" || data.status === "failed") {
      void finishAction(data);
    }
  }, [actionQuery.data, finishAction]);

  function startAction(actionId: string) {
    handledActionRef.current = null;
    setPendingActionId(actionId);
    setExploring(true);
  }

  const onHotspotClick = useCallback(
    async (nodeId: string, hotspot: Hotspot) => {
      if (!interactiveRef.current || exploringRef.current) return;
      setExploring(true);
      try {
        const action = await tapRef.current.mutateAsync({
          runId,
          nodeId,
          hotspotId: hotspot.id,
        });
        startAction(action.id);
      } catch {
        setExploring(false);
      }
    },
    [runId],
  );

  const onPressBack = useCallback(
    async (fromNodeId: string) => {
      if (!interactiveRef.current || exploringRef.current) return;
      setExploring(true);
      try {
        const action = await pressBackRef.current.mutateAsync({
          runId,
          fromNodeId,
        });
        startAction(action.id);
      } catch {
        setExploring(false);
      }
    },
    [runId],
  );

  const onResume = useCallback(
    async (nodeId: string) => {
      if (!interactiveRef.current || exploringRef.current) return;
      setExploring(true);
      try {
        const action = await resumeRef.current.mutateAsync({ runId, nodeId });
        startAction(action.id);
      } catch {
        setExploring(false);
      }
    },
    [runId],
  );

  const onResetRoot = useCallback(async () => {
    if (!interactiveRef.current || exploringRef.current) return;
    setExploring(true);
    try {
      const action = await resetRootRef.current.mutateAsync({ runId });
      startAction(action.id);
    } catch {
      setExploring(false);
    }
  }, [runId]);

  const onRefreshScreenshot = useCallback(
    async (nodeId: string) => {
      if (!interactiveRef.current || exploringRef.current) return;
      setExploring(true);
      try {
        const action = await refreshScreenshotRef.current.mutateAsync({
          runId,
          nodeId,
        });
        startAction(action.id);
      } catch {
        setExploring(false);
      }
    },
    [runId],
  );

  return {
    interactive,
    exploring,
    onHotspotClick,
    onPressBack,
    onResume,
    onResetRoot,
    onRefreshScreenshot,
  };
}

export type ExplorationApi = ReturnType<typeof useExploration>;
