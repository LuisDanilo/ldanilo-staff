import MotivyLogo from "@/assets/motivy-logo-250-228.png";
import { lazy, Suspense } from "react";

const Box = lazy(() => import("@mui/material/Box"));

export default function Loader() {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        display: "flex",
                        height: "100vh",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#25255b",
                    }}
                >
                    ⏳
                </div>
            }
        >
            <Box className="loading">
                <img src={MotivyLogo} alt="⏳" width={"160px"} />
            </Box>
        </Suspense>
    );
}
