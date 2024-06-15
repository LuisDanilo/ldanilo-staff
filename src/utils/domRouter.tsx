// import { FullscreenLoading } from "@/components/FullscreenLoading";
// import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login/Login";
import Home from "@/pages/home/Home";

// const App = lazy(() => {
//     return Promise.all([
//         import("@/App"),
//         new Promise((resolve) => setTimeout(resolve, 1500)),
//     ]).then(([moduleExports]) => moduleExports);
// });

// const Login = lazy(() => {
//     return Promise.all([
//         import("@/pages/login/Login"),
//         new Promise((resolve) => setTimeout(resolve, 1500)),
//     ]).then(([moduleExports]) => moduleExports);
// });

// function SuspensedApp() {
//     return (
//         <Suspense fallback={<FullscreenLoading />}>
//             <App />
//         </Suspense>
//     );
// }

// function SuspensedLogin() {
//     return (
//         <Suspense fallback={<FullscreenLoading />}>
//             <Login />
//         </Suspense>
//     );
// }

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);
