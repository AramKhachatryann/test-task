import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import Objective from "../components/Objectives/Objective";

const MAIN_ROUTES = [
    {
        path: 'main',
        element: <Main />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'objective',
        element: <Objective />
    }
]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: "*",
        element: <Main />
    }
]