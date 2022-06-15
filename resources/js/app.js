// Require Vue
window.Vue = require('vue').default;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Register Vue Components
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import App from './App.vue';
import Home from './components/HomeComponent'
import Counter from './components/CounterComponent'
import About from './components/AboutComponent'

const routes = [
    {
        path: '/',
        name: 'HOME',
        component: Home

    },
    {
        path: '/counter',
        name: 'Counter',
        component: Counter
    },
    {
        path:'/about',
        name: 'About',
        component: About
    }

]

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');