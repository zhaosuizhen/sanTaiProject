<template>
<!-- 价格数据页面 -->
	<view class="content">
        <!-- 搜索框 -->
		<!-- <view class="searchBox">
            <input class="weui-input searchInput" v-model="searchValue" placeholder="搜索" @confirm="confirmSearch" />
            <view class="icon_search"></view>
            <view @click="eliminateSearchValue" class="icon_eliminate"></view>
		</view> -->

        <!-- <van-search class="searchBox" :value="searchValue" v-model="searchValue" placeholder="请输入搜索关键词" @search="confirmSearch" /> -->
        <view class="searchBox">
            <input class="searchInput" type="text" v-model="searchValue">
            <view class="searchBtn" @click="confirmSearch">搜索</view>
        </view>
        
        <!-- NAV导航 -->
        <view class="navBox">
            <ul class="navUl">
                <li v-for="(item,index) in navList" :key="index"
                :class="{'active':(index == activeChoice?true:false)}"
                @click="choiceNav(index)">
                    {{item}}
                </li>
                <li @click="confirm_search">
                    筛选∨
                </li>
            </ul>
        </view>
        <!-- 主要内容表格 -->
        <scroll-view class="contemtMain" @scrolltolower="scollBottom" scroll-y>
            <view class="naimTableBox">
                <ul class="naimTableBoxUl">
                    <li>
                        <view>市场名称</view>
                        <view>品种</view>
                        <view>价格</view>
                    </li>
                    <li v-for="(item,index) in tableList" :key="index" @click="goToDetail(item)">
                        <view>{{item.bazaar}}</view>
                        <view>{{item.varieties}}</view>
                        <view><span>{{item.avgprice}}</span>元/公斤</view>
                    </li>
                </ul>
            </view>
        </scroll-view>
	</view>
</template>

<script>
import { getSelectList, getSelectListDetail } from '@/api/priceData'
	export default {
		data() {
			return {
                searchValue:'',
                navList:['蔬菜','肉类','水果'],
                activeChoice:0,
                searchName:'',
                pageSize:20,
                currentPage: 1,
                varieties:'蔬菜',
                tableList:[]
			}
        },
        onLoad(){
            console.log('aaa');
        },
        async created(){
            this.tableList = []

            // this.searchName = uni.getStorageSync('searchName')
            //获取到searchName然后去查询
            // console.log(this.searchName)
            if(this.searchName != ''){
                this.getSelectListDetailData()
                uni.clearStorageSync()
                return
            }

            await this.getSelectListData()
        },
        async mounted(){
            
        },
		methods: {
            //跳转到详情页
            goToDetail(item){
                    // console.log(item)
                uni.navigateTo({
                    url:`/pages/priceDataDetail/index?query=${item.varieties}`
                })
            },
            //搜索功能
            confirmSearch(e){
                console.log(this.searchValue);
                // if(e.detail){
                if(this.searchValue){
                    // this.searchValue = e.detail
                    // this.searchName = e.detail
                    this.searchValue = this.searchValue
                    this.searchName = this.searchValue
                    this.getSelectListDetailData()
                    this.searchValue = ''
                    this.searchName = ''
                }else{
                    this.getSelectListData()
                }
                
            },
            //触底监听
            scollBottom(){
                this.currentPage++
                this.getSelectListData()
            },
            //获取价格列表
            async getSelectListData(){
                let obj = JSON.stringify({
                    "pageSize": this.pageSize,
                    "currentPage": this.currentPage,
                    "varieties": this.varieties
                })
                let [err,res] = await getSelectList(obj)
                // console.log(res.data)
                if(!res.data.entitys.records.length){
                    uni.showToast({
                        title:'到底了',
                        icon:'none'
                    })
                    return
                }
                
                res.data.entitys.records.forEach((item,index) => {
                    if(item.bazaar.length > 6){
                        res.data.entitys.records[index].bazaar = item.bazaar.substring(0,7) + '…'
                    }
                })
                // console.log(res.data.entitys.records)
                this.tableList = this.tableList.concat(res.data.entitys.records)
            },
            //获取价格详情
            async getSelectListDetailData(){
                // console.log(this.searchName)
                let obj = JSON.stringify({
                    "currentPage": 10,
                    "pageSize": 1,
                    "varieties": this.searchName
                })
                let [err,res] = await getSelectListDetail(obj)

                if(res.data.entitys.records[0].dataType == 0){
                    this.activeChoice = 0
                }else if(res.data.entitys.records[0].dataType == 2){
                    this.activeChoice = 1
                }else if(res.data.entitys.records[0].dataType == 1){
                    this.activeChoice = 2
                }
                

                res.data.entitys.records.forEach((item,index) => {
                    if(item.bazaar.length > 6){
                        res.data.entitys.records[index].bazaar = item.bazaar.substring(0,7) + '…'
                    }
                })

                this.tableList = res.data.entitys.records
            },
            //清除搜索栏内容
            eliminateSearchValue(){
                this.searchValue = ''
            },
            //切换导航
            choiceNav(index){
                this.tableList = []
                this.currentPage = 1
                this.activeChoice = index
                if(index == 0){
                    this.varieties = '蔬菜'
                    this.getSelectListData()
                }else if(index == 1){
                    this.varieties = '肉类'
                    this.getSelectListData()
                }else if(index == 2){
                    this.varieties = '水果'
                    this.getSelectListData()
                }
            },
            //点击筛选功能跳转页面
            async confirm_search(){
				await uni.navigateTo({
					url:'/pages/screen/index'
				})
			},
		}
	}
</script>

<style scoped>
.content{
    position: relative;
    height: 90vh;
    width: 100%;
}
.searchBox{
    position: relative;
    width: 100%;
	box-sizing: border-box;
    display: flex;
    justify-content: space-between;
	/* padding-left: 30rpx !important; */
	/* padding-right: 30rpx !important; */
}
.searchInput{
    margin: 10rpx 20rpx;
    width: 550rpx;
    height: 70rpx;
    border: 1px solid #ccc;
    background: #eee;
}
.searchBtn{
    position: relative;
    top: 6px;
    width: 150rpx;
    height: 70rpx;
    line-height: 70rpx;
    background: #3296FA;
    border-radius: 35rpx;
    text-align: center;
    color: #fff;
}
/* .searchInput{
    position: relative;
    width: 100%;
    background: #eee;
    padding: 10rpx 60rpx;
    box-sizing: border-box;
    height: 80rpx;
} */
.icon_search{
    position: absolute;
    width: 32rpx;
    height: 32rpx;
    background:url('http://static.botue.com/ugo/images/icon_search%402x.png') no-repeat;
    background-size: 32rpx 32rpx;
    top: 50%;
    transform: translate(0,-50%);
    left: 15rpx;
}
.icon_eliminate{
    position: absolute;
    width: 32rpx;
    height: 32rpx;
    background:url('http://static.botue.com/ugo/images/icon_search%402x.png') no-repeat;
    background-size: 32rpx 32rpx;
    top: 50%;
    transform: translate(0,-50%);
    right: 15rpx;
}
.navBox{
    height: 100rpx;
}
.navUl{
    display: flex;
    height: 100rpx;
    box-shadow:0rpx 5rpx 5rpx 5rpx #ccc ;
    /* border-bottom: 5rpx solid #ccc; */
}
.navUl li{
    position: relative;
    height: 100rpx;
    flex: 1;
    text-align: center;
    line-height: 100rpx;
    background: #fff;
    top: 0rpx;
    z-index: 9999;
}
.active{
    color: #1571FA;
    font-weight: bold;
}
.naimTableBoxUl{
    position: relative;
    padding-top: 80rpx;
}
.naimTableBoxUl li{
    display: flex;
    height: 80rpx;
    line-height: 80rpx;
    border-bottom: 1px solid #ccc;
}
.naimTableBoxUl li view{
    font-size: 30rpx;
    flex: 1;
    text-align: center;
}
.naimTableBoxUl li:nth-of-type(1){
    font-weight: bold;
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0rpx;
}
.contemtMain{
    position: absolute;
    width: 100%;
    top: 150rpx;
    bottom: 0;
}
</style>
