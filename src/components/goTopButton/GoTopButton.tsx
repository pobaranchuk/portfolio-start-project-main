import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopButton = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    return (
        // условный рендеринг чтобы не было родителя, дабы написать логику
        <>
            {showButton && (
                <StyledGoTopButton onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowGoTop"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
                </StyledGoTopButton>
            )}
        </>
    );
};


const StyledGoTopButton = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 30px;
  bottom: 30px;
`