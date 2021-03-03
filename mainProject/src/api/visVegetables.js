// 蔬菜养殖相关接口
import request from './request'

//获取蔬菜基础数据  
export function getVegetablesBaseData () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/vegetables/getVegetablesBaseData'
  })
}

//蔬菜各乡镇产量  
export function getVegetablesItem (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/vegetables/getVegetablesItem',
    params
  })
}

//蔬菜种植品种  
export function getVegetablesSingle (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/vegetables/getVegetablesSingle',
    params
  })
}