import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout, { Wrapper, Header, LargeText } from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import Footer from "../components/footer"

const About = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
  margin-top: 250px;

  .text-container {
    z-index: 1;
    width: 50%;
  }

  @media ${device.tablet} {
    .text-container {
      width: 100%;
    }
  }
`

const DarkSection = styled.div`
  position: relative;
  margin-top: 200px;
  background: linear-gradient(179.93deg, #2d2f45 10.77%, #1c1d2d 91.61%);
  width: 100%;
  box-sizing: border-box;
`

const StyledLink = styled(Link)`
  color: #fafafa;
  font-family: Oswald;
  font-size: 48px;
  line-height: 55px;
  letter-spacing: 0.05em;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    text-decoration-color: #9c5f10;
  }

  :visited {
    color: #fafafa;
  }

  br {
    display: none;
  }

  @media ${device.mobileL} {
    br {
      display: block;
    }
  }
`

const IndexPage = props => (
  <Layout>
    <SEO />

    <Wrapper>
      <Intro />
      <LargeText>
        I<span className="orange">'</span>ve spent the last few years dedicated
        to learning as much as I can about web dev
        <span className="orange">.</span>
      </LargeText>
      <About id="about">
        <Header>About Me</Header>
        <div className="text-container">
          <p>
            I'm currently working remotely for Wren Kitchens as a Typescript / Javascript developer.
            Over the last few years working at Wren I've had a lot of opportunity to continue the
            learning journey and work with some great people.
          </p>
          <p>
            Please look around my portfolio and if you like what you see you
            can contact me by email at:{" "}
            <a href="mailto:d.j.barber88@gmail.com">d.j.barber88@gmail.com</a>{" "}
            or find other forms of contact in my{" "}
            <a href="/danbarbercv.pdf" target="_blank">
              CV
            </a>
            . I’m looking forward to hearing from you.
          </p>
        </div>
      </About>
    </Wrapper>
    <DarkSection>
      <Wrapper>
        <Skills />
        <StyledLink to="/work/">
          Explore <br />
          my work >
        </StyledLink>
        <Footer darkBg />
      </Wrapper>
    </DarkSection>
  </Layout>
)


export default IndexPage
