import { useMemo } from "react";
import { Fade, Typography, Box, TypographyProps, Stack } from "@mui/material";
import { useBreakpoints } from "@/hooks/useBreakpoints";

function Text(props: ResponsiveProps & { subtitleText: string }) {
    return (
        <Stack
            id={"splash-screen-text"}
            direction={"column"}
            alignItems={"center"}
        >
            <Typography color={"white"} variant={props.title.variant}>
                Motivy
            </Typography>
            <Typography color={"white"} variant={props.subtitle.variant}>
                {props.subtitleText}
            </Typography>
        </Stack>
    );
}

export interface SplashScreenProps {
    subtitle: string;
}

interface ResponsiveProps {
    title: Pick<TypographyProps, "variant">;
    subtitle: Pick<TypographyProps, "variant">;
}

export default function SplashScreen(props: Readonly<SplashScreenProps>) {
    const { xs, sm, md, lg, xl, theme } = useBreakpoints();

    const responsiveProps = useMemo<ResponsiveProps>(() => {
        // Default
        let respProps: ResponsiveProps;
        if (xl || lg) {
            respProps = {
                title: { variant: "h2" },
                subtitle: { variant: "h4" },
            };
        } else if (md) {
            respProps = {
                title: { variant: "h2" },
                subtitle: { variant: "h5" },
            };
        } else {
            respProps = {
                title: { variant: "h3" },
                subtitle: { variant: "h6" },
            };
        }
        return respProps;
    }, [xs, sm, md, lg, xl]);

    return (
        <Box
            sx={{ transition: "background-color 0.3s ease" }}
            bgcolor={theme.palette.primary.main}
        >
            <Fade in={true} timeout={500}>
                <Stack
                    id={"splash-screen-main-stack"}
                    height={"100vh"}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Text {...responsiveProps} subtitleText={props.subtitle} />
                </Stack>
            </Fade>
        </Box>
    );
}
