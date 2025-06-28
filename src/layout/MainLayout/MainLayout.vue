<script setup lang="ts">
import Footer from './Footer/Footer.vue';
import Navbar from './Navbar/Navbar.vue';
</script>

<template>
  <div :class="$style.mainLayoutWrapper">
    <Navbar />
    <main :class="$style.main">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" module>
.mainLayoutWrapper {
  width: 100vw;
  // height: 100vh;
  min-height: 100vh;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
