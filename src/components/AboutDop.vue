<script setup>
import { ref } from 'vue'
</script>

<template>
<div id="about" class="block block_text">
  <div class="about">
    Арт-студия «Катя Рауш» - это место, где вы и ваши дети сможете реализовать самые необычные идеи и образы. Используем самые разные техники рисования, лепим из полимерной глины, создаем уникальные шопперы и изделия из эпоксидной смолы.
    <br>
    <br>
    Первое занятие для ваших детей бесплатно.
  <br>
  <br>
  <div class="about_button_ob">
    <a class="about_button" target="_blank" href="https://vk.com/im?media=&sel=-206958613">записаться</a>
  </div>
  </div>
</div>
</template>

<style scoped>
  .about{
    padding:0px 0px;
    font-size:22px;
    text-align: left;
  }
  .about_button{
    text-decoration: none;
    color:#fff;
    position:relative;
    z-index:1001;
    margin:0 auto;
    background-color: #e5448a;
    padding:15px 40px;
    border-radius:4px;
    font-size:18px;
    font-weight:600;
    text-transform: uppercase;
    transition:0.2s;
  }
  .about_button:hover{
    background-color:#e61e53;
  }
  .about_button_ob{
    display:flex;
  }
</style>
