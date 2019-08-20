import styled from "styled-components"
import { device } from "../../utils/device"
import Logo from "../../images/portfolio-logo.svg"

export const StyledLogo = styled(Logo)`
  height: 70px;
  width: 60px;
  margin: 9px 0;

  @media ${device.tablet} {
    height: 60px;
    width: 51px;
  }
`

export const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 30px 50px;

  @media ${device.tablet} {
    align-items: flex-start;

    padding: 15px 25px;
    height: ${props => (props.navOpen ? "322px" : "108px")};

    /* Delay the height animation to give the NavItems a chance to fade out on nav close */
    transition: ${props =>
      props.navOpen ? "height 0.15s ease-out" : "height 0.15s 0.35s ease-out"};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media ${device.tablet} {
    justify-content: center;
  }
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 60px;

  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 70px;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
  list-style: none;
  font-family: Oswald;
  font-size: 1.5em;
  margin: 0 50px;
  text-decoration-color: #9c5f10;

  transition: all 0.15s ease-out;

  /* Fade in from right to left when nav opens */
  transform: ${props =>
    props.navOpen ? "translateX(0px)" : "translateX(60px)"};
  opacity: ${props => (props.navOpen ? 1 : 0)};
  visibility: ${props => (props.navOpen ? "visible" : "hidden")};

  @media ${device.tablet} {
    margin: 20px 0;

    /* Delay the NavItems from fading in the give the nav a chance to fully open */
    transition: ${props =>
      props.navOpen ? "all 0.15s 0.35s ease-out" : "all 0.15s ease-out"};

    /* Fade in from top to bottom when nav opens */
    transform: ${props =>
      props.navOpen ? "translateY(0px)" : "translateY(-60px)"};
  }

  &:hover {
    text-decoration: underline;
    text-decoration-color: #9c5f10;
  }
`
