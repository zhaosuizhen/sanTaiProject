import request from '@/utils/requestLogin'

//获取验证码
export function getCodeImg (params) {
    return request({
        responseType: 'arraybuffer',
        method: 'GET',
        url: '/clesun/controller/v1.0/captcha.jpg',
        params
    })    
}

//登录

export function login (params) {
    return request({
        method: 'POST',
        url: '/clesun/controller/v1.0/login',
        params
    })    
}