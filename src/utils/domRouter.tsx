import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import LoginForm from "@/components/LoginForm/LoginForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/test",
        element: <LoginForm />,
    },
]);
