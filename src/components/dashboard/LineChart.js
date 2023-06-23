"use client";

import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const chartOptions = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      labels: {
        style: {
          fontSize: '14px',
          colors: '#858585',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          colors: '#858585',
        },
      },
      // title: {
      //   text: 'Number',
      // },
    },
    series: [
      {
        name: 'Guest',
        data: [200, 300, 200, 350],
        color: "#E9A0A0"
      },
      {
        name: 'User',
        data: [100, 400, 150, 250],
        color: "#9BDD7C"
      },
    ],
  };

  return (
    <div className='w-full'>
      <Chart options={chartOptions} series={chartOptions.series} type="line" width={'100%'} height={350} />
    </div>
  );
};

export default LineChart;
