"use client";
import { NumericFormat } from "react-number-format";

function Main() {
  return (
    <>
      <section className="">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 lg:gap-20 lg:items-start py-8 lg:py-20">
          <h1 className="flex font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex-col gap-3 items-center lg:items-start">
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

      <section className="flex gap-4">
        <div className="flex w-full max-w-xs">
          <div className="flex w-full">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Starting amount:</span>
              </div>
              <NumericFormat
                className="input input-sm input-bordered"
                placeholder="$"
                thousandSeparator={true}
                prefix="$ "
                allowNegative={false}
              />
            </label>
          </div>
        </div>

        <div className="flex ml-4 w-full max-w-30">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Additional Contribution: </span>
            </div>
            <NumericFormat
              className="input input-sm input-bordered"
              placeholder="$"
              thousandSeparator={true}
              prefix="$ "
              allowNegative={false}
            />
          </label>
        </div>

        <div className="flex max-w-xs">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">&nbsp;</span>
            </div>
            <select className="select select-sm select-bordered w-40">
              <option>Annually</option>
              <option>Monthly</option>
            </select>
          </label>
        </div>

        <div className="flex w-full max-w-30">
          <label className="form-control max-w-30">
            <div className="label">
              <span className="label-text">Rate of return:</span>
            </div>
            <input
              type="number"
              placeholder="%"
              className="input input-sm input-bordered"
            />
          </label>
        </div>
      </section>
    </>
  );
}

export default Main;
