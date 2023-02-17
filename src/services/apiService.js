import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./authService";


const apiService = axios.create({baseURL});

const history = createBrowserHistory();
apiService.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        const access = authService.getAccessToken()
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

let IsRefreshing = false
apiService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();
        if (error.response?.status === 401 && refresh && !IsRefreshing) {
            IsRefreshing = true

            try {
                await authService.refresh(refresh);
            } catch (e) {
                authService.deleteTokens()
                history.replace('/login?expSession=true')
            }
            IsRefreshing = false
            return apiService(error.config)
        }
        return Promise.reject(error)
    }
)

export {
    apiService,
    history
}