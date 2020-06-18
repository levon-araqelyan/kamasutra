import * as axios from "axios";

const istanse = axios.create({
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers: {"API-KEY":"ce423b60-21ff-4354-811d-8fc754c8d7ed"
    }
})

export const usersApi = {
    getUsers(currentPage,pageSize){
        return  istanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id){
        return  istanse.delete(`follow/${id}`)
    },
    Unfollow(id){
        return  istanse.post(`follow/${id}`)
    }
}

export const profileApi = {
    getProfile(userId){
        return istanse.get(`profile/${userId ? userId : 8}`)
    },
    getStatus(userId){
        return istanse.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return istanse.put(`profile/status`,{status:status})
    },

}

export const authApi = {
    me(){
        return istanse.get(`auth/me`)
    }
}