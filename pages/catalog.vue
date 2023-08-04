<script setup lang="ts">

useHead({
  title: "Sedona | Галерея",
  meta: [{ name: "description", content: "Галерея" }],
});

</script>

<template>
  <div>
    <PromoSection :isInnerPage="true">
      <template #heading>
        Фото и видео
      </template>
      <template #subheading>
        Не можете решиться на путешествие из-за курса?<br /> Фотографии помогут вам забыть о политике и экономике.
      </template>
    </PromoSection>
    <CatalogList />
    <DoubtsSection />
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

br {
  display: none;

  @include vp-768 {
    display: block;
  }
}
</style>
