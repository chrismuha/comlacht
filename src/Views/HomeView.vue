<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/logo.jpg'
import wordmark from '@/assets/images/wix-wordmark.jpg'
import chamberBadge from '@/assets/images/badge.jpg'

const menuOpen = ref(false)
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
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Comlacht home">
        <img :src="logo" alt="Comlacht" />
      </a>
      <button class="menu-button" type="button" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
      <nav :class="{ open: menuOpen }" @click="menuOpen = false">
        <a href="#home">HOME</a>
        <a href="#services">Vacation Rental</a>
        <a href="#services">Residential</a>
        <a href="#services">Co-Hosting / Property Management</a>
        <a href="#contact">Places to Stay</a>
      </nav>
    </header>

    <main id="home">
      <section class="intro marble">
        <p class="eyebrow">Serving Northern New York</p>
        <div class="intro-row">
          <p>INSURED D.B.A</p>
          <img :src="logo" alt="Comlacht logo" />
          <p>Owner Operated</p>
        </div>
        <img class="wordmark" :src="wordmark" alt="Comlacht" />
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

      <section id="services" class="services marble">
        <h2>SERVICES</h2>
        <div class="services-grid">
          <div class="service-list">
            <a href="#contact">Vacation Rental</a>
            <a href="#contact">Co-Hosting</a>
            <a href="#contact">Business</a>
            <a href="#contact">Residential</a>
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

    <footer>
      <img :src="logo" alt="Comlacht" />
      <p>Cleaning &amp; Property Services · Northern New York</p>
    </footer>
  </div>
</template>
