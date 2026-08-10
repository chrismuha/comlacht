<script setup>
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import PageNext from '@/components/base/PageNext.vue'
import Testimonials from '@/components/home/Testimonials.vue'
</script>

<template>
  <div class="site-shell satisfaction-page-shell">
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <section class="satisfaction-hero">
        <p class="small-title">CLIENT SATISFACTION</p>
        <h1>Care people can feel in every detail.</h1>
        <p>Comlacht is building this page around genuine, permission-approved feedback from property owners, hosts, and residential clients.</p>
      </section>
      <Testimonials />
      <section class="satisfaction-invitation">
        <p class="small-title">WORKED WITH COMLACHT?</p>
        <h2>Share your experience.</h2>
        <p>Your feedback helps future customers understand what attentive local property care feels like.</p>
        <a class="book-button" href="mailto:comlacht@gmail.com?subject=Customer%20review">SEND YOUR REVIEW</a>
      </section>
      <PageNext title="Return home" to="/" />
    </main>
    <SiteFooter />
  </div>
</template>
