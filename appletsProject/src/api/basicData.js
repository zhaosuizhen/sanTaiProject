//资源专题接口
// import baseUrl from '@/utils/request'
let baseUrl = 'https://st.jiankong580.com:8074'


//获得生猪的统计数据
export let getLiveStockData = (params) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/livestock/getLiveStockData?year=${params}`
    })
}

//获得养殖占比数据
export let getanimalProductYield = () => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/livestock/getanimalProductYield`
    })
}

//藤椒基本信息数据获取
export let productArea = () => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/clesun/api/v1.0/web/rattan/productArea`
    })
}