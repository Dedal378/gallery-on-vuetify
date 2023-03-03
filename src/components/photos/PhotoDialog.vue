<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useDialogStore } from '@/store/dialog.js'

const store = useDialogStore()
const { getCurrentPhoto, getDialogVisible, fullTitle } = storeToRefs(store)
const { hideDialog } = store
</script>

<template>
  <v-dialog
    v-model="getDialogVisible"
    max-width="600"
    @click:outside="hideDialog"
  >
    <v-card>
      <v-card-title>{{ fullTitle }}</v-card-title>

      <v-card-text>
        <v-img
          height="200"
          width="200"
        >
          <img
            :src="getCurrentPhoto.url"
            alt="pic"
          >
        </v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
