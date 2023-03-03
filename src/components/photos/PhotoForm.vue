<script setup>
import { ref } from 'vue'

const emits = defineEmits(['addPhoto'])
const title = ref('')
const img = ref(null)

function addPhoto() {
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
    <v-row class="d-flex align-center justify-start">
      <v-text-field
        v-model="title"
        class="mr-10"
      />
      <v-file-input
        v-model="img"
        class="mr-5"
      />
      <v-btn
        class="mb-5"
        @click="addPhoto"
      >
        Добавить
      </v-btn>
    </v-row>
  </v-container>
</template>
