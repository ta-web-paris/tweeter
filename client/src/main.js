import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import App from './App.vue';
import router from './router';

Vue.use(Buefy);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !vm.user) next('/login');
  else next();
});

const vm = new Vue({
  router,
  data: {
    user: null,
  },
  render: h => h(App),
}).$mount('#app');
