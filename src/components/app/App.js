import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("../home/home"));
const Stash = lazy(() => import("../stash/stash"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Link to="/">Songs</Link>
            <Link to="/stash">Stash</Link>
            <h1 className="app__title">Sing It!</h1>
            <Switch>
              <Route exact path="/">
                <Home songs={this.state.songs} />
              </Route>
              <Route path="/stash" component={Stash} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
