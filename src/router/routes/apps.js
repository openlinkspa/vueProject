export default [
  {
    path: '/datos-reales',
    name: 'datos-reales',
    component: () => import('@/views/apps/datos/DatosReales.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: '',//supongo que aca se agrega una clase scss
    },
  },
  {
    path: '/config-centro',
    name: 'configuration-center',
    component: () => import('@/views/apps/configurations/Center.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: '',//supongo que aca se agrega una clase scss
    },
  },
  {
    path: '/config-sensores',
    name: 'configuration-sensor',
    component: () => import('@/views/apps/configurations/Sensor.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: '',//supongo que aca se agrega una clase scss
    },
  },
  {
    path: '/config-parametros',
    name: 'configuration-parameters',
    component: () => import('@/views/apps/configurations/Parameters.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: '',//supongo que aca se agrega una clase scss
    },
  },
  {
    path: '/maestros',
    name: 'masters',
    component: () => import('@/views/apps/masters/Masters.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: '',//supongo que aca se agrega una clase scss
    },
  }
]

