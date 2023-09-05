import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"


const socialItemData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedin"
    },
]
export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Viacheslav</S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return (
                            <S.SocialItem>
                                <S.SocialLink key = {index}>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Viacheslav Pobaranchuk, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};