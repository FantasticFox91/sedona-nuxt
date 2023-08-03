<template>
  <button class="navigation__button" type="button">
      <span class="visually-hidden">Открыть/закрыть бургер меню</span>
    </button>
</template>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.navigation__button {
  position: relative;
  width: 23px;
  height: 22px;
  margin: 17px 0;
  padding: 0;
  border: none;
  background-color: $color-transparent;
  z-index: 4;

  &::after,
  &::before {
    @include pseudo(23px, 4px);
    left: 0;
    background-color: $color-seagull;
  }

  &::after {
    top: 0;
    box-shadow: 0 9px 0 0 $color-seagull;
  }

  &::before {
    bottom: 0;
  }

  &--open {
    display: flex;
    align-items: center;
    justify-content: center;

    &::after,
    &::before {
      top: 50%;
      background-color: $color-default-white;
    }

    &::after {
      box-shadow: none;
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }

  @include vp-768 {
    display: none;
  }
}
</style>
