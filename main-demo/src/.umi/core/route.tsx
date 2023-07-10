// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","redirect":"/home","parentId":"ant-design-pro-layout","id":"1"},"2":{"name":"首页","path":"/home","parentId":"ant-design-pro-layout","id":"2"},"3":{"name":"权限演示","path":"/access","parentId":"ant-design-pro-layout","id":"3"},"4":{"name":" CRUD 示例","path":"/table","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/home/*","microApp":"curry-fe-child","microAppProps":{"autoSetLoading":true},"parentId":"ant-design-pro-layout","id":"5"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__Home__index" */'@/pages/Home/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Access__index" */'@/pages/Access/index.tsx')),
'4': React.lazy(() => import(/* webpackChunkName: "p__Table__index" */'@/pages/Table/index.tsx')),
'5': React.lazy(
              () => Promise.resolve((async () => {
          const { getMicroAppRouteComponent } = await import('@@/plugin-qiankun-master/getMicroAppRouteComponent');
          return getMicroAppRouteComponent({ appName: 'curry-fe-child', base: '/', routePath: '/home/*', masterHistoryType: 'browser', routeProps: {'autoSetLoading':true} })
        })()).then(e => e?.default ? e : ({ default: e }))
            ),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/Users/liangchaofei/Desktop/dd/micro/main-demo/src/.umi/plugin-layout/Layout.tsx')),
},
  };
}
