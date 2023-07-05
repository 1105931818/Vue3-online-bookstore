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
    {
        path: '/library',
        component: () => import('@/views/library/index.vue'),
        name: 'library',
        meta: {
            title: '书库',
        },
    },
    {
        path: '/leaderboard',
        component: () => import('@/views/board/index.vue'),
        name: 'leaderboard',
        meta: {
            title: '排行榜',
        },
    },
    {
        path: '/chapter',
        component: () => import('@/views/chapter/index.vue'),
        name: 'chapter',
        meta: {
            title: '小说章节',
        },
    },
    {
        path: '/content',
        component: () => import('@/views/content/index.vue'),
        name: 'content',
        meta: {
            title: '小说详情',
        },
    },
];
