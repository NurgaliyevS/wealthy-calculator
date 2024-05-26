"use client";

import React from "react";
import { Bar, YAxis, XAxis, CartesianGrid, Tooltip, BarChart } from "recharts";

const ChartComponent = ({ chartData }) => {
    console.log(chartData, 'chartData');


  return (
    <BarChart
      width={600}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="0.1 0.1" />
      <YAxis />
      <XAxis dataKey="year" />
      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
      <Bar
        dataKey="startingAmount"
        stackId="a"
        fill="#8884d8"
        name="Starting Amount"
      />
      <Bar
        dataKey="totalContributions"
        stackId="a"
        fill="#82ca9d"
        name="Total Contributions"
      />
      <Bar
        dataKey="totalInterest"
        stackId="a"
        fill="#ffc658"
        name="Total Interest Earned"
      />
    </BarChart>
  );
};

export default ChartComponent;
