import Vue from 'vue';
import Router from 'vue-router';

import Admin from "../view/Layout/Admin";
import SignInPage from '../view/Pages/Public/Auth/SignUpPage';
import LoginPage from '../view/Pages/Public/Auth/LoginPage';
import Dashboard from '../view/Pages/Admin/Dashboard';
import Document from "../view/Pages/Admin/Documents/List";
import DocumentForm from "../view/Pages/Admin/Documents/Form";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {globalPage: Admin},
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    components: {adminContent: Dashboard},
                },
                {
                    path: '/documents',
                    name: 'documents',
                    components: {
                        adminContent: Document
                    },
                },
                {
                    path: '/documents-create',
                    name: 'documents.create',
                    components: {
                        adminContent: DocumentForm
                    },
                }
            ]
        },
        {path: '/login', components: {globalPage: LoginPage}, name: 'login'},
        {path: '/signup', components: {globalPage: SignInPage}, name: 'signup'},
        {path: '*', redirect: '/'}
    ]
});

router.beforeEach((to, from, next) => {

    const publicPages = ['/login', '/signup',];
    const loggedIn = localStorage.getItem('user');

    let route = to.path.toLocaleLowerCase();

    let result = publicPages.reduce((a, b) =>
        a === true || (a !== false && !!route.match(RegExp(a))) || !!route.match(RegExp(b))
    );

    if (!result && !loggedIn) {
        return next('/login');
    }

    next();
});
