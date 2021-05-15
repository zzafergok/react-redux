import React, { Component } from "react";
import "./App.css";

import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

import MoviesPage from "./components/pages/MoviesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container text>
          <Route path="/movies" component={MoviesPage} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
