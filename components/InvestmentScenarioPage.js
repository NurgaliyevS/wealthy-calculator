import React from "react";
import { useRouter } from "next/router";
import ResponsiveForm from "./ResponsiveForm";
import { Poppins } from "next/font/google";
import Links from "./Links";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
        <Links />

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
