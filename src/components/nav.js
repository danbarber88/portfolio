import React, { Component } from "react"
import Logo from "../images/logo.svg"
import NavButton from "./navButton"
import {
  StyledNav,
  Container,
  NavItems,
  NavItem,
} from "./styled-components/navStyles"

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  handleClick = () => {
    // toggle nav open/closed
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }

  render() {
    return (
      <StyledNav navOpen={this.state.navOpen}>
        <Logo />

        <Container>
          <NavItems>
            <NavItem navOpen={this.state.navOpen}>About</NavItem>
            <NavItem navOpen={this.state.navOpen}>Skills</NavItem>
            <NavItem navOpen={this.state.navOpen}>Work</NavItem>
          </NavItems>
        </Container>
        <NavButton navOpen={this.state.navOpen} onClick={this.handleClick} />
      </StyledNav>
    )
  }
}

export default Nav
