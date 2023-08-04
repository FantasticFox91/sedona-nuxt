<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore();
console.log(counter.counter)
</script>

<template>
  <div>
    <PromoSection>
      <template #heading>
        СЕДОНА — небольшой городок в АРИЗОНЕ,<br> заслуживающий большего!
      </template>
      <template #subheading>
        Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!
      </template>
    </PromoSection>
    <AdvantagesSection />
    <HotelSection />
    <MapSection />
  </div>  
</template>
