import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contact = styled.section`
  position: relative;
`
const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  textarea { //обращение к тегу текстареа в филде, то есть к третьему
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%; //ширина поля ввода равна ширине формы
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  color: ${theme.colors.font};
  font-family: Poppins, sans-serif;
  font-size: 12px;
  letter-spacing: 0.6px;
  
  &::placeholder {
    color: ${theme.colors.placeHolderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`

export const S = {
    Contact,
    Form,
    Field
}