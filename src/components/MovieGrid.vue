<template>
  <div class="movie-grid-container">
    <div class="header">
      <h2>Collect your favourites</h2>
      <div class="search-bar-wrapper">
        <img src="../assets/Icons/Search White.svg" alt="search" class="search" />
        <input
          type="text"
          placeholder="Search title and add to grid"
          v-model="searchQuery"
          @keyup.enter="addMovieFromAPI"
        />
      </div>
    </div>
    <hr />

    <div class="card-grid">
      <div v-for="(item, index) in cards" :key="index" class="singleCard">
        <div class="card-image">
          <img :src="item.image" :alt="item.title" />
          <button class="close-btn" @click="removeCard(index)">
            <img src="../assets/Icons/Close White.svg" alt="closeBtn" class="closeBtn" />
          </button>
        </div>
        <div class="card-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from "vue";
import { fetchMovieByTitle } from "../api/movieApi.js";

const cards = reactive([]);

const defaultTitles = ["Batman Returns", "Wild Wild West", "The Amazing Spiderman"];

const loadInitialMovies = async () => {
  for (const title of defaultTitles) {
    const movie = await fetchMovieByTitle(title);
    if (movie) {
      cards.push(movie);
    }
  }
};

onMounted(() => {
  loadInitialMovies();
});

const addMovieFromAPI = async () => {
  const movie = await fetchMovieByTitle(searchQuery.value);
  if (movie) {
    cards.push(movie);
    searchQuery.value = "";
  }
};

const searchQuery = ref("");

const removeCard = (index) => {
  cards.splice(index, 1);
};
</script>

<style scoped>
.movie-grid-container {
  background-color: #1b1b1b;
  color: white;
  padding: 40px;
  font-family: sans-serif;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header h2 {
  font-size: 24px;
  margin: 0;
}

.header .search-bar-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #444;
  background-color: #111;
  color: white;
  border-radius: 4px;
  flex: 1;
  min-width: 250px;
  max-width: 300px;
}
.header .search-bar-wrapper img {
  width: 15px;
  height: 15px;
}

.header input {
  font-size: 14px;
  background-color: #111;
  color: white;
  border: none;
  outline: none;
  flex: 1;
  min-width: 250px;
  max-width: 300px;
}

.header input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.header input::placeholder {
  color: rgb(188, 186, 186);
}

.card-grid {
  display: grid;
  gap: 20px;
  margin-top: 30px;
}

.close-btn img {
  opacity: 0.7;
  width: 5px;
  height: 5px;
}

.card-content {
  text-align: left;
}
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}

.singleCard {
  background-color: #525151;
  overflow: hidden;
  position: relative;
  padding: none !important;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.card-image {
  position: relative;
}

.card-image img {
  width: 100%;
  height: auto;
  display: block;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #222;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.card-content p {
  font-size: 13px;
  margin-top: 8px;
  color: #ccc;
}
</style>
