import { Box, Fade, Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { ResponsiveGrid } from "../Layouts/ResponsiveGrid";
import { useFigmaBreakpoints } from "@/hooks/useFigmaBreakpoints";

export interface SplashScreenProps {
    subtitle: string;
}

export default function SplashScreen(props: SplashScreenProps) {
    const { LEQMobileS, LEQMobileM, LEQMobileL } = useFigmaBreakpoints();

    const titleVariant = useMemo(() => {
        if (LEQMobileS) {
            return "h3";
        } else if (LEQMobileM || LEQMobileL) {
            return "h2";
        } else {
            // LEQ Tablet || LEQLaptop || LEQLaptopL || LEQDesktop4K
            return "h1";
        }
    }, [LEQMobileS, LEQMobileM, LEQMobileL]);

    const subTitleVariant = useMemo(() => {
        if (LEQMobileS) {
            return "h6";
        } else if (LEQMobileM || LEQMobileL) {
            return "h5";
        } else {
            // LEQ Tablet || LEQLaptop || LEQLaptopL || LEQDesktop4K
            return "h4";
        }
    }, [LEQMobileS, LEQMobileM, LEQMobileL]);

    return (
        <Fade in={true}>
            <Box bgcolor={"#25255B"} width={"100vw"} height={"100vh"}>
                <ResponsiveGrid>
                    <Grid
                        item
                        xs={4}
                        sm={8}
                        md={12}
                        lg={12}
                        alignContent={"flex-end"}
                    >
                        <Typography
                            textAlign={"center"}
                            variant={titleVariant}
                            color={"white"}
                        >
                            Motivy
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={8} md={12} lg={12}>
                        <Typography
                            textAlign={"center"}
                            variant={subTitleVariant}
                            color={"white"}
                        >
                            {props.subtitle
                                ? props.subtitle
                                : "El poder del reconocimiento"}
                        </Typography>
                    </Grid>
                </ResponsiveGrid>
            </Box>
        </Fade>
    );
}
