import React from 'react';

function SearchBar() {
  return (
    <div className="flex flex-wrap flex-1 shrink gap-2.5 items-center px-2.5 py-3 my-auto text-base bg-white border border-white border-solid basis-3 max-w-[600px] min-h-[48px] min-w-[240px] rounded-[40px] text-stone-300 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7b97076d2bf6569d4da8170558eae75589c980c5ad41bbb73c8205330c4aaa7?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <label htmlFor="searchInput" className="sr-only">Search files and folder</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search files and folder"
        className="flex-1 shrink gap-2.5 self-stretch my-auto min-w-[240px] max-md:max-w-full bg-transparent border-none outline-none"
        aria-label="Search files and folder"
      />
    </div>
  );
}

export default SearchBar;