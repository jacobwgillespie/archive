

const array = [5, 7, 9, 3, 2, 1]

const hash_table = {
  5: true,
  7: true,
  9: true,
  3: true,
  2: true,
  1: true,

  aMethod: () => {
    return this
  },

  8: true
}

array.forEach(i => {
  hash_table[i] = true
})

class Card {}

const card = new Card()

class MyComponent extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    ...
  }
}

const myObject = {
  id: 123,
  name: 'bob'
}

<MyComponent params={myObject} />
