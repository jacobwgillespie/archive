import {createElement, forwardRef} from 'react'
import {css} from './css'
import {cx} from './cx'
import {StyleClass} from './internal/StyleClass'
import {cssEscape, generateDisplayName, getDisplayName, hash, namedFunction} from './internal/utils'
import {elements} from './internal/utils/elements'
import {useStyleManager} from './StyleProvider'
import {BaseCreateStyled, Interpolation, Styled, StyledComponent, StyledTags} from './types'

const styler: BaseCreateStyled = (element: React.ElementType) => {
  return namedFunction(generateDisplayName(element), (styles: TemplateStringsArray, ...interpolations: any[]) => {
    const builtCSS = css(styles, ...interpolations)
    return createStyledComponent(element, builtCSS)
  })
}

export const styled: Styled = Object.assign(
  styler,
  elements.reduce<StyledTags>((obj, el) => {
    obj[el] = styler(el)
    return obj
  }, {} as StyledTags),
)

const identifiers = new Map<string, number>()

function generateID(displayName?: string, parentID?: string) {
  const name = displayName ? cssEscape(displayName) : 'coquet'
  const identifier = (identifiers.get(name) || 0) + 1
  identifiers.set(name, identifier)
  const id = `${name}-${hash(`${name}-${identifier}`)}`
  return parentID ? `${parentID}-${id}` : `coquet-${id}`
}

function createStyledComponent<T extends React.ElementType>(component: T, styles: Interpolation<any>) {
  const displayName = generateDisplayName(component)
  const componentID = generateID(getDisplayName(component))
  const styleClass = new StyleClass(componentID, [styles])
  const asComponentCache = new Map<React.ElementType, StyledComponent<any, any>>()

  const WrappedStyledComponent = forwardRef<T, React.ComponentPropsWithoutRef<T>>((props, ref) => {
    const styleManager = useStyleManager()
    const className = styleClass.inject(styleManager, props)

    const filteredProps = {} as typeof props
    for (const key in props) {
      if (key[0] !== '$') {
        filteredProps[key] = props[key]
      }
    }

    return createElement(component, {
      ...filteredProps,
      ref,
      className: cx(props.className, componentID, className),
    })
  })

  const StyledComponent = Object.assign(WrappedStyledComponent, {
    displayName,
    as<T extends React.ElementType>(component: T) {
      const cachedStyledComponent = asComponentCache.get(component)
      if (cachedStyledComponent) return cachedStyledComponent
      const styledComponentAs = createStyledComponent(component, styles)
      asComponentCache.set(component, styledComponentAs)
      return styledComponentAs
    },
  })

  return StyledComponent
}
