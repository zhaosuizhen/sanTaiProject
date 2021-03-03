// 畜牧养殖页面相关接口
import request from './request'

//牧畜生产情况存栏查询 
export function getLivestockExistColum () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getLivestockExistColum'
  })
}

//牧畜生产情况出栏查询 
export function getLivestockOutColum () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getLivestockOutColum'
  })
}

//禽蛋产量查询 
export function getEggYiled () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getEggYiled'
  })
}

//各县镇禽蛋产量查询 
export function getEggYiledByTownship () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getEggYiledByTownship'
  })
}

//家禽养殖情况存栏查询 
export function getExistColumn () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getExistColumn'
  })
}

//家禽养殖情况出栏查询 
export function getOutColumn () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getOutColumn'
  })
}

//乡镇牧畜存栏情况查询 
export function getLivestockExistColumByTownship () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getLivestockExistColumByTownship'
  })
}

//乡镇牧畜出栏情况查询 
export function getLivestockOutColumByTownship () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getLivestockOutColumByTownship'
  })
}