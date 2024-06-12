<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Albom from './components/Albom.vue'
import About from './components/About.vue'
import Children from './components/Children.vue'
import Old from './components/Old.vue'
import Main from './components/Main.vue'
import Map from './components/Map.vue'
</script>
<template>
  <Menu />
  <div class="content">    
    <Main />
    <About />
    <Children />
    <Old />
    <Albom />
    <Map />
  </div>
</template>