import { FullscreenLoading } from "@/components/FullscreenLoading";
import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import useRedirectionToLoginOrHome from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore } from "@/utils/storage";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import get from "lodash.get";
import invoke from "lodash.invoke";

export default function Login() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    useRedirectionToLoginOrHome();

    const [showLoginSuccessMessage, setShowLoginSuccessMessage] =
        useState(false);

    const setToken = useAuthStore((state) => get(state, "setToken"));

    const handleLoginButtonClick = () => {
        setShowLoginSuccessMessage(true);
        setTimeout(() => invoke({ setToken }, "setToken", "123.abc.xyz"), 1000);
    };

    if (showLoadingScreen) {
        return <FullscreenLoading />;
    } else {
        return (
            <>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleLoginButtonClick}
                >
                    Login page
                </Button>
                <Typography hidden={!showLoginSuccessMessage}>
                    You are loged in! 😀
                </Typography>
            </>
        );
    }
}
