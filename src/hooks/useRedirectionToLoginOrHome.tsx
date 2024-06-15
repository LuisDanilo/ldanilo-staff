import { useAuthStore } from "@/utils/storage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import get from "lodash.get";

export default function useRedirectionToLoginOrHome() {
    const navigate = useNavigate();
    const authToken = useAuthStore((state) => get(state, "authToken"));

    useEffect(() => {
        if (!authToken) {
            navigate("/login");
        } else {
            navigate("/");
        }
    }, [authToken]);

    return [];
}
