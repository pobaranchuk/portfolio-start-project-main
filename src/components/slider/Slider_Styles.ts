import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div `
  max-width: 500px;
  text-align: center;
`
const Text = styled.p `
  margin-top: 35px;
  margin-bottom: 15px;

`
const Name = styled.span `
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  margin: 15px 0 27px;
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    
    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}
