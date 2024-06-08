"use client";
import ResponsiveForm from "./ResponsiveForm.js";

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
            Everything you need to invest money wisely
          </p>
        </div>
      </section>

      <ResponsiveForm />
    </>
  );
}

export default Main;
