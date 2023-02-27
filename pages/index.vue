<template>
  <div class="m-3 bg-red-40">
    <h1 class="font-semibold text-4xl text-center mt-5 "> Browse Meals </h1>
    <div class="d-flex flex-column align-items-center justify-content-center p-3 m-3">
      <MealSearchBar />
    </div>
    <div class="m-5 p-5 rounded flex flex-row justify-content-center align-items-center">

      <p class="mx-2 font-semibold text-xl "> What can I cook with

        <select class="custom-select text-center text-red-400 " v-model="val" @change="changeHandler">
          <option hidden value="">Select an ingredient</option>
          <template v-for=" (i, index) in ingredients">
            <option v-if="index <= 10" :value="i.strIngredient">{{ i.strIngredient }} </option>
          </template>
        </select>
      </p>

      

      <NuxtLink class="btn border p-1 text-red-400 hover:text-red-400" to="/meals">Search</NuxtLink>
    </div>

  </div>
  <div>
  <div class="d-flex align-items-center justify-content-center mb-5 ">
    <div class="form-check mx-3">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="radio"
        value="canadian" checked>
      <label class="form-check-label text-xl" for="flexRadioDefault1">
        Canadian
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="radio"
        value="french">
      <label class="form-check-label text-xl" for="flexRadioDefault2">
        French
      </label>
    </div>
  </div>
    <h1 class="font-semibold text-4xl text-center m-3 "> Most delicious {{ radio }} food </h1>
    <div v-if="pending" class="d-flex flex-row justify-content-center ">
    Loading ...
    </div>
    <div v-else class="d-flex flex-wrap flex-row justify-content-center">
      <div v-for="m in national" :key="m" class="m-3">
        <MealCard :meal="m" />
      </div>
    </div>
</div>
</template>
  
<script setup>
const name = useName()
const mainStore = useMainStore();
const val = ref("")
const radio = ref("canadian")
const a = radio

const changeHandler = () => {
  mainStore.name = val
  
}




const { data: ingredients } = await useFetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`, { transform: (_ingredients) => _ingredients.meals })

const url = `https://www.themealdb.com/api/json/v1/1/filter.php`
const { pending, data: national } = await useLazyFetch(url, { transform: (_national) => _national.meals, key: radio.value, watch: [radio], initialCache: false, query: { a } })


</script>