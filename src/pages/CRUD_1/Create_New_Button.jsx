import React from 'react';

function CreateNewButton() {
  return (
    <button className="flex gap-2 items-center px-4 py-2 h-full bg-blue-600 rounded min-w-[150px]">
      <div className="flex gap-2.5 justify-center items-center self-stretch p-0.5 my-auto w-6 min-h-[24px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0e886fcdf144d3cf3ee058995aa60f4e4d3b237dc1ea2c685b1fdb7ae0e199?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
      </div>
      <span className="self-stretch my-auto text-base font-medium text-white">
        Create New
      </span>
    </button>
  );
}

export default CreateNewButton;