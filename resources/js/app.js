import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';

// Middlewares
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8000/api';

// Our routes
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false // The auth property specifies whether authorization is needed to access the route.
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                auth: false
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth: true
            }
        }
    ]
});

Vue.router = router;

// We include  and configure the @websanova/vue-auth library
// that handles authentication on the client side.
// It injects an $auth object which provides a handful 
// of helper functions such as register() which handles user registration,
// login() which handles user login, user() which provides access to the current user data,
// logout() with handles logout, and a couple of other functions.
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});

App.router = Vue.router;

new Vue(App).$mount('#app');

/*new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
})*/