<template>
  <div class="webSite-container">
    <div class="webSite-banner">
      <!-- <img src="../../assets/webSiteImages/index_banner2.jpg" alt=""> -->
      <el-carousel height="70vh">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="webSite-content-total">
      <!--和县农业情况-->
      <div class="webSite-content1">
        <div class="webSite-content1-center" style="margin-bottom: 20px">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp三台县农业情况&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="">全县农业产业化发展现状</span>
          </div>


          <p class="titleText article">三台县是四川省典型的丘区农业大县、人口大县，全县农业人口125.5万人，耕地119万亩、林地127万亩，
              农业总产值和主要农副产品总量稳居全国百强，先后荣获全国粮食生产先进县、国家农业产业化示范基地、
              全省“三农”工作先进县、全省农村改革工作先进县、全省现代农业产业基地强县、全省现代农林畜重点（示范）县。
              2019年全县农林牧渔业总产值达135.1亿元，农民人均可支配收入达17152元。</p>

          <div class="img_text_box">
            <div class="imgBox">
              <img src="../../assets//santai_img/banner/1_1.png" alt="">
            </div>
            <div class="textBox" style="padding-left:15px">
              <h3>一、全力推动主导产业转型升级</h3>
              <p class="article">结合我县资源禀赋、产业基础，科学构建了以麦冬、藤椒、生猪三大特色产业和粮油、蔬菜两大基础产业为主导的“3+2”现代农业产业体系。
                实施优势特色农业提质增效行动计划，全力推动产业链纵深发展、价值链高端攀升、利益链广域覆盖。2019年，全县麦冬种植面积达到6.62万亩，
                总产1.52万吨，总产量占全国麦冬产量70%，出口量占全国麦冬制品出口量的80%，成功创建国家级出口食品农产品（麦冬）质量安全示范区；
                建成国家级核心育种场2个，出栏生猪89.3万头，位居全省第一；藤椒种植面积20万亩，成功列入四川省特色农产品优势区；粮食总产66万吨、
                油料总产15万吨，分别位居全省第三、第一；蔬菜种植面积24.45万亩。</p>
            </div>
          </div>

          <div class="img_text_box">
            <div class="textBox"  style="padding-right:15px">
              <h3>二、全力推动一二三产融合发展</h3>
              <p class="article">突出“接二连三”“隔二连三”，以“建基地、育产业、创品牌、拓市场”推动全产业链建设。在发展好优质基地的基础上，我县引导、
                支持龙头企业和新型经营主体后延一产、做强二产、做新三产，推进了100万头A级屠宰场、绿溪优食谷、圣菲伦藤椒加工厂、
                麦冬博物馆、国家生猪交易市场四川分市场、麦冬交易中心、明兴农业主题公园等一批农产品加工、销售或农旅融合项目，
                创建了枫叶牧场、忆乡、麦冬旺、青悦花藤等农产品品牌。坚持生产市场两手抓、线上线下两结合，完善流通链条和市场布局，
                实施“互联网+”现代农业示范行动，以“邮乐网”和“云端363”为核心，构建“2+N”平台模式，推动农村“全企入网”“全民触网”。
                加快物流集配中心建设，推广“产地集配+销地分拨”“电商+冷链快递+智能菜柜”农产品直销模式。打造麦冬特色小镇、藤椒小镇（麻匠镇）、
                枫叶牧场等新业态，建成狂欢小镇、盛世樱花谷、大地飞歌文旅综合体等农旅融合重点项目，沿江农文林旅融合发展产业带基本成型成势，
                全县150个休闲农业经营单位实现乡村旅游收入2.5亿元，成功推进“产区变景区、田园变公园、产品变礼品”，构建独具三台特色“种养加、农林旅”发展模式。</p>
            </div>
            <div class="imgBox">
              <img src="../../assets//santai_img/banner/2_1.png" alt="">
            </div>
          </div>

          <div class="img_text_box">
            <div class="imgBox">
              <img src="../../assets//santai_img/banner/3_1.png" alt="">
            </div>
            <div class="textBox" style="padding-left:15px">
              <h3>三、全力推动现代农业园区建设</h3>
              <p class="article">坚持把现代农业园区作为推进农业供给侧结构性改革的主战场和实施乡村振兴战略的主引擎，实施“千村百园创建”“重点园区建设”两大工程，
                着力构建1个国家级、2个省级现代农业园区的“1+2+5+N”梯次推进体系。麦冬种养循环现代农业园区成功创建全省首批五星级现代农业园区，
                并入选国家产业园创建管理体系；建成市级现代农业园区2个，县级现代农业园区5个，目前正在加速推进三台县优质粮油现代农业园区、三台县刘营镇优质水果现代农业园区建设。</p>
            </div>
          </div>

          <div class="img_text_box">
            <div class="textBox" style="padding-right:15px">
              <h3>四、全力推动新型经营主体培育</h3>
              <p class="article">以培育新型农民、家庭农场、专业合作社为重点，形成了以企业为龙头、以家庭农场、合作社为骨干、以高素质农民为基础的新型经营体系，
                探索出了一条“育小户”“户建场”“场入社”“社联企”小农户和现代农业发展有机衔接的多元化联动发展新路子，2019年新培育种养殖大户166家，
                家庭农场31家，农民专业合作社79家，新型农业经营主体达4594家，培育农业产业化联合体2个。</p>
                <p class="article">近些年，三台县立足资源优势，通过“3+2”优势农业产品的发展支撑起了农业产业振兴的天地，通过科技创新、机制创新、
                  模式创新释放了农业农村的无限活力，下一步我们将继续围绕特色产业、紧盯重点任务，开拓思维、综合施策，促进农业全面升级、农村全面进步、农民全面发展。</p>
            </div>
            <div class="imgBox">
              <img src="../../assets//santai_img/banner/4_1.png" alt="">
            </div>
          </div>

        </div>
      </div>

      <!--和县现代农业产业园-->
      <div class="webSite-content2 webSite-content-bg">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp农业产业化建设&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="">“3+2”现代农业产业发展成效显著</span>
          </div>
          <div class="webSite-sy-common-body">
            <div>
              <img src="../../assets/santai_img/8.png" alt="">
              <div class="right_text">
                  <h2>畜牧产业</h2>
                  <p class="describe">全面贯彻落实国家畜牧业发展扶持政策<br/>大力推进畜牧产业健康持续发展</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/5.png" alt="">
              <div class="right_text">
                  <h2>麦冬产业</h2>
                  <p class="describe">大力推广麦冬规范化种植技术<br/>标准化种植面积达总面积的80%以上</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/6.png" alt="">
              <div class="right_text">
                  <h2>藤椒产业</h2>
                  <p class="describe">按照“一园三带五片”发展规划<br/>稳步推进藤椒基地建设</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/7.png" alt="">
              <div class="right_text">
                  <h2>蔬菜产业</h2>
                  <p class="describe">按照“优质、特色、品牌、融合”的发展目标<br/>积极推广“猪-沼-菜”种养循环模式</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/4.png" alt="">
              <div class="right_text">
                  <h2>粮油产业</h2>
                  <p class="describe">推广生态种植、普及优良品种、<br/>发展订单农业、培育优质品牌为抓手</p>
              </div>
            </div>
            
          </div>
          <!-- <div class="newAbout-situation">
            <p style="font-weight: bold">现代农业示范区园区建设</p>
            <p>全县现有市级以上现代农业示范区2个，分别为：和县历阳现代农业示范区（省级）、和县善厚蔬菜种业示范区（市级）。现有国家现代农业产业园1个，为：和县台创园绿色食品产业园。</p>
            <p>和县国家现代农业产业园以和县台湾农民创业园和历阳省级现代农业示范区为基础，以国家现代农业产业园内涵、创建思路和建设任务为要求，科学地定位和打造和县现代农业产业园功能区。</p>
            <p>和县台创园绿色食品产业园有入园企业安徽香泉湖农业集团、安徽栋泰农业科技发展有限公司、安徽新源农业科技有限责任公司等27家。其中省级以上龙头企业4家，合作社10家（国家级示范合作社2家），入社农户8000余户，初步形成了以南瓜汁、紫薯汁、冬瓜汁、胡萝卜汁加工，以及速冻蔬菜、果蔬全粉等为支撑的蔬菜加工产业集群；以肉鸭、生猪、肉鸡等精深加工、休闲食品加工、熟食直营直销连锁销售为核心的畜禽肉制品加工产业集群；以台湾精致农业、高效设施农业、创意农业、生态餐饮为重点的现代休闲农业集群。</p>
          </div>
          <ul class="webSite-sy-count-center">
            <li class="webSite-sy-count-list">
              <div>
                <img src="../../assets/webSiteImages/newAbout_situation1.png" alt="">
                <p><i>4</i>&nbsp&nbsp家</p>
                <i>龙头企业</i>
              </div>
            </li>

            <li class="webSite-sy-count-list">
              <div>
                <img src="../../assets/webSiteImages/newAbout_situation2.png" alt="">
                <p><i>8000</i>&nbsp&nbsp余户</p>
                <i>入社农户</i>
              </div>
            </li>

            <li class="webSite-sy-count-list">
              <div>
                <img src="../../assets/webSiteImages/newAbout_situation3.png" alt="">
                <p><i>2</i>&nbsp&nbsp家</p>
                <i>国家级示范合作社</i>
              </div>
            </li>

            <li class="webSite-sy-count-list">
              <div>
                <img src="../../assets/webSiteImages/newAbout_situation4.png" alt="">
                <p><i>10</i>&nbsp&nbsp家</p>
                <i>合作社</i>
              </div>
            </li>
          </ul> -->
        </div>
      </div>
      <!--一城五区两基地-->
      <!-- <div class="webSite-content1">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp一城五区两基地&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e" style="font-size: 12px;color: #666;">和县现代农业产业园将按照“一城五区两基地”进行建设。</span>
          </div>
          <ul class="webSite-sy-resources">
            <li class="webSite-sy-resources-list">
              <div class="webSite-sy-resources-img webSite-sy-resources-img1">
                <img src="../../assets/webSiteImages/newAbout_icon1.png" alt="">
              </div>
              <div class="webSite-sy-resources-text">
                <p class="webSite-sy-resources-title1">一城</p>
                <p class="webSite-sy-resources-introduce">绿色食品科技城</p>
              </div>
            </li>
            <li class="webSite-sy-resources-list">
              <div class="webSite-sy-resources-img webSite-sy-resources-img2">
                <img src="../../assets/webSiteImages/newAbout_icon2.png" alt="">
              </div>
              <div class="webSite-sy-resources-text">
                <p class="webSite-sy-resources-title1">五区</p>
                <p class="webSite-sy-resources-introduce" style="text-align: left">绿色食品加工区、农产品物流集散区</p>
                <p class="webSite-sy-resources-introduce" style="text-align: left">创意农业区、蔬菜种植创新创业孵化区</p>
                <p class="webSite-sy-resources-introduce" style="text-align: left">设施蔬菜标准化生产示范区</p>
              </div>
            </li>
            <li class="webSite-sy-resources-list webSite-list-last">
              <div class="webSite-sy-resources-img webSite-sy-resources-img3">
                <img src="../../assets/webSiteImages/newAbout_icon3.png" alt="">
              </div>
              <div class="webSite-sy-resources-text">
                <p class="webSite-sy-resources-title1">两基地</p>
                <p class="webSite-sy-resources-introduce">蔬菜规模化生产基地</p>
                <p class="webSite-sy-resources-introduce">畜禽标准化养殖基地</p>
              </div>
            </li>
          </ul>
        </div>
      </div> -->

      <!--数据资源标准体系-->
      <div class="webSite-content2 webSite-content-bg" style="height: 600px;">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp数据资源标准体系&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">DATA RESOURCE STANDARD SYSTEM</span>
          </div>
          <div class="newAbout-resources" style="height: 300px;">
            <div class="newAbout-resources-left">
              <img src="../../assets/webSiteImages/newAbout_img1.png" alt="">
              <p>总体标准</p>
            </div>
            <div class="newAbout-resources-right">
              <div>
                <img src="../../assets/webSiteImages/newAbout_img2.png" alt="">
                <p>信息资源标准</p>
              </div>
              <div>
                <img src="../../assets/webSiteImages/newAbout_img3.png" alt="">
                <p>总体应用标准</p>
              </div>
              <div>
                <img src="../../assets/webSiteImages/newAbout_img4.png" alt="" style="margin-bottom: 0">
                <p>基础设施标准</p>
              </div>
              <div>
                <img src="../../assets/webSiteImages/newAbout_img5.png" alt="" style="margin-bottom: 0">
                <p>管理标准</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--市场行情-->
      <div class="webSite-content1" style="height: 90vh;">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp市场行情&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">MARKET QUOTATION</span>
          </div>
          <webSiteMarketNewTable ref="webSiteMarketNewTable"></webSiteMarketNewTable>
        </div>
      </div>

      <!--平台情况-->
      <div class="webSite-content2 webSite-content-bg" style="height: 600px;">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp平台情况&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">PLATFORM CONDITION</span>
          </div>
          <div class="newAbout-platform" style="height: 300px;">
            <el-tabs v-model="tableNewAbout">
              <el-tab-pane label="数字资源管理平台" name="newAboutPlatformFirst">
                <div class="newAbout-platform-img">
                  <img src="../../assets/webSiteImages/newAbout_platform2.png" alt="">
                </div>
                <div class="newAbout-platform-text">
                  <!-- <p><a href="http://39.98.226.242:8089/datamanage/#/industryAnalysisIndex" target="_blank">数据资源管理平台</a></p> -->
                  <p>数据资源管理平台</p>
                  <ul class="newAbout-platform-ul">
                    <li>基础管理系统</li>
                    <li>分析挖掘系统</li>
                    <li>数据安全系统</li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="数字资源更新平台" name="newAboutPlatformSecond">
                <div class="newAbout-platform-img">
                  <img src="../../assets/webSiteImages/newAbout_platform1.png" alt="">
                </div>
                <div class="newAbout-platform-text">
                  <!-- <p><a href="http://39.98.226.242:8089/dataupdate/#/loginUpdate" target="_blank">数据资源更新平台</a></p> -->
                  <p>数据资源更新平台</p>
                  <ul class="newAbout-platform-ul">
                    <li>数据填报系统</li>
                    <li>数据交换系统</li>
                    <li>移动数据采集系统</li>
                    <li>涉及网络数据爬取系统</li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="数据资源服务平台" name="newAboutPlatformThird">
                <div class="newAbout-platform-img">
                  <img src="../../assets/webSiteImages/newAbout_platform3.png" alt="">
                </div>
                <div class="newAbout-platform-text">
                  <p>数据资源服务平台</p>
                  <ul class="newAbout-platform-ul">
                    <li>基础数据访问服务系统</li>
                    <li>农业专题信息服务系统</li>
                    <li>物联网数据接入服务</li>
                    <li>公众数据访问服务</li>
                    <li>农业生产管理应用系统</li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
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
  </div>
</template>
<script>
  import webSiteMarketNewTable from './webSiteMarketNewTable';
  import { bannerWeb } from '@/api/banner';
  export default {
    name: '',
    data () {
      return {
        imgList:[],
        tableNewAbout:'newAboutPlatformFirst',
      }
    },
    methods: {
      async getBannerWeb(){
        let res = await bannerWeb({modularName:'首页'})
        res.data.data[0].pictureUrl.split(';').forEach(item => {
          if(item != ''){
            this.imgList.unshift(item)
          }
        })
      },
    },
    async mounted () {
      await this.getBannerWeb()
    },
    components: {
      webSiteMarketNewTable,
    },
  }
</script>
<style>
</style>

