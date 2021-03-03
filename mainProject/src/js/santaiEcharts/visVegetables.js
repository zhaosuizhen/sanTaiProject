import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {

    //食用菌基地情况
    shiYongJunJiDiQingKuang(id, data, total, color){
            let baiFenBi = (data/total * 100).toFixed(2)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [50, 55],
                    hoverAnimation: false,
                    silent: true,
                    center: ['50%', '50%'],
                    itemStyle:{
                        normal:{
                            labelLine: {
                                show:false,
                            },
                        }
                    },
                    data: [{
                      value: data,
                        label:{
                            normal:{
                                show: true,
                                position:"center",
                                formatter: `${baiFenBi}%`,
                                fontSize: 25,
                                fontWeight: 900,
                                color: "white",
                            }
                        },
                      itemStyle: {
                        normal: {
                            color: color,
                            // shadowColor: color,         //粗柱子阴影颜色
                            borderWidth:2,
                            borderColor: color,          //粗柱子颜色
                            // shadowBlur: 3
                        }
                      }
                    },{
                        value: total - data,
                          itemStyle: {
                              normal: {
                                color: '#405773',           //细柱子颜色
                              }
                          }
                    }]
                }
            }
    
            myChart.setOption(option);
            changeSize(myChart)
            return myChart;
    
    },

    //蔬菜占地面积
    shuCaiZhanDiMianJi(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#09FEFE', '#FBD778', '#F08282'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 亩 ({d}%)'
            // },
            legend: {
                textStyle: {
                  color: '#FFF',
                  rich: {
                      uname: {
                          width: 70
                      },
                      unum: {
                          width: 40,
                          align: 'right'
                      }
                    }
                  },
                  type: 'scroll',
                  orient: 'vertical',
                  right: '5%',
                  top: '20%',
                  formatter: function(name) {
                    var total = 0;
                    var tarValue;
                    for (var i = 0, l = data.length; i < l; i++) {
                        total += data[i].value;
                        if (data[i].name == name) {
                            tarValue = data[i].value;
                        }
                    }
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '面积',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;

    },
    
    //蔬菜播种面积
    shuCaiBoZhongMianJi(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#AEFDCA', '#FB7293', '#8378EA'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 亩 ({d}%)'
            // },
            legend: {
                textStyle: {
                  color: '#FFF',
                  rich: {
                      uname: {
                          width: 70
                      },
                      unum: {
                          width: 40,
                          align: 'right'
                      }
                    }
                  },
                  type: 'scroll',
                  orient: 'vertical',
                  right: '5%',
                  top: '20%',
                  formatter: function(name) {
                    var total = 0;
                    var tarValue;
                    for (var i = 0, l = data.length; i < l; i++) {
                        total += data[i].value;
                        if (data[i].name == name) {
                            tarValue = data[i].value;
                        }
                    }
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '面积',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;

    },

    //地膜覆盖面积
    diMoFuGaiMianJi(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#FF9F7F', '#FCA4BB', '#B8D07C'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 亩 ({d}%)'
            // },
            legend: {
                textStyle: {
                  color: '#FFF',
                  rich: {
                      uname: {
                          width: 70
                      },
                      unum: {
                          width: 40,
                          align: 'right'
                      }
                    }
                  },
                  type: 'scroll',
                  orient: 'vertical',
                  right: '5%',
                  top: '20%',
                  formatter: function(name) {
                    var total = 0;
                    var tarValue;
                    for (var i = 0, l = data.length; i < l; i++) {
                        total += data[i].value;
                        if (data[i].name == name) {
                            tarValue = data[i].value;
                        }
                    }
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '面积',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis:{
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;

    },

    //总产量
    zongChanLiang(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#3DD4FF', '#FFE36C', '#60D5B2'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 吨 ({d}%)'
            // },
            legend: {
                textStyle: {
                  color: '#FFF',
                  rich: {
                      uname: {
                          width: 70
                      },
                      unum: {
                          width: 40,
                          align: 'right'
                      }
                    }
                  },
                  type: 'scroll',
                  orient: 'vertical',
                  right: '5%',
                  top: '20%',
                  formatter: function(name) {
                    var total = 0;
                    var tarValue;
                    for (var i = 0, l = data.length; i < l; i++) {
                        total += data[i].value;
                        if (data[i].name == name) {
                            tarValue = data[i].value;
                        }
                    }
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}吨}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '产量',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;

    },

    //蔬菜各乡镇产量
    shuCaiGeXiangZhenChanLiang(id, xData, data, data_yield){
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
            //     right: '20%'
            // },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
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
                    name: '面积(亩)',
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
                {
                    // min: '0',
                    // max: '800',
                    name: '产量(吨)',
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
                }
            ],
            series: [
                {
                    name: '面积',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#02F1C4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#11A2D8' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 30,   //设置柱子宽度
                },
                {
                    name: '产量',
                    type: 'line',
                    smooth: true,
                    // stack: '总量',
                    data: data_yield,
                    symbol: 'none',
                    yAxisIndex: 1,
                    itemStyle: {
                        // normal: {       //渐变色
                        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: '#02F1C4' // 0% 处的颜色
                        //     }, {
                        //         offset: 1,
                        //         color: '#11A2D8' // 100% 处的颜色
                        //     }], false),
                        //     barBorderRadius: [30, 30, 0, 0],
                        // }
                        color: "#FEE185"
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //蔬菜种植品种
    shuCaiZhongZhiPinZhong(id, xData, data){
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
            grid: {     //设置图标位置
                top: '20%',
                left: '2%',
                right: '5%',
                bottom: '10%',
                containLabel: true
            },
            dataZoom: [{          //滚动条设置！！
                show: true,       //设置是否显示
                height: 10,       //设置高度
                xAxisIndex: [
                    0
                ],
                bottom: '2%',         //设置位置
                start: 0,         //设置起始位置
                end: 50,          //设置结束位置
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
                type: "inside",
                show: true,
                height: 15,
                start: 1,
                end: 35
            }],
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff'
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单产(亩/公斤)',
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
                }
            ],
            series: [
                {
                    name: '单产',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: '#02F1C4' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: '#11A2D8' // 100% 处的颜色
                            // }], false),
                            color: '#9fe6b8',
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
}