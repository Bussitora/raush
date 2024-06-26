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
      <div class="service_block_title">
        <h2>Для детей от 2 до 14 лет</h2>
      </div>
      <div class="service_block_els">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div class="service_block_el_bg">
              <img src="../assets/service/photo_5434149870698095558_y.jpg">
            </div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Летний арт-лагерь</div>
          </div>      
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="200"   
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div class="service_block_el_bg">
              <img src="../assets/service/photo_5434149870698095539_y.jpg">
            </div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">ИЗО + лепка</div>
          </div>
        </div>
        <div 
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div class="service_block_el_bg">
              <img src="../assets/service/photo_2024-06-15_00-32-05.jpg">
            </div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Скетчинг</div>
          </div>
        </div>
        <div 
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div class="service_block_el_bg">
              <img src="../assets/service/photo_5434149870698095456_y.jpg">
            </div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Живопись на холстах</div> 
          </div>        
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div class="service_block_el_bg">
              <img src="../assets/service/photo_5434149870698095457_y.jpg">
            </div>
            <div class="service_block_el_shadow"></div>
            <div class="service_block_el_title">Дни рождения</div>
          </div>
        </div>
        <div 
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="200"
          class="service_block_el">
          <div class="service_block_el_in">
            <div class="service_block_el_bg">
              <img src="../assets/service/photo_5434149870698095522_y.jpg">
            </div>
            <div class="service_block_el_shadow"></div>          
            <div class="service_block_el_title">Школьные мастер-классы</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.service_block_title{
  margin-bottom:30px;
}
.service_block_els{
  display:flex;
  flex-wrap: wrap;
  margin:0 -10px;
}
.service_block_el{
  width:33.33%;
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
  position:absolute;
  background:rgba(229, 68, 138,0.9);
  padding:20px 10px;
  text-align:center;
  bottom:0;
  right:0;
  left:0;
}

@media (min-width:641px) and (max-width:1000px){
  .service_block_el{
    width:50%;
  }
}

@media (min-width:0px) and (max-width:640px){
  .service_block_el{
    width:100%;
  }
}
</style>
