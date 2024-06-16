import { FullscreenLoading } from "@/components/FullscreenLoading";
import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useRedirectionToLoginOrHome } from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore } from "@/utils/storage";
import { Alert, Box, Button, Snackbar, Stack } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

const setTokenTimeout = 1000;

export default function Login() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    useRedirectionToLoginOrHome();

    const [showLoginSuccessMessage, setShowLoginSuccessMessage] =
        useState(false);

    const setToken = useAuthStore((state) => state.setToken);

    const handleLoginButtonClick = () => {
        setShowLoginSuccessMessage(true);
        setTimeout(() => setToken("123.abc.xyz"), setTokenTimeout);
    };

    if (showLoadingScreen) {
        return <FullscreenLoading />;
    } else {
        return (
            <Stack
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleLoginButtonClick}
                >
                    Login page
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={showLoginSuccessMessage}
                    autoHideDuration={setTokenTimeout - 100}
                >
                    <Alert
                        severity="success"
                        variant="filled"
                        // Default icon vertical align is weird, I preffer using this icon
                        icon={<DoneIcon sx={{ color: "#FFF" }} />}
                    >
                        {/* 
                            verticalAlign: super and display: inline-box  were used
                            to fix a weird alignment of Alert text.
                            With this fix the text is more centered vertically.
                        */}
                        <Box
                            display={"inline-block"}
                            sx={{ verticalAlign: "super", color: "#FFF" }}
                        >
                            You are loged in! 😀
                        </Box>
                    </Alert>
                </Snackbar>
            </Stack>
        );
    }
}
