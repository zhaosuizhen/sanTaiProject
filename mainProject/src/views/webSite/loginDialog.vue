<template>
  <el-row class="clearfix">
    <div class="dialog-content">
      <div class="login-main">
        <el-form class="demo-ruleForm" ref="loginForm" :model="loginForm"> <!--:rules="rules2"-->
          <el-form-item label="用户名" prop="name" style="margin-bottom: 10px">
            <el-input v-model="loginForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>

            <el-button type="primary" @click="login('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        loginForm: {
          name: '',
          password: '',
        },
      };

    },
    methods: {

    },
    mounted: function () {

    }
  }

</script>
<style lang="scss" rel="stylesheet/scss">
  .el-form-item__label:before {
    display: none;
  }
</style>
