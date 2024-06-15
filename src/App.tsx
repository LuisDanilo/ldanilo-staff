import { useState } from "react";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "@/utils/domRouter";

function App() {
    // TODO Make API call to retrieve theme colors by origin
    // TODO Make currentThemeMode a persisten value
    // TODO Always create a persistent value for it if not already exists
    // TODO Check what system i will use for persistent data
    // TODO Maybe it will be needed a react context to make able a child component
    //  to change theme configured here (in this parent component)

    const [currentThemeMode, _] = useState<PaletteMode>("light");

    const theme = createTheme({
        palette: {
            mode: currentThemeMode,
            primary: {
                // TODO This validation should no exists
                //  instead it should retrieve values of backend based on persistent state
                main: currentThemeMode === "light" ? "#25255b" : "#030339",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
