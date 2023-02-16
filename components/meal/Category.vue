<template>
    <div class="container">
    <div class="card" style="width: 18rem;">
  <img :src="meals.strMealThumb" class="card-img-top" :alt="meals.strMeal">
  <div class="card-body">
    <h5 class="card-title">{{ meals.strMeal }}</h5>
    <p class="card-text"> </p>
    <NuxtLink :to="`/meals/${meals.idMeal}`">Let's cook</NuxtLink>
</div>
</div>
</div>
</template>

<script setup>
 const {meals} = defineProps(["meals"]);
</script>