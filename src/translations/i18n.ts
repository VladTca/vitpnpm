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
            htmldescription:"Markup language for creating web pages and applications, providing the structure and content of websites.",
            cssdescription:"Styling language used to control the presentation and layout of HTML documents, making websites visually appealing.",
            jsdescription:"Programming language that enables interactive web pages and is an essential part of web applications.",
            typeScriptdescription:"Superset of JavaScript that adds static typing, enhancing code quality and developer productivity.",
            reactdescription:"JavaScript library for building user interfaces, particularly single-page applications with reusable components.",
            reduxdescription:"State management library for JavaScript applications, commonly used with React for predictable state updates.",
            tailwinddescription:"Utility-first CSS framework for rapidly building custom user interfaces with pre-defined classes.",
            botstrapdescription:"Popular CSS framework for developing responsive and mobile-first websites with pre-designed components.",
            javadescription:"Object-oriented programming language used for building enterprise-level applications and Android development.",
            springdescription:"Java framework that provides comprehensive infrastructure support for developing robust Java applications.",
            postgresdescription:"Powerful, open-source object-relational database system with strong reputation for reliability and data integrity.",
            mongodescription:"NoSQL database that uses JSON-like documents with optional schemas, offering high performance and scalability.",
            styledComponentsdescription:"Library for React that allows writing CSS in JavaScript, enabling component-scoped styling.",
            figmadescription:"Cloud-based design tool for collaborative interface design, prototyping, and design systems.",
            all:"all",
            landing:"landing page",
            react:"react",
            spa:"spa",
            myprojects:"My Projects",
        }
    },
    de: {
        translation: {
            welcome: "Hallo!",
            home: "Startseite",
            skills: "Fähigkeiten",
            project: "Projekte",
            testimony: "Referenzen",
            contacts: "Kontakte",
            iam: "Ich bin",
            spec1: "Full Stack Entwickler.",
            spec2: "Full Stack Ingenieur.",
            spec3: "Software Entwickler.",
            spec4: "JAVA Entwickler.",
            spec5: "Backend Entwickler.",
            spec6: "Web Entwickler.",
            spec7: "Frontend Entwickler.",
            spec8: "React Entwickler.",
            slogan: "Ich bin derzeit verfügbar für Beschäftigung",
            redirect: "Weiterleitung in",
            seconds: "Sekunden...",
            hire: "Kontaktieren Sie mich",
        }
    },
    cz: {
        translation: {
            welcome: "Ahoj!",
            home: "Domů",
            skills: "Dovednosti",
            project: "Projekty",
            testimony: "Reference",
            contacts: "Kontakty",
            iam: "Jsem",
            spec1: "Full Stack vývojář.",
            spec2: "Full Stack inženýr.",
            spec3: "Softwarový vývojář.",
            spec4: "JAVA vývojář.",
            spec5: "Backend vývojář.",
            spec6: "Web vývojář.",
            spec7: "Frontend vývojář.",
            spec8: "React vývojář.",
            slogan: "Aktuálně jsem k dispozici pro zaměstnání",
            redirect: "Přesměrování za",
            seconds: "sekund...",
            hire: "Najmout mě",
        }
    },
    ua: {
        translation: {
            welcome: "Привіт!",
            home: "Головна",
            skills: "Навички",
            project: "Проекти",
            testimony: "Відгуки",
            contacts: "Контакти",
            iam: "Я",
            spec1: "Full Stack Розробник.",
            spec2: "Full Stack Інженер.",
            spec3: "Розробник ПЗ.",
            spec4: "JAVA Розробник.",
            spec5: "Backend Розробник.",
            spec6: "Web Розробник.",
            spec7: "Frontend Розробник.",
            spec8: "React Розробник.",
            slogan: "В даний час я доступний для працевлаштування",
            redirect: "Перенаправлення через",
            seconds: "секунд...",
            hire: "Найняти мене",
        }
    },
    ru: {
        translation: {
            welcome: "Приветствую!",
            home: "Главная",
            skills: "Навыки",
            project: "Проекты",
            testimony: "Отзывы",
            contacts: "Контакты",
            iam: "Я",
            spec1: "Full Stack Разработчик.",
            spec2: "Full Stack Инженер.",
            spec3: "Разработчик ПО.",
            spec4: "JAVA Разработчик.",
            spec5: "Backend Разработчик.",
            spec6: "Web Разработчик.",
            spec7: "Frontend Разработчик.",
            spec8: "React Разработчик.",
            slogan: "В настоящее время я доступен для работы",
            redirect: "Перенаправление через",
            seconds: "секунд...",
            hire: "Нанять меня",
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