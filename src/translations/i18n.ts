import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Hi There!",
            home: "Home",
            skills: "Skills",
            project: "Projects",
            testimony: "Testimony",
            contacts: "Contacts",
            iam: "I am",
            spec1: "Full Stack Developer.",
            spec2: "Full Stack Engineer.",
            spec3: "Software Developer.",
            spec4: "JAVA Developer.",
            spec5: "A Backend Developer.",
            spec6: "Web Developer.",
            spec7: "Frontend Developer.",
            spec8: "React Developer.",
            slogan: "I Am Currently Available for Employment",
            redirect: "Redirecting in",
            seconds: "seconds...",
            hire: "Hire me",
            myskills:"My Skills",
            htmlDescription:"Markup language for creating web pages and applications, providing the structure and content of websites.",
            cssDescription:"Styling language used to control the presentation and layout of HTML documents, making websites visually appealing.",
            jsDescription:"Programming language that enables interactive web pages and is an essential part of web applications.",
            typeScriptDescription:"Superset of JavaScript that adds static typing, enhancing code quality and developer productivity.",
            reactDescription:"JavaScript library for building user interfaces, particularly single-page applications with reusable components.",
            reduxDescription:"State management library for JavaScript applications, commonly used with React for predictable state updates.",
            tailwindDescription:"Utility-first CSS framework for rapidly building custom user interfaces with pre-defined classes.",
            bootstrapDescription:"Popular CSS framework for developing responsive and mobile-first websites with pre-designed components.",
            javaDescription:"Object-oriented programming language used for building enterprise-level applications and Android development.",
            springDescription:"Java framework that provides comprehensive infrastructure support for developing robust Java applications.",
            postgresDescription:"Powerful, open-source object-relational database system with strong reputation for reliability and data integrity.",
            mongoDescription:"NoSQL database that uses JSON-like documents with optional schemas, offering high performance and scalability.",
            styledComponentsDescription:"Library for React that allows writing CSS in JavaScript, enabling component-scoped styling.",
            figmaDescription:"Cloud-based design tool for collaborative interface design, prototyping, and design systems.",
            all:"ALL",
            landing:"Landing page",
            react:"React",
            spa:"SPA",
            myprojects:"My Projects",
            viewProject:"View Project",
            demo:"Demo",
            code:"Code",
            counter:"Counter",
            counterDescription:"Counter with advanced option.",
            userIvan:"ivan ivanow",
            userPetr:"petr petrov",
            userIgor:"igor igorev",

        }
    },
    ro:{
        translation: {
            welcome:"Buna ziua!"
        }
    },
    de: {
        translation: {
            welcome: "Hallo!",

        }
    },
    cz: {
        translation: {
            welcome: "Ahoj!",

        }
    },
    ua: {
        translation: {
            welcome: "Привіт!",

        }
    },
    ru: {
        translation: {
            welcome: "Приветствую!",

        }
    }
    
};

i18n
    .use(initReactI18next) // подключение React i18next
    .init({
        resources,
        lng: 'en', // язык по умолчанию
        fallbackLng: 'en', // запасной язык, если перевод для текущего языка отсутствует
        interpolation: {
            escapeValue: false // отключает экранирование, для работы с JSX
        }
    });

export default i18n;