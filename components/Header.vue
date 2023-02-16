<template>
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid d-flex justify-content-center align-items-center">
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item mx-3">
          <NuxtLink to="/" class="nav-link" @click="[store.home = true, store.categories=false]" :class="store.home ? '' : 'text-gray-600'" aria-current="page" >Home</NuxtLink>
        </li>
        <li class="nav-item mx-3">
          <NuxtLink class="nav-link" to="/categories" :class="store.categories ? '' : 'text-gray-600'" @click="[store.categories = true, store.home=false]" >Categories</NuxtLink>
        </li>
        </ul>
  </div>
</nav>
</template>


<script setup>
  const store = reactive({
        home : true,
        categories: false
    })

</script>