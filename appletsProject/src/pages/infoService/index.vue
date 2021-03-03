<template>
<!-- 信息服务页面 -->
	<view class="content">
		<!-- 导航栏 -->
		<view class="navList">
			<view v-for="(item,index) in navList" :key="index"
			:class="{'active':(index == activeChoice?true:false)}"
			@click="choiceNav(index)">
				{{item}}
			</view>
		</view>

		<!-- 主体内容 -->
		<scroll-view class="contemtMain" @scrolltolower="scollBottom" scroll-y>
			<PolicyNews v-if="activeChoice == 0"></PolicyNews>
			<AgriculturalNews v-if="activeChoice == 1"></AgriculturalNews>
			<AgriculturalTechnology v-if="activeChoice == 2"></AgriculturalTechnology>
			<PestControl v-if="activeChoice == 3"></PestControl>
			<AgriculturalResource v-if="activeChoice == 4"></AgriculturalResource>
		</scroll-view>
	</view>
</template>

<script>
import PolicyNews from '@/pages/policyNews/index'
import AgriculturalNews from '@/pages/agriculturalNews/index'
import AgriculturalTechnology from '@/pages/agriculturalTechnology/index'
import PestControl from '@/pages/pestControl/index'
import AgriculturalResource from '@/pages/agriculturalResource/index'
	export default {
		data() {
			return {
				navList:['政策新闻','农业新闻','农技技术','虫害防治', '市场行情'],
				activeChoice: 0
			}
		},
		onLoad() {

		},
		methods: {
			choiceNav(index){
				this.activeChoice = index
			},
			scollBottom(){
				// console.log('到底了')
			}
		},
		components:{
			PolicyNews,
			AgriculturalNews,
			AgriculturalTechnology,
			PestControl,
			AgriculturalResource
		}
	}
</script>

<style scoped>
.navList{
	width: 100%;
	position: fixed;
	display: flex;
	z-index: 10;
	background: #FFF;
}
.navList view{
	flex: 1;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	font-size: 35rpx;
	font-weight: bold;
}
.active{
	color: #1571FA;
	border-bottom: 10rpx solid #1571FA;
}
scroll-view{
	position: absolute;
    width: 100%;
    top: 100rpx;
    bottom: 0;
}
</style>
