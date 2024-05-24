"use client";
import { NumericFormat } from "react-number-format";

function Main() {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-20 lg:items-start py-8 lg:py-20">
          <h1 className="flex font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex-col gap-3 lg:items-start">
            <span className="relative">Invest first &</span>
            <span className="whitespace-nowrap relative">
              spend what's left
            </span>
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">
            The Wealth calculator with all you need to invest money wisely.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex flex-col">
          <span className="pb-1 text-xs">Starting Amount: </span>
          <NumericFormat
            className="input input-sm input-bordered w-full lg:w-36"
            placeholder="$"
            thousandSeparator={true}
            prefix="$ "
            allowNegative={false}
            defaultValue={1000}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-2">
          <div className="flex flex-col">
            <span className="pb-1 text-xs">Additional Contribution: </span>
            <NumericFormat
              className="input input-sm input-bordered w-full lg:w-36"
              placeholder="$"
              thousandSeparator={true}
              prefix="$ "
              allowNegative={false}
            />
          </div>

          <div className="flex flex-col lg:mt-0">
            <span className="pb-1 text-xs">&nbsp;</span>
            <select
              className="select select-sm select-bordered w-full lg:w-36"
              defaultValue="Annually"
            >
              <option>Annually</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="pb-1 text-xs">Rate of return: </span>
          <NumericFormat
            className="input input-sm w-full lg:w-20 input-bordered"
            suffix={".00%"}
            placeholder="%"
            allowNegative={false}
            defaultValue={8}
          />
        </div>
        <div className="flex flex-col">
          <span className="pb-1 text-xs">Years to grow: </span>
          <NumericFormat
            className="input input-sm w-full lg:w-20 input-bordered"
            allowNegative={false}
            defaultValue={5}
          />
        </div>
      </section>

      <section className="flex justify-center content-center py-20">
        <h2>Total worth: </h2>
      </section>
    </>
  );
}

export default Main;
