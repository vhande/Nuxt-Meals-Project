<template>
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="category.strCategoryThumb" :alt="category.strCategory">
  <div class="card-body">
    <h5 class="card-title">{{category.strCategory}}</h5>
    <p class="card-text text-wrap">{{ category.strCategoryDescription }}</p>
  </div>
</div>
</template>

<script setup>
const {category} = defineProps(["category"]);
</script>