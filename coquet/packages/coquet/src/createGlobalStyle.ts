import {memo, useEffect} from 'react'
import {css} from './css'
import {flatten, hash} from './internal/utils'
import {createCompiler} from './internal/utils/compiler'
import {useStyleManager} from './StyleProvider'
import {Interpolation} from './types'

const stylis = createCompiler()

export function createGlobalStyle<Props extends {} = {}>(
  styles: TemplateStringsArray,
  ...interpolations: Interpolation<Props>[]
): React.FC<Props> {
  const rules = css(styles, ...interpolations)

  const id = `coquet-global-${hash(JSON.stringify(rules))}`

  const GlobalStyle: React.FC = (props) => {
    const styleManager = useStyleManager()
    useEffect(() => {
      const style = flatten(rules, styleManager, props)
      const flatCSS = `${Array.isArray(style) ? style.join('') : style}`
      const compiledCSS = stylis.compile(flatCSS)
      styleManager.insertRules(id, id, compiledCSS)
      return () => styleManager.clearRules(id)
    }, [])

    return null
  }

  return memo(GlobalStyle)
}
