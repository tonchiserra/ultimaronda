import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import './style.css'
import App from './App.vue'

import HomeView from "./components/home/HomeView.vue"
import GeneralaView from './components/generala/GeneralaView.vue'
import GeneralaHistoryView from './components/generala/GeneralaHistoryView.vue'
import TrucoView from './components/truco/TrucoView.vue'
import ChinchonView from './components/chinchon/ChinchonView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/generala', component: GeneralaView },
    { path: '/generala/history', component: GeneralaHistoryView },
    { path: '/chinchon', component: ChinchonView },
    { path: '/truco', component: TrucoView },
    { path: '/:pathMatch(.*)*', component: HomeView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
