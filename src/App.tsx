import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { useDynamicTheme } from "@/hooks/useDynamicTheme";
import { useTranslation } from "react-i18next";
import { useUserStore } from "@/utils/storage";
import { useEffect } from "react";
import { router } from "@/router/router";

function App() {
    const [theme] = useDynamicTheme();
    const {
        i18n: { changeLanguage },
    } = useTranslation();

    const language = useUserStore((store) => store.language);

    useEffect(() => {
        // When a new language is stored then change i18n current language
        // It will refresh all translations in app without refreshing it
        changeLanguage(language);
    }, [language]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
