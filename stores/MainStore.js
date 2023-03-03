import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {
  const name = ref("Beef")
  process.client ? 
  localStorage.getItem('name') ?
  name.value = localStorage.getItem('name') : ""  : ""

      return {name}
    })

  
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
  }
