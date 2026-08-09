<script setup>
import Navbar from './components/base/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <Navbar />
    <RouterView />
  </div>
</template>
