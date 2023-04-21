<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">RESTful - Adressabilité</div>
    <div class="content">
      <p>
        Exercice: Pouvez-vous faire une requête REST pour obtenir la photo avec
        l'identifiant 5 ?
      </p>
      <RestClient
        link="https://jsonplaceholder.typicode.com/photos"
      ></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
