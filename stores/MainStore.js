import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {
  let name = ref()
  process.client ? 
  localStorage.getItem('name') ?
  name = localStorage.getItem('name') : name = "Beef"  : ""

      return {name}
    })

  
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
  }
