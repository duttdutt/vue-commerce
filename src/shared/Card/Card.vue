<script setup lang="ts">
import cartStore from '@/stores/cartStore.ts';
import Button from '../Button.vue';
import Badge from './Badge.vue';
import Price from './Price.vue';

const props = defineProps<{
  slug?: string,
  id: number,
  label: string,
  description: string,
  isDiscount: boolean,
  price: number
}>()
</script>

<template>
  <div :class="card.wrapper">
    <div :class="card.imageContainer">
      <Badge v-if="isDiscount" />
      <img :class="card.image" />
    </div>
    <div :class="card.infoContainer">
      <div :class="card.infoText">
        <div :class="card.label">
          <RouterLink :to="`/product/${props.slug}`">
            {{ props.label }}
          </RouterLink>
        </div>
        <div :class="card.description">{{ props.description }}</div>
      </div>
      <div :class="card.actionContainer">
        <Button
          @click="cartStore.addItem({ id: props.id, title: props.label })"
        >
          Add to cart
        </Button>
        <Price
          :price="props.price"
          :isDiscount="props.isDiscount"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="card">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 240px;
  min-height: 340px;
  padding: 1rem;

  border: 1px solid var(--border-color);
  background-color: var(--bg-card-color);

  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;
  margin-bottom: 1rem;

  position: relative;

  background-color: var(--bg-image-color);
  border: 1px solid var(--border-color);
}

.infoContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  height: 100%;

  .infoText {
    .label {
      display: inline;

      margin-bottom: .5rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--text-description-color);

      &:hover {
        cursor: pointer;
      }
    }

    .description {
      line-height: 1.3;
      font-size: 0.875rem;
      color: var(--text-description-color);
    }
  }
}

.actionContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
