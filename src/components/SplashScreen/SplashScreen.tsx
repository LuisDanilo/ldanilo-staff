import {
    Fade,
    Typography,
    Grid,
    TypographyProps,
    Stack,
} from "@mui/material";
import { useMemo } from "react";
import { useGridParams } from "@/hooks/useGridParams";
import { MyGridProps } from "@/types/custom.types";

export interface SplashScreenProps {
    subtitle: string;
}

interface ResponsiveProps extends MyGridProps {
    title: Pick<TypographyProps, "variant">;
    subtitle: Pick<TypographyProps, "variant">;
}

interface TextProps {
    responsiveProps: ResponsiveProps;
    gridProps: MyGridProps;
    subtitle: string;
}

function Text(props: TextProps) {
    const {
        gridProps,
        subtitle: subtitleText,
        responsiveProps: { subtitle, title },
    } = props;
    return (
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
                <Typography color={"white"} variant={title.variant}>
                    Motivy
                </Typography>
            </Grid>
            <Grid
                id={"grid-item-2-d117"}
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
                <Typography color={"white"} variant={subtitle.variant}>
                    {subtitleText}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default function SplashScreen(props: SplashScreenProps) {
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
                    variant: "h1",
                },
                subtitle: {
                    variant: "h2",
                },
            };
        } else if (md) {
            respProps = {
                title: {
                    variant: "h1",
                },
                subtitle: {
                    variant: "h3",
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
        <Fade in={true}>
            <Stack
                id={"splash-screen-main-stack"}
                bgcolor={theme.palette.primary.main}
                height={"100vh"}
                direction={"column"}
                justifyContent={"center"}
            >
                <Text
                    responsiveProps={responsiveProps}
                    gridProps={gridProps}
                    subtitle={props.subtitle}
                />
            </Stack>
        </Fade>
    );
}
