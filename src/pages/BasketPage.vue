<script setup lang="ts">
import Heading from '@/shared/Heading.vue';
import RouterNavigation from '@/shared/RouterNavigation.vue';
import cartStore from '@/stores/cartStore.ts';
</script>

<template>
  <Heading>Basket Page</Heading>

  <RouterNavigation />

  <div :class="$style.basket">
    <div v-if="cartStore.items.length === 0">
      Cart is empty.
    </div>

    <ul v-else>
      <li v-for="item in cartStore.items" :key="item.id">
        {{ item.title }} × {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.basket {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  margin-bottom: 1rem;

  border: 1px solid #000;
  font-weight: 600;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li::before {
      content: "— ";
    }
  }
}
</style>
