const VIDEO_URLS = [
  'https://...',
  'https://...',
]

class App extends Component {
  state = {
    videoIdx: 0,
    videoEnded: false,
  }

  componentDidMount() {
    setInterval(() => {
      const status = this.playbackObject.getStatusAsync()
      // idea
      this.setState({videoEnded: status.didJustFinish})

      // other idea
      if (status.didJustFinish) {
        this.setState({videoEnded: true})
      } else {
        this.setState({videoEnded: false})
      }
    }, 1000)
  }

  buttonOnClick() {
    // do stuff

    // other idea
    this.setState({videoEnded: false})
  }

  render() {
    const videoSrc = VIDEO_URLS[this.state.videoIdx]

    return (
      <View>
        <Video
          src={videoSrc}
          ref={playbackObject => { this.playbackObject = playbackObject }}
        />
        {this.state.videoEnded ? <Buttons> : null}
      </View>
    )
  }
}
