import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, useMemo } from "react";

interface ResponseGridProps {
    children: ReactNode[] | ReactNode;
}

export function ResponsiveGrid(props: ResponseGridProps) {
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
                cols: 12,
                justifyContent: "center",
                paddingX: 32,
            };
        } else if (lg) {
            // ==> [lg, xl) ... [1200px, 1536px)
            return {
                cols: 12,
                justifyContent: "initial",
                paddingX: 3,
            };
        } else if (md || sm) {
            // [sm, md)
            // [md, lg)
            // ==> [sm,lg) ... [600px, 1200px)
            return {
                cols: 8,
                justifyContent: "initial",
                paddingX: 3,
            };
        } else {
            // ==> [xs, sm) ... [0px, 600px)
            return {
                cols: 4,
                justifyContent: "initial",
                paddingX: 3,
            };
        }
    }, [xs, sm, md, lg, xl]);

    return (
        <Grid
            container
            columns={gridProps.cols}
            columnSpacing={3}
            paddingX={gridProps.paddingX}
            justifyContent={gridProps.justifyContent}
            height={"100%"}
        >
            {props.children}
        </Grid>
    );
}
