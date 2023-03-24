const isAndroid = () => {
  const android = navigator.userAgent;
  if (android.indexOf('Android') > -1 || android.indexOf('Adr') > -1) {
    return true;
  }
  return false;
};
const isIos = () => {
  const ios = navigator.userAgent;
  if (!!ios.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return true;
  }
  return false;
};
const transformFetchParamsInGet = (params: { [key: string]: any }, onlyValue: boolean = false) => {
  if (onlyValue) {
    let result = '';
    const values = Object.values(params);
    values.forEach((v) => {
      result += '/' + v;
      return v;
    });

    return result;
  }

  let result = '?';
  for (const key in params) {
    if ((params.prototype || params).hasOwnProperty.call(params, key)) {
      result =
        result + `${key}=${params[key]}` + (Object.keys(params)[Object.keys(params).length - 1] == key ? '' : '&');
    }
  }
  return result;
};
export { transformFetchParamsInGet, isAndroid, isIos };
