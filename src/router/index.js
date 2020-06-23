import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Services = () => import('@/views/Services')
const EmbeddedService = () => import('@/views/EmbeddedService')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const PageSignedOut = () => import('@/views/pages/PageSignedOut')

Vue.use(Router)

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

router.beforeEach((to, from, next) => {
  next(checkAccessAndAuthenticate(to));
});

export default router

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/services',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'services',
          name: 'Services',
          component: Services
        },
        {
          path: 'service/:name',
          name: 'Embedded Service',
          component: EmbeddedService,
          props: true
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404,
          meta: {
            isPublic: true
          }
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500,
          meta: {
            isPublic: true
          }
        },
        {
          path: 'SignedOut',
          name: 'PageSignedOut',
          component: PageSignedOut,
          meta: {
            isPublic: true
          }
        }
      ]
    }
  ]
}

function checkAccessAndAuthenticate(to) {
  if (to.matched.some(record => record.meta.isPublic))
    return true;
  if (router.app.$keycloak === undefined)
    return true;
  if (router.app.$keycloak.authenticated)
    return true;
  
  const loginUrl = router.app.$keycloak.createLoginUrl()
  window.location.replace(loginUrl)
  return false;
}

