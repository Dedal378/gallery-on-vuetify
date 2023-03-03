import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  let dialogVisible = ref(false)
  const currentPhoto = ref({})

  const getDialogVisible = computed(() => dialogVisible.value)
  const getCurrentPhoto = computed(() => currentPhoto.value)
  const fullTitle = computed(() => `Название фотографии - ${getCurrentPhoto.value.title}`)

  function showDialog() {
    dialogVisible.value = true
  }

  function hideDialog() {
    dialogVisible.value = false
  }

  function setCurrentPhoto(payload) {
    currentPhoto.value = payload
  }

  return {
    dialogVisible,
    getDialogVisible,
    showDialog,
    hideDialog,
    currentPhoto,
    fullTitle,
    getCurrentPhoto,
    setCurrentPhoto,
  }
})

// Hot module Reload, only for vite
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDialogStore, import.meta.hot))
}
