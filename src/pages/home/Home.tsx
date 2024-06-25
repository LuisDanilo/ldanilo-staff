import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useRedirectionToLoginOrHome } from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore, useThemeStore } from "@/utils/storage";
import { Button, Stack } from "@mui/material";
import { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

const SplashScreen = lazy(
    () => import("@/components/SplashScreen/SplashScreen")
);

export default function Home() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    const [] = useRedirectionToLoginOrHome();

    const setToken = useAuthStore((store) => store.setToken);
    const switchTheme = useThemeStore((store) => store.switchTheme);

    const { t } = useTranslation();

    const handleHomeButtonClick = () => {
        setToken(null);
    };

    const handleSwitchThemeButtonClick = () => {
        switchTheme();
    };

    if (showLoadingScreen) {
        return (
            <Suspense>
                <SplashScreen subtitle={t("slogan")} />
            </Suspense>
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
