// 病虫害页面相关接口
import request from './request'

//获取病虫害数据 
export function BCH_data () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getDiseaseData'
  })
}

//不同作物病虫害防治统计
export function cropStatistics (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getFzDiseaseControl',
    params
  })
}

//病虫害发生与防治占比
export function diseaseHappenAndDefense (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/diseaseHappenAndDefense',
    params
  })
}

//不统疾病类型统计数据
export function diseaseStatistics (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getSdDiseaseControl',
    params
  })
}

//病虫害发病描述数据
export function diseaseDetail (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getPlantDisease',
    params
  })
}