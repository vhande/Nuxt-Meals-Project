<template>
  <div class="m-3 bg-red-40">
    <h1 class="font-semibold text-4xl text-center mt-5 "> Browse Meals </h1>
    <div class="d-flex flex-column align-items-center justify-content-center p-3 m-3">
      <MealSearchBar/>
    </div>
  <div class="m-5 p-5 rounded flex flex-row justify-content-center align-items-center">
  
   <p class="mx-2 font-semibold text-xl "> What can I cook with
    
      <select class="custom-select text-center text-red-400 " v-model="val" @change="changeHandler">
        <option hidden value="">Select an ingredient</option>
        <template v-for=" (i,index) in ingredients">
        <option v-if="index <=10" :value="i.strIngredient">{{ i.strIngredient }} </option>
      </template>
      </select>
    </p>
  
    <NuxtLink class="btn border p-1 text-red-400 hover:text-red-400" to="/meals">Search</NuxtLink>
  </div>
  
  </div>
    <h1 class="font-semibold text-4xl text-center m-3 "> Most delicious Canadian food </h1>
   <div class="d-flex flex-wrap flex-row justify-content-center">
      <div v-for="m in canadian" :key="m" class="m-3">
         <MealCard :meal="m" />
      </div>
   </div>

</template>
  
<script setup>
const mainStore = useMainStore();
const val = ref("")
const changeHandler = () => {
  mainStore.name = val
}
const {data:ingredients} = await useFetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`,  {transform:(_ingredients) => _ingredients.meals})
const {data:canadian} = await useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`,  {transform:(_canadian) => _canadian.meals})


</script>