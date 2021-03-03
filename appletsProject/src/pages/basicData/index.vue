<template>
	<view class="content">
    <image class="banner" src="http://119.6.57.72:8079/image/weixin/web/banner_2.jpg"></image>
		<view class="title">
			<text>——    重大动物疫情疫病监测预警    ——</text>
        <view class="colorBox"></view>
		</view>
      <p class="echartsTitle">生猪</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_pig" class="canvas" ></canvas>
      <p class="echartsTitle">家禽</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_poultry" class="canvas" ></canvas>
      
		<view class="title">
			<text>——    农业资源评估优化决策    ——</text>
        <view class="colorBox"></view>
		</view>
      <p class="echartsTitle">土地资源变化</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_land" class="canvas" ></canvas>
      <p class="echartsTitle">水资源变化</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_water" class="canvas" ></canvas>
      <p class="echartsTitle">气候变化</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_temperature" class="canvas" ></canvas>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_precipitation" class="canvas" ></canvas>
 
		<view class="title">
			<text>——    农业市场信息监测预警    ——</text>
        <view class="colorBox"></view>
		</view>
      <p class="echartsTitle">辣椒</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_pepper" class="canvas" ></canvas>
      <p class="echartsTitle">猪肉</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_pork" class="canvas" ></canvas>
      <p class="echartsTitle">沃柑</p>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_orange" class="canvas" ></canvas>
      
      <view class="title">
        <text>——    养殖数据    ——</text>
          <view class="colorBox"></view>
      </view>
      <view style="width:750rpx;">
        <view class="btnBox">
          <view :class="{viewBtn: true, viewBtnActive: breedYear == 2018}" @click="choiceBreedYear(2018)">2018</view>
          <view :class="{viewBtn: true, viewBtnActive: breedYear == 2019}" @click="choiceBreedYear(2019)">2019</view>
        </view>
        
        <view class="pigDataList">
          <p style="float:left;"><span style="color:#61ddb1;font-weight:bold;font-size:23px;line-height:100rpx;padding-left:20rpx">{{LTQY}}</span>/家</p>
          <p style="float:right;line-height:100rpx;padding-right:20rpx">龙头企业</p>
        </view>
        <view class="pigDataList">
          <p style="float:left;"><span style="color:#61ddb1;font-weight:bold;font-size:23px;line-height:100rpx;padding-left:20rpx">{{GMYZC}}</span>/家</p>
          <p style="float:right;line-height:100rpx;padding-right:20rpx">规模养殖场</p>
        </view>
        <view class="pigDataList">
          <p style="float:left;"><span style="color:#61ddb1;font-weight:bold;font-size:23px;line-height:100rpx;padding-left:20rpx">{{breedData.amountNum}}</span>/万头</p>
          <p style="float:right;line-height:100rpx;padding-right:20rpx">生猪存栏</p>
        </view>
        <view class="pigDataList">
          <p style="float:left;"><span style="color:#61ddb1;font-weight:bold;font-size:23px;line-height:100rpx;padding-left:20rpx">{{breedData.outNum}}</span>/万头</p>
          <p style="float:right;line-height:100rpx;padding-right:20rpx">生猪出栏</p>
        </view>
      </view>

      <view class="title">
        <text>——    养殖产量占比统计    ——</text>
          <view class="colorBox"></view>
      </view>
      <canvas style="width:750rpx;height:320px" canvas-id="pieCanvas" class="canvas" ></canvas>
      
      <view class="title">
        <text>——    藤椒产品产量    ——</text>
          <view class="colorBox"></view>
      </view>
	    <canvas style="width:750rpx;height:200px" canvas-id="canvas_tengjiao" class="canvas" ></canvas>
      
	</view>
</template>

<script>
import { getLiveStockData, getanimalProductYield, productArea } from '../../api/basicData'
	var uniCharts = require('../../utils/uniCharts');
	export default {
		data(){
      return{
        breedData:{},
        breedYear: 2019,
        LTQY: 17,
        GMYZC: 510,
        pieData:222,
        chartData_pig: {
          categories: ['2018-12-01', '2019-01-01', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01', 
                           '2019-06-01', '2019-07-01', '2019-08-01', '2019-09-01', '2019-10-01', '2019-011-01', 
                           '2019-12-01', '2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01'],
          quanGuo: {
              data: [927, 965, 597, 163, 621, 532, 1761, 885, 1915, 1275, 4691, 2613, 2243, 1009, 3364, 8644, 2081]
          },
          siChuan: {
              data: [64, 142, 272, 0, 188, 168, 668, 518, 1025, 547, 207, 527, 255, 239, 141, 554, 312]
          },
        },
        chartData_poultry: {
          categories: ['2019-01-01', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01', 
                       '2019-06-01', '2019-07-01', '2019-08-01', '2019-09-01', '2019-10-01'],
          quanGuo: {
              data: [33905, 7632, 61481, 6296, 86451, 60754, 4733, 35234, 4787, 4112]
          },
          siChuan: {
              data: [0, 30, 34, 5, 29, 0, 0, 48, 70, 282]
          },
        },
        chartData_land: {
          categories: ['2014年', '2015年', '2016年', '2017年'],
          shuiTian: {
              data: [54301, 54253, 54214, 54225]
          },
          hanDi: {
              data: [5534, 5519, 5632, 5668]
          },
          renGong:{
              data: [2385, 1133, 1073, 216]
          },
          linYe:{
              data: [22539, 23239, 24475, 25274]
          }
        },
        chartData_water: {
          categories: ['2014年', '2015年', '2016年', '2017年'],
          water: {
              data: [6.2, 8.22, 12.22, 6.44]
          }
        },
        chartData_temperature: {
          categories: ['2014年', '2015年', '2016年', '2017年'],
          water: {
              data: [17.1, 17, 17.3, 17.5]
          }
        },
        chartData_precipitation: {
          categories: ['2014年', '2015年', '2016年', '2017年'],
          water: {
              data: [17.1, 17, 17.3, 17.5]
          }
        },
        chartData_pepper: {
          categories: ['5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          max: {
              data: [9.6, 9.6, 9.6, 9.6, 9.6, 9.6, 9.6, 9.6]
          },
          min: {
              data: [4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8]
          },
          average: {
              data: [7.56, 6.2, 5.25, 6.73, 7.71, 7.66, 8.03, 9.3]
          }
        },
        chartData_pork: {
          categories: ['5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          max: {
              data: [22.65, 22.65, 22.65, 22.65, 22.65, 22.65, 22.65, 22.65]
          },
          min: {
              data: [17, 17, 17, 17, 17, 17, 17, 17]
          },
          average: {
              data: [18.17, 19.68, 19.75, 20.25, 18.13, 17.82, 20.66, 22.4]
          }
        },
        chartData_orange: {
          categories: ['5月', '6月'],
          max: {
              data: [4.25, 4.25]
          },
          min: {
              data: [4, 4]
          },
          average: {
              data: [4.25, 4.01]
          }
        },
        chartData_tengjiao: {
          categories: ['干藤椒', '鲜藤椒', '藤椒油', '保鲜藤椒'],
          type: {
              data: [4, 4, 4, 4]
          }
        },
      }
    },
		onReady: async function (e) {
//获得生猪的统计数据
      await this.getLiveStock()
//获得养殖占比数据
      await this.getanimalProductYieldData()
//藤椒基本信息数据获取
      await this.productAreaData()
			var windowWidth = 360;
			try {
			  var res = uni.getSystemInfoSync();
			  windowWidth = res.windowWidth;
			} catch (e) {
			  console.error('getSystemInfoSync failed!');
      }
      

      //生猪charts
			new uniCharts({
				canvasId: 'canvas_pig',
				type: 'line',
				animation: true,
				categories: this.chartData_pig.categories,
				series: [
          {
            name: '全国',
            data: this.chartData_pig.quanGuo.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '四川',
            data: this.chartData_pig.siChuan.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '头';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
      });
      //家禽charts
			new uniCharts({
				canvasId: 'canvas_poultry',
				type: 'line',
				animation: true,
				categories: this.chartData_poultry.categories,
				series: [
          {
            name: '全国',
            data: this.chartData_poultry.quanGuo.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '四川',
            data: this.chartData_poultry.siChuan.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '只';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
			});
      //土地资源变化charts
			new uniCharts({
				canvasId: 'canvas_land',
				type: 'column',
				animation: true,
				categories: this.chartData_land.categories,
				series: [
          {
            name: '水田',
            data: this.chartData_land.shuiTian.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '旱地',
            data: this.chartData_land.hanDi.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '人工造林',
            data: this.chartData_land.renGong.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '林业用地',
            data: this.chartData_land.linYe.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '公顷';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
			});
      //水资源变化charts
			new uniCharts({
				canvasId: 'canvas_water',
				type: 'column',
				animation: true,
				categories: this.chartData_water.categories,
				series: [
          {
            name: '水资源',
            data: this.chartData_water.water.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '亿立方米';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
			});
      //年平均气温charts
			new uniCharts({
				canvasId: 'canvas_temperature',
				type: 'column',
				animation: true,
				categories: this.chartData_temperature.categories,
				series: [
          {
            name: '年平均气温',
            data: this.chartData_temperature.water.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '℃';
					},
					// title: 'hello',
					min: 15
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
			});
      //降水量charts
			new uniCharts({
				canvasId: 'canvas_precipitation',
				type: 'line',
				animation: true,
				categories: this.chartData_precipitation.categories,
				series: [
          {
            name: '降水量',
            color: '#000000',
            data: this.chartData_precipitation.water.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + 'mm';
					},
					// title: 'hello',
					min: 15
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
			});
      //辣椒charts
			new uniCharts({
				canvasId: 'canvas_pepper',
				type: 'line',
				animation: true,
				categories: this.chartData_pepper.categories,
				series: [
          {
            name: '最高价格',
            // color: '#000000',
            data: this.chartData_pepper.max.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '最低价格',
            // color: '#000000',
            data: this.chartData_pepper.min.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '平均价格',
            // color: '#000000',
            data: this.chartData_pepper.average.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '元';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
			});
      //猪肉charts
			new uniCharts({
				canvasId: 'canvas_pork',
				type: 'line',
				animation: true,
				categories: this.chartData_pork.categories,
				series: [
          {
            name: '最高价格',
            // color: '#000000',
            data: this.chartData_pork.max.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '最低价格',
            // color: '#000000',
            data: this.chartData_pork.min.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '平均价格',
            // color: '#000000',
            data: this.chartData_pork.average.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '元';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
			});
      //沃柑charts
			new uniCharts({
				canvasId: 'canvas_orange',
				type: 'line',
				animation: true,
				categories: this.chartData_orange.categories,
				series: [
          {
            name: '最高价格',
            // color: '#000000',
            data: this.chartData_orange.max.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '最低价格',
            // color: '#000000',
            data: this.chartData_orange.min.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          },
          {
            name: '平均价格',
            // color: '#000000',
            data: this.chartData_orange.average.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
						return val + '元';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 200,
      });
      //养殖产量占比
      new uniCharts({
				animation: true,
				canvasId: 'pieCanvas',
				type: 'pie',
				series: [
          {
            name: '猪',
            data: this.pieData.pork,
          }, {
            name: '禽蛋',
            data: this.pieData.egg,
          },
          {
            name: '牛',
            data: this.pieData.beef,
          }, {
            name: '羊',
            data: this.pieData.mutton,
          },
          {
            name: '蜂蜜',
            data: this.pieData.honey,
          }, {
            name: '其他',
            data: this.pieData.otherMeat,
          },
        ],
				width: windowWidth,
				height: 300,
				// dataLabel: true,
      });
      //藤椒charts
			new uniCharts({
				canvasId: 'canvas_tengjiao',
				type: 'column',
				animation: true,
				categories: this.chartData_tengjiao.categories,
				series: [
          {
            name: '产品产量',
            // color: '#000000',
            data: this.chartData_tengjiao.type.data,
            format: function (val, name) {
              // return val.toFixed(2) + '万';
            }
          }
        ],
				yAxis: {
					format: function (val) {
            return val + '公斤';
					},
					// title: 'hello',
					min: 0
				},
				xAxis: {
          disableGrid: false,
					type: 'calibration'
				},
				extra: {
					column: {
						width: 15
					}
				},
				width: windowWidth,
				height: 150,
      });
    },
    async created(){
    },
		methods:{
      //获得生猪的统计数据
      async getLiveStock(year){
        let [err, res] = await getLiveStockData(year)
        this.breedData = res.data.data
      },
      choiceBreedYear(year){
        this.breedYear = year
        if(year == 2018){
          this.LTQY = 0
          this.GMYZC = 510
        }else if(year = 2019){
          this.LTQY = 17
          this.GMYZC = 510
        }
      },
      //获得养殖占比数据
      async getanimalProductYieldData(){
        let [err, res] = await getanimalProductYield()
        this.pieData = {
          pork: res.data.data.pork,
          egg: res.data.data.egg,
          beef: res.data.data.beef,
          mutton: res.data.data.mutton,
          honey: res.data.data.honey,
          otherMeat: res.data.data.otherMeat,
        }
      },
      //藤椒基本信息数据获取
      async productAreaData(){
        let [err, res] = await productArea()
        console.log(res.data.data)
        this.chartData_tengjiao.type.data = [
          res.data.data.dryWeight,
          res.data.data.freshWeight,
          res.data.data.oilYield,
          res.data.data.keepFreshYield
        ]
      },
		}
	}
</script>

<style scoped>
.content{
  overflow: hidden;
}
	.title {
		text-align: center;
		position: relative;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
    font-weight: bold;
	}
	.back-btn {
		margin-left: 20rpx;
		color: red;
	}
  .banner{
    position: relative;
    width:1090rpx;
    height:160rpx;
    left:50%;
    transform: translate(-50%, 0);
  }
  .colorBox{
    position: relative;
    width: 50rpx;
    height: 10rpx;
    background: #00b094;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 20rpx;
  }
  .echartsTitle{
    font-size: 14px;
    padding-left: 50rpx;
    font-weight: bold;
  }
  .pigDataList{
    position: relative;
    left: 50rpx;
    width: 650rpx;
    height: 100rpx;
    background: #ddd;
    border-radius: 50rpx;
    margin-bottom: 20rpx;
  }
  .btnBox{
    width: 750rpx;
    height: 80rpx;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20rpx;
  }
  .viewBtn{
    width:200rpx;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    border: 1px solid #3296FA;
    border-radius: 40rpx;
  }
  .viewBtnActive{
    background: #3296FA;
  }
</style>