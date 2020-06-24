import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Privacy from "@/views/Privacy";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/privacy_policy",
    name: "PrivacyPolicy",
    component: Privacy
  }
];

const router = new VueRouter({
  routes
});

export default router;
