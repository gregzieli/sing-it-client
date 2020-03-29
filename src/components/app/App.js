import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import SongFilter from "../song-filter/song-filter";
import SongList from "../song-list/song-list";
import Stash from "../stash/stash";

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
    this.setState({ songs: songs });
  }

  updateSearch(inputValue) {
    this.setState({
      filter: inputValue
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Link to="/">Songs</Link>
          <Link to="/stash">Stash</Link>
          <h1 className="app__title">Sing It!</h1>
          <Switch>
            <Route exact path="/">
              <SongFilter
                updateSearch={this.updateSearch.bind(this)}
                searchText={this.state.filter}
              />
              <SongList filter={this.state.filter} songs={this.state.songs} />
            </Route>
            <Route path="/stash">
              <Stash />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
