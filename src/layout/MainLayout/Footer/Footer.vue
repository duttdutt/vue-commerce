<script setup lang="ts">
import Link from "@/shared/Link.vue";
import Logo from '@/shared/Logo.vue';
</script>

<template>
  <footer :class="footer.wrapper">

    <!-- Left Side -->
    <div :class="footer.infoBlock">
      <div :class="footer.infoText">
        <span>Magazin.</span>
        All rights reserved.
        1990 — 2027
      </div>
      <div :class="footer.infoSubText">
        Use of this site constitutes acceptance of our Terms of Service and Privacy Policy.
      </div>
    </div>

    <!-- Middle -->
    <Logo/>

    <!-- Right Side -->
    <div :class="footer.linksBlock">
      <Link
        href="https://github.com"
        target="_blank"
      >
        Github
      </Link>
      <Link
        href="https://stackblitz.com/"
        target="_blank"
      >
        StackBlitz
      </Link>
    </div>

  </footer>
</template>

<style lang="scss" module="footer">
.wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  height: 12vh;
  padding: 0.3rem;

  border: 1px solid var(--border-color);

  .infoBlock {
    justify-self: start;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: inherit;

    .infoText {
      span {
        font-weight: 600;
      }
    }

    .infoSubText {
      font-size: 0.8rem;
      color: var(--text-description-color);
    }
  }

  .linksBlock {
    justify-self: end;

    display: flex;
    gap: 0.3rem;
  }
}
</style>
