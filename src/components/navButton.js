import React from "react"
import Button from "../images/nav-button.svg"
import styled from "styled-components"

const StyledButton = styled.div`
  opacity: 1;
  cursor: pointer;

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

  .nav-button {
    transition: opacity 0.25s;
  }

  &:hover .nav-button {
    opacity: 1;
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
