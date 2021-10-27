import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
          ),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () =>
          import(/* webpackChunkName: "example" */ '@/views/table/index.vue'),
        meta: { title: 'Table', icon: 'table' },
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () =>
          import(/* webpackChunkName: "example" */ '@/views/tree/index.vue'),
        meta: { title: 'Tree', icon: 'tree' },
      },
    ],
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () =>
          import(/* webpackChunkName: "form" */ '@/views/form/index.vue'),
        meta: { title: 'Form', icon: 'form' },
      },
    ],
  },
  {
    path: '/windicss',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Tailwind',
        component: () =>
          import(
            /* webpackChunkName: "windicss" */ '@/views/tailwind/index.vue'
          ),
        meta: { title: 'windicss', icon: 'el-icon-magic-stick' },
      },
    ],
  },
  {
    path: '/icons',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'IconsViews',
        component: () =>
          import(/* webpackChunkName: "icon" */ '@/views/icons/index.vue'),
        meta: { title: 'icons', icon: 'icon' },
      },
    ],
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested',
    },
    children: [
      {
        path: 'menu1',
        component: () =>
          import(
            /* webpackChunkName: "nested" */ '@/views/nested/menu1/index.vue'
          ), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () =>
              import(
                /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-1/index.vue'
              ),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' },
          },
          {
            path: 'menu1-2',
            component: () =>
              import(
                /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-2/index.vue'
              ),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import(
                    /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'
                  ),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' },
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import(
                    /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'
                  ),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () =>
              import(
                /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-3/index.vue'
              ),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' },
          },
        ],
      },
      {
        path: 'menu2',
        component: () =>
          import(
            /* webpackChunkName: "nested" */ '@/views/nested/menu2/index.vue'
          ),
        name: 'Menu2',
        meta: { title: 'menu2' },
      },
    ],
  },

  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/HaitaoWang555/vue3-admin-template',
        component: () => null,
        meta: { title: 'External Link', icon: 'link' },
      },
    ],
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true },
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: { hidden: true },
  },
  { path: '/:pathMatch(.*)*', redirect: '/404', meta: { hidden: true } },
]

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: constantRoutes,
})

export default router

export function resetRouter(): void {
  const newRouter = createRouter({
    history,
    routes: constantRoutes,
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(router as any).matcher = (newRouter as any).matcher // reset router
}
