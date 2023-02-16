<template>
    <div class="container">
    <div class="card" style="width: 18rem;">
  <img :src="meal.strMealThumb" class="card-img-top" :alt="meal.strMeal">
  <div class="card-body">
    <h5 class="card-title text-wrap">{{ meal.strMeal }}</h5>
    <p class="card-text"> </p>
    <NuxtLink class="nuxt-link" :to="`/meals/${meal.idMeal}`">Let's cook</NuxtLink>
</div>
</div>
</div>
</template>
<script setup>
    const {meal} = defineProps(["meal"]);
</script>