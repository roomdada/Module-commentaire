import { createRouter, createWebHistory } from 'vue-router';

import ArticleDetails from '../components/ArticleDetails.vue';
import ArticleListComponent from '../components/ArticleListComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ArticleListComponent,
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetails',
    component: ArticleDetails,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});
