import { useMediaQuery } from "@mui/material";

export function useFigmaBreakpoints() {
    const isWidth320OrLess = useMediaQuery("(max-width: 320px)");
    const isWidth414OrLess = useMediaQuery("(max-width: 414px)");
    const isWidth834OrLess = useMediaQuery("(max-width: 834px)");
    const isWidth1440OrLess = useMediaQuery("(max-width: 1440px)");

    return [isWidth320OrLess, isWidth414OrLess, isWidth834OrLess, isWidth1440OrLess]
}