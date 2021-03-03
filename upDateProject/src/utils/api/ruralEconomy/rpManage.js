//农经股----藤椒经营主体
import request from '@/utils/request'

// 藤椒经营主体 分页
export function  rpManageList(data) {
    return request({
      method: 'POST',
      url: '/rattan_enterprise/rattan-enterprise/selectListByPage',
      data
    })
  }

  // 藤椒经营主体 删除
  export function  rpManageDelete(data) {
    return request({
      method: 'POST',
      url: '/rattan_enterprise/rattan-enterprise/delete',
      data
    })
  }

    // 藤椒经营主体  审核
  export function  rpManageAudit(data,params) {
    return request({
      method: 'POST',
      url: '/rattan_enterprise/rattan-enterprise/audit',
      data,
      params
    })
  }

// 藤椒经营主体  详情
export function  rpManageDetail(params) {
    return request({
        method: 'POST',
        url: '/rattan_enterprise/rattan-enterprise/detail?',
        params
    })
}

// 藤椒经营主体  新增
export function  rpManageInsert(data) {
    return request({
        method: 'POST',
        url: '/rattan_enterprise/rattan-enterprise/insert',
        data
    })
}

// 藤椒经营主体  编辑
export function  rpManageUpdate(data) {
    return request({
        method: 'POST',
        url: '/rattan_enterprise/rattan-enterprise/update',
        data
    })
}