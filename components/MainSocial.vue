<script setup lang="ts">
import IconTwitter from './icons/IconTwitter.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconYouTube from './icons/IconYouTube.vue';
</script>

<template>
  <div class="social">
    <ul class="social__list">
      <li class="social__item">
        <a class="social__link" href="#">
          <IconTwitter class="social__icon" />
        </a>
      </li>
      <li class="social__item">
        <a class="social__link" href="#">
          <IconFacebook class="social__icon"/>
        </a>
      </li>
      <li class="social__item">
        <a class="social__link" href="#">
          <IconYouTube class="social__icon"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.social__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  gap: 6px;
}

.social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 48px;
  background-color: $color-seagull;
  transition: background-color $trans-default;

  @include hover {
    background-color: $color-social-hover;
  }

  &:active {
    background-color: $color-social-active;
  }

  &:active .social__icon {
    opacity: 0.3;
  }
}

.social__icon {
  transition: opacity $trans-default;
}
</style>
