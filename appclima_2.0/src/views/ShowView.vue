<template>
    <section class="info-section">
      <h1 class="title-h1" style="text-align: center">
        Previsão do Tempo Joinville - SC
      </h1>
      <div class="new-box" style="text-align: center">
        <span class="hour">10:50</span>
        <div class="info-display">
          <div class="temperatura">
            <p class="temp">21°C</p>
            <!-- <img class="img-previsao" alt="icone-info-tempo"
              src="https://cdn.weatherapi.com/weather/64x64/night/389.png" /> -->
            <p class="texto-previsao">Chuva-forte</p>
          </div>
          <div>
            <p class="umidade">Umidade: 76%</p>
            <p class="vento">3km/h</p>
          </div>
        </div>
      </div>
    </section>
    
    
</template>

<style>

.info-section {
    height: 100vh;
    margin: 0;
    background-color: var(--fundo);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }





  
  
    .container {
      background: linear-gradient(#afcfeb, #f0f8ff);
      width: 100%;
      height: 40vh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
      margin: 0 auto;
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
    
    .info-section {
      padding: 2rem;
      background: linear-gradient(#77b6e9, #e6eff7);
      height: 300px;
      max-width: 600px;
      margin: auto;
      border-radius: 30px;
    }
    
    .info-section .info-display .temperatura .texto-previsao {
      transform: translateX(-10%);
    }

    .days-list {
      padding-inline-start: 0;
    }
    @media screen and (min-width: 601px) {
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
    }    
    
    .container {
      background: linear-gradient(#afcfeb, #f0f8ff);
      width: 100%;
      height: 40vh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
      margin: 0 auto;
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
    
    .info-section {
      padding: 2rem;
      background: linear-gradient(#77b6e9, #e6eff7);
      height: 300px;
      max-width: 600px;
      margin: auto;
      border-radius: 30px;
    }
    
    .info-section .info-display .temperatura .texto-previsao {
      transform: translateX(-10%);
    }

    .days-list {
      padding-inline-start: 0;
    }
    @media screen and (min-width: 601px) {
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
    } 
</style>
