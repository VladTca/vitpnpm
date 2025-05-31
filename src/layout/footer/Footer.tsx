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
    href: import.meta.env.VITE_LINKEDIN || "#",
  },
  {
    id: 2,
    iconID: "whatsapp",
    href: import.meta.env.VITE_WHATSAPP || "#",
  },
  {
    id: 3,
    iconID: "telegram",
    href: import.meta.env.VITE_TELEGRAM || "#",
  },
  {
    id: 4,
    iconID: "email",
    href: import.meta.env.VITE_EMAIL || "#",
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
