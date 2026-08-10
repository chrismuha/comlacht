<script setup>
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import kitchen from '@/assets/images/residential-01.jpg'
import carpet from '@/assets/images/residential-02.jpg'
import bathroom from '@/assets/images/residential-03.jpg'
import fan from '@/assets/images/residential-04.jpg'
import cabinetBefore from '@/assets/images/residential-before.jpg'
import cabinetAfter from '@/assets/images/residential-after.jpg'

const deepCleaning = [
  'Kitchens', 'Bathrooms', 'Living spaces', 'Bedrooms', 'Windows and window wells',
  'Deep dusting', 'Closets, cabinets and drawers', 'Cabinet-top grease removal',
  'Glass and mirrors', 'Blinds', 'High-traffic areas and hallways', 'Fans',
  'Doors, framing, molding and spindles', 'Light switches and fixtures',
  'Carpet cleaning', 'Walls and wood interiors', 'Furniture',
  'Refrigerators and freezers', 'Ovens, stovetops and vents', 'Trash cans',
  'Select appliances', 'Sanitized surfaces', 'Outdoor furniture', 'Fireplaces',
]
</script>

<template>
  <div class="site-shell residential-page-shell">
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <section class="residential-hero marble">
        <div class="residential-hero-copy">
          <p class="small-title">COMLACHT RESIDENTIAL</p>
          <h1>Deep cleaning and dependable upkeep</h1>
          <p>Detailed residential cleaning for Northern New York homes, with weekly and biweekly service available.</p>
          <a class="book-button" href="tel:+13157772989">CALL 315-777-2989</a>
        </div>
        <img :src="kitchen" alt="Bright, professionally cleaned residential kitchen" />
      </section>

      <section class="residential-services" aria-labelledby="residential-services-title">
        <div class="residential-services-heading">
          <p class="small-title">RESIDENTIAL SERVICES</p>
          <h2 id="residential-services-title">A thorough clean, room by room</h2>
          <p>Initial deep-clean services can include any of the following based on your home’s needs.</p>
        </div>
        <ul class="residential-service-list">
          <li v-for="service in deepCleaning" :key="service">{{ service }}</li>
        </ul>
      </section>

      <section class="residential-schedule">
        <div>
          <p class="small-title">ONGOING CARE</p>
          <h2>Periodically scheduled maintenance cleaning</h2>
          <p class="maintenance-copy">Maintenance and upkeep cleaning is available after the initial deep-clean visit. Choose weekly, biweekly, monthly, every six months, quarterly, or annual service.</p>
          <p class="minimum-fee">$100 minimum fee</p>
        </div>
        <img :src="kitchen" alt="Clean residential kitchen completed by Comlacht" />
      </section>

      <section class="residential-gallery" aria-labelledby="residential-gallery-title">
        <div class="residential-gallery-heading">
          <p class="small-title">OUR WORK</p>
          <h2 id="residential-gallery-title">Residential cleaning details</h2>
        </div>
        <div class="residential-photo-grid">
          <figure><img :src="carpet" alt="Carpet cleaning in progress" /><figcaption>Carpet cleaning available</figcaption></figure>
          <figure><img :src="bathroom" alt="Clean bathroom with lake-view windows" /><figcaption>Bathrooms, glass and windows</figcaption></figure>
          <figure><img :src="fan" alt="Ceiling fan being deep dusted" /><figcaption>Fans and deep dusting</figcaption></figure>
        </div>
        <div class="cabinet-cleaning">
          <div>
            <p class="small-title">BEFORE &amp; AFTER</p>
            <h3>Cabinet-top grease removal</h3>
          </div>
          <figure><span>Before</span><img :src="cabinetBefore" alt="Dusty cabinet top before cleaning" /></figure>
          <figure><span>After</span><img :src="cabinetAfter" alt="Cabinet top after grease and dust removal" /></figure>
        </div>
      </section>

      <section class="linen-service">
        <div>
          <p class="small-title">LINENS</p>
          <h2>Pickup, drop-off and organization</h2>
        </div>
        <div>
          <p>Pickup and drop-off service is available for bedding, sheets, towels, bath mats, kitchen mats, oven mitts, and shower curtains.</p>
          <p>Linen closets and storage spaces can also be organized and decluttered.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>
