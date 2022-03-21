import React, {useContext} from 'react'
import {StyleManager} from './internal/StyleManager'
import {DOMStyleSheet, VirtualStyleSheet} from './internal/StyleSheet'

export const StyleSheetContext = React.createContext<StyleManager | undefined>(undefined)

const isBrowser = typeof document !== 'undefined'
export const globalStyleManager = new StyleManager(isBrowser ? new DOMStyleSheet() : new VirtualStyleSheet())

export function useStyleManager(): StyleManager {
  return useContext(StyleSheetContext) ?? globalStyleManager
}

export const CoquetProvider = () => {}
