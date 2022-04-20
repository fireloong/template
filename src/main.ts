import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages'
import App from './App.vue';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);

app.mount('#app');
