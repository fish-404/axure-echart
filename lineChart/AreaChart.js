javascript: 
var script = document.createElement("script"); 
script.type = "text/javascript"; 
script.src ="https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js"; 
document.head.appendChild(script); 
setTimeout(function(){ 
    var dom =$("[data-label=[[LVAR1]]]").get(0); 
    var myChart = echarts.init(dom); 
    option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [[[xdata]]]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [[[ydata]]],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
    if (option && typeof option === "object")
    { 
        myChart.setOption(option, true); 
    }
}, 800);
