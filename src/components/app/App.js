import React from "react";
import "./App.scss";
import SongFilter from "../song-filter/song-filter";
import SongList from "../song-list/song-list";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      filter: null
    };
  }

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/songs`);
    const songs = await response.json();
    this.setState({ songs: songs })
  }

  updateSearch(inputValue) {
    this.setState({
      filter: inputValue
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Sing It!</h1>
        <SongFilter
          updateSearch={this.updateSearch.bind(this)}
          searchText={this.state.filter}
        />
        <SongList filter={this.state.filter} songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
