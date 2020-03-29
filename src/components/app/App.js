import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Stash from "../stash/stash";
import Home from "../home/home";

class App extends React.Component {
  constructor() {
    super();
    this.state = { songs: [] };
  }

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/songs`);
    const songs = await response.json();
    this.setState({ songs: songs });
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
              <Home songs={this.state.songs} />
            </Route>
            <Route path="/stash" component={Stash} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
