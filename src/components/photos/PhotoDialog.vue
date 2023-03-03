<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const dialogVisible = ref(false)
const emits = defineEmits(['input'])

const props = defineProps({
  photo: { type: Object, required: true },
  value: { type: Boolean, default: false },
})
const fullTitle = computed(() => `Название фотографии - ${ props.photo.title }`)

watch(() => props.value,
  newValue => {
    dialogVisible.value = newValue
  }
)
watch(() => dialogVisible,
  newValue => {
    emits('input', newValue)
  }
)

onMounted(() => dialogVisible.value = props.value)
</script>

<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="600"
  >
    <v-card>
      <v-card-title>{{ fullTitle }}</v-card-title>

      <v-card-text>
        <v-img
          height="200"
          width="200"
        >
          <img
            :src="photo.url"
            alt="pic"
          >
        </v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
