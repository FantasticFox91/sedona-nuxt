<template>
  <footer class="footer">
    <div class="container footer__container">
      <div>
        <p class="footer__hashtag">#visitsedona</p>
      </div>
      <MainSocial />
      <MainCopyrights />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
.footer {
  padding-top: 40px;
  padding-bottom: 25px;
  background-color: $color-default-white;

  @include vp-768 {
    padding: 36px 0;
  }
}

.footer__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @include vp-768 {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer__hashtag {
  margin: 0;
  padding: 0 15px;
  font-size: 21px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
