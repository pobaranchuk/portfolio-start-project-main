import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name> I am Viacheslav Pobaranchuk</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src ={photo} alt = ""/>
            </FlexWrapper>

        </StyledMain>
    );
};
const StyledMain = styled.section `
  min-height: 100vh;
  background-color: #d8eff3;
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1 `
    
`

const Name = styled.h2 `
    
`