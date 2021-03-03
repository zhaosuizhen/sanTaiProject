<template>
<!-- 价格列表详情页面 -->
    <view class="content">
        <!-- 表单 -->
        <!-- <van-dropdown-menu z-index:20>
            <van-dropdown-item :value="search.bazaar" z-index:20 :options="option" @change="choiceCompany" />
        </van-dropdown-menu> -->
        <van-radio-group class="choiceBox" :value="radio" @change="changeCompany">
            <van-radio v-for="(item,index) in option" :key="index" :name="item.value">{{item.value}}</van-radio>
        </van-radio-group>

        <!-- echarts图表 -->
        <!-- <view class="Title">
            <p>市场价格数据趋势</p>
        </view>
        <view class="container">
            <mpvue-echarts ref="pieChart" :echarts="echarts" @onInit="initChart" />
        </view> -->
        <!-- table表格 -->
        <view class="Title">
            <p>产品价格列表统计</p>
        </view>
        <scroll-view class="contemtMain" scroll-y>
            <ul class="tableListUl">
                <li class="tableHeadLi">
                    <view class="tableHead">日期</view>
                    <view class="tableHead">品种</view>
                    <view class="tableHead">价格</view>
                    <view class="tableHead">单位</view>
                </li>
                <li v-for="(item,index) in tableList" :key="index">
                    <view>{{item.createtime.substring(0,10)}}</view>
                    <view>{{item.varieties}}</view>
                    <view>{{item.avgprice}}</view>
                    <view>元/千克(kg)</view>
                </li>
            </ul>
        </scroll-view>
    </view> 
</template>

<script>
    // import * as echarts from 'echarts'
    // import mpvueEcharts from 'mpvue-echarts'

    import { getSelectListDetail, getSelectListBazaar } from '@/api/priceData'

    export default {
        data() {
            return {
                radio:'1',
                // echarts_x:[],
                // echarts_y:[],
                currentDate: new Date().getTime(),
                minDate: new Date().getTime(),
                formatter(type, value) {
                    if (type === 'year') {
                        return `${value}年`;
                    } else if (type === 'month') {
                        return `${value}月`;
                    }
                    return value;
                },

                starTimeValue:'',
                starTimeShow:false,
                endTimeShow:false,
                option: [],
                value: "",

                // echarts,
                tableList:[],
                search:{
                    bazaar:'',
                    varieties:'',
                    pageSize:1000,
                    currentPage:1,
                    queryStartTime:``,
                    queryEndTime:''
                }
            }
        },
        onLoad(res){
            if(res.query){
                this.search.varieties = res.query
            }
        },
        async onShow(){
            if(uni.getStorageSync('searchName')){
                this.search.varieties = uni.getStorageSync('searchName')
            }
            await this.getSelectListBazaarData()
            await this.getSelectListDetailData()
            this .getTime()
        },
        components: {
            // mpvueEcharts
        },
        methods: {
            changeCompany(e){
                // console.log(e.detail)
                this.radio = e.detail
                this.search.bazaar = e.detail
                this.getSelectListDetailData()
            },
            //获取市场
            async getSelectListBazaarData(){
                let [err,res] = await getSelectListBazaar()
                res.data.entitys.forEach((item,index) => {
                    this.option[index] = { text: item, value: item }
                })
                // console.log(this.option)
            },
            //选择市场
            choiceCompany(e){
                console.log(e.detail)
                this.search.bazaar = e.detail
                this.getSelectListDetailData()
            },
            //获取当前日期
            getTime(){
                let myDate = new Date();
                let year = myDate.getFullYear() + '';    //获取完整的年份(4位,1970-????)
                let month = (myDate.getMonth() + 1 < 10?'0' + (myDate.getMonth() + 1):myDate.getMonth() + 1);       //获取当前月份(0-11,0代表1月)
                let day = (myDate.getDate() < 10? '0' + myDate.getDate():myDate.getDate() + '');        //获取当前日(1-31)
                this.search.queryStartTime = `${year}-01-01 00:00:00`
                this.search.queryEndTime = `${year}-${month}-${day} 00:00:00`
            },
            //查询详情
            async getSelectListDetailData(){
                // console.log(this.search)
                let obj = JSON.stringify(this.search)
                let [err,res] = await getSelectListDetail(obj)
                console.log(res.data.entitys.records)
                this.tableList = res.data.entitys.records
                
                if(res.data.entitys.records.length){
                    this.radio = res.data.entitys.records[0].bazaar
                }

                res.data.entitys.records.splice(0,10)
                // res.data.entitys.records.splice(0,10).forEach((item,index) => {
                //     // console.log(item.createtime)
                //     this.echarts_x[index] = item.createtime
                //     this.echarts_y[index] = item.avgprice
                // })
            },
            // echarts配置
            // initChart(e) {
            //     // console.log(e)
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
            //         // tooltip: {
            //         //     trigger: 'axis',
            //         //     axisPointer: {
            //         //     type: 'shadow',
            //         //     label: {
            //         //         show: true,
            //         //         backgroundColor: '#7B7DDC'
            //         //     }
            //         //     },
            //         //     // formatter: "{b}：{c}个",
            //         // },
            //         // legend: {
            //         //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //         //     textStyle:{
            //         //         color: '#fff'
            //         //     },
            //         //     top: '0%',
            //         //     // right: '20%'
            //         //     right: '0%'
            //         // },
            //         grid: {     //设置图标位置
            //             top: '20%',
            //             left: '5%',
            //             right: '5%',
            //             bottom: '0%',
            //             containLabel: true
            //         },
            //         xAxis: {
            //             type: 'category',
            //             boundaryGap: false,
            //             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            //             axisLabel: {    //设置x轴文字颜色
            //                 color: '#000'
            //             },
            //             axisLine:{      //设置轴线是否显示
            //                 show: true
            //             }
            //         },
            //         yAxis: [
            //             {
                            
            //                 name: '价格(元/公斤)',
            //                 type: 'value',
            //                 axisLabel: {    //设置x轴文字颜色
            //                     color: '#000'
            //                 },
            //                 nameTextStyle: {
            //                     color: '#000'
            //                 },
            //                 splitLine: {    //设置分隔线
            //                     show: false
            //                 },
            //                 axisLine:{      //设置轴线是否显示
            //                     show: true
            //                 }
            //             }
            //         ],
            //         series: [
            //             {
            //                 name: '价格',
            //                 type: 'line',
            //                 // stack: '总量',
            //                 data: [820, 932, 901, 934, 1290, 1330, 1320],
            //                 symbol: 'none',     //去掉点
            //                 smooth: 0.5,        //变平滑
            //                 itemStyle:{
            //                     color: '#8CC87C'
            //                 },
            //                 areaStyle: {                    //设置折线下面的颜色
            //                     normal: {
            //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //                             {
            //                                 offset: 0,
            //                                 color: 'rgba(140,200,124, 0.5)'
            //                             },
            //                             {
            //                                 offset: 1,
            //                                 color: 'rgba(0,0,0,0)'
            //                             }
            //                         ], false),
            //                         shadowColor: 'rgba(140,200,124, 0.5)',
            //                         shadowBlur: 20
            //                     }
            //                 }
            //             }
            //         ]
            //     };


            //     chart.setOption(option)
            //     this.$refs.pieChart.setChart(chart);
            //     //return chart
            // }
        }
    }
</script>

<style>
    page{
        height: 100%;
    }
    .container {
        height: 30%;
        padding: 0 10px;
        margin-bottom: 50rpx;
    }
    .content{
        position: relative;
        height: 100%;
    }
    .Title{
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        background: #ddd;
        font-weight: bold;
        font-size: 30rpx;
        box-sizing: border-box;
        padding-left: 30rpx;
    }
    .tableListUl{
        padding-top: 60rpx;
    }
    .tableListUl li{
        height: 60rpx;
        line-height: 60rpx;
        font-size: 30rpx;
        display: flex;
    }
    .tableHeadLi{
        top: 320rpx;
        width: 100%;
        position: fixed;
        background: #fff;
    }
    .tableHead{
        font-weight: bold;
    }
    .tableListUl li view{
        text-align: center;
        flex: 1;
    }
    .input{
        width: 100%;
        height: 100rpx;
    }
    .van-dropdown-item{
        z-index: 1 !important;
    }
    .contemtMain{
        position: absolute;
        width: 100%;
        top: 320rpx;
        bottom: 0;
    }

</style>