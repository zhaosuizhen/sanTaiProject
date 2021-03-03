//植保站----监测点数据
import request from '@/utils/request'

// 监测点数据 分页
export function  monitoringPointDataList(data) {
    return request({
      method: 'POST',
      url: '/epidemic-surveillance/epidemic-surveillance/selectListByPage',
      data
    })
  }

  // 监测点数据 删除
  export function  monitoringPointDataDelete(data) {
    return request({
      method: 'POST',
      url: '/epidemic-surveillance/epidemic-surveillance/delete',
      data
    })
  }

    // 监测点数据  审核
  export function  monitoringPointDataAudit(data,params) {
    return request({
      method: 'POST',
      url: '/epidemic-surveillance/epidemic-surveillance/audit',
      data,
      params
    })
  }

// 监测点数据  详情
export function  monitoringPointDataDetail(params) {
    return request({
        method: 'POST',
        url: '/epidemic-surveillance/epidemic-surveillance/detail?',
        params
    })
}

// 监测点数据  新增
export function  monitoringPointDataInsert(data) {
    return request({
        method: 'POST',
        url: '/epidemic-surveillance/epidemic-surveillance/insert',
        data
    })
}

// 监测点数据  编辑
export function  monitoringPointDataUpdate(data) {
    return request({
        method: 'POST',
        url: '/epidemic-surveillance/epidemic-surveillance/update',
        data
    })
}

