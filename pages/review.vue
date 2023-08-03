<script setup lang="ts">

useHead({
  title: "Sedona | Форма отзыва",
  meta: [{ name: "description", content: "Напишите свой отзыв о проведенном отпуске" }],
});

</script>

<template>
  <PromoSection :isInnerPage="true">
    <template #heading>
      Оставьте свой отзыв
    </template>
    <template #subheading>
      Помогите нашим отелям стать лучше! оставьте отзыв о них,<br /> а также о посещенных вами достопримечательностях
    </template>
  </PromoSection>
  <ReviewForm />
</template>
