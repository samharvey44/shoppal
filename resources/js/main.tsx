import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";
import React from "react";

import AuthGate from "./components/gates/AuthGate";
import Router from "./router";

const Main: React.FC = () => {
    const anchorOrigin = {
        horizontal: "right" as const,
        vertical: "bottom" as const,
    };

    return (
        <BrowserRouter>
            <RecoilRoot>
                <SnackbarProvider maxSnack={3} anchorOrigin={anchorOrigin}>
                    <AuthGate>
                        {(ready) => (ready ? <Router /> : <p>loading...</p>)}
                    </AuthGate>
                </SnackbarProvider>
            </RecoilRoot>
        </BrowserRouter>
    );
};

export default Main;
