import {axiosServices} from "./axiosServices";

const userService = {
    getAll: ()=>axiosServices.get('/users'),
    getById: (id)=>axiosServices.get(`/users/${id}`)
}
export {
    userService
}