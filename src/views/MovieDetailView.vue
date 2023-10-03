<template>
    <h1>
        Movie ID: {{ movieId }}
    </h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const movieId = useRoute().params.id as string;

</script>