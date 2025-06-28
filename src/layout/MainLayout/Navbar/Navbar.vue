<script setup lang="ts">
import { useThemeManager } from '@/composables/useThemeManager';
import { navigationItems } from "@/constants/navigationItems.ts";
import Button from "@/shared/Button.vue";
import NavbarLink from "./NavbarLink.vue";

const { theme, setLightTheme, setDarkTheme } = useThemeManager()
</script>

<template>
  <nav :class="$style.navBar" ref="nav">
    <RouterLink to="/" :class="$style.logo">
      Logo
    </RouterLink>
    <ul :class="$style.itemList">
      <li ref="liItems" v-for="item of navigationItems" :key="item.id" :class="$style.item">
        <NavbarLink :to="item.href">
          {{ item.label }}
        </NavbarLink>
      </li>
    </ul>
    <div :class="$style.themeToggler">
      {{ theme }}
      <Button :class="$style.lightMode" @click="setLightTheme">Light</button>
      <Button @click="setDarkTheme" :class="$style.darkMode">Dark Theme</button>
    </div>
  </nav>
</template>

<style lang="scss" module>
.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  padding: 0 1rem;
  height: 8vh;

  border: 1px solid var(--border-color);
  background-color: var(--bg-color);

  .logo {
    padding: 0.5rem 2rem;

    font-weight: 900;
    font-size: 2rem;
    text-decoration: none;
    background-color: var(--bg-hover-color);
    color: var(--text-hover-color);
  }

  .itemList {
    display: flex;
    gap: 1rem;

    list-style: none;
    user-select: none;
  }

  .themeToggler {
    display: flex;
    gap: .3rem;
  }
}

:global(html.dark-mode) {
  .darkMode {
    background-color: var(--green);
  }
}

:global(html.light-mode) {
  .lightMode {
    background-color: var(--green);
  }
}
</style>
