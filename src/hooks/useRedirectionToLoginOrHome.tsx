import { useAuthStore } from "@/utils/storage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useRedirectionToLoginOrHome() {
    const navigate = useNavigate();
    const authToken = useAuthStore((store) => store.authToken);

    useEffect(() => {
        if (!authToken) {
            navigate("/login");
        } else {
            navigate("/");
        }
    }, [authToken]);

    return [];
}
