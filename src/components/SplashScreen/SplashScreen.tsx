import { Box, Fade, Typography, Grid } from "@mui/material";
import { useMemo } from "react";
import { useFigmaBreakpoints } from "@/hooks/useFigmaBreakpoints";
import { useGridParams } from "@/hooks/useGridParams";

export interface SplashScreenProps {
    subtitle: string;
}

export default function SplashScreen(props: SplashScreenProps) {
    const { MobileS, MobileM, MobileL, Tablet } = useFigmaBreakpoints();

    const { columnSpacing, columns, paddingX } = useGridParams();

    const titleVariant = useMemo(() => {
        if (MobileS) {
            return "h3";
        } else if (MobileM || MobileL) {
            return "h2";
        } else {
            return "h1";
        }
    }, [MobileS, MobileM, MobileL]);

    const subTitleVariant = useMemo(() => {
        if (MobileS) {
            return "h6";
        } else if (MobileM || MobileL) {
            return "h5";
        } else if (Tablet) {
            return "h3";
        } else {
            return "h2";
        }
    }, [MobileS, MobileM, MobileL, Tablet]);

    return (
        <Fade in={true}>
            <Box bgcolor={"#25255B"} width={"100vw"} height={"100vh"}>
                <Grid
                    columns={columns}
                    columnSpacing={columnSpacing}
                    paddingX={paddingX}
                    height={"100%"}
                    container
                >
                    <Grid
                        item
                        xs={4}
                        sm={8}
                        md={8}
                        lg={12}
                        xl={12}
                        display={"flex"}
                        alignItems={"flex-end"}
                    >
                        <Typography
                            variant={titleVariant}
                            color={"white"}
                            width={"100%"}
                            textAlign={"center"}
                        >
                            Motivy
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sm={8}
                        md={8}
                        lg={12}
                        xl={12}
                        display={"flex"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            variant={subTitleVariant}
                            color={"white"}
                            width={"100%"}
                            textAlign={"center"}
                        >
                            {props.subtitle
                                ? props.subtitle
                                : "El poder del reconocimiento"}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Fade>
    );
}
