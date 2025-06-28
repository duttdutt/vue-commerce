<script setup lang="ts"></script>

<template>
    <div :class="badge.container">
        <span :class="badge.icon">⭐</span>
        <span :class="badge.text">Discount</span>
    </div>
</template>

<style lang="scss" module="badge">
.container {
    display: flex;
    gap: 0.3rem;

    padding: 0.1rem 0.4rem;

    position: absolute;
    top: 9px;
    right: 9px;

    background-color: var(--green);
    color: var(--text-color);
    font-size: .9rem;
    font-weight: 600;
    outline: 2px solid var(--green);
    outline-offset: 2px;
    border-radius: 6px;

    .icon {}

    .text {}
}
</style>
