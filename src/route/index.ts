import {createWebHistory,createRouter} from 'vue-router';
const history=createWebHistory();
import Home from '../views/home.vue'

export const router=createRouter({
    history:history,
    routes: [
        { path: "/", component: Home },
    ]
})