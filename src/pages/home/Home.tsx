import { FullscreenLoading } from "@/components/FullscreenLoading";
import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import useRedirectionToLoginOrHome from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore } from "@/utils/storage";
import { Button } from "@mui/material";
import get from "lodash.get";
import invoke from "lodash.invoke";

export default function Home() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    useRedirectionToLoginOrHome();

    const setToken = useAuthStore((state) => get(state, "setToken"));

    const handleHomeButtonClick = () => {
        invoke({setToken}, "setToken", null)
    };

    if (showLoadingScreen) {
        return <FullscreenLoading />;
    } else {
        return (
            <Button
                color="primary"
                variant="contained"
                onClick={handleHomeButtonClick}
            >
                Hello Im Home
            </Button>
        );
    }
}
