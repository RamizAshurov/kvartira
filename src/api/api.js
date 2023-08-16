import axios from 'axios'

const api_key = "uwhKV9WGwjQYNg0b0PJ809V82wzQKnsKm0wBnjUA"

const axiosInstance = axios.create({
    baseURL: "https://api.nasa.gov/neo/rest/v1"
})

const fetchAsteroids = async (date) => {
    const response = await axiosInstance.get("/feed", {
        params: {
            start_date: date,
            end_date: date,
            api_key
        }
    })
    return response.data.near_earth_objects[date]
}

const fetchAsteroidDetails = async (asteroid_id) => {
    const response = await axiosInstance.get(`/neo/${asteroid_id}`, {
        params: {
            api_key
        }
    })
    return response.data
}

export { fetchAsteroidDetails, fetchAsteroids }