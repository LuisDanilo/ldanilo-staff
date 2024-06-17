import { useThemeStore } from "@/utils/storage";
import { Theme, createTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const fontFamily = [
    "Nunito",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
].join(",");

export function useDynamicTheme() {
    const [theme, setTheme] = useState<Theme>(
        createTheme({
            typography: {
                fontFamily,
            },
        })
    );

    const themeMode = useThemeStore((store) => store.theme);

    const themeColorsQuery = useQuery({
        queryKey: ["themeColors"],
        queryFn: async () => {
            const { getThemeColors } = await import("@/services/apiService");
            return getThemeColors();
        },
        refetchInterval: 5000
    });

    useEffect(() => {
        if (!!themeColorsQuery.data) {
            setTheme(
                createTheme({
                    typography: {
                        fontFamily,
                    },
                    palette: {
                        mode: themeMode,
                        primary: {
                            main: themeColorsQuery.data[themeMode].primary,
                        },
                        secondary: {
                            main: themeColorsQuery.data[themeMode].secondary,
                        },
                        background: {
                            default:
                                themeColorsQuery.data[themeMode].background,
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
    }, [themeMode, themeColorsQuery.data]);

    return [theme];
}
