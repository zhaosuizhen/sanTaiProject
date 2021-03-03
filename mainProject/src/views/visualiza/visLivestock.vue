<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">
      
      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div" style="position: relative;">
          <!-- <div class="management-top-div"> -->
          <div class="management-charts-title">养殖数据</div>
          <div class="choice_btn">
            <div :class="choiceYear == 2018 ? '' :'sanPinYiBiao_active'" @click="changeEcharts_6">2019年</div>
            <div :class="choiceYear == 2018 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_5">2020年</div>
          </div>
          <div class="content_box" @click="handleCount" style="padding: 10px 20px 10px 0;">
            <div class="left_echarts XMYZ_img" style="width:55%"></div>
            <div class="left_echarts XMYZ_gif" style="width:55%"></div>

            <div class="right_text right_text_XMYZ" style="width:45%">
              <ul class="coolPig">
                <!-- <li>
                  <p>养殖场数量/家</p>
                  <p style="color:#43BAFF">{{breederNum}}</p>
                </li>
                <li>
                  <p>生猪存栏量/万头</p>
                  <p style="color:#FEAD5C">{{(amountNum/10000).toFixed(2)}}</p>
                </li>
                <li>
                  <p>生猪出栏量/万头</p>
                  <p style="color:#36E4FF">{{(outNum/10000).toFixed(2)}}</p>
                </li> -->
                <li>
                  <p><span>{{LTQY_count}}</span><span style="color:#fff;font-size:0.1rem">/家</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">龙头企业</p>
                </li>
                <li>
                  <p><span>{{YZC_count}}</span><span style="color:#fff;font-size:0.1rem">/家</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">规模养殖场</p>
                </li>
                <li>
                  <p><span>{{(amountNum/10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万头</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">生猪存栏</p>
                </li>
                <li>
                  <p><span>{{(outNum/10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万头</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">生猪出栏</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleUnitType"> -->
        <div class="management-top-div">
          <div class="management-charts-title">养殖产量占比统计({{YZCL_year}})</div>
          <div class="content_box" style="position: relative;">
            

            <!-- <div class="echarts_box_1 echarts_box_liq" style="height:calc(100% - 90px)"> -->
              
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_1"></div>
              <div id="yangZhiChanLiang"></div>
            </div>
            <!-- </div> -->
          </div>
          <!-- <div id="manageZhuTiChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative;">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        
        <div style="width: 100%;height: 100%;">
          <!-- <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap> -->
          <middleMap11 v-if="radio == '1'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap11>
          <middleMap12 v-if="radio == '2'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap12>
        </div>
        
        <div v-if="radio == '2'" style="margin-right:0.3rem;margin-top:0.2rem" class="pigExample"><img src="../../assets/santai_img/mapExample/pigExample.png" alt=""></div>
        
        <div class="radioBox">
          <el-radio-group v-model="radio" @change="changeRadio">
            <el-radio label="1" style="color:#eee">养殖场</el-radio>
            <el-radio label="2" style="color:#eee">大型种猪养殖场</el-radio>
          </el-radio-group>
        </div>

        <div v-if="radio == '1'" class="mapPointExample mapPointExample_pig"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">视频监控</div> <!--@click="handleLastyearChart"-->
          <div class="choice_btn_pig">
            <div :class="'sanPinYiBiao_active'" @click="openPigDialog">…</div>
          </div>
          <div class="content_box" id="videobox">

            <video id="video" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                <source id="source" ref="video" src=""  type="application/x-mpegURL">
            </video>

          </div>
          <!-- <div id="geographyLastYearChart" class="management-charts-height"></div> -->
        </div>

        <!-- <div class="management-top-div" @click="handleTownsChart"> -->
        <div class="management-top-div3" style="height:95%;position: relative;">
          <div class="management-charts-title">饲料原料价格统计</div>
          <div class="choice_btn">
            <div :class="siLiaoYuanLiao_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_1">玉米</div>
            <div :class="siLiaoYuanLiao_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_2">豆粕</div>
          </div>
          
          <div class="SLYL_top_text">
            <p class="table_title_SLYL">
                <span class="title_time">日期</span>
                <span class="title_SC" style="text-align:center">四川/元</span>
                <span class="title_QG" style="text-align:center">全国/元</span>
                <span class="title_difference" style="text-align:center">差额/元</span>
            </p>

            <div class="table_box">
              <ul v-show="siLiaoYuanLiao_flag" class="yuYeRenKou" id="roll_table_YM">
                <li v-for="(item,index) in table_YM" :key="index">
                  <span class="title_time">{{item.time}}</span>
                  <span class="title_SC" style="text-align:center">{{item.siChuanYuMi}}</span>
                  <span class="title_QG" style="text-align:center">{{item.quanGuoYuMi}}</span>
                  <span class="title_difference" style="text-align:center">
                    <span v-if="item.difference > 0" style="color:red">↑</span>
                    <span v-else style="color:green">↓</span>
                    <span v-if="item.difference > 0" style="color:red">{{item.difference}}</span>
                    <span v-else style="color:green">{{item.difference}}</span>
                  </span>
                </li>
              </ul>

              <ul v-show="!siLiaoYuanLiao_flag" class="yuYeRenKou" id="roll_table_DP">
                <li v-for="(item,index) in table_DP" :key="index">
                  <span class="title_time">{{item.time}}</span>
                  <span class="title_SC" style="text-align:center">{{item.siChuanYuMi}}</span>
                  <span class="title_QG" style="text-align:center">{{item.quanGuoYuMi}}</span>
                  <span class="title_difference" style="text-align:center">
                    <span v-if="item.difference > 0" style="color:red">↑</span>
                    <span v-else style="color:green">↓</span>
                    <span v-if="item.difference > 0" style="color:red">{{item.difference}}</span>
                    <span v-else style="color:green">{{item.difference}}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="SLYL_bottom_echarts">
            <div class="content_box" style="height:100%">
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
              <div class="echarts_box" id="SLYLJG_YM" style="height:90%"></div>
            </div>
          </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6">
        <div class="management-bottom-index-div" @click="YZCBJGdialog">
          <div class="management-charts-title">养殖成本结构</div>
          <div class="text_box">
              <div>
                <!-- <span>{{YZCB_time[YZCB_time.length - 1]}}饲料成本</span> -->
                <span>饲料成本</span>
                <span style="color:#83E914">{{YZCB_feed[YZCB_feed.length - 1]}}元/头</span>
              </div>
              <div>
                <!-- <span>{{YZCB_time[YZCB_time.length - 1]}}仔猪成本</span> -->
                <span>仔猪成本</span>
                <span style="color:#00F6FF">{{YZCB_pig[YZCB_pig.length - 1]}}元/头</span>
              </div>
              <div style="width:98%">
                <!-- <span>{{YZCB_time[YZCB_time.length - 1]}}养殖成本</span> -->
                <span>养殖成本</span>
                <span style="color:#DAC57C">{{YZCB_bread[YZCB_bread.length - 1]}}元/头</span>
              </div>
            </div>
          <div class="content_box">
            <div class="echarts_box" id="yangZhiChengBen" ></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0">
        <div class="management-bottom-other-div" style="position: relative;" >
          <div class="management-charts-title">乡镇养殖规模(2019)</div>
          <div class="choice_btn">
            <div :class="xiangZhenYangZhi_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_3">出栏</div>
            <div :class="xiangZhenYangZhi_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_4">存栏</div>
          </div>
          <!-- <div id="manageJingYingChart" class="management-charts-height"></div> -->
          <div class="text_box_1">
            <div v-for="(item,index) in XZYZ_bigArr" :key="index">
              <span>{{item.name}}</span>
              <span style="color:#83E914">{{item.value}}头</span>
            </div>
          </div>
          <div class="content_box">
            <div class="echarts_box" id="xiangZhenYangZhi" @click="XZYZGMdialog"></div>
          </div>
        </div>
      </el-col>



    </div>


    
    <!-- 生猪视频弹窗 -->
    <div class="pig_video_dialog vis-geography">
        <el-dialog :visible.sync="pigDialogFlag" width="90%">
            <div class="video_big_box">
              <div class="noClick"></div>
              <!-- 1 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox1">
                    <video id="video1" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source1" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 2 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox2">
                    <video id="video2" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source2" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 3 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox3">
                    <video id="video3" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source3" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 4 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox4">
                    <video id="video4" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source4" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 5 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox5">
                    <video id="video5" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source5" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 6 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox6">
                    <video id="video6" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source6" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 7 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox7">
                    <video id="video7" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source7" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 8 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox8">
                    <video id="video8" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source8" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 9 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox9">
                    <video id="video9" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source9" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
            </div>
        </el-dialog>
    </div>

    <!-- 养殖成本结构弹窗 -->

    <div class="YZCBJG_dialog vis-geography">
        <el-dialog title="养殖成本结构数据" :visible.sync="YZCBJG_dialog_flag" width="55%">
            <el-table
              :data="YZCBJG_tableData"
              style="width: 98%;height:100%;left:1%">
              <el-table-column prop="dataTime" label="日期" width="180"></el-table-column>
              <el-table-column prop="feedCost" label="饲料成本（元）" width="180"></el-table-column>
              <el-table-column prop="pigCost" label="仔猪成本（元）" width="180"></el-table-column>
              <el-table-column prop="breedCost" label="养殖成本（元）"></el-table-column>
            </el-table>
        </el-dialog>
    </div>


    <!-- 乡镇养殖规模弹窗 -->

    <div class="XZYZGM_dialog vis-geography">
        <el-dialog :title="`乡镇养殖规模数据（${xiangZhenYangZhi_flag ? '出栏' : '存栏'}）`" :visible.sync="XZYZGM_dialog_flag" width="55%">
            <el-form :inline="true">
              <el-form-item>
                <el-input
                  v-model.trim = "XZYZGM_textValue"
                  placeholder="养殖户名称"
                  class="dialog-input"
                  clearable
                  @keydown.enter.native="XZYZGM_search"
                ></el-input>
              </el-form-item>
              <el-button type="primary" class="dialog-btn" @click="XZYZGM_search" icon="el-icon-search"></el-button>
            </el-form>
            <el-table
              :data="XZYZGM_tableData"
              style="width: 98%;height:100%;left:1%">
              <el-table-column prop="township" label="所在镇（乡）" width="180"></el-table-column>
              <el-table-column prop="farmName" label="养殖场户名称" ></el-table-column>
              <el-table-column prop="stock" label="畜种" ></el-table-column>
              <el-table-column prop="varieties" label="养殖种类" ></el-table-column>
              <el-table-column v-if="xiangZhenYangZhi_flag" prop="outNum" label="2018年出栏量（头）" ></el-table-column>
              <el-table-column v-else prop="amountNum" label="2018年存栏量（头）" ></el-table-column>
            </el-table>
            <el-pagination
              layout="prev, pager, next"
              :current-page.sync="XZYZGM_currentPage"
              @current-change="XZYZGM_changePage"
              :total="XZYZGM_total">
            </el-pagination>
        </el-dialog>
    </div>

    <!-- 养殖数据弹窗 -->

    <div class="vis-geography">
      <el-dialog title="乡镇养殖规模数据（出栏）" :visible.sync="dialogGeographyStatisticsChart" width="90%">
        <el-form :inline="true">
              <el-form-item>
                <el-input
                  v-model.trim = "XZYZGM_textValue"
                  placeholder="养殖户名称"
                  class="dialog-input"
                  clearable
                  @keydown.enter.native="XZYZGM_search"
                ></el-input>
              </el-form-item>
              <el-button type="primary" class="dialog-btn" @click="XZYZGM_search" icon="el-icon-search"></el-button>
            </el-form>
            <el-table
              :data="XZYZGM_tableData"
              style="width: 98%;height:100%;left:1%">
              <el-table-column prop="township" label="所在镇（乡）" width="180"></el-table-column>
              <el-table-column prop="farmName" label="养殖场户名称" ></el-table-column>
              <el-table-column prop="stock" label="畜种" ></el-table-column>
              <el-table-column prop="varieties" label="养殖种类" ></el-table-column>
              <el-table-column prop="varieties" label="主要品种" ></el-table-column>
              <el-table-column prop="address" label="详细地址" ></el-table-column>
              <el-table-column prop="legalName" label="法人代表或负责人" ></el-table-column>
              <el-table-column prop="mobilePhone" label="移动电话" ></el-table-column>
              <el-table-column prop="scale" label="设计规模（头）" ></el-table-column>
              <el-table-column prop="amountNum" label="当前存栏（头）" ></el-table-column>
              <el-table-column prop="canReproduction" label="其中能繁母畜存栏（头）" ></el-table-column>
              <el-table-column prop="outNum" label="2018年出栏量（头）" ></el-table-column>
            </el-table>
            <el-pagination
              layout="prev, pager, next"
              :current-page.sync="XZYZGM_currentPage"
              @current-change="XZYZGM_changePage"
              :total="XZYZGM_total">
            </el-pagination>
      </el-dialog>
    </div>

    <!--经营主体数据弹窗-->
    <!-- <div class="vis-geography">
      <el-dialog title="养殖数据" :visible.sync="dialogGeographyStatisticsChart" :close-on-press-escape='false' :close-on-click-modal='false'>
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
          <el-table-column property="areaCovered" label="占地面积(亩)" :show-overflow-tooltip="true" :resizable="false"> -->
            <!--<template slot-scope="scope">-->
              <!--<span>{{scope.row.areaCovered}}</span>-->
            <!--</template>-->
          <!-- </el-table-column>
          <el-table-column property="registeredCapital" label="主体产值(万元)" :show-overflow-tooltip="true" :resizable="false"> -->
            <!--<template slot-scope="scope">-->
              <!--<span>{{scope.row.registeredCapital.toFixed(1)}}</span>-->
            <!--</template>-->
          <!-- </el-table-column>

          <el-table-column property="unitType" label="主体类型" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="township" label="所属乡镇" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="registrationDate" label="注册日期" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table> -->
        <!-- 分页导航条 -->
        <!-- <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum"
          :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div> -->

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
import middleMap11 from "./middleMap11";
import middleMap12 from "./middleMap12";
import chart1 from "../../js/visualiza/visLivestock";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import echarts from '../../js/santaiEcharts/visLivestock'
import echarts_home from '../../js/santaiEcharts/home'
import { getBreedProportion, getMaterialPrice, getLiveStockYield, getLiveStockData, getPigVideoUrl, getBreedPageList } from '../../api/visLivestock'
import { getcoststructure } from '../../api/home'
import { startmarquee, getBig } from '../../util/util'
import VideoCom from '../video';

import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
export default {
  data() {
    return {
      LTQY_count:9,//龙头企业数量
      YZC_count:510,//养殖场数量
      radio:'1',//单选
      thisYear:new Date().getFullYear() - 1,
      lastYear:new Date().getFullYear() - 2,
      choiceYear:new Date().getFullYear() - 1,//选择年份
      //乡镇养殖规模分页数据
      XZYZGM_textValue: '',
      XZYZGM_currentPage:1,
      XZYZGM_pageSize:10,
      XZYZGM_total: 0,
      //生猪视频地址
      pig_videp_urls:[],
      pigDialogFlag: true,
      //生猪养殖数据
      amountNum: 0,   //存栏数量
      breederNum: 0,  //养殖场数量
      outNum: 0,  //出栏数量
      //养殖规模数据
      XZYZGM_dialog_flag: false,
      XZYZGM_tableData:[],
      XZYZGM_inData:[],
      XZYZGM_outData:[],
      //乡镇养殖规模----出栏
      XZYZ_city_out: [],
      XZYZ_value_uot: [],
      XZYZ_bigArr: [],
      //乡镇养殖规模----存栏
      XZYZ_city_in: [],
      XZYZ_value_in: [],
      //养殖成本结构数据  
      YZCBJG_tableData: {},
      YZCBJG_dialog_flag: false,
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
      YZCL_year: 0,
      YZCL_data: [],
      siLiaoYuanLiao_flag: true,
      xiangZhenYangZhi_flag: true,
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
        farm_name: "养殖场名称",
        //management_abbreviation: "经营主体简称",
        // unit_property: "单位性质",
        // unit_type: "单位类型",
        //official_website: "官方网站",
        //unit_introduction: "单位简介",
        /*longitude: "经度",
          latitude: "纬度",*/
        // area_covered: "占地面积(亩)",
        amount_num:"存栏量(头)",
        out_num:"出栏量(头)",
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
    VideoCom,
    middleMap11,
    middleMap12
  },
  async mounted() {
    // this.initLayer();
    this.pigDialogFlag = false
    startmarquee(30,30,1,"roll_table_YM"); //表格自动滚动
    startmarquee(30,30,1,"roll_table_DP"); //表格自动滚动

    //获取乡镇养殖规模分页数据
    await this.getBreedPageListData()
    //获取生猪养殖数据
    await this.getLiveStockData_pig()
    //获取养殖规模数据————dataType=0：存栏、dataType=1：出栏
    await this.getLiveStockYieldData()
    //获取饲料原料价格数据 
    await this.getMaterialPriceData()
    //获取养殖产量占比数据 
    await this.getBreedProportionData()
    //获取养殖成本结构数据  
    await this.getCostStructure()

    echarts.siLiaoYuanLiao_YM('SLYLJG_YM', this.time, this.siChuanYuMi, this.quanGuoYuMi )
    echarts.xiangZhenYangZhi('xiangZhenYangZhi', this.XZYZ_city_out, this.XZYZ_value_out)
    echarts_home.yangZhiChengBen('yangZhiChengBen', this.YZCB_time, this.YZCB_bread, this.YZCB_feed, this.YZCB_pig)
    echarts.yangZhiChanLiang('yangZhiChanLiang', this.YZCL_data)
    liquidfill.liquidfill_left('st_liqui_1','养殖品种')
    //获取视频地址
    await this.getPigVideoUrlData()

    
  },
  async created(){

    //获取视频地址
    // await this.getPigVideoUrlData()

    //播放视频
    // await this.playVideo()
  },
  methods: {
    //乡镇养殖规模弹窗
    XZYZGM_search(){
      // if(this.XZYZGM_textValue.trim()){
        this.getBreedPageListData()
      // }
      this.XZYZGM_textValue = ''
    },
    XZYZGM_changePage(val){
      this.XZYZGM_currentPage = val
      this.getBreedPageListData()
    },
    XZYZGMdialog(){
      this.XZYZGM_dialog_flag = true
      this.XZYZGM_currentPage = 1
      this.XZYZGM_textValue = ''
      this.getBreedPageListData()
    },
    //养殖成本结构弹窗
    YZCBJGdialog(){
      this.YZCBJG_dialog_flag = true
    },
    //生猪视频弹框
    async openPigDialog(){
      this.pigDialogFlag = true
    },
    //获取视频地址
    async getPigVideoUrlData(){
      let res = await getPigVideoUrl()
      this.pig_videp_urls = res.data.data.urls

      this.changeVideo('videobox', 6, 'video', 'source')
      this.changeVideo('videobox1', 11, 'video1', 'source1')
      this.changeVideo('videobox2', 12, 'video2', 'source2')
      this.changeVideo('videobox3', 13, 'video3', 'source3')
      this.changeVideo('videobox4', 2, 'video4', 'source4')
      this.changeVideo('videobox5', 4, 'video5', 'source5')
      this.changeVideo('videobox6', 5, 'video6', 'source6')
      this.changeVideo('videobox7', 10, 'video7', 'source7')
      this.changeVideo('videobox8', 8, 'video8', 'source8')
      this.changeVideo('videobox9', 9, 'video9', 'source9')
    },

    changeVideo (boxID,index,videoID,sourceID) {
            var player = videojs(videoID)                 //通过id获取到video对象
            player.pause()                                  //暂停video
            player.dispose()                                //销毁当前video
            document.getElementById(boxID).innerHTML = ''
            var str2 = `<video id="${videoID}"  class="video-js vjs-default-skin vjs-big-play-centered video-player"
                    poster="../assets/images/login-bg.jpg"
                    controls
                    autoplay="autoplay"
                    muted
                    preload="auto"
                    data-setup="{}">
                <source id="${sourceID}" src="${this.pig_videp_urls[index]}" type="application/x-mpegURL"> // 重新加载videojs，并赋值url
            </video>`
            document.getElementById(boxID).innerHTML = str2
            
            videojs(videoID, {
                bigPlayButton: false,            //播放按钮
                textTrackDisplay: false,        
                posterImage: false,              //封面图片
                errorDisplay: false             //错误显示
            }, function () {
                this.play()
            })
    },
    //获乡镇养殖规模分页数据
    async getBreedPageListData(){
      let res = await getBreedPageList({
        currentPage: this.XZYZGM_currentPage,
        pageSize: this.XZYZGM_pageSize,
        farmName: this.XZYZGM_textValue
      })
      this.XZYZGM_tableData = res.data.data.list
      this.XZYZGM_total = res.data.data.total
      console.log(res.data.data)
    },
    //获取生猪统计数据
    async getLiveStockData_pig(){
      let res = await getLiveStockData({year:this.choiceYear})
      this.amountNum = res.data.data.amountNum
      this.breederNum = res.data.data.breederNum
      this.outNum = res.data.data.outNum
    },
    //获取养殖规模数据————dataType=0：存栏、dataType=1：出栏
    async getLiveStockYieldData(){
      let res_out = await getLiveStockYield({dataType:1}) //出栏
      let res_in = await getLiveStockYield({dataType:0})  //存栏
      console.log(res_out);
      this.XZYZ_city_out = res_out.data.data.map(item => item.township)
      this.XZYZ_value_out = res_out.data.data.map(item => item.yieldnum)

      this.XZYZGM_inData = res_in.data.data
      this.XZYZGM_outData = res_out.data.data

      this.XZYZ_bigArr = getBig(
        res_out.data.data.map(item => {
          return {
            name: item.township,
            value: item.yieldnum
          }
        }),3)

      this.XZYZ_city_in = res_in.data.data.map(item => item.township)
      this.XZYZ_value_in = res_in.data.data.map(item => item.yieldnum)

      // res_in.data.data.forEach(itemin => {
      //     res_out.data.data.forEach(itemout => {
      //       if(itemout.township == itemin.township){
      //         this.XZYZGM_tableData.push({
      //           township: itemin.township,
      //           countsIN: itemin.yieldnum,
      //           countOUT: itemout.yieldnum
      //         })
      //       }
      //     })
      // })

      // res_in.data.data.forEach((itemIN,index) => {
      //   this.XZYZGM_tableData.forEach(item => {
      //     if(itemIN.township == item.township){
      //       res_in.data.data[index] = null
      //     }
      //   })
      // })
      // res_in.data.data.forEach(item => {
      //   if(item != null){
      //     this.XZYZGM_tableData.push({
      //       township: item.township,
      //       countsIN: item.yieldnum,
      //       countOUT: '/'
      //     })
      //   }
      // })


      // res_out.data.data.forEach((itemOUT,index) => {
      //   this.XZYZGM_tableData.forEach(item => {
      //     if(itemOUT.township == item.township){
      //       res_out.data.data[index] = null
      //     }
      //   })
      // })
      // res_out.data.data.forEach(item => {
      //   if(item != null){
      //     this.XZYZGM_tableData.push({
      //       township: item.township,
      //       countsIN: '/',
      //       countOUT: item.yieldnum
      //     })
      //   }
      // })
    },
    //获取养殖成本结构数据  
    async getCostStructure(){
      let res = await getcoststructure()
      res.data.data.reverse()
      this.YZCB_time = res.data.data.map(item => item.dataTime)
      this.YZCB_feed = res.data.data.map(item => item.feedCost)
      this.YZCB_bread = res.data.data.map(item => item.breedCost)
      this.YZCB_pig = res.data.data.map(item => item.pigCost)

      this.YZCBJG_tableData = res.data.data
      // console.log(this.YZCBJG_tableData)
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
      let result = new Array();
      let honeyArray={};
      let honey=res.data.data.honey;
      honeyArray.livestoc_type="天然蜂蜜"
      honeyArray.yieldNum=honey
      result.push(honeyArray)
      let egg=res.data.data.egg;
      let eggArray={};
      eggArray.livestoc_type="禽蛋产量"
      eggArray.yieldNum=egg
      result.push(eggArray)
      let pork=res.data.data.pork;
      let porkArray={};
      porkArray.livestoc_type="猪"
      porkArray.yieldNum=pork
      result.push(porkArray)
      let beef=res.data.data.beef;
      let beefArray={};
      beefArray.livestoc_type="牛"
      beefArray.yieldNum=beef
      result.push(beefArray)
      let mutton=res.data.data.mutton;
      let muttonArray={};
      muttonArray.livestoc_type="羊"
      muttonArray.yieldNum=mutton
      result.push(muttonArray)
      let otherArray={};
      let other_meat=res.data.data.otherMeat;
      otherArray.livestoc_type="其他"
      otherArray.yieldNum=other_meat
      result.push(otherArray)
      for(var i = 0;i < result.length - 1;i++){
            for(var j = result.length - 1;j > i;j--){
              if(result[i].yieldNum < result[j].yieldNum){
                var temp = result[i]
                result[i] = result[j]
                result[j] = temp
              }
            }
      }
// console.log(res.data.data.dataYear);
      this.YZCL_year = res.data.data.dataYear

      this.YZCL_data = result.map(item => {
        return {
          name: item.livestoc_type,
          value: item.yieldNum
        }
      })
    },
    changeEcharts_1(){
      this.siLiaoYuanLiao_flag = true
      echarts.siLiaoYuanLiao_YM('SLYLJG_YM', this.time, this.siChuanYuMi, this.quanGuoYuMi )
      // echarts.sanPinYiBiao_1('sanPinYiBiao', this.WGH_name, this.WGH_value)
    },
    changeEcharts_2(){
      this.siLiaoYuanLiao_flag = false
      echarts.siLiaoYuanLiao_DP('SLYLJG_YM', this.time, this.siChuanDouPo, this.quanGuoDouPo )
      // echarts.sanPinYiBiao_2('sanPinYiBiao', this.YJ_name, this.YJ_value)
    },
    async changeEcharts_3(){
      this.xiangZhenYangZhi_flag = true
      echarts.xiangZhenYangZhi('xiangZhenYangZhi', this.XZYZ_city_out, this.XZYZ_value_out)
      let res_out = await getLiveStockYield({dataType:1}) //出栏
      this.XZYZ_bigArr = getBig(
        res_out.data.data.map(item => {
          return {
            name: item.township,
            value: item.yieldnum
          }
        }),3)
      // echarts.sanPinYiBiao_1('sanPinYiBiao', this.WGH_name, this.WGH_value)
    },
    async changeEcharts_4(){
      this.xiangZhenYangZhi_flag = false
      echarts.xiangZhenYangZhi('xiangZhenYangZhi', this.XZYZ_city_in, this.XZYZ_value_in)
      let res_in = await getLiveStockYield({dataType:0})  //存栏
      this.XZYZ_bigArr = getBig(
        res_in.data.data.map(item => {
          return {
            name: item.township,
            value: item.yieldnum
          }
        }),3)
      // echarts.sanPinYiBiao_2('sanPinYiBiao', this.YJ_name, this.YJ_value)
    },
    changeEcharts_5(){
      this.LTQY_count = 13
      this.YZC_count = 540
      
      // this.choiceYear = this.lastYear
      this.choiceYear = 2018

      this.amountNum = 640412
      this.outNum = 1035552
      // this.getLiveStockData_pig()
    },
    changeEcharts_6(){
      this.LTQY_count = 9
      this.YZC_count = 510

      // this.choiceYear = this.thisYear
      this.choiceYear = 2019
      this.getLiveStockData_pig()
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
        layername: "v_livestoc_breeding",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.managementTextMapping) {
            if(_this.managementTextMapping[key] == '占地面积(亩)'){
              data.push({
                title: _this.managementTextMapping[key],
                value: parseFloat(e.get(key).toFixed(2))
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
      this.XZYZGM_currentPage = 1
      this.XZYZGM_textValue = ''
      this.getBreedPageListData()

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
