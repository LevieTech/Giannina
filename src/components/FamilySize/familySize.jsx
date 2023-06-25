import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

function FamilySize() {
  const [familySizeData, setFamilySizeData] = useState([]);
  const [familySizeYearData, setFamilySizeYearData] = useState([]);

  useEffect(() => {
    // Simulated data for family size
    const data = [
      { range: '1-2', count: 30 },
      { range: '3-4', count: 25 },
      { range: '5-6', count: 16 },
      { range: '7+', count: 10 },
    ];

    // Simulated data for family size by year
    const yearData = [
      { range: '1-2', '2020': 50, '2021': 80, '2022': 65, '2023': 95 },
      { range: '3-4', '2020': 35, '2021': 60, '2022': 45, '2023': 70 },
      { range: '5-6', '2020': 40, '2021': 75, '2022': 60, '2023': 85 },
      { range: '7+', '2020': 30, '2021': 55, '2022': 40, '2023': 65 },
    ];

    setFamilySizeData(data);
    setFamilySizeYearData(yearData);
  }, []);

  const familySizeOptions = {
    title: {
      text: 'Family Size Chart',
      textStyle: {
        color: '#ccc',
      },
    },
    xAxis: {
      type: 'category',
      data: familySizeData.map((entry) => entry.range),
      axisLabel: {
        color: '#ccc',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#ccc',
      },
    },
    series: [
      {
        name: 'Family Size',
        data: familySizeData.map((entry) => entry.count),
        type: 'line',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'gold',
              },
              {
                offset: 0.5,
                color: 'red',
              },
              {
                offset: 1,
                color: 'green',
              },
            ],
          },
        },
      },
    ],
    backgroundColor: '#222',
    textStyle: {
      color: '#ccc',
    },
  };

  const familySizeYearOptions = {
    title: {
      text: 'Family Size by Year',
      textStyle: {
        color: '#ccc',
      },
    },
    xAxis: {
      type: 'category',
      data: familySizeYearData.map((entry) => entry.range),
      axisLabel: {
        color: '#ccc',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#ccc',
      },
    },
    series: ['2020', '2021', '2022', '2023'].map((year) => ({
      name: year,
      type: 'line',
      data: familySizeYearData.map((entry) => entry[year]),
      lineStyle: {
        width: 2,
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowBlur: 10,
        shadowOffsetY: 10,
      },
      areaStyle: {
        color: year === '2020' ? 'red' : year === '2021' ? 'blue' : year === '2022' ? 'green' : 'gold',
      },
    })),
    backgroundColor: '#222',
    legend: {
      data: ['2020', '2021', '2022', '2023'],
      textStyle: {
        color: '#ccc',
      },
    },
    textStyle: {
      color: '#ccc',
    },
  };

  return (
    <div>
      <div>
        <h2>Family Size Chart</h2>
        <ReactECharts option={familySizeOptions} style={{ height: '400px' }} />
      </div>
      <div>
        <h2>Family Size by Year</h2>
        <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
      </div>
    </div>
  );
}

export default FamilySize;


// import React, { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';

// function FamilySize() {
//   const [familySizeData, setFamilySizeData] = useState([]);
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size
//     const data = [
//       { range: '1-2', count: 30 },
//       { range: '3-4', count: 25 },
//       { range: '5-6', count: 16 },
//       { range: '7+', count: 10 },
//     ];

//     // Simulated data for family size by year
//     const yearData = [
//       { year: '2020', count: 50 },
//       { year: '2021', count: 80 },
//       { year: '2022', count: 65 },
//       { year: '2023', count: 95 },
//     ];

//     setFamilySizeData(data);
//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeOptions = {
//     title: {
//       text: 'Family Size Chart',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeData.map((entry) => entry.count),
//         type: 'line',
//         areaStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'gold',
//               },
//               {
//                 offset: 0.5,
//                 color: 'red',
//               },
//               {
//                 offset: 1,
//                 color: 'green',
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

//   const familySizeYearOptions = {
//     title: {
//       text: 'Family Size by Year',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeYearData.map((entry) => entry.year),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeYearData.map((entry) => entry.count),
//         type: 'line',
//         areaStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'red',
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
//     legend: {
//       data: ['2020', '2021', '2022', '2023'],
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     backgroundColor: '#222',
//     textStyle: {
//       color: '#ccc',
//     },
//   };

//   return (
//     <div>
//       <div>
//         <h2>Family Size Chart</h2>
//         <ReactECharts option={familySizeOptions} style={{ height: '400px' }} />
//       </div>
//       <div>
//         <h2>Family Size by Year</h2>
//         <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;


// import React, { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';

// function FamilySize() {
//   const [familySizeData, setFamilySizeData] = useState([]);
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size
//     const data = [
//       { range: '1-2', count: 30 },
//       { range: '3-4', count: 25 },
//       { range: '5-6', count: 16 },
//       { range: '7+', count: 10 },
//     ];

//     // Simulated data for family size by year
//     const yearData = [
//       { year: '2020', count: [50, 45, 35, 20] },
//       { year: '2021', count: [80, 65, 60, 40] },
//       { year: '2022', count: [65, 60, 45, 30] },
//       { year: '2023', count: [95, 80, 70, 50] },
//     ];

//     setFamilySizeData(data);
//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeOptions = {
//     title: {
//       text: 'Family Size Chart',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeData.map((entry) => entry.count),
//         type: 'line',
//         areaStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'gold',
//               },
//               {
//                 offset: 0.5,
//                 color: 'red',
//               },
//               {
//                 offset: 1,
//                 color: 'green',
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
//       data: familySizeData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     legend: {
//       data: familySizeYearData.map((entry) => entry.year),
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     series: familySizeYearData.map((entry) => ({
//       name: entry.year,
//       type: 'bar',
//       data: entry.count,
//       itemStyle: {
//         color: entry.year === '2020' ? 'red' : entry.year === '2021' ? 'blue' : entry.year === '2022' ? 'green' : 'gold',
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
//         <h2>Family Size Chart</h2>
//         <ReactECharts option={familySizeOptions} style={{ height: '400px' }} />
//       </div>
//       <div>
//         <h2>Family Size by Year</h2>
//         <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;



// 


// import ReactECharts from 'echarts-for-react';

// function FamilySize() {
//   const [familySizeData, setFamilySizeData] = useState([]);
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size
//     const data = [
//       { range: '1-2', count: 30 },
//       { range: '3-4', count: 25 },
//       { range: '5-6', count: 16 },
//       { range: '7+', count: 10 },
//     ];

//     // Simulated data for family size by year
//     const yearData = [
//       { year: '2020', count: 50 },
//       { year: '2021', count: 80 },
//       { year: '2022', count: 65 },
//       { year: '2023', count: 95 },
//     ];

//     setFamilySizeData(data);
//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeOptions = {
//     title: {
//       text: 'Family Size Chart',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeData.map((entry) => entry.count),
//         type: 'line',
//         areaStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'gold',
//               },
//               {
//                 offset: 0.5,
//                 color: 'red',
//               },
//               {
//                 offset: 1,
//                 color: 'green',
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
//       data: familySizeData.map((entry) => entry.range),
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
//             x2: 0,
//             y2: 1,
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
//         <h2>Family Size Chart</h2>
//         <ReactECharts option={familySizeOptions} style={{ height: '400px' }} />
//       </div>
//       <div>
//         <h2>Family Size by Year</h2>
//         <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;




// import React, { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';

// function FamilySize() {
//   const [familySizeData, setFamilySizeData] = useState([]);
//   const [familySizeYearData, setFamilySizeYearData] = useState([]);

//   useEffect(() => {
//     // Simulated data for family size
//     const data = [
//       { range: '1-2', count: 30 },
//       { range: '3-4', count: 25 },
//       { range: '5-6', count: 16 },
//       { range: '7+', count: 10 },
//     ];

//     // Simulated data for family size by year
//     const yearData = [
//       { year: '2020', count: 50 },
//       { year: '2021', count: 80 },
//       { year: '2022', count: 65 },
//       { year: '2023', count: 95 },
//     ];

//     setFamilySizeData(data);
//     setFamilySizeYearData(yearData);
//   }, []);

//   const familySizeOptions = {
//     title: {
//       text: 'Family Size Chart',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeData.map((entry) => entry.range),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeData.map((entry) => entry.count),
//         type: 'line',
//         areaStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [
//               {
//                 offset: 0,
//                 color: 'gold',
//               },
//               {
//                 offset: 0.5,
//                 color: 'red',
//               },
//               {
//                 offset: 1,
//                 color: 'green',
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

//   const familySizeYearOptions = {
//     title: {
//       text: 'Family Size by Year',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     xAxis: {
//       type: 'category',
//       data: familySizeYearData.map((entry) => entry.year),
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#ccc',
//       },
//     },
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeYearData.map((entry) => entry.count),
//         type: 'line',
//         areaStyle: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
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
//         <h2>Family Size Chart</h2>
//         <ReactECharts option={familySizeOptions} style={{ height: '400px' }} />
//       </div>
//       <div>
//         <h2>Family Size by Year</h2>
//         <ReactECharts option={familySizeYearOptions} style={{ height: '400px' }} />
//       </div>
//     </div>
//   );
// }

// export default FamilySize;

// import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// function FamilySize() {
//   const [familySizeData, setFamilySizeData] = useState([]);

//   useEffect(() => {
//     // Simulated data
//     const data = [
//       { range: '1-2', count: 30 },
//       { range: '3-4', count: 25 },
//       { range: '5-6', count: 16 },
//       { range: '7+', count: 10 },
//     ];

//     setFamilySizeData(data);
//   }, []);

//   const options = {
//     chart: {
//       type: 'area',
//       background: '#222',
//     },
//     xaxis: {
//       categories: familySizeData.map((entry) => entry.range),
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
//     series: [
//       {
//         name: 'Family Size',
//         data: familySizeData.map((entry) => entry.count),
//       },
//     ],
//     colors: ['#ffd700'],
//     fill: {
//       colors: ['#dc143c'],
//       type: 'gradient',
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.7,
//         opacityTo: 0.9,
//         stops: [0, 90, 100],
//       },
//     },
//     theme: {
//       mode: 'dark',
//     },
//   };

//   return (
//     <div>
//       <h1>Family Size Chart</h1>
//       <ReactApexChart options={options} series={options.series} type="area" height={400} />
//     </div>
//   );
// }

// export default FamilySize;

// // import React, { useEffect, useState } from 'react';
// // import ReactApexChart from 'react-apexcharts';
// // import { useSelector, useDispatch } from 'react-redux';
// // import ReactECharts from 'echarts-for-react';
// // import echarts from 'echarts';

// // const FETCH_FAMILY_SIZE_DATA = 'FETCH_FAMILY_SIZE_DATA';
// // const FETCH_FAMILY_SIZE_DATA_SUCCESS = 'FETCH_FAMILY_SIZE_DATA_SUCCESS';
// // const FETCH_FAMILY_SIZE_DATA_FAILURE = 'FETCH_FAMILY_SIZE_DATA_FAILURE';

// // const fetchFamilySizeData = () => ({
// //   type: FETCH_FAMILY_SIZE_DATA,
// // });

// // function FamilySize() {
// //   const familySizeData = useSelector((state) => state.familySize);
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     dispatch(fetchFamilySizeData());
// //   }, [dispatch]);

// //   const renderChart = () => {
// //     const options = {
// //       tooltip: {
// //         trigger: 'axis',
// //         axisPointer: {
// //           type: 'line',
// //           lineStyle: {
// //             color: '#ccc',
// //             type: 'dashed',
// //           },
// //         },
// //       },
// //       xAxis: {
// //         type: 'category',
// //         data: familySizeData.map((entry) => entry.range),
// //       },
// //       yAxis: {
// //         type: 'value',
// //       },
// //       series: [
// //         {
// //           data: familySizeData.map((entry) => entry.count),
// //           type: 'line',
// //           areaStyle: {},
// //         },
// //       ],
// //     };

// //     return <ReactECharts option={options} style={{ height: '400px' }} />;
// //   };

// //   return (
// //     <div>
// //       {familySizeData ? (
// //         renderChart()
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default FamilySize;


// // import React, { useState, useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import * as echarts from 'echarts';

// // // Move action type constants to the top-level scope or a separate file
// // const FETCH_FAMILY_SIZE_DATA = 'FETCH_FAMILY_SIZE_DATA';
// // const FETCH_FAMILY_SIZE_DATA_SUCCESS = 'FETCH_FAMILY_SIZE_DATA_SUCCESS';
// // const FETCH_FAMILY_SIZE_DATA_FAILURE = 'FETCH_FAMILY_SIZE_DATA_FAILURE';

// // // Move the action creator outside of the component function
// // const fetchFamilySizeData = () => ({
// //   type: FETCH_FAMILY_SIZE_DATA,
// // });

// // function FamilySize() {
// //   const familySizeData = useSelector((state) => state.familySize);
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     // Dispatch the action to fetch the family size data when the component mounts
// //     dispatch(fetchFamilySizeData());
// //   }, [dispatch]);

// //   useEffect(() => {
// //     // Render the chart using ECharts when the family size data updates
// //     const chartDom = document.getElementById('familySize');
// //     const chart = echarts.init(chartDom);

// //     // Configure the chart options and data using the fetched family size data
// //     const option = {
// //       xAxis: {
// //         data: familySizeData.map((entry) => entry.range),
// //       },
// //       yAxis: {},
// //       series: [
// //         {
// //           data: familySizeData.map((entry) => entry.count),
// //           type: 'line',
// //           areaStyle: {},
// //         },
// //       ],
// //     };

// //     // Set the chart options
// //     chart.setOption(option);
// //   }, [familySizeData]);

// //   return (
// //     <div>
// //       <div id="familySize" style={{ width: 600, height: 400 }} />
// //     </div>
// //   );
// // }

// // export default FamilySize;



