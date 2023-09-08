import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px; // так как justify={"space-between"} то отступы там большие и не заданны, и когда будут сжимать окно элементы будут прилипать друг к другу, для этого гэп резервирует те 30px для зазора в случае сжатия
  }
`
const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1; // будет 330 но этот параметр заполнит пустоту до максимума ибо нету ограничения max-width

  ${Link} {
    padding: 10px 0;

    & + ${Link} { // каждый линк ккоторый идёт после линк
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    // breakpoint
    max-width: 540px; // макс ширина ограничивается только на десктопах, ато что ниже то ширина ворка будет заливать всё пространство без ограничения
  }
`
const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -60%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Description = styled.div`
  padding: 25px 20px;
`
const Text = styled.p`
  margin: 14px 0 14px;
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Title,
    Description,
    Text
}