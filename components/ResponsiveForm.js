"use client";

import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useForm, Controller } from "react-hook-form";
import ChartComponent from "./ChartComponent";
import PieChartComponent from "./PieChartComponent";
import Table from "./Table";
import { track } from "@vercel/analytics/server";

const ResponsiveForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm();
  const [totalWorth, setTotalWorth] = useState(null);
  const [chartData, setChartData] = useState([]);

  track("ResponsiveForm is rendered");

  useEffect(() => {
    track("useEffect with default values");
    handleSubmit(onSubmit)({
      startingAmount: "10000",
      additionalContribution: "1500",
      contributionFrequency: "Annually",
      rateOfReturn: "8",
      yearsToGrow: "15",
    });
  }, [handleSubmit]);

  const onSubmit = (data) => {
    track("onSubmit");
    const parseNumericValue = (value) =>
      parseFloat(String(value).replace(/[^0-9.-]+/g, ""));

    const P = parseNumericValue(data.startingAmount);
    const r = parseNumericValue(data.rateOfReturn) / 100;
    const n = parseNumericValue(data.yearsToGrow);
    const C = data.additionalContribution
      ? parseNumericValue(data.additionalContribution)
      : 0;
    const contributionFrequency = data.contributionFrequency;
    const additionalContribution = data.additionalContribution
      ? parseNumericValue(data.additionalContribution)
      : 0;

    let periods = n;
    let ratePerPeriod = r;

    if (contributionFrequency === "Monthly") {
      periods = n * 12;
      ratePerPeriod = r / 12;
    }

    // Calculate future value for the final amount
    const futureValue =
      P * Math.pow(1 + ratePerPeriod, periods) +
      (C * (Math.pow(1 + ratePerPeriod, periods) - 1)) / ratePerPeriod;

    setTotalWorth(Math.round(futureValue).toLocaleString());

    // Create chart data
    const newChartData = [];
    let accumulatedAmount = P;
    let totalContributions = 0;
    let totalInterest = 0;

    for (let i = 1; i <= periods; i++) {
      const interestEarned = accumulatedAmount * ratePerPeriod;
      totalInterest += interestEarned;
      accumulatedAmount += interestEarned;
      if (C > 0) {
        totalContributions += C;
        accumulatedAmount += C;
      }

      if (contributionFrequency === "Monthly" && i % 12 === 0) {
        newChartData.push({
          year: new Date().getFullYear() + i / 12,
          startingAmount: P,
          totalContributions,
          totalInterest: Math.round(totalInterest),
          total: Math.round(accumulatedAmount),
          contributionFrequency,
          additionalContribution,
          interestEarned: Math.round(interestEarned),
        });
      } else if (contributionFrequency === "Annually") {
        newChartData.push({
          year: new Date().getFullYear() + i,
          startingAmount: P,
          totalContributions,
          totalInterest: Math.round(totalInterest),
          total: Math.round(accumulatedAmount),
          contributionFrequency,
          additionalContribution,
          interestEarned: Math.round(interestEarned),
        });
      }
    }

    setChartData(newChartData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col lg:flex-row lg:justify-between gap-4">
          <div className="flex flex-col">
            <span className="pb-1 text-xs">Starting Amount: </span>
            <Controller
              name="startingAmount"
              control={control}
              defaultValue="10000"
              rules={{ required: "Required" }}
              render={({ field }) => {
                track("typing into startingAmount");
                return (
                  <>
                    <NumericFormat
                      {...field}
                      className="input input-sm input-bordered w-full lg:w-36"
                      placeholder="$"
                      thousandSeparator={true}
                      prefix="$ "
                      allowNegative={false}
                    />
                    {errors.startingAmount && (
                      <span className="text-red-400 text-xs mt-1">
                        {errors.startingAmount.message}
                      </span>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div className="flex flex-col">
              <span className="pb-1 text-xs">Additional Contribution: </span>
              <Controller
                name="additionalContribution"
                control={control}
                defaultValue="1500"
                render={({ field }) => {
                  track("typing into additionalContribution");

                  return (
                    <NumericFormat
                      {...field}
                      className="input input-sm input-bordered w-full lg:w-36"
                      placeholder="$"
                      thousandSeparator={true}
                      prefix="$ "
                      allowNegative={false}
                    />
                  );
                }}
              />
            </div>

            <div className="flex flex-col lg:mt-0">
              <span className="pb-1 text-xs">&nbsp;</span>
              <select
                className="select select-sm select-bordered w-full lg:w-36"
                defaultValue="Annually"
                {...register("contributionFrequency")}
              >
                <option value="Annually">Annually</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="pb-1 text-xs">Rate of return: </span>
            <Controller
              name="rateOfReturn"
              control={control}
              defaultValue="8"
              rules={{ required: "Required" }}
              render={({ field }) => {
                track("typing into rateOfReturn");
                return (
                  <>
                    <NumericFormat
                      {...field}
                      className="input input-sm input-bordered w-full lg:w-20"
                      suffix={".00%"}
                      placeholder="%"
                      allowNegative={false}
                    />
                    {errors.rateOfReturn && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.rateOfReturn.message}
                      </span>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="flex flex-col">
            <span className="pb-1 text-xs">Years to invest: </span>
            <Controller
              name="yearsToGrow"
              control={control}
              defaultValue="15"
              rules={{ required: "Required" }}
              render={({ field }) => {
                track("typing into yearsToGrow");
                return (
                  <>
                    <NumericFormat
                      {...field}
                      className="input input-sm input-bordered w-full lg:w-20"
                      allowNegative={false}
                    />
                    {errors.yearsToGrow && (
                      <span className="text-red-500 text-xs m-0 p-0 mt-1">
                        {errors.yearsToGrow.message}
                      </span>
                    )}
                  </>
                );
              }}
            />
          </div>
        </section>

        <button
          type="submit"
          className={`btn mt-4 ${isValid ? "btn-primary" : "btn-neutral"}`}
        >
          Calculate
        </button>
        <div className="flex gap-2 justify-center content-center pt-12 pb-16 lg:pt-20 lg:pb-28">
          <h3 className="font-bold text-xl lg:text-2xl">Total Investment:</h3>
          <span className="text-primary text-xl lg:text-2xl font-bold opacity-80">
            ${totalWorth ? totalWorth : 0}
          </span>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 lg:h-96 items-baseline">
        <div className="w-full lg:w-3/6">
          {chartData.length > 0 && <ChartComponent chartData={chartData} />}
        </div>
        <div className="w-full lg:w-3/6">
          {chartData.length > 0 && <PieChartComponent chartData={chartData} />}
        </div>
      </div>

      <div className="w-full lg:flex justify-between mt-16 lg:mt-10">
        <div className="flex-grow">
          {chartData.length > 0 && <Table chartData={chartData} />}
        </div>
      </div>
    </>
  );
};

export default ResponsiveForm;
