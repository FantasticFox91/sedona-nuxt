<template>
  <section class="advantages">
    <ol class="advantages__list">
      <li class="advantages__item">
        <div class="card">
          <ul class="card__list">
            <li class="card__item card__item--with-image">
              <div class="card__description">
                <h2 class="card__heading">НАСТОЯЩИЙ ГОРОДОК</h2>
                <p class="card__text">— №1 —</p>
                <p class="card__text">СЕДОНА НЕ АТТРАКЦИОН ДЛЯ ТУРИСТОВ, ТАМ ТЕЧЕТ СВОЯ ЖИЗНЬ</p>
              </div>
              <div>
                <picture>
                    <source media="(min-width: 1200px)" type="image/webp" srcset="../assets/city-desktop.webp, ../assets/city-desktop.webp 2x">
                    <source type="image/webp" media="(min-width: 768px)" srcset="../assets/city-tablet.webp, ../assets/city-tablet@2x.webp 2x">
                    <img class="card__image" src="../assets/city-mobile.webp" srcset="../assets/city-mobile@2x.webp" alt="Городок" width="320" height="260">
                  </picture>
              </div>
              <ul class="card__sublist">
                <li class="card__subitem">
                  <div class="card__subdescription">
                    <h3 class="card__heading card__heading--living">Жилье</h3>
                    <p class="card__text">Рекомендуем пожить в настоящем мотеле, все как в кино!</p>
                  </div>
                </li>
                <li class="card__subitem">
                  <div class="card__subdescription">
                    <h3 class="card__heading card__heading--souvenirs">Сувениры</h3>
                    <p class="card__text">Не только китайского, но и местного производства!</p>
                  </div>
                </li>
                <li class="card__subitem">
                  <div class="card__subdescription">
                    <h3 class="card__heading card__heading--food">Еда</h3>
                    <p class="card__text">Всегда заказывайте ФИРМЕННЫЙ БУРГЕР,<br>Вы НЕ разочаруетесь!</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
      <li class="advantages__item">
        <div class="card__description">
          <h2 class="card__heading">ТАМ ЕСТЬ Мост дьявола</h2>
          <p class="card__text">— №2 —</p>
          <p class="card__text">Да, по нему можно пройти! Если вы осмелитесь, конечно</p>
        </div>
        <div class="card__second">
          <picture>
            <source media="(min-width: 1200px)" type="image/webp" srcset="../assets/bridge-desktop.webp, ../assets/bridge-desktop.webp 2x">
            <source type="image/webp" media="(min-width: 768px)" srcset="../assets/bridge-tablet.webp, ../assets/bridge-tablet@2x.webp 2x">
            <img class="card__image" src="../assets/bridge-mobile.webp" srcset="../assets/bridge-mobile@2x.webp" alt="Мост Дьявола" width="320" height="260">
          </picture>
        </div>
      </li>
      <li class="advantages__item">
        <MainCard
          heading="НЕБОЛЬШАЯ ПЛОЩАДЬ"
          :number="3"
          text="ВСЕ интересные места находятся очень близко"
        />
      </li>
      <li class="advantages__item">
        <MainCard
          heading="КРАСИВАЯ ДОРОГА"
          :number="4"
          text="ЕХАТЬ В СЕДОНУ ИЗ ЛАС-ВЕГАСА совсем НЕ СКУЧНО!"
        />
      </li>
      <li class="advantages__item">
        <MainCard
          heading="МАЛО ТУРИСТОВ"
          :number="5"
          text="Большинство едет в гранд каньон и толпится там"
        />
      </li>
    </ol>
  </section>
</template>

<style lang="scss">
@import '../scss/mixins.scss';
@import '../scss/variables.scss';

.advantages {
  margin-top: -20px;

  @include vp-768 {
    margin-top: 0;
  }
}

.advantages__list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  @include vp-768 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

.advantages__item {
  padding-top: 25px;

  @include vp-768 {
    padding-top: 0;
  }
}
.advantages__item:not(:last-child) {
  margin: 0 20px;
  border-bottom: 1px solid $color-light-gray;

  @include vp-768 {
    border: none;
  }
}

.advantages__item:nth-child(1),
.advantages__item:nth-child(2) {
  margin: 0;
  background-color: $color-seagull;
  color: $color-default-white;
  text-transform: uppercase;

  @include vp-768 {
    grid-column: span 3;
  }
}

.advantages__item:nth-child(1) {
  padding-top: 55px;

  @include vp-768 {
    padding-top: 0;
  }
}

.advantages__item:nth-child(2) {
  padding-top: 40px;

  @include vp-768 {
    padding-top: 0;
    display: grid;
    grid-template-columns: 1fr 256px;
    grid-auto-rows: 256px 1fr;

    .card {
      order: 2;
    }
  }
}

.card__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.card__sublist {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 35px 0;
  gap: 20px;
  background-color: $color-default-white;
  color: $color-default-black;
  list-style-type: none;

  @include vp-768 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: span 2;
  }
}

.card__description {
  display: flex;
  padding: 0 20px 39px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-transform: uppercase;

  @include vp-768 {
    padding: 40px 32px 44px;
  }
}

.card__heading {
  margin: 0;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;

  @include vp-768 {
    padding: 0 30px;
    text-align: center;
  }
}

.card__text {
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
}

.card__image {
  width: 100%;
  max-height: 260px;
  object-fit: cover;

  @include vp-768 {
    max-height: 256px;
  }
}

.card__subdescription {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-transform: uppercase;

  .card__text {
    text-align: left;
    padding-left: 70px;
    padding-right: 20px;
  }

  .card__heading {
    position: relative;
    width: 100%;
    padding: 10px 20px 0 70px;
  }

  .card__heading--living::before {
    @include pseudo(39px, 37px);
    top: 0;
    left: 20px;
    background: url('../assets/svg/icon-living.svg') no-repeat;
    background-size: 39px 37px;
  }

  .card__heading--souvenirs::before {
    @include pseudo(32px, 38px);
    top: 0;
    left: 20px;
    background: url('../assets/svg/icon-souvenirs.svg') no-repeat;
    background-size: 32px 38px;
  }

  .card__heading--food::before {
    @include pseudo(40px, 35px);
    top: 0;
    left: 20px;
    background: url('../assets/svg/icon-food.svg') no-repeat;
    background-size: 40px 35px;
  }

  @include vp-768 {
    align-items: center;

    .card__heading {
      padding: 0;
      padding-top: 100px;
      text-align: center;
    }

    .card__heading::before {
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .card__text {
      padding: 0 24px;
      text-align: center;
    }

    .card__heading--living::before {
      width: 75px;
      height: 72px;
      background-size: 75px 72px;
    }

    .card__heading--souvenirs::before {
      width: 76px;
      height: 68px;
      background-size: 76px 68px;
    }

    .card__heading--food::before {
      width: 65px;
      height: 75px;
      background-size: 64px 75px;
    }
  }
}

.card__text br {
  display: none;

  @include vp-768 {
    display: block;
  }
}

.card__item--with-image {
  @include vp-768 {
    display: grid;
    grid-template-columns: 256px 1fr;
    grid-auto-rows: 256px 1fr;
  }
}

.card__second {
  @include vp-768 {
    order: -1;
  }
}
</style>
