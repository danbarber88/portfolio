import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Nav from "./nav"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
    color: #2D2F45;
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
