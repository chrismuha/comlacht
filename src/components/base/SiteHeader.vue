<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/logo.jpg'

const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <router-link class="brand" to="/" aria-label="Comlacht home">
      <img :src="logo" alt="Comlacht" />
    </router-link>
    <button
      class="menu-button"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="site-navigation"
      aria-label="Toggle navigation"
      @click="menuOpen = !menuOpen"
    >
      <span></span><span></span><span></span>
    </button>
    <nav id="site-navigation" :class="{ open: menuOpen }" @click="menuOpen = false">
      <router-link to="/">Home</router-link>
      <router-link to="/vacation-rental">Vacation Rental</router-link>
      <router-link to="/residential">Residential</router-link>
      <router-link to="/co-hosting">Co-Hosting / Property Management</router-link>
      <router-link to="/places-to-stay">Places to Stay</router-link>
      <router-link to="/#gallery">Gallery</router-link>
      <router-link to="/#why-comlacht">Why Comlacht</router-link>
      <router-link to="/#contact">Contact</router-link>
    </nav>
  </header>
</template>
