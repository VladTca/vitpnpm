import type {TabStatusType} from "./tabMenu/TabMenu.tsx";

export const tabsItems: Array<{
    status: TabStatusType;
    title: string;
}> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing Page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "Spa",
        status: "spa",
    },
];