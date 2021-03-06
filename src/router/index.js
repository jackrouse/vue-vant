import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Layout from '@/views/Layout/index.vue'
// import Dashboard from '@/views/Dashboard.vue'
import other from './modules/other'

// const routerPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return routerPush.call(this, location).catch(error => error)
// }

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

export const constantRoutes = [
  {
    path: '/redirect',
    name: 'redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import(/* webpackChunkName: "redirect" */'@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'@/views/login/index'),
    hidden: true
  },
  // {
  //   path: '/auth-redirect',
  //   component: () => import('@/views/login/auth-redirect'),
  //   hidden: true
  // },
  {
    path: '/',
    name: 'Layout',
    meta: {
      name: '后台'
    },
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard/index'),
        meta: { title: '首页' }
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */'@/views/About/index'),
        meta: { title: '关于' }
      },
      {
        path: 'feedback',
        name: 'feedback',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */'@/views/feedback/index'),
        meta: { title: '反馈' }
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */'@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "401" */'@/views/error-page/401'),
    hidden: true
  },
  other
]

export const asyncRoutes = [
  {
    path: '/ploptest',
    component: () => import(/* webpackChunkName: "Ploptest" */'@/views/Ploptest/index'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// 路由过渡动效
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
  if (to.params.direction) {
    store.commit('app/updateDirection', to.params.direction)
  } else {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.commit('app/updateDirection', 'forward')
      } else {
        store.commit('app/updateDirection', 'back')
      }
    } else {
      ++historyCount
      history.setItem('count', historyCount)
      to.path !== '/' && history.setItem(to.path, historyCount)
      store.commit('app/updateDirection', 'forward')
    }
  }
  next()
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
