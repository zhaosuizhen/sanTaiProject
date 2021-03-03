<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSite-marketnew-table" style="margin-top: -5%;">
            <div class="webSite-table-search">
              <el-form :inline="true" :model="formInline">
                <el-input v-model="formInline.datayear" placeholder="请输入年份" class="news-input"></el-input>
                <el-input v-model="formInline.township" placeholder="请输入乡镇" class="news-input"></el-input>
                <el-button v-on:click="getPageListInput" class="news-button">
                  <i class="el-icon-search"></i>
                </el-button>
              </el-form>
            </div>
            <!--列表-->
            <div class="webSite-table-content">
              <el-table :data="tableData" :header-cell-style="getRowClass" highlight-current-row border style="width: 100%" @selection-change="selsChange">
                <el-table-column prop="dataYear" label="年份" width="300"></el-table-column>
                <el-table-column prop="township" label="乡镇"></el-table-column>
                <el-table-column prop="areas" label="种植面积(亩)"></el-table-column>
              </el-table>
              <!--分页-->
              <el-col :span="24" class="toolbar">
                <el-pagination small background layout="prev, pager, next" current-page.sync="currentPage" @current-change="changePage" :page-size="pageSize" :total="total" style="text-align:right;color:#7a7a7a;margin:20px auto 0;"></el-pagination>
              </el-col>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {tdxxList} from '../../request/webService';
  import {pageListInput} from '../../api/baseData';
  export default {
    name: '',
    data () {
      return {
        formInline: {
          datayear: '',
          township: ''
        },
        // 列表
        tableData: [],
        // 分页
        currentPage: 1,
        pageSize: 10,
        total: 0,
      }
    },
    methods: {
      async getPageListInput(){
        let res = await pageListInput({
          currentPage:this.currentPage,
          pageSize:this.pageSize,
          datayear:this.formInline.datayear,
          township:this.formInline.township,
        })
        console.log(res.data.data)
        this.total = res.data.data.total
        this.tableData = res.data.data.list
      },




      getMarket() {
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          name: this.formInline.name,
        };
        tdxxList(this, para).then(result => {
          if (result.status == "success") {
            let data= result.datas;
            if(data){
              this.total = data.totalPageCount;
              this.tableData = data.data;
            }
          }
        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      changePage (val) {
        this.currentPage = val
        this.getPageListInput()
      },
      getRowClass ({ rowIndex }) {
        if (rowIndex == 0) {
          return 'background:RGB(238,239,246)'
        }
      },
    },
    mounted () {
      this.getPageListInput()
    },
  }
</script>
