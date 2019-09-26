import React from "react"
import styled from "styled-components"
import { Header } from "./layout"
import { device } from "../utils/device"

import HTML from "../images/devicons/html5.svg"
import CSS from "../images/devicons/css3.svg"
import JS from "../images/devicons/javascript.svg"
import GraphQL from "../images/devicons/graphql.svg"
import ReactIcon from "../images/devicons/react-icon.svg"
import Gatsby from "../images/devicons/gatsby.svg"
import Git from "../images/devicons/git.svg"
import Bootstrap from "../images/devicons/bootstrap.svg"
import Node from "../images/devicons/nodejs.svg"
import Express from "../images/devicons/express.svg"
import Mongodb from "../images/devicons/mongodb.svg"
import Jquery from "../images/devicons/jquery.svg"

const Container = styled.section`
  color: #fafafa;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
  margin: 100px 0 200px 0;
`

const IconContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.tablet} {
    width: 100%;
  }
`

const Icon = styled.div`
  display: flex;
  width: 142px;
  align-items: center;
  margin-bottom: 20px;

  svg {
    color: #9c5f10;
  }

  p {
    font-family: Oswald;
    font-weight: 300;
    font-size: 25px;
    margin: 0 0 0 10px;
    letter-spacing: 1px;
  }
`

const Skills = () => (
  <Container id="skills">
    <Header>My Skills</Header>
    <IconContainer>
      <Icon>
        <HTML />
        <p>HTML</p>
      </Icon>
      <Icon>
        <CSS />
        <p>CSS</p>
      </Icon>
      <Icon>
        <JS />
        <p>JavaScript</p>
      </Icon>
      <Icon>
        <GraphQL />
        <p>GraphQL</p>
      </Icon>
      <Icon>
        <ReactIcon />
        <p>React</p>
      </Icon>
      <Icon>
        <Gatsby />
        <p>Gatsby</p>
      </Icon>
      <Icon>
        <Git />
        <p>git</p>
      </Icon>
      <Icon>
        <Bootstrap />
        <p>Bootstrap</p>
      </Icon>
      <Icon>
        <Node />
        <p>Node.js</p>
      </Icon>
      <Icon>
        <Express />
        <p>express.js</p>
      </Icon>
      <Icon>
        <Mongodb />
        <p>mongodb</p>
      </Icon>
      <Icon>
        <Jquery />
        <p>jQuery</p>
      </Icon>
    </IconContainer>
  </Container>
)

export default Skills
