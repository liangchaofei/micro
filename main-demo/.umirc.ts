import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      path: '/home/*',
      microApp: 'curry-fe-child',
      microAppProps: {
        autoSetLoading: true,
      }
    },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'curry-fe-child',
          entry: '//localhost:8001',
        },
      ],
    },
  },
  npmClient: 'pnpm',
});

