<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "NavigationButtons",
});

const props = defineProps<{
  button?: "back" | "forward";
}>();

const router = useRouter();
const canGoForward = ref(true);

onMounted(() => {
  canGoForward.value = window.history.length > 3;
});
</script>

<template>
  <template v-if="props.button === 'back'">
    <button :class="$style.button" @click="router.go(-1)">Go Back</button>
  </template>

  <template v-else-if="props.button === 'forward'">
    <button
      :class="$style.button"
      @click="router.go(1)"
    >
      Go Forward
    </button>
  </template>

  <template v-else>
    <div :class="$style.wrapper">
      <button :class="$style.button" @click="router.go(-1)">Go Back</button>
      <button
        :class="$style.button"
        @click="router.go(1)"
      >
        Go Forward
      </button>
    </div>
  </template>
</template>

<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.button {
  transition: 0.15s all;

  font-size: 1.5rem;
  font-weight: 600;
  background-color: var(--bg-color);
  border: 3px solid var(--border-color);

  &:hover {
    background-color: var(--bg-hover-color);
    color: var(--text-hover-color);
  }
}
</style>
