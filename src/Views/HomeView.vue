<script setup>
import { ref } from 'vue'
import chamberBadge from '@/assets/images/badge.jpg'
import heroImage from '@/assets/images/residential-03.jpg'
import detailImage from '@/assets/images/vacation-01.jpeg'
import ProjectGallery from '@/components/home/ProjectGallery.vue'
import SiteHeader from '@/components/base/SiteHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import PageNext from '@/components/base/PageNext.vue'

const formStatus = ref('')

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
  formStatus.value = 'Your email application has been opened. Review the message there and press Send to complete your request.'
}
</script>

<template>
  <div class="site-shell">
    <SiteHeader />

    <main id="main-content" tabindex="-1">
      <section class="intro">
        <div class="intro-copy">
          <p class="eyebrow">Owner operated · Northern New York</p>
          <h1>Exceptional care for every property and every stay.</h1>
          <p class="intro-lead">Cleaning and property service specializing in vacation rental operations and hospitality—with the guest experience always in mind.</p>
          <div class="intro-actions">
            <a class="book-button" href="#contact">REQUEST A QUOTE</a>
            <a class="text-link" href="tel:+13157772989">Call 315-777-2989 <span>↗</span></a>
          </div>
          <div class="intro-trust">
            <span><strong>Insured</strong><small>D.B.A.</small></span>
            <span><strong>Owner Operated</strong><small>Lewis County, New York</small></span>
            <span><strong>Six Counties</strong><small>Northern New York</small></span>
          </div>
        </div>
        <div class="intro-visual">
          <img :src="heroImage" alt="Immaculately prepared Northern New York property" />
          <div class="intro-note"><strong>Local care.</strong><span>Remarkable stays.</span></div>
        </div>
      </section>

      <section class="about">
        <div class="about-heading"><p class="small-title">THE COMLACHT STANDARD</p><h2>Thoughtful service.<br />Noticeable results.</h2></div>
        <div class="about-copy"><p class="lead">We handle the details that make a property feel cared for—from deep cleans to guest-ready turnovers and day-to-day hosting support.</p><p>Owned and operated out of Lewis County, New York, serving Lewis, Jefferson, Herkimer, Hamilton, Oneida and St. Lawrence counties.</p></div>
      </section>

      <section class="service-showcase" id="services">
        <div class="showcase-heading">
          <p class="small-title">HOW WE CAN HELP</p>
          <h2>Everything your property needs.<br />One local team.</h2>
          <p>Choose the service that fits your property. Every option leads to clear details or a direct conversation with Comlacht.</p>
        </div>
        <div class="showcase-links">
          <router-link to="/vacation-rental"><span>FOR HOSTS</span><strong>Vacation Rental Turnovers</strong><p>Complete guest-ready cleaning with same-day turnover available.</p><b>Explore service →</b></router-link>
          <router-link to="/co-hosting"><span>FOR OWNERS</span><strong>Co-Hosting &amp; Management</strong><p>Listings, guest communication, cleaning, and property support.</p><b>See what’s included →</b></router-link>
          <router-link to="/residential"><span>FOR HOMEOWNERS</span><strong>Residential Cleaning</strong><p>Deep cleaning and scheduled upkeep tailored to your home.</p><b>View residential care →</b></router-link>
          <router-link to="/commercial"><span>FOR BUSINESSES</span><strong>Commercial Cleaning</strong><p>Dependable, detailed cleaning for professional spaces.</p><b>Explore commercial care →</b></router-link>
          <a href="#contact"><span>PROPERTY SUPPORT</span><strong>Linen Service</strong><p>Pickup, drop-off, inspection, organization, and restocking.</p><b>Request service →</b></a>
          <a href="#contact"><span>DEEP CARE</span><strong>Carpet Cleaning</strong><p>Detailed carpet care for homes, rentals, and businesses.</p><b>Request service →</b></a>
          <a href="#contact"><span>HOSPITALITY</span><strong>Motels &amp; Lodges</strong><p>Consistent room and property care with guests in mind.</p><b>Talk with Comlacht →</b></a>
          <a href="#contact"><span>REAL ESTATE</span><strong>Investor &amp; Realtor</strong><p>Reliable preparation, upkeep, and property support.</p><b>Talk with Comlacht →</b></a>
        </div>
        <div class="showcase-image"><img :src="detailImage" alt="Guest-ready vacation rental prepared by Comlacht" /><span>Guest-ready, every time.</span></div>
      </section>

      <section id="why-comlacht" class="proof-section">
        <p class="small-title">WHY COMLACHT</p>
        <h2>Local property care you can call directly</h2>
        <div class="proof-grid">
          <article>
            <p class="proof-label">INSURED BUSINESS</p>
            <h3>Insured D.B.A.</h3>
            <p>An insured business serving Northern New York.</p>
          </article>
          <article>
            <p class="proof-label">DIRECT LOCAL CARE</p>
            <h3>Owner Operated</h3>
            <p>Contact the locally based owner directly about your property needs.</p>
          </article>
          <article>
            <img :src="chamberBadge" alt="Lewis County Chamber of Commerce — Adirondacks Tug Hill" />
            <h3>Lewis County Chamber</h3>
            <p>Connected with the Lewis County Chamber of Commerce.</p>
          </article>
          <article>
            <p class="proof-label">REGIONAL SERVICE</p>
            <h3>Counties Served</h3>
            <p>Lewis, Jefferson, Herkimer, Hamilton, Oneida and St. Lawrence.</p>
          </article>
        </div>
      </section>

      <ProjectGallery />

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
        <form @submit.prevent="submitForm">
          <label>First name<input name="firstName" autocomplete="given-name" required /></label>
          <label>Last name<input name="lastName" autocomplete="family-name" required /></label>
          <label>Email<input name="email" type="email" autocomplete="email" required /></label>
          <label>Phone<input name="phone" type="tel" autocomplete="tel" /></label>
          <label class="wide"><span class="sr-only">Choose a service</span>
            <select name="issue" required>
              <option value="" disabled selected>Select a service</option>
              <option>Vacation Rental</option><option>Co-Hosting / Property Management</option>
              <option>Residential</option><option>Business</option><option>Other</option>
            </select>
          </label>
          <label class="wide">Tell us what you need help with<textarea name="message" rows="5" required></textarea></label>
          <button type="submit">Open email</button>
          <p class="form-status" aria-live="polite">{{ formStatus }}</p>
        </form>
      </section>
      <PageNext title="Explore vacation rental service" to="/vacation-rental" />
    </main>

    <SiteFooter />
  </div>
</template>
