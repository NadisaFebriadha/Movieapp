<template>
<div class="w-full grid grid-cols-2 md:grid-cols-4 gap-2 content-center">
    <MovieCard
    v-for="movie in movies"
    :key="movie.imdbID"
    :movie="movie"
    @on-like="onLike"
    @on-view="onView"
    />
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import MovieCard, { type Movie } from './MovieCard.vue';

defineProps({
    movies:{
        type: Object as PropType<Movie[]>,
        required: true,
    }
})

const emit = defineEmits(['onLike', 'onView'])

const onLike = (id: number) => {
    emit('onLike', id)
}

const onView = (id: number) => {
    emit('onView', id)
}
</script>

<!-- <style scoped>
.movie-list {
  width: 100%;
  display: grid;
  grid-template-areas: 'card card card card';
  gap: 8px;
  align-content: center;
}
</style> -->