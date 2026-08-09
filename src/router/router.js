import HomeView from '@/Views/HomeView.vue';
import PlacesToStayView from '@/Views/PlacesToStayView.vue';
import ResidentialView from '@/Views/ResidentialView.vue';
import CoHostingView from '@/Views/CoHostingView.vue';
import CommercialView from '@/Views/CommercialView.vue';
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/places-to-stay', component: PlacesToStayView },
  { path: '/residential', component: ResidentialView },
  { path: '/co-hosting', component: CoHostingView },
  { path: '/commercial', component: CommercialView },
  { path: '/vacation-rental', component: CommercialView },
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

export default router;
