<template>
  <RouterLink class="logo" to="/">
    <picture>
      <source media="(min-width: 1200px)" srcset="../assets/svg/logotype-desktop.svg" width="187" heigh="96">
      <source media="(min-width: 768px)" srcset="../assets/svg/logotype-tablet.svg">
      <img src="../assets/svg/logotype-mobile.svg" width="102" height="84" alt="Логотип Седона"/>
    </picture>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
.logo {
  position: absolute;
  left: 0;
  right: 0;
  width: 102px;
  height: 84px;
  margin: 0 auto;
  z-index: 2;

  @include vp-1200 {
    width: 187px;
    height: 96px;
  }
}
</style>
