<script setup lang="ts">
</script>

<template>
  <button
    :class="$style.button"
    type="button"
>
    <slot />
  </button>
</template>

<style lang="scss" module>
.button {
  padding: 0.5rem 1rem;

  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);

  font-size: 0.875rem;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-hover-color);
    color: var(--text-hover-color);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus {
    border-color: var(--green);
    background-color: var(--green);
    color: var(--text-color);
  }
}
</style>
