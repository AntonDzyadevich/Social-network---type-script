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
    }
}



// export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
//    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
//         &count=${pageSize}`,
//         {
//             withCredentials: true
//         })
//        .then(response => response.data)
// }



