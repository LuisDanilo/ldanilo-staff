import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useAuthStore, useThemeStore, useUserStore } from "@/utils/storage";
import { AlertProps } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SplashScreen = lazy(
    () => import("@/components/SplashScreen/SplashScreen")
);

const Button = lazy(() => import("@mui/material/Button"));
const IconButton = lazy(() => import("@mui/material/IconButton"));
const Typography = lazy(() => import("@mui/material/Typography"));
const ModeNight = lazy(() => import("@mui/icons-material/ModeNight"));
const WbSunny = lazy(() => import("@mui/icons-material/WbSunny"));
const Done = lazy(() => import("@mui/icons-material/Done"));
const Dialog = lazy(() => import("@mui/material/Dialog"));
const Snackbar = lazy(() => import("@mui/material/Snackbar"));
const Alert = lazy(() => import("@mui/material/Alert"));
const Box = lazy(() => import("@mui/material/Box"));

const setTokenTimeout = 1000;

interface SnackbarProps extends Pick<AlertProps, "severity"> {
    open: boolean;
    message: string;
    onClose: () => void;
}

function LoginStatusSnackbar(props: Readonly<SnackbarProps>) {
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
                icon={<Done sx={{ color: "#FFF" }} />}
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
    const setToken = useAuthStore((store) => store.setToken);
    const authToken = useAuthStore((store) => store.authToken);

    const setLanguage = useUserStore((store) => store.setLanguage);
    const language = useUserStore((store) => store.language);

    const switchTheme = useThemeStore((store) => store.switchTheme);
    const currentTheme = useThemeStore((store) => store.theme);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [showLoadingScreen] = useLoadingScreenCountdown();

    const loginMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: async (email: string) => {
            const { performLogin } = await import("@/services/apiService");
            return performLogin(email);
        },
        onSuccess: (data) => {
            if (data?.token) {
                setTimeout(() => {
                    setToken(data.token);
                    navigate("/", { state: { showLoadingScreen: true } });
                }, setTokenTimeout);
            }
        },
    });

    const handleLoginButtonClick = () => {
        loginMutation.mutate("ldanilo@motivy.co");
    };

    const handleSwitchThemeButtonClick = () => {
        switchTheme();
    };

    const handleChangeLanguageButtonClick = () => {
        language === "es" ? setLanguage("en") : setLanguage("es");
    };

    if (showLoadingScreen) {
        return <SplashScreen subtitle={t("slogan")} />;
    } else if (authToken) {
        return (
            <Dialog open={true}>
                Ya tienes una sesion
                <Button
                    onClick={() => navigate("/")}
                    variant={"contained"}
                    color={"primary"}
                >
                    Llevame a home
                </Button>
            </Dialog>
        );
    } else {
        return (
            <>
                <Typography variant="body1">{t("slogan")}</Typography>
                <Typography variant="body1">
                    Idioma actual: {language}
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleChangeLanguageButtonClick}
                >
                    {t("changeLanguage")}
                </Button>
                <Button variant={"contained"} onClick={handleLoginButtonClick}>
                    Login
                </Button>
                <IconButton onClick={handleSwitchThemeButtonClick}>
                    {currentTheme === "light" ? <ModeNight /> : <WbSunny />}
                </IconButton>
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
            </>
        );
    }
}
