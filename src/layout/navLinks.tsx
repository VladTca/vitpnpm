import {useTranslation} from "react-i18next";

export const useNavLinks = () => {
    const { t } = useTranslation();

    return [
        { to: "/slogan", title: t("home") },
        { to: "/skills", title: t("skills") },
        { to: "/works", title: t("project") },
        { to: "/testimony", title: t("testimony") },
        { to: "/contacts", title: t("contacts") },
    ];
};
