export const useMainStore = defineStore('MainStore', {
   
    state: () => ({
        name: useLocalStorage("name","beef")
      }),

      
  } );

  
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
  }
