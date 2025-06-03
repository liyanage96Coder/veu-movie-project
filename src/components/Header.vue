<template>
  <header class="header">
    <div class="logo-area">
      <img src="../assets/Logos/LogoWhite.svg" alt="Logo" class="logo" />
      <span class="logo-text">Logoipsum</span>
    </div>
    <div class="nav-wrapper">
      <nav class="nav-menu">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">OUR SCREENS</a></li>
          <li><a href="#">SCHEDULE</a></li>
          <li><a href="#" class="active">MOVIE LIBRARY</a></li>
          <li><a href="#">LOCATION & CONTACT</a></li>
        </ul>
      </nav>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #000;
  color: white;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  width: 32px;
  height: 32px;
}

.logo-text {
  font-weight: bold;
  font-size: 1.25rem;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  transition: color 0.2s;
}

.nav-menu a:hover {
  text-decoration: underline;
}

.nav-menu a.active {
  text-decoration: underline;
  font-weight: bold;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
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
</style>
