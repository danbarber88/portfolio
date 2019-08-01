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

export const Wrapper = styled.div`
  width: 55%;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 90%;
  }
`

export const Header = styled.h2`
  z-index: 1;
  font-size: 48px;
  line-height: 55px;
  letter-spacing: 0.05em;

  @media ${device.tablet} {
    margin-bottom: 4rem;
  }
`

export const LargeText = styled(Header)`
  margin: 100px 0;
  width: 600px;

  @media ${device.tablet} {
    width: 90%;
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
