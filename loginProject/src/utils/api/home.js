import request from '@/utils/request'

//获取一级菜单
export function getmanuList(params) {
    return request({
        method: 'GET',
        url: '/clesun/controller/v1.0/getMenuByPhone',
        params
    })  
}
