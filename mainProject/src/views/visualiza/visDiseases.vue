<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside2">
        <div class="management-top-div">
          <div class="management-charts-title">病虫害数据({{BCH_year}})</div>
          
          <div class="content_box BCHSJ">
            <div>
              <div class="img_box">
                <img src="../../assets/santai_img/BCH_L_T.png"  alt="">
              </div>
              <p>种植防治/万亩次</p>
              <h1 style="color:#01EAFF">{{BCH_value.happenArea}}</h1>
            </div>
            <div>
              <div class="img_box">
                <img src="../../assets/santai_img/BCH_R_T.png"  alt="">
              </div>
              <p>病虫害防治/万亩次</p>
              <h1 style="color:#01EAFF">{{BCH_value.defenseArea}}</h1>
            </div>
            <div>
              <div class="img_box">
                <img src="../../assets/santai_img/BCH_L_B.png"  alt="">
              </div>
              <p>种植类型/种</p>
              <h1 style="color:#01EAFF">{{BCH_value.cropCount}}</h1>
            </div>
            <div>
              <div class="img_box">
                <img src="../../assets/santai_img/BCH_R_B.png"  alt="">
              </div>
              <p>病虫害类型/种</p>
              <h1 style="color:#01EAFF">{{BCH_value.diseaseCount}}</h1>
            </div>
          </div>
        </div>

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
      </el-col>

      <el-col :span="12" class="management-top-middle2">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <div class="mapPointExample mapPointExample_BCH"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div">
          <div class="management-charts-title">病虫害发生与防治占比统计({{FSYFZ_year}})</div>
          <div class="content_box">
            
            
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_1"></div>
              <div id="happen_defense"></div>
            </div>
          </div>
        </div>

        <div class="management-top-div">
          <div class="management-charts-title">病虫害发病描述</div>
          <!-- <div id="diseasesControlChart" class="management-charts-height"></div> -->
          <div class="text_box">
            <div>
              <span>种植种类</span>
              <span style="color:#83E914">{{FBMS_cropName}}</span>
            </div>
            <div>
              <span>病害种类</span>
              <span style="color:#00F6FF">{{FBMS_diseaseName}}</span>
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
            <div class="echarts_box BCHFBMS">
              {{FBMS_content}}
            </div>
          </div>
        </div>

      </el-col>
    </div>

    <div class="management-bottom">

      <el-col :span="12">
        <div class="management-bottom-other-div" style="position: relative;">
          
          <div class="management-charts-title">发生防治面积（{{params_year.year}}）</div>

          <!-- <el-select class="bottom_left_select" v-model="value_buTongZuoWu" @change="BTZW_changeYear" placeholder="请选择">
            <el-option
              v-for="item in buTongZuoWu_BCH"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select> -->

          <div class="content_box" id="buTongZuoWu"></div>

        </div>
      </el-col>

      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">{{params_year.name}}病虫害统计（{{params_year.year}}）</div>

          <div class="content_box" id="buTongJiBing"></div>
        </div>
      </el-col>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import chart from "../../js/visualiza/visDiseases.js";
import api from "../../request/visualiza1Api.js";
import dateFormate from '../../util/util.js'
import echarts from 'echarts';
import echarts_home from '../../js/santaiEcharts/home'
import echarts_BCH from '../../js/santaiEcharts/visDiseases'
import { cropdefense } from '../../api/home'
import { BCH_data, cropStatistics, diseaseHappenAndDefense, diseaseStatistics, diseaseDetail } from '../../api/visDiseases'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import changeSize from '@/util/changeSize';
export default {
  data() {
    return {
      FZZB_year: 0,
      FSYFZ_year: 0,
      //获取病虫害发病描述
      FBMS_cropName: '',      //作物名称
      FBMS_diseaseName: '',   //发病名称
      FBMS_content: '',       //描述内容
      //不同疾病统计数据
      BTJB_name: [],
      BTJB_happen: [],
      BTJB_defense: [],
      BTJB_list: [],
      //病虫害发生与防治面积占比数据
      bing_happen: 0,
      bing_defense: 0,
      chong_happen: 0,
      chong_defense: 0,
      BCH_total: 0,
      BCH_dataArr: [],
      BCH_year: 0,
      //获取不同作物病虫害防治统计
      params_year: {    //选择的年份
        year: 2018,
        id: 1,
        bing_id: 1,
        name: '水稻',
        bcName:'稻瘟病'
      },
      BTZW_name: [],
      BTZW_happen: [],
      BTZW_defense: [],
      BTZW_list: [],
      //病虫害数据
      BCH_value:{},
      //植保防治趋势数据
      ZBFZ_name: [],
      ZBFZ_happen: [],      //发生面积
      ZBFZ_defense: [],      //防治面积


      buTongZuoWu_BCH: [{
          value: '2019',
          label: '2019'
        }, {
          value: '2018',
          label: '2018'
        }, {
          value: '2017',
          label: '2017'
        }, {
          value: '2016',
          label: '2016'
        }
        ],
        value_buTongZuoWu: '2019',



      //病虫害数据
      DiseasesTotalData: [],
      //植保防治趋势
      townShipChart: {},
      //防治趋势
      controlAreaChart: {},
      //病虫害防治
      controlChart: {},
      //排行统计
      typeFiveChart: {},
      //弹框分页数据
      DialogPageData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1
      },
      DialogCountData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1
      },
      createTime: "",
      peatsType: "",
      typename:"",
      c_peatsimgTextMapping: {
        getaway: "网关名称",
        pest_type: "害虫种类",
        validity: "诱芯持有效期",
        wind_speed: "风速",
        illumination: "光照",
        rainfall: "降雨量",
        soil_temperature: "土壤温度",
        soil_moisture:'土壤湿度',
      },
      happenCount: {
        name: [],
        count: []
      },
      //虫害投入品
      diseasesInputsData: {
        name: [],
        count: []
      },
      // 防治效果年份
      yearVal: '2020'
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    //获取病虫害发病描述
    await this.getDiseaseDetail()
    //获取不同疾病类型统计
    await this.getDiseaseStatistics()
    //获取病虫害发生与防治占比数据
    await this.getDiseaseHappenAndDefense()
    //获取不同作物病虫害防治统计
    await this.getCropStatistics()
    //获取病虫害数据
    await this.getBCH_data()
    //获取植保防治趋势数据  
    await this.cropDefense()

    echarts_BCH.happen_defense('happen_defense', this.BCH_dataArr)

    // echarts_BCH.buTongZuoWu('buTongZuoWu', this.BTZW_name, this.BTZW_happen, this.BTZW_defense)
    this.buTongZuoWu_echarts('buTongZuoWu', this.BTZW_name, this.BTZW_happen, this.BTZW_defense)
    this.buTongJiBing_echarts('buTongJiBing', this.BTJB_name, this.BTJB_happen, this.BTJB_defense)
    //质保防治echarts图表
    // echarts_home.zhiBaoFangZhi('zhiBaoFangZhi', this.ZBFZ_name, this.ZBFZ_happen, this.ZBFZ_defense)
    this.zhiBaoFangZhi_echarts('zhiBaoFangZhi', this.ZBFZ_name, this.ZBFZ_happen, this.ZBFZ_defense)
    liquidfill.liquidfill_left('st_liqui_1','发生与防治占比','14%')

    //获取病虫害数据
    this.$http
      .get(
        api.ip + "/web/peatsimg/diseasesStatistic"
      )
      .then(
        res => {
          this.DiseasesTotalData = res.data.data;
          this.DiseasesTotalData[0].controlArea = this.DiseasesTotalData[0].controlArea.toFixed(2)
        },
        err => {
          // this.$message.error("病虫害数据请求失败！");
        }
      );

    //虫害投入品
    this.$http
      .get(
        api.ip + "/web/april7/peatsimginputs"
      )
      .then(
        res => {
          /*// 其他去最后一位的处理
          let dataArr = []
          for (let i = res.data.data.length - 1; i > -1; i--) {
            if (res.data.data[i].typename == '其他') {
              dataArr.push(res.data.data[i]);
            } else {
              dataArr.unshift(res.data.data[i]);
            }
          }*/
          let typeArr = [];
          let nameArr = [];
          res.data.data.forEach(item => {
            if (!typeArr.includes(item.name)) {
              typeArr.push(item.name);
            }
          });
          res.data.data.forEach(item => {
            if (!nameArr.includes(item.years)) {
              nameArr.push(item.years);
            }
          });

          let finArr = [];
          typeArr.forEach(item1 => {
            let _arr = [];
            nameArr.forEach((item2, index) => {
              _arr[index] = 0;
              res.data.data.forEach(a => {
                if (a.years == item2 && a.name == item1) {
                  _arr[index] = a.areas;
                }
              });
            });
            let valueObj = {
              name: item1,
              type: "bar",
              // smooth: true,
              data: _arr
            };
            finArr.push(valueObj);
          });
          this.diseasesInputsData.type = finArr;
          this.diseasesInputsData.name = nameArr;
          this.initDiseasesInputsChart(this.diseasesInputsData);
        },
        err => {
          // this.$message.error("虫害投入品数据请求失败！");
        }
      );
    //植保防治趋势
    this.$http
      .get(
        api.ip + "/web/getPlantDiseaseControl"
      )
      .then(
        res => {
          this.townShipChart.years = res.data.data.map(item => {
            if (item.years == null || item.years == 0) {
              item.years = "";
            }
            return item.years;
          });
          this.townShipChart.defenseArea = res.data.data.map(item => {
            if (item.defenseArea == null || item.defenseArea == 0) {
              item.defenseArea = "";
            }
            return item.defenseArea;
          });
          this.townShipChart.happenArea = res.data.data.map(item => {
            if (item.happenArea == null || item.happenArea == 0) {
              item.happenArea = "";
            }
            return item.happenArea;
          });
          this.initDiseasesTownshipChart(this.townShipChart);
        },
        err => {
          // this.$message.error("植保防治趋势数据请求失败！");
        }
      );
    //防治趋势
    this.$http
      .get(
        api.ip + "/web/peatsimg/controlArea"
      )
      .then(
        res => {
          this.controlAreaChart.years = res.data.data.map(item => {
            if (item.years == null || item.years == 0) {
              item.years = "";
            }
            return item.years;
          });
          this.controlAreaChart.controlArea = res.data.data.map(item => {
            if (item.controlArea == null || item.controlArea == 0) {
              item.controlArea = "";
            }
            return item.controlArea;
          });
          this.initDiseasesControlAreaChart(this.controlAreaChart);
        },
        err => {
          // this.$message.error("防治趋势数据请求失败！");
        }
      )
    //病虫害防治
    this.$http
      .get(
        api.ip + "/web/peatsimg/controlAreaForType"
      )
      .then(
        res => {
          this.controlChart = res.data.data.map(item => {
            if (item != null) {
              if (item.controlArea == null || item.controlArea == 0) {
                item.controlArea = "--";
              }
              if (item.typename == null) {
                item.typename = "";
              }
              return {
                name: item.typename,
                value: item.controlArea
              }

            }
          });
          this.initDiseasesControlChart(this.controlChart);
        },
        err => {
          // this.$message.error("病虫害防治数据请求失败！");
        }
      )
    //防治效果
    this.$http
      .get(
        api.ip + "/web/april7/effect?effectYears=2020"
      )
      .then(
        res => {
          var importantAreaPlantDataX = [];
          var importantAreaPlantDataY1 = [];
          var importantAreaPlantDataY2 = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.name == null) {
                item.name = "";
              }
              if (item.redeemLoss == null && item.redeemLoss != null) {
                item.redeemLoss = "";
              }
              if (item.realityLoss == null && item.realityLoss != null) {
                item.realityLoss = "";
              }
              importantAreaPlantDataX.push(item.name);
              importantAreaPlantDataY1.push(item.redeemLoss);
              importantAreaPlantDataY2.push(item.realityLoss);
            }
          });
          this.initDiseasesTypeFiveChart(importantAreaPlantDataX, importantAreaPlantDataY1, importantAreaPlantDataY2);
        },
        err => {
          // this.$message.error("防治效果数据请求失败！");
        }
      )
    this.initLayer();
  },
  methods: {
    //不同作物、改变年份
    // async BTZW_changeYear(){
    //   this.params_year.year = this.value_buTongZuoWu
    //   await this.getCropStatistics()
    //   // alert(this.params_year.year)
    //   await echarts_BCH.buTongZuoWu('buTongZuoWu', this.BTZW_name, this.BTZW_happen, this.BTZW_defense)
    // },


    //获取病虫害发病描述
    async getDiseaseDetail(){
      let res = await diseaseDetail({diseaseName:this.params_year.bcName,TypeName:this.params_year.name})
      this.FBMS_cropName = res.data.data[0].cropName
      this.FBMS_diseaseName = res.data.data[0].diseaseName
      this.FBMS_content = res.data.data[0].content
    },
    //获取不同疾病类型统计
    async getDiseaseStatistics(){
      console.log(this.params_year)
      let res = await diseaseStatistics({
        year: this.params_year.year,
        cropName: this.params_year.name
      })
      this.BTJB_name = res.data.data.map(item => item.name)
      this.BTJB_happen = res.data.data.map(item => item.happenArea)
      this.BTJB_defense = res.data.data.map(item => item.defenseArea)
      this.BTJB_list = res.data.data
    },
    //获取病虫害发生与防治占比数据
    async getDiseaseHappenAndDefense(){
      let res = await diseaseHappenAndDefense()
      this.FSYFZ_year = res.data.data[0].years
      this.bing_happen = res.data.data[0].happenArea
      this.bing_defense = res.data.data[0].defenseArea

      this.chong_happen = res.data.data[1].happenArea
      this.chong_defense = res.data.data[1].defenseArea

      this.BCH_total = (this.bing_happen + this.bing_defense + this.chong_happen + this.chong_defense).toFixed(2)

      this.BCH_dataArr = [
        {
          name:'病害发生面积',
          value:this.bing_happen
        },
        {
          name:'病害防治面积',
          value:this.bing_defense
        },
        {
          name:'虫害发生面积',
          value:this.chong_happen
        },
        {
          name:'虫害防治面积',
          value:this.chong_defense
        }
      ]
    },
    //获取不同作物病虫害防治统计
    async getCropStatistics(){
      let res = await cropStatistics({year: this.params_year.year})
      this.BTZW_name = res.data.data.map(item => item.name)
      this.BTZW_happen = res.data.data.map(item => item.happenArea)
      this.BTZW_defense = res.data.data.map(item => item.defenseArea)
      this.BTZW_list = res.data.data
    },
    //获取病虫害数据
    async getBCH_data(){
      let res = await BCH_data()
      this.BCH_year = res.data.data.years
      this.BCH_value = res.data.data
    },
    //获取植保防治趋势数据  
    async cropDefense(){
      let res = await cropdefense()
      this.ZBFZ_name = res.data.data.map(item => item.years)
      this.ZBFZ_happen = res.data.data.map(item => item.happenArea)
      this.ZBFZ_defense = res.data.data.map(item => item.defenseArea)
    },






    //虫害投入品
    initDiseasesInputsChart(data) {
      chart.EchartsDiseasesInputs("diseasesInputsChart", data);
    },
    //植保防治趋势
    initDiseasesTownshipChart(data) {
      chart.EchartsDiseasesTownshipChart("diseasesTownshipChart", data, this);
    },
    //防治趋势
    initDiseasesControlAreaChart(data) {
      chart.EchartsDiseasesControlAreaChart("diseasesControlAreaChart", data);
    },
    //病虫害防治
    initDiseasesControlChart(data) {
      chart.EchartsDiseasesControlChart("diseasesControlChart", data);
    },
    //防治效果
    initDiseasesTypeFiveChart(dataX, dataY1, dataY2) {
      chart.EchartsDiseasesTypeFiveChart("diseasesTypeFiveChart", dataX, dataY1, dataY2);
    },
    initLayer() {
      var _this = this;
      this.c_peatsimg = this.$refs.mapModel.addLayer({
        layername: "v_epidemic_surveillance",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.c_peatsimgTextMapping) {
            let result = e.get(key);
            if(key=="create_time"){
              result = dateFormate.formatTimeToStr(e.get(key))
                data.push({
                title: _this.c_peatsimgTextMapping[key],
                value: result
              });
            }else {
              data.push({
                title: _this.c_peatsimgTextMapping[key],
                value: result
              });
            }
          }
          return { data: data };
        }
      });
      this.c_peatsimg.isPopUp = true;
    },
    getDialogPageData(currentPage) {
      //获取弹框分页数据
      let that = this;
      this.$http
        .get(
          api.ip + "/web/peatsimg/pageList",
          {
            params: {
              currentPage: currentPage,
              pageSize: 10,
              peatsType: that.peatsType
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
    getDialogDiseasesCount(currentPage) {
      //获取左侧弹框分页数据
      let that = this;
      this.$http
        .get(
          api.ip + "/web/peatsimg/getdytc",
          {
            params: {
              currentPage: currentPage - 1,
              pageSize: 10,
              typename: that.typename
            }
          }
        )
        .then(
          res => {
            this.DialogCountData = res.body.data;
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },

    //植保防治趋势echarts图表
    zhiBaoFangZhi_echarts(id, xData, happenData, defenseData){
      
        happenData = happenData.map(item => item.toFixed(2))
        defenseData = defenseData.map(item => item.toFixed(2))
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
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                top: '0%',
                // right: '20%'
                right: '0%'
            },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff'
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '万亩次',
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
                    name: '发生面积',
                    type: 'bar',
                    // stack: '总量',
                    data: happenData,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fffe97' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FEE185' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                },
                {
                    name: '防治面积',
                    type: 'bar',
                    // stack: '总量',
                    data: defenseData,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#02F1C4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#11A2D8' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
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
          this.params_year.year = name
            await this.getCropStatistics()
            await this.buTongZuoWu_echarts('buTongZuoWu', this.BTZW_name, this.BTZW_happen, this.BTZW_defense)
            
               await this.getDiseaseStatistics()
              await this.buTongJiBing_echarts('buTongJiBing', this.BTJB_name, this.BTJB_happen, this.BTJB_defense)
        });
    },

    //不同作物病虫害防治统计echarts图表
    buTongZuoWu_echarts(id, xData, happenData, defenseData){
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
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                // top: '-2%',
                // right: '20%'
                // right: '0%'
            },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '万亩次',
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
                    name: '发生面积',
                    type: 'bar',
                    // stack: '总量',
                    data: happenData,       //发生面积
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
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
                    barWidth: 20,   //设置柱子宽度
                },
                {
                    name: '防治面积',
                    type: 'bar',
                    // stack: '总量',
                    data: defenseData,          //防治面积
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ff9f7f' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#ff9f7f' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 20,   //设置柱子宽度
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
            this.BTZW_list.forEach(item => {
              if(name == item.name){
                this.params_year.id = item.id
                this.params_year.name = item.name
              }
            })
               await this.getDiseaseStatistics()
              await this.buTongJiBing_echarts('buTongJiBing', this.BTJB_name, this.BTJB_happen, this.BTJB_defense)
        });
    },

    //不同疾病类型统计echarts图表
    buTongJiBing_echarts(id, xData, happenData, defenseData){
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
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                // top: '-2%',
                // right: '20%'
                // right: '0%'
            },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '15%',
                containLabel: true
            },
            "dataZoom": [{          //滚动条设置！！
                "show": true,       //设置是否显示
                "height": 10,       //设置高度
                "xAxisIndex": [
                    0
                ],
                bottom: '0%',         //设置位置
                "start": 0,         //设置起始位置
                "end": 50,          //设置结束位置
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
                "type": "inside",
                // disabled: true,     //可以设置鼠标滚轮控制失效，不知道有啥用
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '万亩次',
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
                    name: '发生面积',
                    type: 'bar',
                    // stack: '总量',
                    data: happenData,       //发生面积
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fb7293' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#fb7293' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 20,   //设置柱子宽度
                },
                {
                    name: '防治面积',
                    type: 'bar',
                    // stack: '总量',
                    data: defenseData,          //防治面积
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#37a2da' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#37a2da' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 20,   //设置柱子宽度
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
            this.BTJB_list.forEach(item => {
              if(name == item.name){
                this.params_year.bing_id = item.id,
                this.params_year.bcName=item.name
              }
            })
            await this.getDiseaseDetail()
        });
    },
  }
}
</script>
<style>
</style>

