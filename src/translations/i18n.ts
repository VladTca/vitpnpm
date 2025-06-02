import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


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
          myskills: "My Skills",
          htmlDescription:
            "Markup language for creating web pages and applications, providing the structure and content of websites.",
          cssDescription:
            "Styling language used to control the presentation and layout of HTML documents, making websites visually appealing.",
          jsDescription:
            "Programming language that enables interactive web pages and is an essential part of web applications.",
          typeScriptDescription:
            "Superset of JavaScript that adds static typing, enhancing code quality and developer productivity.",
          reactDescription:
            "JavaScript library for building user interfaces, particularly single-page applications with reusable components.",
          reduxDescription:
            "State management library for JavaScript applications, commonly used with React for predictable state updates.",
          tailwindDescription:
            "Utility-first CSS framework for rapidly building custom user interfaces with pre-defined classes.",
          bootstrapDescription:
            "Popular CSS framework for developing responsive and mobile-first websites with pre-designed components.",
          javaDescription:
            "Object-oriented programming language used for building enterprise-level applications and Android development.",
          springDescription:
            "Java framework that provides comprehensive infrastructure support for developing robust Java applications.",
          postgresDescription:
            "Powerful, open-source object-relational database system with strong reputation for reliability and data integrity.",
          mongoDescription:
            "NoSQL database that uses JSON-like documents with optional schemas, offering high performance and scalability.",
          styledComponentsDescription:
            "Library for React that allows writing CSS in JavaScript, enabling component-scoped styling.",
          figmaDescription:
            "Cloud-based design tool for collaborative interface design, prototyping, and design systems.",
          all: "ALL",
          landing: "Landing page",
          react: "React",
          spa: "SPA",
          myprojects: "My Projects",
          viewProject: "View Project",
          demo: "Demo",
          code: "Code",
          counter: "Counter",
          counterDescription: "Counter with advanced option.",
          userIvan: "ivan ivanow",
          userPetr: "petr petrov",
          userIgor: "igor igorev",
          contactDescription:
            " You can contact me by simply filling out the form and by pressing the\n" +
            "          Send button - and I will receive your message to my email.",
          subject: "Subject",
          email: "Email",
          name: "Name",
          message: "Message",
          sendMessage: "Send message",
          nameRequired: "Name is required",
          invalidEmail: "Invalid email address",
          emailRequired: "Email is required",
          subjectRequired: "Subject is required",
          messageRequired: "Message is required",
        },
      },
      ro: {
        translation: {
          welcome: "Buna ziua!",
          home: "Acasă",
          skills: "Abilități",
          project: "Proiecte",
          testimony: "Testimoniale",
          contacts: "Contacte",
          iam: "Eu sunt",
          spec1: "Dezvoltator Full Stack.",
          spec2: "Inginer Full Stack.",
          spec3: "Dezvoltator Software.",
          spec4: "Dezvoltator JAVA.",
          spec5: "Dezvoltator Backend.",
          spec6: "Dezvoltator Web.",
          spec7: "Dezvoltator Frontend.",
          spec8: "Dezvoltator React.",
          slogan: "Sunt disponibil pentru angajare în prezent",
          redirect: "Redirecționare în",
          seconds: "secunde...",
          hire: "Angajează-mă",
          myskills: "Abilitățile mele",
          htmlDescription:
            "Limbaj de marcare pentru crearea paginilor și aplicațiilor web, oferind structura și conținutul site-urilor web.",
          cssDescription:
            "Limbaj de stilizare utilizat pentru a controla prezentarea și aspectul documentelor HTML, făcând site-urile web atractive vizual.",
          jsDescription:
            "Limbaj de programare care permite pagini web interactive și este o parte esențială a aplicațiilor web.",
          typeScriptDescription:
            "Superset al JavaScript care adaugă tipare statică, îmbunătățind calitatea codului și productivitatea dezvoltatorului.",
          reactDescription:
            "Bibliotecă JavaScript pentru construirea interfețelor utilizator, în special aplicații cu o singură pagină cu componente reutilizabile.",
          reduxDescription:
            "Bibliotecă de gestionare a stării pentru aplicații JavaScript, utilizată frecvent cu React pentru actualizări de stare previzibile.",
          tailwindDescription:
            "Framework CSS orientat pe utilități pentru construirea rapidă a interfețelor utilizator personalizate cu clase predefinite.",
          bootstrapDescription:
            "Framework CSS popular pentru dezvoltarea site-urilor web responsive și mobile-first cu componente pre-proiectate.",
          javaDescription:
            "Limbaj de programare orientat pe obiecte utilizat pentru construirea aplicațiilor la nivel de întreprindere și dezvoltare Android.",
          springDescription:
            "Framework Java care oferă suport de infrastructură cuprinzător pentru dezvoltarea aplicațiilor Java robuste.",
          postgresDescription:
            "Sistem de baze de date relațional-obiect puternic, open-source, cu o reputație puternică pentru fiabilitate și integritatea datelor.",
          mongoDescription:
            "Bază de date NoSQL care utilizează documente asemănătoare JSON cu scheme opționale, oferind performanță și scalabilitate ridicate.",
          styledComponentsDescription:
            "Bibliotecă pentru React care permite scrierea CSS în JavaScript, permițând stilizarea la nivel de componentă.",
          figmaDescription:
            "Instrument de design bazat pe cloud pentru design colaborativ de interfață, prototipare și sisteme de design.",
          all: "TOATE",
          landing: "Pagină de destinație",
          react: "React",
          spa: "SPA",
          myprojects: "Proiectele mele",
          viewProject: "Vizualizare proiect",
          demo: "Demo",
          code: "Cod",
          counter: "Contor",
          counterDescription: "Contor cu opțiuni avansate.",
          userIvan: "ivan ivanow",
          userPetr: "petr petrov",
          userIgor: "igor igorev",
          contactDescription:
            "Mă puteți contacta completând simplu formularul și apăsând butonul Trimite - și voi primi mesajul dvs. pe e-mailul meu.",
          subject: "Subiect",
          email: "Email",
          name: "Nume",
          message: "Mesaj",
          sendMessage: "Trimite mesaj",
          nameRequired: "Numele este obligatoriu",
          invalidEmail: "Adresa de email invalidă",
          emailRequired: "Email-ul este obligatoriu",
          subjectRequired: "Subiectul este obligatoriu",
          messageRequired: "Mesajul este obligatoriu",
        },
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
          spec1: "Full-Stack-Entwickler.",
          spec2: "Full-Stack-Ingenieur.",
          spec3: "Software-Entwickler.",
          spec4: "JAVA-Entwickler.",
          spec5: "Backend-Entwickler.",
          spec6: "Web-Entwickler.",
          spec7: "Frontend-Entwickler.",
          spec8: "React-Entwickler.",
          slogan: "Ich bin derzeit für eine Anstellung verfügbar",
          redirect: "Weiterleitung in",
          seconds: "Sekunden...",
          hire: "Stellen Sie mich ein",
          myskills: "Meine Fähigkeiten",
          htmlDescription:
            "Auszeichnungssprache für die Erstellung von Webseiten und Anwendungen, die die Struktur und den Inhalt von Websites bereitstellt.",
          cssDescription:
            "Stilsprache zur Steuerung der Darstellung und des Layouts von HTML-Dokumenten, die Websites visuell ansprechend macht.",
          jsDescription:
            "Programmiersprache, die interaktive Webseiten ermöglicht und ein wesentlicher Bestandteil von Webanwendungen ist.",
          typeScriptDescription:
            "Erweiterung von JavaScript, die statische Typisierung hinzufügt und die Codequalität und Entwicklerproduktivität verbessert.",
          reactDescription:
            "JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen, insbesondere Single-Page-Anwendungen mit wiederverwendbaren Komponenten.",
          reduxDescription:
            "State-Management-Bibliothek für JavaScript-Anwendungen, häufig mit React für vorhersehbare Statusaktualisierungen verwendet.",
          tailwindDescription:
            "Utility-First-CSS-Framework zum schnellen Erstellen benutzerdefinierter Benutzeroberflächen mit vordefinierten Klassen.",
          bootstrapDescription:
            "Beliebtes CSS-Framework für die Entwicklung responsiver und mobile-first Websites mit vorgefertigten Komponenten.",
          javaDescription:
            "Objektorientierte Programmiersprache für die Entwicklung von Unternehmensanwendungen und Android-Entwicklung.",
          springDescription:
            "Java-Framework, das umfassende Infrastrukturunterstützung für die Entwicklung robuster Java-Anwendungen bietet.",
          postgresDescription:
            "Leistungsstarkes, Open-Source-Objektrelationales Datenbanksystem mit starkem Ruf für Zuverlässigkeit und Datenintegrität.",
          mongoDescription:
            "NoSQL-Datenbank, die JSON-ähnliche Dokumente mit optionalen Schemas verwendet und hohe Leistung und Skalierbarkeit bietet.",
          styledComponentsDescription:
            "Bibliothek für React, die das Schreiben von CSS in JavaScript ermöglicht und komponentenspezifisches Styling ermöglicht.",
          figmaDescription:
            "Cloud-basiertes Design-Tool für kollaboratives Interface-Design, Prototyping und Design-Systeme.",
          all: "ALLE",
          landing: "Landing-Page",
          react: "React",
          spa: "SPA",
          myprojects: "Meine Projekte",
          viewProject: "Projekt ansehen",
          demo: "Demo",
          code: "Code",
          counter: "Zähler",
          counterDescription: "Zähler mit erweiterten Optionen.",
          userIvan: "ivan ivanow",
          userPetr: "petr petrov",
          userIgor: "igor igorev",
          contactDescription:
            "Sie können mich kontaktieren, indem Sie einfach das Formular ausfüllen und auf die Schaltfläche Senden klicken - und ich erhalte Ihre Nachricht an meine E-Mail.",
          subject: "Betreff",
          email: "E-Mail",
          name: "Name",
          message: "Nachricht",
          sendMessage: "Nachricht senden",
          nameRequired: "Name ist erforderlich",
          invalidEmail: "Ungültige E-Mail-Adresse",
          emailRequired: "E-Mail ist erforderlich",
          subjectRequired: "Betreff ist erforderlich",
          messageRequired: "Nachricht ist erforderlich",
        },
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
          spec6: "Webový vývojář.",
          spec7: "Frontend vývojář.",
          spec8: "React vývojář.",
          slogan: "Momentálně jsem k dispozici pro zaměstnání",
          redirect: "Přesměrování za",
          seconds: "sekund...",
          hire: "Najmout mě",
          myskills: "Moje dovednosti",
          htmlDescription:
            "Značkovací jazyk pro vytváření webových stránek a aplikací, poskytující strukturu a obsah webových stránek.",
          cssDescription:
            "Stylovací jazyk používaný k ovládání prezentace a rozložení HTML dokumentů, díky čemuž jsou webové stránky vizuálně přitažlivé.",
          jsDescription:
            "Programovací jazyk, který umožňuje interaktivní webové stránky a je nezbytnou součástí webových aplikací.",
          typeScriptDescription:
            "Nadstavba JavaScriptu, která přidává statické typování, zlepšuje kvalitu kódu a produktivitu vývojářů.",
          reactDescription:
            "JavaScriptová knihovna pro vytváření uživatelských rozhraní, zejména jednostránkových aplikací s opakovaně použitelnými komponentami.",
          reduxDescription:
            "Knihovna pro správu stavu pro JavaScript aplikace, běžně používaná s Reactem pro předvídatelné aktualizace stavu.",
          tailwindDescription:
            "CSS framework zaměřený na utility pro rychlé vytváření vlastních uživatelských rozhraní s předdefinovanými třídami.",
          bootstrapDescription:
            "Populární CSS framework pro vývoj responzivních a mobile-first webových stránek s předem navrženými komponentami.",
          javaDescription:
            "Objektově orientovaný programovací jazyk používaný pro vytváření podnikových aplikací a vývoj pro Android.",
          springDescription:
            "Java framework, který poskytuje komplexní infrastrukturní podporu pro vývoj robustních Java aplikací.",
          postgresDescription:
            "Výkonný, open-source objektově-relační databázový systém s dobrou pověstí pro spolehlivost a integritu dat.",
          mongoDescription:
            "NoSQL databáze, která používá dokumenty podobné JSON s volitelným schématem, nabízející vysoký výkon a škálovatelnost.",
          styledComponentsDescription:
            "Knihovna pro React, která umožňuje psát CSS v JavaScriptu, umožňující stylování na úrovni komponent.",
          figmaDescription:
            "Cloudový designový nástroj pro kolaborativní návrh rozhraní, prototypování a designové systémy.",
          all: "VŠE",
          landing: "Vstupní stránka",
          react: "React",
          spa: "SPA",
          myprojects: "Moje projekty",
          viewProject: "Zobrazit projekt",
          demo: "Demo",
          code: "Kód",
          counter: "Počítadlo",
          counterDescription: "Počítadlo s pokročilými možnostmi.",
          userIvan: "ivan ivanow",
          userPetr: "petr petrov",
          userIgor: "igor igorev",
          contactDescription:
            "Můžete mě kontaktovat jednoduše vyplněním formuláře a stisknutím tlačítka Odeslat - a já obdržím vaši zprávu na svůj e-mail.",
          subject: "Předmět",
          email: "E-mail",
          name: "Jméno",
          message: "Zpráva",
          sendMessage: "Odeslat zprávu",
          nameRequired: "Jméno je povinné",
          invalidEmail: "Neplatná e-mailová adresa",
          emailRequired: "E-mail je povinný",
          subjectRequired: "Předmět je povinný",
          messageRequired: "Zpráva je povinná",
        },
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
          spec1: "Full Stack розробник.",
          spec2: "Full Stack інженер.",
          spec3: "Розробник програмного забезпечення.",
          spec4: "JAVA розробник.",
          spec5: "Backend розробник.",
          spec6: "Веб-розробник.",
          spec7: "Frontend розробник.",
          spec8: "React розробник.",
          slogan: "Я зараз доступний для працевлаштування",
          redirect: "Перенаправлення через",
          seconds: "секунд...",
          hire: "Найняти мене",
          myskills: "Мої навички",
          htmlDescription:
            "Мова розмітки для створення веб-сторінок та додатків, що забезпечує структуру та вміст веб-сайтів.",
          cssDescription:
            "Мова стилізації, що використовується для контролю презентації та макету HTML-документів, роблячи веб-сайти візуально привабливими.",
          jsDescription:
            "Мова програмування, яка дозволяє створювати інтерактивні веб-сторінки і є важливою частиною веб-додатків.",
          typeScriptDescription:
            "Надбудова JavaScript, яка додає статичну типізацію, покращуючи якість коду та продуктивність розробника.",
          reactDescription:
            "JavaScript бібліотека для створення користувацьких інтерфейсів, особливо односторінкових додатків з компонентами, що можна повторно використовувати.",
          reduxDescription:
            "Бібліотека управління станом для JavaScript додатків, часто використовується з React для передбачуваних оновлень стану.",
          tailwindDescription:
            "CSS-фреймворк, орієнтований на утиліти, для швидкого створення користувацьких інтерфейсів з попередньо визначеними класами.",
          bootstrapDescription:
            "Популярний CSS-фреймворк для розробки адаптивних та мобільно-орієнтованих веб-сайтів з попередньо розробленими компонентами.",
          javaDescription:
            "Об'єктно-орієнтована мова програмування, що використовується для створення корпоративних додатків та розробки під Android.",
          springDescription:
            "Java-фреймворк, який забезпечує комплексну інфраструктурну підтримку для розробки надійних Java-додатків.",
          postgresDescription:
            "Потужна, відкрита об'єктно-реляційна система баз даних з сильною репутацією щодо надійності та цілісності даних.",
          mongoDescription:
            "NoSQL база даних, яка використовує документи, подібні до JSON, з опціональними схемами, що забезпечує високу продуктивність та масштабованість.",
          styledComponentsDescription:
            "Бібліотека для React, яка дозволяє писати CSS в JavaScript, забезпечуючи стилізацію на рівні компонентів.",
          figmaDescription:
            "Хмарний інструмент дизайну для спільного проектування інтерфейсів, прототипування та систем дизайну.",
          all: "ВСІ",
          landing: "Лендінг",
          react: "React",
          spa: "SPA",
          myprojects: "Мої проекти",
          viewProject: "Переглянути проект",
          demo: "Демо",
          code: "Код",
          counter: "Лічильник",
          counterDescription: "Лічильник з розширеними опціями.",
          userIvan: "іван іванов",
          userPetr: "петро петров",
          userIgor: "ігор ігорев",
          contactDescription:
            "Ви можете зв'язатися зі мною, просто заповнивши форму та натиснувши кнопку Надіслати - і я отримаю ваше повідомлення на свою електронну пошту.",
          subject: "Тема",
          email: "Email",
          name: "Ім'я",
          message: "Повідомлення",
          sendMessage: "Надіслати повідомлення",
          nameRequired: "Ім'я обов'язкове",
          invalidEmail: "Невірна адреса електронної пошти",
          emailRequired: "Email обов'язковий",
          subjectRequired: "Тема обов'язкова",
          messageRequired: "Повідомлення обов'язкове",
        },
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
          spec1: "Full Stack разработчик.",
          spec2: "Full Stack инженер.",
          spec3: "Разработчик программного обеспечения.",
          spec4: "JAVA разработчик.",
          spec5: "Backend разработчик.",
          spec6: "Веб-разработчик.",
          spec7: "Frontend разработчик.",
          spec8: "React разработчик.",
          slogan: "В настоящее время я доступен для трудоустройства",
          redirect: "Перенаправление через",
          seconds: "секунд...",
          hire: "Нанять меня",
          myskills: "Мои навыки",
          htmlDescription:
            "Язык разметки для создания веб-страниц и приложений, обеспечивающий структуру и содержание веб-сайтов.",
          cssDescription:
            "Язык стилей, используемый для управления представлением и макетом HTML-документов, делая веб-сайты визуально привлекательными.",
          jsDescription:
            "Язык программирования, который позволяет создавать интерактивные веб-страницы и является важной частью веб-приложений.",
          typeScriptDescription:
            "Надстройка JavaScript, которая добавляет статическую типизацию, улучшая качество кода и продуктивность разработчика.",
          reactDescription:
            "JavaScript библиотека для создания пользовательских интерфейсов, особенно одностраничных приложений с повторно используемыми компонентами.",
          reduxDescription:
            "Библиотека управления состоянием для JavaScript приложений, часто используемая с React для предсказуемых обновлений состояния.",
          tailwindDescription:
            "CSS-фреймворк, ориентированный на утилиты, для быстрого создания пользовательских интерфейсов с предопределенными классами.",
          bootstrapDescription:
            "Популярный CSS-фреймворк для разработки адаптивных и мобильно-ориентированных веб-сайтов с предварительно разработанными компонентами.",
          javaDescription:
            "Объектно-ориентированный язык программирования, используемый для создания корпоративных приложений и разработки под Android.",
          springDescription:
            "Java-фреймворк, который обеспечивает комплексную инфраструктурную поддержку для разработки надежных Java-приложений.",
          postgresDescription:
            "Мощная, открытая объектно-реляционная система баз данных с сильной репутацией в отношении надежности и целостности данных.",
          mongoDescription:
            "NoSQL база данных, которая использует документы, подобные JSON, с опциональными схемами, обеспечивая высокую производительность и масштабируемость.",
          styledComponentsDescription:
            "Библиотека для React, которая позволяет писать CSS в JavaScript, обеспечивая стилизацию на уровне компонентов.",
          figmaDescription:
            "Облачный инструмент дизайна для совместного проектирования интерфейсов, прототипирования и систем дизайна.",
          all: "ВСЕ",
          landing: "Лендинг",
          react: "React",
          spa: "SPA",
          myprojects: "Мои проекты",
          viewProject: "Просмотреть проект",
          demo: "Демо",
          code: "Код",
          counter: "Счетчик",
          counterDescription: "Счетчик с расширенными опциями.",
          userIvan: "иван иванов",
          userPetr: "петр петров",
          userIgor: "игорь игорев",
          contactDescription:
            "Вы можете связаться со мной, просто заполнив форму и нажав кнопку Отправить - и я получу ваше сообщение на свою электронную почту.",
          subject: "Тема",
          email: "Email",
          name: "Имя",
          message: "Сообщение",
          sendMessage: "Отправить сообщение",
          nameRequired: "Имя обязательно",
          invalidEmail: "Неверный адрес электронной почты",
          emailRequired: "Email обязателен",
          subjectRequired: "Тема обязательна",
          messageRequired: "Сообщение обязательно",
        },
      },
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
