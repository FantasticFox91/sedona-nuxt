import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useModalsStore = defineStore('modals', {
  state: () => {
    return {
      isError: false,
      isSuccess: false,
    }
  }
})
