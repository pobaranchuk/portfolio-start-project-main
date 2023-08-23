import React from 'react';
import styled from "styled-components";
import {resolveSrv} from "dns";

type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work = (props : WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={""}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #90c59c;
`
const Image = styled.img`
    
`
const Link = styled.a`
    
`
const Title = styled.h3`
    
    `
const Text = styled.p`
    
    `