import React, { Component } from "react";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((data) => data.json())
    //     .then((users) => {
    //       this.setState({
    //         users,
    //         isLoading: false,
    //       });
    //       console.log(users);
    //     });
    // }, 3000);

    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((users) => users.data)
        .then((users) => {
          this.setState({
            users,
            isLoading: false,
          });
          console.log(users);
        });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {isLoading ? "Loading..." : ""}
          {this.state.users.map((user) => (
            <div key={user.id}>
              {user.name} - @{user.username}
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
