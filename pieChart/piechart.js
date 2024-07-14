javascript: 
var script = document.createElement("script"); 
script.type = "text/javascript"; 
script.src ="https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js"; 
document.head.appendChild(script); 
setTimeout(
    function(){ 
        var dom =$("[data-label=[[NAME]]]").get(0); 
        var myChart = echarts.init(dom); 

        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    data: [
                        [[LVAR1]]
                    ],
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

    if (option && typeof option === "object")
    { 
        myChart.setOption(option, true); 
    }
}, 800);
