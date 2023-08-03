<script setup>
import IconHtmlacademy from './icons/IconHtmlacademy';
</script>

<template>
  <div class="copyrights">
    <a class="copyrights__text" href="#">
      Разработано <span class="copyrights__icon"><IconHtmlacademy class="copyrights__logo" /></span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
.copyrights__text {
  display: flex;
  margin: 0;
  gap: 15px;

  @include hover {
    .copyrights__logo {
      fill: $color-seagull;
    }
  }

  &:active {
    .copyrights__logo {
      fill: $color-default-black;
      opacity: 0.3;
    }
  }
}

.copyrights__icon {
  display: flex;
}

.copyrights__logo {
  transition-property: fill, opacity;
  transition-duration: 0.6s;
  transition-timing-function: ease;
}
</style>
