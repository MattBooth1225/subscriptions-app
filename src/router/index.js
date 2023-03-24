import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
            path: '/',
            name: 'List',
            component: () => import('../components/ListSub')
        },
        {
            path: '/create',
            name: 'Create',
            component: () => import('../components/CreateSub')
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/EditSub')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../components/AboutSub')
      }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router

