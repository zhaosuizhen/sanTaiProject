//农经股----蔬菜发展情况
import request from '@/utils/request'

// 蔬菜发展情况 分页
export function  vegetableDevelopmentList(data) {
    return request({
      method: 'POST',
      url: '/vegetables_plant/vegetables-plant/selectListByPage',
      data
    })
  }

  // 蔬菜发展情况 删除
  export function  vegetableDevelopmentDelete(data) {
    return request({
      method: 'POST',
      url: '/vegetables_plant/vegetables-plant/delete',
      data
    })
  }

    // 蔬菜发展情况  审核
  export function  vegetableDevelopmentAudit(data,params) {
    return request({
      method: 'POST',
      url: '/vegetables_plant/vegetables-plant/audit',
      data,
      params
    })
  }

// 蔬菜发展情况  详情
export function  vegetableDevelopmentDetail(params) {
    return request({
        method: 'POST',
        url: '/vegetables_plant/vegetables-plant/detail?',
        params
    })
}

// 蔬菜发展情况  新增
export function  vegetableDevelopmentInsert(data) {
    return request({
        method: 'POST',
        url: '/vegetables_plant/vegetables-plant/insert',
        data
    })
}

// 蔬菜发展情况  编辑
export function  vegetableDevelopmentUpdate(data) {
    return request({
        method: 'POST',
        url: '/vegetables_plant/vegetables-plant/update',
        data
    })
}