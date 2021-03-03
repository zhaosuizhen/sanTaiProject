<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div">
          <div class="management-charts-title">农机数据({{NJSJ_year}})</div>
          <div class="content_box">
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_6"></div>
              <div id="nongJiShuJu"></div>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div">
          <div class="management-charts-title">农机总动力({{NJZDL_year}})</div>
            <div class="text_box">
              <div>
                <!-- <span>{{totalList_count[1]}}/千瓦</span> -->
                <span style="font-size:0.1rem">种植机械/千瓦</span>
                <span style="color:#83E914">{{totalValue_count[1]}}</span>
              </div>
              <div>
                <!-- <span>{{totalList_count[2]}}</span> -->
                <span>农产品初加工机械/千瓦</span>
                <span style="color:#00E9FE">{{totalValue_count[2    ]}}</span>
              </div>
            </div>
          <!-- <div id="inputsProportion" class="management-charts-height"></div> -->
          <div class="content_box" style="height:calc(100% - 70px)">
            <div class="echarts_box" id="nongJiZongDongLi"></div>
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
        <div class="mapPointExample mapPointExample_NJSJ"></div>
        <!-- <img src="../../assets/visualiza/inputs_legend.png" alt="" style="position: absolute;bottom: 4%;left: 3%;"> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div">
          <div class="management-charts-title">农机从业人员({{NYCY_year}})</div>
          <div class="content_box NJSJ_ul_box">
            <ul>
              <li>名称</li>
              <li>持有拖拉机驾驶证人员</li>
              <li>持有联合收割机驾驶证人员</li>
              <li>同时持有拖拉机、联合收割机驾驶证人员</li>
              <li>农机维修人员</li>
              <li>其中持有职业资格证书人员</li>
              <!-- <li>其他</li> -->
            </ul>

            <ul>
              <li>数量</li>
              <li>{{NYCYValue.tractorPeople}}</li>
              <li>{{NYCYValue.combineHarvester}}</li>
              <li>{{NYCYValue.tractorHarvester}}</li>
              <li>{{NYCYValue.mechanicsRepair}}</li>
              <li>{{NYCYValue.hasQualification}}</li>
            </ul>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div">
          <div class="management-charts-title">机械总数量({{JXZSL_year}})</div>
            <div class="text_box">
              <div>
                <!-- <span>{{totalList_power[1]}}/台</span> -->
                <span>种植机械/台</span>
                <span style="color:#83E914">{{totalValue_power[1]}}</span>
              </div>
              <div>
                <!-- <span>{{totalList_power[2]}}/台</span> -->
                <span>农产品初加工机械/台</span>
                <span style="color:#00E9FE">{{totalValue_power[2]}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 70px)">
            <div class="echarts_box" id="jiXieZongShuLiang"></div>
          </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">分机械动力<span style="font-size:0.1rem">（{{fenJiXieDongLi_name}}）({{NJZDL_year}})</span></div>
            <div class="text_box">
              <div v-for="(item,index) in fenJiXieDongLi_bigArr " :key="index">
                <span>{{item.name}}/台</span>
                <span style="color:#83E914">{{item.value}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 70px)">
            <div class="echarts_box" id="fenJiXieDongLi"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0 0 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-other-div">
          <div class="management-charts-title">农机作业情况({{NJZY_year}})</div>
          <!-- <div id="inputsFilmChart" class="management-charts-height"></div> -->
          <div class="text_box_1">
              <div>
                <span>机耕面积/亩</span>
                <span style="color:#dac57c">{{JG_TOTAL}}</span>
              </div>
              <div>
                <span>机播面积/亩</span>
                <span style="color:#2aaec7">{{JB_TOTAL}}</span>
              </div>
              <div>
                <span>机收面积/亩</span>
                <span style="color:#8bc87b">{{JS_TOTAL}}</span>
              </div>
            </div>
          <div class="content_box">
            <div class="echarts_box" id="argJobStates"></div> 
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">分机械数量<span style="font-size:0.1rem">（{{fenJiXieShuLiang_name}}）({{JXZSL_year}})</span></div>
            <div class="text_box">
              <div v-for="(item,index) in fenJiXieShuLiang_bigArr" :key="index">
                <span>{{item.name}}/台</span>
                <span style="color:#83E914">{{item.value}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 70px)">
            <div class="echarts_box" id="fenJiXieShuLiang"></div>
          </div>
        </div>
      </el-col>

    </div>

    <!--统计 弹窗-->
    <div class="vis-geography">
      <el-dialog title="投入品数据" :visible.sync="dialogPlantCount" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim="inputBrand"
              placeholder="农资店名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="inputBrand" label="农资店名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputType" label="类型"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputConsumption" label="用量(公斤)"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table>
        <!-- 分页导航条 -->
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum"
          :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
    <!--投入品占比 弹窗-->
    <div class="vis-geography">
      <el-dialog title="投入品占比数据" :visible.sync="dialogProportiChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim="inputBrand"
              placeholder="投入品名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogProportionPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogProportionData.list">
          <el-table-column property="inputType" label="类别"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputBrand" label="投入品名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="percentage" label="投入占比(%)"
                           :show-overflow-tooltip="true" :resizable="false">
            <template slot-scope="scope">
              <span>{{(scope.row.percentage * 100).toFixed(0) + "%"}}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页导航条 -->
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChangeProportion"
          :current-page.sync="DialogProportionData.pageNum"
          :total="DialogProportionData.total">
        </el-pagination>
      </el-dialog>
    </div>
    <!--农用柴油 弹窗-->
    <div class="vis-geography">
      <el-dialog title="农用柴油趋势" :visible.sync="dialogPlantHistoryChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim="inputBrand"
              placeholder="投入品名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="inputType" label="类别"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputBrand" label="投入品名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputConsumption" label="用量(公斤)"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="useDate" label="时间" style="width: 10%;"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table>
         <!-- 分页导航条 -->
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum"
          :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
    <!--化肥 弹窗-->
    <div class="vis-geography">
      <el-dialog title="化肥趋势" :visible.sync="dialogPlantHistoryAreaChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim="inputBrand"
              placeholder="投入品名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="inputType" label="类别"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputBrand" label="投入品名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputConsumption" label="用量(公斤)"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="useDate" label="时间" style="width: 10%;"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table>
         <!-- 分页导航条 -->
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum"
          :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
    <!--农药 弹窗-->
    <div class="vis-geography">
      <el-dialog title="农药趋势" :visible.sync="dialogPlantHistoryOutputChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim="inputBrand"
              placeholder="投入品名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>

          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="inputType" label="类别"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputBrand" label="投入品名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputConsumption" label="用量(公斤)"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="useDate" label="时间" style="width: 10%;"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table>
         <!-- 分页导航条 -->
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum"
          :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
    <!--地膜 弹窗-->
    <div class="vis-geography">
      <el-dialog title="地膜趋势" :visible.sync="dialogDiMo" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim="inputBrand"
              placeholder="投入品名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>

          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="inputType" label="类别"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputBrand" label="投入品名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="inputConsumption" label="用量(公斤)"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="useDate" label="时间" style="width: 10%;"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table>
        <!-- 分页导航条 -->
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum"
          :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import api from "../../request/visualiza1Api.js";
import echarts from 'echarts';
import chart from "../../js/santaiEcharts/visInputs";
import echarts_plant from '../../js/santaiEcharts/visPlant'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import changeSize from '@/util/changeSize';
import { machinerycount } from '../../api/visPlant'
import { getAgriculturalPopulation, getMachinePower, getMachineCount } from '../../api/visAgriculturalData'
import { getBig } from '../../util/util'
export default {
  data() {
    return {
      NJZY_year: 0,
      NJZDL_year: 0,
      JXZSL_year: 0,
      //分机械动力echarts图表
      fenJiXieDongLi_value:[],
      fenJiXieDongLi_bigArr:[],
      fenJiXieDongLi_name:'拖拉机及配套机械',

      //分机械数量echarts图表
      fenJiXieShuLiang_value:[],
      fenJiXieShuLiang_bigArr:[],
      fenJiXieShuLiang_name:'拖拉机及配套机械',

      //农业机械数量
      totalList_count:['拖拉机及配套机械', '种植机械', '农产品初加工机械', '畜牧机械', '水产机械'],
      totalValue_count:[],

      TLJList_count:['小型（22.1千瓦及以下）', '中型（22.1-73.5千瓦）', '大型及以上（73.5千瓦及以上）'],//拖拉机及配套机械列表
      TLJValue_count:[],

      ZZYList_count:['耕整机', '深松机', '微耕机', '机引耙', '机引犁', '铺膜机', '旋耕机', '联合整地机', '免耕播种机', '水稻插秧机', '精量播种机',
                '秧苗移栽机', '整地施肥播种机', '水稻直播机', '水泵', '节水灌溉类机械', '田园管理机', '机动植保机械', '茶树修剪机', '果树修剪机',
                '稻麦联合收割机', '玉米联合收割机', '大豆收获机', '油菜籽收获机', '马铃薯收获机', '花生收获机', '甜菜收获机', '甘蔗收获机',
                '棉花收获机', '蔬菜收获机械', '采茶机', '青饲料收获机', '牧草收获机', '秸秆粉碎还田机', '打（压）捆机', '机动脱粒机', '谷物烘干机',
                '果蔬烘干机', '种子加工机械', '保鲜储藏设备', '连栋温室', '日光温室', '塑料大棚'],//种植机械列表
      ZZYValue_count:[],

      NCPCJGList_count:['柴油机', '电动机', '粮食初加工机械', '油料初加工机械', '棉花初加工机械', '果蔬初加工机械', '茶叶加工机械'],//农产品初加工机械列表
      NCPCJGValuet_count:[],

      XMJXList_count:['饲料（草）加工机械设备', '饲养机械', '畜产品采集加工机械设备'],//畜牧机械列表
      XMJXValue_count:[],
      
      SCJXList_count:['增氧机', '水产捕捞机械', '投饲机'],//水产机械
      SCJXValue_count:[],

      //农业机械动力
      totalList_power:['拖拉机及配套机械', '种植机械', '农产品初加工机械', '畜牧机械', '水产机械'],
      totalValue_power:[],

      TLJList_power:['小型（22.1千瓦及以下）', '中型（22.1-73.5千瓦）', '大型及以上（73.5千瓦及以上）'],//拖拉机及配套机械列表
      TLJValue_power:[],

      ZZYList_power:['耕整机', '深松机', '微耕机', '机引耙', '机引犁', '铺膜机', '旋耕机', '联合整地机', '免耕播种机', '水稻插秧机', '精量播种机',
                '秧苗移栽机', '整地施肥播种机', '水稻直播机', '水泵', '节水灌溉类机械', '田园管理机', '机动植保机械', '茶树修剪机', '果树修剪机',
                '稻麦联合收割机', '玉米联合收割机', '大豆收获机', '油菜籽收获机', '马铃薯收获机', '花生收获机', '甜菜收获机', '甘蔗收获机',
                '棉花收获机', '蔬菜收获机械', '采茶机', '青饲料收获机', '牧草收获机', '秸秆粉碎还田机', '打（压）捆机', '机动脱粒机', '谷物烘干机',
                '果蔬烘干机', '种子加工机械', '保鲜储藏设备', '连栋温室', '日光温室', '塑料大棚'],//种植机械列表
      ZZYValue_power:[],

      NCPCJGList_power:['柴油机', '电动机', '粮食初加工机械', '油料初加工机械', '棉花初加工机械', '果蔬初加工机械', '茶叶加工机械'],//农产品初加工机械列表
      NCPCJGValuet_power:[],

      XMJXList_power:['饲料（草）加工机械设备', '饲养机械', '畜产品采集加工机械设备'],//畜牧机械列表
      XMJXValue_power:[],
      
      SCJXList_power:['增氧机', '水产捕捞机械', '投饲机'],//水产机械
      SCJXValue_power:[],
      
      //农业从业人员数据
      NYCYValue:{},
      NYCY_year:0,
      // 控制弹窗显示隐藏
      dialogProportiChart: false,
      dialogPlantCount: false,
      dialogPlantHistoryChart: false,
      dialogPlantHistoryAreaChart: false,
      dialogPlantHistoryOutputChart: false,
      dialogDiMo: false,

        //农机数据 
        NJSJ_value:[],
        NJSJ_year: 0,

      // 进度条宽度
      strokeWidth: 12,

      touRuPinData: [],
      unit: "吨",
      // 进度条颜色
      progressColor: ["#03c5fa", "#fb9500", "#e14a5b", "#f42121"],

      //弹框分页数据
      DialogPageData: {
        // isFirstPage: true,
        // isLastPage: true,
        // list: [],
        // inputType: '',
        // inputBrand: '',
        // inputConsumption: '',
        // PageNum: 1,
        // PageSize: 10,
        // pages: 1,
        // total: 1,
      },
      DialogProportionData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        inputType: '',
        inputBrand: '',
        percentage: '',
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1,
      },
      //作物品种类别-搜索框
      inputType: "",
      //作物品种名称-搜索框
      inputBrand: "",
      agricultural_storesTextMapping: {
        enterprise_name: "合作社名称",
        registered_date: "注册日期",
        legal_person: "法定代表人",
        phone: "电话",
        address: "详细地址",
        hz_level: "合作社级别"
      },
      iconImg:{
        chemical:require('../../assets/santai_img/visInputs/chemical.png'), //化肥
        diesel:require('../../assets/santai_img/visInputs/diesel.png'), //柴油
        mulch:require('../../assets/santai_img/visInputs/mulch.png'), //地膜
        pesticide:require('../../assets/santai_img/visInputs/pesticide.png'), //农药图标
      },
      inputsChemicalChart:{ //化肥最近两年总计
        oneData:0,
        twoData:0,
      },
      inputsFilmChart:{ //地膜最近两年总计
        oneData:0,
        twoData:0,
      },
      inputsPesticide:{ //农药最近两年总计
        oneData:0,
        twoData:0,
      },
      inputsSeed:{ //柴油 最近两年总计
        oneData:0,
        twoData:0,
      },
      JS_TOTAL:0, //机收面积
      JG_TOTAL:0, //机耕面积
      JB_TOTAL:0  //机播面积
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    this.initLayer();
    //获取农机总动力数据
    await this.getMachinePowerData()
    //获取农机总数量数据
    await this.getMachineCountData()
    //获取农业从业人员
    await this.getAgriculturalPopulationData()
    console.log(this.totalList_power)
    await this.nongJiZongDongLi_echarts('nongJiZongDongLi',this.totalList_power,this.totalValue_power)
    await this.jiXieZongShuLiang_echarts('jiXieZongShuLiang',this.totalList_count,this.totalValue_count)
    await this.fenJiXieDongLi_echarts('fenJiXieDongLi',this.TLJList_power,this.TLJValue_power)
    await this.fenJiXieShuLiang_echarts('fenJiXieShuLiang',this.TLJList_count,this.TLJValue_count)
    //分机械动力表头
    this.fenJiXieDongLi_bigArr = getBig(this.TLJList_power.map((item,index) => {
            return {
              name:item,
              value:this.TLJValue_power[index] * 1
            }
          }),2)
    //分机械数量表头
    this.fenJiXieShuLiang_bigArr = getBig(this.TLJList_count.map((item,index) => {
            return {
              name:item,
              value:this.TLJValue_count[index] * 1
            }
          }),2)
    

    //获取农机数据  
      await this.machineryCount()
    echarts_plant.nongJiShuJu('nongJiShuJu', this.NJSJ_value)
    //获取投入品数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/inputData" 
      )
      .then(
        res => {
          this.touRuPinData = res.data.data;
        },
        err => {
           this.$message.error("投入品数据请求失败！");
        }
      );
    //获取投入品占比数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/inputData"
      )
      .then(
        res => {
          var InputsProportion = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.inputName == null) {
                item.inputName = 0;
              }
              if (item.consumption == null) {
                item.consumption = "--";
              }
              InputsProportion.push({name:item.inputName,value:item.consumption});
            }
          });
          this.initInputsProportion(InputsProportion);
        },
        err => {
           this.$message.error("投入品占比数据请求失败！");
        }
      )

      liquidfill.liquidfill_left('st_liqui_6','农机数据','20%')

    //获取地膜数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/findByinputName?inputName=地膜"
      )
      .then(
        res => {
          var inputsFilmX = [];
          var inputsFilmY1 = [];
          var inputsFilmY2 = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.consumption == null) {
                item.consumption = 0;
              }
              if (item.years == null) {
                item.years = "";
              }
              if (item.coverageArea == null) {
                item.coverageArea = "";
              }

              inputsFilmX.push(item.years);
              inputsFilmY1.push(item.consumption);
              inputsFilmY2.push(item.coverageArea);
            }
          });
          let arraySlice = res.data.data.slice(-2)
          console.log('aaaaaaaaaa==='+arraySlice)
          arraySlice.map((item,index) =>{
            if(index === 0){
              this.inputsFilmChart.oneData += item.consumption; //2018
            }
            if(index === 1){
              this.inputsFilmChart.twoData += item.consumption; //2019
            }
          })

          this.initInputsFilmChart(inputsFilmX, inputsFilmY1, inputsFilmY2);
        },
        err => {
          // this.$message.error("获取地膜数据请求失败！");
        }
      );


    //获取农药数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/findByinputName?inputName=农药"
      )
      .then(
        res => {
          let dataX = [];
          let dataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.consumption == null) {
                item.consumption = 0;
              }
              if (item.years == null) {
                item.years = "";
              }
              dataX.push(item.years);
              dataY.push(item.consumption);
            }
          });
          let arraySlice = res.data.data.slice(-2)
          arraySlice.map((item,index) =>{
            if(index === 0){
              this.inputsPesticide.oneData += item.consumption
            }
            if(index === 1){
              this.inputsPesticide.twoData += item.consumption
            }
          })
          this.initInputsPesticideChart(dataX, dataY);
        },
        err => {
          // this.$message.error("农药数据请求失败！");
        }
      );

    //获取农用柴油数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/findByinputName?inputName=农用柴油"
      )
      .then(
        res => {
          let dataX = [];
          let dataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.consumption == null) {
                item.consumption = 0;
              }
              if (item.years == null) {
                item.years = "";
              }
              dataX.push(item.years);
              dataY.push(item.consumption);
            }
          });
          let arraySlice = res.data.data.slice(-2)
          arraySlice.map((item,index) =>{
            if(index === 0){
              this.inputsSeed.oneData += item.consumption
            }
            if(index === 1){
              this.inputsSeed.twoData += item.consumption
            }
          })
          this.initInputsSeedChart(dataX, dataY);
        },
        err => {
          // this.$message.error("种子数据请求失败！");
        }
      );

    //获取化肥数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/findByinputName?inputName=化肥(折纯)" 
      )
      .then(
        res => {
          let dataX = [];
          let dataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.consumption == null) {
                item.consumption = 0;
              }
              if (item.years == null) {
                item.years = "";
              }
              dataX.push(item.years);
              dataY.push(item.consumption);
            }
          });
          let arraySlice = res.data.data.slice(-2)
          arraySlice.map((item,index) =>{
            if(index === 0){
              this.inputsChemicalChart.oneData += item.consumption
            }
            if(index === 1){
              this.inputsChemicalChart.twoData += item.consumption
            }
          })
          this.initInputsChemicalChart(dataX, dataY);
        },
        err => {
          // this.$message.error("化肥数据请求失败！");
        }
      );
    
    
    

    //农机作业情况
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/machine" 
      )
      .then(
        res => {
          // let dataX = [];
          // let dataY = [];
          // res.data.data.map(item => {
          //   if (item != null) {
          //     if (item.consumption == null) {
          //       item.consumption = 0;
          //     }
          //     if (item.years == null) {
          //       item.years = "";
          //     }
          //     dataX.push(item.years);
          //     dataY.push(item.consumption);
          //   }
          // });
          this.NJZY_year = res.body.data[0].data_year
          var importantAreaPlantDataX = [];
          var importantAreaPlantDataY1 = [];
          var importantAreaPlantDataY2 = [];
          var importantAreaPlantDataY3 = [];
          res.data.data.map(item => {
            if (item != null) {
                importantAreaPlantDataY1.push(item.plough_area);
                this.JG_TOTAL += item.plough_area;
                importantAreaPlantDataY2.push(item.seed_area);
                this.JB_TOTAL += item.seed_area;
                importantAreaPlantDataY3.push(item.harvest_area);
                this.JS_TOTAL += item.harvest_area;
              if(importantAreaPlantDataX.indexOf(item.type)<0){
                 importantAreaPlantDataX.push(item.type);
              }
            }
          });
          this.initArgJobStatesChart(importantAreaPlantDataX,importantAreaPlantDataY1,importantAreaPlantDataY2,importantAreaPlantDataY3);
        },
        err => {
          // this.$message.error("化肥数据请求失败！");
        }
      );
          //去除数组中为零的值
        await this.removeZero(this.NCPCJGList_count,this.NCPCJGValuet_count)
        await this.removeZero(this.TLJList_count,this.TLJValue_count)
        await this.removeZero(this.ZZYList_count,this.ZZYValue_count)
        await this.removeZero(this.XMJXList_count,this.XMJXValue_count)
        await this.removeZero(this.SCJXList_count,this.SCJXValue_count)

        await this.removeZero(this.TLJList_power,this.TLJValue_power)
        await this.removeZero(this.ZZYList_power,this.ZZYValue_power)
        await this.removeZero(this.NCPCJGList_power,this.NCPCJGValuet_power)
        await this.removeZero(this.XMJXList_power,this.XMJXValue_power)
        await this.removeZero(this.SCJXList_power,this.SCJXValue_power)


  },
  methods: {
    //去除数组中为零的值
    removeZero(nameArr,valueArr){
      let removeIndexArr = [] 
      valueArr.forEach((item,index) => {
        if(item == 0){
          removeIndexArr.push(index)
        }
      })
      removeIndexArr.reverse().forEach(item => {
        valueArr.splice(item,1)
        nameArr.splice(item,1)
      })
    },
    //获取农机总数量数据
    async getMachineCountData(){
      let res = await getMachineCount()
      this.NJZDL_year = res.data.dataYear
      //拖拉机类
      this.TLJValue_count.push(res.data.small.toFixed(0))
      this.TLJValue_count.push(res.data.middle.toFixed(0))
      this.TLJValue_count.push(res.data.large.toFixed(0))
      //种植机械
      this.ZZYValue_count.push(res.data.tillageCultivator.toFixed(0))
      this.ZZYValue_count.push(res.data.tillageSubsoiler.toFixed(0))
      this.ZZYValue_count.push(res.data.tillageTiller.toFixed(0))
      this.ZZYValue_count.push(res.data.tillageHarrow.toFixed(0))
      this.ZZYValue_count.push(res.data.tillagePlow.toFixed(0))
      this.ZZYValue_count.push(res.data.tillageFilm.toFixed(0))
      this.ZZYValue_count.push(res.data.tillageRotary.toFixed(0))
      this.ZZYValue_count.push(res.data.tillageCombine.toFixed(0))
      this.ZZYValue_count.push(res.data.planterNoTill.toFixed(0))
      this.ZZYValue_count.push(res.data.planterRice.toFixed(0))
      this.ZZYValue_count.push(res.data.planterPrecision.toFixed(0))
      this.ZZYValue_count.push(res.data.planterTransplanter.toFixed(0))
      this.ZZYValue_count.push(res.data.planterFertilizer.toFixed(0))
      this.ZZYValue_count.push(res.data.planterPaddy.toFixed(0))
      this.ZZYValue_count.push(res.data.waterPump.toFixed(0))
      this.ZZYValue_count.push(res.data.waterMachine.toFixed(0))
      this.ZZYValue_count.push(res.data.manageField.toFixed(0))
      this.ZZYValue_count.push(res.data.managePlantProtect.toFixed(0))
      this.ZZYValue_count.push(res.data.trimmerTea.toFixed(0))
      this.ZZYValue_count.push(res.data.trimmerFruit.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterPaddy.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterCorn.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterSoybean.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterRapeseed.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterPotato.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterPeanut.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterSugarbeet.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterSugarcane.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterCotton.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterVegetable.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterTea.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterGreenfeed.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterGrass.toFixed(0))
      this.ZZYValue_count.push(res.data.harvesterStraw.toFixed(0))
      this.ZZYValue_count.push(res.data.bander.toFixed(0))
      this.ZZYValue_count.push(res.data.thresher.toFixed(0))
      this.ZZYValue_count.push(res.data.dryerGrain.toFixed(0))
      this.ZZYValue_count.push(res.data.dryerFruit.toFixed(0))
      this.ZZYValue_count.push(res.data.seedProcess.toFixed(0))
      this.ZZYValue_count.push(res.data.freshKeep.toFixed(0))
      this.ZZYValue_count.push(res.data.greenhouseGutter.toFixed(0))
      this.ZZYValue_count.push(res.data.greenhouseHelio.toFixed(0))
      this.ZZYValue_count.push(res.data.greenhousePlastic.toFixed(0))
      //农产品初加工机械
      this.NCPCJGValuet_count.push(res.data.engineDiesel.toFixed(0))
      this.NCPCJGValuet_count.push(res.data.motorElectric.toFixed(0))
      this.NCPCJGValuet_count.push(res.data.processorFood.toFixed(0))
      this.NCPCJGValuet_count.push(res.data.processorOil.toFixed(0))
      this.NCPCJGValuet_count.push(res.data.processorCotton.toFixed(0))
      this.NCPCJGValuet_count.push(res.data.processorFruit.toFixed(0))
      this.NCPCJGValuet_count.push(res.data.processorTea.toFixed(0))
      //畜牧机械
      this.XMJXValue_count.push(res.data.processorFeed.toFixed(0))
      this.XMJXValue_count.push(res.data.machineFeed.toFixed(0))
      this.XMJXValue_count.push(res.data.machineOxygen.toFixed(0))
      //水产机械
      this.SCJXValue_count.push(res.data.machineOxygen.toFixed(0))
      this.SCJXValue_count.push(res.data.machineFish.toFixed(0))
      this.SCJXValue_count.push(res.data.machineAutofeed.toFixed(0))
      //大类统计
      this.totalValue_count.push((res.data.small * 1 + res.data.middle * 1 + res.data.large * 1).toFixed(0))   //拖拉机及配套机械
      this.totalValue_count.push((res.data.tillageCultivator * 1 + res.data.tillageSubsoiler * 1 + res.data.tillageTiller * 1 + res.data.tillageHarrow * 1 + 
                           res.data.tillagePlow * 1 + res.data.tillageFilm * 1 + res.data.tillageRotary * 1 + res.data.tillageCombine * 1 + 
                           res.data.planterNoTill * 1 + res.data.planterRice * 1 + res.data.planterPrecision * 1 + res.data.planterTransplanter * 1 + 
                           res.data.planterFertilizer * 1 + res.data.planterPaddy * 1 + res.data.waterPump * 1 + res.data.waterMachine * 1 + 
                           res.data.manageField * 1 + res.data.managePlantProtect * 1 + res.data.trimmerTea * 1 + res.data.trimmerFruit * 1 + 
                           res.data.harvesterPaddy * 1 + res.data.harvesterCorn * 1 + res.data.harvesterSoybean * 1 + res.data.harvesterRapeseed * 1 + 
                           res.data.harvesterPotato * 1 + res.data.harvesterPeanut * 1 + res.data.harvesterSugarbeet * 1 + res.data.harvesterSugarcane * 1 + 
                           res.data.harvesterCotton * 1 + res.data.harvesterVegetable * 1 + res.data.harvesterTea * 1 + res.data.harvesterGreenfeed * 1 + 
                           res.data.harvesterGrass * 1 + res.data.harvesterStraw * 1 + res.data.bander * 1 + res.data.thresher * 1 + 
                           res.data.dryerGrain * 1 + res.data.dryerFruit * 1 + res.data.seedProcess * 1 + res.data.freshKeep * 1 + 
                           res.data.greenhouseGutter * 1 + res.data.greenhouseHelio * 1 + res.data.greenhousePlastic * 1).toFixed(0))  //种植机械
      this.totalValue_count.push((res.data.engineDiesel * 1 + res.data.motorElectric * 1 + res.data.processorFood * 1 + res.data.processorOil * 1 +
                           res.data.processorCotton * 1 + res.data.processorFruit * 1 + res.data.processorTea * 1).toFixed(0))//农产品初加工机械
      this.totalValue_count.push((res.data.processorFeed * 1 + res.data.machineFeed * 1 + res.data.processorProduct * 1).toFixed(0))  //畜牧机械
      this.totalValue_count.push((res.data.machineOxygen * 1 + res.data.machineFish * 1 + res.data.machineAutofeed * 1).toFixed(0))  //水产机械
      console.log(res.data)
    },
    //获取农机总动力数据
    async getMachinePowerData(){
      let res = await getMachinePower()
      this.JXZSL_year = res.data.dataYear
      //拖拉机类
      this.TLJValue_power.push(res.data.small.toFixed(0))
      this.TLJValue_power.push(res.data.middle.toFixed(0))
      this.TLJValue_power.push(res.data.large.toFixed(0))
      //种植机械
      this.ZZYValue_power.push(res.data.tillageCultivator.toFixed(0))
      this.ZZYValue_power.push(res.data.tillageSubsoiler.toFixed(0))
      this.ZZYValue_power.push(res.data.tillageTiller.toFixed(0))
      this.ZZYValue_power.push(res.data.tillageHarrow.toFixed(0))
      this.ZZYValue_power.push(res.data.tillagePlow.toFixed(0))
      this.ZZYValue_power.push(res.data.tillageFilm.toFixed(0))
      this.ZZYValue_power.push(res.data.tillageRotary.toFixed(0))
      this.ZZYValue_power.push(res.data.tillageCombine.toFixed(0))
      this.ZZYValue_power.push(res.data.planterNoTill.toFixed(0))
      this.ZZYValue_power.push(res.data.planterRice.toFixed(0))
      this.ZZYValue_power.push(res.data.planterPrecision.toFixed(0))
      this.ZZYValue_power.push(res.data.planterTransplanter.toFixed(0))
      this.ZZYValue_power.push(res.data.planterFertilizer.toFixed(0))
      this.ZZYValue_power.push(res.data.planterPaddy.toFixed(0))
      this.ZZYValue_power.push(res.data.waterPump.toFixed(0))
      this.ZZYValue_power.push(res.data.waterMachine.toFixed(0))
      this.ZZYValue_power.push(res.data.manageField.toFixed(0))
      this.ZZYValue_power.push(res.data.managePlantProtect.toFixed(0))
      this.ZZYValue_power.push(res.data.trimmerTea.toFixed(0))
      this.ZZYValue_power.push(res.data.trimmerFruit.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterPaddy.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterCorn.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterSoybean.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterRapeseed.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterPotato.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterPeanut.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterSugarbeet.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterSugarcane.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterCotton.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterVegetable.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterTea.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterGreenfeed.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterGrass.toFixed(0))
      this.ZZYValue_power.push(res.data.harvesterStraw.toFixed(0))
      this.ZZYValue_power.push(res.data.bander.toFixed(0))
      this.ZZYValue_power.push(res.data.thresher.toFixed(0))
      this.ZZYValue_power.push(res.data.dryerGrain.toFixed(0))
      this.ZZYValue_power.push(res.data.dryerFruit.toFixed(0))
      this.ZZYValue_power.push(res.data.seedProcess.toFixed(0))
      this.ZZYValue_power.push(res.data.freshKeep.toFixed(0))
      this.ZZYValue_power.push(res.data.greenhouseGutter.toFixed(0))
      this.ZZYValue_power.push(res.data.greenhouseHelio.toFixed(0))
      this.ZZYValue_power.push(res.data.greenhousePlastic.toFixed(0))
      //农产品初加工机械
      this.NCPCJGValuet_power.push(res.data.engineDiesel.toFixed(0))
      this.NCPCJGValuet_power.push(res.data.motorElectric.toFixed(0))
      this.NCPCJGValuet_power.push(res.data.processorFood.toFixed(0))
      this.NCPCJGValuet_power.push(res.data.processorOil.toFixed(0))
      this.NCPCJGValuet_power.push(res.data.processorCotton.toFixed(0))
      this.NCPCJGValuet_power.push(res.data.processorFruit.toFixed(0))
      this.NCPCJGValuet_power.push(res.data.processorTea.toFixed(0))
      //畜牧机械
      this.XMJXValue_power.push(res.data.processorFeed.toFixed(0))
      this.XMJXValue_power.push(res.data.machineFeed.toFixed(0))
      this.XMJXValue_power.push(res.data.machineOxygen.toFixed(0))
      //水产机械
      this.SCJXValue_power.push(res.data.machineOxygen.toFixed(0))
      this.SCJXValue_power.push(res.data.machineFish.toFixed(0))
      this.SCJXValue_power.push(res.data.machineAutofeed.toFixed(0))
      //大类统计
      this.totalValue_power.push((res.data.small * 1 + res.data.middle * 1 + res.data.large * 1).toFixed(0))   //拖拉机及配套机械
      this.totalValue_power.push((res.data.tillageCultivator * 1 + res.data.tillageSubsoiler * 1 + res.data.tillageTiller * 1 + res.data.tillageHarrow * 1 + 
                           res.data.tillagePlow * 1 + res.data.tillageFilm * 1 + res.data.tillageRotary * 1 + res.data.tillageCombine * 1 + 
                           res.data.planterNoTill * 1 + res.data.planterRice * 1 + res.data.planterPrecision * 1 + res.data.planterTransplanter * 1 + 
                           res.data.planterFertilizer * 1 + res.data.planterPaddy * 1 + res.data.waterPump * 1 + res.data.waterMachine * 1 + 
                           res.data.manageField * 1 + res.data.managePlantProtect * 1 + res.data.trimmerTea * 1 + res.data.trimmerFruit * 1 + 
                           res.data.harvesterPaddy * 1 + res.data.harvesterCorn * 1 + res.data.harvesterSoybean * 1 + res.data.harvesterRapeseed * 1 + 
                           res.data.harvesterPotato * 1 + res.data.harvesterPeanut * 1 + res.data.harvesterSugarbeet * 1 + res.data.harvesterSugarcane * 1 + 
                           res.data.harvesterCotton * 1 + res.data.harvesterVegetable * 1 + res.data.harvesterTea * 1 + res.data.harvesterGreenfeed * 1 + 
                           res.data.harvesterGrass * 1 + res.data.harvesterStraw * 1 + res.data.bander * 1 + res.data.thresher * 1 + 
                           res.data.dryerGrain * 1 + res.data.dryerFruit * 1 + res.data.seedProcess * 1 + res.data.freshKeep * 1 + 
                           res.data.greenhouseGutter * 1 + res.data.greenhouseHelio * 1 + res.data.greenhousePlastic * 1).toFixed(0))  //种植机械
      this.totalValue_power.push((res.data.engineDiesel * 1 + res.data.motorElectric * 1 + res.data.processorFood * 1 + res.data.processorOil * 1 +
                           res.data.processorCotton * 1 + res.data.processorFruit * 1 + res.data.processorTea * 1).toFixed(0))//农产品初加工机械
      this.totalValue_power.push((res.data.processorFeed * 1 + res.data.machineFeed * 1 + res.data.processorProduct * 1).toFixed(0))  //畜牧机械
      this.totalValue_power.push((res.data.machineOxygen * 1 + res.data.machineFish * 1 + res.data.machineAutofeed * 1).toFixed(0))  //水产机械
      console.log(this.totalValue_power)
    },
    //获取农业从业人员数据
    async getAgriculturalPopulationData(){
      let res = await getAgriculturalPopulation()
      this.NYCY_year = res.data.dataTime
      this.NYCYValue = res.data
    },
    //获取农机数据  
    async machineryCount(){
      let res = await machinerycount()
      this.NJSJ_year = res.data.data[0].years
      for(var i = 0;i < res.data.data.length - 1;i++){
      for(var j = res.data.data.length - 1;j > i;j--){
        if(res.data.data[i].value * 1 < res.data.data[j].value * 1){
          var temp = res.data.data[i]
          res.data.data[i] = res.data.data[j]
          res.data.data[j] = temp
        }
      }
    }
      this.NJSJ_value = res.data.data
      console.log(this.NJSJ_value)
    },
    //投入品投入占比
    initInputsProportion(data) {
      chart.EchartsInputsProportion("inputsProportion", data);
    },
    //地膜
    initInputsFilmChart(dataX, dataY1, dataY2) {
      chart.EchartsInputsFilmChart("inputsFilmChart", dataX, dataY1, dataY2);
    },
    //化肥
    initInputsChemicalChart(dataX, dataY) {
      chart.EchartsInputsChemicalChart("inputsChemicalChart", dataX, dataY);
    },
    //柴油
    initInputsSeedChart(dataX, dataY) {
      chart.EchartsInputsSeedChart("inputsSeedChart", dataX, dataY);
    },
    //农药
    initInputsPesticideChart(dataX, dataY) {
      chart.EchartsInputsPesticideChart("inputsPesticideChart", dataX, dataY);
    },
    //农机作业情况
    initArgJobStatesChart(dataX, dataY1,dataY2,dataY3) {
      chart.argJobStatesChart("argJobStates", dataX, dataY1,dataY2,dataY3);
    },
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_agricultural_subject",
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

    getDialogPageData(currentPage) {
      //获取弹框分页数据
      let that = this;
      this.$http
        .get(
          api.ip + "/web/agriculturalInputs/pageList",
          {
            params: {
              //createTime: that.createTime,
              currentPage: currentPage,
              pageSize: 10,
              inputType: that.inputType,
              inputBrand: that.inputBrand
            }
          }
        )
        .then(
          res => {
            this.DialogPageData = res.body.data;
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },
    // 投入品弹窗
    getDialogProportionPageData(currentPage) {
      //获取弹框分页数据
      let that = this;
      this.$http
        .get(
          api.ip + "/web/agriculturalInputs/inspectionList",
          {
            params: {
              //createTime: that.createTime,
              currentPage: currentPage,
              pageSize: 10,
              inputType: that.inputType,
              inputBrand: that.inputBrand
            }
          }
        )
        .then(
          res => {
            this. DialogProportionData = res.body.data;
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },

    //显示弹框 投入品数据
    handleCount() {
      this.inputType = "";
      this.inputBrand = "";
      this.getDialogPageData(1);
      this.dialogPlantCount = false;
    },

    //显示弹框 投入品
    handleInputsProportion() {
      // this.inputType = "";
      this.inputBrand = "";
      this.getDialogProportionPageData(1);
      this.dialogProportiChart = true;
    },

    //显示弹框-农用柴油
    handleMulchFilm() {
      this.inputType = "柴油";
      this.inputBrand = "";
      this.getDialogPageData(1);
      this.dialogPlantHistoryChart = true;
    },

    //显示弹框-化肥
    handleFertilizer() {
      this.inputType = "化肥";
      this.inputBrand = "";
      this.getDialogPageData(1);
      this.dialogPlantHistoryAreaChart = true;
    },

    //显示弹框-农药
    handlePesticide() {
      this.inputType = "农药";
      this.inputBrand = "";
      this.getDialogPageData(1);
      this.dialogPlantHistoryOutputChart = true;
    },

    //显示弹框-地膜
    handleDiMo() {
      this.inputType = "地膜";
      this.inputBrand = "";
      this.getDialogPageData(1);
      this.dialogDiMo = true;
    },

    //弹框数据查询
    searchData() {
      this.getDialogPageData(1);
    },

    //翻页
    handleCurrentChange(val) {
      this.getDialogPageData(val);
    },
    handleCurrentChangeProportion(val) {
      this.getDialogProportionPageData(val);
    },
    // 弹窗回车键查询
    searchEnter(e){
      let keyCode = window.event? e.keyCode:e.which;
      if (keyCode == 13){
        this.getDialogPageData(1);
      }
    },

    //农机总动力echarts图表
    nongJiZongDongLi_echarts(id, xData, data){
      console.log(data)
      let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                  }
                },
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '15%',
                left: '3%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12'
                        },
                        formatter: function (value) {           //文字太长显示两个字！！！！！！！！！！
                          return (value.length > 2 ? (value.slice(0,2)+"...") : value )
                        }
                    },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单位/千瓦',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                },
                // {
                //     // min: '0',
                //     // max: '800',
                //     name: '万亩次',
                //     type: 'value',
                //     axisLabel: {    //设置x轴文字颜色
                //         color: '#fff'
                //     },
                //     nameTextStyle: {
                //         color: '#fff'
                //     },
                //     splitLine: {    //设置分隔线
                //         show: false
                //     },
                //     axisLine:{      //设置轴线是否显示
                //         show: false
                //     }
                // }
            ],
            series: [
                {
                    name: '动力',
                    type: 'bar',
                    // stack: '总量',
                    data: data,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#32c5e9' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#32c5e9' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);


        changeSize(myChart)

        myChart.getZr().on("click", async (param) => {
          var point = [ param.offsetX, param.offsetY ];
          if (myChart.containPixel('grid', point)) {
              var xIndex = myChart.convertFromPixel({seriesIndex : 0}, point)[0];
              var op = myChart.getOption();
              var name = op.xAxis[0].data[xIndex];
          }
          if(name == '拖拉机及配套机械'){
            this.fenJiXieDongLi_value[0] = this.TLJList_power
            this.fenJiXieDongLi_value[1] = this.TLJValue_power
            this.fenJiXieDongLi_name = name
          }else if(name == '种植机械'){
            this.fenJiXieDongLi_value[0] = this.ZZYList_power
            this.fenJiXieDongLi_value[1] = this.ZZYValue_power
            this.fenJiXieDongLi_name = name
          }else if(name == '农产品初加工机械'){
            this.fenJiXieDongLi_value[0] = this.NCPCJGList_power
            this.fenJiXieDongLi_value[1] = this.NCPCJGValuet_power
            this.fenJiXieDongLi_name = name
          }else if(name == '畜牧机械'){
            this.fenJiXieDongLi_value[0] = this.XMJXList_power
            this.fenJiXieDongLi_value[1] = this.XMJXValue_power
            this.fenJiXieDongLi_name = name
          }else if(name == '水产机械'){
            this.fenJiXieDongLi_value[0] = this.SCJXList_power
            this.fenJiXieDongLi_value[1] = this.SCJXValue_power
            this.fenJiXieDongLi_name = name
          }
          this.fenJiXieDongLi_bigArr = getBig(this.fenJiXieDongLi_value[0].map((item,index) => {
            return {
              name:item,
              value:this.fenJiXieDongLi_value[1][index] * 1
            }
          }),2)
          this.fenJiXieDongLi_echarts('fenJiXieDongLi',this.fenJiXieDongLi_value[0],this.fenJiXieDongLi_value[1])
        });
    },

    //机械总数量echarts图表
    jiXieZongShuLiang_echarts(id, xData, data){
      let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                  }
                },
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12'
                        },
                        formatter: function (value) {           //文字太长显示两个字！！！！！！！！！！
                          return (value.length > 2 ? (value.slice(0,2)+"...") : value )
                        }
                    },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单位/台',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                },
                // {
                //     // min: '0',
                //     // max: '800',
                //     name: '万亩次',
                //     type: 'value',
                //     axisLabel: {    //设置x轴文字颜色
                //         color: '#fff'
                //     },
                //     nameTextStyle: {
                //         color: '#fff'
                //     },
                //     splitLine: {    //设置分隔线
                //         show: false
                //     },
                //     axisLine:{      //设置轴线是否显示
                //         show: false
                //     }
                // }
            ],
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    // stack: '总量',
                    data: data,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#44EFFF'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#9fe6b8' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#9fe6b8' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);


        changeSize(myChart)

        myChart.getZr().on("click", async (param) => {
          var point = [ param.offsetX, param.offsetY ];
          if (myChart.containPixel('grid', point)) {
              var xIndex = myChart.convertFromPixel({seriesIndex : 0}, point)[0];
              var op = myChart.getOption();
              var name = op.xAxis[0].data[xIndex];
          }
          if(name == '拖拉机及配套机械'){
            this.fenJiXieShuLiang_value[0] = this.TLJList_power
            this.fenJiXieShuLiang_value[1] = this.TLJValue_power
            this.fenJiXieShuLiang_name = name
          }else if(name == '种植机械'){
            this.fenJiXieShuLiang_value[0] = this.ZZYList_power
            this.fenJiXieShuLiang_value[1] = this.ZZYValue_power
            this.fenJiXieShuLiang_name = name
          }else if(name == '农产品初加工机械'){
            this.fenJiXieShuLiang_value[0] = this.NCPCJGList_count
            this.fenJiXieShuLiang_value[1] = this.NCPCJGValuet_count
            this.fenJiXieShuLiang_name = name
          }else if(name == '畜牧机械'){
            this.fenJiXieShuLiang_value[0] = this.XMJXList_count
            this.fenJiXieShuLiang_value[1] = this.XMJXValue_count
            this.fenJiXieShuLiang_name = name
          }else if(name == '水产机械'){
            this.fenJiXieShuLiang_value[0] = this.SCJXList_count
            this.fenJiXieShuLiang_value[1] = this.SCJXValue_count
            this.fenJiXieShuLiang_name = name
          }
          this.fenJiXieShuLiang_bigArr = getBig(this.fenJiXieShuLiang_value[0].map((item,index) => {
            return {
              name:item,
              value:this.fenJiXieShuLiang_value[1][index] * 1
            }
          }),2)
          this.fenJiXieShuLiang_echarts('fenJiXieShuLiang',this.fenJiXieShuLiang_value[0],this.fenJiXieShuLiang_value[1])
        });
    },

    //分机械动力echarts图表
    fenJiXieDongLi_echarts(id, xData, data){
      let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                  }
                },
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '18%',
                left: '2%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
            dataZoom: [{          //滚动条设置！！
                    show: true,       //设置是否显示
                    height: 10,       //设置高度
                    xAxisIndex: [
                        0
                    ],
                    bottom: '0%',         //设置位置
                    start: 0,         //设置起始位置
                    end: 100,          //设置结束位置
                    // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    // handleSize: '110%',
                    handleStyle:{
                        color:"#01FBCC",        //设置滚动条两头的颜色
                    },
                    textStyle:{
                     color:"#fff"               //设置鼠标悬停时显示文字的颜色
                    },
                    borderColor:"#90979c"       //设置整个滚动条边框的颜色
                }, {                    //可以通过鼠标滚轮控制
                    type: "inside",
                    show: true,
                    height: 15,
                    start: 1,
                    end: 35
                }],
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12'
                        },
                        formatter: function (value) {           //文字太长显示两个字！！！！！！！！！！
                          return (value.length > 2 ? (value.slice(0,2)+"...") : value )
                        }
                    },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单位/千瓦',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                },
                // {
                //     // min: '0',
                //     // max: '800',
                //     name: '万亩次',
                //     type: 'value',
                //     axisLabel: {    //设置x轴文字颜色
                //         color: '#fff'
                //     },
                //     nameTextStyle: {
                //         color: '#fff'
                //     },
                //     splitLine: {    //设置分隔线
                //         show: false
                //     },
                //     axisLine:{      //设置轴线是否显示
                //         show: false
                //     }
                // }
            ],
            series: [
                {
                    name: '动力',
                    type: 'bar',
                    // stack: '总量',
                    data: data,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#44EFFF'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ffdb5c' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#ffdb5c' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);


        changeSize(myChart)

        myChart.on("click", async (param) => {
          console.log(param)
            // this.params_year.year = param.name
            // await this.getCropStatistics()
            // await this.buTongZuoWu_echarts('buTongZuoWu', this.BTZW_name, this.BTZW_happen, this.BTZW_defense)
            
            // await this.getDiseaseStatistics()
            // await this.buTongJiBing_echarts('buTongJiBing', this.BTJB_name, this.BTJB_happen, this.BTJB_defense)
        });
    },

    //分机械数量echarts图表
    fenJiXieShuLiang_echarts(id, xData, data){
      let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                  }
                },
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '18%',
                left: '2%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
            dataZoom: [{          //滚动条设置！！
                    show: true,       //设置是否显示
                    height: 10,       //设置高度
                    xAxisIndex: [
                        0
                    ],
                    bottom: '0%',         //设置位置
                    start: 0,         //设置起始位置
                    end: 100,          //设置结束位置
                    // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    // handleSize: '110%',
                    handleStyle:{
                        color:"#01FBCC",        //设置滚动条两头的颜色
                    },
                    textStyle:{
                     color:"#fff"               //设置鼠标悬停时显示文字的颜色
                    },
                    borderColor:"#90979c"       //设置整个滚动条边框的颜色
                }, {                    //可以通过鼠标滚轮控制
                    type: "inside",
                    show: true,
                    height: 15,
                    start: 1,
                    end: 35
                }],
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12'
                        },
                        formatter: function (value) {           //文字太长显示两个字！！！！！！！！！！
                          return (value.length > 2 ? (value.slice(0,2)+"...") : value )
                        }
                    },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单位/台',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                },
                // {
                //     // min: '0',
                //     // max: '800',
                //     name: '万亩次',
                //     type: 'value',
                //     axisLabel: {    //设置x轴文字颜色
                //         color: '#fff'
                //     },
                //     nameTextStyle: {
                //         color: '#fff'
                //     },
                //     splitLine: {    //设置分隔线
                //         show: false
                //     },
                //     axisLine:{      //设置轴线是否显示
                //         show: false
                //     }
                // }
            ],
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    // stack: '总量',
                    data: data,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#44EFFF'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#8378ea' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#8378ea' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);


        changeSize(myChart)

        myChart.on("click", async (param) => {
          console.log(param)
            // this.params_year.year = param.name
            // await this.getCropStatistics()
            // await this.buTongZuoWu_echarts('buTongZuoWu', this.BTZW_name, this.BTZW_happen, this.BTZW_defense)
            
            // await this.getDiseaseStatistics()
            // await this.buTongJiBing_echarts('buTongJiBing', this.BTJB_name, this.BTJB_happen, this.BTJB_defense)
        });
    },
  }
};
</script>
<style>
</style>

