import styled from "styled-components"
import { device } from "../../utils/device"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../../images/portfolio-logo.svg"

export const StyledLogo = styled(Logo)`
  height: 100px;
  width: 90px;
`

export const Container = styled.footer`
  color: ${props => (props.darkBg ? "#fafafa" : "inherit")};

  /* class name on portfolio-logo.svg */
  .logo-d {
    fill: ${props => (props.darkBg ? "#fafafa" : "#2d2f45")};
  }
`

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 200px 0 100px 0;

  ul {
    margin: 0;
  }
`

export const NavItem = styled.li`
  margin: 20px 0;
  list-style: none;
  letter-spacing: 1px;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    text-decoration: underline;
  }
`

export const LogoContainer = styled.div`
  opacity: 0.75;
`

export const SocialLinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  transition: color 0.15s ease-out;
  color: inherit;

  :hover {
    color: #9c5f10;
  }

  @media ${device.laptopL} {
    margin: 10px 10px 0 10px;
  }
`

export const SocialLinkIcons = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  p {
    margin: 0;
    font-size: 22px;
    letter-spacing: 1px;
    color: inherit;
  }

  .slash {
    font-size: 32px;
  }

  @media ${device.laptopL} {
    margin: 20px 0;
    p {
      display: none;
    }
  }
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;

  :visited {
    color: inherit;
  }
`
