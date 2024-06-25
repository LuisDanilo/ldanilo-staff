import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";

export function useFigmaBreakpoints() {
    const isPortrait = useMediaQuery("(orientation: portrait)");
    // 320px or less
    const widthLess320 = useMediaQuery("(max-width: 320px)");
    const heightLess320 = useMediaQuery("(max-height: 320px)");
    // 375px or less
    const widthLess375 = useMediaQuery("(max-width: 375px)");
    const heightLess375 = useMediaQuery("(max-height: 375px)");
    // 430px or less
    const widthLess430 = useMediaQuery("(max-width: 430px)");
    const heightLess430 = useMediaQuery("(max-height: 430px)");
    // 768px or less
    const widthLess768 = useMediaQuery("(max-width: 768px)");
    const heightLess768 = useMediaQuery("(max-height: 768px)");
    // 1280px or less
    const widthLess1280 = useMediaQuery("(max-width: 1280px)");
    const heightLess1280 = useMediaQuery("(max-height: 1280px)");
    // 1440px or less
    const widthLess1440 = useMediaQuery("(max-width: 1440px)");
    const heightLess1440 = useMediaQuery("(max-height: 1440px)");
    // 1920px or less
    const widthLess1920 = useMediaQuery("(max-width: 1920px)");
    const heightLess1920 = useMediaQuery("(max-height: 1920px)");

    const MobileS = useMemo(() => {
        if (isPortrait) {
            return widthLess320;
        } else {
            return heightLess320;
        }
    }, [widthLess320, heightLess320, isPortrait]);

    const MobileM = useMemo(() => {
        if (isPortrait) {
            return widthLess375;
        } else {
            return heightLess375;
        }
    }, [widthLess375, heightLess375, isPortrait]);

    const MobileL = useMemo(() => {
        if (isPortrait) {
            return widthLess430;
        } else {
            return heightLess430;
        }
    }, [widthLess430, heightLess430, isPortrait]);

    const Tablet = useMemo(() => {
        if (isPortrait) {
            return widthLess768;
        } else {
            return heightLess768;
        }
    }, [widthLess768, heightLess768, isPortrait]);

    const Laptop = useMemo(() => {
        if (isPortrait) {
            return widthLess1280;
        } else {
            return heightLess1280;
        }
    }, [widthLess1280, heightLess1280, isPortrait]);

    const LaptopL = useMemo(() => {
        if (isPortrait) {
            return widthLess1440;
        } else {
            return heightLess1440;
        }
    }, [widthLess1440, heightLess1440, isPortrait]);

    const Desktop4K = useMemo(() => {
        if (isPortrait) {
            return widthLess1920;
        } else {
            return heightLess1920;
        }
    }, [widthLess1920, heightLess1920, isPortrait]);

    return {
        MobileS,
        MobileM,
        MobileL,
        Tablet,
        Laptop,
        LaptopL,
        Desktop4K,
    };
}
