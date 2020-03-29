import React, { Component } from "react";
import Filter from "../song-filter/song-filter";
import SongList from "../song-list/song-list";

class Home extends Component {
  constructor() {
    super();

    this.state = { filter: "" };
  }

  updateSearch(inputValue) {
    this.setState({
      filter: inputValue
    });
  }

  render() {
    return (
      <div>
        <Filter
          updateSearch={this.updateSearch.bind(this)}
          searchText={this.state.filter}
        />
        <SongList filter={this.state.filter} songs={this.props.songs} />
      </div>
    );
  }
}

export default Home;
