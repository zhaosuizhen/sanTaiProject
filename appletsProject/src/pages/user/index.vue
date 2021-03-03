<template>
    <view class="container">
        <view class="profile">
            <view class="meta">
                <van-button v-if="!loginFlig" class="avatarNoLigin" @click="login" open-type="getUserInfo">登录</van-button>
                <p v-if="!loginFlig" class="nickname">点击头像登录</p>
                <open-data v-if="loginFlig" class="avatar" type="userAvatarUrl"></open-data>
                <open-data v-if="loginFlig" class="nickname" type="userNickName"></open-data>
            </view>
        </view>
        <ul class="contentUl">
            <li>
                <span>供应发布</span>
                <span>0</span>
            </li>
            <li>
                <span>求购发布</span>
                <span>0</span>
            </li>
            <li @click="goToMyRelease">
                <span>我的发布</span>
                <span>></span>
            </li>
        </ul>
        <!-- <van-button type='info' @click="login" open-type="getUserInfo">登录</van-button> -->
        <!-- <mpvue-echarts ref="pieChart" :echarts="echarts" @onInit="initChart" /> -->
    </view>
</template>

<script>
    // import * as echarts from 'echarts'
    // import mpvueEcharts from 'mpvue-echarts'

    import { getToken } from '@/api/user'

    export default {
        data() {
            return {
                loginFlig: false,
                // echarts
            }
        },
        onHide(){
            if(!uni.getStorageSync('openID')){
                this.loginFlig = true
            }
        },
        onShow(){
            this.login()
        },
        components: {
            // mpvueEcharts
        },
        methods: {
            //跳转我的发布页面
            async goToMyRelease(){
                await uni.navigateTo({
					url:`/pages/myRelease/index`
				})
            },
            //点击登录按钮
            async login(){
                if(!uni.getStorageSync('openID') == ''){
                    this.loginFlig = true
                    return
                }
                const [err,codeObj] =  await uni.login();
                console.log('下面是code')
                console.log(codeObj.code)
                let [error,res] = await getToken(codeObj.code)
                console.log(res.data.openid)
                uni.setStorageSync('openID',res.data.openid)
                this.loginFlig = true
            },
            // initChart(e) {
            //     let {
            //         canvas,
            //         width,
            //         height
            //     } = e;
            //     width = width - 20;
            //     //let canvas = this.$refs.pieChart.canvas;
            //     echarts.setCanvasCreator(() => canvas);
            //     const chart = echarts.init(canvas, null, {
            //         width: width,
            //         height: height
            //     })

            //     canvas.setChart(chart)
            //     var option = {
            //         title: {
            //             text: '某站点用户访问来源',
            //             subtext: '纯属虚构',
            //             x: 'center'
            //         },
            //         tooltip: {
            //             trigger: 'item',
            //             formatter: "{a} {b} : {c} ({d}%)"
            //         },
            //         legend: {
            //             orient: 'vertical',
            //             bottom: '10%',
            //             data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            //         },
            //         series: [{
            //             name: '访问来源',
            //             type: 'pie',
            //             radius: '55%',
            //             center: ['50%', '40%'],
            //             data: [{
            //                     value: 335,
            //                     name: '直接访问'
            //                 },
            //                 {
            //                     value: 310,
            //                     name: '邮件营销'
            //                 },
            //                 {
            //                     value: 234,
            //                     name: '联盟广告'
            //                 },
            //                 {
            //                     value: 135,
            //                     name: '视频广告'
            //                 },
            //                 {
            //                     value: 1548,
            //                     name: '搜索引擎'
            //                 }
            //             ],
            //             itemStyle: {
            //                 emphasis: {
            //                     shadowBlur: 10,
            //                     shadowOffsetX: 0,
            //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
            //                 }
            //             }
            //         }]
            //     };

            //     chart.setOption(option)
            //     this.$refs.pieChart.setChart(chart);
            //     //return chart
            // }
        }
    }
</script>

<style scoped lang="less">
    page,
    .container {
        height: 100%;
    }

    .container {
        // padding: 0 10px;
    }
    .profile {
        height: 375rpx;
        background-color: #ea4451;
        display: flex;
        justify-content: center;
        align-items: center;
    }   
    .avatar {
        display: block;
        width: 140rpx;
        height: 140rpx;
        border-radius: 50%;
        overflow: hidden;
        border: 2rpx solid #fff;
    }
    .avatarNoLigin {
        display: block;
        width: 140rpx;
        height: 140rpx;
        line-height: 140rpx;
        font-size: 24rpx;
        text-align: center;
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
        border: 2rpx solid #fff;
    }

    .nickname {
        display: block;
        text-align: center;
        margin-top: 20rpx;
        font-size: 30rpx;
        color: #fff;
    }
    .contentUl{
        width: 100%;
        padding-top: 50rpx;
        box-sizing: border-box;
        li{
            box-sizing: border-box;
            padding: 0 50rpx;
            height: 100rpx;
            line-height: 100rpx;
            display: flex;
            justify-content: space-between;
            margin-bottom: 30rpx;
            background: #ddd;
            span:nth-of-type(2){
                font-weight: bold;
            }
        }
    }
</style>