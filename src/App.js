import React from "react";
import "./App.css";

import data from "./tracks.json";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTrackIndex: 0,
      duration: 0,
      toggle_track: false,
      currentTrack: data.tracks[0]


    };
    this.handleClick = this.handleClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.selectTrackNumber = this.selectTrackNumber.bind(this);
    this.change_vol = this.change_vol.bind(this);
    this.setTrack = this.setTrack.bind(this);
    this.moveTrack = this.moveTrack.bind(this);
    this.track_toggle = this.track_toggle.bind(this);




  }
  playAudio(){
    this.audioElement.play();
    
  }
  pauseAudio(){
    this.audioElement.pause();
  }
  selectTrackNumber(trackId){
    this.setState({currentTrackIndex:trackId,playing:true},this.playAudio);
  }
  change_vol(){
    this.audioElement.volume = document.getElementById("change_vol").value;
  }

  setTrack(){
    var x = this.audioElement.currentTime;
    var y = this.audioElement.duration;
    var z = this.state.currentTrack;
    this.setState({currentTrack: data.tracks[this.state.currentTrackIndex - 1]});
    document.getElementById("current").innerHTML = this.formatTime(x);
    document.getElementById("progress").value = x;
    document.getElementById("cur_title").innerHTML = z.title;
    console.log(z);
    if(x > 0){
      this.setState({duration : y});
      document.getElementById("duration").innerHTML = this.formatTime(y);
    } 
    if(x === null) {
      this.setState({duration : 0});
      document.getElementById("duration").innerHTML = " ";
    }
    if(x === y){
      document.getElementById("next").click();
    }
  }

  formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ':' + ((sec<10) ? ('0' + sec) : sec);
  }


  moveTrack(){
    this.audioElement.currentTime = document.getElementById('progress').value;
  }

  track_toggle() {
    this.setState({toggle_track: !this.state.toggle_track});
  }


  handleClick(e) {
    switch (e.target.id) {
      case "play":
        this.setState((state, props) => {
          let currentTrackIndex = state.currentTrackIndex;
          if (currentTrackIndex === 0) {
            currentTrackIndex = 1;
          }
          return {
            playing: true,
            currentTrackIndex: currentTrackIndex,
          };
        },this.playAudio);
        break;
      case "pause":
        this.setState({ playing: false },this.pauseAudio);
        break;
      case "prev":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex - 1;
          if (currentIndex <= 0) {
            return null;
          } else {
            return { playing:true,currentTrackIndex: currentIndex };
          }
        },this.playAudio);
        break;
      case "next":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex + 1;
          if (currentIndex > data.tracks.length) {
            return null;
          } else {
            return { playing:true,currentTrackIndex: currentIndex };
          }
        },this.playAudio);
        break;
      default:
        break;
    }
  }


  render() {
    
    return (
      <div className="App">

        <div className="album" style={{ backgroundImage: "url(" + this.state.currentTrack.album + ")" }}></div>
        <div className="player"  >
          <Controls onClick={this.handleClick} playing={this.state.playing} />
          <audio id="audio" ref={(audio)=>{this.audioElement = audio}} src={"/songs/"+this.state.currentTrackIndex+".mp3"} onTimeUpdate={this.setTrack}/>
          <div id="volume">
          <i class="fas fa-volume-down"></i>
          <input type="range" id="change_vol" onChange={this.change_vol} step="0.05" min="0" max="1" aria-label="volume" ></input>
          </div>
          <div className="track_set">
          <input type="range" id="progress" onChange={this.moveTrack} step="0.5"  min="0" max={this.state.duration} aria-label="progress"/>
          <div id ="times">
          <p id="current"></p>
          <p id="duration"></p>
          </div>
          <div className="info">
            <p id="cur_title"></p>
          </div>
          </div>
          <button className="Track_toggle ripple" onClick={this.track_toggle} aria-label="playlist"><i class="fas fa-music" ></i></button>


        </div>
        <TrackList
          currentTrackIndex={this.state.currentTrackIndex}
          selectTrackNumber={this.selectTrackNumber}
          toggle_track={this.state.toggle_track}
        />

      </div>
    );
  }
}

// Controls
class Controls extends React.Component {
  render() {
    return (
      <div className="Controls">
        <i
          id="prev"
          className="fa fa-fw fa-fast-backward"
          onClick={this.props.onClick}
        />
        {!this.props.playing &&
          <i
            id="play"
            onClick={this.props.onClick}
            className="fa fa-fw fa-play"
          />}
        {this.props.playing &&
          <i
            id="pause"
            onClick={this.props.onClick}
            className="fa fa-fw fa-pause"
          />}
        <i
          id="next"
          className="fa fa-fw fa-fast-forward"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

// TrackList
class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tracks : []}
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    //fetch data for a track here (i.e. from Spotify or Soundcloud)s
    this.setState({ tracks: data.tracks });
  }
  
  renderListItem(track, i) {
    let trackClass = this.props.currentTrackIndex === track.id
      ? "selected"
      : "";
    return (
      <li
        key={track.id}
        className={trackClass}
        ref={cur => {
          if (this.props.currentTrackIndex === track.id) {
            this.activeTrack = cur;
          }
        }}
        onClick={()=>{this.props.selectTrackNumber(track.id)}}
      >
        <div className="number">{track.id}</div>
        <div className="title">{track.title}</div>
        <div className="duration">{track.duration}</div>
      </li>
    );
  }
  render() {
    let tracks = this.state.tracks.map(this.renderListItem);
    let track_toggle = [""];
    if(this.props.toggle_track === true) {
      track_toggle.push('active');
    }
    return (
      <ul
        className={"TrackList " + [track_toggle.join(' ')]}
        ref={input => {
          this.trackList = input;
        }}
      >
        {tracks}
      </ul>
    );
  }
}

export default App;
