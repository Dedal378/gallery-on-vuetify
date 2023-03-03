<script setup>
import { ref } from 'vue'

const emits = defineEmits(['addPhoto'])
const title = ref('')
const img = ref(null)

const addPhoto = () => {
  const reader = new FileReader()
  reader.onload = () => {
    let photo = {
      id: Date.now(),
      title: title.value,
      url: reader.result,
    }
    emits('addPhoto', photo)
  }
  reader.readAsDataURL(img.value[0])
}
</script>

<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" />
      <v-file-input v-model="img" />
      <v-btn @click="addPhoto">Добавить</v-btn>
    </v-row>
  </v-container>
</template>
