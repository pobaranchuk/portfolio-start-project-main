import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <StyledField placeholder={"name"}/>
                    <StyledField placeholder={"subject"}/>
                    <StyledField placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

`
const StyledForm = styled.form`
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
const StyledField = styled.input`
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
