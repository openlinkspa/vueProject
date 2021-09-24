export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
]
