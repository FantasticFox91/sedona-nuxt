import { defineStore } from 'pinia';

type userData = {
  name: string,
  secondName: string,
  patronym: string,
  phoneNumber: string,
  email: string,
  review: string,
  landmarks: string[],
  comment: string
}

export const useReviewStore = defineStore('review', {
  actions: {
    sendReview(data: userData) {
      const nuxtApp = useNuxtApp();
      const api = nuxtApp.api;
      return api.review.post(data)
    },
  }
})
