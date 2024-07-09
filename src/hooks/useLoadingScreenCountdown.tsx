import { useEffect, useState } from "react";

export function useLoadingScreenCountdown() {
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        timeout = setTimeout(() => {
            setShowLoadingScreen(false);
        }, 1500);

        return () => {
            timeout && clearTimeout(timeout);
        };
    }, []);

    return [showLoadingScreen];
}
