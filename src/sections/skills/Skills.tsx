import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../components/Container";
import {S} from "./Skills_Styles";
import {Fade} from "react-awesome-reveal";
import {skillData} from "./SkillData.ts";
import {useTranslation} from "react-i18next";


export const Skills = () => {
  const { t } = useTranslation();
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>{t('myprojects')}</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Fade cascade={true} damping={0.1} triggerOnce={true} fraction={0.1}
          >
            {skillData.map((s, index) => {
              return (
                <Skill
                  key={index}
                  iconId={s.iconId}
                  title={s.title}
                  description={s.description}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
