import {axiosServices} from "./axiosServices";

import {urls} from "../configs";

const userServices = {
    getAll: () => axiosServices.get(urls.users),
    create: (newUser) => axiosServices.post(urls.users, newUser),
    updateById: (id, data) => axiosServices.put(`${urls.users}/${id}`, data),
    deleteById: (id) => axiosServices.delete(`${urls.users}/${id}`)
}

export {
    userServices
}