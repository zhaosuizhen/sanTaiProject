<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">
      
      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div">
          <div class="management-charts-title">主体数据(2019)</div>
          <div class="content_box ZTSJ_box">
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_left">
                <!-- <p>{{(YZPZ_value[2].value / YZPZ_total * 100).toFixed(2)}}%</p> -->
              </div>
              <!-- <p>{{YZPZ_value[2].name}}</p> -->
              <p>基地数量</p>
              <!-- <p><span style="color:#3ED3FF">{{YZPZ_value[2].value}}</span>吨</p> -->
              <p><span style="color:#3ED3FF">{{count}}</span>个</p>
            </div>
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_center">
                <!-- <p>{{(YZPZ_value[1].value / YZPZ_total * 100).toFixed(2)}}%</p> -->
              </div>
              <!-- <p>{{YZPZ_value[1].name}}</p> -->
              <p>注册资金</p>
              <!-- <p><span style="color:#FFE56B">{{YZPZ_value[1].value}}</span>吨</p> -->
              <p><span style="color:#FFE56B">{{(capital/10000).toFixed(1)}}</span>亿元</p>
            </div>
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_right">
                <!-- <p>{{(YZPZ_value[0].value / YZPZ_total * 100).toFixed(2)}}%</p> -->
              </div>
              <!-- <p>{{YZPZ_value[0].name}}</p> -->
              <p>年产值</p>
              <!-- <p><span style="color:#60D6B4">{{YZPZ_value[0].value}}</span>吨</p> -->
              <p><span style="color:#60D6B4">11.5</span>亿元</p>
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

        <!-- <div class="management-top-div" @click="handleUnitType"> -->
        <div class="management-top-div">
          <div class="management-charts-title">麦冬鲜/干产量({{MD_year}})</div>
          <div class="content_box MD_gan_xian" style="position: relative;">
            <div class="MD_left_echarts">
                <div class="echarts_sm" id="MD_small"></div>

                <div class="echarts_bg" id="MD_big"></div>

                <div class="center_text">
                  <h1>{{MD_xian_yield}}</h1>
                  <p>总产量/吨</p>
                </div>
            </div>

            <div class="right_text">
              <div class="right_text_top">
                <p>鲜产量/吨</p>
                <h1 style="color:#33E6FF">{{MD_xian_yield}}</h1>
              </div>

              <div class="right_text_bottom">
                <p>干产量/吨</p>
                <h1 style="color:#FEAF5C">{{MD_gan_yield}}</h1>
              </div>
            </div>
          </div>
          <!-- <div id="manageZhuTiChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <div class="mapPointExample mapPointExample_MDZZ"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div">
          <div class="management-charts-title">视频监控</div> <!--@click="handleLastyearChart"-->
          <div class="content_box">
            <div class="null_img_sm"></div>
            <div class="dataUpdate">数据更新中</div>
            <!-- <video src=""></video> -->
          </div>
          <!-- <div id="geographyLastYearChart" class="management-charts-height"></div> -->
        </div>

        <!-- <div class="management-top-div" @click="handleTownsChart"> -->
        <div class="management-top-div3" style="height:95%;position: relative;">
          <div class="management-charts-title">三台麦冬成果</div>
          <div class="content_box santaiMD_img" style="padding:10px">
            <!-- <img src="../../assets/santai_img/sanTaiMD.png" width="100%" height="100%" alt=""> -->
          </div>
          
          <div class="img_over_box"></div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6">
        <div class="management-bottom-index-div" >
          <div class="management-charts-title">乡镇种植规模({{XZZZGM_year}})</div>
          <div class="text_box">
              <div v-for="(item,index) in XZZZGM_bigArr" :key="index">
                <!-- <span>{{YZCB_time[YZCB_time.length - 1]}}饲料成本</span> -->
                <span>{{item.name}}</span>
                <span style="color:#83E914">{{item.value}}亩</span>
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
            <div class="echarts_box" id="xiangZhenZhongZhi"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">麦冬加工产品</div>
          <div class="content_box" style="overflow:hidden">
            <ul class="MDJGCP" id="MDJGCP">
              <li v-for="(item,index) in MGJGCP_list" :key="index">
                <div class="MDJGCP_li_left">
                  <img :src="item.imgUrl" height="100%" width="100%" alt="">
                </div>

                <div class="MDJGCP_li_right">
                  <h3>{{item.productName}}</h3>
                  <p>{{item.introduction}}</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- <div id="manageJingYingChart" class="management-charts-height"></div> -->
        </div>
      </el-col>



    </div>
    <!--经营主体数据弹窗-->
    <div class="vis-geography">
      <el-dialog title="经营主体数据" :visible.sync="dialogGeographyStatisticsChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim = "managementName"
              placeholder="主体名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="managementName" label="主体名称" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="areaCovered" label="占地面积(亩)" :show-overflow-tooltip="true" :resizable="false">
            <!--<template slot-scope="scope">-->
              <!--<span>{{scope.row.areaCovered}}</span>-->
            <!--</template>-->
          </el-table-column>
          <el-table-column property="registeredCapital" label="主体产值(万元)" :show-overflow-tooltip="true" :resizable="false">
            <!--<template slot-scope="scope">-->
              <!--<span>{{scope.row.registeredCapital.toFixed(1)}}</span>-->
            <!--</template>-->
          </el-table-column>

          <el-table-column property="unitType" label="主体类型" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="township" label="所属乡镇" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="registrationDate" label="注册日期" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
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

    <!--主体类型统计弹窗-->
    <div class="vis-geography">
      <el-dialog title="主体类型统计" :visible.sync="dialogGeographyStyleChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim = "managementName"
              placeholder="主体名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn"  @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="managementName" label="主体名称" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="areaCovered" label="占地面积(亩)" :show-overflow-tooltip="true" :resizable="false">
            <!--<template slot-scope="scope">-->
              <!--<span>{{scope.row.areaCovered.toFixed(1)}}</span>-->
            <!--</template>-->
          </el-table-column>
          <el-table-column property="unitType" label="主体类型" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="legalName" label="法人" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="mobilePhone" label="联系电话" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
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

    <!--乡镇主体分布弹窗-->
    <div class="vis-geography">
      <el-dialog title="乡镇主体分布" :visible.sync="dialogGeographyTownsChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim= "managementName"
              placeholder="主体名称"
              class="dialog-input"
              clearable
              @keydown.enter.native="searchEnter"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="address"
                           label="乡镇名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="managementName"
                           label="主体名称"
                           :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="unitType" label="类型" style="width: 10%;"></el-table-column>
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
import chart1 from "../../js/visualiza/visLivestock";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import echarts from '../../js/santaiEcharts/visOphiopogon'
import echarts_home from '../../js/santaiEcharts/home'
import { getBreedProportion, getMaterialPrice, getLiveStockYield } from '../../api/visLivestock'
import { business, maidongYield, XZZZ_plant, product } from '../../api/visOphiopogon'
import { getcoststructure } from '../../api/home'
import { startmarquee, getBig } from '../../util/util'
export default {
  data() {
    return {
      //麦冬加工产品列表
      MGJGCP_list: [],
      //主体数据
      capital: 0,
      count: 0,
      //麦冬鲜/干产量数据
      MD_year:0,
      MD_yield:[],
      MD_xian_yield: 0,
      MD_gan_yield: 0, 
      //乡镇种植规模
      XZZZGM_city: [],
      XZZZGM_data: [],
      XZZZGM_bigArr: [],
      XZZZGM_year: 0,
      //养殖成本结构数据  
      YZCB_time: [],    //时间
      YZCB_feed: [],    //饲料成本
      YZCB_bread: [],   //养殖成本
      YZCB_pig: [],     //仔猪成本
      //饲料原料价格数据
      table_YM:[],
      table_DP:[],
      time:[],
      siChuanYuMi:[],
      siChuanDoupo:[],
      quanGuoYuMi:[],
      quanGuoDoupo:[],
      //养殖产量占比数据
      YZCL_data: [],
      siLiaoYuanLiao_flag: true,
      // 控制弹窗显示隐藏
      dialogGeographyStyleChart: false,
      dialogGeographyTownsChart: false,
      dialogGeographyStatisticsChart: false,
      // 进度条宽度
      strokeWidth: 12,
      //经营主体数据
      jingYingZhuTiData: {},
      //主体类型饼图数据
      qiYeLeiXingChart: {},
      //历年主体数量
      qiYeCount: {
        counts: [],
        year: []
      },
      // areaUnit:'亩',
      // sumsUnit:'万元',
      //获取各个乡镇主体数量柱形图
      xiangZhenCount: {
        name: [],
        count: []
      },
      //主体规模排行
      qiYeRank: {
        type: [],
        sum: []
      },
      //弹框分页数据
      DialogPageData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1,
      },
      // dialogYear:'',
      //作物品种类别-搜索框
      managementName: "",

      managementTextMapping: {
        name: "经营主体名称",
        type: "主体类型",
        township: "所属乡镇",
        create_date: "成立日期",
        address: "详细地址",
      },
      //三品一标企业
      tabThirdgrade: 'firstWgh',
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    this.initLayer();
    // startmarquee(30,30,1,"roll_table_YM"); //表格自动滚动
    // startmarquee(30,30,1,"roll_table_DP"); //表格自动滚动

    //获取主体数据
    await this.getBusiness()
    //获取鲜/干麦冬
    await this.getMaidongYield()
    //获取乡镇种植规模
    await this.getPlant()
    //麦冬产品信息
    await this.getProduct()


    //获取养殖规模数据————dataType=0：存栏、dataType=1：出栏
    await this.getLiveStockYieldData()
    //获取饲料原料价格数据 
    await this.getMaterialPriceData()
    //获取养殖产量占比数据 
    //await this.getBreedProportionData()
    //获取养殖成本结构数据  
    await this.getCostStructure()


    startmarquee(3,30,1,"MDJGCP"); //表格自动滚动

    echarts.MD_small('MD_small')
    echarts.MD_big('MD_big', this.MD_yield)
    echarts.xiangZhenZhongZhi('xiangZhenZhongZhi', this.XZZZGM_city, this.XZZZGM_data )
    // echarts.siLiaoYuanLiao_YM('SLYLJG_YM', this.time, this.siChuanYuMi, this.quanGuoYuMi )
    // echarts_home.yangZhiChengBen('yangZhiChengBen', this.YZCB_time, this.YZCB_bread, this.YZCB_feed, this.YZCB_pig)
    // echarts.yangZhiChanLiang('yangZhiChanLiang', this.YZCL_data)
    liquidfill.liquidfill('st_liqui_1','养殖品种')
    //获取经营主体数据
    this.$http
      .get(
        api.ip + "/web/management/getbusinessdata"
      )
      .then(
        res => {
          // console.log(res)
          // debugger;
          this.jingYingZhuTiData = res.data.data;
          this.jingYingZhuTiData.area = this.jingYingZhuTiData.area.toFixed(2)
          //this.jingYingZhuTiData.area = this.jingYingZhuTiData.area.toFixed(2)
          /*this.jingYingZhuTiData.sums = this.jingYingZhuTiData.sums
          let largeFlag = false;
          if(this.jingYingZhuTiData.consumption > 10000){
            largeFlag = true;
          }
          if(this.jingYingZhuTiData.sums > 10000000){
            largeFlag = true;
          }
          if(largeFlag){
            this.unit = "万亩"
            this.sumsUnit = "亿元"
            this.jingYingZhuTiData.area = (this.jingYingZhuTiData.area / 10000).toFixed(2)
            this.jingYingZhuTiData.sums = (this.jingYingZhuTiData.sums / 10000).toFixed(2)
          }*/
          /*this.jingYingZhuTiData.area = this.jingYingZhuTiData.area.toFixed(2)
          if(this.jingYingZhuTiData.area > 10000){
            this.jingYingZhuTiData.area = (this.jingYingZhuTiData.area / 10000).toFixed(2)
            this.areaUnit = "万亩"
           }
          this.jingYingZhuTiData.sums = this.jingYingZhuTiData.sums
          if(this.jingYingZhuTiData.sums > 10000000){
            this.jingYingZhuTiData.sums = (this.jingYingZhuTiData.sums / 10000).toFixed(2)
            this.sumsUnit = "亿元"
          }*/
        },
        err => {
          // this.$message.error("经营主体数据请求失败！");
        }
      );
    //主体类型统计
    this.$http
      .get(
        api.ip + "/web/management/getbusinesstype"
      )
      .then(
        res => {
          // console.log(res)
          this.manageZhuTi = res.data.data.map(item => {
            if (item != null) {
              if (item.counts == null || item.counts == 0) {
                item.counts = 0;
              }
              if (item.types == null) {
                item.types = "";
              }
              return {
                name: item.types,
                value: item.counts
              }
            }
          });
          // this.initManageZhuTiChart(this.manageZhuTi);
        },
        err => {
          // this.$message.error("主体类型统计数据请求失败！");
        }
      );

    //经营类型统计
    this.$http
      .get(
        api.ip + "/web/management/getJYLX"
      )
      .then(
        res => {
          var manageJingYingDataX = [];
          var manageJingYingDataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.counts == null) {
                item.counts = 0;
              }
              if (item.types == null) {
                item.types = "";
              }
              manageJingYingDataX.push(item.types);
              manageJingYingDataY.push(item.counts)
            }
          });

          this.initManageJingYingChart(manageJingYingDataX, manageJingYingDataY);
        },
        err => {
          // this.$message.error("经营类型统计数据请求失败！");
        }
      )

    //历年企业增长数量
    this.$http
      .get(
        api.ip + "/web/management/getbusinessgdpyears"
      )
      .then(
        res => {
          this.qiYeCount.year = res.data.data.map(item => {
            return item.years;
          });
          this.qiYeCount.counts = res.data.data.map(item => {
            return item.counts;
          });
          this.initGeographyLastYearChart(this.qiYeCount);
        },
        err => {
          // this.$message.error("历年企业增长数量数据请求失败！");
        }
      );

    //乡镇主体分布
    this.$http
      .get(
        api.ip + "/web/management/gettownssum"
      )
      .then(
        res => {
          let typeArr = [];
              let nameArr = [];
              res.data.data.forEach(item => {
                if (!typeArr.includes(item.types)) {
                  typeArr.push(item.types);
                }
              });
              res.data.data.forEach(item => {
                if (!nameArr.includes(item.pname)) {
                  nameArr.push(item.pname);
                }
              });

              let finArr = [];
              typeArr.forEach(item1 => {
                let _arr = [];
                nameArr.forEach((item2, index) => {
                  _arr[index] = 0;
                  res.data.data.forEach(a => {
                    if (a.pname == item2 && a.types == item1) {
                      _arr[index] = a.unittypecount;
                    }
                  });
                });
            let valueObj = {
              name: item1,
              type: "bar",
              stack: "排名",
              data: _arr
            };
            finArr.push(valueObj);
          });
          this.xiangZhenCount.type = finArr;
          this.xiangZhenCount.name = nameArr;
          // this.initGeographyTownshipChart(this.xiangZhenCount);
        },
        err => {
          // this.$message.error("乡镇主体分布数据请求失败！");
        }
      );

    //三品一标企业 无公害
    this.$http
      .get(
        api.ip + "/web/april7/thirdgrade?productType=0"
      )
      .then(
        res => {
          var manageWghX = [];
          var manageWghY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.companyName == null) {
                item.companyName = "";
              }
              if (item.areas == null) {
                item.areas = 0;
              }
              manageWghX.push(item.companyName);
              manageWghY.push(item.areas);
            }
          });
          this.initManageWgh(manageWghX,manageWghY);
        },
        err => {
          // this.$message.error("三品一标企业无公害数据请求失败！");
        }
      );
  },
  methods: {
    //获取主体数据
    async getBusiness(){
      let res = await business()
      this.capital = res.data.data.capital
      this.count = res.data.data.count
    },
    //获取麦冬鲜/干产量
    async getMaidongYield(){
      let res = await maidongYield()
      this.MD_year = res.data.data[0].years
      this.MD_yield = res.data.data.map(item => {
      this.MD_gan_yield = item.dryYield.toFixed(0)
      this.MD_xian_yield = item.freshYield.toFixed(0)
      })
      this.MD_yield = [{name:'鲜产量',value:res.data.data[0].freshYield},{name:'干产量',value:res.data.data[0].dryYield}]
      console.log(this.MD_yield)
    },
    //获取乡镇种植规模
    async getPlant(){
      let res = await XZZZ_plant()
      this.XZZZGM_year = res.data.data[0].years
      this.XZZZGM_city = res.data.data.map(item => item.township)
      this.XZZZGM_data = res.data.data.map(item => item.areas)
      this.XZZZGM_bigArr = getBig(
        res.data.data.map(item => {
          return {
            name: item.township,
            value: item.areas
          }
        }),2)
    },
    //麦冬加工产品信息
    async getProduct(){
      let res = await product()
      this.MGJGCP_list = res.data.data
      console.log(this.MGJGCP_list)
    },

    //获取养殖规模数据————dataType=0：存栏、dataType=1：出栏
    async getLiveStockYieldData(){
      let res_out = await getLiveStockYield({dataType:1}) //出栏
      let res_in = await getLiveStockYield({dataType:0})  //存栏
    },
    //获取养殖成本结构数据  
    async getCostStructure(){
      let res = await getcoststructure()
      this.YZCB_time = res.data.data.map(item => item.dataTime)
      this.YZCB_feed = res.data.data.map(item => item.feedCost)
      this.YZCB_bread = res.data.data.map(item => item.breedCost)
      this.YZCB_pig = res.data.data.map(item => item.pigCost)

      // console.log(res.data.data)
    },
    //获取饲料原料价格数据 
    async getMaterialPriceData(){
      let res = await getMaterialPrice()
      this.table_YM = res.data.data.map(item => {
        return {
          time: item.time,
          siChuanYuMi: item['四川玉米'],
          quanGuoYuMi: item['全国玉米'],
          difference: (item['四川玉米'] - item['全国玉米']).toFixed(2)
        }
      })

      this.table_DP = res.data.data.map(item => {
        return {
          time: item.time,
          siChuanYuMi: item['四川豆粕'],
          quanGuoYuMi: item['全国豆粕'],
          difference: (item['四川豆粕'] - item['全国豆粕']).toFixed(2)
        }
      })

      this.time = res.data.data.map((item) => item.time)
      this.siChuanYuMi = res.data.data.map((item) => item['四川玉米'])
      this.quanGuoYuMi = res.data.data.map((item) => item['全国玉米'])
      this.siChuanDouPo = res.data.data.map((item) => item['四川豆粕'])
      this.quanGuoDouPo = res.data.data.map((item) => item['全国豆粕'])
      // console.log( this.siChuanDouPo)
      // console.log( this.quanGuoDouPo)
    },
    //获取养殖产量占比数据 
    async getBreedProportionData(){
      let res = await getBreedProportion()
      this.YZCL_data = res.data.data.map(item => {
        return {
          name: item.livestocType,
          value: item.yieldNum
        }
      })
    },
    changeEcharts_1(){
      this.siLiaoYuanLiao_flag = true
      // echarts.siLiaoYuanLiao_YM('SLYLJG_YM', this.time, this.siChuanYuMi, this.quanGuoYuMi )
      // echarts.sanPinYiBiao_1('sanPinYiBiao', this.WGH_name, this.WGH_value)
    },
    changeEcharts_2(){
      this.siLiaoYuanLiao_flag = false
      // echarts.siLiaoYuanLiao_DP('SLYLJG_YM', this.time, this.siChuanDouPo, this.quanGuoDouPo )
      // echarts.sanPinYiBiao_2('sanPinYiBiao', this.YJ_name, this.YJ_value)
    },
    changeSize(){
      setTimeout(() => {
        
      },200)
    },
    //主体类型统计
    initManageZhuTiChart(data) {
      // chart1.EchartsManageZhuTiChart("manageZhuTiChart", data);
    },
    //经营类型统计
    initManageJingYingChart(dataX, dataY) {
      // chart1.EchartsManageJingYingChart("manageJingYingChart", dataX, dataY);
    },
    //历年企业增长数量
    initGeographyLastYearChart(data) {
      // chart1.EchartsGeographyLastYearChart("geographyLastYearChart", data);
      /*let self = this
      let myChart = chart1.EchartsGeographyLastYearChart("geographyLastYearChart", data);
      myChart.on('click', function(params) {
        let name = parseInt(params.name);
        self.handleLastyearChart(name)
      })*/
    },
    //乡镇主体分布
    initGeographyTownshipChart(data) {
      // chart1.EchartsGeographyTownshipChart("geographyTownshipChart", data);
    },
    //三品一标企业 无公害
    initManageWgh(dataX, dataY) {
      chart1.EchartsManageWgh("manageWgh", dataX, dataY);
    },
    //三品一标企业 绿色
    initManageOrganic(dataX, dataY) {
      chart1.EchartsManageWgh("manageOrganic", dataX, dataY);
    },
    // 三品一标企业 绿色 tab切换
    handleClickManage(tab, event){
      if(tab.paneName =="secondOrganic"){
        this.$http
          .get(
            api.ip + "/web/april7/thirdgrade?productType=1"
          )
          .then(
            res => {
              var manageOrganicX = [];
              var manageOrganicY = [];
              res.data.data.map(item => {
                if (item != null) {
                  if (item.companyName == null) {
                    item.companyName = "";
                  }
                  if (item.areas == null) {
                    item.areas = 0;
                  }
                  manageOrganicX.push(item.companyName);
                  manageOrganicY.push(item.areas);
                }
              });
              this.initManageOrganic(manageOrganicX,manageOrganicY);
            },
            err => {
              // this.$message.error("三品一标企业无公害数据请求失败！");
            }
          );
      }
    },

    initLayer() {
      var _this = this;
       this.managementLayer = this.$refs.mapModel.addLayer({
        layername: "v_liriope_business",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.managementTextMapping) {
            if(_this.managementTextMapping[key] == '占地面积(亩)'){
              let zhandival="暂无数据";
              if(e.get(key)!=null){
                zhandival=parseFloat(e.get(key).toFixed(2));
              }
              data.push({
                title: _this.managementTextMapping[key],
                value: zhandival
              });
            }else{
              data.push({
                title: _this.managementTextMapping[key],
                value: e.get(key)
              });
            }
          }
          return { data: data };
        }
      });
      this.managementLayer.isPopUp = true;
    },
    getDialogPageData(currentPage) {/*currentPage, year*/
      //获取弹框分页数据
      let that = this;
      this.$http
        .get(
          api.ip + "/web/management/pageList",
          {
            params: {
              currentPage: currentPage,
              pageSize: 10,
              managementName: that.managementName,
              // registrationDate: year
            }
          }
        )
        .then(
          res => {
            this.DialogPageData = res.body.data;
            for (let i = 0; i < this.DialogPageData.list.length; i++) {
              this.DialogPageData.list[i].areaCovered = parseFloat(this.DialogPageData.list[i].areaCovered.toFixed(1))
              /*this.DialogPageData.list[i].registeredCapital = parseFloat(this.DialogPageData.list[i].registeredCapital.toFixed(1))*/
            }
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },

    //显示弹框 经营主体数据
    handleCount() {
      this.managementName = "";
      this.getDialogPageData(1);
      this.dialogGeographyStatisticsChart = true;
    },

    //显示弹框 主体类型
    handleUnitType() {
      this.managementName = "";
      this.getDialogPageData(1);
      this.dialogGeographyStyleChart = true;
    },

    //显示弹框 乡镇主体分布
    handleTownsChart() {
      this.managementName = "";
      this.getDialogPageData(1);
      this.dialogGeographyTownsChart = true;
    },
    //弹框数据查询
    searchData() {
      this.getDialogPageData(1);
    },
    //翻页
    handleCurrentChange(val) {
      this.getDialogPageData(val);
      // this.getDialogPageData(val, this.dialogYear);
    },
    // 弹窗回车键查询
    searchEnter(e){
      let keyCode = window.event? e.keyCode:e.which;
      if (keyCode == 13){
        this.getDialogPageData(1);
      }
    },
  }
};
</script>
<style>
</style>
