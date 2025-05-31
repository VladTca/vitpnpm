import React from "react";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

type SocialItem = {
  id: number;
  iconID: string;
  href: string;
};

const SocialItemsData: SocialItem[] = [
  {
    id: 1,
    iconID: "linkedin",
    href: "https://www.linkedin.com/in/vladimir-t-88b6522a6",
  },
  {
    id: 1,
    iconID: "whatsapp",
    href: "https://wa.me/420702909078?text=Hallo!",
  },
  {
    id: 1,
    iconID: "telegram",
    href: "https://t.me/WoldWeld",
  },
  {
    id: 1,
    iconID: "email",
    href: "mailto:vladimir@gmail.com",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>💫Vladimir Tcaciuc💫</S.Name>
        <S.SocialList>
          {SocialItemsData.map((s) => {
            return (
              <S.SocialItem key={s.id}>
                <S.SocialLink
                  href={s.href}
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  <Icon
                    height={"21"}
                    width={"21"}
                    viewBox={"0 0 21 21"}
                    iconId={s.iconID}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>
          © 2025 Vladimir Tcaciuc, All Rights Reserved.
        </S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
