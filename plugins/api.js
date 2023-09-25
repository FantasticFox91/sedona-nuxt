import axios from "axios";
import { useModalsStore } from '../stores/modals';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const BASE = config.public.baseURL;
  const modalsStore = useModalsStore();

  nuxtApp.api = {
    cards: {
      async get() {
        let res = null;
        try {
          res = await $fetch(`${BASE}/cards`)
        } catch (error) {
          console.error(`Ошибка получения карточек ${error}`);
        }

        return res?.data || null;
      }
    },
    review: {
      async post(data) {
        let res = null;
        try {
          res = await axios.post(`${BASE}/reviews`, data)
          modalsStore.isSuccess = true;
          return true;
        } catch (error) {
          modalsStore.isError = true;
          console.error(`Ошибка отправки формы ${error}`);
          return false;
        }
      }
    },
    video: {
      async get() {
        let res = null;
        try {
          res = await $fetch(`${BASE}/video`)
        } catch (error) {
          console.error(`Ошибка получения карточек ${error}`);
        }

        return res?.data || null;
      }
    }
  }
})
