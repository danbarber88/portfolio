import React, { Component } from "react"
import { Link } from "gatsby"

import NavButton from "./navButton"
import * as NavStyle from "./styled-components/navStyles"

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
      <NavStyle.StyledNav navOpen={this.state.navOpen}>
        <Link to="/">
          <NavStyle.StyledLogo />
        </Link>

        <NavStyle.Container>
          <NavStyle.NavItems>
            <NavStyle.NavItem
              navOpen={this.state.navOpen}
              onClick={this.handleClick}
            >
              <Link to="/#about">About</Link>
            </NavStyle.NavItem>
            <NavStyle.NavItem
              navOpen={this.state.navOpen}
              onClick={this.handleClick}
            >
              <Link to="/#skills">Skills</Link>
            </NavStyle.NavItem>
            <NavStyle.NavItem
              navOpen={this.state.navOpen}
              onClick={this.handleClick}
            >
              <Link to="/work/">Work</Link>
            </NavStyle.NavItem>
          </NavStyle.NavItems>
        </NavStyle.Container>
        <NavButton navOpen={this.state.navOpen} onClick={this.handleClick} />
      </NavStyle.StyledNav>
    )
  }
}

export default Nav
