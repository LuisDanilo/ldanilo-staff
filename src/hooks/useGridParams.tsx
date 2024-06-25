import { useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";


export function useGridParams() {
    const theme = useTheme();

    // Its important to evaluate from bigger to smaller
    const xs = useMediaQuery(theme.breakpoints.up("xs"));
    const sm = useMediaQuery(theme.breakpoints.up("sm"));
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
    const xl = useMediaQuery(theme.breakpoints.up("xl"));

    const gridProps = useMemo(() => {
        if (xl) {
            // ==> [xl, inf) ... [1536px, inf)
            return {
                columns: 12,
                columnSpacing: 3, // figma gutter
                paddingX: 32, // figma margin
                justifyContent: "center",
            };
        } else if (lg) {
            // ==> [lg, xl) ... [1200px, 1536px)
            return {
                columns: 12,
                columnSpacing: 3, // figma gutter
                paddingX: 3, // figma margin
                justifyContent: "initial",
            };
        } else if (md || sm) {
            // [sm, md)
            // [md, lg)
            // ==> [sm,lg) ... [600px, 1200px)
            return {
                columns: 8,
                columnSpacing: 2, // figma gutter
                paddingX: 4, // figma margin
                justifyContent: "initial",
            };
        } else {
            // ==> [xs, sm) ... [0px, 600px)
            return {
                columns: 4,
                columnSpacing: 1.5, // figma gutter
                paddingX: 1.5, // figma margin
                justifyContent: "initial",
            };
        }
    }, [xs, sm, md, lg, xl]);

    return gridProps
}