<script setup lang="ts">
const nuxtApp = useNuxtApp();
const api = nuxtApp.api;

const { data } = await useAsyncData(
  'cards',
  async () => api.cards.get()
)

</script>

<template>
  <section class="catalog">
    <ul class="catalog__list">
      <li v-for="(item, index) in data" :key="item.id" class="catalog__item" :class="{'catalog__item--wide': index === 0}">
        <CatalogItem :data="item"/>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.catalog__list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: $color-default-white;
  list-style-type: none;

  @include vp-768 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 60px;
  }

  @include vp-1200 {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
}

.catalog__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include vp-768 {
    width: 100%;
    gap: 0;
  }
}

.catalog__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 20px 15px;
  border-top: 1px solid $color-whisper;

  @include vp-768 {
    padding: 0;
    border: none;
  }
}

.catalog__item--wide {
  @include vp-768 {
    grid-column: span 2;
  }

  @include vp-1200 {
    grid-column: span 3;
  }
}

.catalog__item:last-of-type {
  border-bottom: 1px solid $color-whisper;

  @include vp-768 {
    border-bottom: none;
  }
}

.catalog__image {
  width: 100%;
  object-fit: cover;
  
  @include vp-768 {
    height: 267px;
  }
}

.catalog__item--wide .catalog__image {
  @include vp-768 {
    max-height: 400px;
  }
}

.catalog__description {
  display: flex;
  flex-direction: column;
  gap: 15px;

  @include vp-768 {
    padding: 8px 20px 9px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: $color-white-smoke;
  }

  @include vp-1200 {
    margin-top: -80px;
    color: $color-default-white;
    background-color: $color-black-opacity-3;
  }
}

.catalog__item:nth-of-type(3n) .catalog__description {
  @include vp-768 {
    background-color: $color-whisper-light;
  }

  @include vp-1200 {
    background-color: $color-black-opacity-3;
  }
}

.catalog__text {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.catalog__title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
}

.catalog__author {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
}

.catalog__likes {
  display: flex;
  gap: 14px;
}

.catalog__icon path {
  @include vp-1200 {
    fill: $color-default-white;
    opacity: 1;
  }
}

.catalog__like-count {
  width: 50px;
  text-align: center;
  padding: 0;
  border: none;
  background-color: $color-transparent;
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
</style>
