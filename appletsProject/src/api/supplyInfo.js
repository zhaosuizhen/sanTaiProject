//供求信息接口
import baseUrl from '@/utils/request'

//查询农产品价格列表
export let getInfoList = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/supply-demand/selectList`,
        data
    })
}
//查询详情
export let getDetail = (query) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/supply-demand/selectById?id=${query}`
    })
}
//新增供需信息
export let getUpdate = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/supply-demand/insertOrUpdate`,
        data
    })
}