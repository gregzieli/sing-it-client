import React, { Suspense, lazy, useState, useEffect } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import axios from "axios";

import { useStateWithSessionStorage } from "../../hooks/storage";
import StashContext from "../../contexts/stash-context";
import ToastContainer from "../../setup/toast";
import "./App.scss";

const Home = lazy(() => import("../home/home"));
const Stash = lazy(() => import("../stash/stash"));

const App = () => {
  const [songs, setSongs] = useState([]);
  const [stash, setStash] = useStateWithSessionStorage("stash", []);

  let location = useLocation();

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/songs`).then((res) => {
      setSongs(res.data);
    });
  }, []);

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        {location.pathname !== "/" && <Link to="/">Songs</Link>}
        {location.pathname !== "/stash" && <Link to="/stash">Favorites</Link>}
        <h1 className="app__title">Sing It!</h1>
        <Switch>
          <StashContext.Provider value={{ stash, setStash }}>
            <Route exact path="/" render={() => <Home songs={songs} />} />
            <Route path="/stash" component={Stash} />
          </StashContext.Provider>
        </Switch>
      </Suspense>
      <ToastContainer />
    </div>
  );
};

export default App;
