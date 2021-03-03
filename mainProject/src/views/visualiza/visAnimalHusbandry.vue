<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">畜牧生产情况({{XMSCQK_year}})</div>
            <div class="choice_btn">
              <div :class="XMSC_flag ? 'sanPinYiBiao_active' :''" @click="changeFlig_1">存栏</div>
              <div :class="XMSC_flag ? '' :'sanPinYiBiao_active'" @click="changeFlig_2">出栏</div>
            </div>
            
          <div class="content_box">
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_1"></div>
              <div id="XMSCQK_out"></div>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div">
          <div class="management-charts-title">各乡镇禽蛋产量({{GXZQDCL_year}})</div>

          <div class="content_box">
            <p class="table_title">
                <span class="title_township">乡镇</span>
                <span class="title_eggYield" style="text-align:center">蛋产量(个)</span>
                <span class="title_duckeggYiled" style="text-align:center">鸭蛋产量(个)</span>
                <span class="title_gooseeggYiled" style="text-align:center">鹅蛋产量(个)</span>
            </p>
            <div class="table_box">
              <ul class="geXiangZhenQinDanChanLiang" id="roll_table_WGH">
                <li v-for="(item,index) in GXZQDCL" :key="index">
                  <span class="title_township">{{item.township}}</span>
                  <span class="title_eggYield" style="color:#fff;text-align:center">{{item.eggYield}}</span>
                  <span class="title_duckeggYiled" style="color:#fff;text-align:center">{{item.duckeggYiled}}</span>
                  <span class="title_gooseeggYiled" style="color:#fff;text-align:center">{{item.gooseeggYiled}}</span>
                </li>
              </ul>
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
        <div class="mapPointExample mapPointExample_XQYZ"></div>
        <!-- <div class="mapPointExample mapPointExample_TRP"></div> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div">
          <div class="management-charts-title">蛋禽产量({{QDCL_year}})</div>

          <div class="content_box">
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_2"></div>
              <div id="DQCL"></div>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div" style="position:relative">
          <div class="management-charts-title">家禽养殖情况({{JQYZ_year}})</div>
            <div class="choice_btn">
              <div :class="JQYZ_flag ? 'sanPinYiBiao_active' :''" @click="changeFlig_3">存栏</div>
              <div :class="JQYZ_flag ? '' :'sanPinYiBiao_active'" @click="changeFlig_4">出栏</div>
            </div>

            <div class="content_box">
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_3"></div>
              <div id="JQYZ"></div>
            </div>
          </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="12">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-other-div">
          <div class="management-charts-title" style="position: relative;">乡镇畜牧出栏情况({{XZXM_out_year}})</div>

          <div class="content_box">
            <div class="echarts_box" id="xiangZhenXuMuChuLan"></div>
          </div>
        </div>
        
      </el-col>

      <el-col :span="12" style="padding:0 0 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-other-div">
          <div class="management-charts-title" style="position: relative;">乡镇畜牧存栏情况({{XZXM_in_year}})</div>

          <div class="content_box">
            <div class="echarts_box" id="xiangZhenXuMuCunLan"></div>
          </div>
        </div>
      </el-col>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import chart from "../../js/santaiEcharts/visInputs";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import echarts from '../../js/santaiEcharts/visAnimalHusbandry'
import { getLivestockExistColum, getLivestockOutColum, getEggYiled, getEggYiledByTownship, 
         getExistColumn,getOutColumn, getLivestockExistColumByTownship, getLivestockOutColumByTownship } from '../../api/visAnimalHusbandry'
import { startmarquee, getBig } from '../../util/util'
export default {
  data() {
    return {
      //畜牧生产情况
      XMSCQK_year:0,
      XMSCQK_out:[],
      XMSCQK_in:[],
      //禽蛋产量
      QDCL:[],
      QDCL_year:0,
      //各县镇禽蛋产量
      GXZQDCL:[],
      GXZQDCL_year:0,
      //家禽养殖
      JQYZ_out:[],
      JQYZ_in:[],
      JQYZ_year:0,
      //乡镇畜牧出栏
      XZXM_out_year:0,
      XZXM_out_twon:[],
      XZXM_out_sheep:[],  // 羊出栏量
      XZXM_out_rabbit:[], // 兔出栏量
      XZXM_out_fowl:[],   // 家禽出栏量
      XZXM_out_cattle:[], // 牛出栏量
      //乡镇畜牧存栏量
      XZXM_in_year:0,
      XZXM_in_twon:[],
      XZXM_in_sheep:[],  // 羊存栏量
      XZXM_in_rabbit:[], // 兔存栏量
      XZXM_in_fowl:[],   // 家禽存栏量
      XZXM_in_cattle:[], //牛存栏量

      XMSC_flag:true,
      JQYZ_flag:true,
      agricultural_storesTextMapping: {
        farm_name: "养殖场名称",
        varieties: "主要品种",
        legal_name: "法人姓名",
        mobile_phone: "电话",
        address: "地址",
        township: "所属乡镇",
        record: "是否备案"
        //price: "农资价格"
      },
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    startmarquee(30,30,1,"roll_table_WGH"); //表格自动滚动
    //牧畜生产情况存栏查询
    await this.getLivestockExistColumData()
    //牧畜生产情况出栏查询
    await this.getLivestockOutColumData()
    //各县镇禽蛋产量查询
    await this.getEggYiledByTownshipData()
    //禽蛋产量查询
    await this.getEggYiledData()
    //家禽养殖情况存栏查询 
    await this.getExistColumnData()
    //家禽养殖情况出栏查询 
    await this.getOutColumnData()
    // 乡镇牧畜出栏情况查询
    await this.getLivestockOutColumByTownshipData()
    // 乡镇牧畜存栏情况查询
    await this.getLivestockExistColumByTownshipData()

    echarts.happen_defense('XMSCQK_out', this.XMSCQK_out, 0)
    echarts.happen_defense('DQCL', this.QDCL, 4)
    echarts.happen_defense('JQYZ', this.JQYZ_in, 2)
    echarts.buTongZuoWu('xiangZhenXuMuChuLan', this.XZXM_out_twon, this.XZXM_out_sheep, this.XZXM_out_rabbit, this.XZXM_out_fowl, this.XZXM_out_cattle)
    echarts.buTongZuoWu('xiangZhenXuMuCunLan', this.XZXM_in_twon, this.XZXM_in_sheep, this.XZXM_in_rabbit, this.XZXM_in_fowl, this.XZXM_in_cattle)
    liquidfill.liquidfill_left('st_liqui_1','畜牧生产','20%')
    liquidfill.liquidfill_left('st_liqui_2','蛋禽产量','20%')
    liquidfill.liquidfill_left('st_liqui_3','家禽养殖','20%')
    this.initLayer();
  },
  methods: {
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_livestoc",
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
    changeFlig_1(){
      this.XMSC_flag = true
      echarts.happen_defense('XMSCQK_out', this.XMSCQK_out, 0)
    },
    changeFlig_2(){
      this.XMSC_flag = false
      echarts.happen_defense('XMSCQK_out', this.XMSCQK_in, 1)
    },
    changeFlig_3(){
      this.JQYZ_flag = true
      echarts.happen_defense('JQYZ', this.JQYZ_in, 2)
    },
    changeFlig_4(){
      this.JQYZ_flag = false
      echarts.happen_defense('JQYZ', this.JQYZ_out, 3)
    },
    //牧畜生产情况存栏查询
    async getLivestockExistColumData(){
      let res = await getLivestockExistColum()
      console.log(res);
      this.XMSCQK_year = res.data.data[0].years
      for (const key in res.data.data[0]) {
        if(key != 'egg_yiled' && key != 'years'){
          this.XMSCQK_out.push({name:key,value:res.data.data[0][key]})
        }
      }
    },
    //牧畜生产情况出栏查询
    async getLivestockOutColumData(){
      let res = await getLivestockOutColum()
      console.log(res.data.data)
      this.XMSCQK_in.push({name:'fowl_out_column',value:res.data.data[0]['fowl_out_column']})
      for (const key in res.data.data[0]) {
        if(key != 'years' && key != 'egg_yiled' && key != 'fowl_out_column'){
          this.XMSCQK_in.push({name:key,value:res.data.data[0][key]})
        }
      }
    },
    //各县镇禽蛋产量查询
    async getEggYiledByTownshipData(){
      let res = await getEggYiledByTownship()
      this.GXZQDCL_year = res.data.data[0].years
      this.GXZQDCL = res.data.data
    },
    //禽蛋产量查询
    async getEggYiledData(){
      let res = await getEggYiled()
      this.QDCL_year = res.data.data[0].years
      this.QDCL = [
        {name:'蛋产量',value:res.data.data[0].eggYield},
        {name:'鸭蛋产量',value:res.data.data[0].duckeggYiled},
        {name:'鹅蛋产量',value:res.data.data[0].gooseeggYiled}
      ]
    },
    //家禽养殖情况存栏查询 
    async getExistColumnData(){
      let res = await getExistColumn()
      this.JQYZ_year = res.data.data[0].years
      this.JQYZ_in = [
        {name:'鸡存栏量',value:res.data.data[0].chicken_exist_column},
        {name:'鸭存栏量',value:res.data.data[0].duck_exist_column},
        {name:'鹅存栏量',value:res.data.data[0].goose__exist_column}
      ]
    },
    //家禽养殖情况出栏查询 
    async getOutColumnData(){
      let res = await getOutColumn()
      // console.log(res.data.data)
      this.JQYZ_out = [
        {name:'鸡出栏量',value:res.data.data[0].chicken_out_column},
        {name:'鸭出栏量',value:res.data.data[0].duck_out_column},
        {name:'鹅出栏量',value:res.data.data[0].goose_out_column}
      ]
    },
    // 乡镇牧畜出栏情况查询
    async getLivestockOutColumByTownshipData(){
      let res = await getLivestockOutColumByTownship()
      this.XZXM_out_year = res.data.data[0].years
      res.data.data.forEach((item,index) => {
        this.XZXM_out_twon[index] = item.township
        this.XZXM_out_sheep[index] = item.sheep_out_column
        this.XZXM_out_rabbit[index] = item.rabbit_out_column
        this.XZXM_out_fowl[index] = item.fowl_out_column
        this.XZXM_out_cattle[index] = item.cattle_out_column
      })
      // console.log(this.XZXM_out_twon)
      // console.log(this.XXZXM_out_sheepZXM)
      // console.log(this.XZXM_out_rabbit)
      // console.log(this.XZXM_out_cattle)
      // console.log(this.XZXM_out_fowl)
      
    },
    // 乡镇牧畜存栏情况查询
    async getLivestockExistColumByTownshipData(){
      let res = await getLivestockExistColumByTownship()
      this.XZXM_in_year = res.data.data[0].years
      res.data.data.forEach((item,index) => {
        this.XZXM_in_twon[index] = item.township
        this.XZXM_in_sheep[index] = item.sheep_exist_column
        this.XZXM_in_rabbit[index] = item.rabbit_exist_column
        this.XZXM_in_fowl[index] = item.fowl_exist_column
        this.XZXM_in_cattle[index] = item.cattle_exist_column
      })
      // console.log(this.XZXM_in_twon)
      // console.log(this.XZXM_in_sheep)
      // console.log(this.XZXM_in_fowl)
      // console.log(this.XZXM_in_rabbit)
      // console.log(this.XZXM_in_cattle)
    },
  }
};
</script>
<style>
</style>

