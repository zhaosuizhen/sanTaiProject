<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSite-marketnew-table" style="margin-top: -5%;">
            <div class="webSite-table-search">
              <el-form :inline="true" :model="formInline">
                <el-input v-model="formInline.name" placeholder="请输入关键字" class="news-input">
                </el-input>
                <el-button v-on:click="getMarket" class="news-button">
                  <i class="el-icon-search"></i>
                </el-button>
              </el-form>
            </div>
            <!--列表-->
            <div class="webSite-table-content">
              <el-table :data="tableData" :header-cell-style="getRowClass" highlight-current-row border style="width: 100%" @selection-change="selsChange">
                <el-table-column prop="managementName" label="主体名称" width="300"></el-table-column>
                <el-table-column prop="unitType" label="单位类型">
                  <template slot-scope="scope">
                    <span>{{scope.row.unitType !== null ? scope.row.unitType:'暂无'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="" label="注册资金（万元）">
                  <template slot-scope="scope">
                    <!--<span>{{scope.row.registeredCapital !== null ? scope.row.registeredCapital:'暂无'}}</span>-->
                    <span>{{scope.row.registeredCapital !== null ? (scope.row.registeredCapital).toFixed(2):'暂无'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="legalName" label="联系人">
                  <template slot-scope="scope">
                    <span>{{scope.row.legalName !== null ? scope.row.legalName:'暂无'}}</span>
                  </template>
                </el-table-column>
                <!-- <el-table-column prop="mobilePhone" label="联系电话">
                  <template slot-scope="scope">
                    <span>{{scope.row.mobilePhone ? scope.row.mobilePhone:'暂无'}}</span>
                  </template>
                </el-table-column> -->
                <el-table-column prop="registrationDate" label="注册日期">
                  <template slot-scope="scope">
                    <span>{{scope.row.registrationDate !== null ? scope.row.registrationDate.substring(0, 10) :'暂无'}}</span>
                  </template>
                </el-table-column>
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
  import {jyztList} from '../../request/webService';
  export default {
    name: '',
    data () {
      return {
        formInline: {
          name: ''
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
      getMarket() {
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          name: this.formInline.name,
        };
        jyztList(this, para).then(result => {
          if (result.code == 0) {
            let data= result.data;
            if(data){
              this.total = data.total;
              this.tableData = data.list;
              console.log(this.tableData);
            }
          }
        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      changePage (val) {
        this.currentPage = val
        this.getMarket()
      },
      getRowClass ({ rowIndex }) {
        if (rowIndex == 0) {
          return 'background:RGB(238,239,246)'
        }
      },
    },
    mounted () {
      this.getMarket()
    },
  }
</script>
