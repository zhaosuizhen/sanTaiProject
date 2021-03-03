<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSite-marketnew-table" style="margin-top: -5%;">
            <div class="webSite-table-search">
              <el-form :inline="true" :model="formInline">
                <el-input v-model="formInline.datayear" placeholder="请输入年份" class="news-input">
                </el-input>
                <el-button v-on:click="getMainTypeScaleData" class="news-button">
                  <i class="el-icon-search"></i>
                </el-button>
              </el-form>
            </div>
            <!--列表-->
            <div class="webSite-table-content">
              <el-table :data="tableData" :header-cell-style="getRowClass" highlight-current-row border style="width: 100%" @selection-change="selsChange">
                <el-table-column prop="dataYear" label="年份"></el-table-column>
                <el-table-column prop="totalArea" label="年末耕地面积(亩)"></el-table-column>
                <el-table-column prop="landField" label="园地(亩)"></el-table-column>
                <el-table-column prop="landForest" label="林地(亩)"></el-table-column>
                <el-table-column prop="landGrass" label="草地(亩)"></el-table-column>
                <el-table-column prop="materialMulchArea" label="地膜覆盖面积(亩)"></el-table-column>
                <el-table-column prop="materialDieselUse" label="农用柴油使用量(吨)"></el-table-column>
                <el-table-column prop="materialPesticideUse" label="农药使用量(吨)"></el-table-column>
                <el-table-column prop="materialPowerUse" label="农村用电量(万千瓦时)"></el-table-column>
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
  import {ncpjyList} from '../../request/webService';
  import {getMainTypeScale} from '../../api/baseData';
  export default {
    name: '',
    data () {
      return {
        formInline: {
          datayear: ''
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
      async getMainTypeScaleData(){
        let res = await getMainTypeScale({
          currentPage:this.currentPage,
          pageSize:this.pageSize,
          datayear:this.formInline.datayear
        })
        console.log(res.data.data.list)
        this.total = res.data.data.total
        this.tableData = res.data.data.list
        this.tableData.forEach((item,index) => {
          item.totalArea = item.landPaddy + item.landDry + item.landWater
          for (const key in item) {
            if(!item[key]){
              item[key] = '暂无'
            }
          }
        })
        console.log(this.tableData)
      },



      getMarket() {
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          name: this.formInline.name,
        };
        ncpjyList(this, para).then(result => {
          if (result.code == 0) {
            let data= result.data;
            if(data){
              this.total = data.total;
              this.tableData = data.list;
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
      this.getMainTypeScaleData()
    },
  }
</script>
