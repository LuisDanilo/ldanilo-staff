import { Fade, Stack, Typography } from "@mui/material";

export function FullscreenLoading() {
    return (
        <Fade in={true}>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                bgcolor={"#25255b"}
            >
                <Typography variant="h1" color="white">
                    Motivy
                </Typography>
                <Typography variant="h4" color="white" textAlign={"center"}>
                    El poder del reconocimiento
                </Typography>
            </Stack>
        </Fade>
    );
}

export default FullscreenLoading