import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { track } from "@vercel/analytics";

function PieChartComponent({ chartData }) {
  track("PieChartComponent is rendered");

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
    <div className="w-full h-72">
      <h5 className="text-center">
        Investment Balance in {chartData[chartData.length - 1].year}
      </h5>
      <div className="w-full h-full flex flex-col items-baseline">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
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
        <div className="flex flex-col pl-0 lg:pl-10 w-full">
          {pieChartData.map((entry, index) => (
            <div key={index} className="flex flex-row items-baseline">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></span>
              <div className="flex justify-between w-full">
                <p>{entry.name}</p>
                <p>$ {entry.value.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PieChartComponent;
