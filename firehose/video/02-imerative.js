const VIDEO_URLS = [
  'https://...',
  'https://...',
]

class App extends Component {
  state = {
    videoIdx: 0,
    videoEnded: false,
  }

  _onPlaybackStatusUpdate = status => {
    if (!this.state.videoEnded && status.didJustFinish) {
      this.setState({videoEnded: true})
    } else if (this.state.videoEnded && !status.didJustFinish) {
      this.setState({videoEnded: false})
    }
  }

  _unregisterCallback = () => {
    if (this.playbackObject) {
      this.playbackObject.setOnPlaybackStatusUpdate(null)
    }
  }

  _onVideoRef = (playbackObject) => {
    if (this.playbackObject) {
      this._unregisterCallback()
    }

    this.playbackObject = playbackObject
    this.playbackObject.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate)
  }

  componentWillUnmount() {
    this._unregisterCallback()
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
          ref={this._onVideoRef}
        />
        {this.state.videoEnded ? <Buttons> : null}
      </View>
    )
  }
}
