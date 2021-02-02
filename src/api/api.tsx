import axios from "axios";


const  instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2e8dfc3a-ddd8-4664-a36b-eb1d4d5042e7"
    }
})


export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage} &count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
       return  instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number) {
       return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}






