import { useEffect, useState } from "react";

export function useLoadingScreenCountdown() {
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoadingScreen(false);
        }, 1500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return [showLoadingScreen];
}
