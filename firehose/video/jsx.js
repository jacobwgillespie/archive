
// This is JSX
const JS_VALUE = {color: 'red'}

<View style={{color: 'red'}}>
  <Video
    src="https://..."
    isMuted={this.state.isMuted}
  />
</View>

// This is what it does

const h = React.h

function h(component, props, children) {
  // do stuff
}

h(component, props, children)

h('View', {style: {color: 'red'}}, [
  h('Video', {
    src: 'https://...',
    isMuted: this.state.isMuted,
  }, [])
])
