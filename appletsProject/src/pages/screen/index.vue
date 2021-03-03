<template>
<!-- 价格搜索页面的筛选页面 -->
	<view class="content">
		<!-- NAV导航栏 -->
		<view class="navBox">
			<ul class="navUl">
                <li v-for="(item,index) in navList" :key="index"
                :class="{'active':(index == activeChoice?true:false)}"
                @click="choiceNav(index)">
                    {{item}}
                </li>
                <li>
                    <button @click="backPage" class="backPage">返回</button>
                </li>
            </ul>
		</view>

		<!-- 主体内容 -->
		<scroll-view class="contemtMain" scroll-y>
			<view class="screen_main">
				<!-- 左侧nav列表 -->
				<view class="left_nav">
					<ul class="left_nav_ul">
						<li v-for="(item,index) in leftNavList" :key="index" 
						:class="{'active_left':(index == activeChoice_left?true:false)}"
						@click="choiceLeftNav(index)"
						class="left_nav_li">
							{{item.fsecondName}}
						</li>
					</ul>
				</view>
				<!-- 右侧选择框 -->
				<view class="right_content">
					<view class="right_content_item" v-for="(item,index) in rightNavList" :key="index" @click="choiceItem(item)">
						{{item.associationName}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { getTypeList } from '@/api/priceData'
	export default {
		data() {
			return {
                navList:['蔬菜','肉类','水果'],
				activeChoice:0,
				activeChoice_left:0,
				ffiristId:1,
				fsecondId:null,
				leftNavList: [],
				rightNavList:[]
			}
		},
		onLoad() {

		},
		onShow(){
			
		},
		async created(){
			await this.getTypeListData_2()
		},
		methods: {
            //获取二级分类列表
            async getTypeListData_2(){
                let obj = JSON.stringify({
                    "ffiristId": this.ffiristId
                })
                let [err,res] = await getTypeList(obj)
				// console.log(res.data.entitys)
				this.leftNavList = res.data.entitys

				this.fsecondId = this.leftNavList[0].fsecondId
				await this.getTypeListData_3()
			},
			//获取三级分类
			async getTypeListData_3(){
                let obj = JSON.stringify({
                    "fsecondId": this.fsecondId
                })
                let [err,res] = await getTypeList(obj)
				// console.log(res.data.entitys)
				res.data.entitys.forEach((item,index) => {
					if(item.associationName.length > 4){
						res.data.entitys[index].associationName = item.associationName.substring(0,4) + '…'
					}
				})
				this.rightNavList = res.data.entitys
			},
			//切换导航
            async choiceNav(index){
				this.ffiristId = index + 1
                this.activeChoice = index
				this.activeChoice_left = 0
				await this.getTypeListData_2()
			},
			async choiceLeftNav(index){
				this.fsecondId = this.leftNavList[index].fsecondId
				await this.getTypeListData_3()
				this.activeChoice_left = index
			},
			//选择具体哪一项
			async choiceItem(item){
				//因为跳转tabbar不能携带参数，所以存入本地
				uni.setStorageSync('searchName',item.associationName)
				
				await uni.redirectTo({
					url:`/pages/priceDataDetail/index`
				})
			},
			//点击返回按钮
			async backPage(){
				// await uni.switchTab({
				// 	url:'/pages/priceData/index'
				// })
				uni.navigateBack()
			},
		}
	}
</script>

<style scoped>
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
    height: 100rpx;
    flex: 1;
    text-align: center;
    line-height: 100rpx;
}
.active{
    color: #1571FA;
    font-weight: bold;
}
.active_left{
    color: #1571FA;
	font-weight: bold;
	background: #fff;
}
.backPage{
	margin-top: 20rpx;
	font-size: 30rpx;
	width: 140rpx;
	height: 70rpx;
}
.screen_main{
	display: flex;
}
.left_nav{
	flex: 1;
	background: #ddd;
}
.left_nav_ul{
	box-sizing: border-box;
	padding-top: 30rpx;
}
.left_nav_li{
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	font-size: 30rpx;
}
.right_content{
	flex: 3;
	/* display: flex;
	flex-wrap: wrap;
	justify-content: space-around; */
	padding-top: 30rpx;
	height: auto;
}
.right_content_item{
	width: 30%;
	float: left;
	margin-left: 15rpx;
	margin-bottom: 15rpx;
	text-align: center;
	height: 100rpx;
	line-height: 100rpx;
	background: #ddd;
	font-size: 30rpx;
}
.contemtMain{
    position: absolute;
    width: 100%;
    top: 100rpx;
    bottom: 0;
}
</style>
