import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

function PieChartComponent({ chartData }) {
  const COLORS = {
    startingAmount: "#8884d8",
    totalContributions: "#82ca9d",
    totalInterest: "#ffc658",
  };

  const startingAmount = chartData[0].startingAmount;
  const totalContributions = chartData[chartData.length - 1].totalContributions;
  const totalInterest = chartData[chartData.length - 1].totalInterest;

  const pieChartData = [
    {
      name: "Starting Amount",
      value: startingAmount,
      color: COLORS.startingAmount,
    },
    totalContributions > 0 && {
      name: "Total Contributions",
      value: totalContributions,
      color: COLORS.totalContributions,
    },
    {
      name: "Total Interest",
      value: totalInterest,
      color: COLORS.totalInterest,
    },
  ].filter(Boolean);

  return (
    <div className="w-full h-64">
      <h5 className="lg:text-center">
        Investment Balance at Year {chartData[chartData.length - 1].year}
      </h5>
      <div className="w-full h-full flex">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className="outline-none"
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieChartComponent;
