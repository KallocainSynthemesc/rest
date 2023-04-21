<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTTP Protocol detour</div>
    <div class="content">
      <p>Voyons comment une requête GET pour une page HTML peut ressembler</p>
      <RestClient
        link="https://legacy.reactjs.org/docs/hello-world.html"
      ></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
