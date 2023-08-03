
<template>
  <section class="doubts">
    <div class="doubts__heading">
      <h2 class="promo__heading">Все еще сомневаетесь?</h2>
      <p class="promo__subheading">Смотрите видеопрезентацию и скорее за билетами, пока они<br /> не подорожали в очередной раз!</p>
    </div>
    <VideoPlayer />
  </section>
</template>

<style lang="scss">
@import '../scss/mixins.scss';
@import '../scss/variables.scss';

.doubts__heading {
  padding: 32px;
  text-align: center;
  background-color: $color-default-white;

  @include vp-768 {
    padding-top: 60px;
  }
}
</style>
