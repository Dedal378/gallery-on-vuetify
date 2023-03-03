<script setup>
import { onBeforeMount, ref } from 'vue'
import { apiClient } from '@/plugins/axios.js'
import PhotoUI from '@/components/photos/PhotoUI.vue'
import PhotoForm from '@/components/photos/PhotoForm.vue'
import PhotoDialog from '@/components/photos/PhotoDialog.vue'

let photos = ref([])
let currentPhoto = ref({})
const dialogVisible = ref(false)

const getData = async() => {
  try {
    const { data } = await apiClient()
    photos.value = data
  } catch (error) {
    throw new Error(error)
  }
}
let addPhoto = photo => { photos.value.push(photo) }
let openPhoto = photo => {
  currentPhoto.value = photo
  dialogVisible.value = true
}

onBeforeMount(async() => await getData())
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
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
        @openPhoto="openPhoto"
      />
    </v-row>

    <PhotoDialog
      v-model="dialogVisible"
      :photo="currentPhoto"
    />
  </v-container>
</template>
