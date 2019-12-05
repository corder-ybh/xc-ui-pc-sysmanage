import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

export const page_list = (page, size, params) => {
  // 将json对象转换成key/value对
  let query = querystring.stringify(params);
  // 请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/page/list/' + page + '/' + size+'/?'+query);
};

export const page_add = params => {
  return http.requestPost(apiUrl+'/cms/page/add', params);
};

/**
 * 查询单个页面
 * @param id
 * @returns {*}
 */
export const page_get = id => {
  return http.requestQuickGet(apiUrl+'/cms/page/get/'+id);
}

/**
 * 编辑页面
 * @param id
 * @param params
 * @returns {*}
 */
export const page_edit = (id, params) => {
  return http.requestPut(apiUrl + '/cms/page/edit/'+id, params);
}

/**
 * 页面删除
 * @param id
 * @returns {*}
 */
export const page_del = id => {
  return http.requestDelete(apiUrl + '/cms/page/del/' + id)
}

/**
 * 获取模板列表
 * @param page
 * @param size
 * @param params
 * @returns {*}
 */
export const template_list = (page, size, params) => {
  // 将json对象转换成key/value对
  let query = querystring.stringify(params);
  // 请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/template/list/' + page + '/' + size+'/?'+query);
};

/**
 * 获取单个模板
 * @param id
 * @returns {*}
 */
export const template_get = id => {
  return http.requestQuickGet(apiUrl+'/cms/template/get/'+id);
}
