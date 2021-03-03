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
                <el-table-column prop="farmName" label="养殖场名称" width="300"></el-table-column>
                <el-table-column prop="year" label="年份"></el-table-column>
                <el-table-column prop="supervisorName" label="负责人"></el-table-column>
                <el-table-column prop="stockType" label="养殖种类"></el-table-column>
                <el-table-column prop="varieties" label="主要品种"></el-table-column>
                <el-table-column prop="amountNum" label="存栏量（头）"></el-table-column>
                <el-table-column prop="outNum" label="出栏量（头）"></el-table-column>
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
  import {nsxxList} from '../../request/webService';
  import { getBreedPageList } from '../../api/baseData'
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
      //获取生猪数据
      async getBreedPageListData(){
        let res = await getBreedPageList({
          currentPage: this.currentPage,
          pageSize: this.pageSize
        })
        console.log(res)
        this.total = res.data.data.total
        res.data.data.list.forEach(item => {
          if(!item.year){
            item.year = 2019
          }
        })
        this.tableData = res.data.data.list
      },


      // getMarket() {
      //   let para = {
      //     page: this.currentPage,
      //     pageTotal: this.pageSize,
      //     name: this.formInline.name,
      //   };
      //   nsxxList(this, para).then(result => {
      //     if (result.status == "success") {
      //       let data= result.datas;
      //       if(data){
      //         this.total = data.totalPageCount;
      //         this.tableData = data.data;
      //       }
      //     }
      //   });
      // },

      selsChange: function (sels) {
        this.sels = sels;
      },
      changePage (val) {
        this.currentPage = val
        this.getBreedPageListData()
      },
      getRowClass ({ rowIndex }) {
        if (rowIndex == 0) {
          return 'background:RGB(238,239,246)'
        }
      },
    },
    mounted () {
      this.getBreedPageListData()
      // this.getMarket()
    },
  }
</script>
