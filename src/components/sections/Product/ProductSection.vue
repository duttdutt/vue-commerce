<script setup lang="ts">
import { cardItems } from '@/constants/cardItems.ts';
import Card from '@/shared/Card/Card.vue';
</script>

<template>
  <section :class="$style.cardContainer">
    <Card
      v-for="card of cardItems"
      :key="card.id"
      v-bind="card"
    />
  </section>
</template>

<style lang="scss" module>
.cardContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
