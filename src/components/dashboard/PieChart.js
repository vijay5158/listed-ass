"use client";
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const chartOptions = {
    chart: {
      id: 'pie-chart',
    },
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    series: [14, 31, 55],
    colors: ['#EE8484', '#F6DC7D', '#98D89E'],
    legend: {
      position: 'right',
      fontSize: '14px',
      fontWeight: 'bold',
    },
  };

  return (
    <div>
      <Chart options={chartOptions} series={chartOptions.series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;
