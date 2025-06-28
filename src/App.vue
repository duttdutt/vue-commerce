<script setup lang="ts">
import MainLayout from './layout/MainLayout/MainLayout.vue';
import Modal from './shared/Modal.vue';
import { modalStore } from './stores/modalStore';
</script>

<template>
  <MainLayout />

  <div :class="$style.modalContainer">
    <Modal v-if="modalStore.isOpen" :type="modalStore.type" :header="modalStore.header" @click="modalStore.close()">
      {{ modalStore.message }}
    </Modal>
  </div>
</template>

<style module lang="scss">
.modalContainer {
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  z-index: 1000; // поверх всего
}
</style>
