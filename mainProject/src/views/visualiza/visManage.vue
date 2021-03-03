<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">
      <el-col :span="6" class="management-top-aside">
        <div class="management-top-div" @click="handleCount">
          <!-- <div class="management-top-div"> -->
          <div class="management-charts-title">新型经营主体数据(2019)</div>
          
          <div class="content_box" style="padding: 10px 20px;">
            <div class="left_echarts JYZT_img">
              <!-- <img src="../../assets/santai_img/JYZT.png" height="100%" alt=""> -->
            </div>
            <div class="right_text_JYZT">
              <ul>
                <li>
                  <p>主体数量/家</p>
                  <p style="color:#43BAFF">{{JYZT_counts}}</p>
                </li>
                <!-- <li>
                  <p>占地面积/亩</p>
                  <p style="color:#FEAD5C">{{JYZT_area}}</p>
                </li> -->
                <li>
                  <p>主体注册资金/万元</p>
                  <p style="color:#36E4FF">{{JYZT_sums}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleUnitType"> -->
        <div class="management-top-div" >
          <div class="management-charts-title">主体类型统计(2019)</div>
          <div class="areaOfLand content_box">
            <!-- <div class="text_box">
              <div>
                <span>耕地/万亩</span>
                <span style="color:#82E916">12547</span>
              </div>
              <div>
                <span>草地/万亩</span>
                <span style="color:#02E4F9">12547</span>
              </div>
              <div>
                <span>林地/万亩</span>
                <span style="color:#82E916">12457</span>
              </div>
              <div>
                <span>园地/万亩</span>
                <span style="color:#02E4F9">12547</span>
              </div>
            </div> -->
            <!-- <div class="echarts_box" id="zhongZhiLeiXing"></div> -->
            <div class="echarts_box ZZLX_box">
              <div class="ZZLX_box_item">
                <div class="ZZLX_box_item_echarts" id="ZTLX_box_item_echarts_left"></div>
                <p>龙头企业</p>
                <p><span style="color:#3DD4FF">{{ZTLX_LT}}</span>/家</p>
              </div>
              <div class="ZZLX_box_item">
                <div class="ZZLX_box_item_echarts" id="ZTLX_box_item_echarts_center"></div>
                <p>家庭农场</p>
                <p><span style="color:#FEE36C">{{ZTLX_JTNC}}</span>/家</p>
              </div>
              <div class="ZZLX_box_item">
                <div class="ZZLX_box_item_echarts" id="ZTLX_box_item_echarts_right"></div>
                <p>合作社</p>
                <p><span style="color:#60D5B2">{{ZTLX_HZS}}</span>/家</p>
              </div>
            </div>
          </div>
        </div>

      </el-col>
      
      <el-col :span="12" class="management-top-middle2">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        
        <div style="width: 100%;height: 100%;">
          <!-- <industryAnalysisMap v-if="radio == '1'" ref="mapModel_1" style="width:100%;height:100%;position: absolute;"></industryAnalysisMap>
          <industryAnalysisMap v-if="radio == '2'" ref="mapModel_2" style="width:100%;height:100%;position: absolute;"></industryAnalysisMap> -->
          <middleMap1 v-if="radio == '1'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap1>
          <middleMap2 v-if="radio == '2'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap2>
          <middleMap3 v-if="radio == '3'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap3>
        </div>

        <div class="radioBox">
          <el-radio-group v-model="radio" @change="changeRadio">
            <el-radio label="1" style="color:#eee">家庭农场</el-radio>
            <el-radio label="2" style="color:#eee">合作社</el-radio>
            <el-radio label="3" style="color:#eee">龙头企业</el-radio>
          </el-radio-group>
        </div>
        <div v-if="radio == '1'" class="mapPointExample mapPointExample_JTNC"></div>
        <div v-if="radio == '2'" class="mapPointExample mapPointExample_HZS"></div>
        <div v-if="radio == '3'" class="mapPointExample mapPointExample_LTQY"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">
        <div class="management-top-div3" style="height:97%">
          <div class="management-charts-title">经营类型统计(2019)</div>
          <div class="content_box">
            <!-- <div class="text_box">
              <div>
                <span>出栏数量/头</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>存栏数量/头</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <div class="companyAdd">
              <div>名称</div>
              <div>数量/个</div>
            </div>
            <div class="echarts_box" id="liNianQiYe"></div>
          </div>
        </div>
      </el-col>
    </div>

    <div class="management-bottom">
      <el-col :span="6">
        <div class="management-bottom-index-div"> <!--@click="handleScaleChart"-->
          <div class="management-charts-title" style="position: relative;">三品一标企业(2019)
            <div class="choice_btn">
              <div :class="sanPinYiBiao_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_1">无公害</div>
              <div :class="sanPinYiBiao_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_2">有机</div>
            </div>
          </div>
          <div class="content_box">
            <p class="table_title">
                <span class="title_name">企业名称</span>
                <span class="title_yield" style="text-align:center">产量/万吨</span>
                <!-- <span class="title_area" style="text-align:center">面积/万亩</span> -->
            </p>
            <div class="table_box">
              <ul v-show="sanPinYiBiao_flag" class="yuYeRenKou" id="roll_table_WGH">
                <li v-for="(item,index) in WGH_total" :key="index">
                  <span class="title_name">{{item.name}}</span>
                  <!-- <span class="title_yield" style="color:#fff;text-align:center">----</span> -->
                  <span class="title_area" style="color:#fff;text-align:center">{{item.area}}</span>
                </li>
              </ul>
              <ul v-show="!sanPinYiBiao_flag" class="yuYeRenKou" id="roll_table_YJ">
                <li v-for="(item,index) in YJ_total" :key="index">
                  <span class="title_name">{{item.name}}</span>
                  <!-- <span class="title_yield" style="color:#fff;text-align:center">----</span> -->
                  <span class="title_area" style="color:#fff;text-align:center">{{item.area}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0 0 0 0">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">历年企业增长数量</div>
          <div class="text_box_1">
            <div v-for="(item,index) in LNQY_bigArr" :key="index">
              <span>{{item.name}}</span>
              <span style="color:#83E914">{{item.value}}</span>
            </div>
          </div>
          <div class="content_box">
            <div class="echarts_box" id="jingYingLeiXing"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="management-bottom-index-div"> <!--@click="handleScaleChart"-->
          <div class="management-charts-title">乡镇主体分布(2019)</div>
            <div class="text_box">
              <div>
                <span>家庭农场/家</span>
                <span style="color:#83E914">{{ZTLX_JTNC}}</span>
              </div>
              <div>
                <span>龙头企业/家</span>
                <span style="color:#01E8FD">{{ZTLX_LT}}</span>
              </div>
              <div style="width:98%">
                <span>专业合作社/家</span>
                <span style="color:#ED9723">{{ZTLX_HZS}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 95px);padding-top:5px;">
            <div class="echarts_box" id="xiangZhenZhuTi"></div>
          </div>
        </div>
      </el-col>
    </div>

    <!--经营主体数据弹窗-->
    <div class="vis-geography">
      <el-dialog title="经营主体数据" :visible.sync="dialogGeographyStatisticsChart" width="90%">
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
          <el-button type="primary" class="dialog-btn" @click="searchFromName" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="JYZT_list">
          <el-table-column property="managementName" label="公司名称" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="unitProperty" label="主体类型" :show-overflow-tooltip="true" :resizable="false"> </el-table-column>
          <el-table-column property="unitType" label="经营类别" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="legalName" label="法定代表人" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <!-- <el-table-column property="registrationDate" label="注册资本" :show-overflow-tooltip="true" :resizable="false"></el-table-column> -->
          <el-table-column property="registrationDate" label="成立日期" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="address" label="地址" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="township" label="所属乡镇" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table>
        <!-- 分页导航条 -->
        <el-pagination
          layout="prev, pager, next"
          @current-change="changeCurrentPage"
          :current-page.sync="DialogPageData.pageNum"
          :total="total">
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
          <!-- <el-table-column property="areaCovered" label="占地面积(亩)" :show-overflow-tooltip="true" :resizable="false"> -->
            <!--<template slot-scope="scope">-->
              <!--<span>{{scope.row.areaCovered.toFixed(1)}}</span>-->
            <!--</template>-->
          <!-- </el-table-column> -->
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
import middleMap1 from "./middleMap1";
import middleMap2 from "./middleMap2";
import middleMap3 from "./middleMap3";
import chart1 from "../../js/visualiza/visManage";
import echarts from '../../js/santaiEcharts/visManage'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import api from "../../request/visualiza1Api.js";
import Nav from './nav'
import { getbusinessdata, getbusinesstype, getJYLX, gettownssum, getbusinessgdpyears, thirdgrade, getPageList } from '../../api/visManage'
import { startmarquee, getBig } from '../../util/util'
export default {
  data() {
    return {
      currentPage:1,
      pageSize:10,
      total:0,
      radio:'1',//单选
      radioType:'v_management_farm',//

      //获取经营主体分页
      JYZT_list:[],
      //三品一标企业数据
      WGH_name: [],
      WGH_value: [],
      WGH_total: [],

      YJ_name: [],
      YJ_value: [],
      YJ_total: [],
      //历年企业增长数量数据
      LNQY_year: [],
      LNQY_counts: [],
      LNQY_bigArr: [],
      //乡镇主体分布数据
      XZZT_city: [],
      XZZT_value: {
        data_JTNC: [],    //家庭农场
        data_LTQY: [],    //龙头企业
        data_ZYHZS: [],   //专业合作社
      },
      //经营类型统计数据
      JYLX_name: null,
      JYLX_value: null,
      //主体类型统计数据
      ZTLX_data:[],
      ZTLX_total: 0,    //总数
      ZTLX_LT: 0,       //龙头
      ZTLX_JTNC: 0,     //家庭农场
      ZTLX_HZS: 0,     //合作社
      //经营主体数据
      JYZT_counts: null,    //主体数量
      JYZT_area: null,      //占地面积
      JYZT_sums: null,      //注册资金
      sanPinYiBiao_flag:true,
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
      areaUnit:'亩',
      sumsUnit:'万元',
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
        management_name: "经营主体名称",
        //management_abbreviation: "经营主体简称",
        unit_property: "单位性质",
        unit_type: "单位类型",
        //official_website: "官方网站",
        //unit_introduction: "单位简介",
        /*longitude: "经度",
          latitude: "纬度",*/
        area_covered: "占地面积(亩)",
        //product_service: "主营产品服务",
        /*unit_head_pic: "单位头像",
          registration_date: "注册日期",
          business_license_no: "营业执照号",*/
        // legal_name: "法人姓名",
        /* turnover: "年营业额",
            registered_capital: "注册资金(万元)",*/
        /*contacts_name: "联系人姓名",*/
        address: "详细地址",
        // email: "电子邮箱"
        /*fixed_telephone: "固定电话",
          fax: "传真",
          mobile_phone: "移动电话",
          postal_code: "邮政编码",
          fixed_employees: "固定从业人数",
          temporary_employees: "临时用工人数",
          poverty_population: "带动贫困人数",
          total_people: "共计人数",
          product_type: "种植、养殖、畜禽通用字段",
          varieties: "种植、养殖、畜禽通用字段",
          plant_area: "种植面积（km2）",
          yield: "产量（公斤）",
          output_value: "产值（万元）",
          aquaculture_area: "养殖面积（亩）",
          breed_yield: "养殖产量（吨）",
          breed_output_value: "养殖产值（万元）",
          design_scale: "年出栏/笼(头、只等)",
          livestock_hand: "年末存栏/笼（头、只等）",
          female_livestock: "能繁母畜禽存栏(头、只等)",
          egg_yield: "年畜蛋产量(吨)",
          fixed_assets: "固定资产(万元)",
          whether_leading_ent: "是否龙头主体",
          whether_regulations_ent: "规模以上主体是一个统计术语",
          total_investment: "投资总额",
          main_product: "主要产品",
          annual_output: "年产量(吨)",
          annual_output_value: "年产值(万元)",
          registered_trademark: "注册商标",
          origin_address: "产地地址",
          product_name: "产品名称",
          batch_production: "批量产量",
          certificate_number: "证书编号",
          certification_period: "认证有效期限",
          certification_mechanism_name: "作出认证的机构名称",
          certification_date: "作出认证的日期",
          prize_name: "获奖名称",
          prize_time: "获奖时间",
          agency_name: "作出奖励的机关名称",
          remarks: "备注",
          park_name: "园区名称",
          park_id: "园区编号",
          update_time: "修改时间",
          the_position: "地理位置"*/
      },
      //三品一标企业
      tabThirdgrade: 'firstWgh',
    };
  },
  components: {
    industryAnalysisMap,
    Nav,
    middleMap1,
    middleMap2,
    middleMap3,
    
  },async mounted() {
    //获取经营主体分页
    await this.getPageListData()
    // this.initLayer_1();
    startmarquee(30,30,1,"roll_table_WGH"); //表格自动滚动
    startmarquee(30,30,1,"roll_table_YJ"); //表格自动滚动
    //获取三品一标企业数据
    await this.thirdGrade()
    //获取历年企业增长数量数据
    await this.getBusinessGdpYears()
    //获取经营主体数据————企业数量、占地面积、企业产值
    await this.getBusinessData()
    //获取主体类型统计数据
    await this.getBusinessType()
    //获取经营类型统计数据
    await this.getJYLX_data()
    //获取乡镇主体分布数据
    await this.getTownsSum()

    console.log(this.YJ_total)
    // echarts.sanPinYiBiao_1('sanPinYiBiao', this.WGH_name, this.WGH_value)

    // echarts.liNianQiYe('liNianQiYe', this.LNQY_year, this.LNQY_counts)
    echarts.liNianQiYe('liNianQiYe', this.JYLX_name, this.JYLX_value)
    // echarts.jingYingLeiXing('jingYingLeiXing', this.JYLX_value, this.JYLX_name)
    echarts.jingYingLeiXing('jingYingLeiXing', this.LNQY_counts, this.LNQY_year)

    echarts.xiangZhenZhuTi('xiangZhenZhuTi', this.XZZT_city, this.XZZT_value)
    // echarts.zhuTiLeiXing('zhuTiLeiXing', this.ZTLX_data)

    echarts.zhuTiLeiXing_left('ZTLX_box_item_echarts_left', this.ZTLX_LT, this.ZTLX_total)
    echarts.zhuTiLeiXing_center('ZTLX_box_item_echarts_center', this.ZTLX_JTNC, this.ZTLX_total)
    echarts.zhuTiLeiXing_right('ZTLX_box_item_echarts_right', this.ZTLX_HZS, this.ZTLX_total)

    
    liquidfill.liquidfill('st_liqui_3','主体类型')
    //获取经营主体数据
    // this.$http
    //   .get(
    //     api.ip + "/web/management/getbusinessdata"
    //   )
    //   .then(
    //     res => {
    //       this.jingYingZhuTiData = res.data.data;
    //       this.jingYingZhuTiData.area = this.jingYingZhuTiData.area.toFixed(2)
    //       //this.jingYingZhuTiData.area = this.jingYingZhuTiData.area.toFixed(2)
    //       /*this.jingYingZhuTiData.sums = this.jingYingZhuTiData.sums
    //       let largeFlag = false;
    //       if(this.jingYingZhuTiData.consumption > 10000){
    //         largeFlag = true;
    //       }
    //       if(this.jingYingZhuTiData.sums > 10000000){
    //         largeFlag = true;
    //       }
    //       if(largeFlag){
    //         this.unit = "万亩"
    //         this.sumsUnit = "亿元"
    //         this.jingYingZhuTiData.area = (this.jingYingZhuTiData.area / 10000).toFixed(2)
    //         this.jingYingZhuTiData.sums = (this.jingYingZhuTiData.sums / 10000).toFixed(2)
    //       }*/
    //       /*this.jingYingZhuTiData.area = this.jingYingZhuTiData.area.toFixed(2)
    //       if(this.jingYingZhuTiData.area > 10000){
    //         this.jingYingZhuTiData.area = (this.jingYingZhuTiData.area / 10000).toFixed(2)
    //         this.areaUnit = "万亩"
    //        }
    //       this.jingYingZhuTiData.sums = this.jingYingZhuTiData.sums
    //       if(this.jingYingZhuTiData.sums > 10000000){
    //         this.jingYingZhuTiData.sums = (this.jingYingZhuTiData.sums / 10000).toFixed(2)
    //         this.sumsUnit = "亿元"
    //       }*/
    //     },
    //     err => {
    //       // this.$message.error("经营主体数据请求失败！");
    //     }
    //   );
    //主体类型统计
    // this.$http
    //   .get(
    //     api.ip + "/web/management/getbusinesstype"
    //   )
    //   .then(
    //     res => {
    //       this.manageZhuTi = res.data.data.map(item => {
    //         if (item != null) {
    //           if (item.counts == null || item.counts == 0) {
    //             item.counts = 0;
    //           }
    //           if (item.types == null) {
    //             item.types = "";
    //           }
    //           return {
    //             name: item.types,
    //             value: item.counts
    //           }
    //         }
    //       });
    //       this.initManageZhuTiChart(this.manageZhuTi);
    //     },
    //     err => {
    //       // this.$message.error("主体类型统计数据请求失败！");
    //     }
    //   );

    //经营类型统计
    // this.$http
    //   .get(
    //     api.ip + "/web/management/getJYLX"
    //   )
    //   .then(
    //     res => {
    //       var manageJingYingDataX = [];
    //       var manageJingYingDataY = [];
    //       res.data.data.map(item => {
    //         if (item != null) {
    //           if (item.counts == null) {
    //             item.counts = 0;
    //           }
    //           if (item.types == null) {
    //             item.types = "";
    //           }
    //           manageJingYingDataX.push(item.types);
    //           manageJingYingDataY.push(item.counts)
    //         }
    //       });

    //       this.initManageJingYingChart(manageJingYingDataX, manageJingYingDataY);
    //     },
    //     err => {
    //       // this.$message.error("经营类型统计数据请求失败！");
    //     }
    //   )

    //历年企业增长数量
    // this.$http
    //   .get(
    //     api.ip + "/web/management/getbusinessgdpyears"
    //   )
    //   .then(
    //     res => {
    //       this.qiYeCount.year = res.data.data.map(item => {
    //         return item.years;
    //       });
    //       this.qiYeCount.counts = res.data.data.map(item => {
    //         return item.counts;
    //       });
    //       this.initGeographyLastYearChart(this.qiYeCount);
    //     },
    //     err => {
    //       // this.$message.error("历年企业增长数量数据请求失败！");
    //     }
    //   );

    //乡镇主体分布
    // this.$http
    //   .get(
    //     api.ip + "/web/management/gettownssum"
    //   )
    //   .then(
    //     res => {
    //       let typeArr = [];
    //           let nameArr = [];
    //           res.data.data.forEach(item => {
    //             if (!typeArr.includes(item.types)) {
    //               typeArr.push(item.types);
    //             }
    //           });
    //           res.data.data.forEach(item => {
    //             if (!nameArr.includes(item.pname)) {
    //               nameArr.push(item.pname);
    //             }
    //           });

    //           let finArr = [];
    //           typeArr.forEach(item1 => {
    //             let _arr = [];
    //             nameArr.forEach((item2, index) => {
    //               _arr[index] = 0;
    //               res.data.data.forEach(a => {
    //                 if (a.pname == item2 && a.types == item1) {
    //                   _arr[index] = a.unittypecount;
    //                 }
    //               });
    //             });
    //         let valueObj = {
    //           name: item1,
    //           type: "bar",
    //           stack: "排名",
    //           data: _arr
    //         };
    //         finArr.push(valueObj);
    //       });
    //       this.xiangZhenCount.type = finArr;
    //       this.xiangZhenCount.name = nameArr;
    //       this.initGeographyTownshipChart(this.xiangZhenCount);
    //     },
    //     err => {
    //       // this.$message.error("乡镇主体分布数据请求失败！");
    //     }
    //   );

    //三品一标企业 无公害
    // this.$http
    //   .get(
    //     api.ip + "/web/april7/thirdgrade?productType=0"
    //   )
    //   .then(
    //     res => {
    //       var manageWghX = [];
    //       var manageWghY = [];
    //       res.data.data.map(item => {
    //         if (item != null) {
    //           if (item.companyName == null) {
    //             item.companyName = "";
    //           }
    //           if (item.areas == null) {
    //             item.areas = 0;
    //           }
    //           manageWghX.push(item.companyName);
    //           manageWghY.push(item.areas);
    //         }
    //       });
    //       this.initManageWgh(manageWghX,manageWghY);
    //     },
    //     err => {
    //       // this.$message.error("三品一标企业无公害数据请求失败！");
    //     }
    //   );
  },
  methods: {
    searchFromName(){
      this.currentPage = 1
      this.getPageListData()
    },
    changeCurrentPage(val){
      this.currentPage = val
      this.getPageListData()
    },
    //获取经营主体数据分页
    async getPageListData(){
      let res = await getPageList({
        currentPage:this.currentPage,
        pageSize:this.pageSize,
        managementName:this.managementName
      })
      this.JYZT_list = res.data.data.list
      this.total = res.data.data.total
    },
    changeRadio(val){
      if(val == '1'){
        this.radioType = 'v_management_farm'
        this.initLayer_1();
      }else if(val == '2'){
        this.radioType = 'v_management_faucet'
        this.initLayer_2();
      }else if(val = '3'){
        this.radioType = 'v_management_cooperative'
      }
    },
    //获取三品一标企业数据
    async thirdGrade(){
      let res_1 = await thirdgrade({productType:'无公害农产品'})   //无公害
      let res_2 = await thirdgrade({productType:'绿色有机'})   //有机
      console.log(res_1.data.data)

      this.WGH_name = res_1.data.data.map(item => item.companyName)
      this.WGH_value = res_1.data.data.map(item => item.areas)
      this.WGH_total = res_1.data.data.map(item => {
        return{
          name: item.companyName,
          area: item.areas,
          yield: null
        }
      })
      
      this.YJ_name = res_2.data.data.map(item => item.companyName)
      this.YJ_value = res_2.data.data.map(item => item.areas)
      this.YJ_total = res_2.data.data.map(item => {
        return{
          name: item.companyName,
          area: item.areas,
          yield: null
        }  
      })

      console.log(this.WGH_total)
      console.log(this.YJ_total)
    },
    //获取历年企业增长数量数据
    async getBusinessGdpYears(){
      let res = await getbusinessgdpyears()
      this.LNQY_year = res.data.data.map(item => item.years)
      this.LNQY_counts = res.data.data.map(item => item.counts)
      this.LNQY_bigArr = getBig(
        res.data.data.map(item => {
          return {
            name: item.years,
            value: item.counts
          }
        }),3)
    },
    //获取乡镇主体分布数据
    async getTownsSum(){
      let res = await gettownssum()
      this.XZZT_city = Array.from(new Set(res.data.data.map(item => item.pname)))
      this.XZZT_city.forEach( (itemCity, index) => {
        this.XZZT_value.data_JTNC[index] = 0
        this.XZZT_value.data_LTQY[index] = 0
        this.XZZT_value.data_ZYHZS[index] = 0
        res.data.data.forEach( item => {
          if(item.pname == itemCity){
            if(item.types == '家庭农场'){
              this.XZZT_value.data_JTNC[index] = item.unittypecount
            }else if(item.types == '龙头企业'){
              this.XZZT_value.data_LTQY[index] = item.unittypecount
            }else if(item.types == '专业合作社'){
              this.XZZT_value.data_ZYHZS[index] = item.unittypecount
            }
          }
        } )
      } )
      // console.log(res.data.data)
      // console.log(this.XZZT_city)
      // console.log(this.XZZT_value.data_JTNC)
      // console.log(this.XZZT_value.data_LTQY)
      // console.log(this.XZZT_value.data_ZYHZS)
    },
    //获取经营类型统计数据
    async getJYLX_data(){
      let res = await getJYLX()
      let bigCount = res.data.data[0].counts
      let newArr = res.data.data
      console.log(newArr)
      for(var i = 0;i < newArr.length - 1;i++){
        for(var j = newArr.length - 1;j > i;j--){
          if(newArr[i].counts < newArr[j].counts){
            var temp = newArr[i]
            newArr[i] = newArr[j]
            newArr[j] = temp
          }
        }
      }
      console.log(newArr)
      this.JYLX_name = res.data.data.map( item => item.types)
      this.JYLX_value = res.data.data.map( item => item.counts)
      // console.log(res.data.data)
      // console.log(this.JYLX_name)
      // console.log(this.JYLX_value)
    },
    //获取主体类型统计数据
    async getBusinessType(){
      let res = await getbusinesstype()
      this.ZTLX_data = res.data.data.map( item => {
        this.ZTLX_total = this.ZTLX_total + item.counts
        if(item.types == '龙头企业'){
          this.ZTLX_LT = item.counts
        }
        if(item.types == '家庭农场'){
          this.ZTLX_JTNC = item.counts
        }
        if(item.types == '专业合作社'){
          this.ZTLX_HZS = item.counts
        }
        return {
          name: item.types,
          value: item.counts
        }
      } )
      // console.log(res.data.data)
      // console.log(this.ZTLX_total)
      // console.log(this.ZTLX_LT)
      // console.log(this.ZTLX_JTNC)
      // console.log(this.ZTLX_HZS)
    },
    //获取经营主体数据————企业数量、占地面积、企业产值
    async getBusinessData(){
      let res = await getbusinessdata()
      this.JYZT_counts = res.data.data.counts
      this.JYZT_area = res.data.data.area.toFixed(2)
      // this.JYZT_sums = (res.data.data.sums / 10000).toFixed(2)
      this.JYZT_sums = res.data.data.sums.toFixed(0)
    },
    changeEcharts_1(){
      this.sanPinYiBiao_flag = true
      // echarts.sanPinYiBiao_1('sanPinYiBiao', this.WGH_name, this.WGH_value)
    },
    changeEcharts_2(){
      this.sanPinYiBiao_flag = false
      // echarts.sanPinYiBiao_2('sanPinYiBiao', this.YJ_name, this.YJ_value)
    },
    //主体类型统计
    initManageZhuTiChart(data) {
      chart1.EchartsManageZhuTiChart("manageZhuTiChart", data);
    },
    //经营类型统计
    initManageJingYingChart(dataX, dataY) {
      chart1.EchartsManageJingYingChart("manageJingYingChart", dataX, dataY);
    },
    //历年企业增长数量
    initGeographyLastYearChart(data) {
      chart1.EchartsGeographyLastYearChart("geographyLastYearChart", data);
      /*let self = this
      let myChart = chart1.EchartsGeographyLastYearChart("geographyLastYearChart", data);
      myChart.on('click', function(params) {
        let name = parseInt(params.name);
        self.handleLastyearChart(name)
      })*/
    },
    //乡镇主体分布
    initGeographyTownshipChart(data) {
      chart1.EchartsGeographyTownshipChart("geographyTownshipChart", data);
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

    initLayer_1() {
      var _this = this;
      this.managementLayer = this.$refs.mapModel_1.addLayer({
        layername: 'v_management_farm',
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
          /*for (let key in _this.managementTextMapping) {
            data.push({
              title: _this.managementTextMapping[key],
              value: e.get(key)
            });
          }*/
          return { data: data };
        }
      });
      this.managementLayer.isPopUp = true;
    },
    initLayer_2() {
      var _this = this;
      this.managementLayer = this.$refs.mapModel_2.addLayer({
        layername: 'v_management_faucet',
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
          /*for (let key in _this.managementTextMapping) {
            data.push({
              title: _this.managementTextMapping[key],
              value: e.get(key)
            });
          }*/
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
