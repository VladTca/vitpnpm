import Typewriter from "typewriter-effect";
import photo from "../../assets/images/mf1.jpg";
import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import { Container } from "../../components/Container.ts";
import { S } from "./Main_Styles";
import Tilt from "react-parallax-tilt";
import { Particl } from "../../components/particl/Particl.tsx";
import React from "react";
import { useTranslation } from "react-i18next";

export const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Main id={"home"}>
      <Container>
        <Particl />
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>{t("welcome")}</S.SmallText>
            <S.Name>
              {t("iam")} <span>Vladimir Tcaciuc</span>
            </S.Name>
            <S.MainTitle>
              <p>Full Stack Developer.</p>
              <Typewriter
                options={{
                  strings: [
                    t("spec1"),
                    t("spec2"),
                    t("spec3"),
                    t("spec4"),
                    t("spec5"),
                    t("spec6"),
                    t("spec7"),
                    t("spec8"),
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </S.MainTitle>
          </div>

          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
