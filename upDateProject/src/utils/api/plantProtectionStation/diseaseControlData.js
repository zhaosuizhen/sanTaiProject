//植保站----疾病防治数据
import request from '@/utils/request'

// 疾病防治数据 分页
export function  diseaseControlDataList(data) {
    return request({
      method: 'POST',
      url: '/pests_trends/pests-trends/selectListByPage',
      data
    })
  }

  // 疾病防治数据 删除
  export function  diseaseControlDataDelete(data) {
    return request({
      method: 'POST',
      url: '/pests_trends/pests-trends/delete',
      data
    })
  }

    // 疾病防治数据  审核
  export function  diseaseControlDataAudit(data,params) {
    return request({
      method: 'POST',
      url: '/pests_trends/pests-trends/audit',
      data,
      params
    })
  }

// 疾病防治数据  详情
export function  diseaseControlDataDetail(params) {
    return request({
        method: 'POST',
        url: '/pests_trends/pests-trends/detail?',
        params
    })
}

// 疾病防治数据  新增
export function  diseaseControlDataInsert(data) {
    return request({
        method: 'POST',
        url: '/pests_trends/pests-trends/insert',
        data
    })
}

// 疾病防治数据  编辑
export function  diseaseControlDataUpdate(data) {
    return request({
        method: 'POST',
        url: '/pests_trends/pests-trends/update',
        data
    })
}