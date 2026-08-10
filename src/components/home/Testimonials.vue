<script setup>
import { ref } from 'vue'

const slides = [
  { audience: 'PROPERTY OWNERS', title: 'Your experience matters', copy: 'Have you worked with Comlacht on a property or short-term rental? Share your experience for consideration in this section.' },
  { audience: 'VACATION RENTAL HOSTS', title: 'Verified host reviews', copy: 'Reviews from hosting and turnover clients will appear here after the customer confirms the wording and gives permission to publish it.' },
  { audience: 'RESIDENTIAL CLIENTS', title: 'Verified local feedback', copy: 'Residential customer feedback will be added here with permission. No anonymous or invented testimonials will be published.' },
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
  slider.value?.scrollTo({ left: nextIndex * slider.value.clientWidth, behavior: 'smooth' })
}

function syncCurrentSlide() {
  if (scrollFrame) cancelAnimationFrame(scrollFrame)
  scrollFrame = requestAnimationFrame(() => {
    if (slider.value?.clientWidth) currentIndex.value = Math.round(slider.value.scrollLeft / slider.value.clientWidth)
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
  <section id="testimonials" class="testimonials" aria-labelledby="testimonials-title">
    <div class="testimonial-heading">
      <p>CLIENT REVIEWS</p>
      <h2 id="testimonials-title">Built for verified feedback</h2>
      <p>This section is ready for genuine customer reviews as permission is received.</p>
    </div>
    <div class="testimonial-frame">
      <button type="button" class="testimonial-arrow previous" aria-label="Previous review" @click="show(currentIndex - 1)">←</button>
      <div ref="slider" class="testimonial-slider" tabindex="0" aria-roledescription="carousel" aria-label="Comlacht customer review categories" @keydown.left.prevent="show(currentIndex - 1)" @keydown.right.prevent="show(currentIndex + 1)" @scroll.passive="syncCurrentSlide" @pointerdown="startMouseDrag" @pointermove="moveMouseDrag" @pointerup="endMouseDrag" @pointercancel="endMouseDrag">
        <div class="testimonial-track">
          <article v-for="(slide, index) in slides" :key="slide.audience" class="testimonial-slide" :aria-hidden="index !== currentIndex">
            <div class="quote-mark" aria-hidden="true">“</div>
            <p class="testimonial-audience">{{ slide.audience }}</p>
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.copy }}</p>
            <a href="mailto:comlacht@gmail.com?subject=Customer%20review">Share your experience</a>
          </article>
        </div>
      </div>
      <button type="button" class="testimonial-arrow next" aria-label="Next review" @click="show(currentIndex + 1)">→</button>
    </div>
    <div class="testimonial-dots" aria-label="Choose review category">
      <button v-for="(slide, index) in slides" :key="slide.audience" type="button" :class="{ active: index === currentIndex }" :aria-label="`Show ${slide.audience.toLowerCase()}`" :aria-current="index === currentIndex ? 'true' : undefined" @click="show(index)"></button>
    </div>
  </section>
</template>

<style scoped>
.testimonials { padding: 72px 0 66px; overflow: hidden; background: #eef2ec; color: #282626; }
.testimonial-heading { padding: 0 45px; text-align: center; }
.testimonial-heading > p:first-child { margin: 0; color: #2f7135; font-size: 14px; font-weight: 800; letter-spacing: .25em; }
.testimonial-heading h2 { margin: 8px 0 10px; font: 500 clamp(36px, 6vw, 55px)/1 'Brandon Grot', Avenir, sans-serif; }
.testimonial-heading > p:last-child { margin: 0 0 38px; font: 600 17px/1.5 'Josefin Slab', serif; }
.testimonial-frame { position: relative; }
.testimonial-slider { width: 100%; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scroll-behavior: smooth; overscroll-behavior-x: contain; -webkit-overflow-scrolling: touch; scrollbar-width: none; touch-action: pan-x pan-y; cursor: grab; }
.testimonial-slider::-webkit-scrollbar { display: none; }
.testimonial-slider.dragging { scroll-snap-type: none; scroll-behavior: auto; user-select: none; cursor: grabbing; }
.testimonial-slider.dragging * { pointer-events: none; }
.testimonial-track { display: flex; }
.testimonial-slide { min-width: 100%; min-height: 340px; padding: 48px max(76px, 15%); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; scroll-snap-align: start; scroll-snap-stop: always; }
.quote-mark { height: 52px; color: #347c3c; font: 700 76px/1 Georgia, serif; }
.testimonial-audience { margin: 12px 0 8px; color: #2f7135; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
.testimonial-slide h3 { margin: 0 0 14px; font: 500 clamp(29px, 5vw, 42px)/1.08 'Brandon Grot', Avenir, sans-serif; }
.testimonial-slide > p:not(.testimonial-audience) { max-width: 650px; margin: 0 0 24px; font: 700 19px/1.55 'Josefin Slab', serif; }
.testimonial-slide a { padding-bottom: 5px; border-bottom: 2px solid #347c3c; color: #255e2b; font-weight: 800; text-decoration: none; }
.testimonial-arrow { position: absolute; top: 50%; z-index: 3; width: 50px; height: 50px; display: grid; place-items: center; transform: translateY(-50%); border: 2px solid #347c3c; border-radius: 50%; background: #fff; color: #255e2b; font-size: 24px; cursor: pointer; touch-action: manipulation; }
.testimonial-arrow:hover, .testimonial-arrow:focus-visible { background: #347c3c; color: #fff; }
.previous { left: 20px; }.next { right: 20px; }
.testimonial-dots { margin-top: 15px; display: flex; justify-content: center; gap: 12px; }
.testimonial-dots button { width: 18px; height: 18px; padding: 3px; border: 4px solid #eef2ec; border-radius: 50%; outline: 1px solid #347c3c; background: transparent; background-clip: content-box; cursor: pointer; touch-action: manipulation; }
.testimonial-dots button.active { background: #347c3c; }
@media (max-width: 760px) { .testimonial-heading { padding: 0 22px; }.testimonial-slide { min-height: 400px; padding: 42px 54px; }.testimonial-arrow { width: 40px; height: 40px; }.previous { left: 7px; }.next { right: 7px; } }
@media (prefers-reduced-motion: reduce) { .testimonial-slider { scroll-behavior: auto; } }
</style>
