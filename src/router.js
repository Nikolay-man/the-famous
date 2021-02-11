import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../src/components/Header/Pages/Catalog'
import Shipping from '../src/components/Header/Pages/Shipping'
import Payment from '../src/components/Header/Pages/Payment'
import Contacts from '../src/components/Header/Pages/Contacts'
import AboutGallery from '../src/components/Header/Pages/AboutGallery'
import Header from '../src/components/Header/Header.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Header',
            component: Header
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/shipping',
            name: 'Shipping',
            component: Shipping
        },
        {
            path: '/payment',
            name: 'Payment',
            component: Payment
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
        {
            path: '/about-the-gallery',
            name: 'About-the-gallery',
            component: AboutGallery
        },
    ]
})