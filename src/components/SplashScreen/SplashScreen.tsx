import { Box, Fade, Typography, Grid, TypographyProps } from "@mui/material";
import { useMemo } from "react";
import { useGridParams } from "@/hooks/useGridParams";

export interface SplashScreenProps {
    subtitle: string;
}

interface TextVariantsMemoReturn {
    title: Pick<TypographyProps, "variant">;
    subtitle: Pick<TypographyProps, "variant">;
}

export default function SplashScreen(props: SplashScreenProps) {
    const {
        gridProps: { columnSpacing, columns, paddingX },
        breakpoints: { xs, sm, md, lg, xl },
        theme
    } = useGridParams();

    const textVariants = useMemo<TextVariantsMemoReturn>(() => {
        // Default
        let variants: TextVariantsMemoReturn = {
            title: {
                variant: "h3",
            },
            subtitle: {
                variant: "h6",
            },
        };
        if (xl || lg) {
            variants = {
                title: {
                    variant: "h1",
                },
                subtitle: {
                    variant: "h2",
                },
            };
        } else if (md) {
            variants = {
                title: {
                    variant: "h1",
                },
                subtitle: {
                    variant: "h3",
                },
            };
        } else if (sm) {
            variants = {
                title: {
                    variant: "h2",
                },
                subtitle: {
                    variant: "h5",
                },
            };
        }
        // else if (xs) {
        //     console.log("TextVariant: XS");
        // }
        return variants;
    }, [xs, sm, md, lg, xl]);

    return (
        <Fade in={true}>
            <Box bgcolor={theme.palette.primary.main} width={"100vw"} height={"100vh"}>
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
                            variant={textVariants.title.variant}
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
                            variant={textVariants.subtitle.variant}
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
