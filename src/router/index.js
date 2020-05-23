import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/quiz",
    name: "Quiz",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quiz" */ "../views/Quiz.vue")
  },
  {
    path: "/questions",
    name: "Questions",
    component: () =>
      import(/* webpackChunkName: "questions" */ "../views/Questions.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.isQuizLoaded) {
        next();
      } else {
        next("/");
      }
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
