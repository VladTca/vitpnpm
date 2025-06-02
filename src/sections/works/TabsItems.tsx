import type {TabStatusType} from "./tabMenu/TabMenu.tsx";
import {useTranslation} from "react-i18next";


const useTabItems = () => {
  const {t} = useTranslation();
const tabsItems: Array<{
    status: TabStatusType;
    title: string;
}> = [
    {
        title: t("all"),
        status: "all",
    },
    {
        title: t('landing'),
        status: "landing",
    },
    {
        title: t('react'),
        status: "react",
    },
    {
        title: t('spa'),
        status: "spa",
    },
];
  return tabsItems;
}

export default useTabItems;