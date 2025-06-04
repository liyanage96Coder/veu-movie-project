<template>
  <header class="header">
    <div class="logo-area">
      <img src="../assets/Logos/LogoWhite.svg" alt="Logo" class="logo" />
    </div>

    <div class="nav-wrapper">
      <nav class="nav-menu">
        <ul>
          <li v-if="!isMobile"><a href="#">HOME</a></li>
          <li v-if="!isMobile"><a href="#">OUR SCREENS</a></li>
          <li v-if="!isMobile"><a href="#">SCHEDULE</a></li>
          <li v-if="!isMobile"><a href="#" class="active">MOVIE LIBRARY</a></li>
          <li v-if="isDesktop"><a href="#">LOCATION & CONTACT</a></li>
        </ul>
      </nav>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <transition name="slide">
      <nav class="mobile-menu" v-if="isMenuOpen">
        <button class="close-btn" @click="toggleMenu">&times;</button>
        <ul>
          <li v-if="isMobile"><a href="#">HOME</a></li>
          <li v-if="isMobile"><a href="#">OUR SCREENS</a></li>
          <li v-if="isMobile"><a href="#">SCHEDULE</a></li>
          <li v-if="isMobile"><a href="#" class="active">MOVIE LIBRARY</a></li>
          <li v-if="!isDesktop"><a href="#">LOCATION & CONTACT</a></li>
          <li><a href="#">GALLERY</a></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isMobile() {
      return this.screenWidth < 768;
    },
    isTablet() {
      return this.screenWidth >= 768 && this.screenWidth < 1024;
    },
    isDesktop() {
      return this.screenWidth >= 1024;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
      if (this.isDesktop) this.isMenuOpen = false;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}

.logo-area img {
  width: 135px;
  height: 32px;
  object-fit: contain;
}

.nav-menu ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu a {
  text-decoration: none;
  color: rgb(180, 176, 176);
  font-size: 0.9rem;
}
.nav-menu a:hover,
.nav-menu a.active {
  text-decoration: underline;
  font-weight: bold;
  color: white;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.hamburger span {
  width: 24px;
  height: 2px;
  background: white;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: #111;
  padding: 2rem 1rem;
  z-index: 999;
  transform: translateX(0);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-menu a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
}
</style>
