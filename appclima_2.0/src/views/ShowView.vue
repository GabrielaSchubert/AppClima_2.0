<template>
  <header>
    <h2><a href="index.html" class="logo">☁️ ClimaClean</a></h2>
  <!--  <div class="input">
      <input class="input-cidad" type="text" id="cityinput"
        placeholder="Digite o nome da cidade que deseja ver o clima:">
        <button class="botao-busca" onclick="botaoShow()">
          <img
            class="img-busca"
            alt="buscar"
            src="https://www.svgrepo.com/show/488200/find.svg"
          />
        </button>
    </div> -->
    <nav class="nav">
      <a href="../src/../views/AboutView.vue" target="_blank">About the app</a>
      <span> | </span>
      <a href="https://github.com/Jkvua/AppClima" target="_blank">Project Github</a>
    </nav>
  </header>

    <section class="info-section">
      <h1 class="title-h1" style="text-align: center">
        Previsão do Tempo Joinville - SC
      </h1>
      <div class="new-box" style="text-align: center">
        <span class="hour">10:50</span>
        <div class="info-display">
          <div class="temperatura">
            <p class="temp">21°C</p>
            <img class="img-previsao" alt="icone-info-tempo"
              src="https://cdn.weatherapi.com/weather/64x64/night/389.png" />
            <p class="texto-previsao">Chuva-forte</p>
          </div>
          <div>
            <p class="umidade">Umidade: 76%</p>
            <p class="vento">3km/h</p>
          </div>
        </div>
      </div>
    </section>
    <!-- <ul class="days-list">
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
    </ul> -->
    
</template>

<style>

</style>
