import { useMediaQuery } from "@mui/material";

export function useFigmaBreakpoints() {
    // 320px or less
    const isMobileSOrLess = useMediaQuery("(max-width: 320px)");
    // 375px or less
    const isMobileMOrLess = useMediaQuery("(max-width: 375px)");
    // 430px or less
    const isMobileLOrLess = useMediaQuery("(max-width: 430px)");
    // 1280px or less
    const isLaptopOrLess = useMediaQuery("(max-width: 1280px)");
    // 1440px or less
    const isLaptopLOrLess = useMediaQuery("(max-width: 1440px)");
    // 1920px or less
    const isDesktop4KOrLess = useMediaQuery("(max-width: 1920px)");

    return [isMobileSOrLess, isMobileMOrLess, isMobileLOrLess, isLaptopOrLess, isLaptopLOrLess, isDesktop4KOrLess]
}