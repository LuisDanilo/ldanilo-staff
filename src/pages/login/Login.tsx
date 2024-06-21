import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useRedirectionToLoginOrHome } from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore, useUserStore } from "@/utils/storage";
import {
    Button,
    Typography, // Alert,
    // AlertProps,
    // Box,
    // Button,
    // Fade,
    // Snackbar,
    // Stack,
    // TextField,
    // Typography,
} from "@mui/material";
// import DoneIcon from "@mui/icons-material/Done";
import { useMutation } from "@tanstack/react-query";
// import KeyIcon from "@mui/icons-material/Key";
// import MicrosoftIcon from "@mui/icons-material/Microsoft";
// import GoogleIcon from "@mui/icons-material/Google";
import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import loginImageDesktop from "@/assets/login-image.jpg";
// import motivyLogo640 from "@/assets/motivy-logo-640.png";

const SplashScreen = lazy(
    () => import("@/components/SplashScreen/SplashScreen")
);

const setTokenTimeout = 1000;

// interface SnackbarProps extends Pick<AlertProps, "severity"> {
//     open: boolean;
//     message: string;
//     onClose: () => void;
// }

// function LoginStatusSnackbar(props: SnackbarProps) {
//     return (
//         <Snackbar
//             anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//             open={props.open}
//             autoHideDuration={setTokenTimeout - 100}
//             onClose={props.onClose}
//         >
//             <Alert
//                 severity={props.severity}
//                 variant="filled"
//                 // Default icon vertical align is weird, I preffer using this icon
//                 icon={<DoneIcon sx={{ color: "#FFF" }} />}
//             >
//                 {/*
//                     verticalAlign: super and display: inline-box  were used
//                     to fix a weird alignment of Alert text.
//                     With this fix the text is more centered vertically.
//                 */}
//                 <Box
//                     display={"inline-block"}
//                     sx={{ verticalAlign: "super", color: "#FFF" }}
//                 >
//                     {props.message}
//                 </Box>
//             </Alert>
//         </Snackbar>
//     );
// }

export default function Login() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    const [] = useRedirectionToLoginOrHome();
    // const [theme] = useDynamicTheme();
    // const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
    // If true Viewport height is smaller than viewport width
    // Else Viewport height is greater than or equal to viewport width
    // const isVhSmaller = useMediaQuery("(max-aspect-ratio: 1/1)");

    const setToken = useAuthStore((state) => state.setToken);
    const setLanguage = useUserStore((state) => state.setLanguage);
    const language = useUserStore((state) => state.language);

    const { t } = useTranslation();

    const loginMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: async (email: string) => {
            const { performLogin } = await import("@/services/apiService");
            return performLogin(email);
        },
    });

    // const handleLoginButtonClick = () => {
    //     loginMutation.mutate("ldanilo@motivy.co");
    // };

    useEffect(() => {
        let timeoutID: NodeJS.Timeout;
        if (loginMutation.data) {
            const token = loginMutation.data.token;
            timeoutID = setTimeout(() => setToken(token), setTokenTimeout);
        }
        return () => {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }
        };
    }, [loginMutation.data]);

    if (showLoadingScreen) {
        return (
            <Suspense>
                <SplashScreen subtitle={t("slogan")} />
            </Suspense>
        );
    } else {
        return (
            <>
                <Typography variant="body1">{t("slogan")}</Typography>
                <Typography variant="body1">
                    Idioma actual: {language}
                </Typography>
                <Button
                    onClick={() => {
                        language === "es"
                            ? setLanguage("en")
                            : setLanguage("es");
                    }}
                >
                    Cambiar idioma
                </Button>
            </>
        );
        // return (
        //     <Stack
        //         width={"100%"}
        //         height={"100%"}
        //         direction={"row"}
        //         overflow={"hidden"}
        //     >
        //         <Fade in={true}>
        //             <Box
        //                 component={"img"}
        //                 src={loginImageDesktop}
        //                 width={"70%"}
        //                 hidden={isDownMd || isVhSmaller}
        //             />
        //         </Fade>
        //         <Stack
        //             width={isDownMd || isVhSmaller ? "100%" : "30%"}
        //             height={"100%"}
        //             alignItems={"center"}
        //             justifyContent={
        //                 isVhSmaller || !isDownMd ? "center" : "flex-start"
        //             }
        //             margin={"0rem 3rem"}
        //             padding={"3rem 0"}
        //             spacing={2}
        //             sx={{
        //                 overflowY: "scroll",
        //                 scrollbarColor: "transparent transparent",
        //             }}
        //         >
        //             <Stack
        //                 direction={"row"}
        //                 width={"100%"}
        //                 justifyContent={"center"}
        //                 alignItems={"center"}
        //             >
        //                 <Box
        //                     component={"img"}
        //                     src={motivyLogo640}
        //                     alt="motivy-logo"
        //                     width={"25%"}
        //                 />
        //                 <Typography variant="h3">Motivy</Typography>
        //             </Stack>
        //             <Stack justifyContent={"center"} alignItems={"center"}>
        //                 <Typography variant="h5">Ingreso</Typography>
        //                 <Typography variant="h6">
        //                     Usa tu cuenta de Motivy
        //                 </Typography>
        //             </Stack>
        //             <TextField
        //                 size="small"
        //                 fullWidth
        //                 placeholder="youremail@motivy.co"
        //                 variant="outlined"
        //                 label="Correo"
        //                 disabled={
        //                     loginMutation.isPending || loginMutation.isSuccess
        //                 }
        //             />
        //             <Button
        //                 color="primary"
        //                 variant="contained"
        //                 onClick={handleLoginButtonClick}
        //                 disabled={
        //                     loginMutation.isPending || loginMutation.isSuccess
        //                 }
        //                 fullWidth
        //             >
        //                 Continuar
        //             </Button>
        //             <Stack
        //                 alignItems={"center"}
        //                 justifyContent={"center"}
        //                 width={"100%"}
        //                 spacing={1}
        //             >
        //                 <Typography>o</Typography>
        //                 <Button
        //                     color="secondary"
        //                     variant="outlined"
        //                     disabled={true}
        //                     fullWidth
        //                 >
        //                     <Stack
        //                         direction={"row"}
        //                         justifyContent={"center"}
        //                         width={"100%"}
        //                         spacing={3}
        //                     >
        //                         <KeyIcon />
        //                         <Typography fontSize={"inherit"}>
        //                             Ingresar con contraseña
        //                         </Typography>
        //                     </Stack>
        //                 </Button>
        //                 <Button
        //                     color="secondary"
        //                     variant="outlined"
        //                     disabled={true}
        //                     fullWidth
        //                 >
        //                     <Stack
        //                         direction={"row"}
        //                         justifyContent={"center"}
        //                         width={"100%"}
        //                         spacing={3}
        //                     >
        //                         <GoogleIcon />
        //                         <Typography fontSize={"inherit"}>
        //                             Continuar con Google
        //                         </Typography>
        //                     </Stack>
        //                 </Button>
        //                 <Button
        //                     color="secondary"
        //                     variant="outlined"
        //                     disabled={true}
        //                     fullWidth
        //                 >
        //                     <Stack
        //                         direction={"row"}
        //                         justifyContent={"center"}
        //                         width={"100%"}
        //                         spacing={3}
        //                     >
        //                         <MicrosoftIcon />
        //                         <Typography fontSize={"inherit"}>
        //                             Continuar con Microsoft
        //                         </Typography>
        //                     </Stack>
        //                 </Button>
        //             </Stack>
        //         </Stack>
        //         {/* Snackbars (aka Toasts) */}
        //         <LoginStatusSnackbar
        //             open={loginMutation.isSuccess}
        //             severity="success"
        //             message="You are loged in! 😀"
        //             onClose={loginMutation.reset}
        //         />
        //         <LoginStatusSnackbar
        //             open={loginMutation.isError}
        //             severity="error"
        //             message="Something went wrong 😔"
        //             onClose={loginMutation.reset}
        //         />
        //     </Stack>
        // );
    }
}
