javascript: 
var script = document.createElement("script"); 
script.type = "text/javascript"; 
script.src ="https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js"; 
document.head.appendChild(script); 
setTimeout(function(){ 
    var dom =$("[data-label=[[NAME]]]").get(0); 
    var myChart = echarts.init(dom); 
    option = {
        title: {
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        xAxis: {
          data: [[[xData]]]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line',
            data: [[[yData]]]
          }
        ]
      };
    if (option && typeof option === "object")
    { 
        myChart.setOption(option, true); 
    }
}, 800);
