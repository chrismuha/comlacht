<script setup>
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import serviceSheet from '@/assets/images/vacation-service-sheet.jpg'
import photo1 from '@/assets/images/vacation-01.jpeg'
import photo2 from '@/assets/images/vacation-02.jpg'
import photo3 from '@/assets/images/vacation-03.jpg'
import photo4 from '@/assets/images/vacation-04.jpg'
import photo5 from '@/assets/images/vacation-05.jpg'

const turnoverServices = [
  'Kitchens, bathrooms, living spaces and bedrooms', 'Windows and window wells',
  'Deep dusting, closets, cabinets and drawers', 'Cabinet-top grease removal',
  'Glass, mirrors and blinds', 'Hallways and high-traffic areas',
  'Fans, doors, framing, molding and spindles', 'Light switches and fixtures',
  'Carpet cleaning, walls and wood interiors', 'Furniture and trash cans',
  'Refrigerators, freezers, ovens, stovetops and vents',
  'Surface sanitizing, outdoor furniture, grills and fireplaces',
]
</script>

<template>
  <div class="site-shell detail-page-shell">
    <SiteHeader />
    <main>
      <section class="commercial-hero marble">
        <div>
          <p class="small-title">VACATION RENTAL &amp; COMMERCIAL</p>
          <h1>Same-day turnover available</h1>
          <p>Guest-ready cleaning and property care with essential tasks prioritized at every turnover and finer details completed throughout the month.</p>
          <a class="book-button" href="tel:+13157772989">REQUEST SERVICE</a>
        </div>
        <img :src="serviceSheet" alt="Original Comlacht vacation rental turnover service sheet" />
      </section>

      <section class="turnover-services">
        <div class="residential-services-heading">
          <p class="small-title">TURNOVER CLEANING</p>
          <h2>Complete guest-ready service</h2>
          <p>All services are completed during a vacation rental turnover, with priority placed on the essentials for every arriving guest.</p>
        </div>
        <ul class="residential-service-list"><li v-for="service in turnoverServices" :key="service">{{ service }}</li></ul>
      </section>

      <section class="commercial-extras">
        <article><p class="small-title">LINENS</p><h2>Inspection and service</h2><p>Bedding, sheets, towels, bath mats, kitchen mats, oven mitts, and shower curtains are inspected at every visit. Linen pickup and drop-off service is available.</p></article>
        <article><p class="small-title">AMENITIES</p><h2>Restocking and inventory</h2><p>Toiletries, toilet paper, paper towels, tissues, dish soap, sponges, trash bags, coffee, coffee pods, tea, sugar, creamer, and laundry soap can be restocked. Shopping for amenities is included in the turnover flat rate.</p></article>
      </section>

      <section class="commercial-gallery">
        <div class="residential-gallery-heading"><p class="small-title">OUR WORK</p><h2>Turnover details</h2></div>
        <div class="commercial-photo-grid">
          <img :src="photo1" alt="Vacation rental kitchen detail prepared for guests" />
          <img :src="photo2" alt="Clean vacation rental room" />
          <img :src="photo3" alt="Vacation rental cleaning detail" />
          <img :src="photo4" alt="Guest-ready vacation rental interior" />
          <img :src="photo5" alt="Vacation rental room after turnover cleaning" />
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>
