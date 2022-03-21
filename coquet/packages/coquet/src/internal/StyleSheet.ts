import {StyleSheet} from './types'

export class DOMStyleSheet implements StyleSheet {
  element = makeStyleElement()
  sheet = getStyleSheet(this.element)
  length = 0

  insertRule(index: number, rule: string): boolean {
    try {
      this.sheet.insertRule(rule, index)
      this.length += 1
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  getRule(index: number): string {
    const rule = this.sheet.cssRules[index]
    return rule && typeof rule.cssText === 'string' ? rule.cssText : ''
  }

  deleteRule(index: number): void {
    this.sheet.deleteRule(index)
    this.length -= 1
  }
}

export class VirtualStyleSheet implements StyleSheet {
  rules: string[] = []
  length = 0

  insertRule(index: number, rule: string): boolean {
    if (index > this.length) return false
    this.rules.splice(index, 0, rule)
    this.length += 1
    return true
  }

  getRule(index: number): string {
    return index < this.length ? this.rules[index] : ''
  }

  deleteRule(index: number): void {
    this.rules.splice(index, 1)
    this.length -= 1
  }
}

function makeStyleElement(): HTMLStyleElement {
  const styleElement = document.createElement('style')
  styleElement.appendChild(document.createTextNode(''))
  styleElement.setAttribute('data-coquet', 'active')

  const nonce = getNonce()
  if (nonce) styleElement.setAttribute('nonce', nonce)

  const prevStyle = findLastStyleTag(document.head)
  document.head.insertBefore(styleElement, prevStyle ? prevStyle.nextSibling : null)

  return styleElement
}

function findLastStyleTag(element: HTMLElement): HTMLStyleElement | undefined {
  const {childNodes} = element
  for (const node of childNodes) {
    if (isHTMLElement(node) && node.hasAttribute('data-coquet')) {
      return node as HTMLStyleElement
    }
  }
  return undefined
}

function isHTMLElement(node: ChildNode): node is HTMLElement {
  // nodeType of 1 is HTMLElement
  return node && node.nodeType === 1
}

declare var __webpack_nonce__: string
function getNonce() {
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null
}

function getStyleSheet(element: HTMLStyleElement): CSSStyleSheet {
  if (element.sheet) return element.sheet

  for (const sheet of document.styleSheets) {
    if (sheet.ownerNode === element) return sheet
  }

  throw new Error('Unable to access element.sheet')
}
