import React, { Component } from "react";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";

import { Link, NavLink } from "react-router-dom";
import { menuStyle, fixedMenuStyle, src } from "../helpers/styleHelpers";
export class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  stickTopMenu = () => this.setState({ menuFixed: true });
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
              <Menu.Item as={Link} to="/" exact="true">
                <Image size="mini" src={src} />
                <Menu.Item header>MovieApp</Menu.Item>
              </Menu.Item>
              <Menu.Item as={NavLink} to="/movies" exact>
                Movies
              </Menu.Item>
              <Menu.Item as={NavLink} to="/add-new" exact>
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
