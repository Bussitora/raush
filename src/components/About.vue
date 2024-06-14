<script setup>
import { ref } from 'vue'
</script>

<template>
<div id="about" class="block block_text">
  <h2>Художником может стать каждый</h2>
  <div class="about">
    Арт-студия «Катя Рауш» - творческое, стильное и уютное пространство для всех, кто хочет найти свой укромный островок отдыха, вдохновения и самореализации. Чтобы создавать шедевры, вам не нужно бытом профессиональным художником. С нами рисуют потрясающие картины даже без опыта. И дети, и взрослые.
    <br>
    <br>
    Юные художники посещают творческие занятия и развивают мелкую моторику, память и мышление.<br>
    Взрослые находят полноценную перезагрузку, праздник и отвлечение от рабочих/домашних дел.<br>
    <br>
    <br>
    Раскрасим жизнь яркими цветами? Для вас - самые разные творческие направления.
    <br>
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
    padding:40px 0px;
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
