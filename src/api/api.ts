import axios from "axios";
import {PrfileType} from "../types/types";

const istanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ce423b60-21ff-4354-811d-8fc754c8d7ed"
    }
});

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return istanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return istanse.delete(`follow/${id}`)
    },
    Unfollow(id: number) {
        return istanse.post(`follow/${id}`)
    }
};

export const profileApi = {
    getProfile(userId: number | null) {
        return istanse.get(`profile/${userId ? userId : 8}`)
    },
    getStatus(userId: number) {
        return istanse.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return istanse.put(`profile/status`, {status: status})
    },
    savePhoto(photo: any) {
        const formData = new FormData;
        formData.append("image", photo);
        return istanse.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: PrfileType) {
        return istanse.put(`profile`, profile)
    }

};

export enum ResultCodeEnum {
    success = 0,
    error = 1,
    CaptchaIsRecuared = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const authApi = {
    me() {
        return istanse.get<MeResponseType>(`auth/me`).then(rez => rez.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return istanse.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return istanse.delete(`auth/login`)
    }
};

export const securityApi = {
    getCaptchaUrl() {
        return istanse.get(`security/get-captcha-url`)
    },
};