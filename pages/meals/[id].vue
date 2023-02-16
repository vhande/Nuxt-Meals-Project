<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
    <div v-for="single in singleMeal">
    <h1 class="font-semibold text-4xl text-center m-3 text-red-400 "> {{single.strMeal}}</h1>
    <h2 class="font-semibold text-xl text-center m-3 text-black-400 ">Recipe no: {{ id }}</h2>
    <img :src="single.strMealThumb"  :alt="single.strMeal" class="w-8/12 m-auto mb-4">
    <MealCardDetail :singleMeal="single"/>
    </div>
    </div>
    
</template>

<script setup>
    const {id} = useRoute().params
    const {data:singleMeal} = await useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,  {transform:(_singleMeal) => _singleMeal.meals})

console.log(singleMeal)

</script>