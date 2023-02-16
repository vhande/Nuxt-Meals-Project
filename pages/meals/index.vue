<template>
   <h1 class="font-semibold text-4xl text-center m-3 "> Meals using <span class="text-red-400">{{
      mainStore.name
   }}</span> as an ingredient </h1>
   <div class="d-flex flex-wrap flex-row justify-content-center">
      <div v-for="m in mIngredient" :key="m" class="m-3">
         <MealCard :meal="m" />
      </div>
   </div>
</template>

<script setup>
const mainStore = useMainStore();
const { data: mIngredient } = await useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainStore.name}`, { transform: (_mIngredient) => _mIngredient.meals })






</script>