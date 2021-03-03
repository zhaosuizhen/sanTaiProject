<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div">
          <div class="management-charts-title">藤椒生产面积({{tjSCMJ_year}})</div>
          <div class="content_box MD_gan_xian" style="position: relative;">
            <div class="MD_left_echarts">
                <div class="echarts_sm" id="SCMJ_small"></div>

                <div class="echarts_bg" id="SCMJ_big"></div>

                <div class="center_text">
                  <p>藤椒生产面积</p>
                </div>
            </div>

            <div class="right_text">
              <div class="right_text_top">
                <p>未投产面积/万亩</p>
                <h1 style="color:#33E6FF">{{(this.tjSCMJ_val[1] / 10000).toFixed(2)}}</h1>
              </div>

              <div class="right_text_bottom">
                <p>投产面积/万亩</p>
                <h1 style="color:#FEAF5C">{{(this.tjSCMJ_val[0] / 10000).toFixed(2)}}</h1>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div">
          <div class="management-charts-title">产品产量({{tjSCMJ_year}})</div>
          <div class="content_box">
            <div class="echarts_box" id="chanPinChanLiang"></div>
          </div>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <div class="mapPointExample mapPointExample_YJZZ"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div3" style="height:144.5%">
          <div class="management-charts-title">管护情况(2019)</div>
          <div class="content_box">
            <div class="companyAdd">
              <div>名称（单位/亩）</div>
            </div>
            <div class="echarts_box" id="guanHuQingKuang" style="height:90%"></div>
            <el-button type="primary" style="position:absolute;bottom:15px;left:calc(50% - 26px)" @click="GHQK_next">换一批</el-button>
            <!-- <el-button type="primary" style="position:absolute;bottom:0;left:0" @click="GHQK_next">上一页</el-button> -->
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <!-- <div class="management-top-div"> -->
          <!-- <div class="management-charts-title"></div> -->
          <!-- <div id="inputsSeedChart" class="management-charts-height"></div> -->
        <!-- </div> -->

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">销售情况({{tjSCMJ_year}})</div>
          <div class="content_box MD_gan_xian" style="position: relative;">
            <div class="MD_left_echarts">
                <div class="echarts_sm" id="XSQK_small"></div>

                <div class="echarts_bg" id="XSQK_big"></div>

                <div class="center_text">
                  <p>销售情况</p>
                </div>
            </div>

            <div class="right_text">
              <div class="right_text_top">
                <p>鲜重/吨</p>
                <h1 style="color:#33E6FF">{{(this.tjXSQK_val[0] / 1000).toFixed(2)}}</h1>
              </div>

              <div class="right_text_bottom">
                <p>干重/吨</p>
                <h1 style="color:#FEAF5C">{{(this.tjXSQK_val[1] / 1000).toFixed(2)}}</h1>
              </div>
            </div>
          </div>
          <!-- <div class="content_box">
            <div class="echarts_box" id="xiaoShouQingKuang"></div>
          </div> -->
        </div>
      </el-col>

      <el-col :span="12" style="padding:0 0 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-other-div" style="position: relative;">
          <div class="management-charts-title" style="position: relative;">基地发展情况</div>
          <div class="choice_btn">
            <div :class="jiDiFaZhan_flag == 2018 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_1">2018</div>
            <div :class="jiDiFaZhan_flag == 2019 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_2">2019</div>
          </div>
          <div class="content_box">
            <div class="echarts_box" id="jiDiFaZhanQingKuang"></div>
          </div>
        </div>
      </el-col>

      <!-- <el-col :span="6"> -->
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <!-- <div class="management-bottom-index-div"> -->
          <!-- <div class="management-charts-title"></div> -->
        <!-- </div> -->
      <!-- </el-col> -->

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import echarts from "../../js/santaiEcharts/visRattanPepper";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import { productArea, ratanAreaDevelopment } from '@/api/visRattanPepper'

export default {
  data() {
    return {
      jiDiFaZhan_flag: 2018,

      tjSCMJ_year: 0,
      tjSCMJ_val: [], //藤椒生产面积数据
      tjCPCL_val: [], //产品产量数据
      tjXSQK_val: [], //销售情况数据

      jdTownship_list: [], //基地乡镇列表
      jdDevelopmentArea_list_2018: [], //基地发展面积列表-2018
      jdDevelopmentArea_list_2019: [], //基地发展面积列表-2019

      jdTownShip_arr:[], //基地乡镇列表
      jdSurvivalArea_list: [], //基地存活面积列表
      jdOperationArea_list: [], //基地投产面积列表

      GHQK_index: 0, //管护情况下标

      agricultural_storesTextMapping: {
        enterprise_name: "经营主体名称",
        contacts: "注册资本",
        unit_type: "单位类型",
        establish_time: "注册日期",
        legal_person: "法定代表人",
        // phone: "电话",
        // plant_area: "种植面积",
        yield: "产量",
        address: "地址",
        township: "所属乡镇",
      },
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    await this.initLayer();
    
    //藤椒基本信息数据获取
    await this.getProductArea()
    //基地发展情况基础数据
    await this.getRatanAreaDevelopment(this.GHQK_index, this.GHQK_index + 6)

    await echarts.jiDiFaZhanQingKuang('jiDiFaZhanQingKuang', this.jdTownship_list, this.jdDevelopmentArea_list_2018)
  },
  methods: {
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_rattan_enterprise",
        clickType: "point",
        popupCallback(e) {
          let data = [];
          for (let key in _this.agricultural_storesTextMapping) {
            data.push({
              title: _this.agricultural_storesTextMapping[key],
              value: e.get(key)
            });
          }
          return { data: data };
        }
      });
      this.agricultural_stores.isPopUp = true;
    },
    //藤椒基本信息数据获取
    async getProductArea(){
      let res = await productArea()
      this.tjSCMJ_year = res.data.data.year
      this.tjSCMJ_val = [res.data.data.productioned, res.data.data.notProduction]
      this.tjCPCL_val = [res.data.data.dryWeight, res.data.data.freshWeight, res.data.data.oilYield, res.data.data.keepFreshYield]
      this.tjXSQK_val = [res.data.data.salesVolume, res.data.data.drySalesVolume]

      // await echarts.tengJiaoShengChanMianJi('tengJiaoShengChanMianJi', ['投产面积', '未投产面积'], this.tjSCMJ_val)

      await echarts.pie_small('SCMJ_small')
      await echarts.pie_big('SCMJ_big', [{name:'未投产面积',value:this.tjSCMJ_val[1]},{name:'投产面积',value:this.tjSCMJ_val[0]}])

      await echarts.chanPinChanLiang('chanPinChanLiang', ['干藤椒', '鲜藤椒', '藤椒油', '保鲜藤椒'], this.tjCPCL_val)
      // await echarts.xiaoShouQingKuang('xiaoShouQingKuang', ['鲜重', '干重'], this.tjXSQK_val)

      
      await echarts.pie_small('XSQK_small')
      await echarts.pie_big('XSQK_big', [{name:'干重',value:this.tjXSQK_val[0]},{name:'鲜重',value:this.tjXSQK_val[1]}])
    },
    //基地发展情况基础数据
    async getRatanAreaDevelopment(star){

      let res = await ratanAreaDevelopment()
      console.log(res.data.data)
      let length = res.data.data.length
      this.jdTownship_list = res.data.data.map(item => item.cityName)
      this.jdDevelopmentArea_list_2018 = res.data.data.map(item => item.developmentArea_2018)
      this.jdDevelopmentArea_list_2019 = res.data.data.map(item => item.developmentArea_2019)

      let flag_arr = []
      flag_arr = res.data.data.splice(star,6)

      this.jdTownShip_arr = flag_arr.map(item => item.cityName)
      this.jdSurvivalArea_list = flag_arr.map(item => item.survivalArea)
      this.jdOperationArea_list = flag_arr.map(item => item.operationArea)
      
      await echarts.guanHuQingKuang('guanHuQingKuang', this.jdTownShip_arr, this.jdSurvivalArea_list, this.jdOperationArea_list)
      
      this.GHQK_index = (this.GHQK_index + 6 > length) ? 0 : this.GHQK_index + 6
      // this.GHQK_index = (this.GHQK_index - 6 < 0) ? 54 : this.GHQK_index - 6
    },
    //管护情况下一页
    async GHQK_next(){
      await this.getRatanAreaDevelopment(this.GHQK_index)
    },
    //基地发展情况--2018
    async changeEcharts_1(){
      this.jiDiFaZhan_flag = 2018
      await echarts.jiDiFaZhanQingKuang('jiDiFaZhanQingKuang', this.jdTownship_list, this.jdDevelopmentArea_list_2018)
    },
    //基地发展情况--2019
    async changeEcharts_2(){
      this.jiDiFaZhan_flag = 2019
      await echarts.jiDiFaZhanQingKuang('jiDiFaZhanQingKuang', this.jdTownship_list, this.jdDevelopmentArea_list_2019)
    },
  }
};
</script>
<style>
</style>

