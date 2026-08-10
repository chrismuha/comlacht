<script setup>
import { ref } from 'vue'
import vacation from '@/assets/images/vacation-04.jpg'
import residential from '@/assets/images/residential-03.jpg'
import linens from '@/assets/images/vacation-01.jpeg'
import property from '@/assets/images/residential-01.jpg'

const slides = [
  { title: 'Vacation Rental Turnovers', description: 'Guest-ready spaces prepared with essential tasks prioritized for every arriving guest.', image: vacation },
  { title: 'Residential & Business', description: 'Detailed cleaning and dependable upkeep for homes and commercial properties.', image: residential },
  { title: 'Linens & Hospitality', description: 'Linen inspection, pickup, drop-off, organization, and hospitality support.', image: linens },
  { title: 'Property Management', description: 'Local co-hosting and attentive property care between every stay.', image: property },
]

const currentIndex = ref(0)
const slider = ref(null)
let scrollFrame = null
let dragging = false
let dragStartX = 0
let dragStartScroll = 0

function show(index) {
  const nextIndex = (index + slides.length) % slides.length
  currentIndex.value = nextIndex
  slider.value?.scrollTo({
    left: nextIndex * slider.value.clientWidth,
    behavior: 'smooth',
  })
}

function syncCurrentSlide() {
  if (scrollFrame) cancelAnimationFrame(scrollFrame)
  scrollFrame = requestAnimationFrame(() => {
    if (!slider.value?.clientWidth) return
    currentIndex.value = Math.round(slider.value.scrollLeft / slider.value.clientWidth)
  })
}

function startMouseDrag(event) {
  if (event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('a, button')) return
  dragging = true
  dragStartX = event.clientX
  dragStartScroll = slider.value.scrollLeft
  slider.value.classList.add('dragging')
  slider.value.setPointerCapture(event.pointerId)
}

function moveMouseDrag(event) {
  if (!dragging) return
  event.preventDefault()
  slider.value.scrollLeft = dragStartScroll - (event.clientX - dragStartX)
}

function endMouseDrag(event) {
  if (!dragging) return
  dragging = false
  slider.value.classList.remove('dragging')
  if (slider.value.hasPointerCapture?.(event.pointerId)) slider.value.releasePointerCapture(event.pointerId)
  show(Math.round(slider.value.scrollLeft / slider.value.clientWidth))
}
</script>

<template>
  <section id="gallery" class="project-gallery" aria-labelledby="gallery-title">
    <div class="gallery-heading">
      <p>OUR WORK</p>
      <h2 id="gallery-title">Project Gallery</h2>
      <p>A closer look at the spaces and details Comlacht cares for.</p>
    </div>

    <div class="gallery-frame">
      <button type="button" class="gallery-arrow previous" aria-label="Previous project category" @click="show(currentIndex - 1)">←</button>
      <div ref="slider" class="gallery-slider" tabindex="0" aria-roledescription="carousel" aria-label="Comlacht project categories" @keydown.left.prevent="show(currentIndex - 1)" @keydown.right.prevent="show(currentIndex + 1)" @scroll.passive="syncCurrentSlide" @pointerdown="startMouseDrag" @pointermove="moveMouseDrag" @pointerup="endMouseDrag" @pointercancel="endMouseDrag">
        <div class="gallery-track">
          <article v-for="(slide, index) in slides" :key="slide.title" class="gallery-slide" :aria-hidden="index !== currentIndex">
            <div class="photo-slot"><img :src="slide.image" :alt="slide.title" /></div>
            <div class="slide-copy">
              <h3>{{ slide.title }}</h3>
              <p>{{ slide.description }}</p>
            </div>
          </article>
        </div>
      </div>
      <button type="button" class="gallery-arrow next" aria-label="Next project category" @click="show(currentIndex + 1)">→</button>
    </div>

    <div class="gallery-dots" aria-label="Choose project category">
      <button v-for="(slide, index) in slides" :key="slide.title" type="button" :class="{ active: index === currentIndex }" :aria-label="`Show ${slide.title}`" :aria-current="index === currentIndex ? 'true' : undefined" @click="show(index)"></button>
    </div>
  </section>
</template>

<style scoped>
.project-gallery { padding: clamp(80px, 9vw, 130px) 0; background: #0c2a1d; color: white; overflow: hidden; }
.gallery-heading { padding: 0 45px; text-align: center; }
.gallery-heading > p:first-child { margin: 0; color: #b4c8b0; font: 700 12px Avenir, sans-serif; letter-spacing: .25em; }
.gallery-heading h2 { margin: 8px 0 9px; font: 500 clamp(36px, 6vw, 56px)/1 'Brandon Grot', Avenir, sans-serif; }
.gallery-heading > p:last-child { margin: 0 0 48px; color: #c7d2c9; font: 500 16px Avenir, sans-serif; }
.gallery-frame { position: relative; }
.gallery-slider { width: 100%; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scroll-behavior: smooth; overscroll-behavior-x: contain; -webkit-overflow-scrolling: touch; scrollbar-width: none; touch-action: pan-x pan-y; cursor: grab; outline-offset: -4px; }
.gallery-slider::-webkit-scrollbar { display: none; }
.gallery-slider:active { cursor: grabbing; }
.gallery-slider.dragging { scroll-snap-type: none; scroll-behavior: auto; user-select: none; }
.gallery-slider.dragging * { pointer-events: none; }
.gallery-track { display: flex; }
.gallery-slide { min-width: 100%; padding: 0 90px; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(230px, .75fr); align-items: stretch; scroll-snap-align: start; scroll-snap-stop: always; }
.photo-slot { min-height: 520px; overflow: hidden; background: #173f2d; }
.photo-slot img { width: 100%; height: 100%; display: block; object-fit: cover; }
.slide-copy { padding: 48px 42px; display: flex; flex-direction: column; justify-content: center; background: #173f2d; }
.slide-copy h3 { margin: 0 0 17px; font: 500 clamp(27px, 4vw, 39px)/1.05 'Brandon Grot', Avenir, sans-serif; }
.slide-copy > p:last-child { margin: 0; font: 600 18px/1.5 'Josefin Slab', serif; }
.gallery-arrow { position: absolute; top: 50%; z-index: 3; width: 50px; height: 50px; display: grid; place-items: center; transform: translateY(-50%); border: 1px solid #fff8; border-radius: 50%; background: #0c2a1d; color: white; font-size: 24px; cursor: pointer; touch-action: manipulation; }
.gallery-arrow:hover { background: #8fa885; color: #0c2a1d; }
.previous { left: 20px; }
.next { right: 20px; }
.gallery-dots { margin-top: 25px; display: flex; justify-content: center; gap: 10px; }
.gallery-dots button { width: 18px; height: 18px; padding: 3px; border: 4px solid #0c2a1d; border-radius: 50%; outline: 1px solid white; background: transparent; background-clip: content-box; cursor: pointer; touch-action: manipulation; }
.gallery-dots button.active { background: white; }
@media (max-width: 760px) {
  .gallery-heading { padding: 0 22px; }
  .gallery-slide { padding: 0 52px; grid-template-columns: 1fr; }
  .photo-slot { min-height: 300px; }
  .slide-copy { min-height: 210px; padding: 28px 25px; }
  .gallery-arrow { width: 40px; height: 40px; }
  .previous { left: 7px; }
  .next { right: 7px; }
}
@media (prefers-reduced-motion: reduce) { .gallery-slider { scroll-behavior: auto; } }
</style>
