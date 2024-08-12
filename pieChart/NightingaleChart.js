javascript: 
var script = document.createElement("script"); 
script.type = "text/javascript"; 
script.src ="https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js"; 
document.head.appendChild(script); 
setTimeout(function(){ 
    var dom =$("[data-label=[[NAME]]]").get(0); 
    var myChart = echarts.init(dom); 
    option = {
        legend: {
        }, 
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: [100, 250],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 8
            },
            label: {
              show: false
            },
            data: [
                [[LVAR1]]
            ]
          }
        ]
      };
    if (option && typeof option === "object")
    { 
        myChart.setOption(option, true); 
    }
}, 800);
