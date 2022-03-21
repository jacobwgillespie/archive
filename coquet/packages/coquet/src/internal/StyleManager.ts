import {StyleSheet} from './types'

// TODO: should this be a global?
const idToGroupNumber = new Map<string, number>()
const groupNumberToID = new Map<number, string>()

let nextGroupNumber = 1

function getGroupNumber(id: string): number {
  const existingGroupNumber = idToGroupNumber.get(id)
  if (existingGroupNumber) return existingGroupNumber

  while (groupNumberToID.has(nextGroupNumber)) {
    nextGroupNumber += 1
  }

  const groupNumber = nextGroupNumber++
  idToGroupNumber.set(id, groupNumber)
  groupNumberToID.set(groupNumber, id)
  return groupNumber
}

// function getGroupID(number: number): string | undefined {
//   return groupNumberToID.get(number)
// }

export class StyleManager {
  sizes = new Uint32Array(512)
  length = 512
  sheet: StyleSheet

  classNames = new Map<string, Set<string>>()

  constructor(sheet: StyleSheet) {
    this.sheet = sheet
  }

  hasNameForID(id: string, name: string): boolean {
    return this.classNames.has(id) && Boolean(this.classNames.get(id)?.has(name))
  }

  registerName(id: string, name: string) {
    getGroupNumber(name)
    let classNames = this.classNames.get(id)
    if (classNames) {
      classNames.add(name)
    } else {
      classNames = new Set()
      classNames.add(name)
      this.classNames.set(id, classNames)
    }
  }

  insertRules(id: string, name: string, rules: string | string[]): void {
    this.registerName(id, name)
    this.insertGroupRules(id, rules)
  }

  insertGroupRules(name: string, rules: string | string[]): void {
    const group = getGroupNumber(name)
    if (group >= this.sizes.length) {
      this.growSizes(group)
    }

    let index = this.indexOfGroup(group + 1)

    if (Array.isArray(rules)) {
      for (const rule of rules) {
        if (this.sheet.insertRule(index, rule)) {
          this.sizes[group] += 1
          index += 1
        }
      }
    } else {
      if (this.sheet.insertRule(index, rules)) {
        this.sizes[group] += 1
      }
    }
  }

  getGroupRules(name: string): string {
    const group = getGroupNumber(name)
    if (group >= this.length || this.sizes[group] === 0) return ''

    let rules = ''
    const startIndex = this.indexOfGroup(group)
    const endIndex = startIndex + this.sizes[group]

    for (let i = startIndex; i < endIndex; i++) {
      rules += `${this.sheet.getRule(i)}\n`
    }

    return rules
  }

  clearRules(id: string) {
    this.deleteGroupRules(id)
    this.clearNames(id)
  }

  clearNames(id: string) {
    this.classNames.get(id)?.clear()
  }

  deleteGroupRules(name: string): void {
    const group = getGroupNumber(name)
    if (group >= this.length) return
    const startIndex = this.indexOfGroup(group)
    const endIndex = startIndex + this.sizes[group]
    this.sizes[group] = 0
    for (let i = startIndex; i < endIndex; i++) {
      this.sheet.deleteRule(i)
    }
  }

  private indexOfGroup(group: number): number {
    let index = 0
    for (let i = 0; i < group; i++) {
      index += this.sizes[i]
    }
    return index
  }

  private growSizes(upTo: number) {
    const prevSizes = this.sizes
    const prevLength = this.length

    let nextLength = prevLength
    while (upTo >= nextLength) {
      nextLength <<= 1
      if (nextLength < 0) throw new Error('overflow')
    }

    this.sizes = new Uint32Array(nextLength)
    this.sizes.set(prevSizes)
    this.length = nextLength

    for (let i = prevLength; i < nextLength; i++) {
      this.sizes[i] = 0
    }
  }
}
