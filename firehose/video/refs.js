// Direct javascript DOM:
const element = document.getElementById('myElement')
console.log(element.textContent)
element.style.color = 'red'

const theRefFunction = (element) => {
  // element is a DOM node
  console.log(element.textContent)
  element.style.color = 'red'
}

// React
class App extends Component {
  anotherMethod() {
    // this method needs the ref

    console.log(this.divRef)
  }

  render() {
    return (
      <div>
        <div ref={theRefFunction}>Hello world</div>

        // Saves the ref onto a property of `this` so it can be used in another part
        // of this class
        <div ref={thisIsTheRef => { this.divRef = thisIsTheRef }}>Hello world</div>
      </div>
    )
  }
}
