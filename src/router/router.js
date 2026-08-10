import HomeView from '@/Views/HomeView.vue';
import PlacesToStayView from '@/Views/PlacesToStayView.vue';
import ResidentialView from '@/Views/ResidentialView.vue';
import CoHostingView from '@/Views/CoHostingView.vue';
import CommercialView from '@/Views/CommercialView.vue';
import ClientSatisfactionView from '@/Views/ClientSatisfactionView.vue';
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomeView, meta: { title: 'Comlacht | Cleaning & Property Services', description: 'Owner-operated cleaning and property services serving Northern New York.' } },
  { path: '/places-to-stay', component: PlacesToStayView, meta: { title: 'Places to Stay | Comlacht', description: 'Explore Comlacht-hosted stays across Tug Hill and the Adirondack region.' } },
  { path: '/residential', component: ResidentialView, meta: { title: 'Residential Cleaning | Comlacht', description: 'Detailed residential deep cleaning and scheduled upkeep in Northern New York.' } },
  { path: '/co-hosting', component: CoHostingView, meta: { title: 'Co-Hosting & Property Management | Comlacht', description: 'Local co-hosting, guest communication, cleaning, and property support.' } },
  { path: '/commercial', component: CommercialView, meta: { title: 'Commercial Cleaning | Comlacht', description: 'Dependable commercial and hospitality-focused cleaning services.' } },
  { path: '/vacation-rental', component: CommercialView, meta: { title: 'Vacation Rental Turnovers | Comlacht', description: 'Guest-ready vacation rental turnover cleaning with same-day service available.' } },
  { path: '/client-satisfaction', component: ClientSatisfactionView, meta: { title: 'Client Satisfaction | Comlacht', description: 'Client feedback and experiences with Comlacht property care services.' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Comlacht | Cleaning & Property Services'
  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) description.setAttribute('content', to.meta.description)
})

export default router;
