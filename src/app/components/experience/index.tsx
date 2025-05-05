import React from "react";

export default function Experience() {
  return (
    <section className="max-w-7xl w-full mx-auto pt-21.25 pb-38.75">
      <h1 className="font-medium text-[64px] text-center mb-21.25">
        <span className="text-charcoal-blue">My</span> <span className="text-primary">Work Experince</span>
      </h1>

      <div className="flex justify-between">
        <div className="flex flex-col gap-25.5">
          <div>
            <p className="font-semibold text-[40px] text-charcoal-blue mb-3.5">Cognizant, Mumbai</p>
            <p className="text-2xl text-blue-gray">Sep 2016- July 2020</p>
          </div>
          <div>
            <p className="font-semibold text-[40px] text-charcoal-blue mb-3.5">Sugee Pvt limited, Mumbai</p>
            <p className="text-2xl text-blue-gray">Sep 2020- July 2023</p>
          </div>
          <div>
            <p className="font-semibold text-[40px] text-charcoal-blue mb-3.5">Cinetstox, Mumbai</p>
            <p className="text-2xl text-blue-gray">Sep 2023</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-full bg-primary outline-2 outline-offset-6 outline-dashed outline-dark-bluish-gray" />
          <div className="h-41 border-s-2 border-dark-bluish-gray border-dashed" />
          <div className="w-9 h-9 rounded-full bg-dark-bluish-gray outline-2 outline-offset-6 outline-dashed outline-dark-bluish-gray" />
          <div className="h-41 border-s-2 border-dark-bluish-gray border-dashed" />
          <div className="w-9 h-9 rounded-full bg-primary outline-2 outline-offset-6 outline-dashed outline-dark-bluish-gray" />
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <p className="font-semibold text-[40px] text-charcoal-blue mb-3.5">Experince Designer</p>
            <p className="font-medium text-xl text-blue-gray">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Duis lacus nunc, posuere in justo <br />
              vulputate, bibendum sodales
            </p>
          </div>
          <div>
            <p className="font-semibold text-[40px] text-charcoal-blue mb-3.5">UI/UX Designer</p>
            <p className="font-medium text-xl text-blue-gray">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Duis lacus nunc, posuere in justo <br />
              vulputate, bibendum sodales
            </p>
          </div>
          <div>
            <p className="font-semibold text-[40px] text-charcoal-blue mb-3.5">Lead UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
