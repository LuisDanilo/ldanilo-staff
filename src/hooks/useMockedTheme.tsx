import { PaletteMode, createTheme } from "@mui/material"
import { useEffect, useState } from "react"

const fontFamily = [
    "Nunito",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
].join(",");

export function useMockedTheme(themeMode: PaletteMode) {
    const [theme, setTheme] = useState(createTheme({}))

    useEffect(() => {
        const getMockData = async () => {
            const data = await import("@/services/mocks/getThemeColors.json")
            await import("@/nunito.css")
            setTheme(
                createTheme({
                    typography: {
                        fontFamily,
                    },
                    palette: {
                        mode: themeMode,
                        primary: {
                            main: data.data[themeMode].primary,
                        },
                        secondary: {
                            main: data.data[themeMode].secondary,
                        },
                        background: {
                            default:
                                data.data[themeMode].background,
                        },
                    },
                    components: {
                        MuiButton: {
                            styleOverrides: {
                                root: {
                                    textTransform: "none",
                                },
                            },
                        },
                    },
                })
            );
        }
        getMockData().then()
    }, [])

    return [theme]
}