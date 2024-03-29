import React from "react"
import {
  Container,
  TextWrapper,
  Name,
  Text,
  Line,
} from "./styled-components/introStyles"

const Intro = () => (
  <Container>
    <TextWrapper>
      <Name>
        DAN
        <Line height="4px" width="81px" margin="17px 0 17px 5px" />
      </Name>
      <Name>BARBER</Name>
      <Text>
        Typescript, ReactJS developer at Wren Kitchens, I’m self motivated and self taught with a
        focus towards front end technologies.
        <Line height="2px" width="50px" margin="9px 0 9px 16px" />
      </Text>
    </TextWrapper>
  </Container>
)

export default Intro
