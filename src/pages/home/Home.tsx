import { FullscreenLoading } from "@/components/FullscreenLoading";
import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useRedirectionToLoginOrHome } from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore, useThemeStore } from "@/utils/storage";
import { Button, Stack } from "@mui/material";

export default function Home() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    const [] = useRedirectionToLoginOrHome();

    const setToken = useAuthStore((state) => state.setToken);
    const switchTheme = useThemeStore((state) => state.switchTheme);

    const handleHomeButtonClick = () => {
        setToken(null);
    };

    const handleSwitchThemeButtonClick = () => {
        switchTheme();
    };

    if (showLoadingScreen) {
        return <FullscreenLoading />;
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
