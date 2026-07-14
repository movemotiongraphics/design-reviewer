
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ApkBuild
 * 
 */
export type ApkBuild = $Result.DefaultSelection<Prisma.$ApkBuildPayload>
/**
 * Model ReviewRun
 * 
 */
export type ReviewRun = $Result.DefaultSelection<Prisma.$ReviewRunPayload>
/**
 * Model ScreenNode
 * 
 */
export type ScreenNode = $Result.DefaultSelection<Prisma.$ScreenNodePayload>
/**
 * Model ScreenEdge
 * 
 */
export type ScreenEdge = $Result.DefaultSelection<Prisma.$ScreenEdgePayload>
/**
 * Model NodeComment
 * 
 */
export type NodeComment = $Result.DefaultSelection<Prisma.$NodeCommentPayload>
/**
 * Model ExplorationAction
 * 
 */
export type ExplorationAction = $Result.DefaultSelection<Prisma.$ExplorationActionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReviewRunStatus: {
  queued: 'queued',
  preparing_emulator: 'preparing_emulator',
  installing_apk: 'installing_apk',
  launching_app: 'launching_app',
  exploring: 'exploring',
  awaiting_input: 'awaiting_input',
  completed: 'completed',
  failed: 'failed',
  cancelled: 'cancelled'
};

export type ReviewRunStatus = (typeof ReviewRunStatus)[keyof typeof ReviewRunStatus]


export const IssueType: {
  layout: 'layout',
  typography: 'typography',
  color: 'color',
  spacing: 'spacing',
  copy: 'copy',
  broken_state: 'broken_state',
  accessibility: 'accessibility'
};

export type IssueType = (typeof IssueType)[keyof typeof IssueType]


export const CommentStatus: {
  open: 'open',
  resolved: 'resolved',
  ignored: 'ignored'
};

export type CommentStatus = (typeof CommentStatus)[keyof typeof CommentStatus]


export const ExplorationActionType: {
  tap: 'tap',
  back: 'back',
  reset_to_root: 'reset_to_root',
  resume_from_node: 'resume_from_node'
};

export type ExplorationActionType = (typeof ExplorationActionType)[keyof typeof ExplorationActionType]


export const ExplorationActionStatus: {
  pending: 'pending',
  running: 'running',
  completed: 'completed',
  failed: 'failed'
};

export type ExplorationActionStatus = (typeof ExplorationActionStatus)[keyof typeof ExplorationActionStatus]

}

export type ReviewRunStatus = $Enums.ReviewRunStatus

export const ReviewRunStatus: typeof $Enums.ReviewRunStatus

export type IssueType = $Enums.IssueType

export const IssueType: typeof $Enums.IssueType

export type CommentStatus = $Enums.CommentStatus

export const CommentStatus: typeof $Enums.CommentStatus

export type ExplorationActionType = $Enums.ExplorationActionType

export const ExplorationActionType: typeof $Enums.ExplorationActionType

export type ExplorationActionStatus = $Enums.ExplorationActionStatus

export const ExplorationActionStatus: typeof $Enums.ExplorationActionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apkBuild`: Exposes CRUD operations for the **ApkBuild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApkBuilds
    * const apkBuilds = await prisma.apkBuild.findMany()
    * ```
    */
  get apkBuild(): Prisma.ApkBuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewRun`: Exposes CRUD operations for the **ReviewRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewRuns
    * const reviewRuns = await prisma.reviewRun.findMany()
    * ```
    */
  get reviewRun(): Prisma.ReviewRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screenNode`: Exposes CRUD operations for the **ScreenNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScreenNodes
    * const screenNodes = await prisma.screenNode.findMany()
    * ```
    */
  get screenNode(): Prisma.ScreenNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screenEdge`: Exposes CRUD operations for the **ScreenEdge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScreenEdges
    * const screenEdges = await prisma.screenEdge.findMany()
    * ```
    */
  get screenEdge(): Prisma.ScreenEdgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nodeComment`: Exposes CRUD operations for the **NodeComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NodeComments
    * const nodeComments = await prisma.nodeComment.findMany()
    * ```
    */
  get nodeComment(): Prisma.NodeCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.explorationAction`: Exposes CRUD operations for the **ExplorationAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExplorationActions
    * const explorationActions = await prisma.explorationAction.findMany()
    * ```
    */
  get explorationAction(): Prisma.ExplorationActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Project: 'Project',
    ApkBuild: 'ApkBuild',
    ReviewRun: 'ReviewRun',
    ScreenNode: 'ScreenNode',
    ScreenEdge: 'ScreenEdge',
    NodeComment: 'NodeComment',
    ExplorationAction: 'ExplorationAction',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "project" | "apkBuild" | "reviewRun" | "screenNode" | "screenEdge" | "nodeComment" | "explorationAction" | "account" | "session" | "user" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ApkBuild: {
        payload: Prisma.$ApkBuildPayload<ExtArgs>
        fields: Prisma.ApkBuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApkBuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApkBuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>
          }
          findFirst: {
            args: Prisma.ApkBuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApkBuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>
          }
          findMany: {
            args: Prisma.ApkBuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>[]
          }
          create: {
            args: Prisma.ApkBuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>
          }
          createMany: {
            args: Prisma.ApkBuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApkBuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>[]
          }
          delete: {
            args: Prisma.ApkBuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>
          }
          update: {
            args: Prisma.ApkBuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>
          }
          deleteMany: {
            args: Prisma.ApkBuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApkBuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApkBuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>[]
          }
          upsert: {
            args: Prisma.ApkBuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApkBuildPayload>
          }
          aggregate: {
            args: Prisma.ApkBuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApkBuild>
          }
          groupBy: {
            args: Prisma.ApkBuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApkBuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApkBuildCountArgs<ExtArgs>
            result: $Utils.Optional<ApkBuildCountAggregateOutputType> | number
          }
        }
      }
      ReviewRun: {
        payload: Prisma.$ReviewRunPayload<ExtArgs>
        fields: Prisma.ReviewRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>
          }
          findFirst: {
            args: Prisma.ReviewRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>
          }
          findMany: {
            args: Prisma.ReviewRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>[]
          }
          create: {
            args: Prisma.ReviewRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>
          }
          createMany: {
            args: Prisma.ReviewRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>[]
          }
          delete: {
            args: Prisma.ReviewRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>
          }
          update: {
            args: Prisma.ReviewRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>
          }
          deleteMany: {
            args: Prisma.ReviewRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>[]
          }
          upsert: {
            args: Prisma.ReviewRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRunPayload>
          }
          aggregate: {
            args: Prisma.ReviewRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewRun>
          }
          groupBy: {
            args: Prisma.ReviewRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewRunCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewRunCountAggregateOutputType> | number
          }
        }
      }
      ScreenNode: {
        payload: Prisma.$ScreenNodePayload<ExtArgs>
        fields: Prisma.ScreenNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>
          }
          findFirst: {
            args: Prisma.ScreenNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>
          }
          findMany: {
            args: Prisma.ScreenNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>[]
          }
          create: {
            args: Prisma.ScreenNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>
          }
          createMany: {
            args: Prisma.ScreenNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreenNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>[]
          }
          delete: {
            args: Prisma.ScreenNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>
          }
          update: {
            args: Prisma.ScreenNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>
          }
          deleteMany: {
            args: Prisma.ScreenNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScreenNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>[]
          }
          upsert: {
            args: Prisma.ScreenNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenNodePayload>
          }
          aggregate: {
            args: Prisma.ScreenNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreenNode>
          }
          groupBy: {
            args: Prisma.ScreenNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenNodeCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenNodeCountAggregateOutputType> | number
          }
        }
      }
      ScreenEdge: {
        payload: Prisma.$ScreenEdgePayload<ExtArgs>
        fields: Prisma.ScreenEdgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenEdgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenEdgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>
          }
          findFirst: {
            args: Prisma.ScreenEdgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenEdgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>
          }
          findMany: {
            args: Prisma.ScreenEdgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>[]
          }
          create: {
            args: Prisma.ScreenEdgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>
          }
          createMany: {
            args: Prisma.ScreenEdgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreenEdgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>[]
          }
          delete: {
            args: Prisma.ScreenEdgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>
          }
          update: {
            args: Prisma.ScreenEdgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>
          }
          deleteMany: {
            args: Prisma.ScreenEdgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenEdgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScreenEdgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>[]
          }
          upsert: {
            args: Prisma.ScreenEdgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenEdgePayload>
          }
          aggregate: {
            args: Prisma.ScreenEdgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreenEdge>
          }
          groupBy: {
            args: Prisma.ScreenEdgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenEdgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenEdgeCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenEdgeCountAggregateOutputType> | number
          }
        }
      }
      NodeComment: {
        payload: Prisma.$NodeCommentPayload<ExtArgs>
        fields: Prisma.NodeCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>
          }
          findFirst: {
            args: Prisma.NodeCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>
          }
          findMany: {
            args: Prisma.NodeCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>[]
          }
          create: {
            args: Prisma.NodeCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>
          }
          createMany: {
            args: Prisma.NodeCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>[]
          }
          delete: {
            args: Prisma.NodeCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>
          }
          update: {
            args: Prisma.NodeCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>
          }
          deleteMany: {
            args: Prisma.NodeCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>[]
          }
          upsert: {
            args: Prisma.NodeCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeCommentPayload>
          }
          aggregate: {
            args: Prisma.NodeCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNodeComment>
          }
          groupBy: {
            args: Prisma.NodeCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeCommentCountArgs<ExtArgs>
            result: $Utils.Optional<NodeCommentCountAggregateOutputType> | number
          }
        }
      }
      ExplorationAction: {
        payload: Prisma.$ExplorationActionPayload<ExtArgs>
        fields: Prisma.ExplorationActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExplorationActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExplorationActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>
          }
          findFirst: {
            args: Prisma.ExplorationActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExplorationActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>
          }
          findMany: {
            args: Prisma.ExplorationActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>[]
          }
          create: {
            args: Prisma.ExplorationActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>
          }
          createMany: {
            args: Prisma.ExplorationActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExplorationActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>[]
          }
          delete: {
            args: Prisma.ExplorationActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>
          }
          update: {
            args: Prisma.ExplorationActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>
          }
          deleteMany: {
            args: Prisma.ExplorationActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExplorationActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExplorationActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>[]
          }
          upsert: {
            args: Prisma.ExplorationActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExplorationActionPayload>
          }
          aggregate: {
            args: Prisma.ExplorationActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExplorationAction>
          }
          groupBy: {
            args: Prisma.ExplorationActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExplorationActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExplorationActionCountArgs<ExtArgs>
            result: $Utils.Optional<ExplorationActionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    project?: ProjectOmit
    apkBuild?: ApkBuildOmit
    reviewRun?: ReviewRunOmit
    screenNode?: ScreenNodeOmit
    screenEdge?: ScreenEdgeOmit
    nodeComment?: NodeCommentOmit
    explorationAction?: ExplorationActionOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    builds: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | ProjectCountOutputTypeCountBuildsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApkBuildWhereInput
  }


  /**
   * Count Type ApkBuildCountOutputType
   */

  export type ApkBuildCountOutputType = {
    runs: number
  }

  export type ApkBuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | ApkBuildCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * ApkBuildCountOutputType without action
   */
  export type ApkBuildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuildCountOutputType
     */
    select?: ApkBuildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApkBuildCountOutputType without action
   */
  export type ApkBuildCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRunWhereInput
  }


  /**
   * Count Type ReviewRunCountOutputType
   */

  export type ReviewRunCountOutputType = {
    nodes: number
    edges: number
    actions: number
  }

  export type ReviewRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | ReviewRunCountOutputTypeCountNodesArgs
    edges?: boolean | ReviewRunCountOutputTypeCountEdgesArgs
    actions?: boolean | ReviewRunCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * ReviewRunCountOutputType without action
   */
  export type ReviewRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRunCountOutputType
     */
    select?: ReviewRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewRunCountOutputType without action
   */
  export type ReviewRunCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenNodeWhereInput
  }

  /**
   * ReviewRunCountOutputType without action
   */
  export type ReviewRunCountOutputTypeCountEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenEdgeWhereInput
  }

  /**
   * ReviewRunCountOutputType without action
   */
  export type ReviewRunCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExplorationActionWhereInput
  }


  /**
   * Count Type ScreenNodeCountOutputType
   */

  export type ScreenNodeCountOutputType = {
    outgoingEdges: number
    incomingEdges: number
    comments: number
  }

  export type ScreenNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outgoingEdges?: boolean | ScreenNodeCountOutputTypeCountOutgoingEdgesArgs
    incomingEdges?: boolean | ScreenNodeCountOutputTypeCountIncomingEdgesArgs
    comments?: boolean | ScreenNodeCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ScreenNodeCountOutputType without action
   */
  export type ScreenNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNodeCountOutputType
     */
    select?: ScreenNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScreenNodeCountOutputType without action
   */
  export type ScreenNodeCountOutputTypeCountOutgoingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenEdgeWhereInput
  }

  /**
   * ScreenNodeCountOutputType without action
   */
  export type ScreenNodeCountOutputTypeCountIncomingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenEdgeWhereInput
  }

  /**
   * ScreenNodeCountOutputType without action
   */
  export type ScreenNodeCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeCommentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    builds?: boolean | Project$buildsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | Project$buildsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      builds: Prisma.$ApkBuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    builds<T extends Project$buildsArgs<ExtArgs> = {}>(args?: Subset<T, Project$buildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.builds
   */
  export type Project$buildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    where?: ApkBuildWhereInput
    orderBy?: ApkBuildOrderByWithRelationInput | ApkBuildOrderByWithRelationInput[]
    cursor?: ApkBuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApkBuildScalarFieldEnum | ApkBuildScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ApkBuild
   */

  export type AggregateApkBuild = {
    _count: ApkBuildCountAggregateOutputType | null
    _min: ApkBuildMinAggregateOutputType | null
    _max: ApkBuildMaxAggregateOutputType | null
  }

  export type ApkBuildMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    fileName: string | null
    filePath: string | null
    packageName: string | null
    versionName: string | null
    versionCode: string | null
    uploadedAt: Date | null
  }

  export type ApkBuildMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    fileName: string | null
    filePath: string | null
    packageName: string | null
    versionName: string | null
    versionCode: string | null
    uploadedAt: Date | null
  }

  export type ApkBuildCountAggregateOutputType = {
    id: number
    projectId: number
    fileName: number
    filePath: number
    packageName: number
    versionName: number
    versionCode: number
    uploadedAt: number
    _all: number
  }


  export type ApkBuildMinAggregateInputType = {
    id?: true
    projectId?: true
    fileName?: true
    filePath?: true
    packageName?: true
    versionName?: true
    versionCode?: true
    uploadedAt?: true
  }

  export type ApkBuildMaxAggregateInputType = {
    id?: true
    projectId?: true
    fileName?: true
    filePath?: true
    packageName?: true
    versionName?: true
    versionCode?: true
    uploadedAt?: true
  }

  export type ApkBuildCountAggregateInputType = {
    id?: true
    projectId?: true
    fileName?: true
    filePath?: true
    packageName?: true
    versionName?: true
    versionCode?: true
    uploadedAt?: true
    _all?: true
  }

  export type ApkBuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApkBuild to aggregate.
     */
    where?: ApkBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApkBuilds to fetch.
     */
    orderBy?: ApkBuildOrderByWithRelationInput | ApkBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApkBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApkBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApkBuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApkBuilds
    **/
    _count?: true | ApkBuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApkBuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApkBuildMaxAggregateInputType
  }

  export type GetApkBuildAggregateType<T extends ApkBuildAggregateArgs> = {
        [P in keyof T & keyof AggregateApkBuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApkBuild[P]>
      : GetScalarType<T[P], AggregateApkBuild[P]>
  }




  export type ApkBuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApkBuildWhereInput
    orderBy?: ApkBuildOrderByWithAggregationInput | ApkBuildOrderByWithAggregationInput[]
    by: ApkBuildScalarFieldEnum[] | ApkBuildScalarFieldEnum
    having?: ApkBuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApkBuildCountAggregateInputType | true
    _min?: ApkBuildMinAggregateInputType
    _max?: ApkBuildMaxAggregateInputType
  }

  export type ApkBuildGroupByOutputType = {
    id: string
    projectId: string
    fileName: string
    filePath: string
    packageName: string | null
    versionName: string | null
    versionCode: string | null
    uploadedAt: Date
    _count: ApkBuildCountAggregateOutputType | null
    _min: ApkBuildMinAggregateOutputType | null
    _max: ApkBuildMaxAggregateOutputType | null
  }

  type GetApkBuildGroupByPayload<T extends ApkBuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApkBuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApkBuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApkBuildGroupByOutputType[P]>
            : GetScalarType<T[P], ApkBuildGroupByOutputType[P]>
        }
      >
    >


  export type ApkBuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    filePath?: boolean
    packageName?: boolean
    versionName?: boolean
    versionCode?: boolean
    uploadedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    runs?: boolean | ApkBuild$runsArgs<ExtArgs>
    _count?: boolean | ApkBuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apkBuild"]>

  export type ApkBuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    filePath?: boolean
    packageName?: boolean
    versionName?: boolean
    versionCode?: boolean
    uploadedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apkBuild"]>

  export type ApkBuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    filePath?: boolean
    packageName?: boolean
    versionName?: boolean
    versionCode?: boolean
    uploadedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apkBuild"]>

  export type ApkBuildSelectScalar = {
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    filePath?: boolean
    packageName?: boolean
    versionName?: boolean
    versionCode?: boolean
    uploadedAt?: boolean
  }

  export type ApkBuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "fileName" | "filePath" | "packageName" | "versionName" | "versionCode" | "uploadedAt", ExtArgs["result"]["apkBuild"]>
  export type ApkBuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    runs?: boolean | ApkBuild$runsArgs<ExtArgs>
    _count?: boolean | ApkBuildCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApkBuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ApkBuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ApkBuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApkBuild"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      runs: Prisma.$ReviewRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      fileName: string
      filePath: string
      packageName: string | null
      versionName: string | null
      versionCode: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["apkBuild"]>
    composites: {}
  }

  type ApkBuildGetPayload<S extends boolean | null | undefined | ApkBuildDefaultArgs> = $Result.GetResult<Prisma.$ApkBuildPayload, S>

  type ApkBuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApkBuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApkBuildCountAggregateInputType | true
    }

  export interface ApkBuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApkBuild'], meta: { name: 'ApkBuild' } }
    /**
     * Find zero or one ApkBuild that matches the filter.
     * @param {ApkBuildFindUniqueArgs} args - Arguments to find a ApkBuild
     * @example
     * // Get one ApkBuild
     * const apkBuild = await prisma.apkBuild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApkBuildFindUniqueArgs>(args: SelectSubset<T, ApkBuildFindUniqueArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApkBuild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApkBuildFindUniqueOrThrowArgs} args - Arguments to find a ApkBuild
     * @example
     * // Get one ApkBuild
     * const apkBuild = await prisma.apkBuild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApkBuildFindUniqueOrThrowArgs>(args: SelectSubset<T, ApkBuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApkBuild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApkBuildFindFirstArgs} args - Arguments to find a ApkBuild
     * @example
     * // Get one ApkBuild
     * const apkBuild = await prisma.apkBuild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApkBuildFindFirstArgs>(args?: SelectSubset<T, ApkBuildFindFirstArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApkBuild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApkBuildFindFirstOrThrowArgs} args - Arguments to find a ApkBuild
     * @example
     * // Get one ApkBuild
     * const apkBuild = await prisma.apkBuild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApkBuildFindFirstOrThrowArgs>(args?: SelectSubset<T, ApkBuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApkBuilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApkBuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApkBuilds
     * const apkBuilds = await prisma.apkBuild.findMany()
     * 
     * // Get first 10 ApkBuilds
     * const apkBuilds = await prisma.apkBuild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apkBuildWithIdOnly = await prisma.apkBuild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApkBuildFindManyArgs>(args?: SelectSubset<T, ApkBuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApkBuild.
     * @param {ApkBuildCreateArgs} args - Arguments to create a ApkBuild.
     * @example
     * // Create one ApkBuild
     * const ApkBuild = await prisma.apkBuild.create({
     *   data: {
     *     // ... data to create a ApkBuild
     *   }
     * })
     * 
     */
    create<T extends ApkBuildCreateArgs>(args: SelectSubset<T, ApkBuildCreateArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApkBuilds.
     * @param {ApkBuildCreateManyArgs} args - Arguments to create many ApkBuilds.
     * @example
     * // Create many ApkBuilds
     * const apkBuild = await prisma.apkBuild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApkBuildCreateManyArgs>(args?: SelectSubset<T, ApkBuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApkBuilds and returns the data saved in the database.
     * @param {ApkBuildCreateManyAndReturnArgs} args - Arguments to create many ApkBuilds.
     * @example
     * // Create many ApkBuilds
     * const apkBuild = await prisma.apkBuild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApkBuilds and only return the `id`
     * const apkBuildWithIdOnly = await prisma.apkBuild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApkBuildCreateManyAndReturnArgs>(args?: SelectSubset<T, ApkBuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApkBuild.
     * @param {ApkBuildDeleteArgs} args - Arguments to delete one ApkBuild.
     * @example
     * // Delete one ApkBuild
     * const ApkBuild = await prisma.apkBuild.delete({
     *   where: {
     *     // ... filter to delete one ApkBuild
     *   }
     * })
     * 
     */
    delete<T extends ApkBuildDeleteArgs>(args: SelectSubset<T, ApkBuildDeleteArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApkBuild.
     * @param {ApkBuildUpdateArgs} args - Arguments to update one ApkBuild.
     * @example
     * // Update one ApkBuild
     * const apkBuild = await prisma.apkBuild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApkBuildUpdateArgs>(args: SelectSubset<T, ApkBuildUpdateArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApkBuilds.
     * @param {ApkBuildDeleteManyArgs} args - Arguments to filter ApkBuilds to delete.
     * @example
     * // Delete a few ApkBuilds
     * const { count } = await prisma.apkBuild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApkBuildDeleteManyArgs>(args?: SelectSubset<T, ApkBuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApkBuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApkBuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApkBuilds
     * const apkBuild = await prisma.apkBuild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApkBuildUpdateManyArgs>(args: SelectSubset<T, ApkBuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApkBuilds and returns the data updated in the database.
     * @param {ApkBuildUpdateManyAndReturnArgs} args - Arguments to update many ApkBuilds.
     * @example
     * // Update many ApkBuilds
     * const apkBuild = await prisma.apkBuild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApkBuilds and only return the `id`
     * const apkBuildWithIdOnly = await prisma.apkBuild.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApkBuildUpdateManyAndReturnArgs>(args: SelectSubset<T, ApkBuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApkBuild.
     * @param {ApkBuildUpsertArgs} args - Arguments to update or create a ApkBuild.
     * @example
     * // Update or create a ApkBuild
     * const apkBuild = await prisma.apkBuild.upsert({
     *   create: {
     *     // ... data to create a ApkBuild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApkBuild we want to update
     *   }
     * })
     */
    upsert<T extends ApkBuildUpsertArgs>(args: SelectSubset<T, ApkBuildUpsertArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApkBuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApkBuildCountArgs} args - Arguments to filter ApkBuilds to count.
     * @example
     * // Count the number of ApkBuilds
     * const count = await prisma.apkBuild.count({
     *   where: {
     *     // ... the filter for the ApkBuilds we want to count
     *   }
     * })
    **/
    count<T extends ApkBuildCountArgs>(
      args?: Subset<T, ApkBuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApkBuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApkBuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApkBuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApkBuildAggregateArgs>(args: Subset<T, ApkBuildAggregateArgs>): Prisma.PrismaPromise<GetApkBuildAggregateType<T>>

    /**
     * Group by ApkBuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApkBuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApkBuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApkBuildGroupByArgs['orderBy'] }
        : { orderBy?: ApkBuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApkBuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApkBuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApkBuild model
   */
  readonly fields: ApkBuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApkBuild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApkBuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    runs<T extends ApkBuild$runsArgs<ExtArgs> = {}>(args?: Subset<T, ApkBuild$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApkBuild model
   */
  interface ApkBuildFieldRefs {
    readonly id: FieldRef<"ApkBuild", 'String'>
    readonly projectId: FieldRef<"ApkBuild", 'String'>
    readonly fileName: FieldRef<"ApkBuild", 'String'>
    readonly filePath: FieldRef<"ApkBuild", 'String'>
    readonly packageName: FieldRef<"ApkBuild", 'String'>
    readonly versionName: FieldRef<"ApkBuild", 'String'>
    readonly versionCode: FieldRef<"ApkBuild", 'String'>
    readonly uploadedAt: FieldRef<"ApkBuild", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApkBuild findUnique
   */
  export type ApkBuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * Filter, which ApkBuild to fetch.
     */
    where: ApkBuildWhereUniqueInput
  }

  /**
   * ApkBuild findUniqueOrThrow
   */
  export type ApkBuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * Filter, which ApkBuild to fetch.
     */
    where: ApkBuildWhereUniqueInput
  }

  /**
   * ApkBuild findFirst
   */
  export type ApkBuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * Filter, which ApkBuild to fetch.
     */
    where?: ApkBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApkBuilds to fetch.
     */
    orderBy?: ApkBuildOrderByWithRelationInput | ApkBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApkBuilds.
     */
    cursor?: ApkBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApkBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApkBuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApkBuilds.
     */
    distinct?: ApkBuildScalarFieldEnum | ApkBuildScalarFieldEnum[]
  }

  /**
   * ApkBuild findFirstOrThrow
   */
  export type ApkBuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * Filter, which ApkBuild to fetch.
     */
    where?: ApkBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApkBuilds to fetch.
     */
    orderBy?: ApkBuildOrderByWithRelationInput | ApkBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApkBuilds.
     */
    cursor?: ApkBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApkBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApkBuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApkBuilds.
     */
    distinct?: ApkBuildScalarFieldEnum | ApkBuildScalarFieldEnum[]
  }

  /**
   * ApkBuild findMany
   */
  export type ApkBuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * Filter, which ApkBuilds to fetch.
     */
    where?: ApkBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApkBuilds to fetch.
     */
    orderBy?: ApkBuildOrderByWithRelationInput | ApkBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApkBuilds.
     */
    cursor?: ApkBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApkBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApkBuilds.
     */
    skip?: number
    distinct?: ApkBuildScalarFieldEnum | ApkBuildScalarFieldEnum[]
  }

  /**
   * ApkBuild create
   */
  export type ApkBuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * The data needed to create a ApkBuild.
     */
    data: XOR<ApkBuildCreateInput, ApkBuildUncheckedCreateInput>
  }

  /**
   * ApkBuild createMany
   */
  export type ApkBuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApkBuilds.
     */
    data: ApkBuildCreateManyInput | ApkBuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApkBuild createManyAndReturn
   */
  export type ApkBuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * The data used to create many ApkBuilds.
     */
    data: ApkBuildCreateManyInput | ApkBuildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApkBuild update
   */
  export type ApkBuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * The data needed to update a ApkBuild.
     */
    data: XOR<ApkBuildUpdateInput, ApkBuildUncheckedUpdateInput>
    /**
     * Choose, which ApkBuild to update.
     */
    where: ApkBuildWhereUniqueInput
  }

  /**
   * ApkBuild updateMany
   */
  export type ApkBuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApkBuilds.
     */
    data: XOR<ApkBuildUpdateManyMutationInput, ApkBuildUncheckedUpdateManyInput>
    /**
     * Filter which ApkBuilds to update
     */
    where?: ApkBuildWhereInput
    /**
     * Limit how many ApkBuilds to update.
     */
    limit?: number
  }

  /**
   * ApkBuild updateManyAndReturn
   */
  export type ApkBuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * The data used to update ApkBuilds.
     */
    data: XOR<ApkBuildUpdateManyMutationInput, ApkBuildUncheckedUpdateManyInput>
    /**
     * Filter which ApkBuilds to update
     */
    where?: ApkBuildWhereInput
    /**
     * Limit how many ApkBuilds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApkBuild upsert
   */
  export type ApkBuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * The filter to search for the ApkBuild to update in case it exists.
     */
    where: ApkBuildWhereUniqueInput
    /**
     * In case the ApkBuild found by the `where` argument doesn't exist, create a new ApkBuild with this data.
     */
    create: XOR<ApkBuildCreateInput, ApkBuildUncheckedCreateInput>
    /**
     * In case the ApkBuild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApkBuildUpdateInput, ApkBuildUncheckedUpdateInput>
  }

  /**
   * ApkBuild delete
   */
  export type ApkBuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
    /**
     * Filter which ApkBuild to delete.
     */
    where: ApkBuildWhereUniqueInput
  }

  /**
   * ApkBuild deleteMany
   */
  export type ApkBuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApkBuilds to delete
     */
    where?: ApkBuildWhereInput
    /**
     * Limit how many ApkBuilds to delete.
     */
    limit?: number
  }

  /**
   * ApkBuild.runs
   */
  export type ApkBuild$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    where?: ReviewRunWhereInput
    orderBy?: ReviewRunOrderByWithRelationInput | ReviewRunOrderByWithRelationInput[]
    cursor?: ReviewRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewRunScalarFieldEnum | ReviewRunScalarFieldEnum[]
  }

  /**
   * ApkBuild without action
   */
  export type ApkBuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApkBuild
     */
    select?: ApkBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApkBuild
     */
    omit?: ApkBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApkBuildInclude<ExtArgs> | null
  }


  /**
   * Model ReviewRun
   */

  export type AggregateReviewRun = {
    _count: ReviewRunCountAggregateOutputType | null
    _avg: ReviewRunAvgAggregateOutputType | null
    _sum: ReviewRunSumAggregateOutputType | null
    _min: ReviewRunMinAggregateOutputType | null
    _max: ReviewRunMaxAggregateOutputType | null
  }

  export type ReviewRunAvgAggregateOutputType = {
    maxDepth: number | null
    maxNodes: number | null
    maxTapsPerScreen: number | null
  }

  export type ReviewRunSumAggregateOutputType = {
    maxDepth: number | null
    maxNodes: number | null
    maxTapsPerScreen: number | null
  }

  export type ReviewRunMinAggregateOutputType = {
    id: string | null
    apkBuildId: string | null
    status: $Enums.ReviewRunStatus | null
    maxDepth: number | null
    maxNodes: number | null
    maxTapsPerScreen: number | null
    currentNodeId: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewRunMaxAggregateOutputType = {
    id: string | null
    apkBuildId: string | null
    status: $Enums.ReviewRunStatus | null
    maxDepth: number | null
    maxNodes: number | null
    maxTapsPerScreen: number | null
    currentNodeId: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewRunCountAggregateOutputType = {
    id: number
    apkBuildId: number
    status: number
    maxDepth: number
    maxNodes: number
    maxTapsPerScreen: number
    currentNodeId: number
    startedAt: number
    completedAt: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewRunAvgAggregateInputType = {
    maxDepth?: true
    maxNodes?: true
    maxTapsPerScreen?: true
  }

  export type ReviewRunSumAggregateInputType = {
    maxDepth?: true
    maxNodes?: true
    maxTapsPerScreen?: true
  }

  export type ReviewRunMinAggregateInputType = {
    id?: true
    apkBuildId?: true
    status?: true
    maxDepth?: true
    maxNodes?: true
    maxTapsPerScreen?: true
    currentNodeId?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewRunMaxAggregateInputType = {
    id?: true
    apkBuildId?: true
    status?: true
    maxDepth?: true
    maxNodes?: true
    maxTapsPerScreen?: true
    currentNodeId?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewRunCountAggregateInputType = {
    id?: true
    apkBuildId?: true
    status?: true
    maxDepth?: true
    maxNodes?: true
    maxTapsPerScreen?: true
    currentNodeId?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRun to aggregate.
     */
    where?: ReviewRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRuns to fetch.
     */
    orderBy?: ReviewRunOrderByWithRelationInput | ReviewRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewRuns
    **/
    _count?: true | ReviewRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewRunMaxAggregateInputType
  }

  export type GetReviewRunAggregateType<T extends ReviewRunAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewRun[P]>
      : GetScalarType<T[P], AggregateReviewRun[P]>
  }




  export type ReviewRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRunWhereInput
    orderBy?: ReviewRunOrderByWithAggregationInput | ReviewRunOrderByWithAggregationInput[]
    by: ReviewRunScalarFieldEnum[] | ReviewRunScalarFieldEnum
    having?: ReviewRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewRunCountAggregateInputType | true
    _avg?: ReviewRunAvgAggregateInputType
    _sum?: ReviewRunSumAggregateInputType
    _min?: ReviewRunMinAggregateInputType
    _max?: ReviewRunMaxAggregateInputType
  }

  export type ReviewRunGroupByOutputType = {
    id: string
    apkBuildId: string
    status: $Enums.ReviewRunStatus
    maxDepth: number
    maxNodes: number
    maxTapsPerScreen: number
    currentNodeId: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewRunCountAggregateOutputType | null
    _avg: ReviewRunAvgAggregateOutputType | null
    _sum: ReviewRunSumAggregateOutputType | null
    _min: ReviewRunMinAggregateOutputType | null
    _max: ReviewRunMaxAggregateOutputType | null
  }

  type GetReviewRunGroupByPayload<T extends ReviewRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewRunGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewRunGroupByOutputType[P]>
        }
      >
    >


  export type ReviewRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apkBuildId?: boolean
    status?: boolean
    maxDepth?: boolean
    maxNodes?: boolean
    maxTapsPerScreen?: boolean
    currentNodeId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apkBuild?: boolean | ApkBuildDefaultArgs<ExtArgs>
    nodes?: boolean | ReviewRun$nodesArgs<ExtArgs>
    edges?: boolean | ReviewRun$edgesArgs<ExtArgs>
    actions?: boolean | ReviewRun$actionsArgs<ExtArgs>
    _count?: boolean | ReviewRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRun"]>

  export type ReviewRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apkBuildId?: boolean
    status?: boolean
    maxDepth?: boolean
    maxNodes?: boolean
    maxTapsPerScreen?: boolean
    currentNodeId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apkBuild?: boolean | ApkBuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRun"]>

  export type ReviewRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apkBuildId?: boolean
    status?: boolean
    maxDepth?: boolean
    maxNodes?: boolean
    maxTapsPerScreen?: boolean
    currentNodeId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apkBuild?: boolean | ApkBuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRun"]>

  export type ReviewRunSelectScalar = {
    id?: boolean
    apkBuildId?: boolean
    status?: boolean
    maxDepth?: boolean
    maxNodes?: boolean
    maxTapsPerScreen?: boolean
    currentNodeId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apkBuildId" | "status" | "maxDepth" | "maxNodes" | "maxTapsPerScreen" | "currentNodeId" | "startedAt" | "completedAt" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewRun"]>
  export type ReviewRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apkBuild?: boolean | ApkBuildDefaultArgs<ExtArgs>
    nodes?: boolean | ReviewRun$nodesArgs<ExtArgs>
    edges?: boolean | ReviewRun$edgesArgs<ExtArgs>
    actions?: boolean | ReviewRun$actionsArgs<ExtArgs>
    _count?: boolean | ReviewRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apkBuild?: boolean | ApkBuildDefaultArgs<ExtArgs>
  }
  export type ReviewRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apkBuild?: boolean | ApkBuildDefaultArgs<ExtArgs>
  }

  export type $ReviewRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewRun"
    objects: {
      apkBuild: Prisma.$ApkBuildPayload<ExtArgs>
      nodes: Prisma.$ScreenNodePayload<ExtArgs>[]
      edges: Prisma.$ScreenEdgePayload<ExtArgs>[]
      actions: Prisma.$ExplorationActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apkBuildId: string
      status: $Enums.ReviewRunStatus
      maxDepth: number
      maxNodes: number
      maxTapsPerScreen: number
      /**
       * Node the emulator is believed to be on during interactive exploration.
       */
      currentNodeId: string | null
      startedAt: Date | null
      completedAt: Date | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviewRun"]>
    composites: {}
  }

  type ReviewRunGetPayload<S extends boolean | null | undefined | ReviewRunDefaultArgs> = $Result.GetResult<Prisma.$ReviewRunPayload, S>

  type ReviewRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewRunCountAggregateInputType | true
    }

  export interface ReviewRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewRun'], meta: { name: 'ReviewRun' } }
    /**
     * Find zero or one ReviewRun that matches the filter.
     * @param {ReviewRunFindUniqueArgs} args - Arguments to find a ReviewRun
     * @example
     * // Get one ReviewRun
     * const reviewRun = await prisma.reviewRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewRunFindUniqueArgs>(args: SelectSubset<T, ReviewRunFindUniqueArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewRunFindUniqueOrThrowArgs} args - Arguments to find a ReviewRun
     * @example
     * // Get one ReviewRun
     * const reviewRun = await prisma.reviewRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewRunFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRunFindFirstArgs} args - Arguments to find a ReviewRun
     * @example
     * // Get one ReviewRun
     * const reviewRun = await prisma.reviewRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewRunFindFirstArgs>(args?: SelectSubset<T, ReviewRunFindFirstArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRunFindFirstOrThrowArgs} args - Arguments to find a ReviewRun
     * @example
     * // Get one ReviewRun
     * const reviewRun = await prisma.reviewRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewRunFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewRuns
     * const reviewRuns = await prisma.reviewRun.findMany()
     * 
     * // Get first 10 ReviewRuns
     * const reviewRuns = await prisma.reviewRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewRunWithIdOnly = await prisma.reviewRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewRunFindManyArgs>(args?: SelectSubset<T, ReviewRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewRun.
     * @param {ReviewRunCreateArgs} args - Arguments to create a ReviewRun.
     * @example
     * // Create one ReviewRun
     * const ReviewRun = await prisma.reviewRun.create({
     *   data: {
     *     // ... data to create a ReviewRun
     *   }
     * })
     * 
     */
    create<T extends ReviewRunCreateArgs>(args: SelectSubset<T, ReviewRunCreateArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewRuns.
     * @param {ReviewRunCreateManyArgs} args - Arguments to create many ReviewRuns.
     * @example
     * // Create many ReviewRuns
     * const reviewRun = await prisma.reviewRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewRunCreateManyArgs>(args?: SelectSubset<T, ReviewRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewRuns and returns the data saved in the database.
     * @param {ReviewRunCreateManyAndReturnArgs} args - Arguments to create many ReviewRuns.
     * @example
     * // Create many ReviewRuns
     * const reviewRun = await prisma.reviewRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewRuns and only return the `id`
     * const reviewRunWithIdOnly = await prisma.reviewRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewRunCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewRun.
     * @param {ReviewRunDeleteArgs} args - Arguments to delete one ReviewRun.
     * @example
     * // Delete one ReviewRun
     * const ReviewRun = await prisma.reviewRun.delete({
     *   where: {
     *     // ... filter to delete one ReviewRun
     *   }
     * })
     * 
     */
    delete<T extends ReviewRunDeleteArgs>(args: SelectSubset<T, ReviewRunDeleteArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewRun.
     * @param {ReviewRunUpdateArgs} args - Arguments to update one ReviewRun.
     * @example
     * // Update one ReviewRun
     * const reviewRun = await prisma.reviewRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewRunUpdateArgs>(args: SelectSubset<T, ReviewRunUpdateArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewRuns.
     * @param {ReviewRunDeleteManyArgs} args - Arguments to filter ReviewRuns to delete.
     * @example
     * // Delete a few ReviewRuns
     * const { count } = await prisma.reviewRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewRunDeleteManyArgs>(args?: SelectSubset<T, ReviewRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewRuns
     * const reviewRun = await prisma.reviewRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewRunUpdateManyArgs>(args: SelectSubset<T, ReviewRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewRuns and returns the data updated in the database.
     * @param {ReviewRunUpdateManyAndReturnArgs} args - Arguments to update many ReviewRuns.
     * @example
     * // Update many ReviewRuns
     * const reviewRun = await prisma.reviewRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewRuns and only return the `id`
     * const reviewRunWithIdOnly = await prisma.reviewRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewRunUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewRun.
     * @param {ReviewRunUpsertArgs} args - Arguments to update or create a ReviewRun.
     * @example
     * // Update or create a ReviewRun
     * const reviewRun = await prisma.reviewRun.upsert({
     *   create: {
     *     // ... data to create a ReviewRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewRun we want to update
     *   }
     * })
     */
    upsert<T extends ReviewRunUpsertArgs>(args: SelectSubset<T, ReviewRunUpsertArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRunCountArgs} args - Arguments to filter ReviewRuns to count.
     * @example
     * // Count the number of ReviewRuns
     * const count = await prisma.reviewRun.count({
     *   where: {
     *     // ... the filter for the ReviewRuns we want to count
     *   }
     * })
    **/
    count<T extends ReviewRunCountArgs>(
      args?: Subset<T, ReviewRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewRunAggregateArgs>(args: Subset<T, ReviewRunAggregateArgs>): Prisma.PrismaPromise<GetReviewRunAggregateType<T>>

    /**
     * Group by ReviewRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewRunGroupByArgs['orderBy'] }
        : { orderBy?: ReviewRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewRun model
   */
  readonly fields: ReviewRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apkBuild<T extends ApkBuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApkBuildDefaultArgs<ExtArgs>>): Prisma__ApkBuildClient<$Result.GetResult<Prisma.$ApkBuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodes<T extends ReviewRun$nodesArgs<ExtArgs> = {}>(args?: Subset<T, ReviewRun$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    edges<T extends ReviewRun$edgesArgs<ExtArgs> = {}>(args?: Subset<T, ReviewRun$edgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actions<T extends ReviewRun$actionsArgs<ExtArgs> = {}>(args?: Subset<T, ReviewRun$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewRun model
   */
  interface ReviewRunFieldRefs {
    readonly id: FieldRef<"ReviewRun", 'String'>
    readonly apkBuildId: FieldRef<"ReviewRun", 'String'>
    readonly status: FieldRef<"ReviewRun", 'ReviewRunStatus'>
    readonly maxDepth: FieldRef<"ReviewRun", 'Int'>
    readonly maxNodes: FieldRef<"ReviewRun", 'Int'>
    readonly maxTapsPerScreen: FieldRef<"ReviewRun", 'Int'>
    readonly currentNodeId: FieldRef<"ReviewRun", 'String'>
    readonly startedAt: FieldRef<"ReviewRun", 'DateTime'>
    readonly completedAt: FieldRef<"ReviewRun", 'DateTime'>
    readonly errorMessage: FieldRef<"ReviewRun", 'String'>
    readonly createdAt: FieldRef<"ReviewRun", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewRun findUnique
   */
  export type ReviewRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRun to fetch.
     */
    where: ReviewRunWhereUniqueInput
  }

  /**
   * ReviewRun findUniqueOrThrow
   */
  export type ReviewRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRun to fetch.
     */
    where: ReviewRunWhereUniqueInput
  }

  /**
   * ReviewRun findFirst
   */
  export type ReviewRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRun to fetch.
     */
    where?: ReviewRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRuns to fetch.
     */
    orderBy?: ReviewRunOrderByWithRelationInput | ReviewRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRuns.
     */
    cursor?: ReviewRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRuns.
     */
    distinct?: ReviewRunScalarFieldEnum | ReviewRunScalarFieldEnum[]
  }

  /**
   * ReviewRun findFirstOrThrow
   */
  export type ReviewRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRun to fetch.
     */
    where?: ReviewRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRuns to fetch.
     */
    orderBy?: ReviewRunOrderByWithRelationInput | ReviewRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRuns.
     */
    cursor?: ReviewRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRuns.
     */
    distinct?: ReviewRunScalarFieldEnum | ReviewRunScalarFieldEnum[]
  }

  /**
   * ReviewRun findMany
   */
  export type ReviewRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRuns to fetch.
     */
    where?: ReviewRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRuns to fetch.
     */
    orderBy?: ReviewRunOrderByWithRelationInput | ReviewRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewRuns.
     */
    cursor?: ReviewRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRuns.
     */
    skip?: number
    distinct?: ReviewRunScalarFieldEnum | ReviewRunScalarFieldEnum[]
  }

  /**
   * ReviewRun create
   */
  export type ReviewRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewRun.
     */
    data: XOR<ReviewRunCreateInput, ReviewRunUncheckedCreateInput>
  }

  /**
   * ReviewRun createMany
   */
  export type ReviewRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewRuns.
     */
    data: ReviewRunCreateManyInput | ReviewRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewRun createManyAndReturn
   */
  export type ReviewRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewRuns.
     */
    data: ReviewRunCreateManyInput | ReviewRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewRun update
   */
  export type ReviewRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewRun.
     */
    data: XOR<ReviewRunUpdateInput, ReviewRunUncheckedUpdateInput>
    /**
     * Choose, which ReviewRun to update.
     */
    where: ReviewRunWhereUniqueInput
  }

  /**
   * ReviewRun updateMany
   */
  export type ReviewRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewRuns.
     */
    data: XOR<ReviewRunUpdateManyMutationInput, ReviewRunUncheckedUpdateManyInput>
    /**
     * Filter which ReviewRuns to update
     */
    where?: ReviewRunWhereInput
    /**
     * Limit how many ReviewRuns to update.
     */
    limit?: number
  }

  /**
   * ReviewRun updateManyAndReturn
   */
  export type ReviewRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * The data used to update ReviewRuns.
     */
    data: XOR<ReviewRunUpdateManyMutationInput, ReviewRunUncheckedUpdateManyInput>
    /**
     * Filter which ReviewRuns to update
     */
    where?: ReviewRunWhereInput
    /**
     * Limit how many ReviewRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewRun upsert
   */
  export type ReviewRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewRun to update in case it exists.
     */
    where: ReviewRunWhereUniqueInput
    /**
     * In case the ReviewRun found by the `where` argument doesn't exist, create a new ReviewRun with this data.
     */
    create: XOR<ReviewRunCreateInput, ReviewRunUncheckedCreateInput>
    /**
     * In case the ReviewRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewRunUpdateInput, ReviewRunUncheckedUpdateInput>
  }

  /**
   * ReviewRun delete
   */
  export type ReviewRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
    /**
     * Filter which ReviewRun to delete.
     */
    where: ReviewRunWhereUniqueInput
  }

  /**
   * ReviewRun deleteMany
   */
  export type ReviewRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRuns to delete
     */
    where?: ReviewRunWhereInput
    /**
     * Limit how many ReviewRuns to delete.
     */
    limit?: number
  }

  /**
   * ReviewRun.nodes
   */
  export type ReviewRun$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    where?: ScreenNodeWhereInput
    orderBy?: ScreenNodeOrderByWithRelationInput | ScreenNodeOrderByWithRelationInput[]
    cursor?: ScreenNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreenNodeScalarFieldEnum | ScreenNodeScalarFieldEnum[]
  }

  /**
   * ReviewRun.edges
   */
  export type ReviewRun$edgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    where?: ScreenEdgeWhereInput
    orderBy?: ScreenEdgeOrderByWithRelationInput | ScreenEdgeOrderByWithRelationInput[]
    cursor?: ScreenEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreenEdgeScalarFieldEnum | ScreenEdgeScalarFieldEnum[]
  }

  /**
   * ReviewRun.actions
   */
  export type ReviewRun$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    where?: ExplorationActionWhereInput
    orderBy?: ExplorationActionOrderByWithRelationInput | ExplorationActionOrderByWithRelationInput[]
    cursor?: ExplorationActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExplorationActionScalarFieldEnum | ExplorationActionScalarFieldEnum[]
  }

  /**
   * ReviewRun without action
   */
  export type ReviewRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRun
     */
    select?: ReviewRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRun
     */
    omit?: ReviewRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRunInclude<ExtArgs> | null
  }


  /**
   * Model ScreenNode
   */

  export type AggregateScreenNode = {
    _count: ScreenNodeCountAggregateOutputType | null
    _avg: ScreenNodeAvgAggregateOutputType | null
    _sum: ScreenNodeSumAggregateOutputType | null
    _min: ScreenNodeMinAggregateOutputType | null
    _max: ScreenNodeMaxAggregateOutputType | null
  }

  export type ScreenNodeAvgAggregateOutputType = {
    positionX: number | null
    positionY: number | null
    depth: number | null
    clickableCount: number | null
  }

  export type ScreenNodeSumAggregateOutputType = {
    positionX: number | null
    positionY: number | null
    depth: number | null
    clickableCount: number | null
  }

  export type ScreenNodeMinAggregateOutputType = {
    id: string | null
    reviewRunId: string | null
    screenshotPath: string | null
    activityName: string | null
    stateName: string | null
    name: string | null
    flowName: string | null
    nodeType: string | null
    positionX: number | null
    positionY: number | null
    depth: number | null
    hash: string | null
    clickableCount: number | null
    createdAt: Date | null
  }

  export type ScreenNodeMaxAggregateOutputType = {
    id: string | null
    reviewRunId: string | null
    screenshotPath: string | null
    activityName: string | null
    stateName: string | null
    name: string | null
    flowName: string | null
    nodeType: string | null
    positionX: number | null
    positionY: number | null
    depth: number | null
    hash: string | null
    clickableCount: number | null
    createdAt: Date | null
  }

  export type ScreenNodeCountAggregateOutputType = {
    id: number
    reviewRunId: number
    screenshotPath: number
    activityName: number
    stateName: number
    name: number
    flowName: number
    nodeType: number
    positionX: number
    positionY: number
    uiTreeJson: number
    depth: number
    hash: number
    clickableCount: number
    createdAt: number
    _all: number
  }


  export type ScreenNodeAvgAggregateInputType = {
    positionX?: true
    positionY?: true
    depth?: true
    clickableCount?: true
  }

  export type ScreenNodeSumAggregateInputType = {
    positionX?: true
    positionY?: true
    depth?: true
    clickableCount?: true
  }

  export type ScreenNodeMinAggregateInputType = {
    id?: true
    reviewRunId?: true
    screenshotPath?: true
    activityName?: true
    stateName?: true
    name?: true
    flowName?: true
    nodeType?: true
    positionX?: true
    positionY?: true
    depth?: true
    hash?: true
    clickableCount?: true
    createdAt?: true
  }

  export type ScreenNodeMaxAggregateInputType = {
    id?: true
    reviewRunId?: true
    screenshotPath?: true
    activityName?: true
    stateName?: true
    name?: true
    flowName?: true
    nodeType?: true
    positionX?: true
    positionY?: true
    depth?: true
    hash?: true
    clickableCount?: true
    createdAt?: true
  }

  export type ScreenNodeCountAggregateInputType = {
    id?: true
    reviewRunId?: true
    screenshotPath?: true
    activityName?: true
    stateName?: true
    name?: true
    flowName?: true
    nodeType?: true
    positionX?: true
    positionY?: true
    uiTreeJson?: true
    depth?: true
    hash?: true
    clickableCount?: true
    createdAt?: true
    _all?: true
  }

  export type ScreenNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreenNode to aggregate.
     */
    where?: ScreenNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenNodes to fetch.
     */
    orderBy?: ScreenNodeOrderByWithRelationInput | ScreenNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScreenNodes
    **/
    _count?: true | ScreenNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreenNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreenNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenNodeMaxAggregateInputType
  }

  export type GetScreenNodeAggregateType<T extends ScreenNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateScreenNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreenNode[P]>
      : GetScalarType<T[P], AggregateScreenNode[P]>
  }




  export type ScreenNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenNodeWhereInput
    orderBy?: ScreenNodeOrderByWithAggregationInput | ScreenNodeOrderByWithAggregationInput[]
    by: ScreenNodeScalarFieldEnum[] | ScreenNodeScalarFieldEnum
    having?: ScreenNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenNodeCountAggregateInputType | true
    _avg?: ScreenNodeAvgAggregateInputType
    _sum?: ScreenNodeSumAggregateInputType
    _min?: ScreenNodeMinAggregateInputType
    _max?: ScreenNodeMaxAggregateInputType
  }

  export type ScreenNodeGroupByOutputType = {
    id: string
    reviewRunId: string
    screenshotPath: string
    activityName: string | null
    stateName: string | null
    name: string | null
    flowName: string | null
    nodeType: string | null
    positionX: number | null
    positionY: number | null
    uiTreeJson: JsonValue | null
    depth: number
    hash: string
    clickableCount: number
    createdAt: Date
    _count: ScreenNodeCountAggregateOutputType | null
    _avg: ScreenNodeAvgAggregateOutputType | null
    _sum: ScreenNodeSumAggregateOutputType | null
    _min: ScreenNodeMinAggregateOutputType | null
    _max: ScreenNodeMaxAggregateOutputType | null
  }

  type GetScreenNodeGroupByPayload<T extends ScreenNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenNodeGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenNodeGroupByOutputType[P]>
        }
      >
    >


  export type ScreenNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    screenshotPath?: boolean
    activityName?: boolean
    stateName?: boolean
    name?: boolean
    flowName?: boolean
    nodeType?: boolean
    positionX?: boolean
    positionY?: boolean
    uiTreeJson?: boolean
    depth?: boolean
    hash?: boolean
    clickableCount?: boolean
    createdAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    outgoingEdges?: boolean | ScreenNode$outgoingEdgesArgs<ExtArgs>
    incomingEdges?: boolean | ScreenNode$incomingEdgesArgs<ExtArgs>
    comments?: boolean | ScreenNode$commentsArgs<ExtArgs>
    _count?: boolean | ScreenNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenNode"]>

  export type ScreenNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    screenshotPath?: boolean
    activityName?: boolean
    stateName?: boolean
    name?: boolean
    flowName?: boolean
    nodeType?: boolean
    positionX?: boolean
    positionY?: boolean
    uiTreeJson?: boolean
    depth?: boolean
    hash?: boolean
    clickableCount?: boolean
    createdAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenNode"]>

  export type ScreenNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    screenshotPath?: boolean
    activityName?: boolean
    stateName?: boolean
    name?: boolean
    flowName?: boolean
    nodeType?: boolean
    positionX?: boolean
    positionY?: boolean
    uiTreeJson?: boolean
    depth?: boolean
    hash?: boolean
    clickableCount?: boolean
    createdAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenNode"]>

  export type ScreenNodeSelectScalar = {
    id?: boolean
    reviewRunId?: boolean
    screenshotPath?: boolean
    activityName?: boolean
    stateName?: boolean
    name?: boolean
    flowName?: boolean
    nodeType?: boolean
    positionX?: boolean
    positionY?: boolean
    uiTreeJson?: boolean
    depth?: boolean
    hash?: boolean
    clickableCount?: boolean
    createdAt?: boolean
  }

  export type ScreenNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewRunId" | "screenshotPath" | "activityName" | "stateName" | "name" | "flowName" | "nodeType" | "positionX" | "positionY" | "uiTreeJson" | "depth" | "hash" | "clickableCount" | "createdAt", ExtArgs["result"]["screenNode"]>
  export type ScreenNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    outgoingEdges?: boolean | ScreenNode$outgoingEdgesArgs<ExtArgs>
    incomingEdges?: boolean | ScreenNode$incomingEdgesArgs<ExtArgs>
    comments?: boolean | ScreenNode$commentsArgs<ExtArgs>
    _count?: boolean | ScreenNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScreenNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }
  export type ScreenNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }

  export type $ScreenNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScreenNode"
    objects: {
      reviewRun: Prisma.$ReviewRunPayload<ExtArgs>
      outgoingEdges: Prisma.$ScreenEdgePayload<ExtArgs>[]
      incomingEdges: Prisma.$ScreenEdgePayload<ExtArgs>[]
      comments: Prisma.$NodeCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewRunId: string
      screenshotPath: string
      activityName: string | null
      stateName: string | null
      /**
       * User-editable display name (falls back to stateName / activityName).
       */
      name: string | null
      flowName: string | null
      /**
       * page | modal | bottom_sheet | dropdown | tab | error | empty | loading | unknown
       */
      nodeType: string | null
      positionX: number | null
      positionY: number | null
      uiTreeJson: Prisma.JsonValue | null
      depth: number
      hash: string
      clickableCount: number
      createdAt: Date
    }, ExtArgs["result"]["screenNode"]>
    composites: {}
  }

  type ScreenNodeGetPayload<S extends boolean | null | undefined | ScreenNodeDefaultArgs> = $Result.GetResult<Prisma.$ScreenNodePayload, S>

  type ScreenNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreenNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreenNodeCountAggregateInputType | true
    }

  export interface ScreenNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScreenNode'], meta: { name: 'ScreenNode' } }
    /**
     * Find zero or one ScreenNode that matches the filter.
     * @param {ScreenNodeFindUniqueArgs} args - Arguments to find a ScreenNode
     * @example
     * // Get one ScreenNode
     * const screenNode = await prisma.screenNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenNodeFindUniqueArgs>(args: SelectSubset<T, ScreenNodeFindUniqueArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScreenNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreenNodeFindUniqueOrThrowArgs} args - Arguments to find a ScreenNode
     * @example
     * // Get one ScreenNode
     * const screenNode = await prisma.screenNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreenNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenNodeFindFirstArgs} args - Arguments to find a ScreenNode
     * @example
     * // Get one ScreenNode
     * const screenNode = await prisma.screenNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenNodeFindFirstArgs>(args?: SelectSubset<T, ScreenNodeFindFirstArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreenNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenNodeFindFirstOrThrowArgs} args - Arguments to find a ScreenNode
     * @example
     * // Get one ScreenNode
     * const screenNode = await prisma.screenNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScreenNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScreenNodes
     * const screenNodes = await prisma.screenNode.findMany()
     * 
     * // Get first 10 ScreenNodes
     * const screenNodes = await prisma.screenNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screenNodeWithIdOnly = await prisma.screenNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreenNodeFindManyArgs>(args?: SelectSubset<T, ScreenNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScreenNode.
     * @param {ScreenNodeCreateArgs} args - Arguments to create a ScreenNode.
     * @example
     * // Create one ScreenNode
     * const ScreenNode = await prisma.screenNode.create({
     *   data: {
     *     // ... data to create a ScreenNode
     *   }
     * })
     * 
     */
    create<T extends ScreenNodeCreateArgs>(args: SelectSubset<T, ScreenNodeCreateArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScreenNodes.
     * @param {ScreenNodeCreateManyArgs} args - Arguments to create many ScreenNodes.
     * @example
     * // Create many ScreenNodes
     * const screenNode = await prisma.screenNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenNodeCreateManyArgs>(args?: SelectSubset<T, ScreenNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScreenNodes and returns the data saved in the database.
     * @param {ScreenNodeCreateManyAndReturnArgs} args - Arguments to create many ScreenNodes.
     * @example
     * // Create many ScreenNodes
     * const screenNode = await prisma.screenNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScreenNodes and only return the `id`
     * const screenNodeWithIdOnly = await prisma.screenNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreenNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreenNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScreenNode.
     * @param {ScreenNodeDeleteArgs} args - Arguments to delete one ScreenNode.
     * @example
     * // Delete one ScreenNode
     * const ScreenNode = await prisma.screenNode.delete({
     *   where: {
     *     // ... filter to delete one ScreenNode
     *   }
     * })
     * 
     */
    delete<T extends ScreenNodeDeleteArgs>(args: SelectSubset<T, ScreenNodeDeleteArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScreenNode.
     * @param {ScreenNodeUpdateArgs} args - Arguments to update one ScreenNode.
     * @example
     * // Update one ScreenNode
     * const screenNode = await prisma.screenNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenNodeUpdateArgs>(args: SelectSubset<T, ScreenNodeUpdateArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScreenNodes.
     * @param {ScreenNodeDeleteManyArgs} args - Arguments to filter ScreenNodes to delete.
     * @example
     * // Delete a few ScreenNodes
     * const { count } = await prisma.screenNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenNodeDeleteManyArgs>(args?: SelectSubset<T, ScreenNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreenNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScreenNodes
     * const screenNode = await prisma.screenNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenNodeUpdateManyArgs>(args: SelectSubset<T, ScreenNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreenNodes and returns the data updated in the database.
     * @param {ScreenNodeUpdateManyAndReturnArgs} args - Arguments to update many ScreenNodes.
     * @example
     * // Update many ScreenNodes
     * const screenNode = await prisma.screenNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScreenNodes and only return the `id`
     * const screenNodeWithIdOnly = await prisma.screenNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScreenNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ScreenNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScreenNode.
     * @param {ScreenNodeUpsertArgs} args - Arguments to update or create a ScreenNode.
     * @example
     * // Update or create a ScreenNode
     * const screenNode = await prisma.screenNode.upsert({
     *   create: {
     *     // ... data to create a ScreenNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScreenNode we want to update
     *   }
     * })
     */
    upsert<T extends ScreenNodeUpsertArgs>(args: SelectSubset<T, ScreenNodeUpsertArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScreenNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenNodeCountArgs} args - Arguments to filter ScreenNodes to count.
     * @example
     * // Count the number of ScreenNodes
     * const count = await prisma.screenNode.count({
     *   where: {
     *     // ... the filter for the ScreenNodes we want to count
     *   }
     * })
    **/
    count<T extends ScreenNodeCountArgs>(
      args?: Subset<T, ScreenNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScreenNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScreenNodeAggregateArgs>(args: Subset<T, ScreenNodeAggregateArgs>): Prisma.PrismaPromise<GetScreenNodeAggregateType<T>>

    /**
     * Group by ScreenNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScreenNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenNodeGroupByArgs['orderBy'] }
        : { orderBy?: ScreenNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScreenNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScreenNode model
   */
  readonly fields: ScreenNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScreenNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewRun<T extends ReviewRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewRunDefaultArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outgoingEdges<T extends ScreenNode$outgoingEdgesArgs<ExtArgs> = {}>(args?: Subset<T, ScreenNode$outgoingEdgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingEdges<T extends ScreenNode$incomingEdgesArgs<ExtArgs> = {}>(args?: Subset<T, ScreenNode$incomingEdgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends ScreenNode$commentsArgs<ExtArgs> = {}>(args?: Subset<T, ScreenNode$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScreenNode model
   */
  interface ScreenNodeFieldRefs {
    readonly id: FieldRef<"ScreenNode", 'String'>
    readonly reviewRunId: FieldRef<"ScreenNode", 'String'>
    readonly screenshotPath: FieldRef<"ScreenNode", 'String'>
    readonly activityName: FieldRef<"ScreenNode", 'String'>
    readonly stateName: FieldRef<"ScreenNode", 'String'>
    readonly name: FieldRef<"ScreenNode", 'String'>
    readonly flowName: FieldRef<"ScreenNode", 'String'>
    readonly nodeType: FieldRef<"ScreenNode", 'String'>
    readonly positionX: FieldRef<"ScreenNode", 'Float'>
    readonly positionY: FieldRef<"ScreenNode", 'Float'>
    readonly uiTreeJson: FieldRef<"ScreenNode", 'Json'>
    readonly depth: FieldRef<"ScreenNode", 'Int'>
    readonly hash: FieldRef<"ScreenNode", 'String'>
    readonly clickableCount: FieldRef<"ScreenNode", 'Int'>
    readonly createdAt: FieldRef<"ScreenNode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScreenNode findUnique
   */
  export type ScreenNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenNode to fetch.
     */
    where: ScreenNodeWhereUniqueInput
  }

  /**
   * ScreenNode findUniqueOrThrow
   */
  export type ScreenNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenNode to fetch.
     */
    where: ScreenNodeWhereUniqueInput
  }

  /**
   * ScreenNode findFirst
   */
  export type ScreenNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenNode to fetch.
     */
    where?: ScreenNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenNodes to fetch.
     */
    orderBy?: ScreenNodeOrderByWithRelationInput | ScreenNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreenNodes.
     */
    cursor?: ScreenNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreenNodes.
     */
    distinct?: ScreenNodeScalarFieldEnum | ScreenNodeScalarFieldEnum[]
  }

  /**
   * ScreenNode findFirstOrThrow
   */
  export type ScreenNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenNode to fetch.
     */
    where?: ScreenNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenNodes to fetch.
     */
    orderBy?: ScreenNodeOrderByWithRelationInput | ScreenNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreenNodes.
     */
    cursor?: ScreenNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreenNodes.
     */
    distinct?: ScreenNodeScalarFieldEnum | ScreenNodeScalarFieldEnum[]
  }

  /**
   * ScreenNode findMany
   */
  export type ScreenNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenNodes to fetch.
     */
    where?: ScreenNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenNodes to fetch.
     */
    orderBy?: ScreenNodeOrderByWithRelationInput | ScreenNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScreenNodes.
     */
    cursor?: ScreenNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenNodes.
     */
    skip?: number
    distinct?: ScreenNodeScalarFieldEnum | ScreenNodeScalarFieldEnum[]
  }

  /**
   * ScreenNode create
   */
  export type ScreenNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ScreenNode.
     */
    data: XOR<ScreenNodeCreateInput, ScreenNodeUncheckedCreateInput>
  }

  /**
   * ScreenNode createMany
   */
  export type ScreenNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScreenNodes.
     */
    data: ScreenNodeCreateManyInput | ScreenNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScreenNode createManyAndReturn
   */
  export type ScreenNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * The data used to create many ScreenNodes.
     */
    data: ScreenNodeCreateManyInput | ScreenNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScreenNode update
   */
  export type ScreenNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ScreenNode.
     */
    data: XOR<ScreenNodeUpdateInput, ScreenNodeUncheckedUpdateInput>
    /**
     * Choose, which ScreenNode to update.
     */
    where: ScreenNodeWhereUniqueInput
  }

  /**
   * ScreenNode updateMany
   */
  export type ScreenNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScreenNodes.
     */
    data: XOR<ScreenNodeUpdateManyMutationInput, ScreenNodeUncheckedUpdateManyInput>
    /**
     * Filter which ScreenNodes to update
     */
    where?: ScreenNodeWhereInput
    /**
     * Limit how many ScreenNodes to update.
     */
    limit?: number
  }

  /**
   * ScreenNode updateManyAndReturn
   */
  export type ScreenNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * The data used to update ScreenNodes.
     */
    data: XOR<ScreenNodeUpdateManyMutationInput, ScreenNodeUncheckedUpdateManyInput>
    /**
     * Filter which ScreenNodes to update
     */
    where?: ScreenNodeWhereInput
    /**
     * Limit how many ScreenNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScreenNode upsert
   */
  export type ScreenNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ScreenNode to update in case it exists.
     */
    where: ScreenNodeWhereUniqueInput
    /**
     * In case the ScreenNode found by the `where` argument doesn't exist, create a new ScreenNode with this data.
     */
    create: XOR<ScreenNodeCreateInput, ScreenNodeUncheckedCreateInput>
    /**
     * In case the ScreenNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenNodeUpdateInput, ScreenNodeUncheckedUpdateInput>
  }

  /**
   * ScreenNode delete
   */
  export type ScreenNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    /**
     * Filter which ScreenNode to delete.
     */
    where: ScreenNodeWhereUniqueInput
  }

  /**
   * ScreenNode deleteMany
   */
  export type ScreenNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreenNodes to delete
     */
    where?: ScreenNodeWhereInput
    /**
     * Limit how many ScreenNodes to delete.
     */
    limit?: number
  }

  /**
   * ScreenNode.outgoingEdges
   */
  export type ScreenNode$outgoingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    where?: ScreenEdgeWhereInput
    orderBy?: ScreenEdgeOrderByWithRelationInput | ScreenEdgeOrderByWithRelationInput[]
    cursor?: ScreenEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreenEdgeScalarFieldEnum | ScreenEdgeScalarFieldEnum[]
  }

  /**
   * ScreenNode.incomingEdges
   */
  export type ScreenNode$incomingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    where?: ScreenEdgeWhereInput
    orderBy?: ScreenEdgeOrderByWithRelationInput | ScreenEdgeOrderByWithRelationInput[]
    cursor?: ScreenEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreenEdgeScalarFieldEnum | ScreenEdgeScalarFieldEnum[]
  }

  /**
   * ScreenNode.comments
   */
  export type ScreenNode$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    where?: NodeCommentWhereInput
    orderBy?: NodeCommentOrderByWithRelationInput | NodeCommentOrderByWithRelationInput[]
    cursor?: NodeCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeCommentScalarFieldEnum | NodeCommentScalarFieldEnum[]
  }

  /**
   * ScreenNode without action
   */
  export type ScreenNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
  }


  /**
   * Model ScreenEdge
   */

  export type AggregateScreenEdge = {
    _count: ScreenEdgeCountAggregateOutputType | null
    _min: ScreenEdgeMinAggregateOutputType | null
    _max: ScreenEdgeMaxAggregateOutputType | null
  }

  export type ScreenEdgeMinAggregateOutputType = {
    id: string | null
    reviewRunId: string | null
    fromNodeId: string | null
    toNodeId: string | null
    actionType: string | null
    targetLabel: string | null
    targetText: string | null
    createdAt: Date | null
  }

  export type ScreenEdgeMaxAggregateOutputType = {
    id: string | null
    reviewRunId: string | null
    fromNodeId: string | null
    toNodeId: string | null
    actionType: string | null
    targetLabel: string | null
    targetText: string | null
    createdAt: Date | null
  }

  export type ScreenEdgeCountAggregateOutputType = {
    id: number
    reviewRunId: number
    fromNodeId: number
    toNodeId: number
    actionType: number
    targetLabel: number
    targetText: number
    targetBounds: number
    createdAt: number
    _all: number
  }


  export type ScreenEdgeMinAggregateInputType = {
    id?: true
    reviewRunId?: true
    fromNodeId?: true
    toNodeId?: true
    actionType?: true
    targetLabel?: true
    targetText?: true
    createdAt?: true
  }

  export type ScreenEdgeMaxAggregateInputType = {
    id?: true
    reviewRunId?: true
    fromNodeId?: true
    toNodeId?: true
    actionType?: true
    targetLabel?: true
    targetText?: true
    createdAt?: true
  }

  export type ScreenEdgeCountAggregateInputType = {
    id?: true
    reviewRunId?: true
    fromNodeId?: true
    toNodeId?: true
    actionType?: true
    targetLabel?: true
    targetText?: true
    targetBounds?: true
    createdAt?: true
    _all?: true
  }

  export type ScreenEdgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreenEdge to aggregate.
     */
    where?: ScreenEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenEdges to fetch.
     */
    orderBy?: ScreenEdgeOrderByWithRelationInput | ScreenEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScreenEdges
    **/
    _count?: true | ScreenEdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenEdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenEdgeMaxAggregateInputType
  }

  export type GetScreenEdgeAggregateType<T extends ScreenEdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateScreenEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreenEdge[P]>
      : GetScalarType<T[P], AggregateScreenEdge[P]>
  }




  export type ScreenEdgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenEdgeWhereInput
    orderBy?: ScreenEdgeOrderByWithAggregationInput | ScreenEdgeOrderByWithAggregationInput[]
    by: ScreenEdgeScalarFieldEnum[] | ScreenEdgeScalarFieldEnum
    having?: ScreenEdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenEdgeCountAggregateInputType | true
    _min?: ScreenEdgeMinAggregateInputType
    _max?: ScreenEdgeMaxAggregateInputType
  }

  export type ScreenEdgeGroupByOutputType = {
    id: string
    reviewRunId: string
    fromNodeId: string | null
    toNodeId: string
    actionType: string
    targetLabel: string | null
    targetText: string | null
    targetBounds: JsonValue | null
    createdAt: Date
    _count: ScreenEdgeCountAggregateOutputType | null
    _min: ScreenEdgeMinAggregateOutputType | null
    _max: ScreenEdgeMaxAggregateOutputType | null
  }

  type GetScreenEdgeGroupByPayload<T extends ScreenEdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenEdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenEdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenEdgeGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenEdgeGroupByOutputType[P]>
        }
      >
    >


  export type ScreenEdgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    actionType?: boolean
    targetLabel?: boolean
    targetText?: boolean
    targetBounds?: boolean
    createdAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    fromNode?: boolean | ScreenEdge$fromNodeArgs<ExtArgs>
    toNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenEdge"]>

  export type ScreenEdgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    actionType?: boolean
    targetLabel?: boolean
    targetText?: boolean
    targetBounds?: boolean
    createdAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    fromNode?: boolean | ScreenEdge$fromNodeArgs<ExtArgs>
    toNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenEdge"]>

  export type ScreenEdgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    actionType?: boolean
    targetLabel?: boolean
    targetText?: boolean
    targetBounds?: boolean
    createdAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    fromNode?: boolean | ScreenEdge$fromNodeArgs<ExtArgs>
    toNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenEdge"]>

  export type ScreenEdgeSelectScalar = {
    id?: boolean
    reviewRunId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    actionType?: boolean
    targetLabel?: boolean
    targetText?: boolean
    targetBounds?: boolean
    createdAt?: boolean
  }

  export type ScreenEdgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewRunId" | "fromNodeId" | "toNodeId" | "actionType" | "targetLabel" | "targetText" | "targetBounds" | "createdAt", ExtArgs["result"]["screenEdge"]>
  export type ScreenEdgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    fromNode?: boolean | ScreenEdge$fromNodeArgs<ExtArgs>
    toNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }
  export type ScreenEdgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    fromNode?: boolean | ScreenEdge$fromNodeArgs<ExtArgs>
    toNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }
  export type ScreenEdgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
    fromNode?: boolean | ScreenEdge$fromNodeArgs<ExtArgs>
    toNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }

  export type $ScreenEdgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScreenEdge"
    objects: {
      reviewRun: Prisma.$ReviewRunPayload<ExtArgs>
      fromNode: Prisma.$ScreenNodePayload<ExtArgs> | null
      toNode: Prisma.$ScreenNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewRunId: string
      fromNodeId: string | null
      toNodeId: string
      actionType: string
      targetLabel: string | null
      targetText: string | null
      targetBounds: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["screenEdge"]>
    composites: {}
  }

  type ScreenEdgeGetPayload<S extends boolean | null | undefined | ScreenEdgeDefaultArgs> = $Result.GetResult<Prisma.$ScreenEdgePayload, S>

  type ScreenEdgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreenEdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreenEdgeCountAggregateInputType | true
    }

  export interface ScreenEdgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScreenEdge'], meta: { name: 'ScreenEdge' } }
    /**
     * Find zero or one ScreenEdge that matches the filter.
     * @param {ScreenEdgeFindUniqueArgs} args - Arguments to find a ScreenEdge
     * @example
     * // Get one ScreenEdge
     * const screenEdge = await prisma.screenEdge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenEdgeFindUniqueArgs>(args: SelectSubset<T, ScreenEdgeFindUniqueArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScreenEdge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreenEdgeFindUniqueOrThrowArgs} args - Arguments to find a ScreenEdge
     * @example
     * // Get one ScreenEdge
     * const screenEdge = await prisma.screenEdge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenEdgeFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenEdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreenEdge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenEdgeFindFirstArgs} args - Arguments to find a ScreenEdge
     * @example
     * // Get one ScreenEdge
     * const screenEdge = await prisma.screenEdge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenEdgeFindFirstArgs>(args?: SelectSubset<T, ScreenEdgeFindFirstArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreenEdge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenEdgeFindFirstOrThrowArgs} args - Arguments to find a ScreenEdge
     * @example
     * // Get one ScreenEdge
     * const screenEdge = await prisma.screenEdge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenEdgeFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenEdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScreenEdges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenEdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScreenEdges
     * const screenEdges = await prisma.screenEdge.findMany()
     * 
     * // Get first 10 ScreenEdges
     * const screenEdges = await prisma.screenEdge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screenEdgeWithIdOnly = await prisma.screenEdge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreenEdgeFindManyArgs>(args?: SelectSubset<T, ScreenEdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScreenEdge.
     * @param {ScreenEdgeCreateArgs} args - Arguments to create a ScreenEdge.
     * @example
     * // Create one ScreenEdge
     * const ScreenEdge = await prisma.screenEdge.create({
     *   data: {
     *     // ... data to create a ScreenEdge
     *   }
     * })
     * 
     */
    create<T extends ScreenEdgeCreateArgs>(args: SelectSubset<T, ScreenEdgeCreateArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScreenEdges.
     * @param {ScreenEdgeCreateManyArgs} args - Arguments to create many ScreenEdges.
     * @example
     * // Create many ScreenEdges
     * const screenEdge = await prisma.screenEdge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenEdgeCreateManyArgs>(args?: SelectSubset<T, ScreenEdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScreenEdges and returns the data saved in the database.
     * @param {ScreenEdgeCreateManyAndReturnArgs} args - Arguments to create many ScreenEdges.
     * @example
     * // Create many ScreenEdges
     * const screenEdge = await prisma.screenEdge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScreenEdges and only return the `id`
     * const screenEdgeWithIdOnly = await prisma.screenEdge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreenEdgeCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreenEdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScreenEdge.
     * @param {ScreenEdgeDeleteArgs} args - Arguments to delete one ScreenEdge.
     * @example
     * // Delete one ScreenEdge
     * const ScreenEdge = await prisma.screenEdge.delete({
     *   where: {
     *     // ... filter to delete one ScreenEdge
     *   }
     * })
     * 
     */
    delete<T extends ScreenEdgeDeleteArgs>(args: SelectSubset<T, ScreenEdgeDeleteArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScreenEdge.
     * @param {ScreenEdgeUpdateArgs} args - Arguments to update one ScreenEdge.
     * @example
     * // Update one ScreenEdge
     * const screenEdge = await prisma.screenEdge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenEdgeUpdateArgs>(args: SelectSubset<T, ScreenEdgeUpdateArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScreenEdges.
     * @param {ScreenEdgeDeleteManyArgs} args - Arguments to filter ScreenEdges to delete.
     * @example
     * // Delete a few ScreenEdges
     * const { count } = await prisma.screenEdge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenEdgeDeleteManyArgs>(args?: SelectSubset<T, ScreenEdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreenEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenEdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScreenEdges
     * const screenEdge = await prisma.screenEdge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenEdgeUpdateManyArgs>(args: SelectSubset<T, ScreenEdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreenEdges and returns the data updated in the database.
     * @param {ScreenEdgeUpdateManyAndReturnArgs} args - Arguments to update many ScreenEdges.
     * @example
     * // Update many ScreenEdges
     * const screenEdge = await prisma.screenEdge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScreenEdges and only return the `id`
     * const screenEdgeWithIdOnly = await prisma.screenEdge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScreenEdgeUpdateManyAndReturnArgs>(args: SelectSubset<T, ScreenEdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScreenEdge.
     * @param {ScreenEdgeUpsertArgs} args - Arguments to update or create a ScreenEdge.
     * @example
     * // Update or create a ScreenEdge
     * const screenEdge = await prisma.screenEdge.upsert({
     *   create: {
     *     // ... data to create a ScreenEdge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScreenEdge we want to update
     *   }
     * })
     */
    upsert<T extends ScreenEdgeUpsertArgs>(args: SelectSubset<T, ScreenEdgeUpsertArgs<ExtArgs>>): Prisma__ScreenEdgeClient<$Result.GetResult<Prisma.$ScreenEdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScreenEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenEdgeCountArgs} args - Arguments to filter ScreenEdges to count.
     * @example
     * // Count the number of ScreenEdges
     * const count = await prisma.screenEdge.count({
     *   where: {
     *     // ... the filter for the ScreenEdges we want to count
     *   }
     * })
    **/
    count<T extends ScreenEdgeCountArgs>(
      args?: Subset<T, ScreenEdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenEdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScreenEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenEdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScreenEdgeAggregateArgs>(args: Subset<T, ScreenEdgeAggregateArgs>): Prisma.PrismaPromise<GetScreenEdgeAggregateType<T>>

    /**
     * Group by ScreenEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenEdgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScreenEdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenEdgeGroupByArgs['orderBy'] }
        : { orderBy?: ScreenEdgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScreenEdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScreenEdge model
   */
  readonly fields: ScreenEdgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScreenEdge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenEdgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewRun<T extends ReviewRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewRunDefaultArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromNode<T extends ScreenEdge$fromNodeArgs<ExtArgs> = {}>(args?: Subset<T, ScreenEdge$fromNodeArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    toNode<T extends ScreenNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScreenNodeDefaultArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScreenEdge model
   */
  interface ScreenEdgeFieldRefs {
    readonly id: FieldRef<"ScreenEdge", 'String'>
    readonly reviewRunId: FieldRef<"ScreenEdge", 'String'>
    readonly fromNodeId: FieldRef<"ScreenEdge", 'String'>
    readonly toNodeId: FieldRef<"ScreenEdge", 'String'>
    readonly actionType: FieldRef<"ScreenEdge", 'String'>
    readonly targetLabel: FieldRef<"ScreenEdge", 'String'>
    readonly targetText: FieldRef<"ScreenEdge", 'String'>
    readonly targetBounds: FieldRef<"ScreenEdge", 'Json'>
    readonly createdAt: FieldRef<"ScreenEdge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScreenEdge findUnique
   */
  export type ScreenEdgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenEdge to fetch.
     */
    where: ScreenEdgeWhereUniqueInput
  }

  /**
   * ScreenEdge findUniqueOrThrow
   */
  export type ScreenEdgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenEdge to fetch.
     */
    where: ScreenEdgeWhereUniqueInput
  }

  /**
   * ScreenEdge findFirst
   */
  export type ScreenEdgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenEdge to fetch.
     */
    where?: ScreenEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenEdges to fetch.
     */
    orderBy?: ScreenEdgeOrderByWithRelationInput | ScreenEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreenEdges.
     */
    cursor?: ScreenEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreenEdges.
     */
    distinct?: ScreenEdgeScalarFieldEnum | ScreenEdgeScalarFieldEnum[]
  }

  /**
   * ScreenEdge findFirstOrThrow
   */
  export type ScreenEdgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenEdge to fetch.
     */
    where?: ScreenEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenEdges to fetch.
     */
    orderBy?: ScreenEdgeOrderByWithRelationInput | ScreenEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreenEdges.
     */
    cursor?: ScreenEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreenEdges.
     */
    distinct?: ScreenEdgeScalarFieldEnum | ScreenEdgeScalarFieldEnum[]
  }

  /**
   * ScreenEdge findMany
   */
  export type ScreenEdgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * Filter, which ScreenEdges to fetch.
     */
    where?: ScreenEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenEdges to fetch.
     */
    orderBy?: ScreenEdgeOrderByWithRelationInput | ScreenEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScreenEdges.
     */
    cursor?: ScreenEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenEdges.
     */
    skip?: number
    distinct?: ScreenEdgeScalarFieldEnum | ScreenEdgeScalarFieldEnum[]
  }

  /**
   * ScreenEdge create
   */
  export type ScreenEdgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * The data needed to create a ScreenEdge.
     */
    data: XOR<ScreenEdgeCreateInput, ScreenEdgeUncheckedCreateInput>
  }

  /**
   * ScreenEdge createMany
   */
  export type ScreenEdgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScreenEdges.
     */
    data: ScreenEdgeCreateManyInput | ScreenEdgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScreenEdge createManyAndReturn
   */
  export type ScreenEdgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * The data used to create many ScreenEdges.
     */
    data: ScreenEdgeCreateManyInput | ScreenEdgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScreenEdge update
   */
  export type ScreenEdgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * The data needed to update a ScreenEdge.
     */
    data: XOR<ScreenEdgeUpdateInput, ScreenEdgeUncheckedUpdateInput>
    /**
     * Choose, which ScreenEdge to update.
     */
    where: ScreenEdgeWhereUniqueInput
  }

  /**
   * ScreenEdge updateMany
   */
  export type ScreenEdgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScreenEdges.
     */
    data: XOR<ScreenEdgeUpdateManyMutationInput, ScreenEdgeUncheckedUpdateManyInput>
    /**
     * Filter which ScreenEdges to update
     */
    where?: ScreenEdgeWhereInput
    /**
     * Limit how many ScreenEdges to update.
     */
    limit?: number
  }

  /**
   * ScreenEdge updateManyAndReturn
   */
  export type ScreenEdgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * The data used to update ScreenEdges.
     */
    data: XOR<ScreenEdgeUpdateManyMutationInput, ScreenEdgeUncheckedUpdateManyInput>
    /**
     * Filter which ScreenEdges to update
     */
    where?: ScreenEdgeWhereInput
    /**
     * Limit how many ScreenEdges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScreenEdge upsert
   */
  export type ScreenEdgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * The filter to search for the ScreenEdge to update in case it exists.
     */
    where: ScreenEdgeWhereUniqueInput
    /**
     * In case the ScreenEdge found by the `where` argument doesn't exist, create a new ScreenEdge with this data.
     */
    create: XOR<ScreenEdgeCreateInput, ScreenEdgeUncheckedCreateInput>
    /**
     * In case the ScreenEdge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenEdgeUpdateInput, ScreenEdgeUncheckedUpdateInput>
  }

  /**
   * ScreenEdge delete
   */
  export type ScreenEdgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
    /**
     * Filter which ScreenEdge to delete.
     */
    where: ScreenEdgeWhereUniqueInput
  }

  /**
   * ScreenEdge deleteMany
   */
  export type ScreenEdgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreenEdges to delete
     */
    where?: ScreenEdgeWhereInput
    /**
     * Limit how many ScreenEdges to delete.
     */
    limit?: number
  }

  /**
   * ScreenEdge.fromNode
   */
  export type ScreenEdge$fromNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenNode
     */
    select?: ScreenNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenNode
     */
    omit?: ScreenNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenNodeInclude<ExtArgs> | null
    where?: ScreenNodeWhereInput
  }

  /**
   * ScreenEdge without action
   */
  export type ScreenEdgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenEdge
     */
    select?: ScreenEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenEdge
     */
    omit?: ScreenEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenEdgeInclude<ExtArgs> | null
  }


  /**
   * Model NodeComment
   */

  export type AggregateNodeComment = {
    _count: NodeCommentCountAggregateOutputType | null
    _min: NodeCommentMinAggregateOutputType | null
    _max: NodeCommentMaxAggregateOutputType | null
  }

  export type NodeCommentMinAggregateOutputType = {
    id: string | null
    screenNodeId: string | null
    body: string | null
    issueType: $Enums.IssueType | null
    status: $Enums.CommentStatus | null
    createdById: string | null
    createdByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeCommentMaxAggregateOutputType = {
    id: string | null
    screenNodeId: string | null
    body: string | null
    issueType: $Enums.IssueType | null
    status: $Enums.CommentStatus | null
    createdById: string | null
    createdByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeCommentCountAggregateOutputType = {
    id: number
    screenNodeId: number
    body: number
    issueType: number
    status: number
    createdById: number
    createdByName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NodeCommentMinAggregateInputType = {
    id?: true
    screenNodeId?: true
    body?: true
    issueType?: true
    status?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeCommentMaxAggregateInputType = {
    id?: true
    screenNodeId?: true
    body?: true
    issueType?: true
    status?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeCommentCountAggregateInputType = {
    id?: true
    screenNodeId?: true
    body?: true
    issueType?: true
    status?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NodeCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeComment to aggregate.
     */
    where?: NodeCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeComments to fetch.
     */
    orderBy?: NodeCommentOrderByWithRelationInput | NodeCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NodeComments
    **/
    _count?: true | NodeCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeCommentMaxAggregateInputType
  }

  export type GetNodeCommentAggregateType<T extends NodeCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateNodeComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNodeComment[P]>
      : GetScalarType<T[P], AggregateNodeComment[P]>
  }




  export type NodeCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeCommentWhereInput
    orderBy?: NodeCommentOrderByWithAggregationInput | NodeCommentOrderByWithAggregationInput[]
    by: NodeCommentScalarFieldEnum[] | NodeCommentScalarFieldEnum
    having?: NodeCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCommentCountAggregateInputType | true
    _min?: NodeCommentMinAggregateInputType
    _max?: NodeCommentMaxAggregateInputType
  }

  export type NodeCommentGroupByOutputType = {
    id: string
    screenNodeId: string
    body: string
    issueType: $Enums.IssueType | null
    status: $Enums.CommentStatus
    createdById: string | null
    createdByName: string | null
    createdAt: Date
    updatedAt: Date
    _count: NodeCommentCountAggregateOutputType | null
    _min: NodeCommentMinAggregateOutputType | null
    _max: NodeCommentMaxAggregateOutputType | null
  }

  type GetNodeCommentGroupByPayload<T extends NodeCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeCommentGroupByOutputType[P]>
            : GetScalarType<T[P], NodeCommentGroupByOutputType[P]>
        }
      >
    >


  export type NodeCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    screenNodeId?: boolean
    body?: boolean
    issueType?: boolean
    status?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screenNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeComment"]>

  export type NodeCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    screenNodeId?: boolean
    body?: boolean
    issueType?: boolean
    status?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screenNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeComment"]>

  export type NodeCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    screenNodeId?: boolean
    body?: boolean
    issueType?: boolean
    status?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screenNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeComment"]>

  export type NodeCommentSelectScalar = {
    id?: boolean
    screenNodeId?: boolean
    body?: boolean
    issueType?: boolean
    status?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NodeCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "screenNodeId" | "body" | "issueType" | "status" | "createdById" | "createdByName" | "createdAt" | "updatedAt", ExtArgs["result"]["nodeComment"]>
  export type NodeCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }
  export type NodeCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }
  export type NodeCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenNode?: boolean | ScreenNodeDefaultArgs<ExtArgs>
  }

  export type $NodeCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NodeComment"
    objects: {
      screenNode: Prisma.$ScreenNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      screenNodeId: string
      body: string
      issueType: $Enums.IssueType | null
      status: $Enums.CommentStatus
      createdById: string | null
      createdByName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nodeComment"]>
    composites: {}
  }

  type NodeCommentGetPayload<S extends boolean | null | undefined | NodeCommentDefaultArgs> = $Result.GetResult<Prisma.$NodeCommentPayload, S>

  type NodeCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeCommentCountAggregateInputType | true
    }

  export interface NodeCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NodeComment'], meta: { name: 'NodeComment' } }
    /**
     * Find zero or one NodeComment that matches the filter.
     * @param {NodeCommentFindUniqueArgs} args - Arguments to find a NodeComment
     * @example
     * // Get one NodeComment
     * const nodeComment = await prisma.nodeComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeCommentFindUniqueArgs>(args: SelectSubset<T, NodeCommentFindUniqueArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NodeComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeCommentFindUniqueOrThrowArgs} args - Arguments to find a NodeComment
     * @example
     * // Get one NodeComment
     * const nodeComment = await prisma.nodeComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCommentFindFirstArgs} args - Arguments to find a NodeComment
     * @example
     * // Get one NodeComment
     * const nodeComment = await prisma.nodeComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeCommentFindFirstArgs>(args?: SelectSubset<T, NodeCommentFindFirstArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCommentFindFirstOrThrowArgs} args - Arguments to find a NodeComment
     * @example
     * // Get one NodeComment
     * const nodeComment = await prisma.nodeComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NodeComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NodeComments
     * const nodeComments = await prisma.nodeComment.findMany()
     * 
     * // Get first 10 NodeComments
     * const nodeComments = await prisma.nodeComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeCommentWithIdOnly = await prisma.nodeComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeCommentFindManyArgs>(args?: SelectSubset<T, NodeCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NodeComment.
     * @param {NodeCommentCreateArgs} args - Arguments to create a NodeComment.
     * @example
     * // Create one NodeComment
     * const NodeComment = await prisma.nodeComment.create({
     *   data: {
     *     // ... data to create a NodeComment
     *   }
     * })
     * 
     */
    create<T extends NodeCommentCreateArgs>(args: SelectSubset<T, NodeCommentCreateArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NodeComments.
     * @param {NodeCommentCreateManyArgs} args - Arguments to create many NodeComments.
     * @example
     * // Create many NodeComments
     * const nodeComment = await prisma.nodeComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeCommentCreateManyArgs>(args?: SelectSubset<T, NodeCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NodeComments and returns the data saved in the database.
     * @param {NodeCommentCreateManyAndReturnArgs} args - Arguments to create many NodeComments.
     * @example
     * // Create many NodeComments
     * const nodeComment = await prisma.nodeComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NodeComments and only return the `id`
     * const nodeCommentWithIdOnly = await prisma.nodeComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NodeComment.
     * @param {NodeCommentDeleteArgs} args - Arguments to delete one NodeComment.
     * @example
     * // Delete one NodeComment
     * const NodeComment = await prisma.nodeComment.delete({
     *   where: {
     *     // ... filter to delete one NodeComment
     *   }
     * })
     * 
     */
    delete<T extends NodeCommentDeleteArgs>(args: SelectSubset<T, NodeCommentDeleteArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NodeComment.
     * @param {NodeCommentUpdateArgs} args - Arguments to update one NodeComment.
     * @example
     * // Update one NodeComment
     * const nodeComment = await prisma.nodeComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeCommentUpdateArgs>(args: SelectSubset<T, NodeCommentUpdateArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NodeComments.
     * @param {NodeCommentDeleteManyArgs} args - Arguments to filter NodeComments to delete.
     * @example
     * // Delete a few NodeComments
     * const { count } = await prisma.nodeComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeCommentDeleteManyArgs>(args?: SelectSubset<T, NodeCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NodeComments
     * const nodeComment = await prisma.nodeComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeCommentUpdateManyArgs>(args: SelectSubset<T, NodeCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeComments and returns the data updated in the database.
     * @param {NodeCommentUpdateManyAndReturnArgs} args - Arguments to update many NodeComments.
     * @example
     * // Update many NodeComments
     * const nodeComment = await prisma.nodeComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NodeComments and only return the `id`
     * const nodeCommentWithIdOnly = await prisma.nodeComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodeCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NodeComment.
     * @param {NodeCommentUpsertArgs} args - Arguments to update or create a NodeComment.
     * @example
     * // Update or create a NodeComment
     * const nodeComment = await prisma.nodeComment.upsert({
     *   create: {
     *     // ... data to create a NodeComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NodeComment we want to update
     *   }
     * })
     */
    upsert<T extends NodeCommentUpsertArgs>(args: SelectSubset<T, NodeCommentUpsertArgs<ExtArgs>>): Prisma__NodeCommentClient<$Result.GetResult<Prisma.$NodeCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NodeComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCommentCountArgs} args - Arguments to filter NodeComments to count.
     * @example
     * // Count the number of NodeComments
     * const count = await prisma.nodeComment.count({
     *   where: {
     *     // ... the filter for the NodeComments we want to count
     *   }
     * })
    **/
    count<T extends NodeCommentCountArgs>(
      args?: Subset<T, NodeCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NodeComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NodeCommentAggregateArgs>(args: Subset<T, NodeCommentAggregateArgs>): Prisma.PrismaPromise<GetNodeCommentAggregateType<T>>

    /**
     * Group by NodeComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NodeCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeCommentGroupByArgs['orderBy'] }
        : { orderBy?: NodeCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NodeCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NodeComment model
   */
  readonly fields: NodeCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NodeComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    screenNode<T extends ScreenNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScreenNodeDefaultArgs<ExtArgs>>): Prisma__ScreenNodeClient<$Result.GetResult<Prisma.$ScreenNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NodeComment model
   */
  interface NodeCommentFieldRefs {
    readonly id: FieldRef<"NodeComment", 'String'>
    readonly screenNodeId: FieldRef<"NodeComment", 'String'>
    readonly body: FieldRef<"NodeComment", 'String'>
    readonly issueType: FieldRef<"NodeComment", 'IssueType'>
    readonly status: FieldRef<"NodeComment", 'CommentStatus'>
    readonly createdById: FieldRef<"NodeComment", 'String'>
    readonly createdByName: FieldRef<"NodeComment", 'String'>
    readonly createdAt: FieldRef<"NodeComment", 'DateTime'>
    readonly updatedAt: FieldRef<"NodeComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NodeComment findUnique
   */
  export type NodeCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * Filter, which NodeComment to fetch.
     */
    where: NodeCommentWhereUniqueInput
  }

  /**
   * NodeComment findUniqueOrThrow
   */
  export type NodeCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * Filter, which NodeComment to fetch.
     */
    where: NodeCommentWhereUniqueInput
  }

  /**
   * NodeComment findFirst
   */
  export type NodeCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * Filter, which NodeComment to fetch.
     */
    where?: NodeCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeComments to fetch.
     */
    orderBy?: NodeCommentOrderByWithRelationInput | NodeCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeComments.
     */
    cursor?: NodeCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeComments.
     */
    distinct?: NodeCommentScalarFieldEnum | NodeCommentScalarFieldEnum[]
  }

  /**
   * NodeComment findFirstOrThrow
   */
  export type NodeCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * Filter, which NodeComment to fetch.
     */
    where?: NodeCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeComments to fetch.
     */
    orderBy?: NodeCommentOrderByWithRelationInput | NodeCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeComments.
     */
    cursor?: NodeCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeComments.
     */
    distinct?: NodeCommentScalarFieldEnum | NodeCommentScalarFieldEnum[]
  }

  /**
   * NodeComment findMany
   */
  export type NodeCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * Filter, which NodeComments to fetch.
     */
    where?: NodeCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeComments to fetch.
     */
    orderBy?: NodeCommentOrderByWithRelationInput | NodeCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NodeComments.
     */
    cursor?: NodeCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeComments.
     */
    skip?: number
    distinct?: NodeCommentScalarFieldEnum | NodeCommentScalarFieldEnum[]
  }

  /**
   * NodeComment create
   */
  export type NodeCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a NodeComment.
     */
    data: XOR<NodeCommentCreateInput, NodeCommentUncheckedCreateInput>
  }

  /**
   * NodeComment createMany
   */
  export type NodeCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NodeComments.
     */
    data: NodeCommentCreateManyInput | NodeCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NodeComment createManyAndReturn
   */
  export type NodeCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * The data used to create many NodeComments.
     */
    data: NodeCommentCreateManyInput | NodeCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeComment update
   */
  export type NodeCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a NodeComment.
     */
    data: XOR<NodeCommentUpdateInput, NodeCommentUncheckedUpdateInput>
    /**
     * Choose, which NodeComment to update.
     */
    where: NodeCommentWhereUniqueInput
  }

  /**
   * NodeComment updateMany
   */
  export type NodeCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NodeComments.
     */
    data: XOR<NodeCommentUpdateManyMutationInput, NodeCommentUncheckedUpdateManyInput>
    /**
     * Filter which NodeComments to update
     */
    where?: NodeCommentWhereInput
    /**
     * Limit how many NodeComments to update.
     */
    limit?: number
  }

  /**
   * NodeComment updateManyAndReturn
   */
  export type NodeCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * The data used to update NodeComments.
     */
    data: XOR<NodeCommentUpdateManyMutationInput, NodeCommentUncheckedUpdateManyInput>
    /**
     * Filter which NodeComments to update
     */
    where?: NodeCommentWhereInput
    /**
     * Limit how many NodeComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeComment upsert
   */
  export type NodeCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the NodeComment to update in case it exists.
     */
    where: NodeCommentWhereUniqueInput
    /**
     * In case the NodeComment found by the `where` argument doesn't exist, create a new NodeComment with this data.
     */
    create: XOR<NodeCommentCreateInput, NodeCommentUncheckedCreateInput>
    /**
     * In case the NodeComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeCommentUpdateInput, NodeCommentUncheckedUpdateInput>
  }

  /**
   * NodeComment delete
   */
  export type NodeCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
    /**
     * Filter which NodeComment to delete.
     */
    where: NodeCommentWhereUniqueInput
  }

  /**
   * NodeComment deleteMany
   */
  export type NodeCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeComments to delete
     */
    where?: NodeCommentWhereInput
    /**
     * Limit how many NodeComments to delete.
     */
    limit?: number
  }

  /**
   * NodeComment without action
   */
  export type NodeCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeComment
     */
    select?: NodeCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeComment
     */
    omit?: NodeCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeCommentInclude<ExtArgs> | null
  }


  /**
   * Model ExplorationAction
   */

  export type AggregateExplorationAction = {
    _count: ExplorationActionCountAggregateOutputType | null
    _min: ExplorationActionMinAggregateOutputType | null
    _max: ExplorationActionMaxAggregateOutputType | null
  }

  export type ExplorationActionMinAggregateOutputType = {
    id: string | null
    reviewRunId: string | null
    type: $Enums.ExplorationActionType | null
    status: $Enums.ExplorationActionStatus | null
    fromNodeId: string | null
    targetNodeId: string | null
    hotspotKey: string | null
    targetLabel: string | null
    resultNodeId: string | null
    isExistingNode: boolean | null
    errorMessage: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ExplorationActionMaxAggregateOutputType = {
    id: string | null
    reviewRunId: string | null
    type: $Enums.ExplorationActionType | null
    status: $Enums.ExplorationActionStatus | null
    fromNodeId: string | null
    targetNodeId: string | null
    hotspotKey: string | null
    targetLabel: string | null
    resultNodeId: string | null
    isExistingNode: boolean | null
    errorMessage: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ExplorationActionCountAggregateOutputType = {
    id: number
    reviewRunId: number
    type: number
    status: number
    fromNodeId: number
    targetNodeId: number
    hotspotKey: number
    targetLabel: number
    targetBounds: number
    resultNodeId: number
    isExistingNode: number
    errorMessage: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type ExplorationActionMinAggregateInputType = {
    id?: true
    reviewRunId?: true
    type?: true
    status?: true
    fromNodeId?: true
    targetNodeId?: true
    hotspotKey?: true
    targetLabel?: true
    resultNodeId?: true
    isExistingNode?: true
    errorMessage?: true
    createdAt?: true
    completedAt?: true
  }

  export type ExplorationActionMaxAggregateInputType = {
    id?: true
    reviewRunId?: true
    type?: true
    status?: true
    fromNodeId?: true
    targetNodeId?: true
    hotspotKey?: true
    targetLabel?: true
    resultNodeId?: true
    isExistingNode?: true
    errorMessage?: true
    createdAt?: true
    completedAt?: true
  }

  export type ExplorationActionCountAggregateInputType = {
    id?: true
    reviewRunId?: true
    type?: true
    status?: true
    fromNodeId?: true
    targetNodeId?: true
    hotspotKey?: true
    targetLabel?: true
    targetBounds?: true
    resultNodeId?: true
    isExistingNode?: true
    errorMessage?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type ExplorationActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExplorationAction to aggregate.
     */
    where?: ExplorationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationActions to fetch.
     */
    orderBy?: ExplorationActionOrderByWithRelationInput | ExplorationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExplorationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExplorationActions
    **/
    _count?: true | ExplorationActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExplorationActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExplorationActionMaxAggregateInputType
  }

  export type GetExplorationActionAggregateType<T extends ExplorationActionAggregateArgs> = {
        [P in keyof T & keyof AggregateExplorationAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExplorationAction[P]>
      : GetScalarType<T[P], AggregateExplorationAction[P]>
  }




  export type ExplorationActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExplorationActionWhereInput
    orderBy?: ExplorationActionOrderByWithAggregationInput | ExplorationActionOrderByWithAggregationInput[]
    by: ExplorationActionScalarFieldEnum[] | ExplorationActionScalarFieldEnum
    having?: ExplorationActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExplorationActionCountAggregateInputType | true
    _min?: ExplorationActionMinAggregateInputType
    _max?: ExplorationActionMaxAggregateInputType
  }

  export type ExplorationActionGroupByOutputType = {
    id: string
    reviewRunId: string
    type: $Enums.ExplorationActionType
    status: $Enums.ExplorationActionStatus
    fromNodeId: string | null
    targetNodeId: string | null
    hotspotKey: string | null
    targetLabel: string | null
    targetBounds: JsonValue | null
    resultNodeId: string | null
    isExistingNode: boolean
    errorMessage: string | null
    createdAt: Date
    completedAt: Date | null
    _count: ExplorationActionCountAggregateOutputType | null
    _min: ExplorationActionMinAggregateOutputType | null
    _max: ExplorationActionMaxAggregateOutputType | null
  }

  type GetExplorationActionGroupByPayload<T extends ExplorationActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExplorationActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExplorationActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExplorationActionGroupByOutputType[P]>
            : GetScalarType<T[P], ExplorationActionGroupByOutputType[P]>
        }
      >
    >


  export type ExplorationActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    type?: boolean
    status?: boolean
    fromNodeId?: boolean
    targetNodeId?: boolean
    hotspotKey?: boolean
    targetLabel?: boolean
    targetBounds?: boolean
    resultNodeId?: boolean
    isExistingNode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["explorationAction"]>

  export type ExplorationActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    type?: boolean
    status?: boolean
    fromNodeId?: boolean
    targetNodeId?: boolean
    hotspotKey?: boolean
    targetLabel?: boolean
    targetBounds?: boolean
    resultNodeId?: boolean
    isExistingNode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["explorationAction"]>

  export type ExplorationActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewRunId?: boolean
    type?: boolean
    status?: boolean
    fromNodeId?: boolean
    targetNodeId?: boolean
    hotspotKey?: boolean
    targetLabel?: boolean
    targetBounds?: boolean
    resultNodeId?: boolean
    isExistingNode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["explorationAction"]>

  export type ExplorationActionSelectScalar = {
    id?: boolean
    reviewRunId?: boolean
    type?: boolean
    status?: boolean
    fromNodeId?: boolean
    targetNodeId?: boolean
    hotspotKey?: boolean
    targetLabel?: boolean
    targetBounds?: boolean
    resultNodeId?: boolean
    isExistingNode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type ExplorationActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewRunId" | "type" | "status" | "fromNodeId" | "targetNodeId" | "hotspotKey" | "targetLabel" | "targetBounds" | "resultNodeId" | "isExistingNode" | "errorMessage" | "createdAt" | "completedAt", ExtArgs["result"]["explorationAction"]>
  export type ExplorationActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }
  export type ExplorationActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }
  export type ExplorationActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewRun?: boolean | ReviewRunDefaultArgs<ExtArgs>
  }

  export type $ExplorationActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExplorationAction"
    objects: {
      reviewRun: Prisma.$ReviewRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewRunId: string
      type: $Enums.ExplorationActionType
      status: $Enums.ExplorationActionStatus
      fromNodeId: string | null
      targetNodeId: string | null
      hotspotKey: string | null
      targetLabel: string | null
      targetBounds: Prisma.JsonValue | null
      resultNodeId: string | null
      isExistingNode: boolean
      errorMessage: string | null
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["explorationAction"]>
    composites: {}
  }

  type ExplorationActionGetPayload<S extends boolean | null | undefined | ExplorationActionDefaultArgs> = $Result.GetResult<Prisma.$ExplorationActionPayload, S>

  type ExplorationActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExplorationActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExplorationActionCountAggregateInputType | true
    }

  export interface ExplorationActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExplorationAction'], meta: { name: 'ExplorationAction' } }
    /**
     * Find zero or one ExplorationAction that matches the filter.
     * @param {ExplorationActionFindUniqueArgs} args - Arguments to find a ExplorationAction
     * @example
     * // Get one ExplorationAction
     * const explorationAction = await prisma.explorationAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExplorationActionFindUniqueArgs>(args: SelectSubset<T, ExplorationActionFindUniqueArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExplorationAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExplorationActionFindUniqueOrThrowArgs} args - Arguments to find a ExplorationAction
     * @example
     * // Get one ExplorationAction
     * const explorationAction = await prisma.explorationAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExplorationActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExplorationActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExplorationAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationActionFindFirstArgs} args - Arguments to find a ExplorationAction
     * @example
     * // Get one ExplorationAction
     * const explorationAction = await prisma.explorationAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExplorationActionFindFirstArgs>(args?: SelectSubset<T, ExplorationActionFindFirstArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExplorationAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationActionFindFirstOrThrowArgs} args - Arguments to find a ExplorationAction
     * @example
     * // Get one ExplorationAction
     * const explorationAction = await prisma.explorationAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExplorationActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExplorationActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExplorationActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExplorationActions
     * const explorationActions = await prisma.explorationAction.findMany()
     * 
     * // Get first 10 ExplorationActions
     * const explorationActions = await prisma.explorationAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const explorationActionWithIdOnly = await prisma.explorationAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExplorationActionFindManyArgs>(args?: SelectSubset<T, ExplorationActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExplorationAction.
     * @param {ExplorationActionCreateArgs} args - Arguments to create a ExplorationAction.
     * @example
     * // Create one ExplorationAction
     * const ExplorationAction = await prisma.explorationAction.create({
     *   data: {
     *     // ... data to create a ExplorationAction
     *   }
     * })
     * 
     */
    create<T extends ExplorationActionCreateArgs>(args: SelectSubset<T, ExplorationActionCreateArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExplorationActions.
     * @param {ExplorationActionCreateManyArgs} args - Arguments to create many ExplorationActions.
     * @example
     * // Create many ExplorationActions
     * const explorationAction = await prisma.explorationAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExplorationActionCreateManyArgs>(args?: SelectSubset<T, ExplorationActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExplorationActions and returns the data saved in the database.
     * @param {ExplorationActionCreateManyAndReturnArgs} args - Arguments to create many ExplorationActions.
     * @example
     * // Create many ExplorationActions
     * const explorationAction = await prisma.explorationAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExplorationActions and only return the `id`
     * const explorationActionWithIdOnly = await prisma.explorationAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExplorationActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExplorationActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExplorationAction.
     * @param {ExplorationActionDeleteArgs} args - Arguments to delete one ExplorationAction.
     * @example
     * // Delete one ExplorationAction
     * const ExplorationAction = await prisma.explorationAction.delete({
     *   where: {
     *     // ... filter to delete one ExplorationAction
     *   }
     * })
     * 
     */
    delete<T extends ExplorationActionDeleteArgs>(args: SelectSubset<T, ExplorationActionDeleteArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExplorationAction.
     * @param {ExplorationActionUpdateArgs} args - Arguments to update one ExplorationAction.
     * @example
     * // Update one ExplorationAction
     * const explorationAction = await prisma.explorationAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExplorationActionUpdateArgs>(args: SelectSubset<T, ExplorationActionUpdateArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExplorationActions.
     * @param {ExplorationActionDeleteManyArgs} args - Arguments to filter ExplorationActions to delete.
     * @example
     * // Delete a few ExplorationActions
     * const { count } = await prisma.explorationAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExplorationActionDeleteManyArgs>(args?: SelectSubset<T, ExplorationActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExplorationActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExplorationActions
     * const explorationAction = await prisma.explorationAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExplorationActionUpdateManyArgs>(args: SelectSubset<T, ExplorationActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExplorationActions and returns the data updated in the database.
     * @param {ExplorationActionUpdateManyAndReturnArgs} args - Arguments to update many ExplorationActions.
     * @example
     * // Update many ExplorationActions
     * const explorationAction = await prisma.explorationAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExplorationActions and only return the `id`
     * const explorationActionWithIdOnly = await prisma.explorationAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExplorationActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExplorationActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExplorationAction.
     * @param {ExplorationActionUpsertArgs} args - Arguments to update or create a ExplorationAction.
     * @example
     * // Update or create a ExplorationAction
     * const explorationAction = await prisma.explorationAction.upsert({
     *   create: {
     *     // ... data to create a ExplorationAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExplorationAction we want to update
     *   }
     * })
     */
    upsert<T extends ExplorationActionUpsertArgs>(args: SelectSubset<T, ExplorationActionUpsertArgs<ExtArgs>>): Prisma__ExplorationActionClient<$Result.GetResult<Prisma.$ExplorationActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExplorationActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationActionCountArgs} args - Arguments to filter ExplorationActions to count.
     * @example
     * // Count the number of ExplorationActions
     * const count = await prisma.explorationAction.count({
     *   where: {
     *     // ... the filter for the ExplorationActions we want to count
     *   }
     * })
    **/
    count<T extends ExplorationActionCountArgs>(
      args?: Subset<T, ExplorationActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExplorationActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExplorationAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExplorationActionAggregateArgs>(args: Subset<T, ExplorationActionAggregateArgs>): Prisma.PrismaPromise<GetExplorationActionAggregateType<T>>

    /**
     * Group by ExplorationAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExplorationActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExplorationActionGroupByArgs['orderBy'] }
        : { orderBy?: ExplorationActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExplorationActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExplorationActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExplorationAction model
   */
  readonly fields: ExplorationActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExplorationAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExplorationActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewRun<T extends ReviewRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewRunDefaultArgs<ExtArgs>>): Prisma__ReviewRunClient<$Result.GetResult<Prisma.$ReviewRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExplorationAction model
   */
  interface ExplorationActionFieldRefs {
    readonly id: FieldRef<"ExplorationAction", 'String'>
    readonly reviewRunId: FieldRef<"ExplorationAction", 'String'>
    readonly type: FieldRef<"ExplorationAction", 'ExplorationActionType'>
    readonly status: FieldRef<"ExplorationAction", 'ExplorationActionStatus'>
    readonly fromNodeId: FieldRef<"ExplorationAction", 'String'>
    readonly targetNodeId: FieldRef<"ExplorationAction", 'String'>
    readonly hotspotKey: FieldRef<"ExplorationAction", 'String'>
    readonly targetLabel: FieldRef<"ExplorationAction", 'String'>
    readonly targetBounds: FieldRef<"ExplorationAction", 'Json'>
    readonly resultNodeId: FieldRef<"ExplorationAction", 'String'>
    readonly isExistingNode: FieldRef<"ExplorationAction", 'Boolean'>
    readonly errorMessage: FieldRef<"ExplorationAction", 'String'>
    readonly createdAt: FieldRef<"ExplorationAction", 'DateTime'>
    readonly completedAt: FieldRef<"ExplorationAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExplorationAction findUnique
   */
  export type ExplorationActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * Filter, which ExplorationAction to fetch.
     */
    where: ExplorationActionWhereUniqueInput
  }

  /**
   * ExplorationAction findUniqueOrThrow
   */
  export type ExplorationActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * Filter, which ExplorationAction to fetch.
     */
    where: ExplorationActionWhereUniqueInput
  }

  /**
   * ExplorationAction findFirst
   */
  export type ExplorationActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * Filter, which ExplorationAction to fetch.
     */
    where?: ExplorationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationActions to fetch.
     */
    orderBy?: ExplorationActionOrderByWithRelationInput | ExplorationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExplorationActions.
     */
    cursor?: ExplorationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExplorationActions.
     */
    distinct?: ExplorationActionScalarFieldEnum | ExplorationActionScalarFieldEnum[]
  }

  /**
   * ExplorationAction findFirstOrThrow
   */
  export type ExplorationActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * Filter, which ExplorationAction to fetch.
     */
    where?: ExplorationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationActions to fetch.
     */
    orderBy?: ExplorationActionOrderByWithRelationInput | ExplorationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExplorationActions.
     */
    cursor?: ExplorationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExplorationActions.
     */
    distinct?: ExplorationActionScalarFieldEnum | ExplorationActionScalarFieldEnum[]
  }

  /**
   * ExplorationAction findMany
   */
  export type ExplorationActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * Filter, which ExplorationActions to fetch.
     */
    where?: ExplorationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationActions to fetch.
     */
    orderBy?: ExplorationActionOrderByWithRelationInput | ExplorationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExplorationActions.
     */
    cursor?: ExplorationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationActions.
     */
    skip?: number
    distinct?: ExplorationActionScalarFieldEnum | ExplorationActionScalarFieldEnum[]
  }

  /**
   * ExplorationAction create
   */
  export type ExplorationActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExplorationAction.
     */
    data: XOR<ExplorationActionCreateInput, ExplorationActionUncheckedCreateInput>
  }

  /**
   * ExplorationAction createMany
   */
  export type ExplorationActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExplorationActions.
     */
    data: ExplorationActionCreateManyInput | ExplorationActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExplorationAction createManyAndReturn
   */
  export type ExplorationActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * The data used to create many ExplorationActions.
     */
    data: ExplorationActionCreateManyInput | ExplorationActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExplorationAction update
   */
  export type ExplorationActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExplorationAction.
     */
    data: XOR<ExplorationActionUpdateInput, ExplorationActionUncheckedUpdateInput>
    /**
     * Choose, which ExplorationAction to update.
     */
    where: ExplorationActionWhereUniqueInput
  }

  /**
   * ExplorationAction updateMany
   */
  export type ExplorationActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExplorationActions.
     */
    data: XOR<ExplorationActionUpdateManyMutationInput, ExplorationActionUncheckedUpdateManyInput>
    /**
     * Filter which ExplorationActions to update
     */
    where?: ExplorationActionWhereInput
    /**
     * Limit how many ExplorationActions to update.
     */
    limit?: number
  }

  /**
   * ExplorationAction updateManyAndReturn
   */
  export type ExplorationActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * The data used to update ExplorationActions.
     */
    data: XOR<ExplorationActionUpdateManyMutationInput, ExplorationActionUncheckedUpdateManyInput>
    /**
     * Filter which ExplorationActions to update
     */
    where?: ExplorationActionWhereInput
    /**
     * Limit how many ExplorationActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExplorationAction upsert
   */
  export type ExplorationActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExplorationAction to update in case it exists.
     */
    where: ExplorationActionWhereUniqueInput
    /**
     * In case the ExplorationAction found by the `where` argument doesn't exist, create a new ExplorationAction with this data.
     */
    create: XOR<ExplorationActionCreateInput, ExplorationActionUncheckedCreateInput>
    /**
     * In case the ExplorationAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExplorationActionUpdateInput, ExplorationActionUncheckedUpdateInput>
  }

  /**
   * ExplorationAction delete
   */
  export type ExplorationActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
    /**
     * Filter which ExplorationAction to delete.
     */
    where: ExplorationActionWhereUniqueInput
  }

  /**
   * ExplorationAction deleteMany
   */
  export type ExplorationActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExplorationActions to delete
     */
    where?: ExplorationActionWhereInput
    /**
     * Limit how many ExplorationActions to delete.
     */
    limit?: number
  }

  /**
   * ExplorationAction without action
   */
  export type ExplorationActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExplorationAction
     */
    select?: ExplorationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExplorationAction
     */
    omit?: ExplorationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExplorationActionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ApkBuildScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    fileName: 'fileName',
    filePath: 'filePath',
    packageName: 'packageName',
    versionName: 'versionName',
    versionCode: 'versionCode',
    uploadedAt: 'uploadedAt'
  };

  export type ApkBuildScalarFieldEnum = (typeof ApkBuildScalarFieldEnum)[keyof typeof ApkBuildScalarFieldEnum]


  export const ReviewRunScalarFieldEnum: {
    id: 'id',
    apkBuildId: 'apkBuildId',
    status: 'status',
    maxDepth: 'maxDepth',
    maxNodes: 'maxNodes',
    maxTapsPerScreen: 'maxTapsPerScreen',
    currentNodeId: 'currentNodeId',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewRunScalarFieldEnum = (typeof ReviewRunScalarFieldEnum)[keyof typeof ReviewRunScalarFieldEnum]


  export const ScreenNodeScalarFieldEnum: {
    id: 'id',
    reviewRunId: 'reviewRunId',
    screenshotPath: 'screenshotPath',
    activityName: 'activityName',
    stateName: 'stateName',
    name: 'name',
    flowName: 'flowName',
    nodeType: 'nodeType',
    positionX: 'positionX',
    positionY: 'positionY',
    uiTreeJson: 'uiTreeJson',
    depth: 'depth',
    hash: 'hash',
    clickableCount: 'clickableCount',
    createdAt: 'createdAt'
  };

  export type ScreenNodeScalarFieldEnum = (typeof ScreenNodeScalarFieldEnum)[keyof typeof ScreenNodeScalarFieldEnum]


  export const ScreenEdgeScalarFieldEnum: {
    id: 'id',
    reviewRunId: 'reviewRunId',
    fromNodeId: 'fromNodeId',
    toNodeId: 'toNodeId',
    actionType: 'actionType',
    targetLabel: 'targetLabel',
    targetText: 'targetText',
    targetBounds: 'targetBounds',
    createdAt: 'createdAt'
  };

  export type ScreenEdgeScalarFieldEnum = (typeof ScreenEdgeScalarFieldEnum)[keyof typeof ScreenEdgeScalarFieldEnum]


  export const NodeCommentScalarFieldEnum: {
    id: 'id',
    screenNodeId: 'screenNodeId',
    body: 'body',
    issueType: 'issueType',
    status: 'status',
    createdById: 'createdById',
    createdByName: 'createdByName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NodeCommentScalarFieldEnum = (typeof NodeCommentScalarFieldEnum)[keyof typeof NodeCommentScalarFieldEnum]


  export const ExplorationActionScalarFieldEnum: {
    id: 'id',
    reviewRunId: 'reviewRunId',
    type: 'type',
    status: 'status',
    fromNodeId: 'fromNodeId',
    targetNodeId: 'targetNodeId',
    hotspotKey: 'hotspotKey',
    targetLabel: 'targetLabel',
    targetBounds: 'targetBounds',
    resultNodeId: 'resultNodeId',
    isExistingNode: 'isExistingNode',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type ExplorationActionScalarFieldEnum = (typeof ExplorationActionScalarFieldEnum)[keyof typeof ExplorationActionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReviewRunStatus'
   */
  export type EnumReviewRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewRunStatus'>
    


  /**
   * Reference to a field of type 'ReviewRunStatus[]'
   */
  export type ListEnumReviewRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewRunStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'IssueType'
   */
  export type EnumIssueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueType'>
    


  /**
   * Reference to a field of type 'IssueType[]'
   */
  export type ListEnumIssueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueType[]'>
    


  /**
   * Reference to a field of type 'CommentStatus'
   */
  export type EnumCommentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentStatus'>
    


  /**
   * Reference to a field of type 'CommentStatus[]'
   */
  export type ListEnumCommentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentStatus[]'>
    


  /**
   * Reference to a field of type 'ExplorationActionType'
   */
  export type EnumExplorationActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExplorationActionType'>
    


  /**
   * Reference to a field of type 'ExplorationActionType[]'
   */
  export type ListEnumExplorationActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExplorationActionType[]'>
    


  /**
   * Reference to a field of type 'ExplorationActionStatus'
   */
  export type EnumExplorationActionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExplorationActionStatus'>
    


  /**
   * Reference to a field of type 'ExplorationActionStatus[]'
   */
  export type ListEnumExplorationActionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExplorationActionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    builds?: ApkBuildListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    builds?: ApkBuildOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    builds?: ApkBuildListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ApkBuildWhereInput = {
    AND?: ApkBuildWhereInput | ApkBuildWhereInput[]
    OR?: ApkBuildWhereInput[]
    NOT?: ApkBuildWhereInput | ApkBuildWhereInput[]
    id?: StringFilter<"ApkBuild"> | string
    projectId?: StringFilter<"ApkBuild"> | string
    fileName?: StringFilter<"ApkBuild"> | string
    filePath?: StringFilter<"ApkBuild"> | string
    packageName?: StringNullableFilter<"ApkBuild"> | string | null
    versionName?: StringNullableFilter<"ApkBuild"> | string | null
    versionCode?: StringNullableFilter<"ApkBuild"> | string | null
    uploadedAt?: DateTimeFilter<"ApkBuild"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    runs?: ReviewRunListRelationFilter
  }

  export type ApkBuildOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    packageName?: SortOrderInput | SortOrder
    versionName?: SortOrderInput | SortOrder
    versionCode?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    runs?: ReviewRunOrderByRelationAggregateInput
  }

  export type ApkBuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApkBuildWhereInput | ApkBuildWhereInput[]
    OR?: ApkBuildWhereInput[]
    NOT?: ApkBuildWhereInput | ApkBuildWhereInput[]
    projectId?: StringFilter<"ApkBuild"> | string
    fileName?: StringFilter<"ApkBuild"> | string
    filePath?: StringFilter<"ApkBuild"> | string
    packageName?: StringNullableFilter<"ApkBuild"> | string | null
    versionName?: StringNullableFilter<"ApkBuild"> | string | null
    versionCode?: StringNullableFilter<"ApkBuild"> | string | null
    uploadedAt?: DateTimeFilter<"ApkBuild"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    runs?: ReviewRunListRelationFilter
  }, "id">

  export type ApkBuildOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    packageName?: SortOrderInput | SortOrder
    versionName?: SortOrderInput | SortOrder
    versionCode?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: ApkBuildCountOrderByAggregateInput
    _max?: ApkBuildMaxOrderByAggregateInput
    _min?: ApkBuildMinOrderByAggregateInput
  }

  export type ApkBuildScalarWhereWithAggregatesInput = {
    AND?: ApkBuildScalarWhereWithAggregatesInput | ApkBuildScalarWhereWithAggregatesInput[]
    OR?: ApkBuildScalarWhereWithAggregatesInput[]
    NOT?: ApkBuildScalarWhereWithAggregatesInput | ApkBuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApkBuild"> | string
    projectId?: StringWithAggregatesFilter<"ApkBuild"> | string
    fileName?: StringWithAggregatesFilter<"ApkBuild"> | string
    filePath?: StringWithAggregatesFilter<"ApkBuild"> | string
    packageName?: StringNullableWithAggregatesFilter<"ApkBuild"> | string | null
    versionName?: StringNullableWithAggregatesFilter<"ApkBuild"> | string | null
    versionCode?: StringNullableWithAggregatesFilter<"ApkBuild"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"ApkBuild"> | Date | string
  }

  export type ReviewRunWhereInput = {
    AND?: ReviewRunWhereInput | ReviewRunWhereInput[]
    OR?: ReviewRunWhereInput[]
    NOT?: ReviewRunWhereInput | ReviewRunWhereInput[]
    id?: StringFilter<"ReviewRun"> | string
    apkBuildId?: StringFilter<"ReviewRun"> | string
    status?: EnumReviewRunStatusFilter<"ReviewRun"> | $Enums.ReviewRunStatus
    maxDepth?: IntFilter<"ReviewRun"> | number
    maxNodes?: IntFilter<"ReviewRun"> | number
    maxTapsPerScreen?: IntFilter<"ReviewRun"> | number
    currentNodeId?: StringNullableFilter<"ReviewRun"> | string | null
    startedAt?: DateTimeNullableFilter<"ReviewRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ReviewRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"ReviewRun"> | string | null
    createdAt?: DateTimeFilter<"ReviewRun"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewRun"> | Date | string
    apkBuild?: XOR<ApkBuildScalarRelationFilter, ApkBuildWhereInput>
    nodes?: ScreenNodeListRelationFilter
    edges?: ScreenEdgeListRelationFilter
    actions?: ExplorationActionListRelationFilter
  }

  export type ReviewRunOrderByWithRelationInput = {
    id?: SortOrder
    apkBuildId?: SortOrder
    status?: SortOrder
    maxDepth?: SortOrder
    maxNodes?: SortOrder
    maxTapsPerScreen?: SortOrder
    currentNodeId?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apkBuild?: ApkBuildOrderByWithRelationInput
    nodes?: ScreenNodeOrderByRelationAggregateInput
    edges?: ScreenEdgeOrderByRelationAggregateInput
    actions?: ExplorationActionOrderByRelationAggregateInput
  }

  export type ReviewRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewRunWhereInput | ReviewRunWhereInput[]
    OR?: ReviewRunWhereInput[]
    NOT?: ReviewRunWhereInput | ReviewRunWhereInput[]
    apkBuildId?: StringFilter<"ReviewRun"> | string
    status?: EnumReviewRunStatusFilter<"ReviewRun"> | $Enums.ReviewRunStatus
    maxDepth?: IntFilter<"ReviewRun"> | number
    maxNodes?: IntFilter<"ReviewRun"> | number
    maxTapsPerScreen?: IntFilter<"ReviewRun"> | number
    currentNodeId?: StringNullableFilter<"ReviewRun"> | string | null
    startedAt?: DateTimeNullableFilter<"ReviewRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ReviewRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"ReviewRun"> | string | null
    createdAt?: DateTimeFilter<"ReviewRun"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewRun"> | Date | string
    apkBuild?: XOR<ApkBuildScalarRelationFilter, ApkBuildWhereInput>
    nodes?: ScreenNodeListRelationFilter
    edges?: ScreenEdgeListRelationFilter
    actions?: ExplorationActionListRelationFilter
  }, "id">

  export type ReviewRunOrderByWithAggregationInput = {
    id?: SortOrder
    apkBuildId?: SortOrder
    status?: SortOrder
    maxDepth?: SortOrder
    maxNodes?: SortOrder
    maxTapsPerScreen?: SortOrder
    currentNodeId?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewRunCountOrderByAggregateInput
    _avg?: ReviewRunAvgOrderByAggregateInput
    _max?: ReviewRunMaxOrderByAggregateInput
    _min?: ReviewRunMinOrderByAggregateInput
    _sum?: ReviewRunSumOrderByAggregateInput
  }

  export type ReviewRunScalarWhereWithAggregatesInput = {
    AND?: ReviewRunScalarWhereWithAggregatesInput | ReviewRunScalarWhereWithAggregatesInput[]
    OR?: ReviewRunScalarWhereWithAggregatesInput[]
    NOT?: ReviewRunScalarWhereWithAggregatesInput | ReviewRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewRun"> | string
    apkBuildId?: StringWithAggregatesFilter<"ReviewRun"> | string
    status?: EnumReviewRunStatusWithAggregatesFilter<"ReviewRun"> | $Enums.ReviewRunStatus
    maxDepth?: IntWithAggregatesFilter<"ReviewRun"> | number
    maxNodes?: IntWithAggregatesFilter<"ReviewRun"> | number
    maxTapsPerScreen?: IntWithAggregatesFilter<"ReviewRun"> | number
    currentNodeId?: StringNullableWithAggregatesFilter<"ReviewRun"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"ReviewRun"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ReviewRun"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"ReviewRun"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReviewRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewRun"> | Date | string
  }

  export type ScreenNodeWhereInput = {
    AND?: ScreenNodeWhereInput | ScreenNodeWhereInput[]
    OR?: ScreenNodeWhereInput[]
    NOT?: ScreenNodeWhereInput | ScreenNodeWhereInput[]
    id?: StringFilter<"ScreenNode"> | string
    reviewRunId?: StringFilter<"ScreenNode"> | string
    screenshotPath?: StringFilter<"ScreenNode"> | string
    activityName?: StringNullableFilter<"ScreenNode"> | string | null
    stateName?: StringNullableFilter<"ScreenNode"> | string | null
    name?: StringNullableFilter<"ScreenNode"> | string | null
    flowName?: StringNullableFilter<"ScreenNode"> | string | null
    nodeType?: StringNullableFilter<"ScreenNode"> | string | null
    positionX?: FloatNullableFilter<"ScreenNode"> | number | null
    positionY?: FloatNullableFilter<"ScreenNode"> | number | null
    uiTreeJson?: JsonNullableFilter<"ScreenNode">
    depth?: IntFilter<"ScreenNode"> | number
    hash?: StringFilter<"ScreenNode"> | string
    clickableCount?: IntFilter<"ScreenNode"> | number
    createdAt?: DateTimeFilter<"ScreenNode"> | Date | string
    reviewRun?: XOR<ReviewRunScalarRelationFilter, ReviewRunWhereInput>
    outgoingEdges?: ScreenEdgeListRelationFilter
    incomingEdges?: ScreenEdgeListRelationFilter
    comments?: NodeCommentListRelationFilter
  }

  export type ScreenNodeOrderByWithRelationInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    screenshotPath?: SortOrder
    activityName?: SortOrderInput | SortOrder
    stateName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    flowName?: SortOrderInput | SortOrder
    nodeType?: SortOrderInput | SortOrder
    positionX?: SortOrderInput | SortOrder
    positionY?: SortOrderInput | SortOrder
    uiTreeJson?: SortOrderInput | SortOrder
    depth?: SortOrder
    hash?: SortOrder
    clickableCount?: SortOrder
    createdAt?: SortOrder
    reviewRun?: ReviewRunOrderByWithRelationInput
    outgoingEdges?: ScreenEdgeOrderByRelationAggregateInput
    incomingEdges?: ScreenEdgeOrderByRelationAggregateInput
    comments?: NodeCommentOrderByRelationAggregateInput
  }

  export type ScreenNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScreenNodeWhereInput | ScreenNodeWhereInput[]
    OR?: ScreenNodeWhereInput[]
    NOT?: ScreenNodeWhereInput | ScreenNodeWhereInput[]
    reviewRunId?: StringFilter<"ScreenNode"> | string
    screenshotPath?: StringFilter<"ScreenNode"> | string
    activityName?: StringNullableFilter<"ScreenNode"> | string | null
    stateName?: StringNullableFilter<"ScreenNode"> | string | null
    name?: StringNullableFilter<"ScreenNode"> | string | null
    flowName?: StringNullableFilter<"ScreenNode"> | string | null
    nodeType?: StringNullableFilter<"ScreenNode"> | string | null
    positionX?: FloatNullableFilter<"ScreenNode"> | number | null
    positionY?: FloatNullableFilter<"ScreenNode"> | number | null
    uiTreeJson?: JsonNullableFilter<"ScreenNode">
    depth?: IntFilter<"ScreenNode"> | number
    hash?: StringFilter<"ScreenNode"> | string
    clickableCount?: IntFilter<"ScreenNode"> | number
    createdAt?: DateTimeFilter<"ScreenNode"> | Date | string
    reviewRun?: XOR<ReviewRunScalarRelationFilter, ReviewRunWhereInput>
    outgoingEdges?: ScreenEdgeListRelationFilter
    incomingEdges?: ScreenEdgeListRelationFilter
    comments?: NodeCommentListRelationFilter
  }, "id">

  export type ScreenNodeOrderByWithAggregationInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    screenshotPath?: SortOrder
    activityName?: SortOrderInput | SortOrder
    stateName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    flowName?: SortOrderInput | SortOrder
    nodeType?: SortOrderInput | SortOrder
    positionX?: SortOrderInput | SortOrder
    positionY?: SortOrderInput | SortOrder
    uiTreeJson?: SortOrderInput | SortOrder
    depth?: SortOrder
    hash?: SortOrder
    clickableCount?: SortOrder
    createdAt?: SortOrder
    _count?: ScreenNodeCountOrderByAggregateInput
    _avg?: ScreenNodeAvgOrderByAggregateInput
    _max?: ScreenNodeMaxOrderByAggregateInput
    _min?: ScreenNodeMinOrderByAggregateInput
    _sum?: ScreenNodeSumOrderByAggregateInput
  }

  export type ScreenNodeScalarWhereWithAggregatesInput = {
    AND?: ScreenNodeScalarWhereWithAggregatesInput | ScreenNodeScalarWhereWithAggregatesInput[]
    OR?: ScreenNodeScalarWhereWithAggregatesInput[]
    NOT?: ScreenNodeScalarWhereWithAggregatesInput | ScreenNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScreenNode"> | string
    reviewRunId?: StringWithAggregatesFilter<"ScreenNode"> | string
    screenshotPath?: StringWithAggregatesFilter<"ScreenNode"> | string
    activityName?: StringNullableWithAggregatesFilter<"ScreenNode"> | string | null
    stateName?: StringNullableWithAggregatesFilter<"ScreenNode"> | string | null
    name?: StringNullableWithAggregatesFilter<"ScreenNode"> | string | null
    flowName?: StringNullableWithAggregatesFilter<"ScreenNode"> | string | null
    nodeType?: StringNullableWithAggregatesFilter<"ScreenNode"> | string | null
    positionX?: FloatNullableWithAggregatesFilter<"ScreenNode"> | number | null
    positionY?: FloatNullableWithAggregatesFilter<"ScreenNode"> | number | null
    uiTreeJson?: JsonNullableWithAggregatesFilter<"ScreenNode">
    depth?: IntWithAggregatesFilter<"ScreenNode"> | number
    hash?: StringWithAggregatesFilter<"ScreenNode"> | string
    clickableCount?: IntWithAggregatesFilter<"ScreenNode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ScreenNode"> | Date | string
  }

  export type ScreenEdgeWhereInput = {
    AND?: ScreenEdgeWhereInput | ScreenEdgeWhereInput[]
    OR?: ScreenEdgeWhereInput[]
    NOT?: ScreenEdgeWhereInput | ScreenEdgeWhereInput[]
    id?: StringFilter<"ScreenEdge"> | string
    reviewRunId?: StringFilter<"ScreenEdge"> | string
    fromNodeId?: StringNullableFilter<"ScreenEdge"> | string | null
    toNodeId?: StringFilter<"ScreenEdge"> | string
    actionType?: StringFilter<"ScreenEdge"> | string
    targetLabel?: StringNullableFilter<"ScreenEdge"> | string | null
    targetText?: StringNullableFilter<"ScreenEdge"> | string | null
    targetBounds?: JsonNullableFilter<"ScreenEdge">
    createdAt?: DateTimeFilter<"ScreenEdge"> | Date | string
    reviewRun?: XOR<ReviewRunScalarRelationFilter, ReviewRunWhereInput>
    fromNode?: XOR<ScreenNodeNullableScalarRelationFilter, ScreenNodeWhereInput> | null
    toNode?: XOR<ScreenNodeScalarRelationFilter, ScreenNodeWhereInput>
  }

  export type ScreenEdgeOrderByWithRelationInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    fromNodeId?: SortOrderInput | SortOrder
    toNodeId?: SortOrder
    actionType?: SortOrder
    targetLabel?: SortOrderInput | SortOrder
    targetText?: SortOrderInput | SortOrder
    targetBounds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewRun?: ReviewRunOrderByWithRelationInput
    fromNode?: ScreenNodeOrderByWithRelationInput
    toNode?: ScreenNodeOrderByWithRelationInput
  }

  export type ScreenEdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScreenEdgeWhereInput | ScreenEdgeWhereInput[]
    OR?: ScreenEdgeWhereInput[]
    NOT?: ScreenEdgeWhereInput | ScreenEdgeWhereInput[]
    reviewRunId?: StringFilter<"ScreenEdge"> | string
    fromNodeId?: StringNullableFilter<"ScreenEdge"> | string | null
    toNodeId?: StringFilter<"ScreenEdge"> | string
    actionType?: StringFilter<"ScreenEdge"> | string
    targetLabel?: StringNullableFilter<"ScreenEdge"> | string | null
    targetText?: StringNullableFilter<"ScreenEdge"> | string | null
    targetBounds?: JsonNullableFilter<"ScreenEdge">
    createdAt?: DateTimeFilter<"ScreenEdge"> | Date | string
    reviewRun?: XOR<ReviewRunScalarRelationFilter, ReviewRunWhereInput>
    fromNode?: XOR<ScreenNodeNullableScalarRelationFilter, ScreenNodeWhereInput> | null
    toNode?: XOR<ScreenNodeScalarRelationFilter, ScreenNodeWhereInput>
  }, "id">

  export type ScreenEdgeOrderByWithAggregationInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    fromNodeId?: SortOrderInput | SortOrder
    toNodeId?: SortOrder
    actionType?: SortOrder
    targetLabel?: SortOrderInput | SortOrder
    targetText?: SortOrderInput | SortOrder
    targetBounds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScreenEdgeCountOrderByAggregateInput
    _max?: ScreenEdgeMaxOrderByAggregateInput
    _min?: ScreenEdgeMinOrderByAggregateInput
  }

  export type ScreenEdgeScalarWhereWithAggregatesInput = {
    AND?: ScreenEdgeScalarWhereWithAggregatesInput | ScreenEdgeScalarWhereWithAggregatesInput[]
    OR?: ScreenEdgeScalarWhereWithAggregatesInput[]
    NOT?: ScreenEdgeScalarWhereWithAggregatesInput | ScreenEdgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScreenEdge"> | string
    reviewRunId?: StringWithAggregatesFilter<"ScreenEdge"> | string
    fromNodeId?: StringNullableWithAggregatesFilter<"ScreenEdge"> | string | null
    toNodeId?: StringWithAggregatesFilter<"ScreenEdge"> | string
    actionType?: StringWithAggregatesFilter<"ScreenEdge"> | string
    targetLabel?: StringNullableWithAggregatesFilter<"ScreenEdge"> | string | null
    targetText?: StringNullableWithAggregatesFilter<"ScreenEdge"> | string | null
    targetBounds?: JsonNullableWithAggregatesFilter<"ScreenEdge">
    createdAt?: DateTimeWithAggregatesFilter<"ScreenEdge"> | Date | string
  }

  export type NodeCommentWhereInput = {
    AND?: NodeCommentWhereInput | NodeCommentWhereInput[]
    OR?: NodeCommentWhereInput[]
    NOT?: NodeCommentWhereInput | NodeCommentWhereInput[]
    id?: StringFilter<"NodeComment"> | string
    screenNodeId?: StringFilter<"NodeComment"> | string
    body?: StringFilter<"NodeComment"> | string
    issueType?: EnumIssueTypeNullableFilter<"NodeComment"> | $Enums.IssueType | null
    status?: EnumCommentStatusFilter<"NodeComment"> | $Enums.CommentStatus
    createdById?: StringNullableFilter<"NodeComment"> | string | null
    createdByName?: StringNullableFilter<"NodeComment"> | string | null
    createdAt?: DateTimeFilter<"NodeComment"> | Date | string
    updatedAt?: DateTimeFilter<"NodeComment"> | Date | string
    screenNode?: XOR<ScreenNodeScalarRelationFilter, ScreenNodeWhereInput>
  }

  export type NodeCommentOrderByWithRelationInput = {
    id?: SortOrder
    screenNodeId?: SortOrder
    body?: SortOrder
    issueType?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    screenNode?: ScreenNodeOrderByWithRelationInput
  }

  export type NodeCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeCommentWhereInput | NodeCommentWhereInput[]
    OR?: NodeCommentWhereInput[]
    NOT?: NodeCommentWhereInput | NodeCommentWhereInput[]
    screenNodeId?: StringFilter<"NodeComment"> | string
    body?: StringFilter<"NodeComment"> | string
    issueType?: EnumIssueTypeNullableFilter<"NodeComment"> | $Enums.IssueType | null
    status?: EnumCommentStatusFilter<"NodeComment"> | $Enums.CommentStatus
    createdById?: StringNullableFilter<"NodeComment"> | string | null
    createdByName?: StringNullableFilter<"NodeComment"> | string | null
    createdAt?: DateTimeFilter<"NodeComment"> | Date | string
    updatedAt?: DateTimeFilter<"NodeComment"> | Date | string
    screenNode?: XOR<ScreenNodeScalarRelationFilter, ScreenNodeWhereInput>
  }, "id">

  export type NodeCommentOrderByWithAggregationInput = {
    id?: SortOrder
    screenNodeId?: SortOrder
    body?: SortOrder
    issueType?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NodeCommentCountOrderByAggregateInput
    _max?: NodeCommentMaxOrderByAggregateInput
    _min?: NodeCommentMinOrderByAggregateInput
  }

  export type NodeCommentScalarWhereWithAggregatesInput = {
    AND?: NodeCommentScalarWhereWithAggregatesInput | NodeCommentScalarWhereWithAggregatesInput[]
    OR?: NodeCommentScalarWhereWithAggregatesInput[]
    NOT?: NodeCommentScalarWhereWithAggregatesInput | NodeCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NodeComment"> | string
    screenNodeId?: StringWithAggregatesFilter<"NodeComment"> | string
    body?: StringWithAggregatesFilter<"NodeComment"> | string
    issueType?: EnumIssueTypeNullableWithAggregatesFilter<"NodeComment"> | $Enums.IssueType | null
    status?: EnumCommentStatusWithAggregatesFilter<"NodeComment"> | $Enums.CommentStatus
    createdById?: StringNullableWithAggregatesFilter<"NodeComment"> | string | null
    createdByName?: StringNullableWithAggregatesFilter<"NodeComment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NodeComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NodeComment"> | Date | string
  }

  export type ExplorationActionWhereInput = {
    AND?: ExplorationActionWhereInput | ExplorationActionWhereInput[]
    OR?: ExplorationActionWhereInput[]
    NOT?: ExplorationActionWhereInput | ExplorationActionWhereInput[]
    id?: StringFilter<"ExplorationAction"> | string
    reviewRunId?: StringFilter<"ExplorationAction"> | string
    type?: EnumExplorationActionTypeFilter<"ExplorationAction"> | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFilter<"ExplorationAction"> | $Enums.ExplorationActionStatus
    fromNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    targetNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    hotspotKey?: StringNullableFilter<"ExplorationAction"> | string | null
    targetLabel?: StringNullableFilter<"ExplorationAction"> | string | null
    targetBounds?: JsonNullableFilter<"ExplorationAction">
    resultNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    isExistingNode?: BoolFilter<"ExplorationAction"> | boolean
    errorMessage?: StringNullableFilter<"ExplorationAction"> | string | null
    createdAt?: DateTimeFilter<"ExplorationAction"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExplorationAction"> | Date | string | null
    reviewRun?: XOR<ReviewRunScalarRelationFilter, ReviewRunWhereInput>
  }

  export type ExplorationActionOrderByWithRelationInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fromNodeId?: SortOrderInput | SortOrder
    targetNodeId?: SortOrderInput | SortOrder
    hotspotKey?: SortOrderInput | SortOrder
    targetLabel?: SortOrderInput | SortOrder
    targetBounds?: SortOrderInput | SortOrder
    resultNodeId?: SortOrderInput | SortOrder
    isExistingNode?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    reviewRun?: ReviewRunOrderByWithRelationInput
  }

  export type ExplorationActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExplorationActionWhereInput | ExplorationActionWhereInput[]
    OR?: ExplorationActionWhereInput[]
    NOT?: ExplorationActionWhereInput | ExplorationActionWhereInput[]
    reviewRunId?: StringFilter<"ExplorationAction"> | string
    type?: EnumExplorationActionTypeFilter<"ExplorationAction"> | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFilter<"ExplorationAction"> | $Enums.ExplorationActionStatus
    fromNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    targetNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    hotspotKey?: StringNullableFilter<"ExplorationAction"> | string | null
    targetLabel?: StringNullableFilter<"ExplorationAction"> | string | null
    targetBounds?: JsonNullableFilter<"ExplorationAction">
    resultNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    isExistingNode?: BoolFilter<"ExplorationAction"> | boolean
    errorMessage?: StringNullableFilter<"ExplorationAction"> | string | null
    createdAt?: DateTimeFilter<"ExplorationAction"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExplorationAction"> | Date | string | null
    reviewRun?: XOR<ReviewRunScalarRelationFilter, ReviewRunWhereInput>
  }, "id">

  export type ExplorationActionOrderByWithAggregationInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fromNodeId?: SortOrderInput | SortOrder
    targetNodeId?: SortOrderInput | SortOrder
    hotspotKey?: SortOrderInput | SortOrder
    targetLabel?: SortOrderInput | SortOrder
    targetBounds?: SortOrderInput | SortOrder
    resultNodeId?: SortOrderInput | SortOrder
    isExistingNode?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ExplorationActionCountOrderByAggregateInput
    _max?: ExplorationActionMaxOrderByAggregateInput
    _min?: ExplorationActionMinOrderByAggregateInput
  }

  export type ExplorationActionScalarWhereWithAggregatesInput = {
    AND?: ExplorationActionScalarWhereWithAggregatesInput | ExplorationActionScalarWhereWithAggregatesInput[]
    OR?: ExplorationActionScalarWhereWithAggregatesInput[]
    NOT?: ExplorationActionScalarWhereWithAggregatesInput | ExplorationActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExplorationAction"> | string
    reviewRunId?: StringWithAggregatesFilter<"ExplorationAction"> | string
    type?: EnumExplorationActionTypeWithAggregatesFilter<"ExplorationAction"> | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusWithAggregatesFilter<"ExplorationAction"> | $Enums.ExplorationActionStatus
    fromNodeId?: StringNullableWithAggregatesFilter<"ExplorationAction"> | string | null
    targetNodeId?: StringNullableWithAggregatesFilter<"ExplorationAction"> | string | null
    hotspotKey?: StringNullableWithAggregatesFilter<"ExplorationAction"> | string | null
    targetLabel?: StringNullableWithAggregatesFilter<"ExplorationAction"> | string | null
    targetBounds?: JsonNullableWithAggregatesFilter<"ExplorationAction">
    resultNodeId?: StringNullableWithAggregatesFilter<"ExplorationAction"> | string | null
    isExistingNode?: BoolWithAggregatesFilter<"ExplorationAction"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"ExplorationAction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExplorationAction"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ExplorationAction"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: ApkBuildCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: ApkBuildUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: ApkBuildUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: ApkBuildUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApkBuildCreateInput = {
    id?: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBuildsInput
    runs?: ReviewRunCreateNestedManyWithoutApkBuildInput
  }

  export type ApkBuildUncheckedCreateInput = {
    id?: string
    projectId: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
    runs?: ReviewRunUncheckedCreateNestedManyWithoutApkBuildInput
  }

  export type ApkBuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBuildsNestedInput
    runs?: ReviewRunUpdateManyWithoutApkBuildNestedInput
  }

  export type ApkBuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: ReviewRunUncheckedUpdateManyWithoutApkBuildNestedInput
  }

  export type ApkBuildCreateManyInput = {
    id?: string
    projectId: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
  }

  export type ApkBuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApkBuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRunCreateInput = {
    id?: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apkBuild: ApkBuildCreateNestedOneWithoutRunsInput
    nodes?: ScreenNodeCreateNestedManyWithoutReviewRunInput
    edges?: ScreenEdgeCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunUncheckedCreateInput = {
    id?: string
    apkBuildId: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: ScreenNodeUncheckedCreateNestedManyWithoutReviewRunInput
    edges?: ScreenEdgeUncheckedCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionUncheckedCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apkBuild?: ApkBuildUpdateOneRequiredWithoutRunsNestedInput
    nodes?: ScreenNodeUpdateManyWithoutReviewRunNestedInput
    edges?: ScreenEdgeUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUpdateManyWithoutReviewRunNestedInput
  }

  export type ReviewRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apkBuildId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: ScreenNodeUncheckedUpdateManyWithoutReviewRunNestedInput
    edges?: ScreenEdgeUncheckedUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUncheckedUpdateManyWithoutReviewRunNestedInput
  }

  export type ReviewRunCreateManyInput = {
    id?: string
    apkBuildId: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apkBuildId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenNodeCreateInput = {
    id?: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    reviewRun: ReviewRunCreateNestedOneWithoutNodesInput
    outgoingEdges?: ScreenEdgeCreateNestedManyWithoutFromNodeInput
    incomingEdges?: ScreenEdgeCreateNestedManyWithoutToNodeInput
    comments?: NodeCommentCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeUncheckedCreateInput = {
    id?: string
    reviewRunId: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    outgoingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutFromNodeInput
    incomingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutToNodeInput
    comments?: NodeCommentUncheckedCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewRun?: ReviewRunUpdateOneRequiredWithoutNodesNestedInput
    outgoingEdges?: ScreenEdgeUpdateManyWithoutFromNodeNestedInput
    incomingEdges?: ScreenEdgeUpdateManyWithoutToNodeNestedInput
    comments?: NodeCommentUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingEdges?: ScreenEdgeUncheckedUpdateManyWithoutFromNodeNestedInput
    incomingEdges?: ScreenEdgeUncheckedUpdateManyWithoutToNodeNestedInput
    comments?: NodeCommentUncheckedUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeCreateManyInput = {
    id?: string
    reviewRunId: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
  }

  export type ScreenNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeCreateInput = {
    id?: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    reviewRun: ReviewRunCreateNestedOneWithoutEdgesInput
    fromNode?: ScreenNodeCreateNestedOneWithoutOutgoingEdgesInput
    toNode: ScreenNodeCreateNestedOneWithoutIncomingEdgesInput
  }

  export type ScreenEdgeUncheckedCreateInput = {
    id?: string
    reviewRunId: string
    fromNodeId?: string | null
    toNodeId: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreenEdgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewRun?: ReviewRunUpdateOneRequiredWithoutEdgesNestedInput
    fromNode?: ScreenNodeUpdateOneWithoutOutgoingEdgesNestedInput
    toNode?: ScreenNodeUpdateOneRequiredWithoutIncomingEdgesNestedInput
  }

  export type ScreenEdgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    toNodeId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeCreateManyInput = {
    id?: string
    reviewRunId: string
    fromNodeId?: string | null
    toNodeId: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreenEdgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    toNodeId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCommentCreateInput = {
    id?: string
    body: string
    issueType?: $Enums.IssueType | null
    status?: $Enums.CommentStatus
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenNode: ScreenNodeCreateNestedOneWithoutCommentsInput
  }

  export type NodeCommentUncheckedCreateInput = {
    id?: string
    screenNodeId: string
    body: string
    issueType?: $Enums.IssueType | null
    status?: $Enums.CommentStatus
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    issueType?: NullableEnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenNode?: ScreenNodeUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type NodeCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenNodeId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    issueType?: NullableEnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCommentCreateManyInput = {
    id?: string
    screenNodeId: string
    body: string
    issueType?: $Enums.IssueType | null
    status?: $Enums.CommentStatus
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    issueType?: NullableEnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenNodeId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    issueType?: NullableEnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExplorationActionCreateInput = {
    id?: string
    type: $Enums.ExplorationActionType
    status?: $Enums.ExplorationActionStatus
    fromNodeId?: string | null
    targetNodeId?: string | null
    hotspotKey?: string | null
    targetLabel?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: string | null
    isExistingNode?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    reviewRun: ReviewRunCreateNestedOneWithoutActionsInput
  }

  export type ExplorationActionUncheckedCreateInput = {
    id?: string
    reviewRunId: string
    type: $Enums.ExplorationActionType
    status?: $Enums.ExplorationActionStatus
    fromNodeId?: string | null
    targetNodeId?: string | null
    hotspotKey?: string | null
    targetLabel?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: string | null
    isExistingNode?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ExplorationActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExplorationActionTypeFieldUpdateOperationsInput | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFieldUpdateOperationsInput | $Enums.ExplorationActionStatus
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    targetNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotKey?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    isExistingNode?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewRun?: ReviewRunUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ExplorationActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    type?: EnumExplorationActionTypeFieldUpdateOperationsInput | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFieldUpdateOperationsInput | $Enums.ExplorationActionStatus
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    targetNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotKey?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    isExistingNode?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExplorationActionCreateManyInput = {
    id?: string
    reviewRunId: string
    type: $Enums.ExplorationActionType
    status?: $Enums.ExplorationActionStatus
    fromNodeId?: string | null
    targetNodeId?: string | null
    hotspotKey?: string | null
    targetLabel?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: string | null
    isExistingNode?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ExplorationActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExplorationActionTypeFieldUpdateOperationsInput | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFieldUpdateOperationsInput | $Enums.ExplorationActionStatus
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    targetNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotKey?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    isExistingNode?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExplorationActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    type?: EnumExplorationActionTypeFieldUpdateOperationsInput | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFieldUpdateOperationsInput | $Enums.ExplorationActionStatus
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    targetNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotKey?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    isExistingNode?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ApkBuildListRelationFilter = {
    every?: ApkBuildWhereInput
    some?: ApkBuildWhereInput
    none?: ApkBuildWhereInput
  }

  export type ApkBuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ReviewRunListRelationFilter = {
    every?: ReviewRunWhereInput
    some?: ReviewRunWhereInput
    none?: ReviewRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApkBuildCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    packageName?: SortOrder
    versionName?: SortOrder
    versionCode?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApkBuildMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    packageName?: SortOrder
    versionName?: SortOrder
    versionCode?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApkBuildMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    packageName?: SortOrder
    versionName?: SortOrder
    versionCode?: SortOrder
    uploadedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumReviewRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewRunStatus | EnumReviewRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewRunStatusFilter<$PrismaModel> | $Enums.ReviewRunStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApkBuildScalarRelationFilter = {
    is?: ApkBuildWhereInput
    isNot?: ApkBuildWhereInput
  }

  export type ScreenNodeListRelationFilter = {
    every?: ScreenNodeWhereInput
    some?: ScreenNodeWhereInput
    none?: ScreenNodeWhereInput
  }

  export type ScreenEdgeListRelationFilter = {
    every?: ScreenEdgeWhereInput
    some?: ScreenEdgeWhereInput
    none?: ScreenEdgeWhereInput
  }

  export type ExplorationActionListRelationFilter = {
    every?: ExplorationActionWhereInput
    some?: ExplorationActionWhereInput
    none?: ExplorationActionWhereInput
  }

  export type ScreenNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreenEdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExplorationActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewRunCountOrderByAggregateInput = {
    id?: SortOrder
    apkBuildId?: SortOrder
    status?: SortOrder
    maxDepth?: SortOrder
    maxNodes?: SortOrder
    maxTapsPerScreen?: SortOrder
    currentNodeId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewRunAvgOrderByAggregateInput = {
    maxDepth?: SortOrder
    maxNodes?: SortOrder
    maxTapsPerScreen?: SortOrder
  }

  export type ReviewRunMaxOrderByAggregateInput = {
    id?: SortOrder
    apkBuildId?: SortOrder
    status?: SortOrder
    maxDepth?: SortOrder
    maxNodes?: SortOrder
    maxTapsPerScreen?: SortOrder
    currentNodeId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewRunMinOrderByAggregateInput = {
    id?: SortOrder
    apkBuildId?: SortOrder
    status?: SortOrder
    maxDepth?: SortOrder
    maxNodes?: SortOrder
    maxTapsPerScreen?: SortOrder
    currentNodeId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewRunSumOrderByAggregateInput = {
    maxDepth?: SortOrder
    maxNodes?: SortOrder
    maxTapsPerScreen?: SortOrder
  }

  export type EnumReviewRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewRunStatus | EnumReviewRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewRunStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewRunStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReviewRunScalarRelationFilter = {
    is?: ReviewRunWhereInput
    isNot?: ReviewRunWhereInput
  }

  export type NodeCommentListRelationFilter = {
    every?: NodeCommentWhereInput
    some?: NodeCommentWhereInput
    none?: NodeCommentWhereInput
  }

  export type NodeCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreenNodeCountOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    screenshotPath?: SortOrder
    activityName?: SortOrder
    stateName?: SortOrder
    name?: SortOrder
    flowName?: SortOrder
    nodeType?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    uiTreeJson?: SortOrder
    depth?: SortOrder
    hash?: SortOrder
    clickableCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenNodeAvgOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
    depth?: SortOrder
    clickableCount?: SortOrder
  }

  export type ScreenNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    screenshotPath?: SortOrder
    activityName?: SortOrder
    stateName?: SortOrder
    name?: SortOrder
    flowName?: SortOrder
    nodeType?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    depth?: SortOrder
    hash?: SortOrder
    clickableCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenNodeMinOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    screenshotPath?: SortOrder
    activityName?: SortOrder
    stateName?: SortOrder
    name?: SortOrder
    flowName?: SortOrder
    nodeType?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    depth?: SortOrder
    hash?: SortOrder
    clickableCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenNodeSumOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
    depth?: SortOrder
    clickableCount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ScreenNodeNullableScalarRelationFilter = {
    is?: ScreenNodeWhereInput | null
    isNot?: ScreenNodeWhereInput | null
  }

  export type ScreenNodeScalarRelationFilter = {
    is?: ScreenNodeWhereInput
    isNot?: ScreenNodeWhereInput
  }

  export type ScreenEdgeCountOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    actionType?: SortOrder
    targetLabel?: SortOrder
    targetText?: SortOrder
    targetBounds?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenEdgeMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    actionType?: SortOrder
    targetLabel?: SortOrder
    targetText?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenEdgeMinOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    actionType?: SortOrder
    targetLabel?: SortOrder
    targetText?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumIssueTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueTypeNullableFilter<$PrismaModel> | $Enums.IssueType | null
  }

  export type EnumCommentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus
  }

  export type NodeCommentCountOrderByAggregateInput = {
    id?: SortOrder
    screenNodeId?: SortOrder
    body?: SortOrder
    issueType?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    screenNodeId?: SortOrder
    body?: SortOrder
    issueType?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeCommentMinOrderByAggregateInput = {
    id?: SortOrder
    screenNodeId?: SortOrder
    body?: SortOrder
    issueType?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIssueTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.IssueType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIssueTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIssueTypeNullableFilter<$PrismaModel>
  }

  export type EnumCommentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>
  }

  export type EnumExplorationActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionType | EnumExplorationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionTypeFilter<$PrismaModel> | $Enums.ExplorationActionType
  }

  export type EnumExplorationActionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionStatus | EnumExplorationActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionStatusFilter<$PrismaModel> | $Enums.ExplorationActionStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExplorationActionCountOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fromNodeId?: SortOrder
    targetNodeId?: SortOrder
    hotspotKey?: SortOrder
    targetLabel?: SortOrder
    targetBounds?: SortOrder
    resultNodeId?: SortOrder
    isExistingNode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ExplorationActionMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fromNodeId?: SortOrder
    targetNodeId?: SortOrder
    hotspotKey?: SortOrder
    targetLabel?: SortOrder
    resultNodeId?: SortOrder
    isExistingNode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ExplorationActionMinOrderByAggregateInput = {
    id?: SortOrder
    reviewRunId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fromNodeId?: SortOrder
    targetNodeId?: SortOrder
    hotspotKey?: SortOrder
    targetLabel?: SortOrder
    resultNodeId?: SortOrder
    isExistingNode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EnumExplorationActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionType | EnumExplorationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExplorationActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExplorationActionTypeFilter<$PrismaModel>
    _max?: NestedEnumExplorationActionTypeFilter<$PrismaModel>
  }

  export type EnumExplorationActionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionStatus | EnumExplorationActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExplorationActionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExplorationActionStatusFilter<$PrismaModel>
    _max?: NestedEnumExplorationActionStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApkBuildCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApkBuildCreateWithoutProjectInput, ApkBuildUncheckedCreateWithoutProjectInput> | ApkBuildCreateWithoutProjectInput[] | ApkBuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApkBuildCreateOrConnectWithoutProjectInput | ApkBuildCreateOrConnectWithoutProjectInput[]
    createMany?: ApkBuildCreateManyProjectInputEnvelope
    connect?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
  }

  export type ApkBuildUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApkBuildCreateWithoutProjectInput, ApkBuildUncheckedCreateWithoutProjectInput> | ApkBuildCreateWithoutProjectInput[] | ApkBuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApkBuildCreateOrConnectWithoutProjectInput | ApkBuildCreateOrConnectWithoutProjectInput[]
    createMany?: ApkBuildCreateManyProjectInputEnvelope
    connect?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
  }

  export type ApkBuildUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApkBuildCreateWithoutProjectInput, ApkBuildUncheckedCreateWithoutProjectInput> | ApkBuildCreateWithoutProjectInput[] | ApkBuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApkBuildCreateOrConnectWithoutProjectInput | ApkBuildCreateOrConnectWithoutProjectInput[]
    upsert?: ApkBuildUpsertWithWhereUniqueWithoutProjectInput | ApkBuildUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApkBuildCreateManyProjectInputEnvelope
    set?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    disconnect?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    delete?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    connect?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    update?: ApkBuildUpdateWithWhereUniqueWithoutProjectInput | ApkBuildUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApkBuildUpdateManyWithWhereWithoutProjectInput | ApkBuildUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApkBuildScalarWhereInput | ApkBuildScalarWhereInput[]
  }

  export type ApkBuildUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApkBuildCreateWithoutProjectInput, ApkBuildUncheckedCreateWithoutProjectInput> | ApkBuildCreateWithoutProjectInput[] | ApkBuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApkBuildCreateOrConnectWithoutProjectInput | ApkBuildCreateOrConnectWithoutProjectInput[]
    upsert?: ApkBuildUpsertWithWhereUniqueWithoutProjectInput | ApkBuildUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApkBuildCreateManyProjectInputEnvelope
    set?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    disconnect?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    delete?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    connect?: ApkBuildWhereUniqueInput | ApkBuildWhereUniqueInput[]
    update?: ApkBuildUpdateWithWhereUniqueWithoutProjectInput | ApkBuildUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApkBuildUpdateManyWithWhereWithoutProjectInput | ApkBuildUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApkBuildScalarWhereInput | ApkBuildScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutBuildsInput = {
    create?: XOR<ProjectCreateWithoutBuildsInput, ProjectUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ReviewRunCreateNestedManyWithoutApkBuildInput = {
    create?: XOR<ReviewRunCreateWithoutApkBuildInput, ReviewRunUncheckedCreateWithoutApkBuildInput> | ReviewRunCreateWithoutApkBuildInput[] | ReviewRunUncheckedCreateWithoutApkBuildInput[]
    connectOrCreate?: ReviewRunCreateOrConnectWithoutApkBuildInput | ReviewRunCreateOrConnectWithoutApkBuildInput[]
    createMany?: ReviewRunCreateManyApkBuildInputEnvelope
    connect?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
  }

  export type ReviewRunUncheckedCreateNestedManyWithoutApkBuildInput = {
    create?: XOR<ReviewRunCreateWithoutApkBuildInput, ReviewRunUncheckedCreateWithoutApkBuildInput> | ReviewRunCreateWithoutApkBuildInput[] | ReviewRunUncheckedCreateWithoutApkBuildInput[]
    connectOrCreate?: ReviewRunCreateOrConnectWithoutApkBuildInput | ReviewRunCreateOrConnectWithoutApkBuildInput[]
    createMany?: ReviewRunCreateManyApkBuildInputEnvelope
    connect?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutBuildsNestedInput = {
    create?: XOR<ProjectCreateWithoutBuildsInput, ProjectUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildsInput
    upsert?: ProjectUpsertWithoutBuildsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBuildsInput, ProjectUpdateWithoutBuildsInput>, ProjectUncheckedUpdateWithoutBuildsInput>
  }

  export type ReviewRunUpdateManyWithoutApkBuildNestedInput = {
    create?: XOR<ReviewRunCreateWithoutApkBuildInput, ReviewRunUncheckedCreateWithoutApkBuildInput> | ReviewRunCreateWithoutApkBuildInput[] | ReviewRunUncheckedCreateWithoutApkBuildInput[]
    connectOrCreate?: ReviewRunCreateOrConnectWithoutApkBuildInput | ReviewRunCreateOrConnectWithoutApkBuildInput[]
    upsert?: ReviewRunUpsertWithWhereUniqueWithoutApkBuildInput | ReviewRunUpsertWithWhereUniqueWithoutApkBuildInput[]
    createMany?: ReviewRunCreateManyApkBuildInputEnvelope
    set?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    disconnect?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    delete?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    connect?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    update?: ReviewRunUpdateWithWhereUniqueWithoutApkBuildInput | ReviewRunUpdateWithWhereUniqueWithoutApkBuildInput[]
    updateMany?: ReviewRunUpdateManyWithWhereWithoutApkBuildInput | ReviewRunUpdateManyWithWhereWithoutApkBuildInput[]
    deleteMany?: ReviewRunScalarWhereInput | ReviewRunScalarWhereInput[]
  }

  export type ReviewRunUncheckedUpdateManyWithoutApkBuildNestedInput = {
    create?: XOR<ReviewRunCreateWithoutApkBuildInput, ReviewRunUncheckedCreateWithoutApkBuildInput> | ReviewRunCreateWithoutApkBuildInput[] | ReviewRunUncheckedCreateWithoutApkBuildInput[]
    connectOrCreate?: ReviewRunCreateOrConnectWithoutApkBuildInput | ReviewRunCreateOrConnectWithoutApkBuildInput[]
    upsert?: ReviewRunUpsertWithWhereUniqueWithoutApkBuildInput | ReviewRunUpsertWithWhereUniqueWithoutApkBuildInput[]
    createMany?: ReviewRunCreateManyApkBuildInputEnvelope
    set?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    disconnect?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    delete?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    connect?: ReviewRunWhereUniqueInput | ReviewRunWhereUniqueInput[]
    update?: ReviewRunUpdateWithWhereUniqueWithoutApkBuildInput | ReviewRunUpdateWithWhereUniqueWithoutApkBuildInput[]
    updateMany?: ReviewRunUpdateManyWithWhereWithoutApkBuildInput | ReviewRunUpdateManyWithWhereWithoutApkBuildInput[]
    deleteMany?: ReviewRunScalarWhereInput | ReviewRunScalarWhereInput[]
  }

  export type ApkBuildCreateNestedOneWithoutRunsInput = {
    create?: XOR<ApkBuildCreateWithoutRunsInput, ApkBuildUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ApkBuildCreateOrConnectWithoutRunsInput
    connect?: ApkBuildWhereUniqueInput
  }

  export type ScreenNodeCreateNestedManyWithoutReviewRunInput = {
    create?: XOR<ScreenNodeCreateWithoutReviewRunInput, ScreenNodeUncheckedCreateWithoutReviewRunInput> | ScreenNodeCreateWithoutReviewRunInput[] | ScreenNodeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutReviewRunInput | ScreenNodeCreateOrConnectWithoutReviewRunInput[]
    createMany?: ScreenNodeCreateManyReviewRunInputEnvelope
    connect?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
  }

  export type ScreenEdgeCreateNestedManyWithoutReviewRunInput = {
    create?: XOR<ScreenEdgeCreateWithoutReviewRunInput, ScreenEdgeUncheckedCreateWithoutReviewRunInput> | ScreenEdgeCreateWithoutReviewRunInput[] | ScreenEdgeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutReviewRunInput | ScreenEdgeCreateOrConnectWithoutReviewRunInput[]
    createMany?: ScreenEdgeCreateManyReviewRunInputEnvelope
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
  }

  export type ExplorationActionCreateNestedManyWithoutReviewRunInput = {
    create?: XOR<ExplorationActionCreateWithoutReviewRunInput, ExplorationActionUncheckedCreateWithoutReviewRunInput> | ExplorationActionCreateWithoutReviewRunInput[] | ExplorationActionUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ExplorationActionCreateOrConnectWithoutReviewRunInput | ExplorationActionCreateOrConnectWithoutReviewRunInput[]
    createMany?: ExplorationActionCreateManyReviewRunInputEnvelope
    connect?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
  }

  export type ScreenNodeUncheckedCreateNestedManyWithoutReviewRunInput = {
    create?: XOR<ScreenNodeCreateWithoutReviewRunInput, ScreenNodeUncheckedCreateWithoutReviewRunInput> | ScreenNodeCreateWithoutReviewRunInput[] | ScreenNodeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutReviewRunInput | ScreenNodeCreateOrConnectWithoutReviewRunInput[]
    createMany?: ScreenNodeCreateManyReviewRunInputEnvelope
    connect?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
  }

  export type ScreenEdgeUncheckedCreateNestedManyWithoutReviewRunInput = {
    create?: XOR<ScreenEdgeCreateWithoutReviewRunInput, ScreenEdgeUncheckedCreateWithoutReviewRunInput> | ScreenEdgeCreateWithoutReviewRunInput[] | ScreenEdgeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutReviewRunInput | ScreenEdgeCreateOrConnectWithoutReviewRunInput[]
    createMany?: ScreenEdgeCreateManyReviewRunInputEnvelope
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
  }

  export type ExplorationActionUncheckedCreateNestedManyWithoutReviewRunInput = {
    create?: XOR<ExplorationActionCreateWithoutReviewRunInput, ExplorationActionUncheckedCreateWithoutReviewRunInput> | ExplorationActionCreateWithoutReviewRunInput[] | ExplorationActionUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ExplorationActionCreateOrConnectWithoutReviewRunInput | ExplorationActionCreateOrConnectWithoutReviewRunInput[]
    createMany?: ExplorationActionCreateManyReviewRunInputEnvelope
    connect?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
  }

  export type EnumReviewRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewRunStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApkBuildUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<ApkBuildCreateWithoutRunsInput, ApkBuildUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ApkBuildCreateOrConnectWithoutRunsInput
    upsert?: ApkBuildUpsertWithoutRunsInput
    connect?: ApkBuildWhereUniqueInput
    update?: XOR<XOR<ApkBuildUpdateToOneWithWhereWithoutRunsInput, ApkBuildUpdateWithoutRunsInput>, ApkBuildUncheckedUpdateWithoutRunsInput>
  }

  export type ScreenNodeUpdateManyWithoutReviewRunNestedInput = {
    create?: XOR<ScreenNodeCreateWithoutReviewRunInput, ScreenNodeUncheckedCreateWithoutReviewRunInput> | ScreenNodeCreateWithoutReviewRunInput[] | ScreenNodeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutReviewRunInput | ScreenNodeCreateOrConnectWithoutReviewRunInput[]
    upsert?: ScreenNodeUpsertWithWhereUniqueWithoutReviewRunInput | ScreenNodeUpsertWithWhereUniqueWithoutReviewRunInput[]
    createMany?: ScreenNodeCreateManyReviewRunInputEnvelope
    set?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    disconnect?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    delete?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    connect?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    update?: ScreenNodeUpdateWithWhereUniqueWithoutReviewRunInput | ScreenNodeUpdateWithWhereUniqueWithoutReviewRunInput[]
    updateMany?: ScreenNodeUpdateManyWithWhereWithoutReviewRunInput | ScreenNodeUpdateManyWithWhereWithoutReviewRunInput[]
    deleteMany?: ScreenNodeScalarWhereInput | ScreenNodeScalarWhereInput[]
  }

  export type ScreenEdgeUpdateManyWithoutReviewRunNestedInput = {
    create?: XOR<ScreenEdgeCreateWithoutReviewRunInput, ScreenEdgeUncheckedCreateWithoutReviewRunInput> | ScreenEdgeCreateWithoutReviewRunInput[] | ScreenEdgeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutReviewRunInput | ScreenEdgeCreateOrConnectWithoutReviewRunInput[]
    upsert?: ScreenEdgeUpsertWithWhereUniqueWithoutReviewRunInput | ScreenEdgeUpsertWithWhereUniqueWithoutReviewRunInput[]
    createMany?: ScreenEdgeCreateManyReviewRunInputEnvelope
    set?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    disconnect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    delete?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    update?: ScreenEdgeUpdateWithWhereUniqueWithoutReviewRunInput | ScreenEdgeUpdateWithWhereUniqueWithoutReviewRunInput[]
    updateMany?: ScreenEdgeUpdateManyWithWhereWithoutReviewRunInput | ScreenEdgeUpdateManyWithWhereWithoutReviewRunInput[]
    deleteMany?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
  }

  export type ExplorationActionUpdateManyWithoutReviewRunNestedInput = {
    create?: XOR<ExplorationActionCreateWithoutReviewRunInput, ExplorationActionUncheckedCreateWithoutReviewRunInput> | ExplorationActionCreateWithoutReviewRunInput[] | ExplorationActionUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ExplorationActionCreateOrConnectWithoutReviewRunInput | ExplorationActionCreateOrConnectWithoutReviewRunInput[]
    upsert?: ExplorationActionUpsertWithWhereUniqueWithoutReviewRunInput | ExplorationActionUpsertWithWhereUniqueWithoutReviewRunInput[]
    createMany?: ExplorationActionCreateManyReviewRunInputEnvelope
    set?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    disconnect?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    delete?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    connect?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    update?: ExplorationActionUpdateWithWhereUniqueWithoutReviewRunInput | ExplorationActionUpdateWithWhereUniqueWithoutReviewRunInput[]
    updateMany?: ExplorationActionUpdateManyWithWhereWithoutReviewRunInput | ExplorationActionUpdateManyWithWhereWithoutReviewRunInput[]
    deleteMany?: ExplorationActionScalarWhereInput | ExplorationActionScalarWhereInput[]
  }

  export type ScreenNodeUncheckedUpdateManyWithoutReviewRunNestedInput = {
    create?: XOR<ScreenNodeCreateWithoutReviewRunInput, ScreenNodeUncheckedCreateWithoutReviewRunInput> | ScreenNodeCreateWithoutReviewRunInput[] | ScreenNodeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutReviewRunInput | ScreenNodeCreateOrConnectWithoutReviewRunInput[]
    upsert?: ScreenNodeUpsertWithWhereUniqueWithoutReviewRunInput | ScreenNodeUpsertWithWhereUniqueWithoutReviewRunInput[]
    createMany?: ScreenNodeCreateManyReviewRunInputEnvelope
    set?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    disconnect?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    delete?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    connect?: ScreenNodeWhereUniqueInput | ScreenNodeWhereUniqueInput[]
    update?: ScreenNodeUpdateWithWhereUniqueWithoutReviewRunInput | ScreenNodeUpdateWithWhereUniqueWithoutReviewRunInput[]
    updateMany?: ScreenNodeUpdateManyWithWhereWithoutReviewRunInput | ScreenNodeUpdateManyWithWhereWithoutReviewRunInput[]
    deleteMany?: ScreenNodeScalarWhereInput | ScreenNodeScalarWhereInput[]
  }

  export type ScreenEdgeUncheckedUpdateManyWithoutReviewRunNestedInput = {
    create?: XOR<ScreenEdgeCreateWithoutReviewRunInput, ScreenEdgeUncheckedCreateWithoutReviewRunInput> | ScreenEdgeCreateWithoutReviewRunInput[] | ScreenEdgeUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutReviewRunInput | ScreenEdgeCreateOrConnectWithoutReviewRunInput[]
    upsert?: ScreenEdgeUpsertWithWhereUniqueWithoutReviewRunInput | ScreenEdgeUpsertWithWhereUniqueWithoutReviewRunInput[]
    createMany?: ScreenEdgeCreateManyReviewRunInputEnvelope
    set?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    disconnect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    delete?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    update?: ScreenEdgeUpdateWithWhereUniqueWithoutReviewRunInput | ScreenEdgeUpdateWithWhereUniqueWithoutReviewRunInput[]
    updateMany?: ScreenEdgeUpdateManyWithWhereWithoutReviewRunInput | ScreenEdgeUpdateManyWithWhereWithoutReviewRunInput[]
    deleteMany?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
  }

  export type ExplorationActionUncheckedUpdateManyWithoutReviewRunNestedInput = {
    create?: XOR<ExplorationActionCreateWithoutReviewRunInput, ExplorationActionUncheckedCreateWithoutReviewRunInput> | ExplorationActionCreateWithoutReviewRunInput[] | ExplorationActionUncheckedCreateWithoutReviewRunInput[]
    connectOrCreate?: ExplorationActionCreateOrConnectWithoutReviewRunInput | ExplorationActionCreateOrConnectWithoutReviewRunInput[]
    upsert?: ExplorationActionUpsertWithWhereUniqueWithoutReviewRunInput | ExplorationActionUpsertWithWhereUniqueWithoutReviewRunInput[]
    createMany?: ExplorationActionCreateManyReviewRunInputEnvelope
    set?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    disconnect?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    delete?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    connect?: ExplorationActionWhereUniqueInput | ExplorationActionWhereUniqueInput[]
    update?: ExplorationActionUpdateWithWhereUniqueWithoutReviewRunInput | ExplorationActionUpdateWithWhereUniqueWithoutReviewRunInput[]
    updateMany?: ExplorationActionUpdateManyWithWhereWithoutReviewRunInput | ExplorationActionUpdateManyWithWhereWithoutReviewRunInput[]
    deleteMany?: ExplorationActionScalarWhereInput | ExplorationActionScalarWhereInput[]
  }

  export type ReviewRunCreateNestedOneWithoutNodesInput = {
    create?: XOR<ReviewRunCreateWithoutNodesInput, ReviewRunUncheckedCreateWithoutNodesInput>
    connectOrCreate?: ReviewRunCreateOrConnectWithoutNodesInput
    connect?: ReviewRunWhereUniqueInput
  }

  export type ScreenEdgeCreateNestedManyWithoutFromNodeInput = {
    create?: XOR<ScreenEdgeCreateWithoutFromNodeInput, ScreenEdgeUncheckedCreateWithoutFromNodeInput> | ScreenEdgeCreateWithoutFromNodeInput[] | ScreenEdgeUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutFromNodeInput | ScreenEdgeCreateOrConnectWithoutFromNodeInput[]
    createMany?: ScreenEdgeCreateManyFromNodeInputEnvelope
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
  }

  export type ScreenEdgeCreateNestedManyWithoutToNodeInput = {
    create?: XOR<ScreenEdgeCreateWithoutToNodeInput, ScreenEdgeUncheckedCreateWithoutToNodeInput> | ScreenEdgeCreateWithoutToNodeInput[] | ScreenEdgeUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutToNodeInput | ScreenEdgeCreateOrConnectWithoutToNodeInput[]
    createMany?: ScreenEdgeCreateManyToNodeInputEnvelope
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
  }

  export type NodeCommentCreateNestedManyWithoutScreenNodeInput = {
    create?: XOR<NodeCommentCreateWithoutScreenNodeInput, NodeCommentUncheckedCreateWithoutScreenNodeInput> | NodeCommentCreateWithoutScreenNodeInput[] | NodeCommentUncheckedCreateWithoutScreenNodeInput[]
    connectOrCreate?: NodeCommentCreateOrConnectWithoutScreenNodeInput | NodeCommentCreateOrConnectWithoutScreenNodeInput[]
    createMany?: NodeCommentCreateManyScreenNodeInputEnvelope
    connect?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
  }

  export type ScreenEdgeUncheckedCreateNestedManyWithoutFromNodeInput = {
    create?: XOR<ScreenEdgeCreateWithoutFromNodeInput, ScreenEdgeUncheckedCreateWithoutFromNodeInput> | ScreenEdgeCreateWithoutFromNodeInput[] | ScreenEdgeUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutFromNodeInput | ScreenEdgeCreateOrConnectWithoutFromNodeInput[]
    createMany?: ScreenEdgeCreateManyFromNodeInputEnvelope
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
  }

  export type ScreenEdgeUncheckedCreateNestedManyWithoutToNodeInput = {
    create?: XOR<ScreenEdgeCreateWithoutToNodeInput, ScreenEdgeUncheckedCreateWithoutToNodeInput> | ScreenEdgeCreateWithoutToNodeInput[] | ScreenEdgeUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutToNodeInput | ScreenEdgeCreateOrConnectWithoutToNodeInput[]
    createMany?: ScreenEdgeCreateManyToNodeInputEnvelope
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
  }

  export type NodeCommentUncheckedCreateNestedManyWithoutScreenNodeInput = {
    create?: XOR<NodeCommentCreateWithoutScreenNodeInput, NodeCommentUncheckedCreateWithoutScreenNodeInput> | NodeCommentCreateWithoutScreenNodeInput[] | NodeCommentUncheckedCreateWithoutScreenNodeInput[]
    connectOrCreate?: NodeCommentCreateOrConnectWithoutScreenNodeInput | NodeCommentCreateOrConnectWithoutScreenNodeInput[]
    createMany?: NodeCommentCreateManyScreenNodeInputEnvelope
    connect?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewRunUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<ReviewRunCreateWithoutNodesInput, ReviewRunUncheckedCreateWithoutNodesInput>
    connectOrCreate?: ReviewRunCreateOrConnectWithoutNodesInput
    upsert?: ReviewRunUpsertWithoutNodesInput
    connect?: ReviewRunWhereUniqueInput
    update?: XOR<XOR<ReviewRunUpdateToOneWithWhereWithoutNodesInput, ReviewRunUpdateWithoutNodesInput>, ReviewRunUncheckedUpdateWithoutNodesInput>
  }

  export type ScreenEdgeUpdateManyWithoutFromNodeNestedInput = {
    create?: XOR<ScreenEdgeCreateWithoutFromNodeInput, ScreenEdgeUncheckedCreateWithoutFromNodeInput> | ScreenEdgeCreateWithoutFromNodeInput[] | ScreenEdgeUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutFromNodeInput | ScreenEdgeCreateOrConnectWithoutFromNodeInput[]
    upsert?: ScreenEdgeUpsertWithWhereUniqueWithoutFromNodeInput | ScreenEdgeUpsertWithWhereUniqueWithoutFromNodeInput[]
    createMany?: ScreenEdgeCreateManyFromNodeInputEnvelope
    set?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    disconnect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    delete?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    update?: ScreenEdgeUpdateWithWhereUniqueWithoutFromNodeInput | ScreenEdgeUpdateWithWhereUniqueWithoutFromNodeInput[]
    updateMany?: ScreenEdgeUpdateManyWithWhereWithoutFromNodeInput | ScreenEdgeUpdateManyWithWhereWithoutFromNodeInput[]
    deleteMany?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
  }

  export type ScreenEdgeUpdateManyWithoutToNodeNestedInput = {
    create?: XOR<ScreenEdgeCreateWithoutToNodeInput, ScreenEdgeUncheckedCreateWithoutToNodeInput> | ScreenEdgeCreateWithoutToNodeInput[] | ScreenEdgeUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutToNodeInput | ScreenEdgeCreateOrConnectWithoutToNodeInput[]
    upsert?: ScreenEdgeUpsertWithWhereUniqueWithoutToNodeInput | ScreenEdgeUpsertWithWhereUniqueWithoutToNodeInput[]
    createMany?: ScreenEdgeCreateManyToNodeInputEnvelope
    set?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    disconnect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    delete?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    update?: ScreenEdgeUpdateWithWhereUniqueWithoutToNodeInput | ScreenEdgeUpdateWithWhereUniqueWithoutToNodeInput[]
    updateMany?: ScreenEdgeUpdateManyWithWhereWithoutToNodeInput | ScreenEdgeUpdateManyWithWhereWithoutToNodeInput[]
    deleteMany?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
  }

  export type NodeCommentUpdateManyWithoutScreenNodeNestedInput = {
    create?: XOR<NodeCommentCreateWithoutScreenNodeInput, NodeCommentUncheckedCreateWithoutScreenNodeInput> | NodeCommentCreateWithoutScreenNodeInput[] | NodeCommentUncheckedCreateWithoutScreenNodeInput[]
    connectOrCreate?: NodeCommentCreateOrConnectWithoutScreenNodeInput | NodeCommentCreateOrConnectWithoutScreenNodeInput[]
    upsert?: NodeCommentUpsertWithWhereUniqueWithoutScreenNodeInput | NodeCommentUpsertWithWhereUniqueWithoutScreenNodeInput[]
    createMany?: NodeCommentCreateManyScreenNodeInputEnvelope
    set?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    disconnect?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    delete?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    connect?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    update?: NodeCommentUpdateWithWhereUniqueWithoutScreenNodeInput | NodeCommentUpdateWithWhereUniqueWithoutScreenNodeInput[]
    updateMany?: NodeCommentUpdateManyWithWhereWithoutScreenNodeInput | NodeCommentUpdateManyWithWhereWithoutScreenNodeInput[]
    deleteMany?: NodeCommentScalarWhereInput | NodeCommentScalarWhereInput[]
  }

  export type ScreenEdgeUncheckedUpdateManyWithoutFromNodeNestedInput = {
    create?: XOR<ScreenEdgeCreateWithoutFromNodeInput, ScreenEdgeUncheckedCreateWithoutFromNodeInput> | ScreenEdgeCreateWithoutFromNodeInput[] | ScreenEdgeUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutFromNodeInput | ScreenEdgeCreateOrConnectWithoutFromNodeInput[]
    upsert?: ScreenEdgeUpsertWithWhereUniqueWithoutFromNodeInput | ScreenEdgeUpsertWithWhereUniqueWithoutFromNodeInput[]
    createMany?: ScreenEdgeCreateManyFromNodeInputEnvelope
    set?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    disconnect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    delete?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    update?: ScreenEdgeUpdateWithWhereUniqueWithoutFromNodeInput | ScreenEdgeUpdateWithWhereUniqueWithoutFromNodeInput[]
    updateMany?: ScreenEdgeUpdateManyWithWhereWithoutFromNodeInput | ScreenEdgeUpdateManyWithWhereWithoutFromNodeInput[]
    deleteMany?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
  }

  export type ScreenEdgeUncheckedUpdateManyWithoutToNodeNestedInput = {
    create?: XOR<ScreenEdgeCreateWithoutToNodeInput, ScreenEdgeUncheckedCreateWithoutToNodeInput> | ScreenEdgeCreateWithoutToNodeInput[] | ScreenEdgeUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: ScreenEdgeCreateOrConnectWithoutToNodeInput | ScreenEdgeCreateOrConnectWithoutToNodeInput[]
    upsert?: ScreenEdgeUpsertWithWhereUniqueWithoutToNodeInput | ScreenEdgeUpsertWithWhereUniqueWithoutToNodeInput[]
    createMany?: ScreenEdgeCreateManyToNodeInputEnvelope
    set?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    disconnect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    delete?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    connect?: ScreenEdgeWhereUniqueInput | ScreenEdgeWhereUniqueInput[]
    update?: ScreenEdgeUpdateWithWhereUniqueWithoutToNodeInput | ScreenEdgeUpdateWithWhereUniqueWithoutToNodeInput[]
    updateMany?: ScreenEdgeUpdateManyWithWhereWithoutToNodeInput | ScreenEdgeUpdateManyWithWhereWithoutToNodeInput[]
    deleteMany?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
  }

  export type NodeCommentUncheckedUpdateManyWithoutScreenNodeNestedInput = {
    create?: XOR<NodeCommentCreateWithoutScreenNodeInput, NodeCommentUncheckedCreateWithoutScreenNodeInput> | NodeCommentCreateWithoutScreenNodeInput[] | NodeCommentUncheckedCreateWithoutScreenNodeInput[]
    connectOrCreate?: NodeCommentCreateOrConnectWithoutScreenNodeInput | NodeCommentCreateOrConnectWithoutScreenNodeInput[]
    upsert?: NodeCommentUpsertWithWhereUniqueWithoutScreenNodeInput | NodeCommentUpsertWithWhereUniqueWithoutScreenNodeInput[]
    createMany?: NodeCommentCreateManyScreenNodeInputEnvelope
    set?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    disconnect?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    delete?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    connect?: NodeCommentWhereUniqueInput | NodeCommentWhereUniqueInput[]
    update?: NodeCommentUpdateWithWhereUniqueWithoutScreenNodeInput | NodeCommentUpdateWithWhereUniqueWithoutScreenNodeInput[]
    updateMany?: NodeCommentUpdateManyWithWhereWithoutScreenNodeInput | NodeCommentUpdateManyWithWhereWithoutScreenNodeInput[]
    deleteMany?: NodeCommentScalarWhereInput | NodeCommentScalarWhereInput[]
  }

  export type ReviewRunCreateNestedOneWithoutEdgesInput = {
    create?: XOR<ReviewRunCreateWithoutEdgesInput, ReviewRunUncheckedCreateWithoutEdgesInput>
    connectOrCreate?: ReviewRunCreateOrConnectWithoutEdgesInput
    connect?: ReviewRunWhereUniqueInput
  }

  export type ScreenNodeCreateNestedOneWithoutOutgoingEdgesInput = {
    create?: XOR<ScreenNodeCreateWithoutOutgoingEdgesInput, ScreenNodeUncheckedCreateWithoutOutgoingEdgesInput>
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutOutgoingEdgesInput
    connect?: ScreenNodeWhereUniqueInput
  }

  export type ScreenNodeCreateNestedOneWithoutIncomingEdgesInput = {
    create?: XOR<ScreenNodeCreateWithoutIncomingEdgesInput, ScreenNodeUncheckedCreateWithoutIncomingEdgesInput>
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutIncomingEdgesInput
    connect?: ScreenNodeWhereUniqueInput
  }

  export type ReviewRunUpdateOneRequiredWithoutEdgesNestedInput = {
    create?: XOR<ReviewRunCreateWithoutEdgesInput, ReviewRunUncheckedCreateWithoutEdgesInput>
    connectOrCreate?: ReviewRunCreateOrConnectWithoutEdgesInput
    upsert?: ReviewRunUpsertWithoutEdgesInput
    connect?: ReviewRunWhereUniqueInput
    update?: XOR<XOR<ReviewRunUpdateToOneWithWhereWithoutEdgesInput, ReviewRunUpdateWithoutEdgesInput>, ReviewRunUncheckedUpdateWithoutEdgesInput>
  }

  export type ScreenNodeUpdateOneWithoutOutgoingEdgesNestedInput = {
    create?: XOR<ScreenNodeCreateWithoutOutgoingEdgesInput, ScreenNodeUncheckedCreateWithoutOutgoingEdgesInput>
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutOutgoingEdgesInput
    upsert?: ScreenNodeUpsertWithoutOutgoingEdgesInput
    disconnect?: ScreenNodeWhereInput | boolean
    delete?: ScreenNodeWhereInput | boolean
    connect?: ScreenNodeWhereUniqueInput
    update?: XOR<XOR<ScreenNodeUpdateToOneWithWhereWithoutOutgoingEdgesInput, ScreenNodeUpdateWithoutOutgoingEdgesInput>, ScreenNodeUncheckedUpdateWithoutOutgoingEdgesInput>
  }

  export type ScreenNodeUpdateOneRequiredWithoutIncomingEdgesNestedInput = {
    create?: XOR<ScreenNodeCreateWithoutIncomingEdgesInput, ScreenNodeUncheckedCreateWithoutIncomingEdgesInput>
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutIncomingEdgesInput
    upsert?: ScreenNodeUpsertWithoutIncomingEdgesInput
    connect?: ScreenNodeWhereUniqueInput
    update?: XOR<XOR<ScreenNodeUpdateToOneWithWhereWithoutIncomingEdgesInput, ScreenNodeUpdateWithoutIncomingEdgesInput>, ScreenNodeUncheckedUpdateWithoutIncomingEdgesInput>
  }

  export type ScreenNodeCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ScreenNodeCreateWithoutCommentsInput, ScreenNodeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutCommentsInput
    connect?: ScreenNodeWhereUniqueInput
  }

  export type NullableEnumIssueTypeFieldUpdateOperationsInput = {
    set?: $Enums.IssueType | null
  }

  export type EnumCommentStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommentStatus
  }

  export type ScreenNodeUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ScreenNodeCreateWithoutCommentsInput, ScreenNodeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ScreenNodeCreateOrConnectWithoutCommentsInput
    upsert?: ScreenNodeUpsertWithoutCommentsInput
    connect?: ScreenNodeWhereUniqueInput
    update?: XOR<XOR<ScreenNodeUpdateToOneWithWhereWithoutCommentsInput, ScreenNodeUpdateWithoutCommentsInput>, ScreenNodeUncheckedUpdateWithoutCommentsInput>
  }

  export type ReviewRunCreateNestedOneWithoutActionsInput = {
    create?: XOR<ReviewRunCreateWithoutActionsInput, ReviewRunUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ReviewRunCreateOrConnectWithoutActionsInput
    connect?: ReviewRunWhereUniqueInput
  }

  export type EnumExplorationActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExplorationActionType
  }

  export type EnumExplorationActionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExplorationActionStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReviewRunUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<ReviewRunCreateWithoutActionsInput, ReviewRunUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ReviewRunCreateOrConnectWithoutActionsInput
    upsert?: ReviewRunUpsertWithoutActionsInput
    connect?: ReviewRunWhereUniqueInput
    update?: XOR<XOR<ReviewRunUpdateToOneWithWhereWithoutActionsInput, ReviewRunUpdateWithoutActionsInput>, ReviewRunUncheckedUpdateWithoutActionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReviewRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewRunStatus | EnumReviewRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewRunStatusFilter<$PrismaModel> | $Enums.ReviewRunStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReviewRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewRunStatus | EnumReviewRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewRunStatus[] | ListEnumReviewRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewRunStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewRunStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumIssueTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueTypeNullableFilter<$PrismaModel> | $Enums.IssueType | null
  }

  export type NestedEnumCommentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus
  }

  export type NestedEnumIssueTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.IssueType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIssueTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIssueTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>
  }

  export type NestedEnumExplorationActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionType | EnumExplorationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionTypeFilter<$PrismaModel> | $Enums.ExplorationActionType
  }

  export type NestedEnumExplorationActionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionStatus | EnumExplorationActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionStatusFilter<$PrismaModel> | $Enums.ExplorationActionStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumExplorationActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionType | EnumExplorationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionType[] | ListEnumExplorationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExplorationActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExplorationActionTypeFilter<$PrismaModel>
    _max?: NestedEnumExplorationActionTypeFilter<$PrismaModel>
  }

  export type NestedEnumExplorationActionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExplorationActionStatus | EnumExplorationActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExplorationActionStatus[] | ListEnumExplorationActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExplorationActionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExplorationActionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExplorationActionStatusFilter<$PrismaModel>
    _max?: NestedEnumExplorationActionStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApkBuildCreateWithoutProjectInput = {
    id?: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
    runs?: ReviewRunCreateNestedManyWithoutApkBuildInput
  }

  export type ApkBuildUncheckedCreateWithoutProjectInput = {
    id?: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
    runs?: ReviewRunUncheckedCreateNestedManyWithoutApkBuildInput
  }

  export type ApkBuildCreateOrConnectWithoutProjectInput = {
    where: ApkBuildWhereUniqueInput
    create: XOR<ApkBuildCreateWithoutProjectInput, ApkBuildUncheckedCreateWithoutProjectInput>
  }

  export type ApkBuildCreateManyProjectInputEnvelope = {
    data: ApkBuildCreateManyProjectInput | ApkBuildCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ApkBuildUpsertWithWhereUniqueWithoutProjectInput = {
    where: ApkBuildWhereUniqueInput
    update: XOR<ApkBuildUpdateWithoutProjectInput, ApkBuildUncheckedUpdateWithoutProjectInput>
    create: XOR<ApkBuildCreateWithoutProjectInput, ApkBuildUncheckedCreateWithoutProjectInput>
  }

  export type ApkBuildUpdateWithWhereUniqueWithoutProjectInput = {
    where: ApkBuildWhereUniqueInput
    data: XOR<ApkBuildUpdateWithoutProjectInput, ApkBuildUncheckedUpdateWithoutProjectInput>
  }

  export type ApkBuildUpdateManyWithWhereWithoutProjectInput = {
    where: ApkBuildScalarWhereInput
    data: XOR<ApkBuildUpdateManyMutationInput, ApkBuildUncheckedUpdateManyWithoutProjectInput>
  }

  export type ApkBuildScalarWhereInput = {
    AND?: ApkBuildScalarWhereInput | ApkBuildScalarWhereInput[]
    OR?: ApkBuildScalarWhereInput[]
    NOT?: ApkBuildScalarWhereInput | ApkBuildScalarWhereInput[]
    id?: StringFilter<"ApkBuild"> | string
    projectId?: StringFilter<"ApkBuild"> | string
    fileName?: StringFilter<"ApkBuild"> | string
    filePath?: StringFilter<"ApkBuild"> | string
    packageName?: StringNullableFilter<"ApkBuild"> | string | null
    versionName?: StringNullableFilter<"ApkBuild"> | string | null
    versionCode?: StringNullableFilter<"ApkBuild"> | string | null
    uploadedAt?: DateTimeFilter<"ApkBuild"> | Date | string
  }

  export type ProjectCreateWithoutBuildsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutBuildsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutBuildsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBuildsInput, ProjectUncheckedCreateWithoutBuildsInput>
  }

  export type ReviewRunCreateWithoutApkBuildInput = {
    id?: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: ScreenNodeCreateNestedManyWithoutReviewRunInput
    edges?: ScreenEdgeCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunUncheckedCreateWithoutApkBuildInput = {
    id?: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: ScreenNodeUncheckedCreateNestedManyWithoutReviewRunInput
    edges?: ScreenEdgeUncheckedCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionUncheckedCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunCreateOrConnectWithoutApkBuildInput = {
    where: ReviewRunWhereUniqueInput
    create: XOR<ReviewRunCreateWithoutApkBuildInput, ReviewRunUncheckedCreateWithoutApkBuildInput>
  }

  export type ReviewRunCreateManyApkBuildInputEnvelope = {
    data: ReviewRunCreateManyApkBuildInput | ReviewRunCreateManyApkBuildInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutBuildsInput = {
    update: XOR<ProjectUpdateWithoutBuildsInput, ProjectUncheckedUpdateWithoutBuildsInput>
    create: XOR<ProjectCreateWithoutBuildsInput, ProjectUncheckedCreateWithoutBuildsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBuildsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBuildsInput, ProjectUncheckedUpdateWithoutBuildsInput>
  }

  export type ProjectUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRunUpsertWithWhereUniqueWithoutApkBuildInput = {
    where: ReviewRunWhereUniqueInput
    update: XOR<ReviewRunUpdateWithoutApkBuildInput, ReviewRunUncheckedUpdateWithoutApkBuildInput>
    create: XOR<ReviewRunCreateWithoutApkBuildInput, ReviewRunUncheckedCreateWithoutApkBuildInput>
  }

  export type ReviewRunUpdateWithWhereUniqueWithoutApkBuildInput = {
    where: ReviewRunWhereUniqueInput
    data: XOR<ReviewRunUpdateWithoutApkBuildInput, ReviewRunUncheckedUpdateWithoutApkBuildInput>
  }

  export type ReviewRunUpdateManyWithWhereWithoutApkBuildInput = {
    where: ReviewRunScalarWhereInput
    data: XOR<ReviewRunUpdateManyMutationInput, ReviewRunUncheckedUpdateManyWithoutApkBuildInput>
  }

  export type ReviewRunScalarWhereInput = {
    AND?: ReviewRunScalarWhereInput | ReviewRunScalarWhereInput[]
    OR?: ReviewRunScalarWhereInput[]
    NOT?: ReviewRunScalarWhereInput | ReviewRunScalarWhereInput[]
    id?: StringFilter<"ReviewRun"> | string
    apkBuildId?: StringFilter<"ReviewRun"> | string
    status?: EnumReviewRunStatusFilter<"ReviewRun"> | $Enums.ReviewRunStatus
    maxDepth?: IntFilter<"ReviewRun"> | number
    maxNodes?: IntFilter<"ReviewRun"> | number
    maxTapsPerScreen?: IntFilter<"ReviewRun"> | number
    currentNodeId?: StringNullableFilter<"ReviewRun"> | string | null
    startedAt?: DateTimeNullableFilter<"ReviewRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ReviewRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"ReviewRun"> | string | null
    createdAt?: DateTimeFilter<"ReviewRun"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewRun"> | Date | string
  }

  export type ApkBuildCreateWithoutRunsInput = {
    id?: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBuildsInput
  }

  export type ApkBuildUncheckedCreateWithoutRunsInput = {
    id?: string
    projectId: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
  }

  export type ApkBuildCreateOrConnectWithoutRunsInput = {
    where: ApkBuildWhereUniqueInput
    create: XOR<ApkBuildCreateWithoutRunsInput, ApkBuildUncheckedCreateWithoutRunsInput>
  }

  export type ScreenNodeCreateWithoutReviewRunInput = {
    id?: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    outgoingEdges?: ScreenEdgeCreateNestedManyWithoutFromNodeInput
    incomingEdges?: ScreenEdgeCreateNestedManyWithoutToNodeInput
    comments?: NodeCommentCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeUncheckedCreateWithoutReviewRunInput = {
    id?: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    outgoingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutFromNodeInput
    incomingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutToNodeInput
    comments?: NodeCommentUncheckedCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeCreateOrConnectWithoutReviewRunInput = {
    where: ScreenNodeWhereUniqueInput
    create: XOR<ScreenNodeCreateWithoutReviewRunInput, ScreenNodeUncheckedCreateWithoutReviewRunInput>
  }

  export type ScreenNodeCreateManyReviewRunInputEnvelope = {
    data: ScreenNodeCreateManyReviewRunInput | ScreenNodeCreateManyReviewRunInput[]
    skipDuplicates?: boolean
  }

  export type ScreenEdgeCreateWithoutReviewRunInput = {
    id?: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    fromNode?: ScreenNodeCreateNestedOneWithoutOutgoingEdgesInput
    toNode: ScreenNodeCreateNestedOneWithoutIncomingEdgesInput
  }

  export type ScreenEdgeUncheckedCreateWithoutReviewRunInput = {
    id?: string
    fromNodeId?: string | null
    toNodeId: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreenEdgeCreateOrConnectWithoutReviewRunInput = {
    where: ScreenEdgeWhereUniqueInput
    create: XOR<ScreenEdgeCreateWithoutReviewRunInput, ScreenEdgeUncheckedCreateWithoutReviewRunInput>
  }

  export type ScreenEdgeCreateManyReviewRunInputEnvelope = {
    data: ScreenEdgeCreateManyReviewRunInput | ScreenEdgeCreateManyReviewRunInput[]
    skipDuplicates?: boolean
  }

  export type ExplorationActionCreateWithoutReviewRunInput = {
    id?: string
    type: $Enums.ExplorationActionType
    status?: $Enums.ExplorationActionStatus
    fromNodeId?: string | null
    targetNodeId?: string | null
    hotspotKey?: string | null
    targetLabel?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: string | null
    isExistingNode?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ExplorationActionUncheckedCreateWithoutReviewRunInput = {
    id?: string
    type: $Enums.ExplorationActionType
    status?: $Enums.ExplorationActionStatus
    fromNodeId?: string | null
    targetNodeId?: string | null
    hotspotKey?: string | null
    targetLabel?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: string | null
    isExistingNode?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ExplorationActionCreateOrConnectWithoutReviewRunInput = {
    where: ExplorationActionWhereUniqueInput
    create: XOR<ExplorationActionCreateWithoutReviewRunInput, ExplorationActionUncheckedCreateWithoutReviewRunInput>
  }

  export type ExplorationActionCreateManyReviewRunInputEnvelope = {
    data: ExplorationActionCreateManyReviewRunInput | ExplorationActionCreateManyReviewRunInput[]
    skipDuplicates?: boolean
  }

  export type ApkBuildUpsertWithoutRunsInput = {
    update: XOR<ApkBuildUpdateWithoutRunsInput, ApkBuildUncheckedUpdateWithoutRunsInput>
    create: XOR<ApkBuildCreateWithoutRunsInput, ApkBuildUncheckedCreateWithoutRunsInput>
    where?: ApkBuildWhereInput
  }

  export type ApkBuildUpdateToOneWithWhereWithoutRunsInput = {
    where?: ApkBuildWhereInput
    data: XOR<ApkBuildUpdateWithoutRunsInput, ApkBuildUncheckedUpdateWithoutRunsInput>
  }

  export type ApkBuildUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBuildsNestedInput
  }

  export type ApkBuildUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenNodeUpsertWithWhereUniqueWithoutReviewRunInput = {
    where: ScreenNodeWhereUniqueInput
    update: XOR<ScreenNodeUpdateWithoutReviewRunInput, ScreenNodeUncheckedUpdateWithoutReviewRunInput>
    create: XOR<ScreenNodeCreateWithoutReviewRunInput, ScreenNodeUncheckedCreateWithoutReviewRunInput>
  }

  export type ScreenNodeUpdateWithWhereUniqueWithoutReviewRunInput = {
    where: ScreenNodeWhereUniqueInput
    data: XOR<ScreenNodeUpdateWithoutReviewRunInput, ScreenNodeUncheckedUpdateWithoutReviewRunInput>
  }

  export type ScreenNodeUpdateManyWithWhereWithoutReviewRunInput = {
    where: ScreenNodeScalarWhereInput
    data: XOR<ScreenNodeUpdateManyMutationInput, ScreenNodeUncheckedUpdateManyWithoutReviewRunInput>
  }

  export type ScreenNodeScalarWhereInput = {
    AND?: ScreenNodeScalarWhereInput | ScreenNodeScalarWhereInput[]
    OR?: ScreenNodeScalarWhereInput[]
    NOT?: ScreenNodeScalarWhereInput | ScreenNodeScalarWhereInput[]
    id?: StringFilter<"ScreenNode"> | string
    reviewRunId?: StringFilter<"ScreenNode"> | string
    screenshotPath?: StringFilter<"ScreenNode"> | string
    activityName?: StringNullableFilter<"ScreenNode"> | string | null
    stateName?: StringNullableFilter<"ScreenNode"> | string | null
    name?: StringNullableFilter<"ScreenNode"> | string | null
    flowName?: StringNullableFilter<"ScreenNode"> | string | null
    nodeType?: StringNullableFilter<"ScreenNode"> | string | null
    positionX?: FloatNullableFilter<"ScreenNode"> | number | null
    positionY?: FloatNullableFilter<"ScreenNode"> | number | null
    uiTreeJson?: JsonNullableFilter<"ScreenNode">
    depth?: IntFilter<"ScreenNode"> | number
    hash?: StringFilter<"ScreenNode"> | string
    clickableCount?: IntFilter<"ScreenNode"> | number
    createdAt?: DateTimeFilter<"ScreenNode"> | Date | string
  }

  export type ScreenEdgeUpsertWithWhereUniqueWithoutReviewRunInput = {
    where: ScreenEdgeWhereUniqueInput
    update: XOR<ScreenEdgeUpdateWithoutReviewRunInput, ScreenEdgeUncheckedUpdateWithoutReviewRunInput>
    create: XOR<ScreenEdgeCreateWithoutReviewRunInput, ScreenEdgeUncheckedCreateWithoutReviewRunInput>
  }

  export type ScreenEdgeUpdateWithWhereUniqueWithoutReviewRunInput = {
    where: ScreenEdgeWhereUniqueInput
    data: XOR<ScreenEdgeUpdateWithoutReviewRunInput, ScreenEdgeUncheckedUpdateWithoutReviewRunInput>
  }

  export type ScreenEdgeUpdateManyWithWhereWithoutReviewRunInput = {
    where: ScreenEdgeScalarWhereInput
    data: XOR<ScreenEdgeUpdateManyMutationInput, ScreenEdgeUncheckedUpdateManyWithoutReviewRunInput>
  }

  export type ScreenEdgeScalarWhereInput = {
    AND?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
    OR?: ScreenEdgeScalarWhereInput[]
    NOT?: ScreenEdgeScalarWhereInput | ScreenEdgeScalarWhereInput[]
    id?: StringFilter<"ScreenEdge"> | string
    reviewRunId?: StringFilter<"ScreenEdge"> | string
    fromNodeId?: StringNullableFilter<"ScreenEdge"> | string | null
    toNodeId?: StringFilter<"ScreenEdge"> | string
    actionType?: StringFilter<"ScreenEdge"> | string
    targetLabel?: StringNullableFilter<"ScreenEdge"> | string | null
    targetText?: StringNullableFilter<"ScreenEdge"> | string | null
    targetBounds?: JsonNullableFilter<"ScreenEdge">
    createdAt?: DateTimeFilter<"ScreenEdge"> | Date | string
  }

  export type ExplorationActionUpsertWithWhereUniqueWithoutReviewRunInput = {
    where: ExplorationActionWhereUniqueInput
    update: XOR<ExplorationActionUpdateWithoutReviewRunInput, ExplorationActionUncheckedUpdateWithoutReviewRunInput>
    create: XOR<ExplorationActionCreateWithoutReviewRunInput, ExplorationActionUncheckedCreateWithoutReviewRunInput>
  }

  export type ExplorationActionUpdateWithWhereUniqueWithoutReviewRunInput = {
    where: ExplorationActionWhereUniqueInput
    data: XOR<ExplorationActionUpdateWithoutReviewRunInput, ExplorationActionUncheckedUpdateWithoutReviewRunInput>
  }

  export type ExplorationActionUpdateManyWithWhereWithoutReviewRunInput = {
    where: ExplorationActionScalarWhereInput
    data: XOR<ExplorationActionUpdateManyMutationInput, ExplorationActionUncheckedUpdateManyWithoutReviewRunInput>
  }

  export type ExplorationActionScalarWhereInput = {
    AND?: ExplorationActionScalarWhereInput | ExplorationActionScalarWhereInput[]
    OR?: ExplorationActionScalarWhereInput[]
    NOT?: ExplorationActionScalarWhereInput | ExplorationActionScalarWhereInput[]
    id?: StringFilter<"ExplorationAction"> | string
    reviewRunId?: StringFilter<"ExplorationAction"> | string
    type?: EnumExplorationActionTypeFilter<"ExplorationAction"> | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFilter<"ExplorationAction"> | $Enums.ExplorationActionStatus
    fromNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    targetNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    hotspotKey?: StringNullableFilter<"ExplorationAction"> | string | null
    targetLabel?: StringNullableFilter<"ExplorationAction"> | string | null
    targetBounds?: JsonNullableFilter<"ExplorationAction">
    resultNodeId?: StringNullableFilter<"ExplorationAction"> | string | null
    isExistingNode?: BoolFilter<"ExplorationAction"> | boolean
    errorMessage?: StringNullableFilter<"ExplorationAction"> | string | null
    createdAt?: DateTimeFilter<"ExplorationAction"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExplorationAction"> | Date | string | null
  }

  export type ReviewRunCreateWithoutNodesInput = {
    id?: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apkBuild: ApkBuildCreateNestedOneWithoutRunsInput
    edges?: ScreenEdgeCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunUncheckedCreateWithoutNodesInput = {
    id?: string
    apkBuildId: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    edges?: ScreenEdgeUncheckedCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionUncheckedCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunCreateOrConnectWithoutNodesInput = {
    where: ReviewRunWhereUniqueInput
    create: XOR<ReviewRunCreateWithoutNodesInput, ReviewRunUncheckedCreateWithoutNodesInput>
  }

  export type ScreenEdgeCreateWithoutFromNodeInput = {
    id?: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    reviewRun: ReviewRunCreateNestedOneWithoutEdgesInput
    toNode: ScreenNodeCreateNestedOneWithoutIncomingEdgesInput
  }

  export type ScreenEdgeUncheckedCreateWithoutFromNodeInput = {
    id?: string
    reviewRunId: string
    toNodeId: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreenEdgeCreateOrConnectWithoutFromNodeInput = {
    where: ScreenEdgeWhereUniqueInput
    create: XOR<ScreenEdgeCreateWithoutFromNodeInput, ScreenEdgeUncheckedCreateWithoutFromNodeInput>
  }

  export type ScreenEdgeCreateManyFromNodeInputEnvelope = {
    data: ScreenEdgeCreateManyFromNodeInput | ScreenEdgeCreateManyFromNodeInput[]
    skipDuplicates?: boolean
  }

  export type ScreenEdgeCreateWithoutToNodeInput = {
    id?: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    reviewRun: ReviewRunCreateNestedOneWithoutEdgesInput
    fromNode?: ScreenNodeCreateNestedOneWithoutOutgoingEdgesInput
  }

  export type ScreenEdgeUncheckedCreateWithoutToNodeInput = {
    id?: string
    reviewRunId: string
    fromNodeId?: string | null
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreenEdgeCreateOrConnectWithoutToNodeInput = {
    where: ScreenEdgeWhereUniqueInput
    create: XOR<ScreenEdgeCreateWithoutToNodeInput, ScreenEdgeUncheckedCreateWithoutToNodeInput>
  }

  export type ScreenEdgeCreateManyToNodeInputEnvelope = {
    data: ScreenEdgeCreateManyToNodeInput | ScreenEdgeCreateManyToNodeInput[]
    skipDuplicates?: boolean
  }

  export type NodeCommentCreateWithoutScreenNodeInput = {
    id?: string
    body: string
    issueType?: $Enums.IssueType | null
    status?: $Enums.CommentStatus
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeCommentUncheckedCreateWithoutScreenNodeInput = {
    id?: string
    body: string
    issueType?: $Enums.IssueType | null
    status?: $Enums.CommentStatus
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeCommentCreateOrConnectWithoutScreenNodeInput = {
    where: NodeCommentWhereUniqueInput
    create: XOR<NodeCommentCreateWithoutScreenNodeInput, NodeCommentUncheckedCreateWithoutScreenNodeInput>
  }

  export type NodeCommentCreateManyScreenNodeInputEnvelope = {
    data: NodeCommentCreateManyScreenNodeInput | NodeCommentCreateManyScreenNodeInput[]
    skipDuplicates?: boolean
  }

  export type ReviewRunUpsertWithoutNodesInput = {
    update: XOR<ReviewRunUpdateWithoutNodesInput, ReviewRunUncheckedUpdateWithoutNodesInput>
    create: XOR<ReviewRunCreateWithoutNodesInput, ReviewRunUncheckedCreateWithoutNodesInput>
    where?: ReviewRunWhereInput
  }

  export type ReviewRunUpdateToOneWithWhereWithoutNodesInput = {
    where?: ReviewRunWhereInput
    data: XOR<ReviewRunUpdateWithoutNodesInput, ReviewRunUncheckedUpdateWithoutNodesInput>
  }

  export type ReviewRunUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apkBuild?: ApkBuildUpdateOneRequiredWithoutRunsNestedInput
    edges?: ScreenEdgeUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUpdateManyWithoutReviewRunNestedInput
  }

  export type ReviewRunUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    apkBuildId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edges?: ScreenEdgeUncheckedUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUncheckedUpdateManyWithoutReviewRunNestedInput
  }

  export type ScreenEdgeUpsertWithWhereUniqueWithoutFromNodeInput = {
    where: ScreenEdgeWhereUniqueInput
    update: XOR<ScreenEdgeUpdateWithoutFromNodeInput, ScreenEdgeUncheckedUpdateWithoutFromNodeInput>
    create: XOR<ScreenEdgeCreateWithoutFromNodeInput, ScreenEdgeUncheckedCreateWithoutFromNodeInput>
  }

  export type ScreenEdgeUpdateWithWhereUniqueWithoutFromNodeInput = {
    where: ScreenEdgeWhereUniqueInput
    data: XOR<ScreenEdgeUpdateWithoutFromNodeInput, ScreenEdgeUncheckedUpdateWithoutFromNodeInput>
  }

  export type ScreenEdgeUpdateManyWithWhereWithoutFromNodeInput = {
    where: ScreenEdgeScalarWhereInput
    data: XOR<ScreenEdgeUpdateManyMutationInput, ScreenEdgeUncheckedUpdateManyWithoutFromNodeInput>
  }

  export type ScreenEdgeUpsertWithWhereUniqueWithoutToNodeInput = {
    where: ScreenEdgeWhereUniqueInput
    update: XOR<ScreenEdgeUpdateWithoutToNodeInput, ScreenEdgeUncheckedUpdateWithoutToNodeInput>
    create: XOR<ScreenEdgeCreateWithoutToNodeInput, ScreenEdgeUncheckedCreateWithoutToNodeInput>
  }

  export type ScreenEdgeUpdateWithWhereUniqueWithoutToNodeInput = {
    where: ScreenEdgeWhereUniqueInput
    data: XOR<ScreenEdgeUpdateWithoutToNodeInput, ScreenEdgeUncheckedUpdateWithoutToNodeInput>
  }

  export type ScreenEdgeUpdateManyWithWhereWithoutToNodeInput = {
    where: ScreenEdgeScalarWhereInput
    data: XOR<ScreenEdgeUpdateManyMutationInput, ScreenEdgeUncheckedUpdateManyWithoutToNodeInput>
  }

  export type NodeCommentUpsertWithWhereUniqueWithoutScreenNodeInput = {
    where: NodeCommentWhereUniqueInput
    update: XOR<NodeCommentUpdateWithoutScreenNodeInput, NodeCommentUncheckedUpdateWithoutScreenNodeInput>
    create: XOR<NodeCommentCreateWithoutScreenNodeInput, NodeCommentUncheckedCreateWithoutScreenNodeInput>
  }

  export type NodeCommentUpdateWithWhereUniqueWithoutScreenNodeInput = {
    where: NodeCommentWhereUniqueInput
    data: XOR<NodeCommentUpdateWithoutScreenNodeInput, NodeCommentUncheckedUpdateWithoutScreenNodeInput>
  }

  export type NodeCommentUpdateManyWithWhereWithoutScreenNodeInput = {
    where: NodeCommentScalarWhereInput
    data: XOR<NodeCommentUpdateManyMutationInput, NodeCommentUncheckedUpdateManyWithoutScreenNodeInput>
  }

  export type NodeCommentScalarWhereInput = {
    AND?: NodeCommentScalarWhereInput | NodeCommentScalarWhereInput[]
    OR?: NodeCommentScalarWhereInput[]
    NOT?: NodeCommentScalarWhereInput | NodeCommentScalarWhereInput[]
    id?: StringFilter<"NodeComment"> | string
    screenNodeId?: StringFilter<"NodeComment"> | string
    body?: StringFilter<"NodeComment"> | string
    issueType?: EnumIssueTypeNullableFilter<"NodeComment"> | $Enums.IssueType | null
    status?: EnumCommentStatusFilter<"NodeComment"> | $Enums.CommentStatus
    createdById?: StringNullableFilter<"NodeComment"> | string | null
    createdByName?: StringNullableFilter<"NodeComment"> | string | null
    createdAt?: DateTimeFilter<"NodeComment"> | Date | string
    updatedAt?: DateTimeFilter<"NodeComment"> | Date | string
  }

  export type ReviewRunCreateWithoutEdgesInput = {
    id?: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apkBuild: ApkBuildCreateNestedOneWithoutRunsInput
    nodes?: ScreenNodeCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunUncheckedCreateWithoutEdgesInput = {
    id?: string
    apkBuildId: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: ScreenNodeUncheckedCreateNestedManyWithoutReviewRunInput
    actions?: ExplorationActionUncheckedCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunCreateOrConnectWithoutEdgesInput = {
    where: ReviewRunWhereUniqueInput
    create: XOR<ReviewRunCreateWithoutEdgesInput, ReviewRunUncheckedCreateWithoutEdgesInput>
  }

  export type ScreenNodeCreateWithoutOutgoingEdgesInput = {
    id?: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    reviewRun: ReviewRunCreateNestedOneWithoutNodesInput
    incomingEdges?: ScreenEdgeCreateNestedManyWithoutToNodeInput
    comments?: NodeCommentCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeUncheckedCreateWithoutOutgoingEdgesInput = {
    id?: string
    reviewRunId: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    incomingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutToNodeInput
    comments?: NodeCommentUncheckedCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeCreateOrConnectWithoutOutgoingEdgesInput = {
    where: ScreenNodeWhereUniqueInput
    create: XOR<ScreenNodeCreateWithoutOutgoingEdgesInput, ScreenNodeUncheckedCreateWithoutOutgoingEdgesInput>
  }

  export type ScreenNodeCreateWithoutIncomingEdgesInput = {
    id?: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    reviewRun: ReviewRunCreateNestedOneWithoutNodesInput
    outgoingEdges?: ScreenEdgeCreateNestedManyWithoutFromNodeInput
    comments?: NodeCommentCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeUncheckedCreateWithoutIncomingEdgesInput = {
    id?: string
    reviewRunId: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    outgoingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutFromNodeInput
    comments?: NodeCommentUncheckedCreateNestedManyWithoutScreenNodeInput
  }

  export type ScreenNodeCreateOrConnectWithoutIncomingEdgesInput = {
    where: ScreenNodeWhereUniqueInput
    create: XOR<ScreenNodeCreateWithoutIncomingEdgesInput, ScreenNodeUncheckedCreateWithoutIncomingEdgesInput>
  }

  export type ReviewRunUpsertWithoutEdgesInput = {
    update: XOR<ReviewRunUpdateWithoutEdgesInput, ReviewRunUncheckedUpdateWithoutEdgesInput>
    create: XOR<ReviewRunCreateWithoutEdgesInput, ReviewRunUncheckedCreateWithoutEdgesInput>
    where?: ReviewRunWhereInput
  }

  export type ReviewRunUpdateToOneWithWhereWithoutEdgesInput = {
    where?: ReviewRunWhereInput
    data: XOR<ReviewRunUpdateWithoutEdgesInput, ReviewRunUncheckedUpdateWithoutEdgesInput>
  }

  export type ReviewRunUpdateWithoutEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apkBuild?: ApkBuildUpdateOneRequiredWithoutRunsNestedInput
    nodes?: ScreenNodeUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUpdateManyWithoutReviewRunNestedInput
  }

  export type ReviewRunUncheckedUpdateWithoutEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    apkBuildId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: ScreenNodeUncheckedUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUncheckedUpdateManyWithoutReviewRunNestedInput
  }

  export type ScreenNodeUpsertWithoutOutgoingEdgesInput = {
    update: XOR<ScreenNodeUpdateWithoutOutgoingEdgesInput, ScreenNodeUncheckedUpdateWithoutOutgoingEdgesInput>
    create: XOR<ScreenNodeCreateWithoutOutgoingEdgesInput, ScreenNodeUncheckedCreateWithoutOutgoingEdgesInput>
    where?: ScreenNodeWhereInput
  }

  export type ScreenNodeUpdateToOneWithWhereWithoutOutgoingEdgesInput = {
    where?: ScreenNodeWhereInput
    data: XOR<ScreenNodeUpdateWithoutOutgoingEdgesInput, ScreenNodeUncheckedUpdateWithoutOutgoingEdgesInput>
  }

  export type ScreenNodeUpdateWithoutOutgoingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewRun?: ReviewRunUpdateOneRequiredWithoutNodesNestedInput
    incomingEdges?: ScreenEdgeUpdateManyWithoutToNodeNestedInput
    comments?: NodeCommentUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeUncheckedUpdateWithoutOutgoingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomingEdges?: ScreenEdgeUncheckedUpdateManyWithoutToNodeNestedInput
    comments?: NodeCommentUncheckedUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeUpsertWithoutIncomingEdgesInput = {
    update: XOR<ScreenNodeUpdateWithoutIncomingEdgesInput, ScreenNodeUncheckedUpdateWithoutIncomingEdgesInput>
    create: XOR<ScreenNodeCreateWithoutIncomingEdgesInput, ScreenNodeUncheckedCreateWithoutIncomingEdgesInput>
    where?: ScreenNodeWhereInput
  }

  export type ScreenNodeUpdateToOneWithWhereWithoutIncomingEdgesInput = {
    where?: ScreenNodeWhereInput
    data: XOR<ScreenNodeUpdateWithoutIncomingEdgesInput, ScreenNodeUncheckedUpdateWithoutIncomingEdgesInput>
  }

  export type ScreenNodeUpdateWithoutIncomingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewRun?: ReviewRunUpdateOneRequiredWithoutNodesNestedInput
    outgoingEdges?: ScreenEdgeUpdateManyWithoutFromNodeNestedInput
    comments?: NodeCommentUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeUncheckedUpdateWithoutIncomingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingEdges?: ScreenEdgeUncheckedUpdateManyWithoutFromNodeNestedInput
    comments?: NodeCommentUncheckedUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeCreateWithoutCommentsInput = {
    id?: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    reviewRun: ReviewRunCreateNestedOneWithoutNodesInput
    outgoingEdges?: ScreenEdgeCreateNestedManyWithoutFromNodeInput
    incomingEdges?: ScreenEdgeCreateNestedManyWithoutToNodeInput
  }

  export type ScreenNodeUncheckedCreateWithoutCommentsInput = {
    id?: string
    reviewRunId: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
    outgoingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutFromNodeInput
    incomingEdges?: ScreenEdgeUncheckedCreateNestedManyWithoutToNodeInput
  }

  export type ScreenNodeCreateOrConnectWithoutCommentsInput = {
    where: ScreenNodeWhereUniqueInput
    create: XOR<ScreenNodeCreateWithoutCommentsInput, ScreenNodeUncheckedCreateWithoutCommentsInput>
  }

  export type ScreenNodeUpsertWithoutCommentsInput = {
    update: XOR<ScreenNodeUpdateWithoutCommentsInput, ScreenNodeUncheckedUpdateWithoutCommentsInput>
    create: XOR<ScreenNodeCreateWithoutCommentsInput, ScreenNodeUncheckedCreateWithoutCommentsInput>
    where?: ScreenNodeWhereInput
  }

  export type ScreenNodeUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ScreenNodeWhereInput
    data: XOR<ScreenNodeUpdateWithoutCommentsInput, ScreenNodeUncheckedUpdateWithoutCommentsInput>
  }

  export type ScreenNodeUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewRun?: ReviewRunUpdateOneRequiredWithoutNodesNestedInput
    outgoingEdges?: ScreenEdgeUpdateManyWithoutFromNodeNestedInput
    incomingEdges?: ScreenEdgeUpdateManyWithoutToNodeNestedInput
  }

  export type ScreenNodeUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingEdges?: ScreenEdgeUncheckedUpdateManyWithoutFromNodeNestedInput
    incomingEdges?: ScreenEdgeUncheckedUpdateManyWithoutToNodeNestedInput
  }

  export type ReviewRunCreateWithoutActionsInput = {
    id?: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apkBuild: ApkBuildCreateNestedOneWithoutRunsInput
    nodes?: ScreenNodeCreateNestedManyWithoutReviewRunInput
    edges?: ScreenEdgeCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunUncheckedCreateWithoutActionsInput = {
    id?: string
    apkBuildId: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: ScreenNodeUncheckedCreateNestedManyWithoutReviewRunInput
    edges?: ScreenEdgeUncheckedCreateNestedManyWithoutReviewRunInput
  }

  export type ReviewRunCreateOrConnectWithoutActionsInput = {
    where: ReviewRunWhereUniqueInput
    create: XOR<ReviewRunCreateWithoutActionsInput, ReviewRunUncheckedCreateWithoutActionsInput>
  }

  export type ReviewRunUpsertWithoutActionsInput = {
    update: XOR<ReviewRunUpdateWithoutActionsInput, ReviewRunUncheckedUpdateWithoutActionsInput>
    create: XOR<ReviewRunCreateWithoutActionsInput, ReviewRunUncheckedCreateWithoutActionsInput>
    where?: ReviewRunWhereInput
  }

  export type ReviewRunUpdateToOneWithWhereWithoutActionsInput = {
    where?: ReviewRunWhereInput
    data: XOR<ReviewRunUpdateWithoutActionsInput, ReviewRunUncheckedUpdateWithoutActionsInput>
  }

  export type ReviewRunUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apkBuild?: ApkBuildUpdateOneRequiredWithoutRunsNestedInput
    nodes?: ScreenNodeUpdateManyWithoutReviewRunNestedInput
    edges?: ScreenEdgeUpdateManyWithoutReviewRunNestedInput
  }

  export type ReviewRunUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apkBuildId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: ScreenNodeUncheckedUpdateManyWithoutReviewRunNestedInput
    edges?: ScreenEdgeUncheckedUpdateManyWithoutReviewRunNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type ApkBuildCreateManyProjectInput = {
    id?: string
    fileName: string
    filePath: string
    packageName?: string | null
    versionName?: string | null
    versionCode?: string | null
    uploadedAt?: Date | string
  }

  export type ApkBuildUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: ReviewRunUpdateManyWithoutApkBuildNestedInput
  }

  export type ApkBuildUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: ReviewRunUncheckedUpdateManyWithoutApkBuildNestedInput
  }

  export type ApkBuildUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    versionName?: NullableStringFieldUpdateOperationsInput | string | null
    versionCode?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRunCreateManyApkBuildInput = {
    id?: string
    status?: $Enums.ReviewRunStatus
    maxDepth?: number
    maxNodes?: number
    maxTapsPerScreen?: number
    currentNodeId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewRunUpdateWithoutApkBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: ScreenNodeUpdateManyWithoutReviewRunNestedInput
    edges?: ScreenEdgeUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUpdateManyWithoutReviewRunNestedInput
  }

  export type ReviewRunUncheckedUpdateWithoutApkBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: ScreenNodeUncheckedUpdateManyWithoutReviewRunNestedInput
    edges?: ScreenEdgeUncheckedUpdateManyWithoutReviewRunNestedInput
    actions?: ExplorationActionUncheckedUpdateManyWithoutReviewRunNestedInput
  }

  export type ReviewRunUncheckedUpdateManyWithoutApkBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewRunStatusFieldUpdateOperationsInput | $Enums.ReviewRunStatus
    maxDepth?: IntFieldUpdateOperationsInput | number
    maxNodes?: IntFieldUpdateOperationsInput | number
    maxTapsPerScreen?: IntFieldUpdateOperationsInput | number
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenNodeCreateManyReviewRunInput = {
    id?: string
    screenshotPath: string
    activityName?: string | null
    stateName?: string | null
    name?: string | null
    flowName?: string | null
    nodeType?: string | null
    positionX?: number | null
    positionY?: number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth: number
    hash: string
    clickableCount?: number
    createdAt?: Date | string
  }

  export type ScreenEdgeCreateManyReviewRunInput = {
    id?: string
    fromNodeId?: string | null
    toNodeId: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ExplorationActionCreateManyReviewRunInput = {
    id?: string
    type: $Enums.ExplorationActionType
    status?: $Enums.ExplorationActionStatus
    fromNodeId?: string | null
    targetNodeId?: string | null
    hotspotKey?: string | null
    targetLabel?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: string | null
    isExistingNode?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ScreenNodeUpdateWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingEdges?: ScreenEdgeUpdateManyWithoutFromNodeNestedInput
    incomingEdges?: ScreenEdgeUpdateManyWithoutToNodeNestedInput
    comments?: NodeCommentUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeUncheckedUpdateWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingEdges?: ScreenEdgeUncheckedUpdateManyWithoutFromNodeNestedInput
    incomingEdges?: ScreenEdgeUncheckedUpdateManyWithoutToNodeNestedInput
    comments?: NodeCommentUncheckedUpdateManyWithoutScreenNodeNestedInput
  }

  export type ScreenNodeUncheckedUpdateManyWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    screenshotPath?: StringFieldUpdateOperationsInput | string
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    stateName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    flowName?: NullableStringFieldUpdateOperationsInput | string | null
    nodeType?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    uiTreeJson?: NullableJsonNullValueInput | InputJsonValue
    depth?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    clickableCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeUpdateWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromNode?: ScreenNodeUpdateOneWithoutOutgoingEdgesNestedInput
    toNode?: ScreenNodeUpdateOneRequiredWithoutIncomingEdgesNestedInput
  }

  export type ScreenEdgeUncheckedUpdateWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    toNodeId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeUncheckedUpdateManyWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    toNodeId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExplorationActionUpdateWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExplorationActionTypeFieldUpdateOperationsInput | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFieldUpdateOperationsInput | $Enums.ExplorationActionStatus
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    targetNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotKey?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    isExistingNode?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExplorationActionUncheckedUpdateWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExplorationActionTypeFieldUpdateOperationsInput | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFieldUpdateOperationsInput | $Enums.ExplorationActionStatus
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    targetNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotKey?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    isExistingNode?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExplorationActionUncheckedUpdateManyWithoutReviewRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExplorationActionTypeFieldUpdateOperationsInput | $Enums.ExplorationActionType
    status?: EnumExplorationActionStatusFieldUpdateOperationsInput | $Enums.ExplorationActionStatus
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    targetNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotKey?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    resultNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    isExistingNode?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScreenEdgeCreateManyFromNodeInput = {
    id?: string
    reviewRunId: string
    toNodeId: string
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreenEdgeCreateManyToNodeInput = {
    id?: string
    reviewRunId: string
    fromNodeId?: string | null
    actionType: string
    targetLabel?: string | null
    targetText?: string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NodeCommentCreateManyScreenNodeInput = {
    id?: string
    body: string
    issueType?: $Enums.IssueType | null
    status?: $Enums.CommentStatus
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScreenEdgeUpdateWithoutFromNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewRun?: ReviewRunUpdateOneRequiredWithoutEdgesNestedInput
    toNode?: ScreenNodeUpdateOneRequiredWithoutIncomingEdgesNestedInput
  }

  export type ScreenEdgeUncheckedUpdateWithoutFromNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeUncheckedUpdateManyWithoutFromNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeUpdateWithoutToNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewRun?: ReviewRunUpdateOneRequiredWithoutEdgesNestedInput
    fromNode?: ScreenNodeUpdateOneWithoutOutgoingEdgesNestedInput
  }

  export type ScreenEdgeUncheckedUpdateWithoutToNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenEdgeUncheckedUpdateManyWithoutToNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewRunId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    targetBounds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCommentUpdateWithoutScreenNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    issueType?: NullableEnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCommentUncheckedUpdateWithoutScreenNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    issueType?: NullableEnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCommentUncheckedUpdateManyWithoutScreenNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    issueType?: NullableEnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}