export const useMainStore = defineStore('MainStore', {
   
    state: () => ({
        name: useLocalStorage("name", "beef")
      }),

      actions: {
        updateMyValue(value) {
          this.name = value
          useLocalStorage('name', value)
        }
      }
    })
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
  }
