import React from "react";
import {S} from "../HeaderMenu_Styles";
import {navLinks} from "../../../navLinks.ts";


export const Menu: React.FC = () => {
  return (
    <ul>
      {navLinks.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLink
              to={item.to}
            >
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
