import './App.css';
import {HashRouter, Route, Routes} from "react-router";
import Layout from "./layout/Layout.tsx";
import Lesson01 from "./layout/lesson01/Lesson01.tsx";
import {Main} from "./sections/main/Main.tsx";


const routes = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: 'lesson01',
        element: <Lesson01 />
    },

];

function App() {

    return (
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {routes.map(route => (
                                <Route key={route.path} path={route.path} element={route.element} />
                            ))}
                        </Route>
                    </Routes>
                </HashRouter>
    );
}

export default App;
