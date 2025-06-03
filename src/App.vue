<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HeroBanner from "./components/HeroBanner.vue";
import Introduction from "./components/Introduction.vue";
import ContactAndMap from "./components/Contact&Map.vue";
import MovieGrid from "./components/MovieGrid.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <main class="content">
      <HeroBanner />
      <Introduction />
      <MovieGrid />
      <ContactAndMap />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
