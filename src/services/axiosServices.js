import axios from "axios";

const axiosServices = axios.create({baseURL:'https://jsonplaceholder.typicode.com/'})

export {axiosServices}