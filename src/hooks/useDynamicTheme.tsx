import { getThemeColors } from "@/services/apiService";
import { toMilis } from "@/utils/misc";
import { useThemeStore } from "@/utils/storage";
import { Theme, createTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useDynamicTheme() {
    const [theme, setTheme] = useState<Theme>(
        createTheme({
            typography: {
                fontFamily: [
                    "Nunito",
                    "Roboto",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                ].join(","),
            },
        })
    );

    const themeMode = useThemeStore((store) => store.theme);

    const themeColorsQuery = useQuery({
        queryKey: ["themeColors"],
        queryFn: getThemeColors,
        refetchInterval: toMilis(5) // 5 minutes
    });

    useEffect(() => {
        if (!!themeColorsQuery.data) {
            setTheme(
                createTheme({
                    typography: {
                        fontFamily: [
                            "Nunito",
                            "Roboto",
                            "Helvetica",
                            "Arial",
                            "sans-serif",
                        ].join(","),
                    },
                    palette: {
                        mode: themeMode,
                        primary: {
                            main: themeColorsQuery.data[themeMode].primary,
                        },
                        background: {
                            default:
                                themeColorsQuery.data[themeMode].background,
                        },
                    },
                })
            );
        }
    }, [themeMode, themeColorsQuery.data]);

    return [theme];
}
