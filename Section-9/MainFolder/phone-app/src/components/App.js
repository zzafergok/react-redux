import React, { Component } from "react";
import "../App.css";
import Contacts from "./Contacts";

class App extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [
      {
        name: "yunus",
        phone: "11111111",
      },
      {
        name: "zafer",
        phone: "111113111",
      },
    ],
  };

  addContact(contact) {
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({
      contacts,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {" "}
          <Contacts
            addContact={this.addContact}
            contacts={this.state.contacts}
          />{" "}
        </header>
      </div>
    );
  }
}

export default App;
