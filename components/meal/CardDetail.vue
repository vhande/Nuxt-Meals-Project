<template>
    <div class="card mb-3" style="max-width: 40rem;">
  <div class="card-body">
    <h5 class="card-title text-center font-semibold text-xl text-center  text-black-40">Ingredients</h5>
    <div class="d-inline-flex flex-wrap align-items-center justify-content-center">
  <div v-for="n in 20">
  <ul class="list-group list-group-flush">
    <NuxtLink to="/meals" @click="mainStore.name= singleMeal[`${'strIngredient' + n }`]" ><li 
    v-if="singleMeal[`${'strIngredient' + n }`] !== '' && singleMeal[`${'strIngredient' + n }`] !== null" 
    class="list-group-item border-0 hover:text-red-400">
    {{ singleMeal[`${"strIngredient" + n }`] }}
    </li></NuxtLink>
  </ul>
</div>
</div>
<h5 class="card-title text-center font-semibold text-xl text-center text-black-40 mt-3">How to Cook</h5>
<p class="text-justify m-3">{{ singleMeal.strInstructions }}</p>
</div>
</div>
</template>

<script setup>
    const {singleMeal} = defineProps(['singleMeal'])
    const mainStore = useMainStore();

</script>