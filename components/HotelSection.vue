<template>
  <section class="hotel">
    <div class="container hotel__container">
      <h2 class="hotel__heading">Заинтересовались?</h2>
      <p class="hotel__subheading">Укажите предполагаемые даты поездки,<br> и мы покажем вам лучшие предложения гостиниц в седоне</p>
      <button class="hotel__button" type="button">НАЙТИ гостиницу</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/mixins.scss';
@import '../scss/variables.scss';

.hotel {
  display: flex;
  padding-top: 30px;
  padding-bottom: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $color-default-white;

  br {
    display: none;
  }

  @include vp-768 {
    padding: 57px 0;

    br {
      display: block;
    }
  }
}

.hotel__container {
  max-width: 500px;
}

.hotel__heading {
  margin: 0;
  margin-bottom: 32px;
  font-size: 21px;
  line-height: 26px;
  text-transform: uppercase;

  @include vp-768 {
    font-size: 30px;
  }
}

.hotel__subheading {
  margin: 0;
  margin-bottom: 30px;
  font-size: 14px;
  text-transform: uppercase;
}

.hotel__button {
  width: 100%;
  padding: 16px 32px;
  font-size: 21px;
  font-weight: 700;
  color: $color-default-white;
  text-align: center;
  text-transform: uppercase;
  background-color: $color-seagull;
  border: none;
  cursor: pointer;
  transition: background-color $trans-default, color $trans-default;

  @include hover {
    background-color: $color-social-hover;
  }

  &:active {
    color: $color-white-opacity-3;
    background-color: $color-social-active;
  }
}

</style>
