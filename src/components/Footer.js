import React, { Component } from "react";

import { Container, Image, Segment } from "semantic-ui-react";
import { src } from "../helpers/styleHelpers";

export class Footer extends Component {
  render() {
    return (
      <>
        <Segment inverted vertical>
          <Container>
            <Image centered size="mini" src={src} />
          </Container>
        </Segment>
      </>
    );
  }
}

export default Footer;
