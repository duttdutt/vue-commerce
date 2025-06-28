<script setup lang="ts">
import Heading from "@/shared/Heading.vue";

import { cardItems } from "@/constants/cardItems.ts";
import Button from "@/shared/Button.vue";
import RouterNavigation from "@/shared/RouterNavigation.vue";
import cartStore from '@/stores/cartStore.ts';
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = computed(() =>
  cardItems.find((item) => item.slug === route.params.slug)
);
</script>

<template>
  <Heading>{{ product!.label }}</Heading>

  <RouterNavigation></RouterNavigation>

  <div :class="$style.description">{{ product!.description }}</div>

  <Button @click="cartStore.addItem({ id: product!.id, title: product!.label })">Add to basket</Button>
</template>

<style lang="scss" module>
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2rem 0;

  color: #868686;
}
</style>
