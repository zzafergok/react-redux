import React, { Component } from "react";
import "./App.css";

import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import MoviesPage from "./components/pages/MoviesPage";
import NewMoviePage from "./components/pages/NewMoviePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-body">
          <Container text>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/add-new" exact component={NewMoviePage} />
            <Route path="/movie/:_id" exact component={NewMoviePage} />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
