import { defineStore } from 'pinia';
import { useModalsStore } from './modals';
import axios from 'axios';

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

const ROUTES = {
  'review': 'http://localhost:3001/reviews'
}

export const useReviewStore = defineStore('review', {
  
  actions: {
    sendReview(data: userData, form) {
      const modalsStore = useModalsStore();
      modalsStore.isSuccess = true;
    }
  }
})

// actions: {
//   sendReview(data: userData, form) {
//     const modalsStore = useModalsStore();
//     modalsStore.isSuccess = true;
//     axios.post(ROUTES.review, {
//       data: data
//     })
//     .then((response) => {
//       modalsStore.isSuccess = true;
//       console.log(response)
//     })
//     .catch(() => {
//       modalsStore.isError = true;
//     })
//   }
// }
