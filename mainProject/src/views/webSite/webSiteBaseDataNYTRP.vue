<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSite-marketnew-table" style="margin-top: -5%;">
            <div class="webSite-table-search">
              <el-form :inline="true" :model="formInline">
                <el-input v-model="formInline.year" placeholder="请输入年份" class="news-input"></el-input>
                
                <el-input v-model="formInline.townShip" placeholder="请输入乡镇" class="news-input"></el-input>
                <el-button v-on:click="getReviewList" class="news-button">
                  <i class="el-icon-search"></i>
                </el-button>
              </el-form>
            </div>
            <!--列表-->
            <div class="webSite-table-content">
              <el-table :data="tableData" :header-cell-style="getRowClass" highlight-current-row border style="width: 100%;" @selection-change="selsChange">
                <el-table-column width="76" prop="township" label="所属乡镇"></el-table-column>
                <el-table-column width="76" prop="dataYear" label="年份"></el-table-column>
                <el-table-column width="76" prop="grade1" label="一级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade2" label="二级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade3" label="三级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade4" label="四级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade5" label="五级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade6" label="六级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade7" label="七级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade8" label="八级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade9" label="九级地(亩)"></el-table-column>
                <el-table-column width="76" prop="grade10" label="十级地(亩)"></el-table-column>
                <el-table-column prop="total" label="总合(亩)"></el-table-column>

                <!-- <el-table-column prop="inputConsumption" label="面积">
                  <template slot-scope="scope">
                    <span>{{scope.row.inputConsumption !== null ? scope.row.inputConsumption:'暂无'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="useDate" label="所属乡镇">
                  <template slot-scope="scope">
                    <span>{{scope.row.useDate !== null ? scope.row.useDate:'暂无'}}</span>
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
  import {nytrpList} from '../../request/webService';
  import {reviewList, sumLanduseArea} from '../../api/baseData';
  export default {
    name: '',
    data () {
      return {
        sanTai_sumArea: 0,
        sanTai_grade1: 0,
        sanTai_grade2: 0,
        sanTai_grade3: 0,
        sanTai_grade4: 0,
        sanTai_grade5: 0,
        sanTai_grade6: 0,
        sanTai_grade7: 0,
        sanTai_grade8: 0,
        sanTai_grade9: 0,
        sanTai_grade10: 0,
        formInline: {
          year: '2020',
          townShip: ''
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
      //根据年份获取三台地利等级的和
      async sumLanduseAreaData(year){
        let res = await sumLanduseArea({year})
        this.sanTai_sumArea = res.data.data.grade1 + res.data.data.grade2 + res.data.data.grade3 + res.data.data.grade4 + res.data.data.grade5 + res.data.data.grade6 + res.data.data.grade7 + res.data.data.grade8 + res.data.data.grade9 + res.data.data.grade10
        this.sanTai_grade1 = res.data.data.grade1
        this.sanTai_grade2 = res.data.data.grade2
        this.sanTai_grade3 = res.data.data.grade3
        this.sanTai_grade4 = res.data.data.grade4
        this.sanTai_grade5 = res.data.data.grade5
        this.sanTai_grade6 = res.data.data.grade6
        this.sanTai_grade7 = res.data.data.grade7
        this.sanTai_grade8 = res.data.data.grade8
        this.sanTai_grade9 = res.data.data.grade9
        this.sanTai_grade10 = res.data.data.grade10
      },
      async getReviewList(){
        let res = await reviewList({
          currentPage:this.currentPage,
          pageSize:this.pageSize,
          datayear:this.formInline.year,
          township:this.formInline.townShip
        })

        await this.sumLanduseAreaData(this.formInline.year)

        this.total = res.data.data.total
        this.tableData = res.data.data.list

        this.tableData.unshift({
          township: '三台县',
          total: this.sanTai_sumArea,
          grade1: this.sanTai_grade1,
          grade2: this.sanTai_grade2,
          grade3: this.sanTai_grade3,
          grade4: this.sanTai_grade4,
          grade5: this.sanTai_grade5,
          grade6: this.sanTai_grade6,
          grade7: this.sanTai_grade7,
          grade8: this.sanTai_grade8,
          grade9: this.sanTai_grade9,
          grade10: this.sanTai_grade10,
          dataYear: this.formInline.year
        })

        this.tableData.forEach(item => {
          let total = 0
          for (const key in item) {
            if(key.includes('grade')){
              total += item[key]
            }
            if(!item[key]){
              item[key] = '暂无'
            }
          }
          item.total = total.toFixed(2)
        })
        
      },


      getMarket() {
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          name: this.formInline.name,
        };
        nytrpList(this, para).then(result => {
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
        this.getReviewList()
      },
      getRowClass ({ rowIndex }) {
        if (rowIndex == 0) {
          return 'background:RGB(238,239,246)'
        }
      },
    },
    mounted () {
      // this.getMarket()
      this.getReviewList()
      
    },
  }
</script>
<style>
/* .cell{
  padding-left: 0 !important;
} */
</style>