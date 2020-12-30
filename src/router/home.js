import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home/edit',
        name: 'Infowrite',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/home/Infowrite')
    }, {
        path: '/home/sign',
        name: 'Sign',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/home/Sign')
    },
    {
        path: '/home/editdone',
        name: 'Editdone',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/home/Editdone')
    }, {
        path: '/home/infoshow',
        name: 'Infoshow',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/home/Infoshow')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router