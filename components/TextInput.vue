<script setup lang="ts">
// @ts-ignore: Unreachable code error
import { IMaskComponent } from 'vue-imask';
import { useField } from 'vee-validate';

const {
  value: inputValue,
  handleBlur,
  handleChange,
  errors
} = useField('phoneNumber', undefined, {
  initialValue: '',
});
</script>

<template>
 <div class="form__field form__field--contacts form__field--phone">
    <label class="form__label" for="phoneNumber">Телефон*:</label>
    <IMaskComponent
      class="form__input"
      :class="{error: Object.keys(errors).includes('0')}"
      :value="inputValue"
      :mask="'+{7}(000)000-00-00'"
      name="phoneNumber"
      id="phoneNumber"
      @input="handleBlur"
      @blur="handleChange"
      maxlength="16"
    />
  </div>
</template>

<style lang="scss">
@import '../scss/mixins.scss';
@import '../scss/variables.scss';
.form__field--phone {
  .form__input {
    padding-right: 60px;
    background: $color-white-smoke url('../assets/phone.png') no-repeat right;
  }
}
</style>
