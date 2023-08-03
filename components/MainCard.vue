<script setup lang="ts">
const props = defineProps({
  heading: String,
  number: Number,
  text: String,
})
</script>

<template>
  <div class="card">
    <div class="card__description">
      <h2 class="card__heading">{{ props.heading }}</h2>
      <p class="card__text">— №{{ props.number }} —</p>
      <p class="card__text">{{ props.text }}</p>
    </div>
  </div>
</template>
