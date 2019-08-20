import styled from "styled-components"
import { device } from "../../utils/device"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 133px);
  margin-top: 133px;
  width: 100%;

  @media ${device.tablet} {
    height: calc(100vh - 108px);
    margin-top: 108px;
  }

  @media (max-height: 500px) {
    height: 780px;
  }
`

export const TextWrapper = styled.div`
  font-family: Oswald;
  width: 205px;
`

export const Name = styled.p`
  font-size: 48px;
  letter-spacing: 0.2em;
  margin: 0;
  line-height: 60px;
`

export const Text = styled.p`
  margin-top: 1.45rem;
  font-size: 28px;
  line-height: 35px;
  text-align: justify;
  font-weight: 300;
`

export const Line = styled.span`
  display: inline-block;
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: #9c5f10;
  margin: ${props =>
    props.margin} !important; /* override typography.js ( p *:last-child { marging-bottom: 0 } ) */
`
