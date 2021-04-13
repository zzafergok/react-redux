import React from "react";
import Form from "./Form";
import List from "./List";

const Contacts = (props) => (
  <>
    <List contact={props.contacts} />
    <Form addContact={props.addContact} />
  </>
);

export default Contacts;
