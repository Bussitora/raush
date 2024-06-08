<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Albom from './components/Albom.vue'
import Map from './components/Map.vue'
</script>

<template>
  <Menu />
  <Albom />
  <Map />
  <HelloWorld msg="Vite + vue" />  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
