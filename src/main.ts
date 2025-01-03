import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import './style.css'
import App from './App.vue'

import HomeView from "./components/home/HomeView.vue";
import GeneralaView from './components/generala/GeneralaView.vue';
import TrucoView from './components/truco/TrucoView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/generala', component: GeneralaView },
    { path: '/truco', component: TrucoView },
    { path: '/:pathMatch(.*)*', component: HomeView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
