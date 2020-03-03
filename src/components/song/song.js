import React, { Component } from "react";

class Song extends Component {
  render() {
    return (
      <li className="song-item">
        <span className="song-artist">
                  {this.props.song.Artist}
                  {this.props.song.Featured ? `, ${this.props.song.Featured}` : ""}
        </span>
        <span> - </span>
        <span className="song-name">{this.props.song.Name}</span>
      </li>
    );
  }
}

export default Song;
