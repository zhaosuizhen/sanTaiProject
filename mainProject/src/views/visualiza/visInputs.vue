<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div">
          <div class="management-charts-title">投入品数据({{TRP_year}})</div>
          <div class="management-other-count">
            <div>
              <el-row style="text-align:center">
                <el-col :span="12">
                  <div class="">
                    <img :src="iconImg.pesticide" class="input-count-img"/> <!--农药-->
                    <p class="input-count-text"> {{touRuPinData[1] ? touRuPinData[1].inputName : ""}}/{{this.unit}}</p>
                    <p class="input-count-num" style="display:block;margin:0 auto;"> {{touRuPinData[1] ? touRuPinData[1].consumption : ""}}</p>
                  </div>
                  <div>
                    <img :src="iconImg.chemical"  class="input-count-img"/><!--化肥-->
                    <p class="input-count-text" style="display:block;margin:0 auto;"> {{touRuPinData[3] ? touRuPinData[3].inputName : ""}}/{{this.unit}}</p>
                    <p class="input-count-num" style="display:block;margin:0 auto;"> {{touRuPinData[3] ? touRuPinData[3].consumption : ""}}</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div>
                    <img :src="iconImg.mulch"  class="input-count-img"/> <!--地膜-->
                    <p class="input-count-text" style="display:block;margin:0 auto;"> {{touRuPinData[2] ? touRuPinData[2].inputName : ""}}/{{this.unit}}</p>
                    <p class="input-count-num" style="display:block;margin:0 auto;"> {{touRuPinData[2] ? touRuPinData[2].consumption : ""}}</p>
                  </div>
                  <div>
                    <img :src="iconImg.diesel" class="input-count-img"/> <!--柴油-->
                    <p class="input-count-text" style="display:block;margin:0 auto;"> {{touRuPinData[0] ? touRuPinData[0].inputName : ""}}/{{this.unit}}</p>
                    <p class="input-count-num" style="display:block;margin:0 auto;"> {{touRuPinData[0] ? touRuPinData[0].consumption : ""}}</p>
                  </div>
                </el-col>
              </el-row>

            </div>
            <!-- <div class="other-count-left">
              <img src="../../assets/visualiza/inputs_icon.png" class="left-icon4" alt="">
              <img src="../../assets/visualiza/management_count4.png" class="left-count4" style="">
            </div> 
             <div class="other-count-right4 other-count-right-div6">
              <i class="other-count-text">
                {{touRuPinData[0] ? touRuPinData[0].inputName : ""}}({{this.unit}})
              </i>
              <i class="other-count-num">
                {{touRuPinData[0] ? touRuPinData[0].consumption : ""}}
              </i>
            </div>
            <div class="other-count-right4 other-count-right-div7">
              <i class="other-count-text">
                {{touRuPinData[1] ? touRuPinData[1].inputName : ""}}({{this.unit}})
              </i>
              <i class="other-count-num">
                {{touRuPinData[1] ? touRuPinData[1].consumption : ""}}
              </i>
            </div>
            <div class="other-count-right4 other-count-right-div8">
              <i class="other-count-text">
                {{touRuPinData[2] ? touRuPinData[2].inputName : ""}}({{this.unit}})
              </i>
              <i class="other-count-num">
                {{touRuPinData[2] ? touRuPinData[2].consumption : ""}}
              </i>
            </div>
            <div class="other-count-right4 other-count-right-div9">
              <i class="other-count-text">
                {{touRuPinData[3] ? touRuPinData[3].inputName : ""}}({{this.unit}})
              </i>
              <i class="other-count-num">
                {{touRuPinData[3] ? touRuPinData[3].consumption : ""}}
              </i>
            </div>  -->

          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div">
          <div class="management-charts-title">投入品占比({{TRPZB_year}})</div>
          <!-- <div id="inputsProportion" class="management-charts-height"></div> -->
          <div class="content_box">
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_6"></div>
              <div id="inputsProportion"></div>
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
        <div class="mapPointExample mapPointExample_TRP"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div">
          <div class="management-charts-title">农药趋势</div>
          <div class="text_box">
              <div>
                <span>2019年/吨</span>
                <span style="color:#83E914">{{inputsPesticide.twoData}}</span>
              </div>
              <div>
                <span>2018年/吨</span>
                <span style="color:#01E8FD">{{inputsPesticide.oneData}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 45px);padding-top:5px;">
            <div class="echarts_box" id="inputsPesticideChart"></div>
          </div>
          <!-- <div id="inputsPesticideChart" class="management-charts-height"></div> -->
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div">
          <div class="management-charts-title">农用柴油趋势</div>
          <div class="text_box">
              <div>
                <span>2019年/吨</span>
                <span style="color:#83E914">{{inputsSeed.twoData}}</span>
              </div>
              <div>
                <span>2018年/吨</span>
                <span style="color:#01E8FD">{{inputsSeed.oneData}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 45px);padding-top:5px;">
            <div class="echarts_box" id="inputsSeedChart"></div>
          </div>
          <!-- <div id="inputsSeedChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">化肥趋势</div>
          <div class="text_box">
              <div>
                <span>2019年/吨</span>
                <span style="color:#83E914">{{inputsChemicalChart.twoData}}</span>
              </div>
              <div>
                <span>2018年/吨</span>
                <span style="color:#01E8FD">{{inputsChemicalChart.oneData}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 45px);padding-top:5px;">
            <div class="echarts_box" id="inputsChemicalChart"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0 0 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-other-div">
          <div class="management-charts-title" style="position: relative;">农膜覆盖及回收利用情况({{HSLY_year}})
            <div class="choice_btn">
              <div :class="touRuPin_flag ? 'sanPinYiBiao_active' :''" @click="changeFlig_1">地膜</div>
              <div :class="touRuPin_flag ? '' :'sanPinYiBiao_active'" @click="changeFlig_2">棚膜</div>
            </div>
          </div>
          
          <div class="content_box">

              <div class="TRP_ul_box">

                <ul>
                  <li>地区</li>
                  <li>
                    <p>覆盖面积(万亩)</p>
                  </li>
                  <li>
                    <p>用量(吨)</p>
                  </li>
                  <li>
                    <p>回收量(吨)</p>
                  </li>
                  <li>
                    <p>回收率(%)</p>
                  </li>
                </ul>

                <ul v-for="(item,index) in tableList" :key="index" v-if="tabType==='film'">
                  <li>{{item.township}}</li>
                  <li>{{item.filmCoverArea}}</li>
                  <li>{{item.filmConsumption}}</li>
                  <li>{{item.filmRecovery}}</li>
                  <li>{{item.filmRate}}</li>
                </ul>

                <ul v-for="(item,index) in tableList" :key="index" v-if="tabType==='plastic'">
                  <li>{{item.township}}</li>
                  <li>{{item.plasticCoverArea}}</li>
                  <li>{{item.plasticConsumption}}</li>
                  <li>{{item.plasticRecovery}}</li>
                  <li>{{item.plasticRate}}</li>
                </ul>

              </div>

          </div>

        </div>
      </el-col>

      <el-col :span="6">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">地膜趋势</div>
          <div class="text_box">
              <div>
                <span>2019年/吨</span>
                <span style="color:#83E914">{{inputsFilmChart.twoData}}</span>
              </div>
              <div>
                <span>2018年/吨</span>
                <span style="color:#01E8FD">{{inputsFilmChart.oneData}}</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 45px);padding-top:5px;">
            <div class="echarts_box" id="inputsFilmChart"></div>
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
              <span>{{(scope.row.percentage * 100).toFixed(2) + "%"}}</span>
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
import chart from "../../js/santaiEcharts/visInputs";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
export default {
  data() {
    return {
      HSLY_year: 0,
      TRP_year: 0,
      TRPZB_year: 0,
      touRuPin_flag:true,
      touRuPinGetValue:'地膜',
      //农膜覆盖及回收利用情况
      tableList:[],

      // 控制弹窗显示隐藏
      dialogProportiChart: false,
      dialogPlantCount: false,
      dialogPlantHistoryChart: false,
      dialogPlantHistoryAreaChart: false,
      dialogPlantHistoryOutputChart: false,
      dialogDiMo: false,
      tabType:'film',
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
        stotes_name: "农资网点名称",
        contacts: "联系人",
        telphone: "电话",
        addresss: "地址",
        agr_materials_type: "农资种类",
        //price: "农资价格"
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
  mounted() {
    this.initLayer();
    
    this.getTableList()
    //获取投入品数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/getInputortSort"
      )
      .then(
        res => {
          this.TRP_year = res.data.data[0].years
          this.touRuPinData = res.data.data;
        },
        err => {
           this.$message.error("投入品数据请求失败！");
        }
      );
    //获取投入品占比数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/getInputortSort"
      )
      .then(
        res => {
          this.TRPZB_year = res.data.data[0].years
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

      liquidfill.liquidfill_left('st_liqui_6','投入品','22%')

    //获取地膜数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/agriculturalProduction"
      )
      .then(
        res => {
          var inputsFilmX = [];
          var inputsFilmY1 = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.material_mulch_use == null) {
                item.material_mulch_use = 0;
              }
              if (item.data_year == null) {
                item.data_year = "";
              }
              inputsFilmX.push(item.data_year);
              inputsFilmY1.push(item.material_mulch_use);
            }
          });
          let arraySlice = res.data.data.slice(-2)
          arraySlice.map((item,index) =>{
            if(index === 0){
              this.inputsFilmChart.oneData += item.material_mulch_use; //2018
            }
            if(index === 1){
              this.inputsFilmChart.twoData += item.material_mulch_use; //2019
            }
          })

          this.initInputsFilmChart(inputsFilmX, inputsFilmY1);
        },
        err => {
          // this.$message.error("获取地膜数据请求失败！");
        }
      );


    //获取农药数据
    this.$http
      .get(
        api.ip + "/web/agriculturalInputs/agriculturalProduction"
      )
      .then(
        res => {
          let dataX = [];
          let dataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.material_pesticide_use == null) {
                item.material_pesticide_use = 0;
              }
              if (item.data_year == null) {
                item.data_year = "";
              }
              dataX.push(item.data_year);
              dataY.push(item.material_pesticide_use);
            }
          });
          let arraySlice = res.data.data.slice(-2)
          arraySlice.map((item,index) =>{
            if(index === 0){
              this.inputsPesticide.oneData += item.material_pesticide_use
            }
            if(index === 1){
              this.inputsPesticide.twoData += item.material_pesticide_use
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
        api.ip + "/web/agriculturalInputs/agriculturalProduction"
      )
      .then(
        res => {
          let dataX = [];
          let dataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.material_diesel_use == null) {
                item.material_diesel_use = 0;
              }
              if (item.data_year == null) {
                item.data_year = "";
              }
              dataX.push(item.data_year);
              dataY.push(item.material_diesel_use);
            }
          });
          let arraySlice = res.data.data.slice(-2)
          arraySlice.map((item,index) =>{
            if(index === 0){
              this.inputsSeed.oneData += item.material_diesel_use
            }
            if(index === 1){
              this.inputsSeed.twoData += item.material_diesel_use
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
        api.ip + "/web/production/getFertilizerTrend"
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
           var importantAreaPlantDataX = [];
          var importantAreaPlantDataY1 = [];
          var importantAreaPlantDataY2 = [];
          var importantAreaPlantDataY3 = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.cropName == null) {
                item.cropName = "";
              }
              if (item.machineType == null && item.machineType != null) { //机耕面积
                item.machineType = "";
              }
              if(item.machineType == '机耕面积'){
                importantAreaPlantDataY1.push(item.areas);
                this.JG_TOTAL += item.areas;
              }
              if(item.machineType == '机播面积'){
                importantAreaPlantDataY2.push(item.areas);
                this.JB_TOTAL += item.areas;
              }if(item.machineType == '机收面积'){
                importantAreaPlantDataY3.push(item.areas);
                this.JS_TOTAL += item.areas;
              }
              if (item.realityLoss == null && item.realityLoss != null) {
                item.realityLoss = "";
              }
              if(importantAreaPlantDataX.indexOf(item.cropName)<0){
                 importantAreaPlantDataX.push(item.cropName);
              }
             
            }
          });
          this.initArgJobStatesChart(importantAreaPlantDataX,importantAreaPlantDataY1,importantAreaPlantDataY2,importantAreaPlantDataY3);
        },
        err => {
          // this.$message.error("化肥数据请求失败！");
        }
      );
  },
  methods: {
    changeFlig_1(){
      this.touRuPin_flag = true
      this.touRuPinGetValue = '地膜'
      this.tabType='film'
      this.getTableList()
    },
    changeFlig_2(){
      this.touRuPin_flag = false
      this.touRuPinGetValue = '棚膜'
      this.tabType='plastic'
      this.getTableList()
    },
    //农膜覆盖及回收利用情况
    async getTableList(){

      this.$http
      .get(
        api.ip + `/web/agriculturalInputs/getFilmRecovery?type=${this.touRuPinGetValue}`
      )
      .then(
        res => {
          this.HSLY_year = res.data.data[0].years
          this.tableList = res.data.data
        }
      )
    },
    //投入品投入占比
    initInputsProportion(data) {
      chart.EchartsInputsProportion("inputsProportion", data);
    },
    //地膜
    initInputsFilmChart(dataX, dataY1) {
      chart.EchartsInputsFilmChart("inputsFilmChart", dataX, dataY1);
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
        layername: "v_agricultural_stores",
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
  }
};
</script>
<style>
</style>

