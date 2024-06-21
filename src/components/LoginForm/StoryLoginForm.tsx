import { useMockedTheme } from "@/hooks/useMockedTheme";
import { PaletteMode, ThemeProvider } from "@mui/material";
import LoginForm from "@/components/LoginForm/LoginForm";

export function StoryLoginForm(props: { themeMode: PaletteMode }) {
    const [mockedTheme] = useMockedTheme(props.themeMode);

    return (
        <ThemeProvider theme={mockedTheme}>
            <LoginForm />
        </ThemeProvider>
    );
}
