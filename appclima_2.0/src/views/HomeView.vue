<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'
import WeatherServices from '@/services/WeatherServices';

const weatherData = ref(null)
onMounted(() => {
  WeatherServices.getWeather('Sao Paulo')
    .then((response) => {
      weatherData.value = response.data

      if (weatherData != null) {
        WeatherServices.displayData(weatherData)
      }
      

    })
    .catch((error) => {
      console.log(error)
    })
})
</script>


    
<template>
  <main>
    <div class="container-principal">
      <a>
        
      </a>
      <div class="media-box">
        <div class="info">
          <div>
            <RouterLink :to="{ name: 'show', query: { local: 'Sao Paulo'} }" id="link-cidade">
              <h2 class="cidade">
                Tempo em São Paulo
              </h2>
            </RouterLink>
            
            <p class="pais">São Paulo</p>
            <p class="dataHora"> Dia: 9/04/2024
              horas: 9:14
            </p>
          </div>
          <div>
            <p class="umidade clima">Umidade: 76%</p>
          </div>
        </div>
        <div class="info clima">
          <div class="menor-box">
            <img class="img-previsao"
              alt="icone-info-tempo"
              src="https://cdn.weatherapi.com/weather/64x64/night/389.png"
            />
          </div>
          <p class="texto-previsao">Chuva-forte</p>
          <p class="temp">21°C</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />   
      </div>
    </div>
  </main>

</template>

<!-- <style scoped>
  .container-principal {
    align-items: center;
  }

</style> -->