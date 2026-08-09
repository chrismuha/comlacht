<script setup>
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import forestPoster from '@/assets/images/region-poster.jpg'
import forestVideo from '@/assets/images/tug-hill-forest.mp4'

function scrollToStays() {
  document.querySelector('#stays')?.scrollIntoView({ behavior: 'smooth' })
}

const stays = [
  {
    name: "Sportsman’s Hilltop Chalet",
    location: 'Turin, NY',
    region: 'Tug Hill',
    description: 'A Comlacht-hosted stay near the outdoor recreation and four-season scenery of the Tug Hill region.',
    url: 'https://www.expedia.com/Turin-Hotels-Sportsmans-Hilltop-Chalet.h103580255.Hotel-Information',
  },
  {
    name: 'Brantingham Ice Barn',
    location: 'Brantingham, NY',
    region: 'Adirondack Foothills',
    description: 'A Comlacht-hosted home base for time on the water, trails, and quiet roads around Brantingham.',
    url: 'https://www.expedia.com/Brantingham-Ice-Barn.h103560354.Hotel-Information',
  },
  {
    name: 'House on Star Lake',
    location: 'Star Lake, NY',
    region: 'Adirondacks',
    description: 'A Comlacht-hosted lakeside destination for a relaxed Northern New York getaway.',
    url: 'https://www.expedia.com/Star-Lake-Hotels-House-On-Star-Lake-For-You-And-Yours.h103580266.Hotel-Information',
  },
]
</script>

<template>
  <div class="site-shell stay-page-shell">
    <SiteHeader />
    <main>
      <section class="stay-hero">
        <div class="stay-hero-media" aria-hidden="true">
          <video autoplay muted loop playsinline :poster="forestPoster">
            <source :src="forestVideo" type="video/mp4" />
          </video>
        </div>
        <div class="stay-hero-content">
          <p class="small-title">HOSTED BY COMLACHT SHORT TERM RENTAL</p>
          <h1>Explore Tug Hill &amp;<br />the Adirondack Region</h1>
          <p>Three distinct Northern New York stays, locally hosted with the guest experience in mind.</p>
          <button class="stay-hero-link" type="button" @click="scrollToStays">Explore the stays <span aria-hidden="true">↓</span></button>
        </div>
      </section>

      <section id="stays" class="stay-listings" aria-labelledby="stays-heading">
        <div class="stay-section-heading">
          <p class="small-title">PLACES TO STAY</p>
          <h2 id="stays-heading">Choose your Northern New York basecamp</h2>
          <p>Open a property to see live availability, rates, photos, and complete booking details.</p>
        </div>

        <div class="stay-grid">
          <article v-for="(stay, index) in stays" :key="stay.name" class="stay-card">
            <div class="stay-card-number" aria-hidden="true">0{{ index + 1 }}</div>
            <p class="stay-region">{{ stay.region }}</p>
            <h3>{{ stay.name }}</h3>
            <p class="stay-location">{{ stay.location }}</p>
            <p class="stay-description">{{ stay.description }}</p>
            <a :href="stay.url" target="_blank" rel="noopener noreferrer">
              View availability <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      <section class="stay-help">
        <div>
          <p class="small-title">LOCAL HOSTING</p>
          <h2>Questions before you book?</h2>
          <p>Talk directly with Comlacht about the stays and the surrounding region.</p>
        </div>
        <div class="stay-help-actions">
          <a class="book-button" href="tel:+13157772989">CALL 315-777-2989</a>
          <a href="mailto:comlacht@gmail.com">comlacht@gmail.com</a>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>
