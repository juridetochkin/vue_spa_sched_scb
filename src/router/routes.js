const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')},
      {path: 'upload-demand', component: () => import('pages/DemandUpload.vue')},
      {path: 'fact-demand', component: () => import('pages/FactDemand.vue')},
      {path: 'changelog', component: () => import('pages/WSChangeLog')},
      {path: 'employees', component: () => import('pages/Employees')},
      {path: 'assigner', component: () => import('pages/WSAssigner')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
