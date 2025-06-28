<script setup lang="ts">
const props = defineProps<{
  href: string,
}>()
</script>

<template>
  <a
    :href="props.href"
    :class="$style.link"
  >
    <slot />
  </a>
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

  &:hover {
    background-color: var(--bg-hover-color);
    color: var(--text-hover-color);
  }
}
</style>
