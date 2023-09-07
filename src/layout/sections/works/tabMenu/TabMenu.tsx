import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabsStatusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {// развёртываем обьект и говорим что в нём приходит
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {
                            props.changeFilterStatus(item.status)
                        }}>{item.title}</Link>
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