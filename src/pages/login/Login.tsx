import { FullscreenLoading } from "@/components/FullscreenLoading";
import { useLoadingScreenCountdown } from "@/hooks/useLoadingScreenCountdown";
import { useRedirectionToLoginOrHome } from "@/hooks/useRedirectionToLoginOrHome";
import { useAuthStore } from "@/utils/storage";
import { Alert, AlertProps, Box, Button, Snackbar, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useMutation } from "@tanstack/react-query";
import { performLogin } from "@/services/apiService";

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

    const setToken = useAuthStore((state) => state.setToken);

    const loginMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: performLogin,
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
        return <FullscreenLoading />;
    } else {
        return (
            <Stack
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleLoginButtonClick}
                    disabled={loginMutation.isPending || loginMutation.isSuccess}
                >
                    Login page
                </Button>
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
