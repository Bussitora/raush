<script setup lang="ts">
import { shallowRef } from 'vue'
import type { YMap, LngLat, BehaviorType } from '@yandex/ymaps3-types'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({ once: true})
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
} from 'vue-yandex-maps'

const BEHAVIOR: BehaviorType[] = ['drag', 'dblClick', 'pinchZoom']
const map = shallowRef<null | YMap>(null)

</script>

<template>
<div class="block">
  <div class="block_text">
    <h2>Как добраться и связаться с нами</h2>
    <div class="contacts">
      <div 
          data-aos="fade-right"
          data-aos-offset="200"
          class="contact">
        <div class="contact_pic"><img src="../assets/media/contact_1.svg"></div>
        <div class="contact_title">Телефон</div>
        <a href="tel:+79826670006" class="contact_text">+7 (982) 667-00-06</a>
      </div>
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        class="contact">
        <div class="contact_pic"><img src="../assets/media/contact_2.svg"></div>
        <div class="contact_title">Адрес</div>
        <div class="contact_text"> г. Нижний Тагил, Уральский проспект 91</div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        class="contact">
        <div class="contact_pic"><img src="../assets/media/vk.svg"></div>
        <div class="contact_title">VK</div>
        <a target="_blank" href="https://vk.com/artstudio_raush" class="contact_text">artstudio_raush</a>
      </div>
    </div>
  </div>
  <div class="map_in">
    <yandex-map
        v-model="map"
        :settings="{
          location: {
            center: [59.958674, 57.867349],
            zoom: 18,
          },
          behaviors: BEHAVIOR
        }"
        width="100%"
        height="600px"
        id="map"
    >
      <yandex-map-default-scheme-layer/>
      <yandex-map-default-features-layer/>
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
      </yandex-map-controls>
      <yandex-map-default-marker :settings="{ coordinates:  [59.958574, 57.867171] as LngLat, title: 'Арт-студия «Катя Рауш»' }" />
    </yandex-map>
  </div>
</div>
</template>

<style scoped>
  .map_in{
    margin-top:30px;
  }
  .contacts{
    margin:40px 0px;
    display: flex;
    width:100%;
    flex-wrap: wrap;
  }

  .contact{
    width:33.33%;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:0px 20px;
  }

  .contact_pic{
    width:100px;
    height:100px;
  }

  .contact_pic img{
    width:100%;
  }

  .contact_title{
    font-size:24px;
    font-weight:600;
    margin-top:20px;
  }

  .contact_text{
    margin-top:5px;
    font-weight:500;
  }

  a.contact_text{
    text-decoration:none;
  }

  @media (min-width:0px) and (max-width:640px){
    .contacts{
      justify-content: center;
    }

    .contact{
      width:100%;
      max-width:400px;
      margin-top:30px;
    }

    .contact:nth-child(){
      margin-top:0px;
    }
  }
</style>