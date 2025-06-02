import {useTranslation} from "react-i18next";

export const useSkillData = () => {
  const { t } = useTranslation();
  return [
    {
      iconId: "html",
      title: "HTML",
      description: t("htmlDescription"),
    },
    {
      iconId: "css3",
      title: "CSS",
      description: t("cssDescription"),
    },
    {
      iconId: "js",
      title: "JavaScript",
      description: t("jsDescription"),
    },
    {
      iconId: "typeScript",
      title: "TypeScript",
      description: t("tsDescription"),
    },
    {
      iconId: "react",
      title: "React",
      description: t("reactDescription"),
    },
    {
      iconId: "redux",
      title: "Redux",
      description: t("reduxDescription"),
    },
    {
      iconId: "tailwind",
      title: "Tailwind",
      description: t("tailwindDescription"),
    },
    {
      iconId: "bootstrap",
      title: "Bootstrap",
      description: t("bootstrapDescription"),
    },
    {
      iconId: "java",
      title: "JAVA",
      description: t("javaDescription"),
    },
    {
      iconId: "spring",
      title: "Spring",
      description: t("springDescription"),
    },
    {
      iconId: "postgres",
      title: "PostgresSQL",
      description: t("postgresDescription"),
    },
    {
      iconId: "mongo",
      title: "MongoDB",
      description: t("mongoDescription"),
    },
    {
      iconId: "styledComponentsIcon",
      title: "Styled Components",
      description: t("styledComponentsDescription"),
    },
    {
      iconId: "figma",
      title: "Figma",
      description: t("figmaDescription"),
    },
    {
      iconId: "webstorm",
      title: "Webstorm",
      description: t("webstormDescription"),
    },
    {
      iconId: "vscode",
      title: "VSCode",
      description: t("vscodeDescription"),
    },
    {
      iconId: "git",
      title: "GIT",
      description: t("gitDescription"),
    },
    {
      iconId: "github",
      title: "GitHub",
      description: t("githubDescription"),
    },
  ];
};
export default useSkillData;
