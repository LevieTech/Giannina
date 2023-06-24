import React, { useEffect } from "react";
import * as echarts from 'echarts';

const MyChartComponent = () => {
  useEffect(() => {
    let chartDom = document.getElementById('main');
    let myChart = echarts.init(chartDom, 'dark');
    
    const option = {
      title: {
        text: 'Age Distribution by Gender'
      },
      tooltip: {},
      legend: {
        data: ['Male', 'Female']
      },
      xAxis: {
        data: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71+']
      },
      yAxis: {},
      series: [
        {
          name: 'Male',
          type: 'bar',
          stack: 'gender',
          itemStyle: { color: 'red' },
          data: [120, 200, 150, 80, 70, 110, 130, 100]
        },
        {
          name: 'Female',
          type: 'bar',
          stack: 'gender',
          itemStyle: { color: 'gold' },
          data: [220, 182, 191, 234, 290, 330, 310, 220]
        }
      ]
    };
    
    myChart.setOption(option);
  }, []);

  return <div id="main" style={{ width: 600, height: 400 }} />;
};

export default MyChartComponent;








