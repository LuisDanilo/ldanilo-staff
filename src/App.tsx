import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "@/utils/domRouter";
import { useDynamicTheme } from "./hooks/useDynamicTheme";

function App() {
    const [theme] = useDynamicTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
