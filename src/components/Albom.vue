<script setup lang="ts">
import { ref } from 'vue'
import { PhotoAlbum } from 'vue-photo-album'
import usePhotoSwipe from './usePhotoSwipe.ts'
import CustomPhotoSwipeAdapter from './CustomPhotoSwipeAdapter.vue'

const data = [
    {
      "src": "/raush/src/assets/photo/IMG_3685.png",
      "key": "1",
      "width": 960,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/IMG_3686.PNG",
      "key": "2",
      "width": 960,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/IMG_3706.PNG",
      "key": "3",
      "width": 1280,
      "height": 720      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440732_y.jpg",
      "key": "4",
      "width": 853,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440768_y.jpg",
      "key": "5",
      "width": 1170,
      "height": 780      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440777_y.jpg",
      "key": "6",
      "width": 960,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440799_y.jpg",
      "key": "7",
      "width": 853,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440780_y.jpg",
      "key": "8",
      "width": 960,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440778_y.jpg",
      "key": "9",
      "width": 960,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440792_y.jpg",
      "key": "10",
      "width": 1170,
      "height": 780      
    },
    {
      "src": "/raush/src/assets/photo/IMG_3691.PNG",
      "key": "11",
      "width": 853,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440723_y.jpg",
      "key": "12",
      "width": 1170,
      "height": 780      
    },
    {
      "src": "/raush/src/assets/photo/IMG_3696.PNG",
      "key": "13",
      "width": 853,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440721_y.jpg",
      "key": "14",
      "width": 853,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/IMG_3708.PNG",
      "key": "15",
      "width": 960,
      "height": 1280      
    },
    {
      "src": "/raush/src/assets/photo/photo_5411128201746440781_y.jpg",
      "key": "16",
      "width": 1170,
      "height": 780      
    }
  ]

const photos = ref(data)
usePhotoSwipe({ gallery: '#gallery', children: 'a' })
</script>

<template>
<div class="block block_text">
  <h2>Фото галерея</h2>
  <div class="view">
    <PhotoAlbum
      id="gallery"
      layout="columns"
      :photos="photos"
      :photo-renderer="CustomPhotoSwipeAdapter"
    />
  </div>
</div>
</template>

<style scoped>
.view {
  margin: 40px auto 0;  
  max-width: 1280px;
  padding: 0px;
}
</style>
