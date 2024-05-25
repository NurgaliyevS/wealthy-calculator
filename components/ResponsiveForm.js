import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useForm, Controller } from "react-hook-form";

const ResponsiveForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm();
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
            rules={{ required: "Required" }}
            render={({ field }) => (
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
            rules={{ required: "Required" }}
            render={({ field }) => (
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
            )}
          />
        </div>

        <div className="flex flex-col">
          <span className="pb-1 text-xs">Years to invest: </span>
          <Controller
            name="yearsToGrow"
            control={control}
            defaultValue="5"
            rules={{ required: "Required" }}
            render={({ field }) => (
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
            )}
          />
        </div>
      </section>

      <button
        type="submit"
        className={`btn mt-4 ${isValid ? "btn-primary" : "btn-neutral"}`}
      >
        Calculate
      </button>
      <div className="flex gap-2 justify-center content-center py-10">
        <h3 className="text-lg">Total Investment:</h3>
        <span className="text-primary text-xl font-bold">
          ${totalWorth ? totalWorth : 0}
        </span>
      </div>
    </form>
  );
};

export default ResponsiveForm;
