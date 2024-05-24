import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useForm, Controller } from "react-hook-form";

const ResponsiveForm = () => {
  const { control, handleSubmit, register } = useForm();
  const [totalWorth, setTotalWorth] = useState(null);

  const onSubmit = (data) => {
    const parseNumericValue = (value) => {
      // Ensure the value is a string before using .replace
      return parseFloat(String(value).replace(/[^0-9.-]+/g, ""));
    };

    console.log(data, "data");

    const P = parseNumericValue(data.startingAmount);
    const r = parseNumericValue(data.rateOfReturn) / 100;
    const n = parseNumericValue(data.yearsToGrow);
    const C = data.additionalContribution
      ? parseNumericValue(data.additionalContribution)
      : 0;
    const contributionFrequency = data.contributionFrequency;

    // Adjust rate and periods based on contribution frequency
    let periods = n;
    let ratePerPeriod = r;

    if (contributionFrequency === "Monthly") {
      periods = n * 12;
      ratePerPeriod = r / 12;
    }

    const futureValue =
      P * Math.pow(1 + ratePerPeriod, periods) +
      (C * (Math.pow(1 + ratePerPeriod, periods) - 1)) / ratePerPeriod;

    console.log(futureValue, "futureValue");

    setTotalWorth(futureValue.toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex flex-col">
          <span className="pb-1 text-xs">Starting Amount: </span>
          <Controller
            name="startingAmount"
            control={control}
            defaultValue="1000"
            render={({ field }) => (
              <NumericFormat
                {...field}
                className="input input-sm input-bordered w-full lg:w-36"
                placeholder="$"
                thousandSeparator={true}
                prefix="$ "
                allowNegative={false}
              />
            )}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-2">
          <div className="flex flex-col">
            <span className="pb-1 text-xs">Additional Contribution: </span>
            <Controller
              name="additionalContribution"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <NumericFormat
                  {...field}
                  className="input input-sm input-bordered w-full lg:w-36"
                  placeholder="$"
                  thousandSeparator={true}
                  prefix="$ "
                  allowNegative={false}
                />
              )}
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
            render={({ field }) => (
              <NumericFormat
                {...field}
                className="input input-sm input-bordered w-full lg:w-20"
                suffix={".00%"}
                placeholder="%"
                allowNegative={false}
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <span className="pb-1 text-xs">Years to grow: </span>
          <Controller
            name="yearsToGrow"
            control={control}
            defaultValue="5"
            render={({ field }) => (
              <NumericFormat
                {...field}
                className="input input-sm input-bordered w-full lg:w-20"
                allowNegative={false}
              />
            )}
          />
        </div>
      </section>

      <button type="submit" className="btn btn-primary mt-4">
        Calculate
      </button>

      {totalWorth && (
        <section className="flex justify-center content-center py-20">
          <h2>Total worth: ${totalWorth}</h2>
        </section>
      )}
    </form>
  );
};

export default ResponsiveForm;
