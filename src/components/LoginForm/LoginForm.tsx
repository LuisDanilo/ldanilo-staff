import { useGridParams } from "@/hooks/useGridParams";
import {
    Box,
    Grid,
    GridProps,
    Paper,
    TypographyProps,
} from "@mui/material";
import { UseGridParamsReturn } from "@/types/custom.types";
import { useMemo } from "react";

interface ResponsiveProps {
    header: Pick<GridProps, "height"> &
        Pick<TypographyProps, "variant" | "fontSize"> & {
            customFontSize: boolean;
        };
}

interface HeaderProps
    extends Pick<UseGridParamsReturn, "gridProps">,
        Pick<ResponsiveProps, "header"> {}

function Header({ gridProps, header }: Readonly<HeaderProps>) {
    const { height } = header;

    return (
        <Box width={"100vw"}>
            <Grid container {...gridProps} bgcolor={"#25255b"} height={height}>
                <Grid item={true} xs={1} sm={1} md={1} lg={8} xl={8}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={4} xl={4}>
                    <Paper>1</Paper>
                </Grid>
                {/* <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    3
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    4
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    5
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    6
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    7
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    8
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    9
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    10
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    11
                </Grid>
                <Grid item={true} xs={1} sm={1} md={1} lg={1} xl={1}>
                    12
                </Grid> */}
                {/* <Grid item xs={2} sm={2} height={"100%"}>
                    <Box component={"img"} src={MotivyLogo} width={"100%"} />
                </Grid>
                <Grid
                    item
                    xs={2}
                    sm={2}
                    display={"flex"}
                    alignItems={"center"}
                    height={"100%"}
                >
                    <Typography
                        variant={variant}
                        width={"100%"}
                        {...(customFontSize ? { fontSize } : {})}
                        overflow={"hidden"}
                        textAlign={"center"}
                    >
                        Motivy
                    </Typography>
                </Grid> */}
            </Grid>
        </Box>
    );
}

export default function LoginForm() {
    const {
        gridProps,
        breakpoints: { xs, sm, md, lg, xl },
    } = useGridParams();

    const responsiveProps = useMemo<ResponsiveProps>(() => {
        let respProps: ResponsiveProps = {
            header: {
                height: "142px",
                variant: "h3",
                fontSize: 44,
                customFontSize: true,
            },
        };
        // TODO Evaluate breakpoints to return propper responsive settings
        return respProps;
    }, [xs, sm, md, lg, xl]);

    return <Header gridProps={gridProps} header={responsiveProps.header} />;
}
