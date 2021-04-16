import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";

const News = ({ match }) => {
  return <h1>News Page : {match.params.id} </h1>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/"> Home Page</Link>
          <Link to="/contact"> Contact Page</Link>
          <Link to="/news/2"> News Page</Link>
          <hr />
          <NavLink activeStyle={{ color: "pink" }} to="/" exact>
            {" "}
            Home Page
          </NavLink>
          <NavLink activeStyle={{ color: "orange" }} to="/contact">
            {" "}
            Contact Page
          </NavLink>
          <NavLink activeStyle={{ color: "black" }} to="/news/2">
            {" "}
            News Page
          </NavLink>

          <Route
            path="/"
            exact
            render={() => {
              return <h1>Home Page</h1>;
            }}
          />

          <Route
            path="/contact"
            strict
            render={() => {
              return <h1>Contact Page</h1>;
            }}
          />
          <Route path="/news" exact strict component={News} />

          <Route path="/news/:id" strict component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
