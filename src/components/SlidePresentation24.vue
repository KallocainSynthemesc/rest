<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">RESTful - L'interface uniforme et contraignante</div>
    <div class="content">
      <p>
        Sélectionnez POST et cliquez sur le bouton "Add parameter".Cela permet
        de spécifier les paires clé/valeur telles que le title, body et userId.
      </p>
      <RestClient
        link="https://jsonplaceholder.typicode.com/photos"
      ></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
