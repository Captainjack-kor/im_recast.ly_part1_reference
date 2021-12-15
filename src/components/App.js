import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { fakeData } from './__test__/fakeData';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: fakeData,
      currentVideo: null
    }

    this.setCurrentVideo = this.setCurrentVideo.bind(this)
  }

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="parent">
          <VideoPlayer video={this.state.currentVideo} />
          <VideoList videos={this.state.videos} handleClickEntry={this.setCurrentVideo} />
        </div>
      </div>
    )
  }
}

export default App;
