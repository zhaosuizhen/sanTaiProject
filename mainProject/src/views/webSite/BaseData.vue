<template>
  <div class="about-infoService-platform-body" style="position: relative;">

    <div class="basicData">
      <img :src="imgSrc" width="100%" height="100%" alt="">
    </div>

    <div class="webSite-content-total" style="width: 100%;overflow:hidden">
      <div class="webSite-content1" style="height: 100%;width: 100%;">
        <div class="webSite-content1-center" style="height: 100%;">
          <el-row class="tac" style="margin-top: 2%;">
            <el-col :span="12">
              <div class="webSitePolicyNewsDetail-site">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                  <el-breadcrumb-item>基础数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataJYZT") >= 0'>农业生产经营主体基础信息数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataNYTRP") >= 0'>耕地基本信息数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataNCPJY") >= 0'>农业生产条件数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataTDXX") >= 0'>麦冬主产区数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataZZXX") >= 0'>农产品市场交易数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataNSXX") >= 0'>生猪养殖数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataNZWD") >= 0'>畜禽养殖数据</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-col>
            <!-- <el-col :span="12">
              <div class="webSite-table-search">
                <el-form :inline="true" :model="formInline">
                  <el-input v-model="formInline.title" placeholder="点击输入关键字" class="news-input">
                  </el-input>
                  <el-button @click="search()" class="news-button">
                    <i class="el-icon-search"></i>
                  </el-button>
                </el-form>
              </div>
            </el-col> -->
          </el-row>

          <el-row class="tac">
            <el-col :span="3">
              <el-menu :default-active="'/baseData/webSiteBaseDataJYZT'?'/baseData/webSiteBaseDataJYZT':$route.path.split('/')[1]" router
              background-color="#f8f8f8"
              text-color="#434343"
              active-text-color="#fff">
                <el-menu-item style="min-width:200px" index="/baseData/webSiteBaseDataJYZT">
                  <!-- <span slot="title"><h2>经营主体数据</h2></span> -->
                  <span slot="title"><h2 style="font-size:10px">农业生产经营主体基础信息数据</h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:200px" index="/baseData/webSiteBaseDataNYTRP">
                  <!-- <span slot="title"><h2 style="font-size:10px">农业投入品数据</h2></span> -->
                  <span slot="title"><h2 style="font-size:10px">耕地基本信息数据</h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:200px" index="/baseData/webSiteBaseDataNCPJY">
                  <!-- <span slot="title"><h2 style="font-size:10px">农产品交易数据</h2></span> -->
                  <span slot="title"><h2 style="font-size:10px">农业生产条件数据</h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:200px" index="/baseData/webSiteBaseDataTDXX">
                  <!-- <span slot="title"><h2 style="font-size:10px">土地信息数据</h2></span> -->
                  <span slot="title"><h2 style="font-size:10px">麦冬主产区数据</h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:200px" index="/baseData/webSiteBaseDataZZXX">
                  <!-- <span slot="title"><h2 style="font-size:10px">种植信息数据</h2></span> -->
                  <span slot="title"><h2 style="font-size:10px">农产品市场交易数据 </h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:200px" index="/baseData/webSiteBaseDataNSXX">
                  <!-- <span slot="title"><h2 style="font-size:10px">农事信息数据</h2></span> -->
                  <span slot="title"><h2 style="font-size:10px">生猪养殖数据</h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:200px" index="/baseData/webSiteBaseDataNZWD">
                  <!-- <span slot="title"><h2 style="font-size:10px">农资网点数据</h2></span> -->
                  <span slot="title"><h2 style="font-size:10px">畜禽养殖数据</h2></span>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="1">
              <div>
                <span>&nbsp;</span>
              </div>
            </el-col>
            <el-col :span="20">
              <router-view/>
            </el-col>
          </el-row>
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
  import webSiteBaseDataJYZT from './webSiteBaseDataJYZT';
  import webSiteBaseDataNYTRP from './webSiteBaseDataNYTRP';
  import webSiteBaseDataNCPJY from './webSiteBaseDataNCPJY';
  import webSiteBaseDataTDXX from './webSiteBaseDataTDXX';
  import webSiteBaseDataZZXX from './webSiteBaseDataZZXX';
  import webSiteBaseDataNSXX from './webSiteBaseDataNSXX';
  import webSiteBaseDataNZWD from './webSiteBaseDataNZWD';
  import { bannerWeb } from '@/api/banner';
  export default {
    name: '',
    data () {
      return {
        imgSrc:null,
        formInline: {
          title: '',
        },
      }
    },
    methods: {
      async getBannerWeb(){
        let res = await bannerWeb({modularName:'基础数据'})
        this.imgSrc = res.data.data[0].pictureUrl.substring(0,res.data.data[0].pictureUrl.length - 1)
      },
    },
    async mounted () {
      await this.getBannerWeb()
    },
    components: {
      webSiteBaseDataJYZT,
      webSiteBaseDataNYTRP,
      webSiteBaseDataNCPJY,
      webSiteBaseDataTDXX,
      webSiteBaseDataZZXX,
      webSiteBaseDataNSXX,
      webSiteBaseDataNZWD,
    },
  }
</script>

<style>

</style>
