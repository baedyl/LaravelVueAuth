import VueRouter from 'vue-router';

// Pages
import Home from './js/components/Home.vue';
import Login from './js/components/Login.vue';
import Register from './js/components/Register.vue';
import Dashboard from './js/components/Dashboard.vue';
import ForgotPassword from './js/components/ForgotPassword.vue';
import ForgotPasswordForm from './js/components/ForgotPasswordForm.vue';

// Our routes
const routes = [
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
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ForgotPassword,
        meta: {
            auth: false
        }
    },
    {
        path: '/reset-password/:token',
        name: 'reset-password-form',
        component: ForgotPasswordForm,
        meta: {
            auth: false
        }
    }
];

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes
})

export default router;