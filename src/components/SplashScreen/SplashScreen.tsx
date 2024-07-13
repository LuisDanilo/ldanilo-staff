import { TypographyProps } from "@mui/material/Typography";
import { lazy } from "react";
import { useMemo } from "react";
import { useGridParams } from "@/hooks/useGridParams";

const Fade = lazy(() => import("@mui/material/Fade"));
const Typography = lazy(() => import("@mui/material/Typography"));
const Grid = lazy(() => import("@mui/material/Grid"));
const Stack = lazy(() => import("@mui/material/Stack"));
const Box = lazy(() => import("@mui/material/Box"));

export interface SplashScreenProps {
    subtitle: string;
}

interface ResponsiveProps {
    title: Pick<TypographyProps, "variant">;
    subtitle: Pick<TypographyProps, "variant">;
}

interface TextProps {
    responsiveProps: ResponsiveProps;
    subtitle: string;
}

function Text(props: Readonly<TextProps>) {
    const {
        subtitle: subtitleText,
        responsiveProps: { subtitle, title },
    } = props;
    return (
        <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            id="splash-screen-text"
        >
            <Typography color={"white"} variant={title.variant}>
                Motivy
            </Typography>
            <Typography color={"white"} variant={subtitle.variant}>
                {subtitleText}
            </Typography>
        </Stack>
    );
}

export default function SplashScreen(props: Readonly<SplashScreenProps>) {
    const {
        gridProps,
        breakpoints: { xs, sm, md, lg, xl },
        theme,
    } = useGridParams();

    const responsiveProps = useMemo<ResponsiveProps>(() => {
        // Default
        let respProps: ResponsiveProps;
        if (xl || lg) {
            respProps = {
                title: {
                    variant: "h2",
                },
                subtitle: {
                    variant: "h4",
                },
            };
        } else if (md) {
            respProps = {
                title: {
                    variant: "h2",
                },
                subtitle: {
                    variant: "h5",
                },
            };
        } else {
            respProps = {
                title: {
                    variant: "h3",
                },
                subtitle: {
                    variant: "h6",
                },
            };
        }
        return respProps;
    }, [xs, sm, md, lg, xl]);

    return (
        <Box
            sx={{
                transition: "background-color 0.3s ease",
            }}
            bgcolor={theme.palette.primary.main}
        >
            <Fade in={true} timeout={500}>
                <Stack
                    id={"splash-screen-main-stack"}
                    height={"100vh"}
                    direction={"column"}
                    justifyContent={"center"}
                >
                    <Grid id={"grid-container-d117"} container {...gridProps}>
                        <Grid
                            id={"grid-item-1-d117"}
                            item
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            xs={4}
                            sm={4}
                            md={8}
                            lg={12}
                            xl={12}
                            overflow={"hidden"}
                        >
                            <Text
                                responsiveProps={responsiveProps}
                                subtitle={props.subtitle}
                            />
                        </Grid>
                    </Grid>
                </Stack>
            </Fade>
        </Box>
    );
}
