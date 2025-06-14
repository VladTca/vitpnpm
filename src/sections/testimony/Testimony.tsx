import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/icon/Icon";
import { Slider } from "../../components/slider/Slider";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "../skills/Skills_Styles";
import { useTranslation } from "react-i18next";

export const Testimony: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <SectionTitle>{t("testimony")}</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quote"} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 40vh;
  height: 100%;
  background-color: #aeb9ff;
  position: relative;

  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`;
