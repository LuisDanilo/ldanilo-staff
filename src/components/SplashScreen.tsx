import { useFigmaBreakpoints } from "@/hooks/useFigmaBreakpoints";
import { useMockedTheme } from "@/hooks/useMockedTheme";
import { PaletteMode, Stack, ThemeProvider, Typography } from "@mui/material";
import { useMemo } from "react";

export function SplashScreen() {
    const [
        isWidth320OrLess,
        isWidth414OrLess,
        isWidth834OrLess,
        isWidth1440OrLess,
    ] = useFigmaBreakpoints();

    const titleVariant = useMemo(() => {
        if (isWidth320OrLess) {
            return "h3";
        } else if (isWidth414OrLess) {
            return "h2";
        } else if (isWidth834OrLess) {
            return "h1";
        } else if (isWidth1440OrLess) {
            return "h1";
        } else {
            return "h1";
        }
    }, [isWidth320OrLess, isWidth414OrLess, isWidth834OrLess]);

    const subTitleVariant = useMemo(() => {
        if (isWidth320OrLess) {
            return "h6";
        } else if (isWidth414OrLess) {
            return "h5";
        } else if (isWidth834OrLess) {
            return "h4";
        } else if (isWidth1440OrLess) {
            return "h4";
        } else {
            return "h4";
        }
    }, [isWidth320OrLess, isWidth414OrLess, isWidth834OrLess]);

    return (
        <Stack
            bgcolor={"#25255B"}
            width={"100vw"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography color={"white"} variant={titleVariant}>
                Motivy
            </Typography>
            <Typography color={"white"} variant={subTitleVariant}>
                El poder del reconocimiento
            </Typography>
        </Stack>
    );
}

export function StorySplashScreen(props: { themeMode: PaletteMode }) {
    const [mockedTheme] = useMockedTheme(props.themeMode);

    return (
        <ThemeProvider theme={mockedTheme}>
            <SplashScreen />
        </ThemeProvider>
    );
}
