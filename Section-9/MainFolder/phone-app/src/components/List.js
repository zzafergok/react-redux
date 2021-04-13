import React, { Component } from "react";

class List extends Component {
  state = {
    filterText: "",
  };
  onChangeFilterText(e) {
    console.log(e.target.value);
    this.setState({
      filterText: e.target.value,
    });
  }

  render() {
    const filteredContacts = this.props.contact.filter((contact) => {
      return (
        contact.name
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <input
          onChange={this.onChangeFilterText.bind(this)}
          value={this.state.filterText}
          name={"filter"}
          id={"filter"}
        />
        <ul>
          {filteredContacts.map((c) => (
            <li key={c.phone}>
              <span>{c.name}</span>
              <span>{c.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
