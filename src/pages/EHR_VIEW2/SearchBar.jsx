import React from 'react';

const SearchBar = () => {
  const color = "bg-[#08615F]";
  return (
    <div className={`flex flex-col justify-center items-center p-4 mt-4 ${color}  rounded-lg border border-solid border-white border-opacity-20 max-md:max-w-full`}>
      <div className="flex flex-col max-w-full w-[526px]">
        
        <div className="flex flex-wrap gap-2.5 items-center px-2.5 py-3 mt-2 w-full text-base bg-white border border-white border-solid min-h-[48px] rounded-[40px] text-neutral-400 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e821e984d1c2d815266090b49b34187095013e0b725631f5299bcfcf6a1708c0?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="Search icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <input type="text" placeholder="Search with MRN/SSN" className="flex-1 shrink gap-2.5 self-stretch my-auto min-w-[240px] max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;