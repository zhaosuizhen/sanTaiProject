<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

                <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div">
          <div class="management-charts-title">食用菌基地情况(2020)</div>
          <div class="content_box SYJJD_box">
            <div>
              <div class="SYJJD_img_box SYJJD_img_box_left">
              </div>
              <p>基地数量</p>
              <p><span style="color:#3ED3FF">9</span>家</p>
            </div>
            <div>
              <div class="SYJJD_img_box SYJJD_img_box_center">
              </div>
              <p>基地面积</p>
              <p><span style="color:#FFE56B">515</span>亩</p>
            </div>
            <div>
              <div class="SYJJD_img_box SYJJD_img_box_right">
              </div>
              <p>种植品种</p>
              <p><span style="color:#60D6B4">2</span>种</p>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div">
            <div class="management-charts-title">蔬菜占地面积（亩）({{SCZDMJ_year}})</div>
            <div class="content_box">
              <div class="echarts_box echarts_box_liq">
                <div id="st_liqui_1"></div>
                <div id="shuCaiZhanDiMianJi"></div>
              </div>
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
        <div class="mapPointExample mapPointExample_SCJD"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div">
          <div class="management-charts-title">地膜覆盖面积（亩）({{SCZDMJ_year}})</div>
            <div class="content_box">
              <div class="echarts_box echarts_box_liq">
                <div id="st_liqui_2"></div>
                <div id="diMoFuGaiMianJi"></div>
              </div>
            </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div">
          <div class="management-charts-title">总产量（吨）({{SCZDMJ_year}})</div>
            <div class="content_box">
              <div class="echarts_box echarts_box_liq">
                <div id="st_liqui_3"></div>
                <div id="zongChanLiang"></div>
              </div>
            </div>
          <!-- <div id="inputsSeedChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">蔬菜播种面积（亩）({{SCZDMJ_year}})</div>
            <div class="content_box">
              <div class="echarts_box echarts_box_liq">
                <div id="st_liqui_4"></div>
                <div id="shuCaiBoZhongMianJi"></div>
              </div>
            </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0 0 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-other-div" style="position:relative;">
          <div class="management-charts-title" style="position:relative;">单品种种植情况</div>
            <div class="choice_btn">
              <div :class="shuCaiChanLiang_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_1">2018</div>
              <div :class="shuCaiChanLiang_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_2">2019</div>
            </div>
            <div class="content_box" id="shuCaiGeXiangZhenChanLiang">
              
            </div>
        </div>
      </el-col>

      <el-col :span="6">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div" style="position:relative;">
          <div class="management-charts-title">种植品种单产</div>
            <div class="choice_btn">
              <div :class="shuCaiPinZHong_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_3">2018</div>
              <div :class="shuCaiPinZHong_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_4">2019</div>
            </div>
            <div class="content_box" id="shuCaiZhongZhiPinZhong">
              
            </div>
        </div>
      </el-col>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import echart from "../../js/santaiEcharts/visVegetables";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import { getVegetablesBaseData, getVegetablesItem, getVegetablesSingle } from '@/api/visVegetables'

export default {
  data() {
    return {
      SCZDMJ_year: 0,
      shuCaiChanLiang_flag: false,
      shuCaiPinZHong_flag: false,
      agricultural_storesTextMapping: {
        enterprise_name: "经营主体名称",
        // contacts: "注册资本",
        unit_type: "单位类型",
        establish_time: "注册日期",
        legal_person: "法定代表人",
        // phone: "电话",
        // plant_area: "种植面积",
        // yield: "产量",
        address: "地址",
        township: "所属乡镇",
      },
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    //获取蔬菜各乡镇产量
    await this.getVegetablesItemData(2019)
    //获取蔬菜种植品种
    await this.getVegetablesSingleData(2019)
    await this.getVegetablesBaseDataVal()

    await this.initLayer();

    
    
    // await echart.shiYongJunJiDiQingKuang('ZTLX_box_item_echarts_left', 9, 526, '#3DD4FF')
    // await echart.shiYongJunJiDiQingKuang('ZTLX_box_item_echarts_center', 515, 526, '#FEE36C')
    // await echart.shiYongJunJiDiQingKuang('ZTLX_box_item_echarts_right', 2, 526, '#60D5B2')

    

  },
  methods: {
    //获取蔬菜各乡镇产量
    async getVegetablesItemData(year){
      let res = await getVegetablesItem({year})
      await echart.shuCaiGeXiangZhenChanLiang('shuCaiGeXiangZhenChanLiang', res.data.data.type, res.data.data.area, res.data.data.yield)
    },
    //获取蔬菜种植品种
    async getVegetablesSingleData(year){
      let res = await getVegetablesSingle({year})
      console.log(res.data.data)
      await echart.shuCaiZhongZhiPinZhong('shuCaiZhongZhiPinZhong', res.data.data.type, res.data.data.value)
    },
    async changeEcharts_1(){
      //2018年蔬菜各乡镇产量
      this.shuCaiChanLiang_flag = true
      await this.getVegetablesItemData(2018)
    },
    async changeEcharts_2(){
      //2019年蔬菜各乡镇产量
      this.shuCaiChanLiang_flag = false
      await this.getVegetablesItemData(2019)
    },
    async changeEcharts_3(){
      //2018年蔬菜种植品种
      this.shuCaiPinZHong_flag = true
      await this.getVegetablesSingleData(2018)
    },
    async changeEcharts_4(){
      //2019年蔬菜种植品种
      this.shuCaiPinZHong_flag = false
      await this.getVegetablesSingleData(2019)
    },
    //获取蔬菜基础数据
    async getVegetablesBaseDataVal(){
      let res = await getVegetablesBaseData()
      this.SCZDMJ_year = res.data.data.year
      //蔬菜占地面积
      let shuCaiZhanDiMianJi_arr = [{name:'常年菜地', value:res.data.data.cncd_vegetables_occupy},
                                    {name:'季节菜地', value:res.data.data.jjcd_vegetables_occupy},
                                    {name:'自食菜地', value:res.data.data.zscd_vegetables_occupy}]
      await liquidfill.liquidfill_left('st_liqui_1','蔬菜占地面积', '16%')
      await echart.shuCaiZhanDiMianJi('shuCaiZhanDiMianJi', shuCaiZhanDiMianJi_arr)
      //蔬菜播种面积
      let shuCaiBoZhongMianJi_arr = [{name:'常年菜地', value:res.data.data.cncd_vegetables_sow},
                                     {name:'季节菜地', value:res.data.data.jjcd_vegetables_sow},
                                     {name:'自食菜地', value:res.data.data.zscd_vegetables_sow}]
      await liquidfill.liquidfill_left('st_liqui_4','蔬菜播种面积', '16%')
      await echart.shuCaiBoZhongMianJi('shuCaiBoZhongMianJi', shuCaiBoZhongMianJi_arr)
      //地膜覆盖面积
      let diMoFuGaiMianJi_arr = [{name:'常年菜地', value:res.data.data.cncd_film_cover},
                                 {name:'季节菜地', value:res.data.data.jjcd_film_cover},
                                 {name:'自食菜地', value:res.data.data.zscd_film_cover}]
      await liquidfill.liquidfill_left('st_liqui_2','地膜覆盖面积', '16%')
      await echart.diMoFuGaiMianJi('diMoFuGaiMianJi', diMoFuGaiMianJi_arr)
      //总产量
      let zongChanLiang_arr = [{name:'常年菜地', value:res.data.data.cncd_yield},
                               {name:'季节菜地', value:res.data.data.jjcd_yiled},
                               {name:'自食菜地', value:res.data.data.zscd_yield}]
      await liquidfill.liquidfill_left('st_liqui_3','总产量', '22%')
      await echart.zongChanLiang('zongChanLiang', zongChanLiang_arr)
      
    },
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_production_plant",
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
    }
  }
};
</script>
<style>
</style>

