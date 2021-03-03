import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    // 麦冬————小圆
    MD_small(id){
        let myChart = echarts.init(document.getElementById(id));

        var option = {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [
              {
                name: '生猪出栏量',
                type: 'pie',
                color: ['#FEAD5C'],
                radius: ['70%', '85%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center'
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 100, name: '生猪出栏量' }
                ]
              }
            ]
          }
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    
    // 麦冬————大圆
    MD_big(id, data){
      console.log(data)
        let myChart = echarts.init(document.getElementById(id));

        var option = {
            // tooltip: {
            //   trigger: 'item',
            //   formatter: '{a} <br/>{b}: {c} ({d}%)'
            // },
            series: [
              {
                name: '麦冬产量',
                hoverAnimation:false,
                type: 'pie',
                color: ['#36E5FF', 'rgba(0,0,0,0)'],
                radius: ['65%', '90%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center'
                },
                labelLine: {
                  show: false
                },
                data
              }
            ]
          }
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
    
    // 乡镇种殖规模         -----真实数据
    xiangZhenZhongZhi(id, xData, data){

        let myChart = echarts.init(document.getElementById(id));
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                  }
                },
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '-2%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '18%',
                left: '2%',
                right: '0%',
                bottom: '15%',
                containLabel: true
            },
            "dataZoom": [{          //滚动条设置！！
              "show": true,       //设置是否显示
              "height": 10,       //设置高度
              "xAxisIndex": [
                  0
              ],
              bottom: '0%',         //设置位置
              "start": 1,         //设置起始位置
              "end": 40,          //设置结束位置
              // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
              // handleSize: '110%',
              handleStyle:{
                  color:"#01FBCC",        //设置滚动条两头的颜色
              },
              textStyle:{
               color:"#fff"               //设置鼠标悬停时显示文字的颜色
              },
              borderColor:"#90979c"       //设置整个滚动条边框的颜色
          }, {                    //可以通过鼠标滚轮控制
              "type": "inside",
              // disabled: true,     //可以设置鼠标滚轮控制失效，不知道有啥用
              "show": true,
              "height": 15,
              "start": 1,
              "end": 35
          }],
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '面积/亩',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                },
                // {
                //     // min: '0',
                //     // max: '800',
                //     name: '面积/亩',
                //     type: 'value',
                //     axisLabel: {    //设置x轴文字颜色
                //         color: '#fff'
                //     },
                //     nameTextStyle: {
                //         color: '#fff'
                //     },
                //     splitLine: {    //设置分隔线
                //         show: false
                //     },
                //     axisLine:{      //设置轴线是否显示
                //         show: false
                //     }
                // }
            ],
            series: [
                {
                    // name: '四川',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    smooth: 0.5,        //变平滑
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#0FE6D4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#0B70CD' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 20,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
}