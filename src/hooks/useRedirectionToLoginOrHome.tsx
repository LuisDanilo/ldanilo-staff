import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useRedirectionToLoginOrHome() {
    const navigate = useNavigate();

    // TODO Should verify if token exists and token expiration date
    const authenticated = false;

    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
        } else {
            navigate("/");
        }
    }, []);

    return [];
}
