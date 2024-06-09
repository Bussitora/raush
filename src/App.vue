<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Albom from './components/Albom.vue'
import Map from './components/Map.vue'
</script>
<template>
  <Menu />
  <div class="content">    
    <Albom />
    <Map />
  </div>
</template>
<style scoped>
  .content{
    padding-top:70px;
  }
</style>
