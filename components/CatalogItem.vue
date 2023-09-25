<script setup>
import IconLikeVue from './icons/IconLike.vue';
import anime from 'animejs';

const props = defineProps(['data']);
const counterRef = ref(null);

const startAnimation = () => {
  anime({
    targets: counterRef.value,
    value: [0, props.data.likes],
    round: 1,
    duration: 2000,
    easing: 'easeInOutExpo'
  });
}

onMounted(() => {
  startAnimation()
})
</script>

<template>
 <div class="catalog__wrapper">
    <picture>
      <source type="image/webp" media="(min-width: 1200px)" :srcset="`${data.images.desktop.src}, ${data.images.desktop.x2}`" width="648" height="400">
      <source type="image/webp" media="(min-width: 768px)" :srcset="`${data.images.tablet.src}, ${data.images.tablet.x2}`" width="648" height="400">
      <img class="catalog__image" :src="data.images.mobile.src" :srcset="data.images.mobile.x2" :alt="data.title" width="280" height="280">
    </picture>
    <div class="catalog__description">
      <div class="catalog__text">
        <h2 class="catalog__title">{{ data.title }}</h2>
        <p class="catalog__author">Автор фото: {{ data.author }}</p>
      </div>
      <div class="catalog__likes">
        <IconLikeVue class="catalog__icon" />
        <input class="catalog__like-count" type="number" value="0" ref="counterRef" />
      </div>
    </div>
  </div>
</template>
