//我的模块接口
import baseUrl from '@/utils/request'

//查询农产品价格列表
export let getToken = (params) => {
    return uni.request({
        method: "GET",
        url:`${baseUrl}/wechat/login_by_weixin?code=${params}`
    })
}