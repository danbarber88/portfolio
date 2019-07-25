import React from "react"
import styled from "styled-components"
import {
  Container,
  TextWrapper,
  Name,
  Text,
  Line,
} from "styled-components/introStyles"

const Intro = () => (
  <Container>
    <TextWrapper>
      <Name>
        DAN
        <Line height="4px" width="81px" margin="17px 0 17px 5px" />
      </Name>
      <Name>BARBER</Name>
      <Text>
        I’m an aspiring web developer, I’m self motivated and self taught with a
        focus towards front end technologies.
        <Line height="2px" width="60px" margin="9px 0 9px 16px" />
      </Text>
    </TextWrapper>
  </Container>
)

export default Intro
