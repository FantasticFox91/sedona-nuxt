<script setup lang="ts">
import IconLikeVue from './icons/IconLike.vue';
</script>

<template>
  <section class="catalog">
    <ul class="catalog__list">
      <li class="catalog__item catalog__item--wide">
        <div class="catalog__wrapper">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)" srcset="../assets/spaces-desktop-wide.webp, ../assets/spaces-desktop-wide@2x.webp 2x" width="648" height="400">
            <source type="image/webp" media="(min-width: 768px)" srcset="../assets/spaces-desktop.webp, ../assets/spaces-desktop@2x.webp 2x" width="648" height="400">
            <img class="catalog__image" src="../assets/spaces.webp" srcset="../assets/spaces@2x.webp" alt="не родные просторы" width="280" height="280">
          </picture>
          <div class="catalog__description">
            <div class="catalog__text">
              <h2 class="catalog__title">Не родные просторы</h2>
              <p class="catalog__author">Автор фото: Борис</p>
            </div>
            <div class="catalog__likes">
              <IconLikeVue class="catalog__icon" />
              <span class="catalog__like-count">1350</span>
            </div>
          </div>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__wrapper">
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcset="../assets/vegetation-desktop.webp, ../assets/vegetation-desktop@2x.webp 2x" width="324" height="267">
            <img class="catalog__image" src="../assets/vegetation.webp" srcset="../assets/vegetation@2x.webp" alt="Местная растительность" width="280" height="280">
          </picture>
          <div class="catalog__description">
            <div class="catalog__text">
              <h2 class="catalog__title">Местная растительность</h2>
              <p class="catalog__author">Автор фото: Сергей</p>
            </div>
            <div class="catalog__likes">
              <IconLikeVue class="catalog__icon" />
              <span class="catalog__like-count">143</span>
            </div>
          </div>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__wrapper">
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcset="../assets/road-to-the-north-desktop.webp, ../assets/road-to-the-north-desktop@2x.webp 2x" width="324" height="267">
            <img class="catalog__image" src="../assets/road-to-the-north.webp" srcset="../assets/road-to-the-north@2x.webp" alt="Дорога на север" width="280" height="280">
          </picture>
          <div class="catalog__description">
            <div class="catalog__text">
              <h2 class="catalog__title">Дорога на север</h2>
              <p class="catalog__author">Автор фото: Петр</p>
            </div>
            <div class="catalog__likes">
              <IconLikeVue class="catalog__icon" />
              <span class="catalog__like-count">96</span>
            </div>
          </div>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__wrapper">
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcset="../assets/devil-bridge-desktop.webp, ../assets/devil-bridge-desktop@2x.webp 2x" width="324" height="267">
            <img class="catalog__image" src="../assets/devil-bridge.webp" srcset="../assets/devil-bridge@2x.webp" alt="Мост Дьявола" width="280" height="280">
          </picture>
          <div class="catalog__description">
            <div class="catalog__text">
              <h2 class="catalog__title">Мост Дьявола</h2>
              <p class="catalog__author">Автор фото: Антон</p>
            </div>
            <div class="catalog__likes">
              <IconLikeVue class="catalog__icon" />
              <span class="catalog__like-count">254</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.catalog__list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: $color-default-white;
  list-style-type: none;

  @include vp-768 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 60px;
  }

  @include vp-1200 {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
}

.catalog__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include vp-768 {
    width: 100%;
    gap: 0;
  }
}

.catalog__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 20px 15px;
  border-top: 1px solid $color-whisper;

  @include vp-768 {
    padding: 0;
    border: none;
  }
}

.catalog__item--wide {
  @include vp-768 {
    grid-column: span 2;
  }

  @include vp-1200 {
    grid-column: span 3;
  }
}

.catalog__item:last-of-type {
  border-bottom: 1px solid $color-whisper;

  @include vp-768 {
    border-bottom: none;
  }
}

.catalog__image {
  width: 100%;
  object-fit: cover;
  
  @include vp-768 {
    height: 267px;
  }
}

.catalog__item--wide .catalog__image {
  @include vp-768 {
    max-height: 400px;
  }
}

.catalog__description {
  display: flex;
  flex-direction: column;
  gap: 15px;

  @include vp-768 {
    padding: 8px 20px 9px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: $color-white-smoke;
  }

  @include vp-1200 {
    margin-top: -80px;
    color: $color-default-white;
    background-color: $color-black-opacity-3;
  }
}

.catalog__item:nth-of-type(3n) .catalog__description {
  @include vp-768 {
    background-color: $color-whisper-light;
  }

  @include vp-1200 {
    background-color: $color-black-opacity-3;
  }
}

.catalog__text {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.catalog__title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
}

.catalog__author {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
}

.catalog__likes {
  display: flex;
  gap: 14px;
}

.catalog__icon path {
  @include vp-1200 {
    fill: $color-default-white;
    opacity: 1;
  }
}

.catalog__like-count {
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
</style>
