<script setup>
import { ref } from 'vue'
</script>

<template>
<div id="about" class="block block_text">
  <div class="about">
  Арт-студия «Катя Рауш» - творческое, стильное и уютное пространство для всех, кто хочет найти свой укромный островок отдыха, вдохновения и самореализации. Чтобы создавать шедевры, вам не нужно бытом профессиональным художником. С нами рисуют потрясающие картины даже без опыта. И дети, и взрослые.
  <br>
  <br>
  Юные художники посещают творческие занятия и развивают мелкую моторику, память и мышление.
  <br>
  <br>
  Взрослые гости нашей арт-студии находят здесь полноценную перезагрузку, праздник и отвлечение от рабочих/домашних дел.
  <br>
  <br>
  Раскрасим жизнь яркими цветами?
  Для вас - самые разные творческие направления.
  <br>
  <br>
  Арт-студия «Катя Рауш» - это место, где вы и ваши дети сможете реализовать самые необычные идеи и образы. Используем самые разные техники рисования, лепим из полимерной глины, создаем уникальные шопперы и изделия из эпоксидной смолы.
  <br>
  <br>
  Первое занятие для ваших детей бесплатно.<br>
  Приходите!<br>
  <br>
  <div class="about_button_ob">
    <a class="about_button" target="_blank" href="https://vk.com/im?media=&sel=-206958613">записаться</a>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  Для детей
  <br>
  <br>
  ИЗО + лепка <br>
  Скетчинг <br>
  Живопись на холстах <br>
  Дни рождения <br>
  Летний арт-лагерь <br>
  Школьные выездные мастер-классы <br>
  <br>
  <br>
  Для взрослых
  <br>
  <br>
  Живопись на холстах <br>
  Арт-вечеринки и дни рождения <br>
  Эпоксидная смола <br>
  Арт-свидание <br>
  </div>
</div>
</template>

<style scoped>
  .about{
    padding:40px 0px;
    font-size:20px;
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
