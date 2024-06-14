<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({ once: true})
</script>

<template>
<div id="children" class="block block_text">
  <div class="service">
    <div class="service_block">
      <div class="service_block_title">Для детей</div>
      <div class="service_block_els">
        <div
          data-aos="fade-right"
          data-aos-offset="300"   
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div style="background-image:url('src/assets/photo/IMG_3693.PNG')" class="service_block_el_bg"></div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">ИЗО + лепка</div>
          </div>
        </div>
        <div 
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div style="background-image:url('src/assets/photo/IMG_3704.PNG')" class="service_block_el_bg"></div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Скетчинг</div>
          </div>
        </div>
        <div 
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div style="background-image:url('src/assets/photo/IMG_3706.PNG')" class="service_block_el_bg"></div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Живопись на холстах</div> 
          </div>        
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div style="background-image:url('src/assets/photo/IMG_3714.PNG')" class="service_block_el_bg"></div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Дни рождения</div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div style="background-image:url('src/assets/photo/IMG_3717.PNG')" class="service_block_el_bg"></div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Летний арт-лагерь</div>
          </div>      
        </div>
        <div 
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div style="background-image:url('src/assets/photo/IMG_3714.PNG')" class="service_block_el_bg"></div>
            <div class="service_block_el_shadow"></div>          
            <div class="service_block_el_title">Школьные выездные мастер-классы</div>
          </div>
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
  margin:0 -10px;
}
.service_block_el{
  width:33.33%;
  height:300px;
  padding:10px;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  position:relative;  
}

.service_block_el_in{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  position:relative;
}

.service_block_el_bg{
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background-repeat:no-repeat;
  background-position:center center;
  background-size:cover;
}

.service_block_el_shadow{
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.4);
  display:none;
}

.service_block_el_title{
  color:#fff;
  font-size:20px;
  font-weight:bold;
  position:relative;
  background:rgba(229, 68, 138,0.9);
  padding:30px 10px;
  text-align:center;
}
</style>
