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
    this.playbackObject.setOnPlaybackStatusUpdate(status => {
      if (!this.state.videoEnded && status.didJustFinish) {
        this.setState({videoEnded: true})
      } else if (this.state.videoEnded && !status.didJustFinish) {
        this.setState({videoEnded: false})
      }
    })
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
