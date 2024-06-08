<script setup lang="ts">
  import { computed } from 'vue'
  import { type PhotoRendererMetadata } from 'vue-photo-album'
  
  const props = defineProps<PhotoRendererMetadata>()
  const largePhoto = computed(() => props.photo.srcSet?.[0] ?? props.photo)
  </script>
  
  <template>
    <a
      class="pswp-link"
      :href="largePhoto.src"
      :data-pswp-width="largePhoto.width"
      :data-pswp-height="largePhoto.height"
      :data-pswp-srcset="imageProps.srcset"
      target="_blank"
      rel="noreferrer"
    >
      <slot />
    </a>
  </template>
  