<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">RESTful - Réalisation</div>
    <div class="content">
      <p>
        Exercice: Lancez le projet et essayez d'appeler le point de terminaison
        REST "/persons" à l'aide de la méthode GET.
      </p>
      <RestClient link="http://localhost:8080/persons"></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
