import { useMockedTheme } from "@/hooks/useMockedTheme";
import { PaletteMode, ThemeProvider } from "@mui/material";
import SplashScreen, { SplashScreenProps } from "@/components/SplashScreen/SplashScreen";

interface StorySplashScreenProps extends SplashScreenProps {
    themeMode: PaletteMode;
}

export function StorySplashScreen(props: StorySplashScreenProps) {
    const { themeMode, ...p } = props
    const [mockedTheme] = useMockedTheme(props.themeMode);

    return (
        <ThemeProvider theme={mockedTheme}>
            <SplashScreen {...p} />
        </ThemeProvider>
    );
}
