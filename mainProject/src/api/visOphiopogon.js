// 麦冬种植接口
import request from './request'

//获取主体数据
export function business () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/liriope/business'
  })
}

//获取麦冬鲜/干产量
export function maidongYield () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/liriope/yield'
  })
}

//获取乡镇种植规模
export function XZZZ_plant () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/liriope/liriopePlant'
  })
}

//麦冬产品信息
export function product () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/liriope/product'
  })
}