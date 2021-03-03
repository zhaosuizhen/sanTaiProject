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
                <el-table-column prop="bazaar" label="市场名称" width="300"></el-table-column>
                <el-table-column prop="dataType" label="产品种类"></el-table-column>
                <el-table-column prop="varieties" label="产品名称"></el-table-column>
                <el-table-column prop="maxprice" label="最高（元/斤）"></el-table-column>
                <el-table-column prop="minprice" label="最低（元/斤）"></el-table-column>
                <el-table-column prop="avgprice" label="平均（元/斤）"></el-table-column>

                <!-- <el-table-column prop="varietiesName" label="产品种类">
                  <template slot-scope="scope">
                    <span>{{scope.row.varietiesName !== null ? scope.row.varietiesName:'暂无'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="plantArea" label="产品名称">
                  <template slot-scope="scope">
                    <span>{{scope.row.plantArea !== null ? scope.row.plantArea:'暂无'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="startTime" label="最高">
                  <template slot-scope="scope">
                    <span>{{scope.row.startTime !== null ? scope.row.startTime:'暂无'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="startTime" label="最低">
                  <template slot-scope="scope">
                    <span>{{scope.row.startTime !== null ? scope.row.startTime:'暂无'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="startTime" label="平均">
                  <template slot-scope="scope">
                    <span>{{scope.row.startTime !== null ? scope.row.startTime:'暂无'}}</span>
                  </template>
                </el-table-column> -->
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
  import {zzxxList} from '../../request/webService';
  import { pageListPrice } from '../../api/baseData';
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
      // 获取农产品市场交易数据  
      async getPageListPrice(){
        let res = await pageListPrice({
          currentPage: this.currentPage,
          pageSize: this.pageSize
        })
        this.total = res.data.data.total
        this.tableData = res.data.data.list.map(item => {

          
          console.log(item.dataType);
          if(item.dataType == 0){
            item.dataType = '蔬菜'
          }else if(item.dataType == 1){
            item.dataType = '水果'
          }else{
            item.dataType = '肉类'
          }

          for (var i in item) {
            if(!item[i]){
              item[i] = '-'
            }
          }

          return item
        });
      },
      getMarket() {
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          name: this.formInline.name,
        };
        zzxxList(this, para).then(result => {
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
        console.log(val)
        this.currentPage = val
        this.getPageListPrice()
        // this.getMarket()
      },
      getRowClass ({ rowIndex }) {
        if (rowIndex == 0) {
          return 'background:RGB(238,239,246)'
        }
      },
    },
    mounted () {
      // 获取农产品市场交易数据 
      this.getPageListPrice()
      // this.getMarket()
    },
  }
</script>
