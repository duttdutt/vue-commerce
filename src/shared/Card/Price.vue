<script setup lang="ts">
const props = defineProps<{
    price: number,
    isDiscount: boolean
}>()
</script>

<template>
    <div :class="[
        $style.container,
        props.isDiscount ? $style.discount : ''
    ]">
        <span :class="$style.text">
            {{ props.price }}
        </span>
        <span
            :class="$style.symbol"
        >
            €
        </span>
    </div>
</template>

<style lang="scss" module>
.container {
    display: flex;
    gap: 0.1rem;

    user-select: none;

    .text {
        font-weight: 600;
    }

    .symbol {
        font-weight: 800;
        text-decoration: underline;
    }
}

.container.discount {
    color: var(--green);
}
</style>
