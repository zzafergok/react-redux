import React, { Component } from "react";
// import PropTypes from 'prop-types'

import { Container, Image, List, Segment } from "semantic-ui-react";
import { src } from "../helpers/styleHelpers";

export class Footer extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      <>
        <Segment inverted vertical>
          <Container textAlign="center">
            <Image centered size="mini" src={src} />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </>
    );
  }
}

export default Footer;
