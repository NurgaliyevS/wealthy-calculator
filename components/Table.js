"use client";

function Table({ chartData }) {
  const showAdditionalContribution = chartData.some(
    (data) => data.additionalContribution > 0
  );
  const showTotalContributions = chartData.some(
    (data) => data.totalContributions > 0
  );

  return (
    <div className="mb-24">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#8884d8] text-stone-950 leading-normal text-sm">
            <tr>
              <th className="text-center">Year</th>
              <th className="text-center">
                Starting <br /> Amount
              </th>
              {showAdditionalContribution && (
                <th className="text-center">
                  Additional <br /> Contribution
                </th>
              )}
              {showTotalContributions && (
                <th className="text-center">
                  Total <br /> Contributions
                </th>
              )}
              <th className="text-center">
                Interest <br /> Earned
              </th>
              <th className="text-center">
                Total Interest <br /> Earned
              </th>
              <th className="text-center">
                End <br /> Balance
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
}

export default Table;
