import React from 'react';

function DateDropdown() {
  return (
    <div className="flex overflow-hidden flex-col self-end mt-20 mr-7 max-w-full text-base whitespace-nowrap rounded shadow-[0px_2px_10px_rgba(0,0,0,0.1)] text-neutral-600 w-[150px] max-md:mt-10 max-md:mr-2.5">
      <button className="flex gap-2 items-end p-2.5 w-full bg-white min-w-[150px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/09cbe5a6c716bd596139b9af6bc898896a0bb79c186801c15f65d367c8ed157c?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <span className="flex-1 shrink basis-0">Date</span>
      </button>
    </div>
  );
}

export default DateDropdown;