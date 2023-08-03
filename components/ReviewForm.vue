<script setup lang="ts">
import * as Yup from 'yup';
import { Field, Form } from 'vee-validate';
import type { SubmissionHandler } from 'vee-validate';
// import { useReviewStore } from '@/stores/review';

type userData = {
  name: string,
  secondName: string,
  patronym: string,
  phoneNumber: string,
  email: string,
  review: string,
  landmarks: string[],
  comment: string
}

// const useReview = useReviewStore();

const schema = Yup.object({
  name: Yup.string().required().matches(/[\u0401\u0451\u0410-\u044f]/),
  secondName: Yup.string().required().matches(/[а-яА-ЯЁё]/g),
  patronym: Yup.string().matches(/[\u0401\u0451\u0410-\u044f]/),
  phoneNumber: Yup.string().required().min(16).matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,9}$/),
  email: Yup.string().email().required(),
})

const onSubmit: SubmissionHandler = (values) => {
  const value = values as userData;
  // useReview.sendReview(value);
}

</script>

<template>
  <section class="review">
    <Form class="review__form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errorBag }" :initialValues="{review: 'positive'}">
      <fieldset class="form__fieldset form__fieldset--personal">
        <h2 class="form__heading">Представьтесь:</h2>
        <div class="form__field">
          <label class="form__label" for="name">Имя*:</label>
          <Field class="form__input" :class="{error: Object.keys(errorBag).includes('name')}" as="input" type="text" name="name" id="name" :validateOnInput="false" :validateOnBlur="false" :validateOnChange="false"/>
        </div>
        <div class="form__field">
          <label class="form__label" for="secondName">Фамилия*:</label>
          <Field class="form__input" :class="{error: Object.keys(errorBag).includes('secondName')}" as="input" type="text" name="secondName" id="secondName" :validateOnInput="false" :validateOnBlur="false" :validateOnChange="false"/>
        </div>
        <div class="form__field">
          <label class="form__label" for="patronym">Отчество:</label>
          <Field class="form__input" :class="{error: Object.keys(errorBag).includes('patronym')}" as="input" type="text" name="patronym" id="patronym" :validateOnInput="false" :validateOnBlur="false" :validateOnChange="false"/>
        </div>
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--contacts">
        <h2 class="form__heading">Контактная информация:</h2>
        <TextInput />
        <div class="form__field form__field--contacts form__field--mail">
          <label class="form__label" for="email">Электронная почта*:</label>
          <Field class="form__input" :class="{error: Object.keys(errorBag).includes('email')}" as="input" type="email" name="email" id="email" :validateOnInput="false" :validateOnBlur="false" :validateOnChange="false"/>
        </div>
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--review">
        <h2 class="form__heading">Ваше общее впечатление:</h2>
        <Field class="form__radio-input visually-hidden" name="review" type="radio" value="positive" id="positive"/>
        <label class="form__radio" for="positive">Скорее положительное</label>
        <Field class="form__radio-input visually-hidden" name="review" type="radio" value="negative" id="negative"/>
        <label class="form__radio" for="negative">Скорее отрицательное</label>
        <Field class="form__radio-input visually-hidden" name="review" type="radio" value="unknown" id="unknown" /> 
        <label class="form__radio" for="unknown">Затрудняюсь ответить</label>
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--landmarks">
        <h2 class="form__heading">Посещенные <br />достопримечательности:</h2>
        <div class="form__container">
          <div class="form__landmark">
            <Field class="form__checkbox-input visually-hidden" name="landmarks" type="checkbox" value="bridge" id="bridge" />
            <label class="form__checkbox" for="bridge">Мост Дьявола</label>
          </div>
          <div class="form__landmark">
            <Field class="form__checkbox-input visually-hidden" name="landmarks" type="checkbox" value="mountain-bell" id="mountain-bell" />
            <label class="form__checkbox" for="mountain-bell">Гора-Колокол</label>
          </div>
          <div class="form__landmark">
            <Field class="form__checkbox-input visually-hidden" name="landmarks" type="checkbox" value="slide-park" id="slide-park" />
            <label class="form__checkbox" for="slide-park">Слайд-парк</label>
          </div>
          <div class="form__landmark">
            <Field class="form__checkbox-input visually-hidden" name="landmarks" type="checkbox" value="red-mountain" id="red-mountain" />
            <label class="form__checkbox" for="red-mountain">Красные скалы</label>
          </div>
        </div>
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--comment">
        <h2 class="form__heading">Опишите свои эмоции:</h2>
        <Field class="form__textarea" as="textarea" name="comment" rows="5" />
      </fieldset>
      <div class="form__bottom">
        <button class="button form__button" type="submit">Отправить отзыв</button>
        <p class="form__no-mobile-text">* — обязательные поля</p>
      </div>
    </Form>
  </section>
</template>

<style lang="scss">
@import '../scss/mixins.scss';
@import '../scss/variables.scss';

.review {
  background-color: $color-default-white;
}

.review__form {
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
  border-bottom: 4px solid $color-whisper-dark;

  @include vp-768 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.form__fieldset {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 20px 20px 25px;
  border: none;
  border-top: 1px solid $color-whisper;

  @include vp-768 {
    padding: 36px 60px 78px;
    grid-column: span 2;
  }
}

.form__heading {
  margin: 0;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;

  @include vp-768 {
    margin: 0 auto;
    position: absolute;
    top: -13px;
    left: 0;
    right: 0;
    display: inline-block;
    max-width: max-content;
    padding: 0 40px;
    font-size: 21px;
    background-color: $color-default-white;
  }
}

.form__fieldset--review {
  @include vp-768 {
    margin-bottom: 82px;
    padding-top: 0;
    padding-right: 0;
    grid-row: 1/2;
    grid-column: 1/2;
    border-top: none;
    border-right: 1px solid $color-whisper;

    .form__heading {
      position: static;
      display: block;
      max-width: none;
      margin: 0;
      padding: 0;
      text-align: left;
    }
  }

  @include vp-1200 {
    padding-left: 120px;
  }
}

.form__fieldset--personal {
  @include vp-768 {
    margin-bottom: 82px;
    padding-top: 0;
    grid-row: 1/2;
    grid-column: 2/3;
    border-top: none;

    .form__heading {
      position: static;
      display: block;
      max-width: none;
      margin: 0;
      padding: 0;
      text-align: left;
    }
  }

  @include vp-1200 {
    padding-right: 120px;
  }
}

.form__fieldset--landmarks {
  .form__container {
    display: flex;
    gap: 30px;
    flex-direction: column;
  }

  .form__landmark {
    height: 48px;
  }

  @include vp-768 {
    padding-top: 73px;

    .form__container {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 215px);
      gap: 40px 45px;
    }

    .form__heading {
      top: -26px;
    }
  }

  @include vp-1200 {
    margin-right: 120px;
    margin-left: 120px;
    padding-left: 0;
    padding-right: 0;

    .form__container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.form__fieldset--comment {
  @include vp-768 {
    padding-top: 70px;
  }

  @include vp-1200 {
    margin-right: 120px;
    margin-left: 120px;
    padding-left: 0;
    padding-right: 0;
  }
}

.form__fieldset--contacts {
  @include vp-1200 {
    display: grid;
    margin-right: 120px;
    margin-left: 120px;
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(2, 1fr);
  }
}

.form__field {
  display: flex;
  align-items: center;
  gap: 14px;
}

.form__field--contacts {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @include vp-1200 {
    flex-direction: row;
    align-items: center;
    gap: 16px;

    .form__input {
      max-width: 307px;
    }
  }
}

.form__label {
  font-size: 14px;
  line-height: 26px;
  text-transform: uppercase;
  cursor: pointer;
}

.form__input {
  padding: 15px 22px;
  width: 100%;
  border: 1px solid $color-white-smoke;
  background-color: $color-white-smoke;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
}

.form__field--mail {
  .form__input {
    padding-right: 60px;
    background: $color-white-smoke url('../../assets/mail.png') no-repeat right;
  }
}

.form__radio {
  position: relative;
  padding: 11px;
  padding-left: 74px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  cursor: pointer;

  &::after {
    @include pseudo(48px, 48px);
    top: 0;
    left: 0;
    background-color: $color-white-smoke;
    border-radius: 50%;
  }

  &::before {
    @include pseudo(18px, 18px);
    top: calc(50% - 9px);
    left: 15px;
    background-color: $color-transparent;
    border-radius: 50%;
    z-index: 2;
    transition: background-color $trans-default;
  }

  @include vp-768 {
    padding: 16px;
    padding-left: 74px;

    &::after {
      top: calc(50% - 24px)
    }
  }
}

.form__radio-input:checked + .form__radio::before {
  background-color: $color-default-black;
}

.form__checkbox {
  position: relative;
  padding: 11px;
  padding-left: 74px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  cursor: pointer;

  &::after {
    @include pseudo(48px, 48px);
    top: 0;
    left: 0;
    background-color: $color-white-smoke;
  }
}

.form__checkbox-input:checked + .form__checkbox::after {
  background: $color-white-smoke url('../../assets/svg/checkmark.svg') no-repeat 50% 50%;
}

.form__textarea {
  padding: 13px 22px;
  padding-bottom: 17px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  background-color: $color-white-smoke;
  border: none;
}

.button {
  padding: 16px;
  font-size: 21px;
  line-height: 26px;
  font-weight: 700;
  color: $color-default-white;
  text-transform: uppercase;
  background-color: $color-seagull;
  border: none;
}

.form__button {
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color $trans-default;

  @include hover {
    background-color: $color-social-hover;
  }

  &:active {
    background-color: $color-social-active;
  }

  @include vp-768 {
    margin: 0;
  }

  @include vp-1200 {
    max-width: 480px;
  }
}

.form__bottom {
  margin: 0 auto;
  
  @include vp-768 {
    display: flex;
    margin: 0 60px;
    justify-content: space-between;
    align-items: center;
    grid-column: span 2;
  }

  @include vp-1200 {
    max-width: 995px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.form__no-mobile-text {
  display: none;
  margin: 0;

  @include vp-768 {
    display: flex;
  }
}

.error {
  border-color: tomato;
  color: tomato;
}
</style>
