//农业专题页面接口地址
export default {
  //ip: "http://112.31.41.190:18086/clesun/api/v1.0"

  // ip: "http://39.99.202.47:8081/clesun/api/v1.0"
  ip: "http://119.6.57.72:8081/clesun/api/v1.0"
}
// let baseUrl="http://39.99.202.47:8081/clesun/api/v1.0";
let baseUrl="http://119.6.57.72:8081/clesun/api/v1.0";

//let baseUrl = "http://112.31.41.190:18086/clesun/api/v1.0";
// let baseUrl = "http://10.1.203.20:8086/clesun/api/v1.0";
// 政策信息
export const policy = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/policyInformation/list`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      datatype: params.datatype,
      title: params.title
    },
    method: 'GET'
  }).then(res => res.data)
}
// 政策信息详情
export const policyDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/policyInformation/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}
// 公告信息
export const notice = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/notice/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      datatype: params.datatype,
      noticetitle: params.noticetitle
    },
    method: 'GET'
  }).then(res => res.data)
}
// 公告信息详情
export const noticeDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/notice/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}

// 农技技术
export const technology = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/agr/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      title: params.title
    },
    method: 'GET'
  }).then(res => res.data)
}
// 农技技术详情
export const technologyDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/agr/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}
// 病虫害防治
export const diseases = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/cdiseasest/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      title: params.title
    },
    method: 'GET'
  }).then(res => res.data)
}
// 病虫害防治详情
export const diseasesDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/cdiseasest/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}
//市场行情
export const marketList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/pricedata/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      name: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}

/*基础数据模块*/
//经营主体数据
export const jyztList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/web/management/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      managementName: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}
//农业投入品数据
export const nytrpList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/web/agriculturalInputs/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      inputBrand: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}
//农产品交易数据
export const ncpjyList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/markettransaction/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      companyName: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}
//土地信息数据
export const tdxxList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/parcel/reviewList`,
    params: {
      currentPageNum: params.page,
      rowsOfPage: params.pageTotal,
      filter_LIKES_management_name: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}
//种植信息数据
export const zzxxList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/plant/reviewList`,
    params: {
      currentPageNum: params.page,
      rowsOfPage: params.pageTotal,
      filter_LIKES_varieties_name: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}
//农事信息数据
export const nsxxList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/farming/reviewList`,
    params: {
      currentPageNum: params.page,
      rowsOfPage: params.pageTotal,
      filter_LIKES_company_name: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}
//农资网点数据
export const nzwdList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/network/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      name: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}
