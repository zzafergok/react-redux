import React, { Component } from "react";
import "./App.css";

import { Link, Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="movies"> MoviesPage </Link>
        <Route path="/movies" component={MoviesPage} />
      </div>
    );
  }
}

export default App;
