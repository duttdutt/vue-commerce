<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  type: 'info' | 'error' | 'success',
  header: string
}>()

const isOpen = ref<boolean>(false)

function closeNotification(): void {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div :class="$style.notificationWrapper">
    <div :class="[
      $style.notificationTop,
      $style[props.type]
    ]">
      <h3 :class="$style.notificationHeader">
        {{ props.header }}
      </h3>
      <img
        :class="$style.notificationCloseIcon"
        @click="closeNotification"
        src="@/assets/CloseIcon.svg"
      />
    </div>
    <div :class="$style.notificationBottom">
      <p :class="$style.notificationText">
        <slot />
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
.notificationWrapper {
  width: 300px;

  z-index: 1000;

  line-height: 1.3;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);

  .notificationTop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: .5rem;

    background-color: var(--bg-color);
    color: var(--text-color);
    border-bottom: 1px solid var(--border-color);

    &.error {
      background-color: red;
    }

    &.success {
      background-color: green;
    }

    .notificationHeader {
      margin: 0;
      padding: 0;
    }

    .notificationCloseIcon {
      width: 20px;
      height: 20px;

      transition: background-color .15s ease;

      border: 1px solid #FFF;
      background-color: #FFF;

      &:hover {
        cursor: pointer;

        background-color: red;
      }
    }
  }

  .notificationBottom {
    padding: 0 .5rem;

    .notificationText {
      font-style: italic;
    }
  }
}
</style>
