import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'

export const usePhotoStore = defineStore('photo', () => {
  /*  state: () => ({
   count: 0,
   name: 'Eduardo',
   isAdmin: true,
   items: [],
   hasChanged: true,
   }),
   getters: { doubleCount: state => state.count * 2 },
   actions: {
   increment() {
   this.count++
   },
   },*/

  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

// Hot module Reload, only for vite
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePhotoStore, import.meta.hot))
}
