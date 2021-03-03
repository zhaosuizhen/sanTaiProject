//基础数据接口
// import baseUrl from '@/utils/request'
let baseUrl = 'https://st.jiankong580.com:8074'


//经营主体弹窗分页查询
export let managementPageList = (currentPage, pageSize, managementName) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/web/management/pageList?currentPage=${currentPage}&pageSize=${pageSize}&managementName=${managementName}`
    })
}

//分页查询耕地地力等级
export let april7PageList = (currentPage, pageSize, datayear, township) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/web/april7/pageList?currentPage=${currentPage}&pageSize=${pageSize}&datayear=${datayear}&township=${township}`
    })
}

//根据年份获取三台地利等级的和
export let sumLanduseArea = (year) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/web/april7/sumLanduseArea?year=${year}`
    })
}

//农业生产条件分页查询
export let AgriculturalProductionPageList = (currentPage, pageSize, datayear) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/web/production/AgriculturalProductionPageList?currentPage=${currentPage}&pageSize=${pageSize}&datayear=${datayear}`
    })
}

//分页查询麦冬主产区种植面积
export let listpage = (currentPage, pageSize, datayear, township) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/liriope/listpage?currentPage=${currentPage}&pageSize=${pageSize}&datayear=${datayear}&township=${township}`
    })
}

//分页查询价格信息列表
export let pageListPricecurrentPage = (currentPage, pageSize, bazaar) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/web/cMarketTransaction/pageListPrice?currentPage=${currentPage}&pageSize=${pageSize}&bazaar=${bazaar}`
    })
}

//分页获得养殖主体数据列表
export let getBreedPageList = (currentPage, pageSize, farmName) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/clesun/api/v1.0/livestock/getBreedPageList?currentPage=${currentPage}&pageSize=${pageSize}&farmName=${farmName}`
    })
}

//分页查询畜牧养殖
export let livestockPageList = (currentPage, pageSize, years, township) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/livestock/pageList?currentPage=${currentPage}&pageSize=${pageSize}&years=${years}&township=${township}`
    })
}