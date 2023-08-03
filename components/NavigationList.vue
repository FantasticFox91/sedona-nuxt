<script lang="ts">

type EMITS = 'update'; 

interface NavigationListProps {
  modelValue: boolean
}

interface NavigationListEmits {
  (e: EMITS): void
}
</script>

<script setup lang="ts">
import { ROUTES } from '../utils';
import type { NavigationLink } from '../types';

const linksList: NavigationLink[] = [
  {
    id: 1,
    name: 'Главная',
    route: ROUTES.MAIN,
  },
  {
    id: 2,
    name: 'Фото и видео',
    route: ROUTES.CATALOG,
  },
  {
    id: 3,
    name: '',
    route: '',
  },
  {
    id: 4,
    name: 'Форма отзыва',
    route: ROUTES.REVIEW,
  }
]

defineProps<NavigationListProps>()
const emit = defineEmits<NavigationListEmits>()
</script>

<template>
  <Transition name="burger">
    <ul class="navigation__list" v-show="modelValue">
      <li :class="{'navigation__item' : link.name.length > 0}" v-for="link in linksList" :key="link.id">
        <NavigationItem :link="link" @click="emit('update')" />
      </li>
      <li class="navigation__item">
        <a class="navigation__link" href="https://htmlacademy.ru/" target="_blank">HTML academy</a>
      </li>
    </ul>
  </Transition>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.navigation__list {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 500px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: $color-seagull;
  list-style-type: none;
  overflow: hidden;
  z-index: 3;

  @include vp-768 {
    position: static;
    display: grid !important;
    grid-template-columns: repeat(5, 1fr);
    background-color: $color-default-white;
    z-index: 0;
  }
}

.burger-enter-active,
.burger-leave-active {
  transition: max-height $trans-600;
}

.burger-enter-from,
.burger-leave-to {
  max-height: 0;
}

.navigation__item {
  display: flex;
  align-items: center;
  justify-content: center;

  @include vp-768 {
    width: 153px;
  }
}

.navigation__item:not(:last-of-type) {
  border-bottom: 1px solid $color-black-opacity-2;

  @include vp-768 {
    border: none;
    background-color: $color-transparent;
  }
}

.navigation__item:not(:first-of-type) {
  border-top: 1px solid $color-white-opacity-2;

  @include vp-768 {
    border: none;
    background-color: $color-transparent;
  }
}

.navigation__item:last-of-type {
  background: $opacity-to-black;

  @include vp-768 {
    border: none;
    background: $color-transparent;
  }
}
</style>
