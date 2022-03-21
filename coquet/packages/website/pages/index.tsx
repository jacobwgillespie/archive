import {createGlobalStyle, styled} from 'coquet'

const GlobalStyle = createGlobalStyle<{color: string}>`
h1 {
  color: ${(props) => props.color ?? 'green'};
}
`

const StyledP = styled.p`
  color: red;
  color: blue;
`

const Optional: React.FC<{optional?: string}> = () => null

const Demo: React.FC<{name: string}> = ({name, ...rest}) => {
  return <p {...rest}>Hello {name}</p>
}

const d = styled(Demo)
const Test = d`
  ${(props) => {
    return props.name
  }}
`

const StyledDemo = styled(Demo)`
  color: red;

  ${(props) => (props.name === 'world' ? 'color: purple;' : '')};

  & + & {
    color: green;
  }
`

// const StyledOptional = StyledDemo.as('p')

export default function Home() {
  return (
    <div>
      <GlobalStyle color="red" />
      <h1>Hello World</h1>
      <StyledP>Hello world</StyledP>

      <Test name="hi" />

      <StyledDemo name="world" />
      <StyledDemo name="there" />
    </div>
  )
}
