<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="layout">
    <header>
      <RouterLink :to="{ name: 'home' }" class="logo">☁️ ClimaClean</RouterLink>
      <div class="input">
        <input class="input-cidade"
          type="text"
          id="cityinput"
          placeholder="Digite o nome da cidade que deseja ver o clima:"
        >
        <button class="botao-busca" @click="clicaNoBotao">
          <img
            class="img-busca"
            alt="buscar"
            src="https://www.svgrepo.com/show/488200/find.svg"
          />
        </button>
      </div>
      <nav class="nav">
        <RouterLink :to="{ name: 'about' }">sobre o app</RouterLink>
        <RouterLink :to="{ name: 'show' }">Show</RouterLink>
        <span> | </span>
        <a href="https://github.com/Jkvua/AppClima" target="_blank">Github do projeto</a>
      </nav>
    </header>
    <RouterView />
    <footer>
      <p>☁️ ClimaClean</p>
      <p>Versão 1.0/2024</p>
    </footer>
  </div>
</template>

<style scoped>

  #layout {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    color: #2c3e50;
  }

  /* Cabeçalho */
  header {
    background-color: var(--corPrimaria);
    display: flex;
    justify-content: space-between; /* Alinha logo e navegação */
    align-items: center;
    padding: 10px 20px;
  }

  header .logo {
    text-decoration: none;
    color: white;
    font-size: 24px;
  }

  /* Formulário de Busca */
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-cidade {
    padding: 8px;
    margin-right: 10px;
  }

  .botao-busca {
    background-color: transparent;
    border: none;
  }

  .img-busca {
    width: 15px;
  }

  /* Navegação */
  .nav {
    display: flex;
    align-items: center;
    gap: 10px; /* Espaçamento entre os itens */
  }

  .nav a, .nav span {
    font-weight: bold;
    color: rgb(5, 11, 48);
    text-decoration: none;
  }

  .nav a.router-link-exact-active {
    color: #2c1580;
  }

  /* Footer */
  footer {
    background-color: var(--corPrimaria);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    color: rgb(6, 24, 100);
    text-align: center;
  }

  footer p {
    margin: 5px 0;
  }

  /* Responsividade */
  @media screen and (min-width: 601px) {
    header {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
    }

    .input {
      justify-content: center;
    }
  }

  @media screen and (max-width: 600px) {
    header {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;
    }

    .input {
      justify-content: center;
    }
  }
  </style>
