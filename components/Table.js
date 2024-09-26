import React from "react";
import { toast } from "react-toastify";

const Table = ({ chartData }) => {
  const showAdditionalContribution = chartData.some(
    (data) => data.additionalContribution > 0
  );
  const showTotalContributions = chartData.some(
    (data) => data.totalContributions > 0
  );

  const headers = [
    "Year",
    "Starting Amount",
    ...(showAdditionalContribution ? ["Additional Contribution"] : []),
    ...(showTotalContributions ? ["Total Contributions"] : []),
    "Interest Earned",
    "Total Interest Earned",
    "End Balance"
  ];

  const formatNumber = (num) => `$${num.toLocaleString()}`;

  const formatCSV = (data) => {
    const csvRows = [
      headers,
      ...data.map(row => [
        row.year,
        formatNumber(row.startingAmount),
        ...(showAdditionalContribution ? [formatNumber(row.additionalContribution)] : []),
        ...(showTotalContributions ? [formatNumber(row.totalContributions)] : []),
        formatNumber(row.interestEarned),
        formatNumber(row.totalInterest),
        formatNumber(row.total)
      ])
    ];

    const csvContent = csvRows.map(row => row.join(';')).join('\n');

    // Add BOM for Excel
    const BOM = '\uFEFF';
    return BOM + csvContent;
  };

  const exportCSV = () => {
    const csvContent = formatCSV(chartData);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "investment_data.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const copyToClipboard = () => {
    const tableContent = formatCSV(chartData);
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
        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
        >
          Export to Excel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#8884d8] text-stone-950 leading-normal text-sm">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="text-center">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {chartData.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data.year}</td>
                <td className="text-center">{formatNumber(data.startingAmount)}</td>
                {showAdditionalContribution && (
                  <td className="text-center">{formatNumber(data.additionalContribution)}</td>
                )}
                {showTotalContributions && (
                  <td className="text-center">{formatNumber(data.totalContributions)}</td>
                )}
                <td className="text-center">{formatNumber(data.interestEarned)}</td>
                <td className="text-center">{formatNumber(data.totalInterest)}</td>
                <td className="text-center">{formatNumber(data.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;