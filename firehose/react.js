class Something extends React.Component {
  state = {
    a: 'b'
  }

  // onButtonClick = () => {
  //   console.log(this.state.a)
  // }

  onButtonClick() {
    console.log(this.state.a)
  }

  render() {
    return (
      <Button onClick={(a, b) => this.onButtonClick(a, b)} />
    )
  }
}

const func = function() {}
const boundFunc = func.bind(this)

func()
boundFunc()



class Something extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      a: 'b',
    }

    this.onButtonClick = () => {
      console.log(this.state.a)
    }
  }
}















class App extends React.Componnet {
  videoUrl() {
    return (
      'Hello World'
    )
  }

  _onPressButton1() {
    Alert.alert(videoUrl())
  }

  render() {
    return (
      <Container>
        <Button onClick={this._onPressButton1()} />
      </Container>
    )
  }
}







// Curly brace usage

// Blocks

if (true) {
  console.log('a')
  console.log('b')
}

while(true) {
  console.log('c')
}

// Objects

const obj = {
  a: 'a',
  b: 'b',
}

const a = 'a'
const something = 123
const obj = {a, something} // const obj = {a: a, something: something}
obj === {a: 'a', something: 123}

console.log({{this.state.uri}})
console.log({this.state.uri})
console.log(this.state.uri)

// JSX properties

<Comp prop={'value'} />
<Comp prop={{a: 'a', b: 'b'}} />
<Comp prop={{a, b}} />


// Destructuring

const obj = {a: 'aaaa', b: 'bbbb'}

const {a, b} = obj
// same as
const a = obj.a
const b = obj.b

console.log(a) // prints aaaa
console.log(b) // prints bbbb













//
