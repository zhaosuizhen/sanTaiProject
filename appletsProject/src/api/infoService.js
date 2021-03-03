//信息服务接口
import baseUrl from '@/utils/request'

//政策新闻--dataType:1、农业新闻--dataType:2
//查询政策新闻信息列表
export let ZCXXselectList = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/c-policy-information/selectList`,
        data
    })
}
//查询政策新闻信息详情
export let ZCXXselectById = (params) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/c-policy-information/selectById?id=${params}`
        // params
    })
}

//农技技术
//查询农技技术列表
export let NJJSselectList = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/agr-knowledge-base/selectList`,
        data
    })
}
//查询农技技术详情
export let NJJSselectById = (params) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/agr-knowledge-base/selectById?id=${params}`
    })
}
//病虫害防治
//查询病虫害列表
export let BCHselectList = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/c-diseasest-control/selectList`,
        data
    })
}
//查询病虫害详情
export let BCHselectById = (params) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/c-diseasest-control/selectById?id=${params}`
    })
}