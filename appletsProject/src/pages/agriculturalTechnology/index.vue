<template>
<!-- 农技技术页面 -->
  <view>
    <scroll-view class="contemtMain" @scrolltolower="scollBottom" scroll-y>
      <view class="contentList" 
      v-for="(item,index) in listData" :key="index"
      @click="goToDetails(item.id)">
        <h1>{{item.title}}</h1>
        <h2>{{item.content}}</h2>
        <p>
          <span class="right_text">{{item.updateTime.substring(0,10)}}</span>
        </p>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { NJJSselectList, NJJSselectById} from '@/api/infoService'
export default {
  data(){
    return{
      pageSize:10,
      currentPage:1,
      listData:[]
    }
  },
  async mounted(){
    await this.getSelectList()
  },
  methods:{
    //触底监听
    async scollBottom(){
      this.currentPage++
      await this.getSelectList()
    },
    //获取农技技术信息列表
    async getSelectList(){
      let obj = JSON.stringify(
        {
          "pageSize":this.pageSize,
          "dataType":this.dataType,
          "currentPage":this.currentPage
        }
      )
      let [err,res] = await NJJSselectList(obj)
      // console.log(res.data.entitys.records)
      if(!res.data.entitys.records.length){
        uni.showToast({
          title:'到底了',
          icon:'none'
        })
        return
      }
      this.listData = this.listData.concat(res.data.entitys.records)
    },
    //跳转详情页
    goToDetails(id){
      // console.log(id)
      uni.navigateTo({
        url: `/pages/infoServiceDetails/index?queryID=${id}&type=3`
      });
    }
  }
}
</script>

<style>
.contentList{
  padding: 15rpx 4%;
  box-sizing: border-box;
  position: relative;
  height: 200rpx;
  border: 1px solid #ccc;
}
.contentList h1{
  font-weight: bold;
  font-size: 32rpx;
}
.contentList h2{
  font-size: 28rpx;
  overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.contentList p{
  width: 92%;
  position: absolute;
  bottom: 15rpx;
  font-size: 28rpx;
}
.left_text{
  float: left;
}
.right_text{
  float: right;
}
.contemtMain{
  position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
}
</style>