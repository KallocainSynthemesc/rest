<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">JAXB et JSON</div>
    <div class="content">
      <p>
        Pouvez-vous modifier la méthode getPersonList de manière à ce que les
        paramètres de la requête soient utilisés pour réduire la liste des
        résultats à seulement 2?
      </p>
      <RestClient
        link="http://localhost:8080/persons?start=0&size=2"
      ></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
