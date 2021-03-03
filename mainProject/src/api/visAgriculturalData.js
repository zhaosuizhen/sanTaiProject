// 农机数据页面相关接口
import request from './request'

//农业从业人员数据 
export function getAgriculturalPopulation () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/agriculturalInputs/getAgriculturalPopulation'
  })
}

//农机总数量数据 
export function getMachineCount () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/agriculturalInputs/getMachineCount'
  })
}

//农机总动力数据 
export function getMachinePower () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/agriculturalInputs/getMachinePower'
  })
}
