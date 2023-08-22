import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string
    title: string
    description: string


}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};


export const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px;
`
export const  SkillTitle = styled.h3`
`

export const SkillText = styled.p `

`