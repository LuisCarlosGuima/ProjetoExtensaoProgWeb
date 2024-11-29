// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { path: `/home` },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('@/layouts/Main.vue'),

    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/Home.vue'),
      },
      {
        path: 'contato',
        name: 'Contato',
        component: () => import('@/views/contact/Contact.vue'),
      },
      {
        path: 'sobre',
        name: 'Sobre',
        component: () => import('@/views/about/About.vue'),
      },
      {
        path: 'gerenciamento-inteligente',
        name: 'Gerenciamento Inteligente',
        component: () => import('@/views/services/GerenciamentoInteligente.vue'),
      },
      {
        path: 'logotipo',
        name: 'Logotipo',
        component: () => import('@/views/services/Logotipo.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
    meta: {
      allowAnonymous: true
    }
  },
]

// createWebHistory(import.meta.env.VITE_BASE_URL),

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'index' || to.name === 'login')) {

    next({ path: '/Home' })
    return;
  } else next();
})

export default router
