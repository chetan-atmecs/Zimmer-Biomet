import React from 'react';

const ToolbarItem = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center self-stretch p-2 my-auto rounded">
      <div className="flex gap-1 items-center self-stretch my-auto">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <div className="self-stretch my-auto">{text}</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccb3a3bf2706d9da23a2bb6a0b7838607ea8c365d511e24d8074b6023131ff8?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square" />
    </div>
  );
};

export default ToolbarItem;