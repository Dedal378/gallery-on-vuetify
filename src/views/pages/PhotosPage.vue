<script setup>
import { onBeforeMount } from 'vue'
import { usePhotoStore } from '@/store/photo.js'
import { storeToRefs } from 'pinia'
import PhotoUI from '@/components/photos/PhotoUI.vue'
import PhotoForm from '@/components/photos/PhotoForm.vue'
import PhotoDialog from '@/components/photos/PhotoDialog.vue'

const store = usePhotoStore()
const { photos, getAllPhotos } = storeToRefs(store)
const { setPhotos } = store

function addPhoto(photo) { photos.value.push(photo) }

onBeforeMount(async() => await setPhotos())
</script>

<template>
  <v-container>
    <PhotoForm
      v-if="photos.length < 11"
      @addPhoto="addPhoto"
    />
    <div v-else>Вы не можете добавить больше фотографий</div>

    <v-row>
      <PhotoUI
        v-for="photo in getAllPhotos"
        :key="photo.id"
        :photo="photo"
      />
    </v-row>

    <PhotoDialog />
  </v-container>
</template>
