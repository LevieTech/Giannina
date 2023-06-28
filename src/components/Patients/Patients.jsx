import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as echarts from 'echarts';
import 'echarts/theme/dark';

function Patients() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch({ type: 'FETCH_PATIENTS_REQUEST' });
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        console.log(data); // Log the data to the console
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom, 'dark');

        const option = {
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false,
          },
          dataset: {
            source: [
              ['product', '2020', '2021', '2022', '2023'],
              ['Yearly', 56.5, 82.1, 88.7, 70.1, ],
              ['weekly', 51.1, 51.4, 55.1, 53.3, ],
              ['quarterly', 40.1, 62.2, 69.5, 36.4,],
            ],
          },
          xAxis: { type: 'category' },
          yAxis: { gridIndex: 0 },
          grid: { top: '55%' },
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' },
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' },
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' },
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' },
            },
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              emphasis: {
                focus: 'self',
              },
              label: {
                formatter: '{b}: {@2012} ({d}%)',
              },
              encode: {
                itemName: 'product',
                value: '2020',
                tooltip: '2020',
              },
            },
          ],
        };

        myChart.on('updateAxisPointer', function (event) {
          const xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)',
                },
                encode: {
                  value: dimension,
                  tooltip: dimension,
                },
              },
            });
          }
        });

        myChart.setOption(option);
      }, 0);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return <div id="main" style={{ width: 600, height: 400 }} />;
}

export default Patients;





// ! two charts different shades per pie 
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as echarts from 'echarts';
// import 'echarts/theme/dark';

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

//       const processedData = processData(data);

//       const option = {
//         title: {
//           text: 'Patients Visits',
//         },
//         tooltip: {},
//         legend: {
//           data: ['Weekly', 'Quarterly', 'Annual'],
//         },
//         series: [
//           {
//             name: 'Weekly',
//             type: 'pie',
//             radius: '30%',
//             center: ['25%', '50%'],
//             label: {
//               formatter: '{b}: {c}',
//             },
//             data: processedData.weekly,
//             itemStyle: {
//               color: (params) => {
//                 const colorPalette = ['#67C79F', '#47A0CA', '#9570E5', '#FF9F7F', '#FFDB5C'];
//                 return colorPalette[params.dataIndex % colorPalette.length];
//               },
//             },
//           },
//           {
//             name: 'Quarterly',
//             type: 'pie',
//             radius: '30%',
//             center: ['50%', '50%'],
//             label: {
//               formatter: '{b}: {c}',
//             },
//             data: processedData.quarterly,
//             itemStyle: {
//               color: (params) => {
//                 const colorPalette = ['#3DA0A9', '#45B8AC', '#67C79F', '#BFD5A3', '#FF9F7F'];
//                 return colorPalette[params.dataIndex % colorPalette.length];
//               },
//             },
//           },
//           {
//             name: 'Annual',
//             type: 'pie',
//             radius: '30%',
//             center: ['75%', '50%'],
//             label: {
//               formatter: '{b}: {c}',
//             },
//             data: processedData.annual,
//             itemStyle: {
//               color: (params) => {
//                 const colorPalette = ['#D4A5A5', '#DBAFAF', '#E5BAB9', '#F1C5C2', '#FFDB5C'];
//                 return colorPalette[params.dataIndex % colorPalette.length];
//               },
//             },
//           },
//         ],
//       };

//       myChart.setOption(option);
//     }
//   }, [data]);

//   const processData = (data) => {
//     const weeklyData = [];
//     const quarterlyData = [];
//     const annualData = [];

//     // Process the data to populate the series data for each chart
//     data.forEach((item) => {
//       const period = item.period;
//       const totalVisits = item.total_visits;

//       weeklyData.push({
//         name: period,
//         value: totalVisits,
//       });

//       quarterlyData.push({
//         name: period,
//         value: totalVisits,
//       });

//       annualData.push({
//         name: period,
//         value: totalVisits,
//       });
//     });

//     return {
//       weekly: weeklyData,
//       quarterly: quarterlyData,
//       annual: annualData,
//     };
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



//!differnt shades but white background
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
//       const myChart = echarts.init(chartDom);

//       const processedData = processData(data);

//       const option = {
//         title: {
//           text: 'Patients Visits',
//         },
//         tooltip: {},
//         legend: {
//           data: ['Weekly', 'Quarterly', 'Annual'],
//         },
//         series: [
//           {
//             name: 'Weekly',
//             type: 'pie',
//             radius: '30%',
//             center: ['25%', '50%'],
//             label: {
//               formatter: '{b}: {c}',
//             },
//             data: processedData.weekly.map((item, index) => ({
//               ...item,
//               itemStyle: { color: ['#2266B3', '#3D8CDB', '#66A9F2', '#8FC6FF', '#B2DAFF'][index % 5] },
//             })),
//           },
//           {
//             name: 'Quarterly',
//             type: 'pie',
//             radius: '30%',
//             center: ['50%', '50%'],
//             label: {
//               formatter: '{b}: {c}',
//             },
//             data: processedData.quarterly.map((item, index) => ({
//               ...item,
//               itemStyle: { color: ['#359A44', '#58BF68', '#7DE58D', '#A1F8B3', '#C5FFD8'][index % 5] },
//             })),
//           },
//           {
//             name: 'Annual',
//             type: 'pie',
//             radius: '30%',
//             center: ['75%', '50%'],
//             label: {
//               formatter: '{b}: {c}',
//             },
//             data: processedData.annual.map((item, index) => ({
//               ...item,
//               itemStyle: { color: ['#D6B641', '#E4C667', '#F2D78E', '#FFEDA9', '#FFF4C5'][index % 5] },
//             })),
//           },
//         ],
//       };

//       myChart.setOption(option);
//     }
//   }, [data]);

//   const processData = (data) => {
//     const weeklyData = [];
//     const quarterlyData = [];
//     const annualData = [];

//     // Process the data to populate the series data for each chart
//     data.forEach((item) => {
//       const period = item.period;
//       const totalVisits = item.total_visits;

//       weeklyData.push({
//         name: period,
//         value: totalVisits,
//       });

//       quarterlyData.push({
//         name: period,
//         value: totalVisits,
//       });

//       annualData.push({
//         name: period,
//         value: totalVisits,
//       });
//     });

//     return {
//       weekly: weeklyData,
//       quarterly: quarterlyData,
//       annual: annualData,
//     };
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
//         color: ['#D4AF37', '#008000', '#FF4500', '#1E90FF'],
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
//             type: 'bar',
//             data: weeklyData.map((item) => item.total_visits),
//           },
//           {
//             name: 'Monthly',
//             type: 'bar',
//             data: monthlyData.map((item) => item.total_visits),
//           },
//           {
//             name: 'Quarterly',
//             type: 'bar',
//             data: quarterlyData.map((item) => item.total_visits),
//           },
//           {
//             name: 'Annual',
//             type: 'bar',
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

//!left bar chart
// import React, { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';

// function FamilySize() {
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size by year
//     const yearData = [
//       { range: '1-2', count: [50, 45, 35, 20] },
//       { range: '3-4', count: [80, 65, 60, 40] },
//       { range: '5-6', count: [65, 60, 45, 30] },
//       { range: '7+', count: [95, 80, 70, 50] },
//     ];

//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeYearOptions = {
//     title: {
//       text: 'Family Size by Year',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'category',
//       data: familySizeYearData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     legend: {
//       data: ['1-2', '3-4', '5-6', '7+'],
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     series: familySizeYearData.map((entry) => ({
//       name: entry.range,
//       type: 'bar',
//       data: entry.count,
//       itemStyle: {
//         color:
//           entry.range === '1-2'
//             ? 'red'
//             : entry.range === '3-4'
//             ? 'blue'
//             : entry.range === '5-6'
//             ? 'green'
//             : 'yellow',
//       },
//     })),
//     backgroundColor: '#222',
//     textStyle: {
//       color: '#ccc',
//     },
//   };

//   return (
//     <div>
//       <div>
//         <h2>Family Size </h2>
//         <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;

//! up and down displays number in bar 
// import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// function FamilySize() {
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size by year
//     const yearData = [
//       { year: '2020', count: [50, 45, 35, 20] },
//       { year: '2021', count: [80, 65, 60, 40] },
//       { year: '2022', count: [65, 60, 45, 30] },
//       { year: '2023', count: [95, 80, 70, 50] },
//     ];

//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeYearOptions = {
//     chart: {
//       type: 'bar',
//       background: '#222',
//     },
//     xaxis: {
//       type: 'category',
//       categories: familySizeYearData.map((entry) => entry.year),
//       labels: {
//         style: {
//           colors: ['#ccc'],
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: ['#ccc'],
//         },
//       },
//     },
//     series: familySizeYearData.map((entry) => ({
//       name: entry.year,
//       data: entry.count,
//     })),
//     colors: ['#ff0000', '#0000ff', '#00ff00', '#ffd700'],
//     fill: {
//       type: 'solid',
//     },
//     legend: {
//       position: 'top',
//       labels: {
//         colors: ['#ccc'],
//       },
//     },
//     theme: {
//       mode: 'dark',
//     },
//   };

//   return (
//     <div>
//       <div>
//         <h2>Family Size by Year</h2>
//         <ReactApexChart options={familySizeYearOptions} series={familySizeYearOptions.series} type="bar" height={400} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;


//! gradient left 
// import React, { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';

// function FamilySize() {
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size by year
//     const yearData = [
//       { year: '2020', count: 50 },
//       { year: '2021', count: 80 },
//       { year: '2022', count: 65 },
//       { year: '2023', count: 95 },
//     ];

//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeYearOptions = {
//     title: {
//       text: 'Family Size by Year',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'category',
//       data: familySizeYearData.map((entry) => entry.year),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeYearData.map((entry) => entry.count),
//         type: 'bar',
//         itemStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 1,
//             y2: 0,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'red',
//               },
//               {
//                 offset: 0.25,
//                 color: 'green',
//               },
//               {
//                 offset: 0.5,
//                 color: 'blue',
//               },
//               {
//                 offset: 1,
//                 color: 'gold',
//               },
//             ],
//           },
//         },
//       },
//     ],
//     backgroundColor: '#222',
//     textStyle: {
//       color: '#ccc',
//     },
//   };

//   return (
//     <div>
//       <div>
//         <h2>Family Size by Year</h2>
//         <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;


