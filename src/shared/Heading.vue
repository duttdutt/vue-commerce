<script setup lang="ts">
const props = defineProps<{
  headingLevel?: 'h2' | 'h3'
}>()
</script>

<template>
  <div :class="heading.wrapper">
    <template v-if="!props.headingLevel">
      <h1
        :class="heading.firstLevel"
      >
        <slot />
      </h1>
    </template>

    <template v-else-if="props.headingLevel === 'h2'">
      <h2
        :class="heading.secondLevel"
      >
        <slot />
      </h2>
    </template>

    <template v-else>
      <h3
        :class="heading.thirdLevel"
      >
        <slot />
      </h3>
    </template>
  </div>
</template>

<style lang="scss" module="heading">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    padding: 0.7rem;

    background-color: var(--bg-color);
    color: var(--text-color);
  }

  .firstLevel {
    font-size: 2rem;
  }

  .secondLevel {
    font-size: 1.75rem;
  }

  .thirdLevel {
    font-size: 1.5rem;
  }
}
</style>
