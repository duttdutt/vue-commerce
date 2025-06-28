<script setup lang="ts">
import { useThemeManager } from '@/composables/useThemeManager';

const { theme, setLightTheme, setDarkTheme } = useThemeManager()
</script>

<template>
  <p>{{ theme }}</p>
  <button @click="setLightTheme">Light Theme</button>
  <button @click="setDarkTheme">Dark Theme</button>
</template>
