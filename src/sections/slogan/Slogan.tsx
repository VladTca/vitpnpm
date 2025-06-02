import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const Slogan: React.FC = () => {
  const [count, setCount] = useState(5);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledSlogan id="slogan">
      <CenteredContainer>
        <FlexWrapper direction="column" align="center" justify="center">
          <SectionTitle>{t("slogan")}</SectionTitle>
          <p>
            {t("redirect")} {count} {t("seconds")}
          </p>
          <Link to="/contacts">
            <Button>{t("hire")}</Button>
          </Link>
        </FlexWrapper>
      </CenteredContainer>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
