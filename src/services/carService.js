import {apiService} from "./apiService";
import {urls} from "../configs";

const carService = {
    getAll: () => apiService.get(urls.cars.cars),
    create: (data) => apiService.post(urls.cars.cars, data),
    updateById: (id, data) => apiService.put(urls.cars.getById(id), data),
    deleteById: (id) => apiService.delete(urls.cars.getById(id))
}

export {
    carService
}