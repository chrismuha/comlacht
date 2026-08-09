<script setup>
import { ref } from 'vue'

const slides = [
  { title: 'Vacation Rental Turnovers', description: 'Add finished turnover and guest-ready property photos here.' },
  { title: 'Residential & Business', description: 'Add before-and-after residential and commercial cleaning photos here.' },
  { title: 'Linens & Hospitality', description: 'Add linen preparation, motel and lodge service photos here.' },
  { title: 'Property Management', description: 'Add co-hosting, investor and realtor property-care photos here.' },
]

const currentIndex = ref(0)
const slider = ref(null)
let scrollFrame = null

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
</script>

<template>
  <section id="gallery" class="project-gallery" aria-labelledby="gallery-title">
    <div class="gallery-heading">
      <p>OUR WORK</p>
      <h2 id="gallery-title">Project Gallery</h2>
      <p>Real project photos will appear here as they are added.</p>
    </div>

    <div class="gallery-frame">
      <button type="button" class="gallery-arrow previous" aria-label="Previous project category" @click="show(currentIndex - 1)">←</button>
      <div ref="slider" class="gallery-slider" tabindex="0" aria-roledescription="carousel" aria-label="Comlacht project categories" @keydown.left.prevent="show(currentIndex - 1)" @keydown.right.prevent="show(currentIndex + 1)" @scroll.passive="syncCurrentSlide">
        <div class="gallery-track">
          <article v-for="(slide, index) in slides" :key="slide.title" class="gallery-slide" :aria-hidden="index !== currentIndex">
            <div class="photo-slot" aria-hidden="true">
              <span>＋</span>
              <small>PROJECT PHOTO</small>
            </div>
            <div class="slide-copy">
              <p>{{ String(index + 1).padStart(2, '0') }} / {{ String(slides.length).padStart(2, '0') }}</p>
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
.project-gallery { padding: 65px 0 58px; background: #282626; color: white; overflow: hidden; }
.gallery-heading { padding: 0 45px; text-align: center; }
.gallery-heading > p:first-child { margin: 0; color: #a8c7aa; font: 700 14px Avenir, sans-serif; letter-spacing: .25em; }
.gallery-heading h2 { margin: 8px 0 9px; font: 500 clamp(36px, 6vw, 56px)/1 'Brandon Grot', Avenir, sans-serif; }
.gallery-heading > p:last-child { margin: 0 0 35px; font: 600 17px 'Josefin Slab', serif; }
.gallery-frame { position: relative; }
.gallery-slider { width: 100%; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scroll-behavior: smooth; overscroll-behavior-x: contain; -webkit-overflow-scrolling: touch; scrollbar-width: none; touch-action: pan-x pan-y; cursor: grab; outline-offset: -4px; }
.gallery-slider::-webkit-scrollbar { display: none; }
.gallery-slider:active { cursor: grabbing; }
.gallery-track { display: flex; }
.gallery-slide { min-width: 100%; padding: 0 90px; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(230px, .75fr); align-items: stretch; scroll-snap-align: start; scroll-snap-stop: always; }
.photo-slot { min-height: 420px; display: grid; place-content: center; gap: 12px; text-align: center; background: linear-gradient(#ffffff12, #ffffff08), url('../../assets/images/wix-hero.jpg') center / cover; border: 1px solid #ffffff40; color: #347c3c; }
.photo-slot span { font: 300 70px/1 Avenir, sans-serif; }
.photo-slot small { color: #282626; font: 700 12px Avenir, sans-serif; letter-spacing: .2em; }
.slide-copy { padding: 48px 38px; display: flex; flex-direction: column; justify-content: center; background: #347c3c; }
.slide-copy > p:first-child { margin: 0 0 28px; font: 700 13px Avenir, sans-serif; letter-spacing: .17em; }
.slide-copy h3 { margin: 0 0 17px; font: 500 clamp(27px, 4vw, 39px)/1.05 'Brandon Grot', Avenir, sans-serif; }
.slide-copy > p:last-child { margin: 0; font: 600 18px/1.5 'Josefin Slab', serif; }
.gallery-arrow { position: absolute; top: 50%; z-index: 3; width: 50px; height: 50px; display: grid; place-items: center; transform: translateY(-50%); border: 2px solid #347c3c; border-radius: 50%; background: #282626; color: white; font-size: 24px; cursor: pointer; touch-action: manipulation; }
.gallery-arrow:hover { background: #347c3c; }
.previous { left: 20px; }
.next { right: 20px; }
.gallery-dots { margin-top: 25px; display: flex; justify-content: center; gap: 10px; }
.gallery-dots button { width: 18px; height: 18px; padding: 3px; border: 4px solid #282626; border-radius: 50%; outline: 1px solid white; background: transparent; background-clip: content-box; cursor: pointer; touch-action: manipulation; }
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
