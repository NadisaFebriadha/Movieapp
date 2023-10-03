<template>
    <span v-if="rating === 'SU'" class="rate-su bg-green-500">
        {{ rating }}
    </span>
    <span v-else-if="rating === 'R13+'" class="rate-r13 bg-blue-600">
        {{ rating }}
    </span>
    <span v-if="rating === 'D17+'" class="rate-d17 bg-red-500">
        {{ rating }}
    </span>
</template>

<script setup lang="ts">
defineProps({
    rating: {
        type: String,
        required: true,
    }
})

//TODO: buat rating style sesuai rating
// 1. SU -> hijau
// 2. D13+ -> biru
// 3. D17+ -> merah
</script>

<!-- <style scoped>
.rate-su {
    background-color: green;
}
.rate-r13 {
    background-color: blue;
}
.rate-d17 {
    background-color: red;
}
</style> -->