<script setup>
import {RouterLink, RouterView} from vue-router
</script>


<template>
    <header>

      <!-- <RouterLink to="/"></RouterLink> -->
      <h2><a href="../App.vue"></a></h2>
    </header>

    <main>
      <h1>Sobre o App</h1>
      <p>
            Esse app foi desenvolvido para demonstrar o clima, permitindo que os usuários pesquisem as condições do tempo em diferentes lugares em tempo real. 
        </p>
        <p>
            O app recebeu o nome de ClimaClean, que significa: clima limpo, ou seja, o intuito do site é que os usuários possam ter acesso a informação sobre o clima de forma limpa, sem problemas e sem demora.
        </p>
        <p>
            Essa é a versão 1.0 do projeto no ano de 2024.
        </p>
        <p>
            O projeto <strong>ClimaClean</strong> foi desenvolvido por: Camila, Gabriela, José Victor, Otávio e Sidiclei. Alunos do curso Sistemas Da Informação do Instituto Federal Catarinense - IFC.
        </p>
        <p>
            Saiba mais sobre no <a target="_blank" href="https://github.com/Jkvua/AppClima">Github do projeto</a>.
        </p>
    </main>
</template>

<style>

</style>
