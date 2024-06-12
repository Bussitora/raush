<script setup>
import { ref } from 'vue'
</script>

<template>
<div id="old" class="block block_text">
  <div class="service">
    <div class="service_block">
      <div class="service_block_title">Для взрослых</div>
      <div class="service_block_els">
        <div class="service_block_el">
          <div class="service_block_el_title">Живопись на холстах</div>
        </div>
        <div class="service_block_el">
          <div class="service_block_el_title">Арт-вечеринки</div>
        </div>
        <div class="service_block_el">
          <div class="service_block_el_title">Дни рождения</div>
        </div>
        <div class="service_block_el">
          <div class="service_block_el_title">Эпоксидная смола</div>
        </div>
        <div class="service_block_el">
          <div class="service_block_el_title">Арт-свидания</div>
        </div>
        <div class="service_block_el">
          <div class="service_block_el_title">Корпоративы</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.service_block_title{
  font-size:36px;
  font-weight:600;
  margin-bottom:30px;
}
.service_block_els{
  display:flex;
  flex-wrap: wrap;
}
.service_block_el{
  width:33.33%;
  height:300px;
  display:flex;
  justify-content: center;
  align-items: center;
  align-items: center; 
}

.service_block_el_title{
  color:#fff;
  font-size:20px;
  font-weight:bold
}

.service_block_el:nth-child(even){
  background:red;
}

.service_block_el:nth-child(odd){
  background:blue;
}
</style>
