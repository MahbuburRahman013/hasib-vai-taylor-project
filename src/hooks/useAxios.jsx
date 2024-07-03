import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

function useAxios() {
    return axiosPublic
}

export default useAxios