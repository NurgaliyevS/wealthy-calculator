"use client";

import React, { useState, useEffect } from "react";
import {
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = ({ chartData }) => {
  const [requiresMargin, setRequiresMargin] = useState(false);

  const hasContributions = chartData.some(
    (data) => data?.totalContributions > 0
  );

  const formatYAxis = (tickItem) => {
    if (tickItem >= 1000) {
      return `$${(tickItem / 1000).toLocaleString()}k`;
    }
    return `$${tickItem.toLocaleString()}`;
  };

  useEffect(() => {
    // Check if any y-axis labels exceed 1000
    const requiresMarginAdjustment = chartData.some(
      (data) =>
        data.startingAmount >= 1000000 ||
        data.totalInterest >= 1000000 ||
        data.totalContributions >= 1000000
    );
    setRequiresMargin(requiresMarginAdjustment);
  }, [chartData]);

  return (
    <>
      <div className="w-full h-64 lg:h-96">
        <div className="w-full lg:w-3/5 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ left: requiresMargin ? 30 : 0 }}
            >
              <CartesianGrid strokeDasharray="0.1 0.1" />
              <YAxis tickFormatter={formatYAxis} />
              <XAxis dataKey="year" />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Bar
                dataKey="startingAmount"
                stackId="a"
                fill="#8884d8"
                name="Starting Amount"
              />
              {hasContributions && (
                <Bar
                  dataKey="totalContributions"
                  stackId="a"
                  fill="#82ca9d"
                  name="Total Contributions"
                />
              )}
              <Bar
                dataKey="totalInterest"
                stackId="a"
                fill="#ffc658"
                name="Total Interest Earned"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default ChartComponent;
