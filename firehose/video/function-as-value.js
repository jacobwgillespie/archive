

class App extends Component {
  render() {
    return (
      <AnotherComponent
        giveMeAValue={(theValue) => {
          alert(theValue)
        }}
      >
        hi
      </AnotherComponent>
    )
  }
}

class AnotherComponent extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.giveMeAValue(Date.now())
    }, 1000)
  }

  render() {
    return this.props.children
  }
}

switch(this.state.currentVideo) {
  case 1:
    return 5

  case 2:
    return 5

  case 3:
    return 5

  case 4:
    return 5
}

const nextVideoRight = {
  1: 5,
  2: 4,
  4: 7,
}

const prevVideoLeft = {}

Object.keys(nextVideoRight).forEach(key => {
  const value = nextVideoRight[key]
  prevVideoLeft[value] = key
})

this.setState({
  currentVideo: nextVideoMap[this.state.currentVideo] || 0,
})
