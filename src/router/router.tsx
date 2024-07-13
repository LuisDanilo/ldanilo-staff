import Loader from "@/components/Loader/Loader";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));

const Login = lazy(() => import("@/pages/login/Login"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Loader />}>
                <Home />
            </Suspense>
        ),
    },
    {
        path: "/login",
        element: (
            <Suspense fallback={<Loader />}>
                <Login />
            </Suspense>
        ),
    },
]);
