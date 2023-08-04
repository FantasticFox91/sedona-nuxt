<script lang="ts" setup>
import { onUpdated, ref } from 'vue';

const emits = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue']);
const modalRef: {value: HTMLDivElement | null} = ref(null);
const modalContainerRef = ref(null);

const onOverlayClick = (e: Event) => {
  const target = e.target as HTMLDivElement
  if (!target.closest('.modal__container')) {
    document.body.classList.remove('scroll-lock');
    emits('update:modelValue', false);
  }
}

onUpdated(() => {
  if (props.modelValue) {
    document.body.classList.add('scroll-lock');
    if (modalRef.value) {
      modalRef.value.style.top = `${window.scrollY}px`;
    }
  }
})
</script>

<template>
  <div class="modal" v-show="modelValue" ref="modalRef" @click="onOverlayClick">
    <div class="modal__container" ref="modalContainerRef">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/mixins.scss';
@import '../scss/variables.scss';
  .modal {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    z-index: 3;

    br {
      display: none;
    }

    @include vp-768 {
      br {
        display: block;
      }
    }
  }

  .modal--success {
    .modal__button {
      max-width: none;
      margin-bottom: 0;
    }

    @include vp-768 {
      .modal__container {
        max-width: 640px;
      }

      .modal__button {
        max-width: 458px;
      }
    }
  }

  .modal__container {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    background-color: $color-default-white;
    box-shadow: 0px 7px 15px 0px rgba(0, 1, 1, 0.15);
  }

  .modal__content {
    display: flex;
    padding: 40px 42px 0;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 22px;
    gap: 40px;
    font-size: 18px;
    line-height: 26px;
    text-align: center;

    @include vp-768 {
      margin-bottom: 45px;
    }
  }

  .modal__heading {
    margin: 0;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;

    @include vp-768 {
      font-size: 30px;
      line-height: 40px;
    }
  }

  .modal__subheading {
    margin: 0;
    text-transform: uppercase;

    @include vp-768 {
      font-size: 16px;
      line-height: normal;
    }
  }

  .modal__button {
    width: 100%;
    max-width: 180px;
    margin: 0 auto;
    margin-bottom: 35px;

    @include vp-768 {
      margin: 0 auto;
      max-width: 272px;
      margin-bottom: 49px;
    }
  }

  .modal__background {
    display: flex;
    padding: 20px;
    background-color: $color-white-smoke;

    @include vp-768 {
      padding: 44px 0;
    }
  }
</style>
