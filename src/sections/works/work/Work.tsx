import React from "react";
import { Link } from "../../../components/Link";
import { Button } from "../../../components/Button";
import { S } from "../Works_Styles";
import { useTranslation } from "react-i18next";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  dhref?: string;
  chref?: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  const { t } = useTranslation();
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="" />

        <Button>
          <Link active href={props.dhref} target="_blank">
            {t("viewProject")}
          </Link>
        </Button>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active href={props.dhref} target="_blank">
          {t("demo")}
        </Link>
        <Link href={props.chref} target="_blank">
          {t("code")}
        </Link>
      </S.Description>
    </S.Work>
  );
};
