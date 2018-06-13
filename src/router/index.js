import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import masazai from '@/components/masazai'
import joga from '@/components/joga'
import proceduros from '@/components/proceduros'
import bioinformacinistyrimas from '@/components/bioinformacinistyrimas'
import kontaktai from '@/components/kontaktai'
// import vue-parallaxy from '@/components/vue-parallaxy'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/bioinformacinis_tyrimas',
      name: 'bioinformacinistyrimas',
      component: bioinformacinistyrimas
    }, {
      path: '/',
      name: 'home',
      component: home
    },
    {path: '/kuno_proceduros',
      name: 'masazai',
      component: masazai
    },
    {path: '/joga',
      name: 'joga',
      component: joga
    },
    {path: '/veido_proceduros',
      name: 'proceduros',
      component: proceduros
    },
    {path: '/kontaktai',
      name: 'kontaktai',
      component: kontaktai
    }

  ]
})
