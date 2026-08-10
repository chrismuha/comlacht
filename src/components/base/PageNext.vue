<script setup>
defineProps({
  eyebrow: { type: String, default: 'CONTINUE EXPLORING' },
  title: { type: String, required: true },
  to: { type: String, required: true },
})
</script>

<template>
  <section class="next-page" aria-label="Next page">
    <router-link :to="to">
      <span>{{ eyebrow }}</span>
      <strong>{{ title }}</strong>
      <b aria-hidden="true">→</b>
    </router-link>
  </section>
</template>
