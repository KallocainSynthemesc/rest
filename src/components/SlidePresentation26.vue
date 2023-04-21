<script setup>
import RestClient from "@/components/interactive/RestClient.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">RESTful - Orienté représentation</div>
    <div class="content">
      <p>Voyons comment une api REST peut fonctionner avec JSON et XML.</p>
      <RestClient
        link="http://mockbin.com/request?foo=bar&foo=baz"
      ></RestClient>
    </div>
  </div>
</template>

<style scoped></style>
