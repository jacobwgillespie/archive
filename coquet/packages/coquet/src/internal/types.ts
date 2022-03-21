// Internal types, not exported to the public API

export interface StyleSheet {
  insertRule(index: number, rule: string): boolean
  getRule(index: number): string
  deleteRule(index: number): void
}
