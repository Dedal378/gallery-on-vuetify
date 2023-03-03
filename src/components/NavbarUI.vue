<template>
  <v-container class="mb-7"
    fluids
  >
    <v-app-bar :elevation="2"
      color="orange"
      dark
      density="compact"
    >
      <template v-slot:append>

        <router-link to="/">
          <v-btn
            class="ml-3"
            color="white"
            variant="outlined"
          >
            Главная
          </v-btn>
        </router-link>

        <router-link to="/photos">
          <v-btn
            class="ml-3"
            color="white"
            variant="outlined"
          >
            Фотографии
          </v-btn>
        </router-link>

      </template>
    </v-app-bar>
  </v-container>
</template>
