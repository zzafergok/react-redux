import React, { Component } from "react";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { menuStyle, fixedMenuStyle, src } from "../helpers/styleHelpers";
export class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed } = this.state;

    return (
      <>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as={Link} to="/">
                <Image size="mini" src={src} />
              </Menu.Item>
              <Menu.Item header as={Link} to="/">
                MovieApp
              </Menu.Item>
              <Menu.Item as={Link} to="/movies">
                MoviesPage
              </Menu.Item>
              <Menu.Item as={Link} to="/add-new">
                Add New
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </>
    );
  }
}

export default Header;
