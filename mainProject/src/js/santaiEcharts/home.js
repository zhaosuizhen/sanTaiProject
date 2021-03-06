import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    // 植保防治趋势         -----真实数据
    zhiBaoFangZhi(id, xData, happenData, defenseData){
        happenData = happenData.map(item => item.toFixed(2))
        defenseData = defenseData.map(item => item.toFixed(2))
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
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                top: '0%',
                // right: '20%'
                right: '0%'
            },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '15%',
                containLabel: true
            },
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
                    name: '万亩次',
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
                    name: '发生面积',
                    type: 'bar',
                    // stack: '总量',
                    data: happenData,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fffe97' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FEE185' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                },
                {
                    name: '防治面积',
                    type: 'bar',
                    // stack: '总量',
                    data: defenseData,
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
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);


        changeSize(myChart)

        myChart.on("click", function(param) {
            // alert(param.name);
        });
        return myChart;
    },

    //种植类型占比      -----真实数据
    zhongZhiLeiXing(id, data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'item'
            },
            // backgroundColor:"#0B1837",
            color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
            // title: {
            //     text: '网络/安全设备',
            //     left: '60',
            //     top: 0,
            //     textAlign: 'center',
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 14,
            //         fontWeight: 0
            //     }
            // },
            grid: {
                left: -100,
                top: 50,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            // tooltip: {
            //     trigger: 'item',
            //     formatter: "{b} : {c} ({d}%)"
            // },
            // legend: {
            //     type: "scroll",
            //     orient: "vartical",
            //     // x: "right",
            //     top: "center",
            //     right: "15",
            //     // bottom: "0%",
            //     itemWidth: 16,
            //     itemHeight: 8,
            //     itemGap: 16,
            //     textStyle: {
            //         color: '#A3E2F4',
            //         fontSize: 12,
            //         fontWeight: 0
            //     },
            //     data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
            // },
            polar: {},
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B4A6B",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    color: "#0B4A6B",
                    margin: 8,
                    fontSize: 16
                },
            },
            radiusAxis: {
                min: 40,
                max: 120,
                interval: 20,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                    show: false,
                    // padding: [0, 0, 20, 0],
                    color: "#0B3E5E",
                    fontSize: 16
                },
                splitLine: {
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 2,
                        type: "solid"
                    }
                }
            },
            calculable: true,
            series: [{
                type: 'pie',
                radius: ["5%", "10%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            }, {
                type: 'pie',
                radius: ["88%", "90%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "",
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            },{
                stack: 'a',
                type: 'pie',
                radius: ['0%', '80%'],
                roseType: 'area',
                zlevel:10,
                color: ['#66B8A7', '#66B8BC', '#68BFDC', '#66B8FF', '#66B88D'],
                
                label: {
                    normal: {
                        padding: -50,
                        show: true,
                        formatter: '{b}    {d}%',   //边上所显示的文字
                        textStyle: {
                            fontSize: 14,
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: false,    //设置连接线是否显示
                        length: 20,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data
            }, ]
        }

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    // //种植类型占比 ---左侧
    // zhongZhiLeiXing_left(id, data, total){
    //     let baiFenBi = (data/total * 100).toFixed(2)
    //     // console.log(baiFenBi)
    //     let myChart = echarts.init(document.getElementById(id));

    //     let option = {
    //         // backgroundColor:"rgb(0,0,0)",
    //         series: {
    //             type: 'pie',
    //             clockWise: false,
    //             radius: [50, 55],
    //             hoverAnimation: false,
    //             silent: true,
    //             center: ['50%', '50%'],
    //             itemStyle:{
    //                 normal:{
    //                     labelLine: {
    //                         show:false,
    //                     },
    //                 }
    //             },
    //             data: [{
    //               value: data,
    //                 label:{
    //                     normal:{
    //                         show: true,
    //                         position:"center",
    //                         formatter: `${baiFenBi}%`,
    //                         fontSize: 25,
    //                         fontWeight: 900,
    //                         color: "white",
    //                     }
    //                 },
    //               itemStyle: {
    //                 normal: {
    //                     color: '#3DD4FF',
    //                     // shadowColor: '#3DD4FF',
    //                     borderWidth:2,
    //                     borderColor:'#3DD4FF',
    //                     // shadowBlur: 3
    //                 }
    //               }
    //             },{
    //                 value: (total - data),
    //                   itemStyle: {
    //                       normal: {
    //                         color: '#405773',
    //                       }
    //                   }
    //             }]
    //         }
    //     }

    //     myChart.setOption(option);
    //     changeSize(myChart)
    //     return myChart;
    // },

    // //种植类型占比 ---中间
    // zhongZhiLeiXing_center(id, data, total){
    //     let baiFenBi = (data/total * 100).toFixed(2)
    //     let myChart = echarts.init(document.getElementById(id));

    //     let option = {
    //         // backgroundColor:"rgb(0,0,0)",
    //         series: {
    //             type: 'pie',
    //             clockWise: false,
    //             radius: [50, 55],
    //             hoverAnimation: false,
    //             silent: true,
    //             center: ['50%', '50%'],
    //             itemStyle:{
    //                 normal:{
    //                     labelLine: {
    //                         show:false,
    //                     },
    //                 }
    //             },
    //             data: [{
    //               value: data,
    //                 label:{
    //                     normal:{
    //                         show: true,
    //                         position:"center",
    //                         formatter: `${baiFenBi}%`,
    //                         fontSize: 25,
    //                         fontWeight: 900,
    //                         color: "white",
    //                     }
    //                 },
    //               itemStyle: {
    //                 normal: {
    //                     color: '#FEE36C',
    //                     // shadowColor: '#FEE36C',         //粗柱子阴影颜色
    //                     borderWidth:2,
    //                     borderColor:'#FEE36C',          //粗柱子颜色
    //                     // shadowBlur: 3
    //                 }
    //               }
    //             },{
    //                 value: total - data,
    //                   itemStyle: {
    //                       normal: {
    //                         color: '#405773',           //细柱子颜色
    //                       }
    //                   }
    //             }]
    //         }
    //     }

    //     myChart.setOption(option);
    //     changeSize(myChart)
    //     return myChart;

    // },

    // //种植类型占比 ---右侧
    // zhongZhiLeiXing_right(id, data, total){
    //     console.log(data)
    //     console.log(total)
    //     let baiFenBi = (data/total * 100).toFixed(2)
    //     let myChart = echarts.init(document.getElementById(id));

    //     let option = {
    //         // backgroundColor:"rgb(0,0,0)",
    //         series: {
    //             type: 'pie',
    //             clockWise: false,
    //             radius: [50, 55],
    //             hoverAnimation: false,
    //             silent: true,
    //             center: ['50%', '50%'],
    //             itemStyle:{
    //                 normal:{
    //                     labelLine: {
    //                         show:false,
    //                     },
    //                 }
    //             },
    //             data: [{
    //               value: data,
    //                 label:{
    //                     normal:{
    //                         show: true,
    //                         position:"center",
    //                         formatter: `${baiFenBi}%`,
    //                         fontSize: 25,
    //                         fontWeight: 900,
    //                         color: "white",
    //                     }
    //                 },
    //               itemStyle: {
    //                 normal: {
    //                     color: '#60D5B2',
    //                     // shadowColor: '#60D5B2',
    //                     borderWidth:2,
    //                     borderColor:'#60D5B2',
    //                     // shadowBlur: 3
    //                 }
    //               }
    //             },{
    //                 value: total - data,
    //                   itemStyle: {
    //                       normal: {
    //                         color: '#405773',
    //                       }
    //                   }
    //             }]
    //         }
    //     }
        
    //     myChart.setOption(option);
    //     changeSize(myChart)
    //     return myChart;

    // },

    
    yangZhiChengBen(id, dataTime, dataBread, dataFeed, dataPig){        // 养殖成本结构      -----真实数据
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            // tooltip: {
            //     trigger: 'axis'
            // },
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
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                top: '0%',
                // right: '20%'
                right: '0%'
            },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '35%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dataTime,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff'
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    
                    name: '单位/元',
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
                    name: '养殖成本',
                    type: 'line',
                    // stack: '总量',
                    data: dataBread,
                    symbol: 'none',     //去掉点
                    smooth: 0.5,        //变平滑
                    itemStyle:{
                        color: '#8CC87C'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(140,200,124, 0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(140,200,124, 0.5)',
                            shadowBlur: 20
                        }
                    }
                },
                {
                    name: '饲料成本',
                    type: 'line',
                    // stack: '总量',
                    data: dataFeed,
                    symbol: 'none',
                    smooth: 0.5,
                    itemStyle:{
                        color: '#2AAEC7'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(42,170,195, 0.7)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(42,170,195, 0.7)',
                            shadowBlur: 20
                        }
                    }
                },
                {
                    name: '仔猪成本',
                    type: 'line',
                    // stack: '总量',
                    data: dataPig,
                    symbol: 'none',
                    smooth: 0.5,
                    itemStyle:{
                        color: '#DAC57C'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(218,197,124, 0.7)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(218,197,124, 0.7)',
                            shadowBlur: 20
                        }
                    }
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //真！种植类型占比
    jiaGeJiaoYi(id, xData, data, data_yield){
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
                bottom: '15%',
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
                    name: '面积/万亩',
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
                    name: '产量/吨',
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

    //投入品用量      -----真实数据
    touRuPin(id, index, dataName, xData, dataHF, dataDm, dataNy, dataNYCY){
        let myChart = echarts.init(document.getElementById(id));

        let seriesArr = [
            [{
                name: dataName[0],
                type: 'bar',
                data: dataHF,       //化肥
                // symbol: 'none',
                // smooth: true
                itemStyle: {
                    normal: {       //渐变色
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: '#02F1C4' // 0% 处的颜色
                        // }, {
                        //     offset: 1,
                        //     color: '#11A2D8' // 100% 处的颜色
                        // }], false),
                        color: '#37a2da',
                        barBorderRadius: [30, 30, 0, 0],
                    }
                },
                barWidth: 10,   //设置柱子宽度
            },
            {
                name: dataName[3],
                type: 'bar',
                data: dataNYCY,     //农用柴油
                // symbol: 'none',
                itemStyle: {
                    normal: {       //渐变色
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: '#02F1C4' // 0% 处的颜色
                        // }, {
                        //     offset: 1,
                        //     color: '#11A2D8' // 100% 处的颜色
                        // }], false),
                        color: '#ffdb5c',
                        barBorderRadius: [30, 30, 0, 0],
                    }
                },
                barWidth: 10,   //设置柱子宽度
            }]
            ,
            [{
                name: dataName[2],
                type: 'bar',
                data: dataNy,       //农药
                // symbol: 'none',
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
            },
            {
                name: dataName[1],
                type: 'bar',
                data: dataDm,       //地膜
                // symbol: 'none',
                itemStyle: {
                    normal: {       //渐变色
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: '#02F1C4' // 0% 处的颜色
                        // }, {
                        //     offset: 1,
                        //     color: '#11A2D8' // 100% 处的颜色
                        // }], false),
                        color: '#8378ea',
                        barBorderRadius: [30, 30, 0, 0],
                    }
                },
                barWidth: 10,   //设置柱子宽度
            }]
        ]

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
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                top: '0%',
                // right: '10%'
                right: '0%'
            },
            grid: {     //设置图标位置
                top: '15%',
                left: '2%',
                right: '5%',
                bottom: '33%',
                containLabel: true
            },
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
                    name: '单位/吨',
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
            series: seriesArr[index]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //土地资源结构————饼图          -----真实数据
    tuDiZiYuan(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
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
                  right: '10%',
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
                    var p = tarValue
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
          series: [
            {
                hoverAnimation:false,
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#37a2da','#9fe6b8','#ff9f7f','#8378ea'],
              radius: ['65%', '80%'],
              center: ['30%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              labelLine: {
                show: false
              },
            //   label: {
            //     normal: {
            //         // padding: -50,
            //         show: true,
            //         formatter: '{b}    {d}%',   //边上所显示的文字
            //         textStyle: {
            //             fontSize: 14,
            //         },
            //         position: 'outside'
            //     },
            //     emphasis: {
            //         show: true
            //     }
            // },
            labelLine: {
                normal: {
                    show: true,    //设置连接线是否显示
                    // length: 20,
                    // length2: 55
                },
                emphasis: {
                    show: false
                }
            },
              data
            }
          ]
        }
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        changeSize(myChart)
        return myChart;
    },

    //养殖品种占比————饼图      -----真实数据
    yangZhiPinZhong(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
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
            legend: {
                textStyle:{
                    color: '#fff'
                },
                type: 'scroll',
                orient: 'vertical',
                right: '10%',
                top: '20%'
            },
          series: [
            {
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#78E4E4', '#FEE185', '#15C2D1', '#00A1E4', '#85CBFE'],
              radius: ['70%', '85%'],
              center: ['30%', '50%'],
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
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        changeSize(myChart)
        return myChart;
    }









    //养殖成本结构统计
    // yangZhiChengBen(id){
    //     let myChart = echarts.init(document.getElementById(id));

    //     let option = {
    //         // tooltip: {
    //         //     trigger: 'axis'
    //         // },
    //         // legend: {
    //         //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    //         // },
    //         grid: {     //设置图标位置
    //             top: '20%',
    //             left: '0%',
    //             right: '3%',
    //             bottom: '0%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             type: 'category',
    //             boundaryGap: false,
    //             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    //             axisLabel: {    //设置x轴文字颜色
    //                 color: '#fff'
    //             }
    //         },
    //         yAxis: {
    //             name: '单位/元',
    //             type: 'value',
    //             axisLabel: {    //设置x轴文字颜色
    //                 color: '#fff'
    //             },
    //             nameTextStyle: {
    //                 color: '#fff'
    //             },
    //             splitLine: {    //设置分隔线
    //                 show: false
    //             }
    //         },
    //         series: [
    //             {
    //                 name: '邮件营销',
    //                 type: 'line',
    //                 stack: '总量',
    //                 data: [120, 132, 101, 134, 90, 230, 210],
    //                 symbol: 'none',
    //                 smooth: true
    //             },
    //             {
    //                 name: '联盟广告',
    //                 type: 'line',
    //                 stack: '总量',
    //                 data: [220, 182, 191, 234, 290, 330, 310],
    //                 symbol: 'none',
    //                 smooth: true
    //             },
    //             {
    //                 name: '视频广告',
    //                 type: 'line',
    //                 stack: '总量',
    //                 data: [150, 232, 201, 154, 190, 330, 410],
    //                 symbol: 'none',
    //                 smooth: true
    //             }
    //         ]
    //     };
        
    //     myChart.setOption(option);
    //     changeSize(myChart)
    //     return myChart;
    // }
}