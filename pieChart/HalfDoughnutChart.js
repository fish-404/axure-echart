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
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 360,
                data: [[[LVAR1]]]
              }
            ]
          };
    if (option && typeof option === "object")
    { 
        myChart.setOption(option, true); 
    }
}, 800);
