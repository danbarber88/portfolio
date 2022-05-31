import styled from "styled-components"
import { device } from "../../utils/device"
import { LargeText } from "../layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const BrowseText = styled(LargeText)`
  margin-top: 200px;
`

export const WorkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 200px;

  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 100px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.square ? "500px" : "275px")};
  height: ${props => (props.square ? "500px" : "auto")};
  background: ${props => props.background};
  
  svg {
    max-width: 80%;
  }

  @media ${device.laptop} {
    width: ${props => (props.square ? "350px" : "275px")};
    height: ${props => (props.square ? "350px" : "auto")};

    .logo-in-square {
      height: 80px;
    }
  }

  @media ${device.tablet} {
    width: 100%;
    height: 250px;
  }

  @media ${device.mobileL} {
    width: 100%;
    height: 175px;

    .logo-in-square {
      height: 70px;
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 315px;
  width: 315px;
  padding: ${props => props.padding};

  p {
    font-size: 16px;
    line-height: 22px;
  }

  @media ${device.tablet} {
    order: 1;
    padding: 25px 0 0 0;
    width: 100%;
  }
`

export const ProjectName = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
`

export const Technology = styled.h3`
  font-size: 24px;
  margin-bottom: 1rem;
  opacity: 0.75;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 40px;
  background: linear-gradient(105.82deg, #4a4c66 0%, #2d2f45 100%);
  border-radius: 3px;
  color: #fafafa;
  text-decoration: none;
  font-size: 16px;

  :hover {
    background: #2d2f45;
  }
`

export const ButtonIcon = styled(FontAwesomeIcon)`
  margin: 0 5px 3px 0;
`
