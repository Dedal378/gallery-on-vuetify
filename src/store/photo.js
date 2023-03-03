import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'
import { apiClient } from '@/plugins/axios.js'

export const usePhotoStore = defineStore('photo', () => {
  let photos = ref([])
  const getAllPhotos = computed(() => photos.value)

  async function setPhotos() {
    try {
      const { data } = await apiClient()
      photos.value = data
    } catch (error) {
      throw new Error(error)
    }
  }

  return { photos, getAllPhotos, setPhotos }
})

// Hot module Reload, only for vite
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePhotoStore, import.meta.hot))
}
