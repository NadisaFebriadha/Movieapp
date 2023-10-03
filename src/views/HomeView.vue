<template>
    <div>
     <h1 class="text-2xl font-bold">Movie App</h1>
     <p>
       Total movies: {{ totalResults }}
     </p>
     <div>
       <input class="shadow appearance-none rounded-lg py-2 px-3 text-gray-700 leading-tight peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" type="text" v-model="searchQuery"/>
       <button class="bg-indigo-700 rounded-sm px-4 py-2 text-white" @click="getMovies">Search</button>
     </div>
     <MovieList :movies="movies" @on-like="onLike" @on-view="onView"/>
     <div>
       <button @click="onPrev" :disabled='page === 1'>Prev</button>
       <button @click="onNext">Next</button>
     </div>
   </div>
   </template>
   
   <script setup lang="ts">
   import { ref } from 'vue';
   import MovieList from '../components/MovieList.vue';
   import type { Movie } from '../components/MovieCard.vue';
   
  
   const API_KEY = '22bdefbf';
   const searchQuery = ref<string>('');
   
   const url = 'http://www.omdbapi.com'
   
   const movies =ref<Movie[]>([]);
   const totalResults = ref<number>(0);
   const page = ref<number>(1);
   
   // TODO: update object value inside array ts/js
   const onLike = (id: number) => {
     let objIndex = movies.value.findIndex((v) => v.id === id);
     movies.value[objIndex].like += 1
   }
   
   const onView = (id: number) =>{
     let objIndex = movies.value.findIndex((v) => v.id === id);
     movies.value[objIndex].view += 1
   }
   
   type MovieResponse = {
     Search: Movie[];
     totalResults: string;
   }
   
   const getMovies = async () => {
     // add page query string
     const response = await fetch(`${url}/?apikey=${API_KEY}&s=${searchQuery.value}&page=${page.value}`)
     const MovieList = await response.json() as MovieResponse;
     // console.log({MovieList});
     movies.value = MovieList.Search;
     totalResults.value = parseInt(MovieList.totalResults);
   }
   
   const onNext = async () => {
     // update variabel page + 1
     page.value = page.value + 1
     // call api getMovies
   }
   const onPrev = async () => {
     // update variabel page - 1
     page.value = page.value -1
     // call api getMovies
     await getMovies()
   }
   
   // TODO: buat fungsi yang sama, tapi untuk menghitung jumlah view
   // TODO: pindahkan like dan view ke bagian bawah, buat sejajar dibawah rating. dan buat didalam satu komponen terpisah
   // TODO: implementasi pagination
   // TODO: disable / enable tombol prev saat halaman sekarang adalah 1
   </script>   