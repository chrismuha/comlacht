<script setup>
import { ref } from 'vue'
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import PageNext from '@/components/base/PageNext.vue'
import forestPoster from '@/assets/images/region-poster.jpg'
import stay1 from '@/assets/images/vacation-01.jpeg'
import stay2 from '@/assets/images/vacation-02.jpg'
import stay3 from '@/assets/images/vacation-03.jpg'
import stay4 from '@/assets/images/vacation-04.jpg'
import stay5 from '@/assets/images/vacation-05.jpg'

const stays = [
  {
    name: "Sportsman’s Hilltop Chalet",
    location: 'Turin, NY',
    region: 'Tug Hill',
    description: 'A Comlacht-hosted stay near the outdoor recreation and four-season scenery of the Tug Hill region.',
    images: [stay1, stay4, stay2],
    url: 'https://www.expedia.com/Turin-Hotels-Sportsmans-Hilltop-Chalet.h103580255.Hotel-Information',
  },
  {
    name: 'Brantingham Ice Barn',
    location: 'Brantingham, NY',
    region: 'Adirondack Foothills',
    description: 'A Comlacht-hosted home base for time on the water, trails, and quiet roads around Brantingham.',
    images: [stay3, stay2, stay5],
    url: 'https://www.expedia.com/Brantingham-Ice-Barn.h103560354.Hotel-Information',
  },
  {
    name: 'House on Star Lake',
    location: 'Star Lake, NY',
    region: 'Adirondacks',
    description: 'A Comlacht-hosted lakeside destination for a relaxed Northern New York getaway.',
    images: [stay5, stay1, stay4],
    url: 'https://www.expedia.com/Star-Lake-Hotels-House-On-Star-Lake-For-You-And-Yours.h103580266.Hotel-Information',
  },
]

const galleries = ref([])
const currentSlides = ref(stays.map(() => 0))
const dragStates = stays.map(() => ({ active: false, startX: 0, startScroll: 0 }))

function showGallery(stayIndex, photoIndex) {
  const gallery = galleries.value[stayIndex]
  const next = (photoIndex + stays[stayIndex].images.length) % stays[stayIndex].images.length
  currentSlides.value[stayIndex] = next
  gallery?.scrollTo({ left: next * gallery.clientWidth, behavior: 'smooth' })
}

function syncGallery(stayIndex) {
  const gallery = galleries.value[stayIndex]
  if (gallery?.clientWidth) currentSlides.value[stayIndex] = Math.round(gallery.scrollLeft / gallery.clientWidth)
}

function startDrag(event, stayIndex) {
  if (event.pointerType !== 'mouse' || event.button !== 0) return
  const gallery = galleries.value[stayIndex]
  const state = dragStates[stayIndex]
  state.active = true
  state.startX = event.clientX
  state.startScroll = gallery.scrollLeft
  gallery.classList.add('dragging')
  gallery.setPointerCapture(event.pointerId)
}

function dragGallery(event, stayIndex) {
  const gallery = galleries.value[stayIndex]
  const state = dragStates[stayIndex]
  if (!state.active) return
  event.preventDefault()
  gallery.scrollLeft = state.startScroll - (event.clientX - state.startX)
}

function endDrag(event, stayIndex) {
  const gallery = galleries.value[stayIndex]
  const state = dragStates[stayIndex]
  if (!state.active) return
  state.active = false
  gallery.classList.remove('dragging')
  if (gallery.hasPointerCapture?.(event.pointerId)) gallery.releasePointerCapture(event.pointerId)
  showGallery(stayIndex, Math.round(gallery.scrollLeft / gallery.clientWidth))
}
</script>

<template>
  <div class="site-shell stay-page-shell">
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <section class="stay-hero">
        <div class="stay-hero-media">
          <img :src="forestPoster" alt="Tug Hill and Adirondack forest landscape" />
        </div>
        <div class="stay-hero-content">
          <p class="small-title">HOSTED BY COMLACHT SHORT TERM RENTAL</p>
          <h1>Explore Tug Hill &amp; the Adirondack Region</h1>
          <p>Three distinct Northern New York stays, locally hosted with the guest experience in mind.</p>
          <p class="stay-hero-note">Three distinctive stays · One attentive local host</p>
        </div>
      </section>

      <section id="stays" class="stay-listings" aria-labelledby="stays-heading">
        <div class="stay-section-heading">
          <p class="small-title">PLACES TO STAY</p>
          <h2 id="stays-heading">Choose your Northern New York basecamp</h2>
          <p>Open a property to see live availability, rates, photos, and complete booking details.</p>
        </div>

        <div class="property-list">
          <article v-for="(stay, stayIndex) in stays" :key="stay.name" class="property-showcase">
            <div class="property-gallery">
              <div
                :ref="element => galleries[stayIndex] = element"
                class="property-gallery-track"
                tabindex="0"
                role="region"
                aria-roledescription="carousel"
                :aria-label="`${stay.name} photo gallery`"
                @keydown.left.prevent="showGallery(stayIndex, currentSlides[stayIndex] - 1)"
                @keydown.right.prevent="showGallery(stayIndex, currentSlides[stayIndex] + 1)"
                @scroll.passive="syncGallery(stayIndex)"
                @pointerdown="startDrag($event, stayIndex)"
                @pointermove="dragGallery($event, stayIndex)"
                @pointerup="endDrag($event, stayIndex)"
                @pointercancel="endDrag($event, stayIndex)"
              >
                <img v-for="(photo, photoIndex) in stay.images" :key="photo" :src="photo" :alt="`${stay.name} photo ${photoIndex + 1}`" />
              </div>
              <div class="property-gallery-controls">
                <button type="button" :aria-label="`Previous photo of ${stay.name}`" @click="showGallery(stayIndex, currentSlides[stayIndex] - 1)">←</button>
                <div class="property-gallery-dots" aria-label="Choose photo">
                  <button v-for="(_, photoIndex) in stay.images" :key="photoIndex" type="button" :class="{ active: currentSlides[stayIndex] === photoIndex }" :aria-label="`Show photo ${photoIndex + 1} of ${stay.name}`" :aria-current="currentSlides[stayIndex] === photoIndex ? 'true' : undefined" @click="showGallery(stayIndex, photoIndex)"></button>
                </div>
                <button type="button" :aria-label="`Next photo of ${stay.name}`" @click="showGallery(stayIndex, currentSlides[stayIndex] + 1)">→</button>
              </div>
            </div>
            <div class="property-copy">
              <p class="stay-region">{{ stay.region }}</p>
              <h3>{{ stay.name }}</h3>
              <p class="stay-location">{{ stay.location }}</p>
              <p class="stay-description">{{ stay.description }}</p>
              <a :href="stay.url" target="_blank" rel="noopener noreferrer">Check dates &amp; book <span aria-hidden="true">↗</span></a>
            </div>
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
      <PageNext title="See client satisfaction" to="/client-satisfaction" />
    </main>
    <SiteFooter />
  </div>
</template>
