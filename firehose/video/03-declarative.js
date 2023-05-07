const VIDEO_URLS = [
  'https://...',
  'https://...',
]

class App extends Component {
  state = {
    videoIdx: 0,
    videoEnded: false,
  }

  onPlaybackStatusUpdate = (status) => {
    if (!this.state.videoEnded && status.didJustFinish) {
      this.setState({videoEnded: true})
    } else if (this.state.videoEnded && !status.didJustFinish) {
      this.setState({videoEnded: false})
    }
  }

  render() {
    const videoSrc = VIDEO_URLS[this.state.videoIdx]

    return (
      <View>
        <Video
          src={videoSrc}
          onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
        />
        {this.state.videoEnded ? <Buttons> : null}
      </View>
    )
  }
}
