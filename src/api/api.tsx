import axios from "axios";
import {ProfileType} from "../Redux/profile-reducer";



const  instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2e8dfc3a-ddd8-4664-a36b-eb1d4d5042e7"
    }
})

export const  ProfileApi = {
    getProfile (userId: number | null) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: 'Content-type: multipart/form-data'
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
}


export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
       return  instance.post(`follow/${userId}`);
    },
    unfollow(userId: number) {
       return  instance.delete(`follow/${userId}`);
    },
    getProfile (userId: number | null) {
        console.warn(' Obsolete method. Please profileAPI object.')
       return ProfileApi.getProfile(userId)
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    me() {
        return instance.get(`security/get-captcha-url`);
    }
}



