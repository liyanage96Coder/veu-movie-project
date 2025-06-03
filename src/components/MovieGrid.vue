<template>
  <div class="movie-grid-container">
    <div class="header">
      <h2>Collect your favourites</h2>
      <input
        type="text"
        placeholder="🔍 Search title and add to grid"
        v-model="searchQuery"
      />
    </div>
    <hr />

    <div class="card-grid">
      <div
        v-for="(item, index) in filteredItems"
        :key="index"
        class="card"
      >
        <div class="card-image">
          <img :src="item.image" :alt="item.title" />
          <button class="close-btn" @click="removeCard(index)">✖</button>
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
import { reactive, computed, ref } from 'vue';

const searchQuery = ref('');

const cards = reactive([
  {
    title: 'Batman Returns',
    description:
      'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...',
    image: 'https://via.placeholder.com/300x400?text=Batman',
  },
  {
    title: 'Wild Wild West',
    description:
      'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...',
    image: 'https://via.placeholder.com/300x400?text=Wild+West',
  },
  {
    title: 'The Amazing Spiderman',
    description:
      'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...',
    image: 'https://via.placeholder.com/300x400?text=Spiderman',
  },
]);

const filteredItems = computed(() =>
  cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

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

.header input {
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

.card-grid {
  display: grid;
  gap: 20px;
  margin-top: 30px;
}

/* Responsive Grid Layout */
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

.card {
  background-color: #2c2c2c;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
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
