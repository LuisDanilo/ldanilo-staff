import { useMediaQuery } from "@mui/material";

export function useFigmaBreakpoints() {
    // 320px or less
    const LEQMobileS = useMediaQuery("(max-width: 320px)");
    // 375px or less
    const LEQMobileM = useMediaQuery("(max-width: 375px)");
    // 430px or less
    const LEQMobileL = useMediaQuery("(max-width: 430px)");
    // 768px or less
    const LEQTablet = useMediaQuery("(max-width: 768px)");
    // 1280px or less
    const LEQLaptop = useMediaQuery("(max-width: 1280px)");
    // 1440px or less
    const LEQLaptopL = useMediaQuery("(max-width: 1440px)");
    // 1920px or less
    const LEQDesktop4K = useMediaQuery("(max-width: 1920px)");

    return {
        LEQMobileS,
        LEQMobileM,
        LEQMobileL,
        LEQTablet,
        LEQLaptop,
        LEQLaptopL,
        LEQDesktop4K
    };
}
