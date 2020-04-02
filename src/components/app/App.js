import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useStateWithSessionStorage } from "../../hooks/storage";
import "./App.scss";

const Home = lazy(() => import("../home/home"));
const Stash = lazy(() => import("../stash/stash"));

const App = () => {
  toast.configure();

  const [songs, setSongs] = useState([]);
  const [stash, setStash] = useStateWithSessionStorage("stash", []);

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/songs`).then(res => {
      setSongs(res.data);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Link to="/">Songs</Link> 
          <Link to="/stash">Stash</Link>
          <h1 className="app__title">Sing It!</h1>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home songs={songs} stash={stash} setStash={setStash} />
              )}
            />
            <Route
              path="/stash"
              render={() => <Stash stash={stash} setStash={setStash} />}
            />
          </Switch>
        </Suspense>
        <ToastContainer autoClose={1500} hideProgressBar />
      </div>
    </Router>
  );
};

export default App;
