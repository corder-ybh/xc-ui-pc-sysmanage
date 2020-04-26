import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

export const brand_list = (page, size, params) => {
  let query = querystring.stringify(params);
  return http.requestQuickGet(apiUrl + '/goods/brand/list/' + page + '/' + size + '/?' + query)
};
