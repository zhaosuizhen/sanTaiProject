//农经股----藤椒基本信息
import request from '@/utils/request'

// 藤椒基本信息 分页
export function  rpInformationList(data) {
    return request({
      method: 'POST',
      url: '/rattan_plant/rattan-plant/selectListByPage',
      data
    })
  }

  // 藤椒基本信息 删除
  export function  rpInformationDelete(data) {
    return request({
      method: 'POST',
      url: '/rattan_plant/rattan-plant/delete',
      data
    })
  }

    // 藤椒基本信息  审核
  export function  rpInformationAudit(data,params) {
    return request({
      method: 'POST',
      url: '/rattan_plant/rattan-plant/audit',
      data,
      params
    })
  }

// 藤椒基本信息  详情
export function  rpInformationDetail(params) {
    return request({
        method: 'POST',
        url: '/rattan_plant/rattan-plant/detail?',
        params
    })
}

// 藤椒基本信息  新增
export function  rpInformationInsert(data) {
    return request({
        method: 'POST',
        url: '/rattan_plant/rattan-plant/insert',
        data
    })
}

// 藤椒基本信息  编辑
export function  rpInformationUpdate(data) {
    return request({
        method: 'POST',
        url: '/rattan_plant/rattan-plant/update',
        data
    })
}