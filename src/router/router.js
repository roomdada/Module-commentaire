
import { createRouter, createWebHistory } from 'vue-router';

import ArticleDetails from '../components/ArticleDetails.vue';
import ArticleListComponent from '../components/ArticleListComponent.vue';

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
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});
