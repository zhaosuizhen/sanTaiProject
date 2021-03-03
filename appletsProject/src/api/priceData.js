//价格数据接口
import baseUrl from '@/utils/request'

//查询农产品价格列表
export let getSelectList = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/c-price-data/selectList`,
        data
    })
}
//三级分类产品分类查询
export let getTypeList = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/n-pricedata-ssociation/selectList`,
        data
    })
}
//查询农产品价格详情
export let getSelectListDetail = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/c-price-data/selectListDetail`,
        data
    })
}
//查询批发市场数据集合
export let getSelectListBazaar = (data) => {
    return uni.request({
        method: "POST",
        url:`${baseUrl}/bigdata_wechat/c-price-data/selectListBazaar`,
        data
    })
}