<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>


    
<template>
  <main>
    <div class="container principal">
      <a>
        
      </a>
      <div class="media-box">
        <div class="info">
          <div>
            <a id="link-cidade" href="../paginas/show.html?cidade=Sao Paulo" style="text-decoration: none;">
              <h2 class="cidade">
                Tempo em São Paulo
             </h2>
            </a>
            
            <p class="pais">Brasil</p>
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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        
      </div>
    </div>
  </main>


      <div class="home-demo"> </div>
      <div class="owl-carousel owl-theme"> </div>


  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'show' }">Porto Alegre</RouterLink> |
          <RouterLink :to="{ name: 'show' }">São Paulo</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Rio de Janeiro</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Brasilia</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Salvador</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Joinville</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Belo Horizonte</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Curitiba</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Recife</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Guarulhos</RouterLink> |
          <RouterLink :to="{ name: 'show' }">Araquari</RouterLink> |
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>
