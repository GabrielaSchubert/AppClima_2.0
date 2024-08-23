import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?key=4d1df30e40fd4904975124018242208&lang=pt&q=',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getWeather(local){
        return apiClient.get(local)
    },

    displayData(dados){
        var d = dados.value

        document.querySelector('.cidade').innerHTML = "Tempo em " + d.location.name
        document.querySelector('.pais').innerHTML = d.location.country
        document.querySelector('.dataHora').innerHTML = "Data e hora: " + d.location.localtime
        document.querySelector('.umidade').innerHTML = "Umidade: " + d.current.humidity + "%"
        document.querySelector('.texto-previsao').innerHTML = d.current.condition.text
        document.querySelector('.img-previsao').src = "https:" + d.current.condition.icon
        document.querySelector('.temp').innerHTML = d.current.temp_c + "°"
        document.querySelector('.vento').innerHTML = d.current.wind_kph + "km/h"
    }
}