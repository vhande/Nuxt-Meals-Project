<template>
    <div class="d-flex flex-wrap flex-row justify-content-center">
    <div v-for="c in category" >
            <NuxtLink :to="`/categories/${c.strCategory.toLowerCase()}`"><MealCategories :category="c" class="m-3 hover:text-red-400"/></NuxtLink>
    </div>
    </div>



</template>

<script setup>

const {data:category} = await useFetch(`https://www.themealdb.com/api/json/v1/1/categories.php`,
{transform:(_category) => _category.categories})
const mainStore = useMainStore();




</script>