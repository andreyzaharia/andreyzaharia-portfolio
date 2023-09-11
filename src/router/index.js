import { createRouter, createWebHistory } from 'vue-router'
import MyProyectsComponent from '../components/MyProyectsComponent.vue'
import AboutMeComponent from '../components/AboutMeComponent.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'about_me',
            component: AboutMeComponent
        },
        {
            path: '/proyects',
            name: 'proyects',
            component: MyProyectsComponent
        },
    ]
})

export default router