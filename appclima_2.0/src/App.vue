<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="layout">
      <header>
    <h2><a href="index.html" class="logo">☁️ ClimaClean</a></h2>
    <div class="input">
      <input class="input-cidade"
        type="text"
        id="cityinput"
        placeholder="Digite o nome da cidade que deseja ver o clima:"
      >
      <button class="botao-busca" onclick="clicaNoBotao()">
        <img
          class="img-busca"
          alt="buscar"
          src="https://www.svgrepo.com/show/488200/find.svg"
        />
      </button>
    </div>
    <nav class="nav">
      <RouterLink :to="{ name: 'about' }">sobre o app </RouterLink>
      <RouterLink :to="{ name: 'show' }">Show</RouterLink>
      <span> | </span>
      <a href="https://github.com/Jkvua/AppClima" target="_blank">Github do projeto</a>
    </nav>
    </header>
    <RouterView />
  </div>  <footer>
    <p>
      ☁️ ClimaClean
    </p>
    <P>
      Versão 2.0/2024
    </P>
  </footer>
</template>

<style scoped>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
/* Header */
header {
    grid-area: header;
    background-color: var(--corPrimaria);
}
header .logo {
    text-decoration: none;
    color: white;
}
header:nth-child(1) {
    text-align: center;
}
.img-busca {
    width: 15px;
}

@media screen and (min-width: 601px) {
    header {
        display: grid;
        grid-template-columns: 2fr 5fr 2fr;
        align-items: center;
    }
}

@media screen and (max-width: 600px) {
    header {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        align-items: center;
    }
}
/* Footer */
footer {
    grid-area: footer;
    background-color: var(--corPrimaria);
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>
