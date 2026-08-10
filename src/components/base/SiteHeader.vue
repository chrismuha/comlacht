<script setup>
import { nextTick, ref } from 'vue'
import logo from '@/assets/images/logo2.jpg'

const menuOpen = ref(false)
const menuButton = ref(null)
const navigation = ref(null)

async function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    await nextTick()
    navigation.value?.querySelector('a')?.focus()
  }
}

function closeMenu(returnFocus = false) {
  menuOpen.value = false
  if (returnFocus) nextTick(() => menuButton.value?.focus())
}

function handleMenuKeydown(event) {
  if (event.key === 'Escape' && menuOpen.value) {
    event.preventDefault()
    closeMenu(true)
  }
}
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <header class="site-header" @keydown="handleMenuKeydown">
    <div class="header-utility">
      <p>Insured, owner-operated property care across Northern New York</p>
      <div><a href="mailto:comlacht@gmail.com">comlacht@gmail.com</a><a href="tel:+13157772989">315-777-2989</a></div>
    </div>
    <div class="header-main">
      <router-link class="brand" to="/" aria-label="Comlacht home">
        <img :src="logo" alt="Comlacht" />
        <span><strong>COMLACHT</strong>Cleaning &amp; Property Services</span>
      </router-link>
      <button
        ref="menuButton"
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-navigation"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        @click="toggleMenu"
      >
        <span></span><span></span><span></span>
      </button>
      <nav ref="navigation" id="site-navigation" :class="{ open: menuOpen }" @click="closeMenu">
        <router-link to="/vacation-rental">Vacation Rental</router-link>
        <router-link to="/residential">Residential</router-link>
        <router-link to="/co-hosting">Co-Hosting</router-link>
        <router-link to="/places-to-stay">Places to Stay</router-link>
        <router-link to="/client-satisfaction">Client Satisfaction</router-link>
        <router-link class="nav-contact" to="/#contact">Request a quote <span>→</span></router-link>
      </nav>
    </div>
  </header>
</template>
