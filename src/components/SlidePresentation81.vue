<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">JAXB et JSON</div>
    <div class="content">
      <p>
        Pouvez-vous ajouter l'annotation @Produces({"application/xml",
        "application/json"}) à l'exercice précédent et tester si cela fonctionne
        ?
      </p>
      <RestClient link="http://localhost:8080/persons"></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
