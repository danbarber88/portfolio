import React from "react"
import { Link } from "gatsby"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons"
import * as FooterStyle from "./styled-components/footerStyles"

const Footer = props => (
  <FooterStyle.Container darkBg={props.darkBg}>
    <FooterStyle.Nav>
      <ul>
        <FooterStyle.NavItem>
          <Link to="/#about">About</Link>
        </FooterStyle.NavItem>
        <FooterStyle.NavItem>
          <Link to="/#skills">Skills</Link>
        </FooterStyle.NavItem>
        <FooterStyle.NavItem>
          <Link to="/work/">Work</Link>
        </FooterStyle.NavItem>
      </ul>
      <FooterStyle.LogoContainer>
        <Link to="/">
          <FooterStyle.StyledLogo />
        </Link>
      </FooterStyle.LogoContainer>
    </FooterStyle.Nav>
    <FooterStyle.SocialLinksContainer>
      <FooterStyle.SocialLinkIcons>
        <FooterStyle.SocialLink
          href="https://uk.linkedin.com/in/danbarber88"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterStyle.StyledIcon icon={faLinkedin} size="3x" />
        </FooterStyle.SocialLink>
        <FooterStyle.SocialLink
          href="https://github.com/danbarber88"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterStyle.StyledIcon icon={faGithubSquare} size="3x" />
        </FooterStyle.SocialLink>
        <p className="slash">/</p>
        <p>danbarber88</p>
      </FooterStyle.SocialLinkIcons>
      <FooterStyle.SocialLinkIcons>
        <FooterStyle.SocialLink href="mailto:d.j.barber88@gmail.com">
          <FooterStyle.StyledIcon icon={faEnvelope} size="3x" />
          <p>d.j.barber88@gmail.com</p>
        </FooterStyle.SocialLink>
      </FooterStyle.SocialLinkIcons>
      <FooterStyle.SocialLinkIcons>
        <FooterStyle.SocialLink href="CV.pdf" target="_blank">
          <FooterStyle.StyledIcon icon={faFilePdf} size="3x" />
          <p>CV</p>
        </FooterStyle.SocialLink>
      </FooterStyle.SocialLinkIcons>
    </FooterStyle.SocialLinksContainer>
  </FooterStyle.Container>
)

export default Footer
