import React from "react";
import Song from "../song/song";

class SongList extends React.Component {
  filter(songs) {
    if (!this.props.filter) {
      return songs;
    }

    return songs.filter(
      song =>
        song.Name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0 ||
        song.Artist.toLowerCase().indexOf(this.props.filter.toLowerCase()) >=
          0 ||
        (song.Featured &&
          song.Featured.toLowerCase().indexOf(
            this.props.filter.toLowerCase()
          ) >= 0)
    );
  }
  render() {
    return (
      <ul className="song-list">
        {this.filter(this.props.songs).map(song => (
          <Song song={song} />
        ))}
      </ul>
    );
  }
}

export default SongList;
