import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { device } from "../utils/device"

import Nav from "./nav"

// attach smooth scroll to all anchor links
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: anchor => {
      // Default to 0 offset if on tablet/mobile
      if (window.innerWidth < 768) {
        return 0
      }

      if (anchor.id === "about") {
        return 600
      } else if (anchor.id === "skills") {
        return 250
      }
    },
  })
}

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
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

  @media ${device.laptopL} {
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
  padding: 100px 0;
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
