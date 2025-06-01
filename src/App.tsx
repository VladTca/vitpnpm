import './App.css';
import {HashRouter, Route, Routes} from "react-router";
import Layout from "./layout/Layout.tsx";
import {Main} from "./sections/main/Main.tsx";
import {Skills} from "./sections/skills/Skills.tsx";
import {Works} from "./sections/works/Works.tsx";
import {Testimony} from "./sections/testimony/Testimony.tsx";
import {Contacts} from "./sections/contacts/Contacts.tsx";
import NoPage from "./components/NoPage.tsx";


const routes = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: 'skills',
        element: <Skills />
    },
    {
        path: 'works',
        element: <Works />
    },
    {
        path: 'Testimony',
        element: <Testimony />
    },
    {
        path: 'contacts',
        element: <Contacts />
    }

];

function App() {

    return (
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {routes.map(route => (
                                <Route key={route.path} path={route.path} element={route.element} />
                            ))}
                            <Route path="*" element={<NoPage />}/>
                        </Route>
                    </Routes>
                </HashRouter>
    );
}

export default App;
