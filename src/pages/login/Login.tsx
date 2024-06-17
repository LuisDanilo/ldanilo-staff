import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useRedirectionToLoginOrHome } from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore } from "@/utils/storage";
import {
    Alert,
    AlertProps,
    Box,
    Button,
    Fade,
    Snackbar,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useMutation } from "@tanstack/react-query";
import KeyIcon from "@mui/icons-material/Key";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import GoogleIcon from "@mui/icons-material/Google";
import { useDynamicTheme } from "@/hooks/useDynamicTheme";
import { Suspense, lazy } from "react";
import loginImageDesktop from "@/assets/login-image.jpg";
import motivyLogo640 from "@/assets/motivy-logo-640.png";

const FullscreenLoading = lazy(() => import("@/components/FullscreenLoading"));

const setTokenTimeout = 1000;

interface SnackbarProps extends Pick<AlertProps, "severity"> {
    open: boolean;
    message: string;
    onClose: () => void;
}

function LoginStatusSnackbar(props: SnackbarProps) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={props.open}
            autoHideDuration={setTokenTimeout - 100}
            onClose={props.onClose}
        >
            <Alert
                severity={props.severity}
                variant="filled"
                // Default icon vertical align is weird, I preffer using this icon
                icon={<DoneIcon sx={{ color: "#FFF" }} />}
            >
                {/* 
                    verticalAlign: super and display: inline-box  were used
                    to fix a weird alignment of Alert text.
                    With this fix the text is more centered vertically.
                */}
                <Box
                    display={"inline-block"}
                    sx={{ verticalAlign: "super", color: "#FFF" }}
                >
                    {props.message}
                </Box>
            </Alert>
        </Snackbar>
    );
}

export default function Login() {
    const [showLoadingScreen] = useLoadingScreenCountdown();
    const [] = useRedirectionToLoginOrHome();
    const [theme] = useDynamicTheme();
    const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
    const isBetweenSmAndMd = useMediaQuery(
        theme.breakpoints.between("sm", "md")
    );
    // If true Viewport height is smaller than viewport width
    // Else Viewport height is greater than or equal to viewport width
    const isVhSmaller = useMediaQuery("(max-aspect-ratio: 1/1)");

    const setToken = useAuthStore((state) => state.setToken);

    const loginMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: async (email: string) => {
            const { performLogin } = await import("@/services/apiService");
            return performLogin(email);
        },
        onSuccess: (data) => {
            if (!!data) {
                setTimeout(() => setToken(data.token), setTokenTimeout);
            }
        },
    });

    const handleLoginButtonClick = () => {
        loginMutation.mutate("ldanilo@motivy.co");
    };

    if (showLoadingScreen) {
        return (
            <Suspense>
                <FullscreenLoading />
            </Suspense>
        );
    } else {
        return (
            <Stack
                width={"100%"}
                height={"100%"}
                direction={"row"}
                overflow={"hidden"}
            >
                <Fade in={true}>
                    <Box
                        component={"img"}
                        src={loginImageDesktop}
                        width={"60%"}
                        hidden={isDownMd}
                    />
                </Fade>
                <Stack
                    width={isDownMd ? "100%" : "40%"}
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={isVhSmaller ? "center" : "flex-start"}
                    margin={isBetweenSmAndMd ? "0 10rem" : "0 3rem"}
                    spacing={2}
                    padding={"2rem 0"}
                    overflow={"scroll"}
                >
                    <Stack
                        direction={"row"}
                        width={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box
                            component={"img"}
                            src={motivyLogo640}
                            alt="motivy-logo"
                            width={"25%"}
                        />
                        <Typography variant="h3">Motivy</Typography>
                    </Stack>
                    <Stack justifyContent={"center"} alignItems={"center"}>
                        <Typography variant="h5">Ingreso</Typography>
                        <Typography variant="h6">
                            Usa tu cuenta de Motivy
                        </Typography>
                    </Stack>
                    <TextField
                        size="small"
                        fullWidth
                        placeholder="youremail@motivy.co"
                        variant="outlined"
                        label="Correo"
                        disabled={
                            loginMutation.isPending || loginMutation.isSuccess
                        }
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleLoginButtonClick}
                        disabled={
                            loginMutation.isPending || loginMutation.isSuccess
                        }
                        fullWidth
                    >
                        Continuar
                    </Button>
                    <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        width={"100%"}
                        spacing={1}
                    >
                        <Typography>o</Typography>
                        <Button
                            color="secondary"
                            variant="outlined"
                            disabled={true}
                            fullWidth
                        >
                            <Stack
                                direction={"row"}
                                justifyContent={"center"}
                                width={"100%"}
                                spacing={3}
                            >
                                <KeyIcon />
                                <Typography fontSize={"inherit"}>
                                    Ingresar con contraseña
                                </Typography>
                            </Stack>
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            disabled={true}
                            fullWidth
                        >
                            <Stack
                                direction={"row"}
                                justifyContent={"center"}
                                width={"100%"}
                                spacing={3}
                            >
                                <GoogleIcon />
                                <Typography fontSize={"inherit"}>
                                    Continuar con Google
                                </Typography>
                            </Stack>
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            disabled={true}
                            fullWidth
                        >
                            <Stack
                                direction={"row"}
                                justifyContent={"center"}
                                width={"100%"}
                                spacing={3}
                            >
                                <MicrosoftIcon />
                                <Typography fontSize={"inherit"}>
                                    Continuar con Microsoft
                                </Typography>
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>
                {/* Snackbars (aka Toasts) */}
                <LoginStatusSnackbar
                    open={loginMutation.isSuccess}
                    severity="success"
                    message="You are loged in! 😀"
                    onClose={loginMutation.reset}
                />
                <LoginStatusSnackbar
                    open={loginMutation.isError}
                    severity="error"
                    message="Something went wrong 😔"
                    onClose={loginMutation.reset}
                />
            </Stack>
        );
    }
}
