<script lang="ts">
  import type { NavigationLink } from '@/types';

  interface NavigationLinkProps {
    link: NavigationLink;
  }
</script>

<script setup lang="ts">
  defineProps<NavigationLinkProps>();
</script>

<template>
  <NuxtLink class="navigation__link" :to="link.route">
    {{ link.name }}
  </NuxtLink>
</template>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.navigation__link {
  color: $color-default-white;
  padding-top: 9px;
  padding-bottom: 5px;
  line-height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  transition: color $trans-default, opacity $trans-default;

  @include hover {
    color: $color-seagull;
  }

  &:active {
    opacity: 0.3;
  }

  @include vp-768 {
    padding-top: 10px;
    padding-bottom: 6px;
    color: $color-default-black;

    &--active {
      color: $color-roman-coffee;

      @include hover {
        color: $color-roman-coffee;
      }
    }
  }
}
</style>
