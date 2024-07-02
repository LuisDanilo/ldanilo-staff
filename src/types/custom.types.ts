import { GridProps, Theme } from "@mui/material";

export interface MyGridProps extends Pick<GridProps, "columns" | "columnSpacing" | "paddingX"> { }

export interface UseGridParamsReturn {
    gridProps: MyGridProps
    breakpoints: {
        xs: boolean
        sm: boolean
        md: boolean
        lg: boolean
        xl: boolean
    }
    theme: Theme
}