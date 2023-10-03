<template>
    <div class="p-2 bg-gray-400 shadow-md rounded-lg">
        <RouterLink :to="`/movie/${movie.imdbID}`">
            <p>{{ movie.Title }}</p>
        </RouterLink>
        <img :src="movie.Poster" alt=""/>
        <MovieStatistic :like="movie.like" :view="movie.view"/>
        <div>
            <button class="bg-gray-700 text-white rounded-md px-3 py-2 hover:bg-opacity-90" @cick="onLike">+Like</button>
            <button class="bg-gray-700 text-white rounded-md px-3 py-2 hover:bg-opacity-90" @click="onView">+View</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import MovieStatistic from './MovieStatistic.vue';

export type Movie = {
    Type: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Title: string;
    like: number;
    view: number;
}

const props = defineProps({
    movie: {
        type: Object as PropType<Movie>,
        required: true,
    }
});
const emit = defineEmits(['onLike', 'onView']);

const onLike = () => {
   emit("onLike", props.movie.imdbID)
}
const onView = () => {
   emit("onView", props.movie.imdbID)
}
</script>

<!-- <style scoped>
.movie-card{
    padding: 8px;
    background-color: gray;
    box-shadow: 0 1px 3px 0 rgb(0 0 0/ 0.1), 0 1px 2px -1px rgb(0 0 0/ 0.1);
}
</style> -->