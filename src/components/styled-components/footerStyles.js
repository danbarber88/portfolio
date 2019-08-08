import styled from "styled-components"
import { device } from "../../utils/device"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Container = styled.footer`
  color: ${props => (props.darkBg ? "#fafafa" : "inherit")};
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

  :hover {
    color: #9c5f10;
  }

  @media ${device.laptopL} {
    margin: 10px;
  }
`

export const SocialLinkIcons = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px;

  p {
    margin: 0;
    font-size: 22px;
    letter-spacing: 1px;
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
  color: #fafafa;
  text-decoration: none;

  :visited {
    color: #fafafa;
  }
`
