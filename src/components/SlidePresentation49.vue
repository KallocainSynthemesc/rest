<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">RESTful - Réalisation</div>
    <div class="content">
      <p>
        Bonus Exercice: Ajouter le modèle BankAccount au projet et créer un
        point de terminaison GET et POST pour interroger les comptes bancaires
        et les créer (comme je l'ai fait dans Person).
      </p>
      <RestClient link="http://localhost:8080/persons"></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
