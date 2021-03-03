<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">
      
      <el-col :span="6" class="management-top-aside">

        <div tag='div' class="management-top-div">
          <div class="management-charts-title">土地资源结构({{TDZY_year}})</div>
          <div class="content_box">

            <!-- <div class="text_box_2" style="margin-top: 4%;">

              <div>
                <span>{{TDZY_value[0].name}}/万亩</span>
                <span style="color:#83E914">{{(TDZY_value[0].value/10000).toFixed(2)}}</span>
              </div>
              <div>
                <span>{{TDZY_value[1].name}}/万亩</span>
                <span style="color:#01E8FD">{{(TDZY_value[1].value/10000).toFixed(2)}}</span>
              </div>
              <div>
                <span>{{TDZY_value[2].name}}/万亩</span>
                <span style="color:#83E914">{{(TDZY_value[2].value/10000).toFixed(2)}}</span>
              </div>
              <div>
                <span>{{TDZY_value[3].name}}/万亩</span>
                <span style="color:#01E8FD">{{(TDZY_value[3].value/10000).toFixed(2)}}</span>
              </div>
              
            </div> -->
            
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_1"></div>
              <div id="tuDiZiYuan"></div>
            </div>
          </div>
        </div>

        <div class="management-top-div" >
          <div class="management-charts-title">价格交易数据</div>
          <div class="content_box" style="height:calc(100% - 45px)">
            <p class="table_title_home">
                <span class="title_name">名称</span>
                <span class="title_last_month" style="text-align:center">{{last_month}}月</span>
                <span class="title_month" style="text-align:center">{{month}}月</span>
                <span class="title_month" style="text-align:center">单位</span>
                <span class="title_difference" style="text-align:center">涨幅</span>
            </p>
            <div class="table_box">
              <ul class="jiaGeJiaoYi" id="roll_table_JGJY">
                <li v-for="(item,index) in JGJY_list" :key="index">
                  <span class="title_name">{{item.name}}</span>
                  <span class="title_last_month" style="text-align:center">{{item.lastMonth_price}}</span>
                  <span class="title_month" style="text-align:center">{{item.month_price}}</span>
                  <span class="title_month" style="text-align:center">{{item.unit}}</span>
                  <span class="title_difference" style="text-align:center">
                    <span v-if="item.difference > 0" style="color: red">↑ </span>
                    <span v-else style="color: green">↓ </span>
                    <span v-if="item.difference > 0" style="color: red">{{item.difference}}</span>
                    <span v-else style="color: green">{{item.difference}}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </el-col>

      <el-col :span="12" class="management-top-middle2">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <!-- <div class="nav_com">
          <Nav></Nav>
        </div> -->
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        

        <div class="management-top-middle2-home">
          <div class="header">
            <div class="box">
              <img src="../../assets/santai_img/home_box_left.png" alt="">
              <div class="home_middle_header_body">
                <b style="font-size:0.1rem">新型经营主体数量/家</b>
                <div class="body_text">{{JYZT_counts}}</div>
              </div>
            </div>
            <!-- <div class="box">
              <img src="../../assets/santai_img/home_box_center.png" alt="">
              <div class="home_middle_header_body">
                <b>占地面积/万亩</b>
                <div class="body_text">{{JYZT_area}}</div>
              </div>
            </div> -->
            <div class="box">
              <img src="../../assets/santai_img/home_box_right.png" alt="">
              <div class="home_middle_header_body">
                <b style="font-size:0.1rem">注册资金/万元</b>
                <!-- <div class="body_text">{{(JYZT_sums/10000).toFixed(2)}}</div> -->
                <div class="body_text">{{JYZT_sums}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="home_middle_footer"></div>

        <div class="home_middle_imgBox ophiopogon_box">
          <div class="home_middle_imgBox_text">
            <h1>{{(ophiopogon_total/10000).toFixed(2)}}</h1>
            <p style="color:#000">麦冬产量/万吨</p>
          </div>
        </div>
        <div class="home_middle_imgBox food_box">
          <div class="home_middle_imgBox_text">
            <!-- <h1>{{(food_total/10000).toFixed(2)}}</h1> -->
            <h1>66.24</h1>
            <p>粮食产量/万吨</p>
          </div>
        </div>
        <div class="home_middle_imgBox pig_box">
          <div class="home_middle_imgBox_text">
            <!-- <h1>{{(pig_total/10000).toFixed(2)}}</h1> -->
            <h1>64.04</h1>
            <p style="color:#000">生猪存栏/万头</p>
          </div>
        </div>
        <div class="home_middle_imgBox fish_box">
          <div class="home_middle_imgBox_text">
            <h1>{{(fish_total/10000).toFixed(2)}}</h1>
            <p>水产品产量/万吨</p>
          </div>
        </div>
        <!-- <div id="china" style="width: 95%;height: 94%"></div> -->
        <!--<video muted autoplay="autoplay" style="width: 95%;height: 94%;margin: 1.5% 2.5%;">
          <source src="../../assets/visualiza/01.mp4" style="width: 100%;height: 100%;">
        </video>-->
        <!-- <div class="management-index-count" style="cursor: pointer">
          <div class="management-index-count-hr" @click="manageCount">
            <p class="count-num count-num-green">
              {{this.bussinessCount}}
            </p>
            <div>
              <img src="../../assets/visualiza/index_count_img.png" alt="" width="50">
              <i class="count-text">主体数量</i>
              <i class="count-unit">家</i>
            </div>
          </div>
          <div class="management-index-count-hr" @click="areaCount">
            <p class="count-num count-num-yellow">
              {{this.bussinessArea>10000?(this.bussinessArea/10000).toFixed(2):this.bussinessArea}}
            </p>
            <div>
              <img src="../../assets/visualiza/index_count_img.png" alt="" width="50">
              <i class="count-text">占地面积</i>
              <i class="count-unit">{{this.bussinessArea>10000?'万亩':'亩'}}</i>
            </div>
          </div>
          <div class="management-index-count-hr" @click="yiedCount">
            <p class="count-num count-num-red">
              {{this.bussinessSums>10000?(this.bussinessSums/10000).toFixed(2):this.bussinessSums}}
            </p>
            <div>
              <img src="../../assets/visualiza/index_count_img.png" alt="" width="50">
              <i class="count-text">注册资金</i>
              <i class="count-unit">{{this.bussinessSums>10000?'亿元':'万元'}}</i>
            </div>
          </div>
        </div> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">
        <div class="management-top-div" >
          <div class="management-charts-title">植保防治趋势</div>
          <div class="text_box">
              <div>
                <span>{{ZBFZ_name[ZBFZ_name.length - 1]}}年发生面积/万亩次</span>
                <span style="color:#83E914">{{ZBFZ_happen[ZBFZ_happen.length - 1].toFixed(2)}}</span>
              </div>
              <div>
                <span>{{ZBFZ_name[ZBFZ_name.length - 1]}}年防治面积/万亩次</span>
                <span style="color:#00F6FF">{{ZBFZ_defense[ZBFZ_defense.length - 1].toFixed(2)}}</span>
              </div>
            </div>
          <div class="content_box">
            <!-- <div class="text_box">
              <div>
                <span>农药/2019</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>化肥/2019</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <div class="echarts_box" id="zhiBaoFangZhi"></div>
          </div>
        </div>

        <div class="management-top-div">
          <div class="management-charts-title">渔业养殖品种占比({{YZPZ_year}})</div>

          <div class="content_box YZPZZB_box">
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_left">
                <p v-if="YZPZ_total != 0">{{(YZPZ_value[2].value / YZPZ_total * 100).toFixed(2)}}%</p>
              </div>
              <p>{{YZPZ_value[2].name}}</p>
              <p><span style="color:#3ED3FF">{{YZPZ_value[2].value}}</span>吨</p>
            </div>
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_center">
                <p v-if="YZPZ_total != 0">{{(YZPZ_value[1].value / YZPZ_total * 100).toFixed(2)}}%</p>
              </div>
              <p>{{YZPZ_value[1].name}}</p>
              <p><span style="color:#FFE56B">{{YZPZ_value[1].value}}</span>吨</p>
            </div>
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_right">
                <p v-if="YZPZ_total != 0">{{(YZPZ_value[0].value / YZPZ_total * 100).toFixed(2)}}%</p>
              </div>
              <p>{{YZPZ_value[0].name}}</p>
              <p><span style="color:#60D6B4">{{YZPZ_value[0].value}}</span>吨</p>
            </div>
            <!-- <div class="text_box">
              <div>
                <span>年平均气温/℃</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>降水量/毫米</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <!-- <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_2"></div>
              <div id="yangZhiPinZhong"></div>
            </div> -->
          </div>
        </div>
      </el-col>

    </div>
    
    <div class="management-bottom">

      <el-col :span="6" >
        <div class="management-bottom-index-div" >
          <div class="management-charts-title">养殖成本结构</div>
          <div class="text_box">
              <div>
                <!-- <span>{{YZCB_time[YZCB_time.length - 1]}}饲料成本</span> -->
                <span>饲料成本(元/头)</span>
                <span style="color:#83E914">{{YZCB_feed[YZCB_feed.length - 1]}}</span>
              </div>
              <div>
                <!-- <span>{{YZCB_time[YZCB_time.length - 1]}}仔猪成本</span> -->
                <span>仔猪成本(元/头)</span>
                <span style="color:#00F6FF">{{YZCB_pig[YZCB_pig.length - 1]}}</span>
              </div>
              <div style="width:98%">
                <!-- <span>{{YZCB_time[YZCB_time.length - 1]}}养殖成本</span> -->
                <span>养殖成本(元/头)</span>
                <span style="color:#DAC57C">{{YZCB_bread[YZCB_bread.length - 1]}}</span>
              </div>
            </div>
          <div class="content_box">
            <!-- <div class="text_box">
              <div>
                <span>年平均气温/℃</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>降水量/毫米</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <div class="echarts_box" id="yangZhiChengBen"></div>
          </div>
        </div>
      </el-col>
      
      <el-col :span="12" style="padding:0 0 0 0">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">种植类型占比({{ZZLX_year}})</div>
          <div class="text_box">
            <div>
              <span>总面积/万亩</span>
              <span style="color:#83E914">{{(ZZLX_area_total/10000).toFixed(2)}}</span>
            </div>
            <div>
              <span>总产量/吨</span>
              <span style="color:#00F6FF">{{ZZLX_yield_total}}</span>
            </div>
          </div>
          <div class="content_box">
            <!-- <div class="text_box_1">
              <div>
                <span>农资店/家</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>加工企业/家</span>
                <span style="color:#01E8FD">2547</span>
              </div>
              <div>
                <span>农业企业/家</span>
                <span style="color:#D59842">2547</span>
              </div>
            </div> -->
            <div class="echarts_box" id="jiaGeJiaoYi"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="management-bottom-index-div">
          <div class="management-charts-title">投入品用量</div>
          <div class="text_box">
            <div>
              <span>{{TRP_year[TRP_year.length - 1]}}农药/吨</span>
              <span style="color:#FEE185">{{TRP_data_NY[TRP_data_NY.length - 1]}}</span>
            </div>
            <div>
              <span>{{TRP_year[TRP_year.length - 1]}}农用柴油/吨</span>
              <span style="color:#44F0FF">{{TRP_data_NYCY[TRP_data_NYCY.length - 1]}}</span>
            </div>
            <div>
              <span>{{TRP_year[TRP_year.length - 1]}}化肥(折纯)/吨</span>
              <span style="color:#91D27F">{{TRP_data_HF[TRP_data_HF.length - 1]}}</span>
            </div>
            <div>
              <span>{{TRP_year[TRP_year.length - 1]}}地膜/吨</span>
              <span style="color:#85CBFE">{{TRP_data_DM[TRP_data_DM.length - 1]}}</span>
            </div>
          </div>
          <div class="content_box">
            <!-- <div class="text_box">
              <div>
                <span>猪肉/元/斤</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>牛肉/元/斤</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <div class="echarts_box" id="touRuPin" @mouseenter="mouseenter" @mouseleave="mouseleave"></div>
          </div>
        </div>
      </el-col>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { indexSoil, indexBussiness } from "../../request/visualiza1Api";
import chart from "../../js/visualiza/visualiza1";
import echarts from '../../js/santaiEcharts/home'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import Nav from "./nav"
import { gettypedata, getcoststructure, getaquatictypeproportion, inputuse, cropdefense, landuse, MYchangesInPrices, lastMonthPrice } from '../../api/home'
import { getbusinessdata } from '../../api/visManage'
import { maidongYield } from '../../api/visOphiopogon'
import { getproductionbytype } from '../../api/visPlant'
import { getLiveStockData } from '../../api/visLivestock'
import { startmarquee } from '../../util/util'
// import industryAnalysisMap from "./industryAnalysisMap";
export default {
  data() {
    return {
      //麦冬产量
      ophiopogon_total:0,

      food_total: 0,  //粮食总数
      pig_total: 0, //生猪总数
      fish_total: 0, //渔业总数
      //经营主体数据
      JYZT_counts: null,    //主体数量
      JYZT_area: null,      //占地面积
      JYZT_sums: null,      //注册资金
      //价格交易数据
      JGJY_list: [],
      year: 0,
      month: 0,
      last_month: 0,

      //土地资源结构势数据  
      TDZY_value:[],
      TDZY_year:0,

      //植保防治趋势数据
      ZBFZ_name: [],
      ZBFZ_happen: [],      //发生面积
      ZBFZ_defense: [],      //防治面积

      //投入品用量数据  
      TRP_name: [],
      TRP_year: [],
      TRP_data_HF: [],      //化肥
      TRP_data_DM: [],      //地膜
      TRP_data_NY: [],      //农药
      TRP_data_NYCY: [],    //农用柴油

      //养殖品种占比数据  
      YZPZ_value: [
        {name:'其他类',value:0},
        {name:'甲壳类',value:0},
        {name:'鱼类',value:0}
      ],
      YZPZ_total: 0,
      YZPZ_year: 0,

      //养殖成本结构数据  
      YZCB_time: [],    //时间
      YZCB_feed: [],    //饲料成本
      YZCB_bread: [],   //养殖成本
      YZCB_pig: [],     //仔猪成本

      //种植种类占比数据  
      ZZLX_year: 0,
      ZZLX_value: [],
      ZZLX_total: 0,
      ZZLX_LS: 0,       //粮食
      ZZLX_JJZW: 0,     //经济作物
      ZZLX_LSZW: 0,     //粮食作物
      ZZLX_name: [],
      ZZLX_area: [],
      ZZLX_yield: [],
      ZZLX_area_total: 0,
      ZZLX_yield_total: 0,



      timer:null,   //定时器！！
      index: 0,     //定时器传过去的下标！！
      // 土壤监测
      soilTemperatureNum: [], // 土壤温度
      soilTemperatureUnit: [], // 土壤温度单位
      soilHumidityNum: [], // 土壤湿度
      soilHumidityUnit: [], // 土壤湿度单位
      airTemperatureNum: [], // 空气温度
      airTemperatureUnit: [], // 空气温度单位
      airHumidityNum: [], // 空气湿度
      airHumidityUnit: [], // 空气湿度单位
      // 企业类型占比
      bussinessCount: [], // 企业数量
      bussinessArea: [], // 占地面积
      bussinessSums: [], // 企业产值
      indexMapData: [],
      china:{}
    };
  },
  methods: {
    //获取麦冬产量
    async getMaidongYield(){
      let res = await maidongYield()
      console.log(res.data.data)
      this.ophiopogon_total = res.data.data[0].freshYield
      console.log(this.ophiopogon_total)
    },
    //获取粮食作物数据  
      async getProductionByType(){
        let res_LS = await getproductionbytype({cropType: '粮食作物'})    //粮食作物数据
        res_LS.data.data.forEach(item => {
          this.food_total += item.yields
        })
      },
    //获取生猪统计数据
    async getLiveStockData_pig(){
      let res = await getLiveStockData()
      this.pig_total = res.data.data.amountNum
    },
    //获取经营主体数据————企业数量、占地面积、企业产值
    async getBusinessData(){
      let res = await getbusinessdata()
      this.JYZT_counts = res.data.data.counts
      this.JYZT_area = res.data.data.area.toFixed(2)
      // this.JYZT_sums = (res.data.data.sums / 10000).toFixed(2)
      this.JYZT_sums = res.data.data.sums.toFixed(0)
    },
    //获取价格交易数据
    async getChangesInPrices(){
      this.year = new Date().getFullYear()
      this.month = (new Date().getMonth()+1).length < 2 ? `0${new Date().getMonth()+1}` : `${new Date().getMonth()+1}`  //当前月份
      this.last_month = new Date().getMonth() == 0 ? 12 :  (new Date().getMonth().length < 2 ? `0${new Date().getMonth()}` : `${new Date().getMonth()}`)
      console.log(this.month)
      console.log(this.last_month)

      let res = await lastMonthPrice({type:2})
      this.JGJY_list = res.data.data
      this.JGJY_list = res.data.data.map(item => {
        return {
          name: item.productName.substring(0,5),
          month_price: (item.avgprice * 1).toFixed(2),
          lastMonth_price: (item.lastmonthavgprice * 1).toFixed(2),
          difference: ( item.avgprice.toFixed(2) * 1 - item.lastmonthavgprice * 1 ).toFixed(2),
          unit:item.unit
        }
      })
    },
    //获取土地资源结构势数据  
    async getLanduse(){
      let res = await landuse()
      console.log(res.data.data)
      this.TDZY_year = res.data.data[0].year
      for(var i = 0;i < res.data.data.length - 1;i++){
        for(var j = res.data.data.length - 1;j > i;j--){
          if(res.data.data[i].areas < res.data.data[j].areas){
            var temp = res.data.data[i]
            res.data.data[i] = res.data.data[j]
            res.data.data[j] = temp
          }
        }
      }

      
      console.log(res.data.data)

      this.TDZY_value = res.data.data.map(item => {
        return {
          name: item.types,
          value: item.areas
        }
      })
    },
    //获取植保防治趋势数据  
    async cropDefense(){
      let res = await cropdefense()
      this.ZBFZ_name = res.data.data.map(item => item.years)
      this.ZBFZ_happen = res.data.data.map(item => item.happenArea)
      this.ZBFZ_defense = res.data.data.map(item => item.defenseArea)
    },
    //获取投入品用量数据  
    async getInPut(){
      let res = await inputuse()
      this.TRP_name = res.data.data.inputName
      this.TRP_year = res.data.data.year
      this.TRP_data_HF = res.data.data.series['化肥(折纯)']
      this.TRP_data_DM = res.data.data.series['地膜']
      this.TRP_data_NY = res.data.data.series['农药']
      this.TRP_data_NYCY = res.data.data.series['农用柴油']
    },
    //获取养殖品种占比数据  
    async getAquaticTypeProportion(){
      let res = await getaquatictypeproportion()
      this.YZPZ_year = res.data.data[0].year
      if(res.data.code == -1){
        return
      }
      res.data.data.forEach((item) => {
        this.fish_total += item.areas
      })
      this.YZPZ_value = res.data.data.map(item => {
          this.YZPZ_total += item.areas
        return {
          name: item.name,
          value: item.areas
        }
      })
      console.log(this.YZPZ_total)
      console.log(this.YZPZ_value)
    },
    //获取养殖成本结构数据  
    async getCostStructure(){
      let res = await getcoststructure()
      res.data.data.reverse()
      this.YZCB_time = res.data.data.map(item => item.dataTime)
      this.YZCB_feed = res.data.data.map(item => item.feedCost)
      this.YZCB_bread = res.data.data.map(item => item.breedCost)
      this.YZCB_pig = res.data.data.map(item => item.pigCost)

      // console.log(res.data.data)
    },
    //获取种植种类占比数据  
    async getTypeData(){
      let res = await gettypedata()
      this.ZZLX_year = res.data.data[0].years
      this.ZZLX_name = res.data.data.map(item => item.typeName)
      this.ZZLX_area = res.data.data.map(item => (item.areas/10000).toFixed(2))
      this.ZZLX_yield = res.data.data.map(item => item.yields)
      res.data.data.forEach(item => {
        this.ZZLX_area_total += item.areas
        this.ZZLX_yield_total += item.yields
      })
    },

    // 设置柱状图的定时器！！！！！
    setTime(){
        this.timer = setInterval(() => {
        this.index++
        echarts.touRuPin('touRuPin',this.index % 2, this.TRP_name, this.TRP_year, this.TRP_data_HF, this.TRP_data_DM, this.TRP_data_NY, this.TRP_data_NYCY)
      }, 3000);
    },
    mouseenter(){     //鼠标移入事件
      // 删除定时器！！！
      clearInterval(this.timer)
    },
    mouseleave(){      //鼠标移出事件
      //启动定时器
      this.setTime()
    },



    indexCount() {
      // 土壤监测数据绑定
      let self = this;
      indexSoil(this).then(result => {
        // console.log(result)
        self.soilTemperatureNum = result.devValue[6].value;
        self.soilTemperatureUnit = result.devValue[6].unit;
        self.soilHumidityNum = result.devValue[7].value;
        self.soilHumidityUnit = result.devValue[7].unit;
        self.airTemperatureNum = result.devValue[3].value;
        self.airTemperatureUnit = result.devValue[3].unit;
        self.airHumidityNum = result.devValue[4].value;
        self.airHumidityUnit = result.devValue[4].unit;
      });
      // 企业类型占比
      indexBussiness(this).then(result => {
        if (result.code == 0) {
          let countData = result.data;
          self.bussinessCount = countData.counts;
          self.bussinessArea = parseFloat(countData.area.toFixed(2))
          self.bussinessSums = countData.sums;
        }
      });
    },

    //地图
    initChartsChina() {
      // chart.initChartsChina("china");
      chart.initChartsChina("china", this);
    },
    convertData(data) {
      let geoCoordMap = {
        '刘营镇': [
          104.989455,31.221382
        ],
        '新生镇': [
          105.07384,30.947413
        ],
        '景福镇': [
          105.184701,30.855359
        ],
        '潼川镇': [
          105.094923,31.104228
        ],
        '芦溪镇': [
          104.887455,31.278781
        ],
        '观桥镇': [
          105.08178,30.862854
        ],
        '鲁班镇': [
          105.030111,30.930467
        ],
        '争胜乡': [
          105.032573,31.194611
        ],
        '里程乡': [
          105.002671,31.226323
        ],
        '金石镇': [
          104.787564,31.14994
        ],
        '万安镇': [
          105.184701,30.855359
        ],
        '三元镇': [
          105.251438,31.23998
        ],
        '上新乡': [
          104.915276,30.984846
        ],
        '下新乡': [
          105.036017,30.998974
        ],
        '东塔镇': [
          105.119742,31.098465
        ],
        '中太镇': [
          104.977491,31.389725
        ],
        '中新镇': [
          105.175662,31.010349
        ],
        '光辉镇': [
          105.287688,31.115777
        ],
        '乐加乡': [
          105.138914,30.961987
        ],
        '乐安镇': [
          104.999559,31.10619
        ],
        '云同乡': [
          104.88427,31.159348
        ],
        '八洞镇': [
          104.818705,31.085532
        ],
        '北坝镇': [
          105.105608,31.09905
        ],
        '凯河镇': [
          104.86302,30.995303
        ],
        '前锋镇': [
          104.932082,31.15166
        ],
        '协和乡': [
          105.211049,30.807626
        ],
        '双乐乡': [
          105.233113,30.861336
        ],
        '双胜乡': [
          105.215841,31.344422
        ],
        '古井镇': [
          104.972491,31.013587
        ],
        '塔山镇': [
          105.131069,31.316353
        ],
        '安居镇': [
          105.099358,30.811355
        ],
        '宝泉乡': [
          105.147327,30.814629
        ],
        '富顺镇': [
          105.183224,31.183224
        ],
        '幸福乡': [
          104.971752,30.935175
        ],
        '广利乡': [
          105.253331,30.807545
        ],
        '建中乡': [
          105.168563,30.75541
        ],
        '建平镇': [
          104.90686,31.129246
        ],
        '忠孝乡': [
          105.208609,31.292937
        ],
        '断石乡': [
          105.103021,31.023826
        ],
        '新德镇': [
          105.064764,31.154444
        ],
        '新鲁镇': [
          104.837845,31.202678
        ],
        '曙光乡': [
          105.125214,30.900296
        ],
        '柳池镇': [
          105.062552,31.318634
        ],
        '秋林镇': [
          105.262071,31.151384
        ],
        '永新镇': [
          105.110808,31.169901
        ],
        '紫河镇': [
          105.246997,30.757191
        ],
        '永明镇': [
          104.884692,31.370162
        ],
        '进都乡': [
          104.961209,31.049931
        ],
        '灵兴镇': [
          105.018443,31.159091
       ],
        '玉林乡': [
          105.064644,31.007745
        ],
        '百顷镇': [
          105.187581,31.083424
        ],
        '石安镇': [
          105.101598,31.208884
        ],
        '立新镇': [
          104.768848,31.275759
        ],
        '老马乡': [
          105.000278,31.268938
        ],
        '花园镇': [
          104.948433,31.278508
        ],
        '菊河乡': [
          105.020339,30.808997
        ],
        '西平镇': [
          104.865241,31.02427
        ],
        '郪江镇': [
          105.099436,30.815883
        ],
        '金鼓乡': [
          105.186276,31.218922
        ]
      }
      let scatterData = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          scatterData.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return scatterData;
    },
    //主体数量
    manageCount(){
      let indexMapData = []
      let maxData = []
      let minData = []
      debugger;
      for (let i = 0; i < this.indexMapData.length; i++) {
        indexMapData.push({
          name:this.indexMapData[i].pname,
          value:this.indexMapData[i].counts
        })
        maxData.push(this.indexMapData[i].counts)
        minData.push(this.indexMapData[i].counts)
      }
      var max = Math.max.apply(null, maxData);
      var min = Math.min.apply(null, minData);
      let option = this.china.getOption();
      option.tooltip[0].formatter = function(params){
        var data = params.data;
        if(params.componentSubType == "bar3D"){
          return data.name +
            '</b><br /> 数量: '+data.value[2] + '个'
        }
        if (params.componentSubType == "map3D") {
          return data.name +
            '</b><br /> 数量: '+ (data.value ? data.value + '个' : '--')
        }
      };
      option.visualMap[0]={
        text: ['数量(个)'],
        min: 0,
        max: max,
      }
      option.series[0]={
        data:indexMapData
      }
      option.series[1]={
        name: '数量',
        data: this.convertData(indexMapData)
      }
      this.china.setOption(option)
    },

    //占地面积
    areaCount(){
      let indexMapData = []
      let maxData = []
      let minData = []
      for (let i = 0; i < this.indexMapData.length; i++) {
        indexMapData.push({
          name:this.indexMapData[i].pname,
          value:this.indexMapData[i].area
        })
        maxData.push(this.indexMapData[i].area)
        minData.push(this.indexMapData[i].area)
      }
      var max = Math.max.apply(null, maxData);
      var min = Math.min.apply(null, minData);
      let option = this.china.getOption();
      option.tooltip[0].formatter = function(params){
        var data = params.data;
        if(params.componentSubType == "bar3D"){
          return data.name +
            '</b><br /> 面积: '+data.value[2] + '万亩'
        }
        if (params.componentSubType == "map3D") {
          return data.name +
            '</b><br /> 面积: '+ (data.value ? data.value + '万亩' : '--')
        }
      };
      option.visualMap[0]={
        text: ['面积(万亩)'],
        min: 0,
        max: max,
      }
      option.series[0]={
        data:indexMapData
      }
      option.series[1]={
        name: '面积',
        data: this.convertData(indexMapData)
      }
      this.china.setOption(option)
    },

    //注册资金
    yiedCount(){
      let indexMapData = []
      let maxData = []
      let minData = []
      for (let i = 0; i < this.indexMapData.length; i++) {
        indexMapData.push({
          name:this.indexMapData[i].pname,
          value:this.indexMapData[i].sums
        })
        maxData.push(this.indexMapData[i].sums)
        minData.push(this.indexMapData[i].sums)
      }
      var max = Math.max.apply(null, maxData);
      var min = Math.min.apply(null, minData);
      let option = this.china.getOption();
      option.tooltip[0].formatter = function(params){
        var data = params.data;
        if(params.componentSubType == "bar3D"){
          return data.name +
            '</b><br /> 注册资金: '+data.value[2] + '亿元'
        }
        if (params.componentSubType == "map3D") {
          return data.name +
            '</b><br /> 注册资金: '+ (data.value ? data.value + '亿元' : '--')
        }
      };
      option.visualMap[0]={
        text: ['注册资金(亿元)'],
        min: 0,
        max: max,
      }
      option.series[0]={
        data:indexMapData
      }
      option.series[1]={
        name: '注册资金',
        data: this.convertData(indexMapData)
      }
      this.china.setOption(option)
    },

    //土地资源结构
    initIndexLandTypeChart() {

      this.visIndexLandType = chart.EchartsIndexLandTypeChart("visIndexLandType", this);
      //chart.EchartsIndexLandTypeChart("visIndexLandType");
    },
    //种植类型占比
    initIndexPlantTypeChart() {
      this.visIndexPlantType = chart.EchartsIndexPlantTypeChart("visIndexPlantType", this);
    },
    //农事类型占比
    initIndexFarmTypeChart() {
      this.visIndexFarmType = chart.EchartsIndexFarmTypeChart("visIndexFarmType", this);
    },
    //价格交易数据
    initIndexPriceChart() {
      // this.visIndexPrice = chart.EchartsIndexPriceChart("visIndexPrice", this);
      chart.EchartsIndexPriceChart("visIndexPrice", this);
    },
    //质量检测
    initIndexSourceChart() {
      // this.visIndexSource = chart.EchartsIndexSourceChart("visIndexSource", this);
      chart.EchartsIndexSourceChart("visIndexSource", this);
    },
    //设备类型占比
    initIndexEquipmentChart() {
      this.visIndexEquipment = chart.EchartsIndexEquipmentChart("visIndexEquipment", this);
    },
    //投入品用量
    initIndexInputsChart() {
      //chart.EchartsIndexInputsChart("visIndexInputsType");
      this.visIndexInputsType = chart.EchartsIndexInputsChart("visIndexInputsType", this);
    },
    //植保防治趋势
    initIndexDiseasesChart() {
      this.visIndexDiseasesType = chart.EchartsIndexDiseases("visIndexDiseasesType", this);
    },
  },
  components: {
    // industryAnalysisMap
    Nav
  },
  async mounted() {
    //获取麦冬产量
    await this.getMaidongYield()
    //获取粮食作物数据
    await this.getProductionByType()
    //获取生猪统计数据
    await this.getLiveStockData_pig()
    //获取经营主体数据————企业数量、占地面积、企业产值
    await this.getBusinessData()
    //获取价格交易数据
    await this.getChangesInPrices()
    //获取土地资源结构势数据  
    await this.getLanduse()
    //获取植保防治趋势数据  
    await this.cropDefense()
    //获取投入品用量数据  
    await this.getInPut()
    //获取养殖品种占比数据  
    await this.getAquaticTypeProportion()
    //获取养殖成本结构数据  
    await this.getCostStructure()
    //获取种植种类占比数据 
    await this.getTypeData()

    // echarts.zhongZhiLeiXing_left('ZZLX_box_item_echarts_left', this.ZZLX_LS, this.ZZLX_total)
    // echarts.zhongZhiLeiXing_center('ZZLX_box_item_echarts_center', this.ZZLX_JJZW, this.ZZLX_total)
    // echarts.zhongZhiLeiXing_right('ZZLX_box_item_echarts_right', this.ZZLX_LSZW, this.ZZLX_total)

    echarts.zhiBaoFangZhi('zhiBaoFangZhi', this.ZBFZ_name, this.ZBFZ_happen, this.ZBFZ_defense)
    // echarts.zhongZhiLeiXing('zhongZhiLeiXing', this.ZZLX_value)
    echarts.yangZhiChengBen('yangZhiChengBen', this.YZCB_time, this.YZCB_bread, this.YZCB_feed, this.YZCB_pig)
    echarts.jiaGeJiaoYi('jiaGeJiaoYi', this.ZZLX_name, this.ZZLX_area, this.ZZLX_yield)
    echarts.tuDiZiYuan('tuDiZiYuan', this.TDZY_value)
    // echarts.yangZhiPinZhong('yangZhiPinZhong', this.YZPZ_value)
    // 动态柱状图
    echarts.touRuPin('touRuPin',0, this.TRP_name, this.TRP_year, this.TRP_data_HF, this.TRP_data_DM, this.TRP_data_NY, this.TRP_data_NYCY)

    liquidfill.liquidfill_left('st_liqui_1','土地资源结构', '16%')
    // liquidfill.liquidfill_left('st_liqui_2','养殖品种')

    this.initChartsChina();
    this.indexCount();
    this.initIndexLandTypeChart();
    this.initIndexPlantTypeChart();
    this.initIndexFarmTypeChart();
    this.initIndexPriceChart();
    this.initIndexSourceChart();
    this.initIndexEquipmentChart();
    this.initIndexInputsChart();
    this.initIndexDiseasesChart();
    startmarquee(30,30,1,"roll_table_JGJY"); //表格自动滚动
  },
  created(){
    // 动态柱状图的定时器！！！
    this.setTime()
  },
  beforeDestroy(){
    // 删除定时器！！！
    clearInterval(this.timer)
  }
};
</script>
<style scoped>

</style>

