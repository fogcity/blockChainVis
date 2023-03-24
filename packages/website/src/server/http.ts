const proxyPrefix = process.env.NODE_ENV == 'production' ? '' : '/api';

import { transformFetchParamsInGet } from '../utils';

export async function get<T>(url: string, params?: any, onlyValue?: boolean): Promise<T> {
  const computedParams = params ? transformFetchParamsInGet(params, onlyValue) : '';
  const response = await fetch(proxyPrefix + url + computedParams, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Current-Language': 'en-US',
    },
  });

  // 下面的取值每个项目有自己的返回值
  const res = await response.json();

  // 这个 block 接口如果填错直接404页面崩溃不友好，返回前端做处理
  return res;

  // const { msg } = res;

  // if (response.ok) {
  //   return res;
  // } else {
  //   const error = new Error(msg);
  //   return Promise.reject(error);
  // }
}
