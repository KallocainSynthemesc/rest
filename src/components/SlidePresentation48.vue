<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">RESTful - Réalisation</div>
    <div class="content">
      <p>
        Exercice: Essayez de créer une nouvelle personne en utilisant la méthode
        POST. Vérifiez avec la méthode GET que la nouvelle personne a été créée
        correctement.
      </p>
      <RestClient link="http://localhost:8080/persons"></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
