import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?key=4d1df30e40fd4904975124018242208&q=',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getWeather(){
        return apiClient.get("London")
    }
}