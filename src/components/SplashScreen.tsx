import { useMockedTheme } from "@/hooks/useMockedTheme";
import { PaletteMode, Stack, ThemeProvider, Typography, useMediaQuery } from "@mui/material";

export function SplashScreen() {
    const isWidth414OrLess = useMediaQuery('(max-width: 414px)');
    const isWidth320OrLess = useMediaQuery('(max-width: 320px)');

    return <Stack bgcolor={"#25255B"} width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Typography color={"white"} variant={isWidth320OrLess ? "h3" : isWidth414OrLess ? "h2" : "h2"}>Motivy</Typography>
        <Typography color={"white"} variant={isWidth320OrLess ? "h6" : isWidth414OrLess ? "h5" : "h5"}>El poder del reconocimiento</Typography>
    </Stack>
}

export function StorySplashScreen(props: { themeMode: PaletteMode }) {

    const [mockedTheme] = useMockedTheme(props.themeMode)

    return <ThemeProvider theme={mockedTheme}>
        <SplashScreen />
    </ThemeProvider>
}