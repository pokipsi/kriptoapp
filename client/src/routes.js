import Vue from 'vue';
import VueRouter from 'vue-router';

import Homepage from './components/Homepage';
import Detail from './components/Detail';
import Alerts from './components/Alerts';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'homepage',
            component: Homepage
        }, {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        }, {
            path: '/alerts',
            name: 'alerts',
            component: Alerts
        }
    ]
});

export default router;