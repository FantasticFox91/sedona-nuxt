<script setup lang="ts">
import './scss/style.scss';
import { useModalsStore } from './stores/modals';

useHead({
  title: "Sedona",
  meta: [{ name: "description", content: "Откройте прекрасный мир Седоны" }],
  script: [
			{
        src: 'https://api-maps.yandex.ru/2.1/?apikey=f4064449-aed6-4597-84cc-a7cd5c3d5651&lang=ru_RU',
			}, 
		],
});

const modalStore = useModalsStore();
const onModalButtonClick = () => {
  modalStore.isError = false;
  document.body.classList.remove('scroll-lock');
}

const onSuccessModalButtonClick = () => {
  modalStore.isSuccess = false;
  document.body.classList.remove('scroll-lock');
}

</script>

<template>
  <div class="app wrapper">
    <MainHeader />
    <main>
      <NuxtPage />
    </main>
    <MainFooter />
  </div>
  <Transition name="modal">
    <MainModal v-model="modalStore.isError">
      <div class="modal__content">
        <p class="modal__heading">Что-то пошло <br />не так!</p>
        <p class="modal__subheading">Проверьте поля, выделенные красным,<br /> скорее всего вы забыли их заполнить</p>
      </div>
      <MainButton class="modal__button" @click="onModalButtonClick">Ок</MainButton>
    </MainModal>
  </Transition>
  <Transition name="modal">
    <MainModal class="modal--success" v-model="modalStore.isSuccess">
      <div class="modal__content">
        <p class="modal__heading">Ваш отзыв отправлен!</p>
        <p class="modal__subheading">Спасибо за ваше участие, ваш отзыв уже поступил к нам.<br />В ближайшее время мы опубликуем его на сайте.</p>
      </div>
      <div class="modal__background">
        <MainButton class="modal__button" @click="onSuccessModalButtonClick">Закрыть окно</MainButton>
      </div>
    </MainModal>
  </Transition>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

</style>
