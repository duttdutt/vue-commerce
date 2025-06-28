<script setup lang="ts"></script>

<template>
  <div :class="$style.logoBlock">
    <div :class="$style.logo">Magazin</div>
  </div>
</template>

<style lang="scss" module>
.logoBlock {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 80px;

    user-select: none;
    cursor: pointer;
    transition: .3s all;

    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
    color: var(--text-color);
    font-weight: 600;

    &:hover {
      transform: scale(1.05);
    }
  }

  & > *:hover {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
}
</style>
