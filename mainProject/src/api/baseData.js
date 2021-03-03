// 基础数据页面相关接口
import request from './request'

//获取农产品市场交易数据  
export function pageListPrice (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/pageListPrice',
    params
  })
}

//获取耕地数据  
export function reviewList (params) {
  return request({
    method: 'GET',
    // url: '/clesun/api/v1.0/parcel/reviewList',
    url: '/clesun/api/v1.0/web/april7/pageList',
    params
  })
}

//获取渔业水域数据  
export function getMainTypeScale (params) {
  return request({
    method: 'GET',
    // url: '/clesun/api/v1.0/aquaticstock/getMainTypeScale',
    url: '/clesun/api/v1.0/web/production/AgriculturalProductionPageList',
    params
  })
}


//获取投入品数据  
export function pageListInput (params) {
  return request({
    method: 'GET',
    // url: '/clesun/api/v1.0/web/agriculturalInputs/pageListInput',
    url: '/clesun/api/v1.0/liriope/listpage',
    params
  })
}


//获取生猪养殖数据  
export function getBreedPageList (params) {
  return request({
    method: 'POST',
    url: '/clesun/api/v1.0/livestock/getBreedPageList',
    params
  })
}

//获取地理数据  
export function landuselist (params) {
  return request({
    method: 'GET',
    // url: '/clesun/api/v1.0/web/april7/landuselist',
    url: '/clesun/api/v1.0/livestock/pageList',
    params
  })
}

//根据年份获取三台地利等级的和
export function sumLanduseArea (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/sumLanduseArea',
    params
  })
}

