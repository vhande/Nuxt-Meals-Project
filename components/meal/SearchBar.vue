<template>
  <div class="container fluid input-group d-flex align-items-center justify-content-center flex-column border w-72 rounded">
    <div class="dropdown">
    <div class="d-flex flex-row align-items-center justify-content-center">
  <Icon class="icon mx-3" name="material-symbols:search-rounded"/>
  <input type="text" class="form-control placeholder-gray-400 shadow-none border-0" placeholder="Search for a meal..." v-model="input" @input="changeHandler" aria-describedby="basic-addon1">
  </div>
    <div class="dropdown-menu form-control " :class="input !== '' ? 'show' : 'hide'">
    <div v-for="(meal, index) in search">
    <NuxtLink v-if="index <=4" :to="`/meals/${meal.idMeal}`" class="hover:text-red-400"><li class="ml-3">{{ meal.strMeal }}</li></NuxtLink>
    </div>
  </div>
    </div>
  </div>


</template>

<script setup>

    const input = ref('')
    const url = ref('')
   

    const changeHandler = () => {
        url.value = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`
        console.log(search)
    }

    const {data:search} = await useFetch(url, {transform:(_search) => _search.meals},{key:input}, { refetch: true })
    </script>