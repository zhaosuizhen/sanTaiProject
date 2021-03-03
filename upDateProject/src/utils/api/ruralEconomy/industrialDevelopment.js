//农经股----藤椒产业发展
import request from '@/utils/request'

// 藤椒产业发展 分页
export function  industrialDevelopmentList(data) {
    return request({
      method: 'POST',
      url: '/rattan_development/rattan-development/selectListByPage',
      data
    })
  }

  // 藤椒产业发展 删除
  export function  industrialDevelopmentDelete(data) {
    return request({
      method: 'POST',
      url: '/rattan_development/rattan-development/delete',
      data
    })
  }

    // 藤椒产业发展  审核
  export function  industrialDevelopmentAudit(data,params) {
    return request({
      method: 'POST',
      url: '/rattan_development/rattan-development/audit',
      data,
      params
    })
  }

// 藤椒产业发展  详情
export function  industrialDevelopmentDetail(params) {
    return request({
        method: 'POST',
        url: '/rattan_development/rattan-development/detail?',
        params
    })
}

// 藤椒产业发展  新增
export function  industrialDevelopmentInsert(data) {
    return request({
        method: 'POST',
        url: '/rattan_development/rattan-development/insert',
        data
    })
}

// 藤椒产业发展  编辑
export function  industrialDevelopmentUpdate(data) {
    return request({
        method: 'POST',
        url: '/rattan_development/rattan-development/update',
        data
    })
}