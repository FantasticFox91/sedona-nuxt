<script setup lang="ts">
import { ref } from 'vue';

const modalShow = ref(false);

const toggleModal = () => {
  modalShow.value = !modalShow.value;
}

const onLinkClick = () => {
  modalShow.value = false;
}
</script>

<template>
  <nav class="navigation">
    <NavigationButton :class="{'navigation__button--open': modalShow}" @click="toggleModal"/>
    <NavigationList v-model="modalShow" @update="onLinkClick"/>
  </nav>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.navigation {
  @include vp-768 {
    display: flex;
    width: 100%;
  }
}
</style>
