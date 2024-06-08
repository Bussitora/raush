<template>
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
    </yandex-map>
  </template>
  
  <script setup lang="ts">
  import { shallowRef } from 'vue';
  import type { YMap } from '@yandex/ymaps3-types';
  import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';
  
  //Можно использовать для различных преобразований
  const map = shallowRef<null | YMap>(null);
  </script>

