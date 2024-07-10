import Vue from 'vue';
import Router from 'vue-router';
import SearchBar from './components/SearchBar.vue';
import PlayerProfile from './components/PlayerProfile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: SearchBar },
    { path: '/profile/:id', name: 'profile', component: PlayerProfile }
  ]
});
