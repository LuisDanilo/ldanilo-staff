import { FullscreenLoading } from "@/components/FullscreenLoading";
import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import useRedirectionToLoginOrHome from "@/hooks/useRedirectionToLoginOrHome";
import { Button } from "@mui/material";

export default function Home() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    useRedirectionToLoginOrHome();

    if (showLoadingScreen) {
        return <FullscreenLoading />;
    } else {
        return (
            <Button color="primary" variant="contained">
                Hello Im Home
            </Button>
        );
    }
}
