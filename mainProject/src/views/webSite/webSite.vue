<template>
  <div class="webSite-body">
    <el-container>
      <el-header class="webSite-el-header">
        <div class="webSite-header-center">
          <img class="logo_img" src="../../assets//santai_img/banner/logo.png" alt="">
          <div class="webSite-logo">
            <p>三台县农业数据资源服务平台</p>
            <!-- <p>Agricultural data resource service platform of Santai County</p> -->
          </div>
          <!--<span class="webSite-title">和县国家现代农业产业园区</span>-->
          <ul class="webSite-menu">
            <router-link to="/newAbout" tag="li"><span>关于平台</span></router-link>
            <router-link to='/baseData' tag='li'><span>基础数据</span></router-link>
            <router-link to='/special' tag='li'><span>农业资源专题</span></router-link>
            <router-link to='/infoService' tag='li'><span>信息服务</span></router-link>
            <li>
              <!--<a href="http://e-nongyun.com/scgl/#/login" target="_blank">物联监管</a>-->
              <a href="http://119.6.57.72:8089/businessSystem/" style="color:#0B0B0B" target="_blank">物联监管</a>
            </li>
            <li style="background:#00B097;padding-bottom:0;margin-bottom:0;height:90px">
              <!--<a href="http://e-nongyun.com/scgl/#/login" target="_blank">物联监管</a>-->
              <span @click="backToHome" style="color:#fff" >
                <i class="el-icon-s-home"></i>
                <span style="color:#fff">返回主页</span>
              </span>
            </li>
          </ul>
        </div>
      </el-header>
      <el-main class="webSite-el-main">
        <router-view></router-view>
      </el-main>
    </el-container>

    <!-- 登录弹窗页面-->
    <el-dialog title="登录" :visible.sync="entryLogin" :close-on-click-modal="false">
      <v-login-dialog v-if="entryLogin"></v-login-dialog>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import login from "./loginDialog.vue";
export default {
  components: {
    "v-login-dialog": login
  },
  name: "home",
  data() {
    return {
      entryLogin: false //登录界面是否显示
    };
  },
  methods: {
    backToHome(){
      window.location.href = 'http://119.6.57.72:8082/bighome/#/home'; 
    }
  },
  mounted() {

  }
};
</script>
<style>

</style>

