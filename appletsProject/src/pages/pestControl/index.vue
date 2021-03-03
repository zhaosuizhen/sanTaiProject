<template>
<!-- 病虫害防治页面 -->
  <view>
    <scroll-view class="contemtMain" @scrolltolower="scollBottom" scroll-y>
      <view class="contentList" 
      v-for="(item,index) in listData" :key="index"
      @click="goToDetails(item.id)">
        <view class="img_box">
          <image class="pic" :src="item.picUrl"></image>
        </view>
        <view class="content_box">
          <h1>{{item.diseasesName}}</h1>
          <p>{{item.diseasestContent}}</p>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { BCHselectList, BCHselectById} from '@/api/infoService'
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
    //获取病虫害防治信息列表
    async getSelectList(){
      let obj = JSON.stringify(
        {
          "pageSize":this.pageSize,
          "dataType":this.dataType,
          "currentPage":this.currentPage
        }
      )
      let [err,res] = await BCHselectList(obj)
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
        url: `/pages/infoServiceDetails/index?queryID=${id}&type=4`
      });
    }
  }
}
</script>

<style>
.contentList{
  padding: 25rpx 4%;
  box-sizing: border-box;
  position: relative;
  height: 300rpx;
  border: 1px solid #ccc;
  display: flex;
}
.img_box{
  overflow: hidden;
  border-radius: 8px;
  flex: 1;
  height: 70%;
  background: #ccc;
}
.pic{
  position: relative;
  width: 100%;
  height: 100%;
}
.content_box{
  flex: 2;
  box-sizing: border-box;
  padding-left: 15rpx;
}
.content_box h1{
  font-weight: bold;
}
.content_box p{
  font-size: 30rpx;
  /* text-indent: 2em; */
  overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
}
.contemtMain{
  position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
}
</style>