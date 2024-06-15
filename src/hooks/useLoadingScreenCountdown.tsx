import { useEffect, useState } from "react";

export function useLoadingScreenCountdown() {
    
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setShowLoadingScreen(false);
        }, 1500);
    }, []);

    return [showLoadingScreen]
}