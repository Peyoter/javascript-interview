import "@babel/polyfill";

/**
 *  Template
 */
import "./styles/assets/plugins/bootstrap/js/bootstrap.min.js";
import "./styles/assets/plugins/bootstrap/js/popper.min.js";

import "./styles/main/js/perfect-scrollbar.jquery.min.js";
import "./styles/main/js/waves.js";
import "./styles/main/js/sidebarmenu.js";
import "./styles/main/js/custom.min.js";

import Vue from 'vue';
import {store} from './store';
import {router} from './helpers';
import App from './view/App';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

import "./styles/assets/plugins/bootstrap/css/bootstrap.min.css";
import "./styles/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "./styles/assets/plugins/toast-master/css/jquery.toast.css";

import "./styles/main/scss/pages/login-register-lock.scss";
import "./styles/main/scss/style.scss";
import "./styles/main/scss/colors/blue-dark.scss";
import "./styles/addons/style.scss";

