<template>
     <h1 class="font-semibold text-4xl text-center m-3 ">Meals in the <span class="text-red-400">{{ category }}</span> category</h1>
    <div class="d-flex flex-wrap flex-row justify-content-center">
    <div v-for="c in cMeal" class="m-3">
    <MealCard :meal="c" />
    </div>
</div>
</template>

<script setup>
const {category} = useRoute().params
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
const {data:cMeal} = await useFetch(url,  {transform:(_cMeal) => _cMeal.meals}, {key:category})
console.log(cMeal)
</script>