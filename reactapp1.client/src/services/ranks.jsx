import axios from "axios"

const baseUrl = "https://localhost:7089/api/item"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const getByType = (type) => axios.get(`${baseUrl}/bytype/${type}`).then(response => response.data)

const getById = (id) => axios.get(`${baseUrl}/byid/${id}`).then(response => response.data)

const ranksAPI = {
    getAll,
    getById,
    getByType
}
export default ranksAPI;