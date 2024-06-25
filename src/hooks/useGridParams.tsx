import { useMemo } from "react";
import { useBreakpoints } from "@/hooks/useBreakpoints";

export function useGridParams() {
    const { xs, sm, md, lg, xl, theme } = useBreakpoints();

    const gridProps = useMemo(() => {
        // Default
        let props = {
            columns: 4,
            columnSpacing: 1.5, // figma gutter
            paddingX: 1.5, // figma margin
        };
        // Its important to evaluate from bigger to smaller
        if (xl) {
            props = {
                columns: 12,
                columnSpacing: 3, // figma gutter
                paddingX: 32, // figma margin
            };
        } else if (lg) {
            props = {
                columns: 12,
                columnSpacing: 3, // figma gutter
                paddingX: 3, // figma margin
            };
        } else if (md) {
            props = {
                columns: 8,
                columnSpacing: 2, // figma gutter
                paddingX: 4, // figma margin
            };
        }
        // else {
        //     console.log("GridProps: XS | SM");
        // }
        return props;
    }, [xs, sm, md, lg, xl]);

    return { gridProps, breakpoints: { xs, sm, md, lg, xl }, theme };
}
