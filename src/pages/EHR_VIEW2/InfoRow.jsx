import React from 'react';

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-wrap gap-4 items-center px-4 py-2 w-full bg-stone-50 max-md:max-w-full">
      <div className="self-stretch my-auto w-[250px]">{label}</div>
      <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
        {value}
      </div>
    </div>
  );
}

export default InfoRow;