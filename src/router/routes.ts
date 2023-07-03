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
];
