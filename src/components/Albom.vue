<script setup lang="ts">
import { ref } from 'vue'
import { PhotoAlbum } from 'vue-photo-album'
import usePhotoSwipe from './usePhotoSwipe.ts'
import CustomPhotoSwipeAdapter from './CustomPhotoSwipeAdapter.vue'
import data from '../assets/json/photos.json'

const photos = ref(data)
usePhotoSwipe({ gallery: '#gallery', children: 'a' })
</script>

<template>
<div class="block">
  <h2>Наши фото</h2>
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
  margin: 0 auto;  
  max-width: 1200px;
  padding:20px 0px;
}
</style>
