<template>
  <div class="about-platform-body" style="background-color: #ffffff;">
    <div class="basicData">
      <img :src="imgSrc" width="100%" height="100%" alt="">
    </div>
    <div class="webSite-content-total">
      <div class="webSite-content1" style="height: 100%;width: 100%;">
        <div class="webSite-content1-center" style="height: 100%;">
          <!--重大动物疫情疫病监测预警-->
          <el-row class="resources-new-row-bottom" style="margin-top: 3%;">
            <el-row>
              <div class="new-resources-list-top">
                <span>重大动物疫情疫病监测预警</span>
              </div>
            </el-row>

            <el-row>
              <el-col :span="12" class="webSite-new-resources-list">
                <div class="webSite-new-resources-list-title"><span>生猪</span></div>
                <div class="resources-new-chart" id="zddwyqybjcyjChart2" @click="openSZdialog"></div>
                <div class="resources-new-chart-text">
                  <h3 class="h3_title">疫情预警报告</h3>
                  <p>
                    截至2019年10月底，国际上共有27个国家发生或已经发生非洲猪瘟疫情……
                  </p>
                </div>
              </el-col>

              <el-col :span="12" class="webSite-new-resources-list">
                <div class="webSite-new-resources-list-title"><span>家禽</span></div>
                <div class="resources-new-chart" id="zddwyqybjcyjChart1" @click="openJQdialog"></div>
                <div class="resources-new-chart-text">
                  <h3 class="h3_title">疫情预警报告</h3>
                  <p>
                    总体从历史情况看，疫情对禽类市场的影响要看疫情发生地点、波及程度……
                  </p>
                </div>
              </el-col>
              <!-- <el-col :span="8" class="webSite-new-resources-list">
                <div class="webSite-new-resources-list-title"><span>水产品</span></div>
                <div class="resources-new-chart" id="zddwyqybjcyjChart3"></div>
                <div class="resources-new-chart-text">
                  <p>和县，隶属于安徽省马鞍山市，地处安徽省东部，长江下游北岸，东南与芜湖市裕溪口紧连，南与无为市以裕溪河为界，西与含山县接壤，西北隔滁河与全椒县毗邻。</p>
                </div>
              </el-col> -->
            </el-row>
          </el-row>

          <!--农业资源评估优化决策-->
          <el-row class="resources-new-row-bottom">
            <el-row>
              <div class="new-resources-list-top">
                <span>农业资源评估优化决策</span>
              </div>
            </el-row>

            <el-row>
              <el-col :span="8" class="webSite-new-resources-list-2">
                <div class="webSite-new-resources-list-title"><span>土地资源变化</span></div>
                <div class="resources-new-chart" id="nyzypgyhjcChart1" @click="openTDZYdialog"></div>
              </el-col>

              <el-col :span="8" class="webSite-new-resources-list-2">
                <div class="webSite-new-resources-list-title"><span>水资源变化</span></div>
                <div class="resources-new-chart" id="nyzypgyhjcChart2" @click="openSZYdialog"></div>
              </el-col>

              <el-col :span="8" class="webSite-new-resources-list-2">
                <div class="webSite-new-resources-list-title"><span>气候变化</span></div>
                <div class="resources-new-chart" id="nyzypgyhjcChart3" @click="openQHdialog"></div>
              </el-col>
            </el-row>

            <el-row>
              <div class="resources-new-chart-text-2">
                <h3 class="h3_title">资源变化报告</h3>
                <p style="margin-top: 10px;">
                  三台县位于四川盆地中部偏北，县境水资源主要来源于降水，受降水时空分布的影响较大，具有明显的夏雨型特征。
                  县境多年平均降水量为882.2毫米。四季气候分明，冬春降水少而夏秋降水集中，形成年际降水不均。降水最多的年曾达1523.5毫米，
                  最少年为598.8毫米。年降水和年径流区域分布上，总的趋势是降水量从县境中部往北边和南边两端递增...
                </p>
              </div>
            </el-row>
          </el-row>

          <!--农业市场信息监测预警-->
          <el-row class="resources-new-row-bottom">
            <el-row>
              <div class="new-resources-list-top">
                <span>农业市场信息监测预警</span>
              </div>
            </el-row>

            <el-row>

              <el-col :span="8" class="webSite-new-resources-list-3">
                <div class="webSite-new-resources-list-title"><span>辣椒</span></div>
                <div class="resources-new-chart" id="nyscxxjcyjChart1" @click="openLJdialog"></div>
                <div class="resources-new-chart-text">
                  <h3 class="h3_title">市场信息变化报告</h3>
                  <p>
                    虽然短期来看，辣椒行情高企，但业内人士表示，近十年来我国辣椒几个并没有出现大的波动……
                  </p>
                </div>
              </el-col>

              <el-col :span="8" class="webSite-new-resources-list-3">
                <div class="webSite-new-resources-list-title"><span>猪肉</span></div>
                <div class="resources-new-chart" id="nyscxxjcyjChart2" @click="openZRdialog"></div>
                <div class="resources-new-chart-text">
                  <h3 class="h3_title">市场信息变化报告</h3>
                  <p>
                    生猪价格整体持续弱势下跌，周末北方地区多小幅反弹……
                  </p>
                </div>
              </el-col>

              <el-col :span="8" class="webSite-new-resources-list-3">
                <div class="webSite-new-resources-list-title"><span>沃柑</span></div>
                <div class="resources-new-chart" id="nyscxxjcyjChart3" @click="openPTdialog"></div>
                <div class="resources-new-chart-text">
                  <h3 class="h3_title">市场信息变化报告</h3>
                  <p>
                    从2007年至2018年沃柑批发市场价格的预警计量结果可以发现……
                  </p>
                </div>
              </el-col>

            </el-row>

          </el-row>
        </div>
      </div>
    </div>
    <!--<div style="height:750px;"></div>-->
    <el-footer class="webSite-el-footer">
      <el-row class="webSite-el-footer-center">
        <el-col :span="7">
          <p>友情链接</p>
          <p><a class="footer-text" href="http://www.moa.gov.cn/" target="_blank">中华人民共和国农业部</a></p>
          <p><a class="footer-text"  href="http://www.agri.cn/" target="_blank">中国农业信息网</a></p>
          <p><a class="footer-text"  href="http://nynct.sc.gov.cn/" target="_blank">四川省农业厅</a></p>
          <p><a class="footer-text"  href="http://www.santai.gov.cn/" target="_blank">三台县人民政府</a></p>
        </el-col>
        <el-col :span="7">
          <p>
            <i>主管单位：</i><span class="footer-text">三台县农业农村局</span>
          </p>
          <p>
            <i>地址：</i><span class="footer-text">四川省绵阳市三台县北泉路833号</span>
          </p>
          <p>
            <i>电话：</i><span class="footer-text">0816-5331213</span>
          </p>
          <!-- <p>
          <i>传真：</i><span class="footer-text"></span>
          </p> -->
          <!-- <p>
            <i>备案号：</i><span class="footer-text">川ICP备11006006号</span>
          </p> -->
          <p>
            <i>技术支持：</i><span class="footer-text">联通（四川）产业互联网有限公司</span>
          </p>
        </el-col>
        <el-col :span="3" class="footer_logo">
          <img src="../../assets/webSiteImages/footer_logo.png" alt="">
        </el-col>
        <el-col :span="7">
          <img width="200" src=".././../assets/santai_img/xiaoChengXu.jpg" alt="">
        </el-col>
      </el-row>
    </el-footer>

    <!-- 生猪弹窗 -->
    <el-dialog
      title=""
      :visible.sync="SZ_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="zddwyqybjcyjChart2_dialog"></div>
      <p>
        截至2019年10月底，国际上共有27个国家发生或已经发生非洲猪瘟疫情，新发生疫情13826起。
        疫情并不能改变2020年生猪产能回升的大趋势，但在恢复节奏上会有明显变化
        。但因新冠状病毒原因由于饲料紧张和外运困难，养殖户压栏现象将短期内增加；
        养殖企业新建猪场开工推迟，其产能释放的时间节点也将延后。这将意味着从业者将享受更长的景气周期。
      </p>
    </el-dialog>

    <!-- 家禽弹窗 -->
    <el-dialog
      title=""
      :visible.sync="JQ_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="zddwyqybjcyjChart1_dialog"></div>
      <p>
        总体从历史情况看，疫情对禽类市场的影响要看疫情发生地点、波及程度，
        还要看当时市场整体趋势。一般性特点来看，疫情爆发后中短期（也就1-2个月左右）
        影响偏大，而后续影响会逐渐减弱。本次新型冠状病毒肺炎疫情虽不直接涉及禽类，
        但仅暴发一个多月时间，新型冠状病毒感染的确诊病例已超过2003年SARS疫情的确诊病例数，
        说明疫毒炽盛，侵袭力强，传染性强。市场全面禁止销售活禽，加上新疆、湖南发生禽流感疫情，
        禽类市场遭受波及。
      </p>
    </el-dialog>

    <!-- 土地资源弹窗 -->
    <el-dialog
      title=""
      :visible.sync="TDZY_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="nyzypgyhjcChart1_dialog"></div>
      <p style="margin-top: 10px;">
        三台县位于四川盆地中部偏北，三台是农业大县，农副产品种类多，产品量大，加工资源丰富，先后被列为四川省和全国粮食、
        棉花、油料、生猪、蚕茧、柑桔、麻类、油橄榄、麦冬等的生产基地县。县境水资源主要来源于降水，受降水时空分布的影响较大，
        具有明显的夏雨型特征。县境多年平均降水量为882.2毫米。四季气候分明，冬春降水少而夏秋降水集中，形成年际降水不均。降水最多的年曾达1523.5毫米，
        最少年为598.8毫米。年降水和年径流区域分布上，总的趋势是降水量从县境中部往北边和南边两端递增。在年径流的区域分布上，当地径流与降水区域分布大体相同，
        也是境南至境北呈逐增趋势。三台县地表水资源总量5.401亿立方米，利用量0.947亿立方米。三台是农业大县，农副产品种类多，产品量大，加工资源丰富，先后被列为四川省和全国粮食、
        棉花、油料、生猪、蚕茧、柑桔、麻类、油橄榄、麦冬等的生产基地县，主要农副产品产量分别排名全省２０强和全国１００强县之列。
      </p>
    </el-dialog>

    <!-- 水资源弹窗 -->
    <el-dialog
      title=""
      :visible.sync="SZY_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="nyzypgyhjcChart2_dialog"></div>
      <p style="margin-top: 10px;">
        三台县位于四川盆地中部偏北，三台是农业大县，农副产品种类多，产品量大，加工资源丰富，先后被列为四川省和全国粮食、
        棉花、油料、生猪、蚕茧、柑桔、麻类、油橄榄、麦冬等的生产基地县。县境水资源主要来源于降水，受降水时空分布的影响较大，
        具有明显的夏雨型特征。县境多年平均降水量为882.2毫米。四季气候分明，冬春降水少而夏秋降水集中，形成年际降水不均。降水最多的年曾达1523.5毫米，
        最少年为598.8毫米。年降水和年径流区域分布上，总的趋势是降水量从县境中部往北边和南边两端递增。在年径流的区域分布上，当地径流与降水区域分布大体相同，
        也是境南至境北呈逐增趋势。三台县地表水资源总量5.401亿立方米，利用量0.947亿立方米。三台是农业大县，农副产品种类多，产品量大，加工资源丰富，先后被列为四川省和全国粮食、
        棉花、油料、生猪、蚕茧、柑桔、麻类、油橄榄、麦冬等的生产基地县，主要农副产品产量分别排名全省２０强和全国１００强县之列。
      </p>
    </el-dialog>

    <!-- 气候弹窗 -->
    <el-dialog
      title=""
      :visible.sync="QH_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="nyzypgyhjcChart3_dialog"></div>
      <p style="margin-top: 10px;">
        三台县位于四川盆地中部偏北，三台是农业大县，农副产品种类多，产品量大，加工资源丰富，先后被列为四川省和全国粮食、
        棉花、油料、生猪、蚕茧、柑桔、麻类、油橄榄、麦冬等的生产基地县。县境水资源主要来源于降水，受降水时空分布的影响较大，
        具有明显的夏雨型特征。县境多年平均降水量为882.2毫米。四季气候分明，冬春降水少而夏秋降水集中，形成年际降水不均。降水最多的年曾达1523.5毫米，
        最少年为598.8毫米。年降水和年径流区域分布上，总的趋势是降水量从县境中部往北边和南边两端递增。在年径流的区域分布上，当地径流与降水区域分布大体相同，
        也是境南至境北呈逐增趋势。三台县地表水资源总量5.401亿立方米，利用量0.947亿立方米。三台是农业大县，农副产品种类多，产品量大，加工资源丰富，先后被列为四川省和全国粮食、
        棉花、油料、生猪、蚕茧、柑桔、麻类、油橄榄、麦冬等的生产基地县，主要农副产品产量分别排名全省２０强和全国１００强县之列。
      </p>
    </el-dialog>

    <!-- 辣椒弹窗 -->
    <el-dialog
      title=""
      :visible.sync="LJ_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="nyscxxjcyjChart1_dialog"></div>
      <p>
        虽然短期来看，辣椒行情高企，但业内人士表示，近十年来我国辣椒几个并没有出现大的波动，
        本轮价格上涨是受极端天气影响，今年各地椒弄过大了种植面积，另外我国每年会进口19万吨辣椒补充国内需求，
        但今年辣椒进口也将萎缩，进口辣椒产量有一定量的下降。业内人士提醒应该理性种植，不要盲目跟风，
        避免周期性对农产品价格波动带来的影响。
      </p>
    </el-dialog>

    <!-- 猪肉弹窗 -->
    <el-dialog
      title=""
      :visible.sync="ZR_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="nyscxxjcyjChart2_dialog"></div>
      <p>
        生猪价格整体持续弱势下跌，周末北方地区多小幅反弹。 生猪价格整体持续弱势下跌，
        周末北方地区多小幅反弹。 市场研判：新冠疫情防控形势好转，生猪及猪肉产品调运情况好转，
        部分地区生猪供应紧缺的情况得到缓解，本周猪价偏弱下跌。多省陆续降低疫情防控级别，
        企业及工厂复工情况继续增加，市场消费逐渐好转，对猪肉需求增加，在生猪供应本就紧缺的大环境下，
        猪价趋势性走强再度凸显，不过近日仍以震荡调整为主，随着企业及工厂开工率的进一步增加，猪价有望再度开启上涨模式。
      </p>
    </el-dialog>

    <!-- 葡萄弹窗 -->
    <el-dialog
      title=""
      :visible.sync="PT_dialog"
      width="60%"
      :before-close="handleClose"
      class="dialog_box">
      <div class="resources-new-chart_dialog" id="nyscxxjcyjChart3_dialog"></div>
      <p>
        从2007年至2018年沃柑批发市场价格的预警计量结果可以发现，
        沃柑批发市场价格主要集中在无警（负向预警与正向预警中间部分）区间内，
        处于正向预警与正向重警区域的时间在增长，次数在增加。其中，2007年的9月至2008年4月沃柑的价格处于负向中警区域，
        说明这段时间价格下降较为明显。2008年5月至2013年2月份价格有所回升，底价均在负向轻警区域以上，
        价格出现在正向预警的时间与次数开始逐渐增多。
      </p>
    </el-dialog>
    
  </div>
</template>

<script>
  import chart from '../../js/webSite/specialNew';
  import api from "../../request/webService";
  import { bannerWeb } from '@/api/banner';
  export default {
    data() {
      return {
        imgSrc:null,
        SZ_dialog: true,
        JQ_dialog: true,
        TDZY_dialog: true,
        SZY_dialog: true,
        QH_dialog: true,
        LJ_dialog: true,
        ZR_dialog: true,
        PT_dialog: true,
        // secialFirst: true,
        // secialSecond: false
        marketInformatinData: [{
            area: 0,
            counts: 0
          },
          {
            area: 0,
            counts: 0
          },
          {
            area: 0,
            counts: 0
          },
          {
            area: 0,
            counts: 0
          }
        ],
        agriculturalInputsData: [],
        marketTransactionData: {
          hexian: "0.00",
          wholeCountry: "0.00"
        },
        productiveProcessData: {},
        basicGeographicData: [],
        pestData: [
          {
            "counts": 0,
            "typename": '',
            "population": 0
          }
        ],
        productionData: [],
        plaintData: [],
        scansData: {
          qgscantimes: 0,
          hxscantimes: 0
        }
      }
    },
    methods: {
      async getBannerWeb(){
        let res = await bannerWeb({modularName:'农业资源专题'})
        this.imgSrc = res.data.data[0].pictureUrl.substring(0,res.data.data[0].pictureUrl.length - 1)
        console.log(this.imgSrc)
      },
      //重大动物疫情疫病监测预警-家禽
      initZddwyqybjcyjChart1() {
        let landType = ['全国','四川'];
        this.$http.get(api.ip + '/condition/findAll?type=家禽')
          .then(
            res => {
              let echartsData = {
                dateArray: [],
                qgDataArray: [],
                ahDataArray: [],
              };
              let dateArray = Array.from(new Set(res.body.data.map(ele => {
                if (ele) {
                  if (ele.statisticsDate) {
                    return ele.statisticsDate.substr(0,10);
                  }
                }
              }))).sort();
              echartsData.dateArray = dateArray;
              let echartsData1 = res.body.data.map(ele => {
                let temp ={
                  date: '',
                  value: 0,
                }
                if (ele) {
                  if (ele.regionName == landType[0]) {
                    temp.year = ele.statisticsDate.substr(0,10);
                    temp.value = ele.incidenceNum;
                    echartsData.qgDataArray.push(temp);
                  }else if (ele.regionName == landType[1]) {
                    temp.year = ele.statisticsDate.substr(0,10);
                    temp.value = ele.incidenceNum;
                    echartsData.ahDataArray.push(temp);
                  }
                }
              });
              console.log(echartsData)
              chart.EchartsZddwyqybjcyjChart1("zddwyqybjcyjChart1", echartsData);
              chart.EchartsZddwyqybjcyjChart1("zddwyqybjcyjChart1_dialog", echartsData);
            },
            err => {
              this.$message.error("数据请求失败！");
            }
          );
      },
      //重大动物疫情疫病监测预警-猪
      initZddwyqybjcyjChart2() {
        let landType = ['全国','四川'];
        this.$http.get(api.ip + '/condition/findAll?type=生猪')
          .then(
            res => {
              let echartsData = {
                dateArray: [],
                qgDataArray: [],
                ahDataArray: [],
              };
              let dateArray = Array.from(new Set(res.body.data.map(ele => {
                if (ele) {
                  if (ele.statisticsDate) {
                    return ele.statisticsDate.substr(0,10);
                  }
                }
              }))).sort();
              echartsData.dateArray = dateArray;
              let echartsData1 = res.body.data.map(ele => {
                let temp ={
                  date: '',
                  value: 0,
                }
                if (ele) {
                  if (ele.regionName == landType[0]) {
                    temp.year = ele.statisticsDate.substr(0,10);
                    temp.value = ele.incidenceNum;
                    echartsData.qgDataArray.push(temp);
                  }else if (ele.regionName == landType[1]) {
                    temp.year = ele.statisticsDate.substr(0,10);
                    temp.value = ele.incidenceNum;
                    echartsData.ahDataArray.push(temp);
                  }
                }
              });
              chart.EchartsZddwyqybjcyjChart2("zddwyqybjcyjChart2", echartsData);
              chart.EchartsZddwyqybjcyjChart2("zddwyqybjcyjChart2_dialog", echartsData);
            },
            err => {
              this.$message.error("数据请求失败！");
            }
          );
      },
      //农业资源评估优化决策-土地资源变化
      initNyzypgyhjcChart1() {
        let landType = ['水田','旱地','林业用地','人工造林'];
        this.$http.get(api.ip + '/web/agriculturalTopics/landresource?dataType=1')
          .then(
            res => {
              let echartsData = {
                landYearArray: [],
                stDataArray: [],
                htDataArray: [],
                lyDataArray: [],
                rgDataArray: [],
              };
              let landYearArray = Array.from(new Set(res.body.data.map(ele => {
                if (ele) {
                  if (ele.landYear) {
                    return ele.landYear;
                  }
                }
              }))).sort();
              echartsData.landYearArray = landYearArray;

              let echartsData1 = res.body.data.map(ele => {
                let temp ={
                  year: '',
                  value: 0,
                }
                if (ele) {
                  if (ele.landType == landType[0]) {
                    temp.year = ele.landYear;
                    temp.value = ele.landArea;
                    echartsData.stDataArray.push(temp);
                  }else if (ele.landType == landType[1]) {
                    temp.year = ele.landYear;
                    temp.value = ele.landArea;
                    echartsData.htDataArray.push(temp);
                  }else if (ele.landType == landType[2]) {
                    temp.year = ele.landYear;
                    temp.value = ele.landArea;
                    echartsData.lyDataArray.push(temp);
                  }else if (ele.landType == landType[3]) {
                    temp.year = ele.landYear;
                    temp.value = ele.landArea;
                    echartsData.rgDataArray.push(temp);
                  }
                }
              });
              chart.EchartsNyzypgyhjcChart1("nyzypgyhjcChart1", echartsData);nyzypgyhjcChart1_dialog
              chart.EchartsNyzypgyhjcChart1("nyzypgyhjcChart1_dialog", echartsData);
            },
            err => {
              this.$message.error("土地资源变化数据请求失败！");
            }
          );
      },
      //农业资源评估优化决策-水资源变化
      initNyzypgyhjcChart2() {
        this.$http.get(api.ip + '/web/agriculturalTopics/landresource?dataType=3')
          .then(
            res => {
              let echartsData = res.body.data.map(ele => {
                let newEle = {
                  landYear: '',
                  annualWaterResources: 0,
                };
                if (ele) {
                  if (ele.landYear) {
                    newEle.landYear = ele.landYear;
                  }
                  if (ele.annualWaterResources) {
                    newEle.annualWaterResources = ele.annualWaterResources;
                  }
                }
                return newEle;
              });
              chart.EchartsNyzypgyhjcChart2("nyzypgyhjcChart2", echartsData);
              chart.EchartsNyzypgyhjcChart2("nyzypgyhjcChart2_dialog", echartsData);
            },
            err => {
              this.$message.error("水资源变化数据请求失败！");
            }
          );
      },
      //农业资源评估优化决策-气候变化
      initNyzypgyhjcChart3() {
        this.$http.get(api.ip + '/web/agriculturalTopics/landresource?dataType=2')
          .then(
            res => {
              let echartsData = res.body.data.map(ele => {
                let newEle = {
                  landYear: '',
                  annuaAverageTemperature: 0,
                  annualPrecipitation: 0,
                };
                if (ele) {
                  if (ele.landYear) {
                    newEle.landYear = ele.landYear;
                  }
                  if (ele.annualPrecipitation) {
                    newEle.annualPrecipitation = ele.annualPrecipitation;
                  }
                  if (ele.annuaAverageTemperature) {
                    newEle.annuaAverageTemperature = ele.annuaAverageTemperature;
                  }
                }
                return newEle;
              });
              chart.EchartsNyzypgyhjcChart3("nyzypgyhjcChart3", echartsData);
              chart.EchartsNyzypgyhjcChart3("nyzypgyhjcChart3_dialog", echartsData);
            },
            err => {
              this.$message.error("气候变化数据请求失败！");
            }
          );
      },
      //农业市场信息监测预警
      initNyscxxjcyjChart1() {
        this.$http.get(api.ip + '/web/agriculturalTopics/marketMonitoring?productName=尖椒')
          .then(
            res => {
              let echartsData = res.body.data.map(ele => {
                let newEle = {
                  monthStr: '',
                  avgPrice: 0,
                  maxPrice: 0,
                  minPrice: 0,
                };
                if (ele) {
                  if (ele.monthStr) {
                    newEle.monthStr = ele.monthStr;
                  }
                  if (ele.avgPrice) {
                    newEle.avgPrice = ele.avgPrice;
                  }
                  if (ele.maxPrice) {
                    newEle.maxPrice = ele.maxPrice;
                  }
                  if (ele.minPrice) {
                    newEle.minPrice = ele.minPrice;
                  }
                }
                return newEle;
              });
              chart.EchartsNyscxxjcyjChart1("nyscxxjcyjChart1", echartsData);
              chart.EchartsNyscxxjcyjChart1("nyscxxjcyjChart1_dialog", echartsData);
            },
            err => {
              this.$message.error("尖椒行情数据请求失败！");
            }
          );
      },
      //农业市场信息监测预警
      initNyscxxjcyjChart2() {
        this.$http.get(api.ip + '/web/agriculturalTopics/marketMonitoring?productName=白条猪（瘦）')
          .then(
            res => {
              let echartsData = res.body.data.map(ele => {
                let newEle = {
                  monthStr: '',
                  avgPrice: 0,
                  maxPrice: 0,
                  minPrice: 0,
                };
                if (ele) {
                  if (ele.monthStr) {
                    newEle.monthStr = ele.monthStr;
                  }
                  if (ele.avgPrice) {
                    newEle.avgPrice = ele.avgPrice;
                  }
                  if (ele.maxPrice) {
                    newEle.maxPrice = ele.maxPrice;
                  }
                  if (ele.minPrice) {
                    newEle.minPrice = ele.minPrice;
                  }
                }
                return newEle;
              });
              chart.EchartsNyscxxjcyjChart1("nyscxxjcyjChart2", echartsData);
              chart.EchartsNyscxxjcyjChart1("nyscxxjcyjChart2_dialog", echartsData);
            },
            err => {
              this.$message.error("生猪肉行情数据请求失败！");
            }
          );
      },
      //农业市场信息监测预警
      initNyscxxjcyjChart3() {
        this.$http.get(api.ip + '/web/agriculturalTopics/marketMonitoring?productName=沃柑')
          .then(
            res => {
              let echartsData = res.body.data.map(ele => {
                let newEle = {
                  monthStr: '',
                  avgPrice: 0,
                  maxPrice: 0,
                  minPrice: 0,
                };
                if (ele) {
                  if (ele.monthStr) {
                    newEle.monthStr = ele.monthStr;
                  }
                  if (ele.avgPrice) {
                    newEle.avgPrice = ele.avgPrice;
                  }
                  if (ele.maxPrice) {
                    newEle.maxPrice = ele.maxPrice;
                  }
                  if (ele.minPrice) {
                    newEle.minPrice = ele.minPrice;
                  }
                }
                return newEle;
              });
              chart.EchartsNyscxxjcyjChart1("nyscxxjcyjChart3", echartsData);
              chart.EchartsNyscxxjcyjChart1("nyscxxjcyjChart3_dialog", echartsData);
            },
            err => {
              this.$message.error("葡萄行情数据请求失败！");
            }
          );
      },
      //生猪
      openSZdialog(){
        this.SZ_dialog = true
      },
      //家禽
      openJQdialog(){
        this.JQ_dialog = true
      },
      //土地资源变化
      openTDZYdialog(){
        console.log(11)
        this.TDZY_dialog = true
      },
      //水资源变化
      openSZYdialog(){
        this.SZY_dialog = true
      },
      //气候变化
      openQHdialog(){
        this.QH_dialog = true
      },
      //辣椒
      openLJdialog(){
        console.log(11)
        this.LJ_dialog = true
      },
      //猪肉
      openZRdialog(){
        this.ZR_dialog = true
      },
      //葡萄
      openPTdialog(){
        this.PT_dialog = true
      }
    },
    created() {

    },
    async mounted() {
      this.SZ_dialog = false
      this.JQ_dialog = false
      this.TDZY_dialog = false
      this.SZY_dialog = false
      this.QH_dialog = false
      this.LJ_dialog = false
      this.ZR_dialog = false
      this.PT_dialog = false


      this.initZddwyqybjcyjChart1();
      this.initZddwyqybjcyjChart2();
      this.initNyzypgyhjcChart1();
      this.initNyzypgyhjcChart2();
      this.initNyzypgyhjcChart3();
      this.initNyscxxjcyjChart1();
      this.initNyscxxjcyjChart2();
      this.initNyscxxjcyjChart3();

      await this.getBannerWeb()
    },
    computed: {
      
    }
  }

</script>

<style>

</style>
