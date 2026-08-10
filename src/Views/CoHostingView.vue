<script setup>
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import PageNext from '@/components/base/PageNext.vue'
import airbnbLogo from '@/assets/images/airbnb-logo.png'
import vrboLogo from '@/assets/images/vrbo-logo.png'
</script>

<template>
  <div class="site-shell detail-page-shell">
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <section class="detail-hero marble">
        <p class="small-title">CO-HOSTING &amp; PROPERTY MANAGEMENT</p>
        <h1>Local support for every guest stay</h1>
        <p>Comlacht helps Northern New York short-term rental owners manage listings, guests, cleaning, and the details between stays.</p>
        <a class="book-button" href="tel:+13157772989">TALK WITH COMLACHT</a>
      </section>

      <section class="hosting-services">
        <div class="platforms" aria-label="Supported booking platforms">
          <img :src="airbnbLogo" alt="Airbnb" />
          <img :src="vrboLogo" alt="Vrbo" />
        </div>
        <div class="hosting-service-columns">
          <article>
            <p class="small-title">THIS INCLUDES</p>
            <h2>Day-to-day hosting</h2>
            <ul><li>Listing services</li><li>Guest communications</li><li>Cleaning</li></ul>
          </article>
          <article>
            <p class="small-title">BILLED SEPARATELY</p>
            <h2>Property support</h2>
            <ul><li>Maintenance and repairs</li><li>Purchasing and restocking amenities</li></ul>
          </article>
        </div>
      </section>

      <section class="hosting-rate">
        <div>
          <p class="small-title">STRAIGHTFORWARD PRICING</p>
          <h2>Simple pricing for complete support</h2>
          <p>The co-hosting and property management rate is 10 percent of the total stay.</p>
        </div>
        <div class="rate-mark"><strong>10%</strong><span>of total stay</span></div>
      </section>

      <section class="detail-cta">
        <div><p class="small-title">OWNER OPERATED</p><h2>Keep your property guest-ready.</h2></div>
        <div><a class="book-button" href="tel:+13157772989">CALL 315-777-2989</a><a href="mailto:comlacht@gmail.com">comlacht@gmail.com</a></div>
      </section>
      <PageNext title="Explore places to stay" to="/places-to-stay" />
    </main>
    <SiteFooter />
  </div>
</template>
