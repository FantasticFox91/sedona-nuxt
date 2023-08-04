<script setup lang="ts">
  import './scss/style.scss';

useHead({
  title: "Sedona",
  meta: [{ name: "description", content: "Откройте прекрасный мир Седоны" }],
  script: [
			{
        src: 'https://api-maps.yandex.ru/2.1/?apikey=f4064449-aed6-4597-84cc-a7cd5c3d5651&lang=ru_RU',
			}, 
		],
});

</script>

<template>
  <div class="app wrapper">
    <MainHeader />
    <main>
      <NuxtPage />
    </main>
    <MainFooter />
  </div>
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
</style>
