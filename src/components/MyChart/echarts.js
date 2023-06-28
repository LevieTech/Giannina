// echarts.js
import React, { useEffect } from 'react';
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

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <div id="main" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MyChartComponent;




// import React, { useEffect } from "react";
// import * as echarts from 'echarts';

// const MyChartComponent = () => {
//   useEffect(() => {
//     let chartDom = document.getElementById('main');
//     let myChart = echarts.init(chartDom, 'dark');
    
//     const option = {
//       title: {
//         text: 'Age Distribution by Gender'
//       },
//       tooltip: {},
//       legend: {
//         data: ['Male', 'Female']
//       },
//       xAxis: {
//         data: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71+']
//       },
//       yAxis: {},
//       series: [
//         {
//           name: 'Male',
//           type: 'bar',
//           stack: 'gender',
//           itemStyle: { color: 'red' },
//           data: [120, 200, 150, 80, 70, 110, 130, 100]
//         },
//         {
//           name: 'Female',
//           type: 'bar',
//           stack: 'gender',
//           itemStyle: { color: 'gold' },
//           data: [220, 182, 191, 234, 290, 330, 310, 220]
//         }
//       ]
//     };
    
//     myChart.setOption(option);
//   }, []);

//   return <div id="main" style={{ width: 600, height: 400 }} />;
// };

// export default MyChartComponent;


//!


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as echarts from 'echarts';

// function Patients() {
//   const dispatch = useDispatch();
//   const { data, isLoading, error } = useSelector((state) => state.patients);

//   useEffect(() => {
//     dispatch({ type: 'FETCH_PATIENTS_REQUEST' });
//   }, [dispatch]);

//   useEffect(() => {
//     if (data) {
//       const chartDom = document.getElementById('main');
//       const myChart = echarts.init(chartDom, 'dark');

//       // Group the data by different time periods (week, month, quarter, year)
//       const weeklyData = processDataByPeriod(data, 'week');
//       const monthlyData = processDataByPeriod(data, 'month');
//       const quarterlyData = processDataByPeriod(data, 'quarter');
//       const annualData = processDataByPeriod(data, 'year');

//       const option = {
//         color: [
//           new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             { offset: 0, color: 'rgba(212, 175, 55, 0.8)' },
//             { offset: 1, color: 'rgba(212, 175, 55, 0)' },
//           ]),
//           new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             { offset: 0, color: 'rgba(0, 128, 0, 0.8)' },
//             { offset: 1, color: 'rgba(0, 128, 0, 0)' },
//           ]),
//           new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             { offset: 0, color: 'rgba(255, 69, 0, 0.8)' },
//             { offset: 1, color: 'rgba(255, 69, 0, 0)' },
//           ]),
//           new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             { offset: 0, color: 'rgba(30, 144, 255, 0.8)' },
//             { offset: 1, color: 'rgba(30, 144, 255, 0)' },
//           ]),
//         ],
//         title: {
//           text: 'Patients by Time Period',
//         },
//         tooltip: {
//           trigger: 'axis',
//         },
//         legend: {
//           data: ['Weekly', 'Monthly', 'Quarterly', 'Annual'],
//         },
//         xAxis: {
//           type: 'category',
//           data: weeklyData.map((item) => item.period),
//         },
//         yAxis: {
//           type: 'value',
//         },
//         series: [
//           {
//             name: 'Weekly',
//             type: 'line',
//             stack: 'total',
//             smooth: true,
//             lineStyle: {
//               width: 0,
//             },
//             showSymbol: false,
//             areaStyle: {},
//             emphasis: {
//               focus: 'series',
//             },
//             data: weeklyData.map((item) => item.total_visits),
//           },
//           {
//             name: 'Monthly',
//             type: 'line',
//             stack: 'total',
//             smooth: true,
//             lineStyle: {
//               width: 0,
//             },
//             showSymbol: false,
//             areaStyle: {},
//             emphasis: {
//               focus: 'series',
//             },
//             data: monthlyData.map((item) => item.total_visits),
//           },
//           {
//             name: 'Quarterly',
//             type: 'line',
//             stack: 'total',
//             smooth: true,
//             lineStyle: {
//               width: 0,
//             },
//             showSymbol: false,
//             areaStyle: {},
//             emphasis: {
//               focus: 'series',
//             },
//             data: quarterlyData.map((item) => item.total_visits),
//           },
//           {
//             name: 'Annual',
//             type: 'line',
//             stack: 'total',
//             smooth: true,
//             lineStyle: {
//               width: 0,
//             },
//             showSymbol: false,
//             areaStyle: {},
//             emphasis: {
//               focus: 'series',
//             },
//             data: annualData.map((item) => item.total_visits),
//           },
//         ],
//       };

//       myChart.setOption(option);
//     }
//   }, [data]);

//   const processDataByPeriod = (data, period) => {
//     const groupedData = data.reduce((result, item) => {
//       const periodValue = getPeriodValue(item.visit_time, period);
//       if (result.has(periodValue)) {
//         result.get(periodValue).total_visits += item.count;
//       } else {
//         result.set(periodValue, { period: periodValue, total_visits: item.count });
//       }
//       return result;
//     }, new Map());

//     const sortedData = Array.from(groupedData.values()).sort((a, b) => {
//       return new Date(a.period) - new Date(b.period);
//     });

//     return sortedData;
//   };

//   const getPeriodValue = (dateString, period) => {
//     const date = new Date(dateString);
//     if (period === 'week') {
//       const firstDayOfWeek = new Date(date);
//       firstDayOfWeek.setDate(date.getDate() - date.getDay());
//       const lastDayOfWeek = new Date(firstDayOfWeek);
//       lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
//       return `${firstDayOfWeek.toISOString().slice(0, 10)} - ${lastDayOfWeek.toISOString().slice(0, 10)}`;
//     } else if (period === 'month') {
//       return `${date.getFullYear()}-${date.getMonth() + 1}`;
//     } else if (period === 'quarter') {
//       const quarter = Math.floor(date.getMonth() / 3) + 1;
//       return `${date.getFullYear()}-Q${quarter}`;
//     } else if (period === 'year') {
//       return `${date.getFullYear()}`;
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading data: {error}</div>;
//   }

//   return <div id="main" style={{ width: 600, height: 400 }} />;
// }

// export default Patients;




