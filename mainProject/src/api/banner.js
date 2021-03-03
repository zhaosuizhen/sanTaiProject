// banner图维护相关接口
import request from './request'

//获取农产品市场交易数据  
export function bannerWeb (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/banner/bannerWeb',
    params
  })
}

