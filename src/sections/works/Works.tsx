import React from "react";
import {SectionTitle} from "../../components/SectionTitle";
import {TabMenu, type TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Work} from "./work/Work";
import {Container} from "../../components/Container";
import {S} from "./Works_Styles";
import {AnimatePresence, motion} from "framer-motion";
import useTabItems from "./TabsItems.tsx";
import {useTranslation} from "react-i18next";
import useWorkData from "./WorksData.tsx";

export const Works: React.FC = () => {
  const { t } = useTranslation();
  const worksData = useWorkData();
  const tabsItems = useTabItems();
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
  if (currentFilterStatus === "design") {
    filteredWorks = worksData.filter((w) => w.type === "design");
  }

  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>{t("myprojects")}</SectionTitle>

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
                  <Work
                    key={w.id}
                    title={w.title}
                    text={w.text}
                    src={w.src}
                    dhref={w.dhref}
                    chref={w.chref}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
