import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from ".//../../../assets/images/proj-1.webp"
import timerImg from ".//../../../assets/images/proj-2.webp"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";
import {AnimatePresence, motion} from "framer-motion";


const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    }
]

const worksData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ",
        src: socialImg,
        type: "spa",
        id: 1
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore mgana alicua Ut enim",
        src: timerImg,
        type: "react",
        id: 2
    }
]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                //пропсы для моушина
                                <motion.div style={{width: "330px", flexGrow: 1, maxWidth: "540px"}}
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          key={w.id}
                                          text={w.text}
                                          src={w.src}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
