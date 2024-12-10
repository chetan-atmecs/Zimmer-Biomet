import React from 'react';

function ViewOptions() {
  return (
    <div className="flex gap-2.5 items-start px-2.5 py-2 w-full text-base border-b border-black border-opacity-20 text-neutral-600 max-md:max-w-full">
      <div className="flex gap-2 items-center min-w-[240px]">
        <button className="flex gap-2 items-center self-stretch p-2 my-auto rounded">
          <div className="flex gap-1 items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c76d1a68e2128d2ffce00714d7d0fe4ffdb8495e822d465ac69ef5ea2a931866?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span>View by</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccb3a3bf2706d9da23a2bb6a0b7838607ea8c365d511e24d8074b6023131ff8?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square" />
        </button>
        <button className="flex gap-2 items-center self-stretch p-2 my-auto rounded bg-zinc-100">
          <div className="flex gap-1 items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ade95904b6c5c7204acd282eb480d00fbf893f46d7f39e06a46bcd270cd0a9?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span>Sort by</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccb3a3bf2706d9da23a2bb6a0b7838607ea8c365d511e24d8074b6023131ff8?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square" />
        </button>
      </div>
    </div>
  );
}

export default ViewOptions;