import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";

const Table = ({ chartData }) => {
  const showAdditionalContribution = chartData.some(
    (data) => data.additionalContribution > 0
  );
  const showTotalContributions = chartData.some(
    (data) => data.totalContributions > 0
  );

  const headers = [
    { label: "Year", key: "year" },
    { label: "Starting Amount", key: "startingAmount" },
    ...(showAdditionalContribution
      ? [{ label: "Additional Contribution", key: "additionalContribution" }]
      : []),
    ...(showTotalContributions
      ? [{ label: "Total Contributions", key: "totalContributions" }]
      : []),
    { label: "Interest Earned", key: "interestEarned" },
    { label: "Total Interest Earned", key: "totalInterest" },
    { label: "End Balance", key: "total" },
  ];

  const copyToClipboard = () => {
    const rows = chartData.map((data) => [
      data.year,
      data.startingAmount,
      ...(showAdditionalContribution ? [data.additionalContribution] : []),
      ...(showTotalContributions ? [data.totalContributions] : []),
      data.interestEarned,
      data.totalInterest,
      data.total,
    ]);

    const tableContent = [headers.map((h) => h.label), ...rows]
      .map((row) => row.join("\t"))
      .join("\n");

    navigator.clipboard.writeText(tableContent);

    toast.success("Table copied to clipboard!");
  };

  return (
    <div className="mb-24">
      <div className="flex justify-end mb-4 space-x-2">
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        >
          Copy Table
        </button>
        <CSVLink
          data={chartData}
          headers={headers}
          filename="investment_data.csv"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
          separator=","
        >
          Export to CSV
        </CSVLink>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#8884d8] text-stone-950 leading-normal text-sm">
            <tr>
              <th className="text-center">Year</th>
              <th className="text-center">
                Starting Amount
              </th>
              {showAdditionalContribution && (
                <th className="text-center">
                  Additional Contribution
                </th>
              )}
              {showTotalContributions && (
                <th className="text-center">
                  Total Contributions
                </th>
              )}
              <th className="text-center">
                Interest Earned
              </th>
              <th className="text-center">
                Total Interest Earned
              </th>
              <th className="text-center">
                End Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data.year}</td>
                <td className="text-center">
                  ${data.startingAmount.toLocaleString()}
                </td>
                {showAdditionalContribution && (
                  <td className="text-center">
                    ${data.additionalContribution.toLocaleString()}
                  </td>
                )}
                {showTotalContributions && (
                  <td className="text-center">
                    ${data.totalContributions.toLocaleString()}
                  </td>
                )}
                <td className="text-center">
                  ${data.interestEarned.toLocaleString()}
                </td>
                <td className="text-center">
                  ${data.totalInterest.toLocaleString()}
                </td>
                <td className="text-center">${data.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
