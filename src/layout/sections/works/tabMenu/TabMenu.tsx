import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  //margin: 0 auto 40px; - убираем отсюда ибо много пространства для выравнивания
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 353px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px; // margin: 0 auto - это стандартный способ выровнять элемент по центру
  }
`
const ListItem = styled.li`

`