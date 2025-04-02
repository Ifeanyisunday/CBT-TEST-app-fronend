
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Components/Dashboard";
import Exam from "../Components/Exam";
import { Home } from "../Components/Home";

export const Router = [
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/dash',
        element: <Dashboard/>
    },
    {
        path:'/exam',
        element: <Exam/>
    },
]

export default Router