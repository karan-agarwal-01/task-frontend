import axios from "axios";

const BASE_URL = "https://task-backend-chi.vercel.app/api";

const Axios = axios.create({
    baseURL: BASE_URL,
});

Axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const registration = async (data) => {
    try {
        const res = await Axios.post(`/auth/register`, data)
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message)
    }
}

export const login = async (data) => {
    try {
        const res = await Axios.post(`/auth/login`, data)
        localStorage.setItem("accessToken", res.data.token)
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message)
    }
}

export const saveStep1 = async (data) => {
    try {
        const res = await Axios.post(`/onboarding/personal`, data)
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message)
    }
}

export const saveStep2 = async (data) => {
    try {
        const res = await Axios.post(`/onboarding/links`, data)
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message)
    }
}

export const saveStep3 = async (data) => {
    try {
        const res = await Axios.post(`/onboarding/professional`, data)
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message)
    }
}

export const completeOnboarding = async (data) => {
    try {
        const res = await Axios.post(`/onboarding/complete`, data)
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message)
    }
}

export const fetchMe = async () => {
    try {
        const res = await Axios.get(`/onboarding/me`)
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message)
    }
}