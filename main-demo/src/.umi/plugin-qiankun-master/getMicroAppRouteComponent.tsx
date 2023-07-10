// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';
import { useMatch } from 'umi';
import { MicroApp } from './MicroApp';

export function getMicroAppRouteComponent(opts: {
  appName: string;
  base: string;
  routePath: string;
  masterHistoryType: string;
  routeProps?: any;
}) {
  const { base, masterHistoryType, appName, routeProps, routePath } = opts;
  const RouteComponent = () => {
    const match = useMatch(routePath);
    const url = match ? match.pathnameBase : '';
    // 默认取静态配置的 base
    let umiConfigBase = base === '/' ? '' : base;

    // 拼接子应用挂载路由
    let runtimeMatchedBase = umiConfigBase + (url.endsWith('/') ? url.substr(0, url.length - 1) : url);


    const componentProps = {
      name: appName,
      base: runtimeMatchedBase,
      history: masterHistoryType,
      ...routeProps,
    };
    return <MicroApp {...componentProps} />;
  };

  return RouteComponent;
}
