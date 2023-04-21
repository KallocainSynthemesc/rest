<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">RESTful - Réalisation</div>
    <div class="content">
      <p>Cela permet de tester l'exercice</p>
      <RestClient link="http://localhost:8080/persons"></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
