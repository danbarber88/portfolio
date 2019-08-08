import React from "react"
import Logo from "../images/light-logo.svg"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons"
import * as FooterStyle from "./styled-components/footerStyles"

const Footer = props => (
  <FooterStyle.Container darkBg={props.darkBg}>
    <FooterStyle.Nav>
      <ul>
        <FooterStyle.NavItem>About</FooterStyle.NavItem>
        <FooterStyle.NavItem>Skills</FooterStyle.NavItem>
        <FooterStyle.NavItem>Work</FooterStyle.NavItem>
      </ul>
      <FooterStyle.LogoContainer>
        <Logo />
      </FooterStyle.LogoContainer>
    </FooterStyle.Nav>
    <FooterStyle.SocialLinksContainer>
      <FooterStyle.SocialLinkIcons>
        <FooterStyle.SocialLink
          href="https://uk.linkedin.com/in/danbarber88"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterStyle.StyledIcon
            className="logos"
            icon={faLinkedin}
            size="3x"
          />
        </FooterStyle.SocialLink>
        <FooterStyle.SocialLink
          href="https://github.com/danbarber88"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterStyle.StyledIcon
            className="logos"
            icon={faGithubSquare}
            size="3x"
          />
        </FooterStyle.SocialLink>
        <p className="slash">/</p>
        <p>danbarber88</p>
      </FooterStyle.SocialLinkIcons>
      <FooterStyle.SocialLinkIcons>
        <FooterStyle.SocialLink href="mailto:d.j.barber88@gmail.com">
          <FooterStyle.StyledIcon
            className="logos"
            icon={faEnvelope}
            size="3x"
          />
          <p>d.j.barber88@gmail.com</p>
        </FooterStyle.SocialLink>
      </FooterStyle.SocialLinkIcons>
      <FooterStyle.SocialLinkIcons>
        <FooterStyle.SocialLink href="Resume.pdf">
          <FooterStyle.StyledIcon
            className="logos"
            icon={faFilePdf}
            size="3x"
          />
          <p>CV</p>
        </FooterStyle.SocialLink>
      </FooterStyle.SocialLinkIcons>
    </FooterStyle.SocialLinksContainer>
  </FooterStyle.Container>
)

export default Footer
