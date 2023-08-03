<script setup lang="ts">
import IconWelcome from './icons/IconWelcome';
import IconSedona from './icons/IconSedona';
import IconGrandCanyon from './icons/IconGrandCanyon';
const props = defineProps({
  isInnerPage: Boolean,
})
</script>

<template>
  <section class="promo" :class="{'promo--inner': isInnerPage}">
    <div class="promo__image">
      <IconWelcome class="promo__welcome" v-show="!isInnerPage" />
      <IconSedona class="promo__sedona" />
      <IconGrandCanyon class="promo__grand-canyon" v-show="!isInnerPage"/>
    </div>
    <div class="promo__text">
      <h1 class="promo__heading"><slot name="heading"></slot></h1>
      <p class="promo__subheading"><slot name="subheading"></slot></p>
    </div>
  </section>
</template>

<style lang="scss">
@import '../scss/mixins.scss';
@import '../scss/variables.scss';
.promo {
  background-color: $color-default-white;

  @include vp-768 {
    padding-bottom: 50px;
  }
}

.promo__image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 32px;
  margin-bottom: 32px;
  padding-top: 90px;
  padding-bottom: 80px;
  background: $color-seagull url("../assets/promo-mobile.webp") no-repeat;
  background-size: cover;
  background-position: 50%;

  &::after {
    @include pseudo(100%, 57px);
    bottom: 0;
    left: 0;
    background: url("../assets/svg/triangle.svg") no-repeat;
    background-size: 100% 57px;
  }

  @include retina {
    background: $color-seagull url("../assets/promo-mobile@2x.webp") no-repeat;
    background-size: cover;
    background-position: 50%;
  }

  @include vp-768 {
    background: $color-seagull url("../assets/promo-desktop.webp") no-repeat;
    background-size: cover;
    background-position: 40%;

    @include retina {
      background: $color-seagull url("../assets/promo-desktop@2x.webp") no-repeat;
      background-size: cover;
      background-position: 40%;
    }
  }

  @include vp-1200 {
    background-position: 0;

    @include retina {
      background-position: 0;
    }
  }
}

.promo__icon {
  display: block;
  width: 100%;
  margin: 0 auto;

  @include vp-768 {
    width: 461px;
    height: 350px;
  }
}

.promo__text {
  position: relative;
  padding: 0 30px;
  padding-bottom: 48px;
  text-align: center;

  &::after {
    @include pseudo(100%, 37px);

    bottom: 0;
    left: 0;
    background: url('../assets/svg/promo-background.svg') no-repeat;
    background-size: 100% 37px;
  }

  @include vp-768 {
    padding: 0 80px;

    &::after {
      display: none;
    }
  }
}

.promo__heading {
  margin: 0;
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  text-transform: uppercase;

  @include vp-768 {
    font-size: 30px;
  }
}

.promo__subheading {
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
}

.promo__welcome {
  @include vp-768 {
    width: 257px;
    height: 85px;
  }
}

.promo__sedona {
  @include vp-768 {
    width: 461px;
    height: 80px;
  }
}

.promo__grand-canyon {
  @include vp-768 {
    width: 295px;
    height: 79px;
  }
}

.promo--inner {
  .promo__image {
    padding-top: 57px;
    padding-bottom: 54px;
  }

  @include vp-768 {
    .promo__image {
      padding-top: 106px;
      padding-bottom: 105px;
    }
  }
}
</style>
