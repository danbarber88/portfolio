import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"

const Header = styled.h2`
  font-size: 48px;
  line-height: 55px;
  letter-spacing: 0.05em;

  @media ${device.tablet} {
    margin-bottom: 4rem;
  }
`

const AfterIntro = styled(Header)`
  margin: 100px 0;
  width: 600px;

  @media ${device.tablet} {
    width: 90%;
  }
`

const About = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 300px 0;

  p {
    z-index: 1;
    width: 50%;
  }

  @media ${device.tablet} {
    p {
      width: 100%;
    }
  }
`

const Wrapper = styled.div`
  width: 55%;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 90%;
  }
`

const DarkSection = styled.div`
  background: linear-gradient(179.93deg, #2d2f45 10.77%, #1c1d2d 91.61%);
  height: 1000px;
  width: 100%;
`

const IndexPage = props => (
  <Layout>
    <SEO />

    <Wrapper>
      <Intro />
      <AfterIntro>
        I<span className="orange">'</span>ve spent the last two years dedicated
        to learning as much as I can about web dev
        <span className="orange">.</span>
      </AfterIntro>
      <About>
        <Header>About Me</Header>
        <p>
          With over 12 years in the fitted kitchen industry under my belt I’m
          looking to move on to something new. Going down the self-taught route
          has been tougher than I expected it to be, but once I broke past some
          of the initial complexities and the bigger picture started to “click”,
          I found myself enjoying my development time. At the very least I now
          find myself with a fulfilling hobby which I’d relish any opportunity
          to turn into a career. Please look around my portfolio and don’t
          hesitate to get in touch.
        </p>
      </About>
    </Wrapper>
    <DarkSection>
      <Wrapper></Wrapper>
    </DarkSection>
  </Layout>
)

export default IndexPage
