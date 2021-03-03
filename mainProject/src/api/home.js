// 主页相关接口
import request from './request'

//获取种植种类占比数据  
export function gettypedata () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getFoodAndCashData'
  })
}

//获取养殖成本结构数据  
export function getcoststructure () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getCostStructure'
  })
}

//获取养殖品种占比数据  
export function getaquatictypeproportion () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/aquaticstock/getProportionOfVarieties'
  })
}

//获取投入品用量数据  
export function inputuse () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getProductionType'
  })
}

//获取植保防治趋势数据  
export function cropdefense () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getPlantDiseaseControl'
  })
}

//获取土地资源结构势数据  
export function landuse () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/landuse'
  })
}

//获取价格交易数据  
export function changesInPrices (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/marketPrice',
    params
  })
}

//价格模块获取绵阳最近一个月的价格数据走势  
export function MYchangesInPrices (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/changesInPrices',
    params
  })
}

//近一个月和上个月的平均价格  
export function lastMonthPrice (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/lastMonthPrice',
    params
  })
}
