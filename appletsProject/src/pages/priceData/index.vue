<template>
  <view>
      <image class="banner" src="http://119.6.57.72:8079/image/weixin/web/banner_1.jpg"></image>
      <view class="searchBox">
        <!-- 农业生产经营主体基础信息数据 -->
        <input v-show="index == 1" class="input" type="text" placeholder="请输入关键字" v-model="JYZT_managementName" value="">
        <!-- 耕地基本信息数据 -->
        <input v-show="index == 2" class="input" type="text" placeholder="请输入年份" v-model="GDSJ_datayear" value="">
        <input v-show="index == 2" class="input" type="text" placeholder="请输入乡镇" v-model="GDSJ_township" value="">
        <!-- 农业生产条件数据 -->
        <input v-show="index == 3" class="input" type="text" placeholder="请输入年份" v-model="NYSC_datayear" value="">
        <!-- 麦冬主产区数据 -->
        <input v-show="index == 4" class="input" type="text" placeholder="请输入年份" v-model="MDSJ_datayear" value="">
        <input v-show="index == 4" class="input" type="text" placeholder="请输入乡镇" v-model="MDSJ_township" value="">
        <!-- 农产品市场交易数据 -->
        <input v-show="index == 5" class="input" type="text" placeholder="请输入关键字" v-model="SCJY_bazaar" value="">
        <!-- 生猪养殖数据 -->
        <input v-show="index == 6" class="input" type="text" placeholder="请输入关键字" v-model="SZYZ_farmName" value="">
        <!-- 畜禽养殖数据 -->
        <input v-show="index == 7" class="input" type="text" placeholder="请输入年份" v-model="XQYZ_datayear" value="">
        <input v-show="index == 7" class="input" type="text" placeholder="请输入乡镇" v-model="XQYZ_township" value="">

        <view class="searchBtn" @click="search">
          搜索
        </view>
      </view>
      <scroll-view class="navBox" scroll-y="true" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll">
        <view @click="choiceItem(1)" :class="{nav: true, active: index == 1}">农业生产经营主体基础信息数据</view>
        <view @click="choiceItem(2)" :class="{nav: true, active: index == 2}">耕地基本信息数据</view>
        <view @click="choiceItem(3)" :class="{nav: true, active: index == 3}">农业生产条件数据</view>
        <view @click="choiceItem(4)" :class="{nav: true, active: index == 4}">麦冬主产区数据</view>
        <view @click="choiceItem(5)" :class="{nav: true, active: index == 5}">农产品市场交易数据</view>
        <view @click="choiceItem(6)" :class="{nav: true, active: index == 6}">生猪养殖数据</view>
        <view @click="choiceItem(7)" :class="{nav: true, active: index == 7}">畜禽养殖数据</view>
      </scroll-view>
      <scroll-view class="main" scroll-y="true" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" @scrolltolower="scollBottom">
        <!-- 农业生产经营主体基础信息数据 -->
        <view v-show="index == 1">
          <view class="table_title">
            <view>主体名称</view>
            <view>单位类型</view>
            <view>注册资金(万元)</view>
            <view>联系人</view>
            <view>联系电话</view>
            <view>注册日期</view>
          </view>

          <view class="table_main" v-for="(item, index) in tableData" :key="index">
            <view>{{item.managementName}}</view>
            <view>{{item.unitType ? item.unitType : '暂无'}}</view>
            <view>{{item.registeredCapital}}</view>
            <view>{{item.legalName ? item.legalName : '暂无'}}</view>
            <view>{{item.mobilePhone ? item.mobilePhone : '暂无'}}</view>
            <view>{{item.registrationDate ? item.registrationDate : '暂无'}}</view>
          </view>
        </view>
        <!-- 耕地基本信息数据 -->
        <view v-show="index == 2">
          <view class="table_title">
            <view>所属乡镇</view>
            <view>年份</view>
            <view>一级地(亩)</view>
            <view>二级地(亩)</view>
            <view>三级地(亩)</view>
            <view>四级地(亩)</view>
            <view>五级地(亩)</view>
            <view>六级地(亩)</view>
            <view>七级地(亩)</view>
            <view>八级地(亩)</view>
            <view>九级地(亩)</view>
            <view>十级地(亩)</view>
            <view>总合(亩)</view>
          </view>
          
          <view class="table_main">
            <view>三台县</view>
            <view>{{GDSJ_total.data_year}}</view>
            <view>{{GDSJ_total.grade1 ? GDSJ_total.grade1 : '暂无'}}</view>
            <view>{{GDSJ_total.grade2 ? GDSJ_total.grade2 : '暂无'}}</view>
            <view>{{GDSJ_total.grade3 ? GDSJ_total.grade3 : '暂无'}}</view>
            <view>{{GDSJ_total.grade4 ? GDSJ_total.grade4 : '暂无'}}</view>
            <view>{{GDSJ_total.grade5 ? GDSJ_total.grade5 : '暂无'}}</view>
            <view>{{GDSJ_total.grade6 ? GDSJ_total.grade6 : '暂无'}}</view>
            <view>{{GDSJ_total.grade7 ? GDSJ_total.grade7 : '暂无'}}</view>
            <view>{{GDSJ_total.grade8 ? GDSJ_total.grade8 : '暂无'}}</view>
            <view>{{GDSJ_total.grade9 ? GDSJ_total.grade9 : '暂无'}}</view>
            <view>{{GDSJ_total.grade10 ? GDSJ_total.grade10 : '暂无'}}</view>
            <view>{{GDSJ_total.total ? GDSJ_total.total : '暂无'}}</view>
          </view>
          
          <view class="table_main" v-for="(item, index) in tableData" :key="index">
            <view>{{item.township}}</view>
            <view>{{item.dataYear}}</view>
            <view>{{item.grade1 ? item.grade1 : '暂无'}}</view>
            <view>{{item.grade2 ? item.grade2 : '暂无'}}</view>
            <view>{{item.grade3 ? item.grade3 : '暂无'}}</view>
            <view>{{item.grade4 ? item.grade4 : '暂无'}}</view>
            <view>{{item.grade5 ? item.grade5 : '暂无'}}</view>
            <view>{{item.grade6 ? item.grade6 : '暂无'}}</view>
            <view>{{item.grade7 ? item.grade7 : '暂无'}}</view>
            <view>{{item.grade8 ? item.grade8 : '暂无'}}</view>
            <view>{{item.grade9 ? item.grade9 : '暂无'}}</view>
            <view>{{item.grade10 ? item.grade10 : '暂无'}}</view>
            <view>{{item.total}}</view>
          </view>
        </view>
        <!-- 农业生产条件数据 -->
        <view v-show="index == 3">
          <view class="table_title">
            <view>年份</view>
            <view>年末耕地面积(亩)</view>
            <view>园地(亩)</view>
            <view>林地(亩)</view>
            <view>草地(亩)</view>
            <view>地膜覆盖面积(亩)</view>
            <view>农用柴油使用量(吨)</view>
            <view>农药使用量(吨)</view>
            <view>农村用电量(万千瓦时)</view>
          </view>
          
          <view class="table_main" v-for="(item, index) in tableData" :key="index">
            <view>{{item.dataYear}}</view>
            <view>{{item.total ? item.total : '暂无'}}</view>
            <view>{{item.landField ? item.landField : '暂无'}}</view>
            <view>{{item.landForest ? item.landForest : '暂无'}}</view>
            <view>{{item.landGrass ? item.landGrass : '暂无'}}</view>
            <view>{{item.materialMulchArea ? item.materialMulchArea : '暂无'}}</view>
            <view>{{item.materialDieselUse ? item.materialDieselUse : '暂无'}}</view>
            <view>{{item.materialPesticideUse ? item.materialPesticideUse : '暂无'}}</view>
            <view>{{item.materialPowerUse ? item.materialPowerUse : '暂无'}}</view>
          </view>
        </view>
        <!-- 麦冬主产区数据 -->
        <view v-show="index == 4">
          <view class="table_title">
            <view>年份</view>
            <view>乡镇</view>
            <view>种植面积(亩)</view>
          </view>
          
          <view class="table_main" v-for="(item, index) in tableData" :key="index">
            <view>{{item.dataYear}}</view>
            <view>{{item.township}}</view>
            <view>{{item.areas ? item.areas : '暂无'}}</view>
          </view>
        </view>
        <!-- 农产品市场交易数据 -->
        <view v-show="index == 5">
          <view class="table_title">
            <view>市场名称</view>
            <view>产品种类</view>
            <view>产品名称</view>
            <view>最高(元/斤)</view>
            <view>最低(元/斤)</view>
            <view>平均(元/斤)</view>
          </view>
          
          <view class="table_main" v-for="(item, index) in tableData" :key="index">
            <view>{{item.bazaar ? item.bazaar : '-'}}</view>
            <view>{{item.dataType ? item.dataType : '-'}}</view>
            <view>{{item.varieties ? item.varieties : '-'}}</view>
            <view>{{item.maxprice ? item.maxprice : '-'}}</view>
            <view>{{item.minprice ? item.minprice : '-'}}</view>
            <view>{{item.avgprice ? item.avgprice : '-'}}</view>
          </view>
        </view>
        <!-- 生猪养殖数据 -->
        <view v-show="index == 6">
          <view class="table_title">
            <view>养殖场名称</view>
            <view>年份</view>
            <view>负责人</view>
            <view>养殖种类</view>
            <view>主要品种</view>
            <view>存栏量(头)</view>
            <view>出栏量(头)</view>
          </view>
          
          <view class="table_main" v-for="(item, index) in tableData" :key="index">
            <view>{{item.farmName}}</view>
            <view>{{item.year ? item.year : '2019'}}</view>
            <view>{{item.supervisorName}}</view>
            <view>{{item.stockType}}</view>
            <view>{{item.varieties}}</view>
            <view>{{item.amountNum ? item.amountNum : '暂无'}}</view>
            <view>{{item.outNum ? item.outNum : '暂无'}}</view>
          </view>
        </view>
        <!-- 畜禽养殖数据 -->
        <view v-show="index == 7">
          <view class="table_title">
            <view>年份</view>
            <view>乡镇</view>
            <view>牛出栏(头)</view>
            <view>牛存栏(头)</view>
            <view>羊出栏(头)</view>
            <view>羊存栏(头)</view>
            <view>家禽出栏(只)</view>
            <view>家禽存栏(只)</view>
            <view>兔出栏(只)</view>
            <view>兔存栏(只)</view>
            <view>禽蛋产量(个)</view>
          </view>
          
          <view class="table_main" v-for="(item, index) in tableData" :key="index">
            <view>{{item.years}}</view>
            <view>{{item.township}}</view>
            <view>{{item.cattleOutColumn ? item.cattleOutColumn : '暂无'}}</view>
            <view>{{item.cattleExistColumn ? item.cattleExistColumn : '暂无'}}</view>
            <view>{{item.sheepOutColumn ? item.sheepOutColumn : '暂无'}}</view>
            <view>{{item.sheepExistColumn ? item.sheepExistColumn : '暂无'}}</view>
            <view>{{item.poultryOut ? item.poultryOut : '暂无'}}</view>
            <view>{{item.poultryIn ? item.poultryIn : '暂无'}}</view>
            <view>{{item.rabbitOutColumn ? item.rabbitOutColumn : '暂无'}}</view>
            <view>{{item.rabbitExistColumn ? item.rabbitExistColumn : '暂无'}}</view>
            <view>{{item.eggCount ? item.eggCount : '暂无'}}</view>
          </view>
        </view>

      </scroll-view>
  </view>
</template>

<script>
import { managementPageList, april7PageList, AgriculturalProductionPageList, listpage, pageListPricecurrentPage, getBreedPageList, livestockPageList, sumLanduseArea } from '../../api/agriculturalResource'
    export default {
      data(){
        return{
          index: 1,
          tableData: [],
          currentPage: 1,

          JYZT_managementName: '',

          GDSJ_datayear: '',
          GDSJ_township: '',
          GDSJ_total: {},

          NYSC_datayear: '',

          MDSJ_datayear: '',
          MDSJ_township: '',

          SCJY_bazaar: '',

          SZYZ_farmName: '',

          XQYZ_datayear: '',
          XQYZ_township: '',
        }
      },
      methods:{
        //搜索功能
        async search(){
          this.currentPage = 1
          this.tableData = []
          this.getPageData(this.index)
          if(this.index == 2){
            if(this.GDSJ_datayear){
              await this.sumLanduseAreaData(this.GDSJ_datayear)
            }else{
              await this.sumLanduseAreaData(2020)
            }
            
          }
        },
        //监听触底
        async scollBottom(){
          this.currentPage++
          this.getPageData(this.index)
        },
        //选择nav
        choiceItem(index){
          this.index = index
        },
        //经营主体弹窗分页查询
        async managementPageListData(currentPage, pageSize, managementName = ''){
          let [err, res] = await managementPageList(currentPage, pageSize, managementName)
          res.data.data.list.forEach((item, index) => {
            if(item.registrationDate){
              item.registrationDate = item.registrationDate.substring(0,10)
            }
          })
          this.tableData = this.tableData.concat(res.data.data.list)
        },
        //分页查询耕地地力等级
        async april7PageListData(currentPage, pageSize, datayear = '', township = ''){
          let [err, res] = await april7PageList(currentPage, pageSize, datayear, township)
          res.data.data.list.forEach((item, index) => {
            for (const key in item) {
              item.total = (item.grade1 + item.grade2 + item.grade3 + item.grade4 + item.grade5 + item.grade6 + item.grade7 + item.grade8 + item.grade9 + item.grade10).toFixed(2)
            }
          })
          
          this.tableData = this.tableData.concat(res.data.data.list)
        },
        //获取三台地力总和
        async sumLanduseAreaData(year=2020){
          let [err, res] = await sumLanduseArea(year)
          this.GDSJ_total = res.data.data
          this.GDSJ_total.total = this.GDSJ_total.grade1 + this.GDSJ_total.grade2 + this.GDSJ_total.grade3 + this.GDSJ_total.grade4 + this.GDSJ_total.grade5 + 
                                  this.GDSJ_total.grade6 + this.GDSJ_total.grade7 + this.GDSJ_total.grade8 + this.GDSJ_total.grade9 + this.GDSJ_total.grade10 
        },
        //农业生产条件分页查询
        async AgriculturalProductionPageListData(currentPage, pageSize, datayear = ''){
          let [err, res] = await AgriculturalProductionPageList(currentPage, pageSize, datayear)
          res.data.data.list.forEach((item, index) => {
            for (const key in item) {
              item.total = item.landPaddy + item.landDry + item.landWater
            }
          })
          
          this.tableData = this.tableData.concat(res.data.data.list)
        },
        //分页查询麦冬主产区种植面积
        async listpageData(currentPage, pageSize, datayear = '', township = ''){
          let [err, res] = await listpage(currentPage, pageSize, datayear, township)
          
          this.tableData = this.tableData.concat(res.data.data.list)
        },
        //分页查询价格信息列表
        async pageListPricecurrentPageData(currentPage, pageSize, bazaar = ''){
          let [err, res] = await pageListPricecurrentPage(currentPage, pageSize, bazaar)
          res.data.data.list.forEach((item, index) => {
            if(item.dataType == 0){
              item.dataType = '蔬菜'
            }else if(item.dataType == 1){
              item.dataType = '水果'
            }else{
              item.dataType = '肉类'
            }
          })
          
          this.tableData = this.tableData.concat(res.data.data.list)
        },
        //分页获得养殖主体数据列表
        async getBreedPageListData(currentPage, pageSize, farmName = ''){
          let [err, res] = await getBreedPageList(currentPage, pageSize, farmName)
          
          this.tableData = this.tableData.concat(res.data.data.list)
        },
        //分页查询畜牧养殖
        async livestockPageListData(currentPage, pageSize, years = '', township = ''){
          let [err, res] = await livestockPageList(currentPage, pageSize, years, township)
          res.data.data.list.forEach((item, index) => {
            item.poultryOut = item.chickenOutColumn + item.gooseOutColumn + item.duckOutColumn
            item.poultryIn = item.chickenExistColumn + item.gooseExistColumn + item.duckExistColumn
            item.eggCount = item.duckeggYiled + item.eggYield + item.gooseeggYiled
          })
          this.tableData = this.tableData.concat(res.data.data.list)
        },
        //获取分页数据
        async getPageData(index){
          if(index == 1){
            //经营主体弹窗分页查询
            await this.managementPageListData(this.currentPage, 50, this.JYZT_managementName)
          }else if(index == 2){
            //分页查询耕地地力等级
            await this.april7PageListData(this.currentPage, 50, this.GDSJ_datayear, this.GDSJ_township)
          }else if(index == 3){
            //农业生产条件分页查询
            await this.AgriculturalProductionPageListData(this.currentPage, 50, this.NYSC_datayear)
          }else if(index == 4){
            //分页查询麦冬主产区种植面积
            await this.listpageData(this.currentPage, 50, this.MDSJ_datayear, this.MDSJ_township)
          }else if(index == 5){
            //分页查询农产品市场交易数据
            await this.pageListPricecurrentPageData(this.currentPage, 50, this.SCJY_bazaar)
          }else if(index == 6){
            //分页获得养殖主体数据列表
            await this.getBreedPageListData(this.currentPage, 50, this.SZYZ_farmName)
          }else if(index == 7){
            //分页查询畜牧养殖
            await this.livestockPageListData(this.currentPage, 50, this.XQYZ_datayear, this.XQYZ_township)
          }
        },
      },
      watch: {
        //监听index改变
        async index(val){
          this.currentPage = 1
          this.tableData = []
          this.getPageData(val)
        }
      },
      async created(){
        await this.managementPageListData(this.currentPage, 50, this.JYZT_managementName)
        await this.sumLanduseAreaData(2020)
      }
    }
</script>

<style scoped>
.banner{
  display: block;
    position: relative;
    width:1090rpx;
    height:160rpx;
    left:50%;
    transform: translate(-50%, 0);
}
.searchBox{
  width: 750rpx;
  height: 80rpx;
  position: relative;
}
.navBox{
  position: absolute;
  left: 0;
  top: 240rpx;
  width: 170rpx;
  height: calc(100% - 250rpx);
  border: 1px solid #ccc;
}
.nav{
  margin-bottom: 30rpx;
  text-align: center;
}
.main{
  position: absolute;
  right: 0;
  top: 240rpx;
  width: 580rpx;
  height: calc(100% - 250rpx);
  font-size: 10px;
}
.table_title, .table_main{
  display: flex;
  text-align: center;
  border-bottom: 1px solid #999;
  word-wrap: break-word;
}
.table_title{
  border-top: 1px solid #999;
}
.table_title view, .table_main view{
  flex: 1;
  width: 5%;
  border-left: 1px solid #ccc;
}
.active{
  background: #3296FA;
  color: #fff;
}
.searchBtn{
  position: absolute;
  width: 120rpx;
  height: 50rpx;
  line-height: 50rpx;
  right: 20rpx;
  top: 15rpx;
  background: #3296FA;
  color: #fff;
  text-align: center;
  border-radius: 25rpx;
  font-size: 15px;
}
.input{
  position: relative;
  top: 15rpx;
  width: 250rpx;
  height: 50rpx;
  line-height: 50rpx;
  border: 1px solid #ccc;
  margin-left: 20rpx;
  float: left;
}
</style>