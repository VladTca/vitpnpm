import React from "react";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

const languages = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "cz", label: "Čeština" },
    {code:"ro", label: "Română"},
    { code: "ua", label: "Українська" },
    { code: "ru", label: "Русский" }
];

const LanguageSwitcher: React.FC = () => {
    const { i18n: i18nextInstance } = useTranslation();

    const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <select
                value={i18nextInstance.language}
                onChange={handleChangeLanguage}
                style={{
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
            >
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;