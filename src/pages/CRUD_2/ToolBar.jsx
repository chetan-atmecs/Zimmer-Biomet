import React from 'react';
import ToolbarItem from './ToolBarItem';

const Toolbar = () => {
  return (
    <div className="flex gap-2.5 items-start px-2.5 py-2 w-full text-base border-b border-black border-opacity-20 text-neutral-600 max-md:max-w-full">
      <div className="flex gap-2 items-center min-w-[240px]">
        <ToolbarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c76d1a68e2128d2ffce00714d7d0fe4ffdb8495e822d465ac69ef5ea2a931866?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" text="View by" />
        <ToolbarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/04ade95904b6c5c7204acd282eb480d00fbf893f46d7f39e06a46bcd270cd0a9?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" text="Sort by" />
      </div>
    </div>
  );
};

export default Toolbar;