import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import { SplashScreen } from "@/components/SplashScreen";

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
        element: <SplashScreen />,
    },
]);
