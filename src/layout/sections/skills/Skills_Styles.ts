import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Skill = styled.div`
  width: 330px;
  flex-grow: 1; // дабы при сужении когда будут два скила не было между ними большого пустого пространства
  padding: 45px 20px 47px;
  
  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`
export const  SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
export const SkillText = styled.p `
  text-align: center;
`
export const IconWrapper = styled.div`
  position: relative;
  
  &::before{
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.10);

    position: absolute;
    left: 50%;
    top:50%;
    transform-origin: top left;
  }
`

const Skills = styled.section`
`

export const S = {
    Skill,
    SkillTitle,
    SkillText,
    IconWrapper,
    Skills
}