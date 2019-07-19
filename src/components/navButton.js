import React from "react"
import Button from "../images/nav-button.svg"
import styled from "styled-components"

const StyledButton = styled.div`
  opacity: 1;
  cursor: pointer;
  height: 50px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  /* .line, .one and .two are classes on nav-button.svg */
  .line {
    transition: all 0.15s ease-out;
    transform-origin: 50% 50%;
  }

  .one {
    transform: ${props => (props.navOpen ? `rotate(45deg)` : `rotate(0deg)`)};
  }

  .two {
    transform: ${props => (props.navOpen ? `rotate(-45deg)` : `rotate(0deg)`)};
  }
`

const NavButton = props => {
  return (
    <StyledButton navOpen={props.navOpen} onClick={props.onClick}>
      <Button />
    </StyledButton>
  )
}

export default NavButton
