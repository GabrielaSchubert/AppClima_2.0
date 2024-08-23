<script setup>
  import { ref, onMounted } from 'vue'
  import WeatherServices from '@/services/WeatherServices'; 
  

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let local = params.local

  console.log(local)
  const weatherData = ref(null)
  onMounted(() => {
    WeatherServices.getWeather(local)
      .then((response) => {
        weatherData.value = response.data
        if (weatherData != null) {
          console.log(weatherData.value)
          WeatherServices.displayData(weatherData)
        }
      

      })
      .catch((error) => {
        console.log(error)
      })
  })
</script>
<template>
  <section class="grade-grande">
    <section class="info-section">
      <h1 class="cidade" style="text-align: center">
        Previsão do Tempo Joinville - SC
      </h1>
      <div class="new-box" style="text-align: center">
        <span class="dataHora">10:50</span>
        <div class="info-display">
          <div class="temperatura">
            <p class="temp">21°C</p>
            <img class="img-previsao"
              alt="icone-info-tempo"
              src="https://cdn.weatherapi.com/weather/64x64/night/389.png"
            />
            <p class="texto-previsao">Chuva-forte</p>
          </div>
          <div>
            <p class="umidade">Umidade: 76%</p>
            <p class="vento">3km/h</p>
          </div>
        </div>
      </div>
    </section>
  </section>
  <ul class="days-list">
      <li>
        <img class="imagem1" src="https://cdn.weatherapi.com/weather/64x64/night/113.png" alt="imagem-temp" />
        <span class="day1"></span>
        <span class="day-tamp1">23C°</span>
        <span class="day-tamp1-min">23C°</span>
      </li>
      <li>
        <img class="imagem2" src="https://cdn.weatherapi.com/weather/64x64/night/113.png" alt="imagem-temp" />
        <span class="day2"></span>
        <span class="day-tamp2">23C°</span>
        <span class="day-tamp2-min">23C°</span>
      </li>
      <li>
        <img class="imagem3" src="https://cdn.weatherapi.com/weather/64x64/night/113.png" alt="imagem-temp" />
        <span class="day3"></span>
        <span class="day-tamp3">23C°</span>
        <span class="day-tamp3-min">23C°</span>
      </li>
    </ul>
</template>

<style>

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    section .info-section {
        margin-left: auto;
        height: 300px;
        max-width: 600px;
        padding: 2rem;
        margin-right: auto;
        background-color: var(--fundo);
        background: linear-gradient(#77b6e9, #e6eff7);
        border-radius: 30px;
        display: block; 
        flex-direction: column;
        justify-content: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
      } 
  
    .days-list {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin: 10px 35px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      background: linear-gradient(#9bcbf5, #aeb6be)
    }

    .days-list li {
      padding: 15px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      transition: all 0.3s ease;
    }

    .days-list li .br {
      margin-bottom: 5px;
      font-size: 2rem;
    }

    .days-list li:hover {
      transform: scale(1.1);
      background: linear-gradient(#317abb, #91aac0);
      color: #222831;
      box-shadow: 0 5px 15px (0, 0, 0, 0.35);
    }

    .days-list li .day-tamp {
      margin-top: 6px;
      font-weight: 700;
    }

    .forecast {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }

    .imgs-busca {
      width: 15px;
      color: #222831;
      padding: 0;
    }
    .botabusca {
      padding: 0;
    }

    .day {
      border: 1px solid #ccc;
      padding: 10px;
      width: 100px;
    }

    .info-display {
      display: flex;
      justify-content: space-around; 
    }  

    .info-display .temp {
      margin-right: 10px;
      align-items: center;
    }

    .info-display .temp,
    .info-display .img-previsao {
      display: inline-block; 
      vertical-align: middle;
    }
      
    .info-section .info-display .temperatura .texto-previsao {
      transform: translateX(-10%);
    }

    .days-list {
      padding-inline-start: 0;
    }
     /* @media screen and (min-width: 601px) {
      .info-section {
        width: 600px;
      }
      
    }

      @media screen and (max-width: 600px) {
      .info-section {
        margin: 1rem; 
      }
      
      .info-section .info-display  {
        margin-top: 1rem;
      }
      .info-section .info-display .temperatura {
        border-right: 1px solid gray;
      }
      .info-section .info-display .umidade {
        padding-left: 1rem;
      }
    }     */
</style>
