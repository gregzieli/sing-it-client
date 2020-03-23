import React, { Component } from "react";

class Song extends Component {
  render() {
    return (
      <li className="song-item">
        <span className="song-artist">
          {this.props.song.artist}
          {this.props.song.featured ? `, ${this.props.song.featured}` : ""}
        </span>
        <span> - </span>
        <span className="song-name">{this.props.song.name}</span>
      </li>
    );
  }
}

export default Song;
