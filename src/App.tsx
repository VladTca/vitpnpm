import './App.css';
import {useEffect, useState} from "react";
import {HashRouter, Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import {Skills} from "./sections/skills/Skills.tsx";
import {Works} from "./sections/works/Works.tsx";
import {Testimony} from "./sections/testimony/Testimony.tsx";
import {Contacts} from "./sections/contacts/Contacts.tsx";
import NoPage from "./components/NoPage";
import {Slogan} from "./sections/slogan/Slogan.tsx";
import {Main} from "./sections/main/Main.tsx";

function ToSlogan() {
    const [showSlogan, setShowSlogan] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSlogan(false);
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return showSlogan ? <Slogan /> : null;
}

const routes = [
    { path: "/", element: <Main /> },
    { path: "skills", element: <Skills /> },
    { path: "works", element: <Works /> },
    { path: "testimony", element: <Testimony /> },
    { path: "contacts", element: <Contacts /> },
    { path: "slogan", element: <ToSlogan /> },
];

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;