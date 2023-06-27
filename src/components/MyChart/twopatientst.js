// import React, { useEffect } from "react";
// import * as echarts from 'echarts';

// const PatientsChartComponent = () => {
//   useEffect(() => {
//     let chartDom = document.getElementById('patientsChart');
//     let myChart = echarts.init(chartDom);
    
//     const option = {
//       color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
//       title: {
//         text: 'Patient Distribution by Condition'
//       },
//       tooltip: {},
//       legend: {
//         data: ['Condition 1', 'Condition 2', 'Condition 3', 'Condition 4', 'Condition 5']
//       },
//       xAxis: {
//         type: 'category',
//         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [
//         {
//           name: 'Condition 1',
//           type: 'bar',
//           stack: 'total',
//           data: [120, 132, 101, 134, 90, 230, 210]
//         },
//         {
//           name: 'Condition 2',
//           type: 'bar',
//           stack: 'total',
//           data: [220, 182, 191, 234, 290, 330, 310]
//         },
//         {
//           name: 'Condition 3',
//           type: 'bar',
//           stack: 'total',
//           data: [150, 232, 201, 154, 190, 330, 410]
//         },
//         {
//           name: 'Condition 4',
//           type: 'bar',
//           stack: 'total',
//           data: [320, 332, 301, 334, 390, 330, 320]
//         },
//         {
//           name: 'Condition 5',
//           type: 'bar',
//           stack: 'total',
//           data: [820, 932, 901, 934, 1290, 1330, 1320]
//         }
//       ]
//     };
    
//     myChart.setOption(option);
//   }, []);

//   return <div id="patientsChart" style={{ width: 600, height: 400 }} />;
// };

// export default PatientsChartComponent;



