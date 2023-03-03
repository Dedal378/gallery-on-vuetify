<script setup>
const props = defineProps({ photo: { type: Object, required: true }})
const emits = defineEmits(['openPhoto'])

function openPhoto() { return emits('openPhoto', props.photo) }
</script>

<template>
  <v-col cols="4">
    <v-card
      @click="openPhoto"
    >
      <v-card-title>
        {{ props.photo.title }}
      </v-card-title>

      <v-card-text>
        <v-img
          height="200"
          width="200"
        >
          <img
            :src="props.photo.url"
            alt="pic"
          >
          <!--Использование с srcset-->
          <!--<img
            :src="photo.url"
            alt="pic"
            sizes="(max-width: 320px) 280px,
                (max-width: 480px) 440px,
                800px"
            srcset="elva-fairy-320w.jpg 320w, elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
          >-->
        </v-img>
      </v-card-text>
    </v-card>
  </v-col>
</template>
