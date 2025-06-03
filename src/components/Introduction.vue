<template>
  <div class="introduction-text">
    <div class="introduction-text-wrapper">
      <h1 class="introduction-title">MOVIE LIBRARY</h1>
      <p class="introduction-subtitle">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>
  </div>
</template>

<style scoped>
.introduction-text {
  width: 100%;
  text-align: left;
  background-color: rgb(10, 10, 10);
  color: white;
  font-family: "Arial", sans-serif;
  padding: 100px;
  padding-left: 350px;
}

.introduction-text-wrapper {
  max-width: 500px;
}

@media (max-width: 1024px) {
  .introduction-text {
    padding: 80px;
    padding-left: 150px;
  }
}

@media (max-width: 768px) {
  .introduction-text {
    padding: 60px 30px;
  }

  .introduction-text-wrapper {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .introduction-text {
    padding: 40px 20px;
  }

  .introduction-title {
    font-size: 24px;
  }

  .introduction-subtitle {
    font-size: 14px;
  }
}
</style>