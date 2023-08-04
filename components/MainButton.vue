<template>
  <button class="button" type="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
.button {
  color: $color-default-white;
  text-align: center;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color $trans-default;

  @include hover {
    background-color: $color-social-hover;
  }

  &:active {
    background-color: $color-social-active;
  }
}

</style>
