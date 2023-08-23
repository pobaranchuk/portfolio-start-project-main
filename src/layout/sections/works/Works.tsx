import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";

const worksItems = ["All", "Landing page", "React", "SPA"]
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section `
  min-height: 100vh;
  background-color: #eca8eb;
`