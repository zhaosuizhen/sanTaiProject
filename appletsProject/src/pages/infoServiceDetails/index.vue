<template>
  <view>
      <!-- 信息服务详情页 -->
      <view class="header">
        <h1 v-if="searchType != 4">{{pageContent.title}}</h1>
        <h1 v-if="searchType == 4">{{pageContent.diseasesName}}</h1>
        <p>
          <span v-if="searchType == 1" class="left_text">
            信息来源:<span style="color:#FF9900">{{pageContent.source}}</span>
          </span>
          <span v-if="searchType == 1" class="right_text">{{pageContent.releaseTime}}</span>
          <span v-if="searchType == 3" class="right_text">{{pageContent.updateTime}}</span>
          <span v-if="searchType == 4" class="right_text">{{pageContent.createTime}}</span>
        </p>
      </view>

      <view class="content">
        <p v-if="searchType == 1" style="font-size:32rpx;text-indent: 2em;">{{pageContent.content}}</p>

        <p v-if="searchType == 3" style="font-size:32rpx;">{{pageContent.content}}</p>

        <view class="img_box">
          <image class="pic" :src="pageContent.picUrl"></image>
        </view>
        <p v-if="searchType == 4" style="font-size:32rpx;">{{pageContent.diseasestContent}}</p>
      </view>
  </view>
</template>

<script>
import { ZCXXselectById, NJJSselectById, BCHselectById } from '@/api/infoService'
export default {
  data(){
    return{
      id:0,
      searchType:0,
      pageContent:{}
    }
  },
  onLoad(res){
    this.id = res.queryID
    this.searchType = res.type

    if(this.searchType == 1){
      this.ZCXXDetails()
    }else if(this.searchType == 2){
      this.ZCXXDetails()
    }else if(this.searchType == 3){
      this.NJJSDetails()
    }else if(this.searchType == 4){
      this.BCHDetails()
    }
  },
  methods:{
    //获取政策新闻、农业新闻详情
    async ZCXXDetails(){
      let [srr,res] = await ZCXXselectById(this.id)
      res.data.entitys.releaseTime = res.data.entitys.releaseTime.substring(0,10)
      this.pageContent = res.data.entitys
      // console.log(res.data.entitys)
    },

    //获取农技技术详情
    async NJJSDetails(){
      let [srr,res] = await NJJSselectById(this.id)
      res.data.entitys.updateTime = res.data.entitys.updateTime.substring(0,10)
      this.pageContent = res.data.entitys
      // console.log(res.data.entitys)
    },

    //获取病虫害详情
    async BCHDetails(){
      // console.log(this.id)
      let [srr,res] = await BCHselectById(this.id)
      res.data.entitys.createTime = res.data.entitys.createTime.substring(0,10)
      this.pageContent = res.data.entitys
      // console.log(res.data.entitys)
    }

  }
}
</script>

<style>
.header{
  position: relative;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 30rpx 4% 60rpx;
  box-sizing: border-box;
}
.header h1{
  font-weight: bold;
  font-size: 32rpx;
}
.header p{
  width: 92%;
  font-size: 28rpx;
  position: absolute;
  bottom: 10rpx;
}
.left_text{
  float: left;
}
.right_text{
  float: right;
}
.content{
  position: relative;
  box-sizing: border-box;
  padding: 40rpx;
}
.img_box{
  position: relative;
  width: 100%;
  height: 500rpx;
  margin-bottom: 50rpx;
}
.pic{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>