import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";
import "@/nunito.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/utils/i18n"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition="top-left"
            />
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
