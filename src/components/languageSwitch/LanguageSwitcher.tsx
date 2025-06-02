import React from "react";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "cz", label: "Čeština" },
  { code: "ro", label: "Română" },
  { code: "ua", label: "Українська" },
  { code: "ru", label: "Русский" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n: i18nextInstance } = useTranslation();

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <StyledSelect
        value={i18nextInstance.language}
        onChange={handleChangeLanguage}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

const StyledSelect = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.accent};
  font-size: 14px;
  color: #7572D5;

  @media ${theme.media.tablet} {
    margin-right: 80px;
  }

  @media ${theme.media.mobile} {
    margin-right: 80px;
  }
`;

export default LanguageSwitcher;
