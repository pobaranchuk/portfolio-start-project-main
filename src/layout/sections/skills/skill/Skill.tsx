import React from 'react';
import exp from "constants";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"code"}/>
            <SkillTitle>html5</SkillTitle>
            <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</SkillText>

        </StyledSkill>
    );
};


export const StyledSkill = styled.div`
    `
export const  SkillTitle = styled.h3`
`

export const SkillText = styled.p `

`