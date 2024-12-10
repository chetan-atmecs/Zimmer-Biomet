import React, { useState } from 'react';

function EHRDetails({ehrDetailData}) {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <section className="flex flex-wrap height_dummy  gap-10 justify-between items-center px-4 mt-5 w-full rounded-t-lg rounded-l-none bg-zinc-100 max-md:max-w-full">
      <p className="self-stretch my-auto  text-xl leading-none text-neutral-700">
        EMR of {`${ehrDetailData.first || "Patient"} ${ehrDetailData.last || ""}`}
      </p>
      {/* <div
        className="flex gap-3 items-center self-stretch p-2 my-auto rounded-lg cursor-pointer"
        onClick={handleToggle}
      >
        <p className="self-stretch my-auto text-base leading-none text-neutral-600">
          PDF
        </p>
        <div className="flex flex-col self-stretch my-auto w-[52px]">
          <div
            className={`flex items-start py-0.5 rounded-2xl border border-solid transition-colors ${
              isToggled ? "bg-blue-800 border-blue-800" : "bg-gray-300 border-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-2xl transition-transform duration-300 transform ${
                isToggled ? "bg-white translate-x-full" : "bg-blue-800"
              }`}
            />
          </div>
        </div>
        <p className="self-stretch my-auto text-base leading-none text-neutral-600">
          Form
        </p>
      </div> */}
    </section>
  );
}

export default EHRDetails;
