<template>
  <div class="industryAnalysis-body">
    <!-- <div class="industryAnalysis-border"></div> -->
    <!--gis地图-->
    <!--<div style="width: 100%;height: 100%;background-color: #1A2B3D;">-->
      <!--<industryAnalysisMap></industryAnalysisMap>-->
    <!--</div>-->
    <el-container>
      <el-header>
        <div class="vis-title">
          <div class="vis-title-top">
            <!-- <div class="vis-title-left"></div> -->
            <div class="vis-title-text">
              三台县农业数据资源管理平台
            </div>
            <!-- <div class="vis-title-right"></div> -->
            <div class="backToHome" @click="backToHome">
              <i class="el-icon-s-home"></i>
              返回首页
            </div>
          </div>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script type="text/ecmascript-6">
// import industryAnalysisMap from "./industryAnalysisMap";
export default {
  data() {
    return {};
  },
  components: {
    // industryAnalysisMap
  },
  mounted() {},
  methods: {
    backToHome(){
      window.location.href = 'http://119.6.57.72:8082/bighome/#/home'; 
    }
  }
};
</script>
<style>
</style>
