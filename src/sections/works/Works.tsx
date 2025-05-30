import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { TabMenu, type TabStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/social-network.png";
import timerImg from "../../../assets/images/timer.jpg";
import { Container } from "../../components/Container";
import { S } from "./Works_Styles";
import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{
  status: TabStatusType;
  title: string;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "Spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    src: socialImg,
    type: "spa",
    id: 1,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timerImg,
    type: "react",
    id: 2,
  },
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    src: socialImg,
    type: "spa",
    id: 3,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timerImg,
    type: "react",
    id: 4,
  },
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    src: socialImg,
    type: "spa",
    id: 5,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timerImg,
    type: "react",
    id: 6,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = React.useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "lending") {
    filteredWorks = worksData.filter((w) => w.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((w) => w.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((w) => w.type === "spa");
  }

  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>My Works</SectionTitle>

        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          align={"flex-start"}
          justify={"space-between"}
          wrap={"wrap"}
        >
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div
                  style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                  layout={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work key={w.id} title={w.title} text={w.text} src={w.src} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
