<template>
  <view>
      <image class="pic" :src="contentObj.productImg"></image>

      <view class="content_top">
          <h1>{{contentObj.productName}}</h1>
          <p>
		  	  <span>￥<span class="priceNum">{{contentObj.price}}</span>元/公斤</span>
		  	  <span v-if="type == 0">供应数量：{{contentObj.productNum}}公斤</span>
		  	  <span v-if="type == 1">需求数量：{{contentObj.productNum}}公斤</span>
		  </p>
      </view>

      <view class="content_middle">
          <h1>{{contentObj.address}}</h1>
          <p>
		  	  <span>联系人：{{contentObj.contacts}}</span>
		  	  <span>联系电话：{{contentObj.phone}}</span>
		  </p>
      </view>

      <view class="content_bottom">
          <h1>产品详情</h1>
          <p>
		  	  {{contentObj.productDescribe}}
		  </p>
      </view>
  </view>
</template>

<script>
import { getDetail } from '@/api/supplyInfo'
import imgUrl from '@/utils/imgUrl'
export default {
    data(){
        return{
            id:0,
            type:0,
            contentObj:{}
        }
    },
    onLoad(res){
        this.id = res.id
        this.type = res.type
    },
    async onShow(){
        await this.getDetailData()
    },
    methods:{
        //获取详情
        async getDetailData(){
            let [err,res] = await getDetail(this.id)
            
            res.data.entitys.productImg = `${imgUrl}${res.data.entitys.productImg}`
            console.log(res.data.entitys)
            this.contentObj = res.data.entitys
        },
    }
}
</script>

<style lang="less" scoped>
.pic{
    display: block;
    position: relative;
    width: 100%;
//   height: 70%;
//   border-radius: 20rpx;
}
.content_top{
    border-bottom: 6rpx solid #ddd;
    padding: 20rpx 20rpx 0;
    // height: 160rpx;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	h1{
		width: 100%;
		font-weight: bold;
		font-size: 34rpx;
	}
	p{
        height: 80rpx;
        line-height: 80rpx;
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
.content_middle{
    border-bottom: 6rpx solid #ddd;
    padding: 20rpx 20rpx 0;
    // height: 160rpx;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	h1{
		width: 100%;
		font-weight: bold;
		font-size: 30rpx;
	}
	p{
        height: 80rpx;
        line-height: 80rpx;
		width: 100%;
		font-size: 26rpx;
		display: flex;
		justify-content: space-between;
	}
}
.content_bottom{
    border-bottom: 6rpx solid #ddd;
    padding: 20rpx 20rpx 0;
    // height: 160rpx;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	h1{
		width: 100%;
		font-weight: bold;
		font-size: 30rpx;
	}
	p{
        padding: 20rpx 0;
        line-height: 40rpx;
		width: 100%;
		font-size: 26rpx;
		display: flex;
		justify-content: space-between;
	}
}
</style>