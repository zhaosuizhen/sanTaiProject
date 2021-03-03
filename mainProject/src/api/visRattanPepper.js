// 藤椒种植相关接口
import request from './request'

//藤椒基本信息数据获取  
export function productArea () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/rattan/productArea'
  })
}

//基地发展情况基础数据  
export function ratanAreaDevelopment () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/rattan/ratanAreaDevelopment'
  })
}