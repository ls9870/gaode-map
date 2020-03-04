import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import H from '../components/HelloWorld'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/h',
    name: 'H',
    component: H
  },
{
  path:'/',
  redirect:Home
}];

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
  });

export default router
