<template>
<!-- 供求信息页面 -->
	<view class="content">
		<!-- NAV导航 -->
		<view class="nav">
			<ul>
				<li v-for="(item,index) in navList" :key="index"
				:class="{'active':(index == activeChoice?true:false)}"
				@click="choiceNav(index)">
					{{item}}
				</li>
			</ul>
		</view>
		<!-- 内容列表 -->
		<scroll-view class="contemtMain" @scrolltolower="scollBottom" scroll-y>
			<view class="contentList">
				<ul>
					<li v-for="(item,index) in contentList" :key="index" @click="goToDetail(item.id,activeChoice)">
						<view class="left_img">
							<image class="pic" :src="item.productImg"></image>
						</view>
						<view class="right_content">
							<h1>{{item.productName}}</h1>
							<h2>产地：{{item.address}}</h2>
							<p>
								<span>￥<span class="priceNum">{{item.price}}</span>元/公斤</span>
								<span v-if="activeChoice == 0">供应数量：{{item.productNum}}公斤</span>
								<span v-if="activeChoice == 1">需求数量：{{item.productNum}}公斤</span>
							</p>
						</view>
					</li>
				</ul>
			</view>
		</scroll-view>
		<!-- 底部按钮 -->
		<view class="bottomBtn">
			<van-button v-if="activeChoice == 0" class="btn" size='large' type='info' @click="goToBusiness('out')">我要卖</van-button>
			<van-button v-if="activeChoice != 0" class="btn" size='large' type='info' @click="goToBusiness('in')">我要买</van-button>
		</view>
	</view>
</template>

<script>
import { getInfoList } from '@/api/supplyInfo'
import imgUrl from '@/utils/imgUrl'
	export default {
		data() {
			return {
				navList:['供应信息','求购信息'],
				activeChoice:0,
				getListValue:{
					"currentPage": 1,
					"pageSize": 10,
                    "dataType":1,		//1为供应接口、2为需求接口
                    "tokenid":''
				},
				contentList:[]
			}
		},
		onLoad() {

		},
		async onShow(){
            this.getListValue.tokenid = uni.getStorageSync('openID')
            console.log(this.getListValue.tokenid)
			await this.getInfoListData()
		},
		methods: {
			//搜索功能
			confirmSearch(e){
				this.getListValue.productName = e.detail
				this.getInfoListData()
			},
			//跳转详情页
			async goToDetail(id,type){
				await uni.navigateTo({
					url:`/pages/supplyInfoDetail/index?id=${id}&type=${type}`
				})
			},
			//跳转收购、出售页面
			async goToBusiness(query){
				await uni.navigateTo({
					url:`/pages/business/index?query=${query}`
				})
			},
			//获取内容列表
			async getInfoListData(){
				let obj = JSON.stringify(this.getListValue)
				let [err,res] = await getInfoList(obj)
				if(!res.data.entitys.records.length){
                    uni.showToast({
                        title:'到底了',
                        icon:'none'
                    })
                    return
                }
				console.log(res.data.entitys.records)
				res.data.entitys.records.forEach((item,index) => {
					res.data.entitys.records[index].productImg = `${imgUrl}${item.productImg}`
				})
				this.contentList = this.contentList.concat(res.data.entitys.records)
			},
			//切换nav导航
			choiceNav(index){
				this.contentList = []
				this.getListValue.productName = ''
				this.getListValue.currentPage = 1
				this.activeChoice = index
				this.getListValue.dataType = index + 1
				this.getInfoListData()
			},
			//触底监听
            scollBottom(){
                this.getListValue.currentPage++
                this.getInfoListData()
            }
		}
	}
</script>

<style scoped lang="less">
.nav{
	ul{
		position: absolute;
		// top: 280rpx;
		left: 5%;
		background: #fff;
		z-index: 99;
		width: 90%;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		li{
			padding: 0 40rpx;
			color: #666;
			line-height: 100rpx;
			font-size: 36rpx;
			font-weight: bold;
		}
	}
}
.active{
	color: #1571FA !important;
	border-bottom: 10rpx solid #1571FA;
}
.bottomBtn{
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	.btn{
		position: relative;
		width: 750rpx !important;
		height: 140rpx;
	}
}
.contemtMain{
	margin-top: 80rpx;
    position: absolute;
    width: 100%;
    top: 20rpx;
    bottom: 140rpx;
}
.contentList{
	width: 750rpx;
	height: 100%;
	position: relative;
	ul{
		position: relative;
		width: 90%;
		left: 5%;
		li{
			position: relative;
			width: 100%;
			height: 200rpx;
			padding-top: 20rpx;
			display: flex;
			border-bottom: 2px solid #ccc;
			.left_img{
				height: 100%;
				flex: 2;
			}
			.right_content{
				height: 100%;
				flex: 5;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				h1{
					width: 100%;
					font-weight: bold;
					font-size: 34rpx;
				}
				h2{
					width: 100%;
					font-size: 28rpx;
					color: #666;
				}
				p{
					width: 100%;
					font-size: 28rpx;
					display: flex;
					justify-content: space-between;
					span:nth-of-type(1){
						color: #F4A62A;
						.priceNum{
							// font-size: 34rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
	}

}
.pic{
  position: relative;
  width: 90%;
  height: 70%;
  border-radius: 20rpx;
}
.searchBox{
	width: 100%;
	position: absolute;
	box-sizing: border-box;
	padding-left: 30rpx !important;
	padding-right: 30rpx !important;
	top: 0;
	opacity: 0.9;
	padding: 0;
}
.van-search{
	padding: 0 !important;
}
</style>
