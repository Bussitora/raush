<template>
<div class="block">
  <div class="block_text">
    <h2>Как добраться и связаться с нами</h2>
    <div class="contacts">
      <div class="contact">
        <div class="contact_pic"><img src="../assets/media/contact_1.svg"></div>
        <div class="contact_title">Телефон</div>
        <div class="contact_text">+7 (982) 667-00-06</div>
      </div>
      <div class="contact">
        <div class="contact_pic"><img src="../assets/media/contact_2.svg"></div>
        <div class="contact_title">Адрес</div>
        <div class="contact_text"> г. Нижний Тагил, Черноисточинское шоссе 26/1</div>
      </div>
      <div class="contact">
        <div class="contact_pic"><img src="../assets/media/contact_3.svg"></div>
        <div class="contact_title">Транспорт</div>
        <div class="contact_text">Остановка "Глобус"</div>
      </div>
    </div>
  </div>
  <div class="map_in">
    <yandex-map
        v-model="map"
        :settings="{
          location: {
            center: [59.939345, 57.896148],
            zoom: 18,
          },
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
      <yandex-map-default-marker :settings="{ coordinates:  [59.939545, 57.895990] as LngLat, title: 'Арт-студия «Катя Рауш»' }" />
    </yandex-map>
  </div>
</div>
</template>
  
<script setup lang="ts">
import { shallowRef } from 'vue'
import type { YMap, LngLat } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
} from 'vue-yandex-maps'

const map = shallowRef<null | YMap>(null)

</script>

<style scoped>
  .map_in{
    margin-top:30px;
  }
  .contacts{
    margin:40px 0px;
    display: flex;
    width:100%;
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

  .contact_title{
    font-size:24px;
    font-weight:600;
    margin-top:20px;
  }

  .contact_text{
    margin-top:5px;
  }
</style>