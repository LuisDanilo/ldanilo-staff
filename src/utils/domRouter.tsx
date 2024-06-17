import { createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";

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
        element: <Box width={"100%"} height={"100%"} bgcolor={"#25255b"}></Box>
    }
]);
