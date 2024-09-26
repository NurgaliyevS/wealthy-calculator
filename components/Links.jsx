import React from "react";

const scenarios = [
  // Common starting amounts
  { amount: 1000, rate: 7, years: 10 },
  { amount: 1000, rate: 7, years: 20 },
  { amount: 1000, rate: 7, years: 30 },
  { amount: 5000, rate: 7, years: 10 },
  { amount: 5000, rate: 7, years: 20 },
  { amount: 5000, rate: 7, years: 30 },
  { amount: 10000, rate: 7, years: 10 },
  { amount: 10000, rate: 7, years: 20 },
  { amount: 10000, rate: 7, years: 30 },

  // Varying interest rates
  { amount: 10000, rate: 5, years: 20 },
  { amount: 10000, rate: 6, years: 20 },
  { amount: 10000, rate: 8, years: 20 },
  { amount: 10000, rate: 10, years: 20 },
  { amount: 10000, rate: 12, years: 20 },

  // Short-term investments
  { amount: 5000, rate: 3, years: 1 },
  { amount: 5000, rate: 3, years: 2 },
  { amount: 5000, rate: 3, years: 3 },
  { amount: 10000, rate: 4, years: 1 },
  { amount: 10000, rate: 4, years: 2 },
  { amount: 10000, rate: 4, years: 3 },

  // Medium-term investments
  { amount: 15000, rate: 6, years: 5 },
  { amount: 15000, rate: 7, years: 5 },
  { amount: 15000, rate: 8, years: 5 },
  { amount: 20000, rate: 6, years: 7 },
  { amount: 20000, rate: 7, years: 7 },
  { amount: 20000, rate: 8, years: 7 },

  // Long-term investments
  { amount: 25000, rate: 7, years: 25 },
  { amount: 25000, rate: 8, years: 25 },
  { amount: 25000, rate: 9, years: 25 },
  { amount: 50000, rate: 7, years: 30 },
  { amount: 50000, rate: 8, years: 30 },
  { amount: 50000, rate: 9, years: 30 },

  // High-yield investments
  { amount: 10000, rate: 15, years: 10 },
  { amount: 10000, rate: 15, years: 20 },
  { amount: 20000, rate: 12, years: 15 },
  { amount: 20000, rate: 12, years: 25 },

  // Retirement savings
  { amount: 100000, rate: 6, years: 20 },
  { amount: 100000, rate: 7, years: 20 },
  { amount: 100000, rate: 8, years: 20 },
  { amount: 100000, rate: 9, years: 30 },
  { amount: 100000, rate: 10, years: 30 },
  { amount: 200000, rate: 6, years: 30 },
  { amount: 200000, rate: 7, years: 30 },
  { amount: 200000, rate: 8, years: 30 },
  { amount: 200000, rate: 9, years: 30 },
  { amount: 200000, rate: 10, years: 30 },

  // Small, regular investments
  { amount: 100, rate: 7, years: 10 },
  { amount: 100, rate: 7, years: 20 },
  { amount: 100, rate: 7, years: 30 },
  { amount: 200, rate: 7, years: 10 },
  { amount: 200, rate: 7, years: 20 },
  { amount: 200, rate: 7, years: 30 },

  // Large, long-term investments
  { amount: 500000, rate: 5, years: 20 },
  { amount: 500000, rate: 6, years: 20 },
  { amount: 500000, rate: 7, years: 20 },
  { amount: 500000, rate: 8, years: 20 },
  { amount: 500000, rate: 9, years: 20 },
  { amount: 500000, rate: 10, years: 20 },
  { amount: 1000000, rate: 5, years: 30 },
  { amount: 1000000, rate: 6, years: 30 },
  { amount: 1000000, rate: 7, years: 30 },
  { amount: 1000000, rate: 8, years: 30 },
  { amount: 1000000, rate: 9, years: 30 },
  { amount: 1000000, rate: 10, years: 30 },

  // Specific scenarios from original list
  { amount: 3600, rate: 7, years: 10 },
  { amount: 12000, rate: 8, years: 5 },
  { amount: 15000, rate: 10, years: 5 },
  { amount: 15000, rate: 10, years: 10 },
  { amount: 15000, rate: 10, years: 15 },
  { amount: 4500, rate: 12.83, years: 4 },
  { amount: 2500, rate: 20, years: 35 },
  { amount: 54000, rate: 9, years: 7 },
  { amount: 9000, rate: 14, years: 25 },

  // Additional scenarios (continuing to 200+ total)
  ...Array.from({ length: 1000 }, (_, i) => ({
    amount: Math.floor((1000 + i * 500) / 100) * 100, // Increments of $500, rounded to nearest $100
    rate: (5 + (i % 11) * 0.5).toFixed(1), // // Rates from 5% to 10% (included) in 0.5% increments
    years: Math.floor(1 + (i % 30)), // Years from 1 to 30
  })),
];

// Sort scenarios by amount, then rate, then years
scenarios.sort(
  (a, b) => a.amount - b.amount || a.rate - b.rate || a.years - b.years
);

function Links(props) {
  return (
    <ul className="list-disc pl-6">
      {scenarios.map((scenario, index) => (
        <li key={index} className="mb-2">
          <a
            href={`/invest/${scenario.amount}-at-${scenario.rate}-percent-for-${scenario.years}-years`}
            className="text-blue-600 hover:underline"
          >
            Invest ${scenario.amount.toLocaleString()} at {scenario.rate}%
            interest for {scenario.years} years
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Links;
