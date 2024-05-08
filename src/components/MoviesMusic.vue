<!-- MoviesMusic.vue -->
<template>
    <div class="movies-music">
      <h2>Movies & Music</h2>
      <h3>Movies:</h3>
      <ul>
        <li v-for="movie in movies" :key="movie">{{ movie }}</li>
      </ul>
      <h3>Music:</h3>
      <ul>
        <li v-for="music in music" :key="music">{{ music }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import data from '@/data.json';
  
  export default {
    data() {
      return {
        movies: data.movies_music.movies,
        music: data.movies_music.music
      };
    }
  };
  </script>
  
  <style scoped>
  .movies-music {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
  }
  
  .movies-music ul {
    list-style-type: none;
    padding: 0;
  }
  
  .movies-music li {
    margin-bottom: 5px;
  }
  </style>
  