import MotivyLogo from "@/assets/motivy-logo-250-228.png";
import { Suspense } from "react";
import { Box, Stack } from "@mui/material";

export default function Loader() {
    return (
        <Suspense
            fallback={
                <Stack
                    height={"100vh"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={"#25255B"}
                >
                    ⏳
                </Stack>
            }
        >
            <Box id={"loader-main-box"} className={"loading"}>
                <img src={MotivyLogo} alt="⏳" width={"160px"} />
            </Box>
        </Suspense>
    );
}
