import {axiosServices} from "./axiosServices";

import {urls} from "../configs";

const commentsService = {
    getAll: () => axiosServices.get(urls.comments),
    create: (newUser) => axiosServices.post(urls.comments, newUser),
    updateById: (id, data) => axiosServices.put(`${urls.comments}/${id}`, data),
    deleteById: (id) => axiosServices.delete(`${urls.comments}/${id}`)
}

export {
    commentsService
}