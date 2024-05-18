import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import TestComponent from "@/components/TestComponent.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/', name: 'home', component: HomeView},
        {path: '/about1', name:'about', component: AboutView},
        {path: '/test', name:'text', component: TestComponent}
    ]
})