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
            <Stack width={"100%"} height={"100%"} direction={"row"}>
                <Fade in={true}>
                    <Box
                        component={"img"}
                        src="./src/assets/login-image.jpg"
                        width={"70%"}
                        hidden={isDownMd}
                    />
                </Fade>
                <Stack
                    width={isDownMd ? "100%" : "30%"}
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={isBetweenSmAndMd ? 20 : 5}
                    spacing={2}
                >
                    <Stack
                        direction={"row"}
                        width={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box
                            component={"img"}
                            src="src/assets/motivy-logo-640.png"
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
