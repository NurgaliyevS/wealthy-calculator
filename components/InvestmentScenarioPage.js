import React from "react";
import { useRouter } from "next/router";
import ResponsiveForm from "./ResponsiveForm";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

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

const InvestmentScenarioPage = () => {
  const router = useRouter();
  const amount = router?.query?.params[0];
  const rate = router?.query?.params[1];
  const years = router?.query?.params[2];

  const currentScenario = {
    amount: parseInt(amount) || 10000,
    rate: parseInt(rate) || 10,
    years: parseInt(years) || 20,
  };

  return (
    <div
      className={`${poppins.variable} flex flex-col min-h-screen p-2 lg:p-6`}
    >
      <main className="flex-grow pt-6 lg:w-3/5 w-4/5 mx-auto mb-40 lg:mb-32">
        <section>
          <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-20 lg:items-start py-8 lg:py-20">
            <h1 className="text-3xl font-bold">
              Invest{" "}
              <strong className="text-primary">
                ${currentScenario.amount.toLocaleString()}
              </strong>{" "}
              at{" "}
              <strong className="text-primary">{currentScenario.rate}% </strong>
              interest for{" "}
              <strong className="text-primary">
                {currentScenario.years} years
              </strong>{" "}
            </h1>
          </div>
        </section>
        <ResponsiveForm
          initialValues={{
            startingAmount: currentScenario.amount.toString(),
            additionalContribution: "0",
            contributionFrequency: "Annually",
            rateOfReturn: currentScenario.rate.toString(),
            yearsToGrow: currentScenario.years.toString(),
          }}
        />
        <h2 className="text-2xl font-bold mt-12 mb-4">
          Explore Other Investment Scenarios
        </h2>
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

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Understanding Long-Term Investments
          </h2>
          <p className="mb-4">
            Investing for the long term can be a powerful way to build wealth.
            When you invest ${currentScenario.amount.toLocaleString()} at a{" "}
            {currentScenario.rate}% annual return for {currentScenario.years}{" "}
            years, you're harnessing the power of compound interest. This means
            you're earning returns not just on your initial investment, but also
            on the accumulated interest over time.
          </p>
          <p className="mb-4">
            It's important to note that while historical stock market returns
            have averaged around 10% annually before inflation, actual returns
            can vary. Always consider your risk tolerance and diversify your
            investments to manage potential market fluctuations.
          </p>
          <p>
            Use our calculator to experiment with different scenarios and see
            how changes in your initial investment, interest rate, or investment
            duration can affect your potential returns. Remember, this is a
            simplified calculation and doesn't account for factors like taxes,
            inflation, or varying market conditions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default InvestmentScenarioPage;
