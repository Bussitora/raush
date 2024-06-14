<script setup>
import Menu from './components/Menu.vue'
import Albom from './components/Albom.vue'
import About from './components/About.vue'
import AboutDop from './components/AboutDop.vue'
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
    <AboutDop />
    <Albom />
    <Map />
  </div>
</template>