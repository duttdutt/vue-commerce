<script setup lang="ts">
const props = defineProps<{
  to: string,
}>()
</script>

<template>
  <RouterLink :to="props.to" :class="$style.link">
    <slot />
  </RouterLink>
</template>

<style lang="scss" module>
.link {
  display: block;

  padding: 0.5rem 1rem;

  transition: border-color 0.2s ease;

  border: 1px solid var(--link-border-inactive);
  text-decoration: none;

  &:hover {
    cursor: pointer;

    border-color: var(--link-border-active);
    text-decoration: underline;
  }

  &:active {
    background-color: var(--bg-color);
  }

  &:focus {
    border-color: var(--bg-hover-color);
    text-decoration: underline;
  }
}
</style>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: var(--bg-hover-color);
  color: var(--text-hover-color);
  border-color: var(--bg-hover-color);
  text-decoration: none;
}
</style>
