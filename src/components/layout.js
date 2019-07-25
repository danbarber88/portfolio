import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { device } from "../utils/device"

import Nav from "./nav"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
    color: #2D2F45;
  }

  .orange {
    color: #9c5f10;
  }

  p {
    letter-spacing: 0.04rem;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
