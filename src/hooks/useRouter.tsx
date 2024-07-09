import Loader from "@/components/Loader/Loader";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return import("@/pages/home/Home");
});

const Login = lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return import("@/pages/login/Login");
});


export function useRouter() {
    const router = createBrowserRouter([
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
        // {
        //     path: "/test",
        //     element: <SplashScreen subtitle={t("slogan")} />,
        // },
    ]);

    return router;
}
