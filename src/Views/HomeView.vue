<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/logo.jpg'
import chamberBadge from '@/assets/images/badge.jpg'
import ProjectGallery from '@/components/home/ProjectGallery.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'

const sent = ref(false)

function submitForm(event) {
  const form = new FormData(event.currentTarget)
  const subject = `Comlacht enquiry: ${form.get('issue')}`
  const body = [
    `Name: ${form.get('firstName')} ${form.get('lastName')}`,
    `Email: ${form.get('email')}`,
    `Phone: ${form.get('phone') || 'Not provided'}`,
    '',
    form.get('message'),
  ].join('\n')

  window.location.href = `mailto:comlacht@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<template>
  <div class="site-shell">
    <SiteHeader />

    <main id="home">
      <section class="intro marble">
        <p class="eyebrow">Serving Northern New York</p>
        <div class="intro-row">
          <p>INSURED D.B.A</p>
          <img :src="logo" alt="Comlacht logo" />
          <p>Owner Operated</p>
        </div>
        <img class="wordmark" :src="logo" alt="Comlacht" />
        <a class="book-button" href="https://calendar.google.com/calendar/u/0?cid=NzQ0OTlmYjk2NTZiZjhiMTdhZWYzYjMzZWZhMTA0OTllNTg2ZDYxNjAyNzY4ZjZkZGVlMGMwZTFkMjc3NTk1ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank" rel="noopener">BOOK NOW</a>
      </section>

      <section class="about">
        <p class="small-title">COMLACHT</p>
        <h1>NORTHERN NEW YORK</h1>
        <a class="phone" href="tel:+13157772989">315-777-2989</a>
        <p class="lead">Cleaning &amp; Property Service Specializing in Vacation Rental Operations and Hospitality with the guest experience in mind.</p>
        <p class="counties">Serving: Lewis, Jefferson, Herkimer, Hamilton, Oneida and St. Lawrence</p>
        <p>Owned and Operated out of Lewis County, New York.</p>
      </section>

      <section id="why-comlacht" class="proof-section">
        <p class="small-title">WHY COMLACHT</p>
        <h2>Local property care you can call directly</h2>
        <div class="proof-grid">
          <article>
            <span aria-hidden="true">✓</span>
            <h3>Insured D.B.A.</h3>
            <p>An insured business serving Northern New York.</p>
          </article>
          <article>
            <span aria-hidden="true">✓</span>
            <h3>Owner Operated</h3>
            <p>Contact the locally based owner directly about your property needs.</p>
          </article>
          <article>
            <img :src="chamberBadge" alt="Lewis County Chamber of Commerce — Adirondacks Tug Hill" />
            <h3>Lewis County Chamber</h3>
            <p>Connected with the Lewis County Chamber of Commerce.</p>
          </article>
          <article>
            <span aria-hidden="true">6</span>
            <h3>Counties Served</h3>
            <p>Lewis, Jefferson, Herkimer, Hamilton, Oneida and St. Lawrence.</p>
          </article>
        </div>
      </section>

      <section id="services" class="services marble">
        <h2>SERVICES</h2>
        <div class="services-grid">
          <div class="service-list">
            <router-link to="/vacation-rental">Vacation Rental</router-link>
            <router-link to="/co-hosting">Co-Hosting</router-link>
            <router-link to="/commercial">Business / Commercial</router-link>
            <router-link to="/residential">Residential</router-link>
          </div>
          <img :src="chamberBadge" alt="Lewis County Chamber of Commerce — Adirondacks Tug Hill" />
          <div class="service-list">
            <a href="#contact">Linens</a>
            <a href="#contact">Carpet Cleaning</a>
            <a href="#contact">Motels &amp; Lodges</a>
            <a href="#contact">Investor &amp; Realtor</a>
          </div>
        </div>
        <p class="service-contact">For more information or to book services call:<br><a href="tel:+13157772989">315-777-2989</a></p>
        <p class="service-email">Email: <a href="mailto:comlacht@gmail.com">comlacht@gmail.com</a></p>
      </section>

      <ProjectGallery />

      <Testimonials />

      <section id="places-to-stay" class="places-to-stay marble">
        <div class="stay-copy">
          <p class="small-title">HOSTED BY COMLACHT SHORT TERM RENTAL</p>
          <h2>Explore Tug Hill &amp; the Adirondack Region</h2>
          <p>Discover Comlacht-hosted stays in Turin, Brantingham, and Star Lake, with direct links to current availability and booking details.</p>
          <div class="stay-actions">
            <router-link class="book-button" to="/places-to-stay">VIEW PLACES TO STAY</router-link>
            <a class="stay-contact" href="#contact">ASK ABOUT A STAY</a>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="contact-heading">
          <p>How can we help?</p>
          <h2>Request a Quote or Call</h2>
          <a href="tel:+13157772989">315-777-2989</a>
        </div>
        <form v-if="!sent" @submit.prevent="submitForm">
          <label>First name<input name="firstName" autocomplete="given-name" required /></label>
          <label>Last name<input name="lastName" autocomplete="family-name" required /></label>
          <label>Email<input name="email" type="email" autocomplete="email" required /></label>
          <label>Phone<input name="phone" type="tel" autocomplete="tel" /></label>
          <label class="wide">Choose an Issue
            <select name="issue" required>
              <option value="" disabled selected>Select a service</option>
              <option>Vacation Rental</option><option>Co-Hosting / Property Management</option>
              <option>Residential</option><option>Business</option><option>Other</option>
            </select>
          </label>
          <label class="wide">Tell us what you need help with<textarea name="message" rows="5" required></textarea></label>
          <button type="submit">Send</button>
        </form>
        <div v-else class="thanks">
          <h3>Thank You for your enquiry</h3>
          <p>We’ll get back to you shortly.</p>
          <a href="mailto:comlacht@gmail.com">Or email us directly</a>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
