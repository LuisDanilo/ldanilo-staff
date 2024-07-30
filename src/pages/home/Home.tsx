import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useAuthStore, useThemeStore } from "@/utils/storage";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Stack, Dialog } from "@mui/material";

const SplashScreen = lazy(
    () => import("@/components/SplashScreen/SplashScreen")
);

export default function Home() {
    const authToken = useAuthStore((store) => store.authToken);
    const navigate = useNavigate();
    const [showLoadingScreen] = useLoadingScreenCountdown();

    const setToken = useAuthStore((store) => store.setToken);
    const switchTheme = useThemeStore((store) => store.switchTheme);

    const { t } = useTranslation();

    const handleHomeButtonClick = () => {
        setToken(null);
        navigate("/login");
    };

    const handleSwitchThemeButtonClick = () => {
        switchTheme();
    };

    if (showLoadingScreen) {
        return <SplashScreen subtitle={t("slogan")} />;
    } else if (!authToken) {
        return (
            <Dialog open={true}>
                Tu sesion expiro
                <Button
                    onClick={() => navigate("/login")}
                    variant={"contained"}
                    color={"primary"}
                >
                    Llevame a login
                </Button>
            </Dialog>
        );
    } else {
        return (
            <Stack
                direction={"row"}
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleHomeButtonClick}
                >
                    Hello Im Home
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleSwitchThemeButtonClick}
                >
                    Change theme
                </Button>
            </Stack>
        );
    }
}
