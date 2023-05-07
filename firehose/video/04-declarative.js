const VIDEO_URLS = [
  'https://...',
  'https://...',
]

class App extends Component {
  state = {
    videoIdx: 0,
    playbackStatus: {},
  }

  renderButtons() {
    return (
      <TheButtons />
    )
  }

  render() {
    const playbackStatus = this.state.playbackStatus
    const videoSrc = VIDEO_URLS[this.state.videoIdx]

    const aboutToEnd = playbackStatus.durationMillis - playbackStatus.positionMillis < 10000

    return (
      <View>

        {aboutToEnd ? <Warning> : null}

        <Video
          src={videoSrc}
          onPlaybackStatusUpdate={(playbackStatus) => {
            this.setState({playbackStatus: playbackStatus})
          }}
        />

        {playbackStatus.didJustFinish ? this.renderButtons() : null}
      </View>
    )
  }
}
