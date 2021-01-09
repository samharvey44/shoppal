import axios, { AxiosInstance } from "axios";

import { API, DEBUG, cupboard } from "../../config/globals";
import { Logger } from "./interceptors/Logger";

const api: AxiosInstance = axios.create({
    baseURL: API.PREFIX,
    headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const nextConfig = { ...config };

    let authTokens = cupboard.get(cupboard.KEYS.AUTH);

    if (authTokens) {
        try {
            const { token_type, access_token } = authTokens;

            if (token_type && access_token) {
                nextConfig.headers.Authorization = authTokens
                    ? `${token_type} ${access_token}`
                    : "";
            }
        } catch (e) {}
    }

    return nextConfig;
});

// Add HTTP Logging if in the dev environment
if (DEBUG) {
    api.interceptors.response.use(Logger.success, Logger.error);
}

export default api;
