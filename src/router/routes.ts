import { RouteRecordRaw } from 'vue-router';

export const constRoute: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'layout',
        meta: {
            title: '首页',
        },
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',
        meta: {
            title: '登录',
        },
    },
    {
        path: '/register',
        component: () => import('@/views/register/index.vue'),
        name: 'register',
        meta: {
            title: '注册',
        },
    },
];
