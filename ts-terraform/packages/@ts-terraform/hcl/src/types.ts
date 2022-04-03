export type CtyType =
  | 'any'
  | 'bool'
  | 'number'
  | 'string'
  | ['list', CtyType]
  | ['map', CtyType]
  | ['object', {[key: string]: CtyType}]
  | ['set', CtyType]

export type Expression =
  | AnonSymbolExpr
  | BinaryOpExpr
  | ConditionalExpr
  | ForExpr
  | FunctionCallExpr
  | IndexExpr
  | LiteralValueExpr
  | ObjectConsExpr
  | ObjectConsKeyExpr
  | RelativeTraversalExpr
  | ScopeTraversalExpr
  | SplatExpr
  | TemplateExpr
  | TemplateJoinExpr
  | TemplateWrapExpr
  | TupleConsExpr
  | UnaryOpExpr

export interface AnonSymbolExpr {
  kind: 'anonSymbolExpr'
  srcRange: Range
}

export interface Attribute {
  kind: 'attribute'
  name: string
  expr: Expression
  srcRange: Range
  nameRange: Range
  equalsRange: Range
}

export interface Block {
  kind: 'block'
  type: string
  labels: string[]
  body: Body
  typeRange: Range
  labelRanges: Range[]
  openBraceRange: Range
  closeBraceRange: Range
}

export interface BinaryOpExpr {
  kind: 'binaryOpExpr'
  lhs: Expression
  op: Operation
  rhs: Expression
  srcRange: Range
}

export interface Body {
  kind: 'body'
  attributes: Record<string, Attribute>
  blocks: Block[]
}

export interface ConditionalExpr {
  kind: 'conditionalExpr'
  condition: Expression
  trueResult: Expression
  falseResult: Expression
  srcRange: Range
}

export interface ForExpr {
  kind: 'functionCallExpr'
  keyVar: string
  valVar: string
  collExpr: Expression
  keyExpr: Expression
  valExpr: Expression
  condExpr: Expression
  group: boolean
  srcRange: Range
  openRange: Range
  closeRange: Range
}

export interface FunctionCallExpr {
  kind: 'functionCallExpr'
  name: string
  args: Expression[]
  expandFinal: boolean
  nameRange: Range
  openParenRange: Range
  closeParenRange: Range
}

export interface IndexExpr {
  kind: 'indexExpr'
  collection: Expression
  key: Expression
  srcRange: Range
  openRange: Range
  bracketRange: Range
}

export interface LiteralValueExpr<T = unknown> {
  kind: 'literalValueExpr'
  val: T
  type: CtyType
  srcRange: Range
}

export interface ObjectConsExpr {
  kind: 'objectConsExpr'
  items: ObjectConsItem[]
  srcRange: Range
  openRange: Range
}

export interface ObjectConsItem {
  kind: 'objectConsItem'
  keyExpr: Expression
  valueExpr: Expression
}

export interface ObjectConsKeyExpr {
  kind: 'objectConsKeyExpr'
  wrapped: Expression
  forceNonLiteral: boolean
}

export interface Operation {
  kind: 'operation'
  type: CtyType
}

export interface RelativeTraversalExpr {
  kind: 'relativeTraversalExpr'
  source: Expression
  traversal: Traversal
  srcRange: Range
}

export interface ScopeTraversalExpr {
  kind: 'scopeTraversalExpr'
  traversal: Traversal
  srcRange: Range
}

export interface SplatExpr {
  kind: 'splatExpr'
  source: Expression
  each: Expression
  item: AnonSymbolExpr
  srcRange: Range
  markerRange: Range
}

export interface TemplateExpr {
  kind: 'templateExpr'
  parts: Expression[]
  srcRange: Range
}

export interface TemplateJoinExpr {
  kind: 'templateJoinExpr'
  tuple: Expression
}

export interface TemplateWrapExpr {
  kind: 'templateWrapExpr'
  wrapped: Expression
  srcRange: Range
}

export interface TupleConsExpr {
  kind: 'tupleConsExpr'
  exprs: Expression[]
  srcRange: Range
  openRange: Range
}

export interface UnaryOpExpr {
  kind: 'unaryOpExpr'
  op: Operation
  val: Expression
  srcRange: Range
  symbolRange: Range
}

export interface Diagnostic {
  severity: number
  summary: string
  detail: string
  subject: Range | null
  context: Range | null
  expression: Expression
}

export interface Pos {
  byte: number
  column: number
  line: number
}

export interface Range {
  filename: string
  start: Pos
  end: Pos
}

type Traverser = TraverseAttr | TraverseIndex | TraverseRoot | TraverseSplat

type Traversal = Traverser[]

export interface TraverseAttr {
  kind: 'traverseAttr'
  name: string
  srcRange: Range
}

export interface TraverseIndex<T = unknown> {
  kind: 'traverseIndex'
  key: T
  keyType: CtyType
  srcRange: Range
}

export interface TraverseRoot {
  kind: 'traverseRoot'
  name: string
  srcRange: Range
}

export interface TraverseSplat {
  kind: 'traverseSplat'
  each: Traversal
  srcRange: Range
}
