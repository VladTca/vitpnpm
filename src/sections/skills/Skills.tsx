import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../components/Container";
import {S} from "./Skills_Styles";
import {Fade} from "react-awesome-reveal";


//TODO: уменьшить задержку, выровнять картинки, плавнее скролл

const skillData = [
  {
    iconId: "html",
    title: "HTML",
    description:
      "Markup language for creating web pages and applications, providing the structure and content of websites.",
  },
  {
    iconId: "css3",
    title: "CSS",
    description:
      "Styling language used to control the presentation and layout of HTML documents, making websites visually appealing.",
  },
  {
    iconId: "js",
    title: "JavaScript",
    description:
      "Programming language that enables interactive web pages and is an essential part of web applications.",
  },
  {
    iconId: "typeScript",
    title: "TypeScript",
    description:
      "Superset of JavaScript that adds static typing, enhancing code quality and developer productivity.",
  },
  {
    iconId: "react",
    title: "React",
    description:
      "JavaScript library for building user interfaces, particularly single-page applications with reusable components.",
  },
  {
    iconId: "redux",
    title: "Redux",
    description:
      "State management library for JavaScript applications, commonly used with React for predictable state updates.",
  },
  {
    iconId: "tailwind",
    title: "Tailwind",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces with pre-defined classes.",
  },
  {
    iconId: "bootstrap",
    title: "Bootstrap",
    description:
      "Popular CSS framework for developing responsive and mobile-first websites with pre-designed components.",
  },
  {
    iconId: "java",
    title: "JAVA",
    description:
      "Object-oriented programming language used for building enterprise-level applications and Android development.",
  },
  {
    iconId: "spring",
    title: "Spring",
    description:
      "Java framework that provides comprehensive infrastructure support for developing robust Java applications.",
  },
{
    iconId: "postgres",
    title: "PostgresSQL",
    description:
      "Powerful, open-source object-relational database system with strong reputation for reliability and data integrity.",
  },
{
    iconId: "mongo",
    title: "MongoDB",
    description:
      "NoSQL database that uses JSON-like documents with optional schemas, offering high performance and scalability.",
  },

  {
    iconId: "styledComponentsIcon",
    title: "Styled Components",
    description:
      "Library for React that allows writing CSS in JavaScript, enabling component-scoped styling.",
  },
  {
    iconId: "figma",
    title: "Figma",
    description:
      "Cloud-based design tool for collaborative interface design, prototyping, and design systems.",
  },
  {
    iconId: "webstorm",
    title: "Webstorm",
    description:
      "Integrated development environment for JavaScript and related technologies, with intelligent coding assistance.",
  }, {
    iconId: "vscode",
    title: "VSCode",
    description:
      "Lightweight but powerful source code editor with extensive ecosystem of extensions for various languages.",
  }, {
    iconId: "git",
    title: "GIT",
    description:
      "Distributed version control system for tracking changes in source code during software development.",
  }, {
    iconId: "github",
    title: "GitHub",
    description:
      "Web-based platform for version control and collaboration that enables developers to work together on projects.",
  },

];

export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Fade cascade={true} damping={0.1}>
            {skillData.map((s, index) => {
              return (
                <Skill
                  key={index}
                  iconId={s.iconId}
                  title={s.title}
                  description={s.description}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
