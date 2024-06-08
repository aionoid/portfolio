import { createRouter, createWebHistory } from "vue-router"
import home from "@/views/home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/bob",
      name: "bub",
      component: home
    },
    {
      path: "/:catchAll(.*)",
      name: "catch all",
      component: home
    }
  ]
})

export default router
