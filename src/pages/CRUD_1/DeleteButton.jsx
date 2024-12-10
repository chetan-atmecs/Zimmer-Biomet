import React from 'react';

function DeleteButton() {
  return (
    <div className="flex overflow-hidden z-10 flex-col self-end mt-0 mr-8 max-w-full rounded shadow-[0px_2px_10px_rgba(0,0,0,0.1)] w-[150px] max-md:mr-2.5">
      <button className="flex gap-2 items-end p-2.5 w-full bg-white min-w-[150px]">
        <div className="flex gap-2.5 justify-center items-center px-0.5 py-px w-6 min-h-[24px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bec93d88ee08421ed5d0ace219d553058d187a304897bba3d9eb762a0e50825c?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain self-stretch my-auto w-5 aspect-[0.91]" />
        </div>
        <span className="flex-1 shrink text-base basis-0 text-neutral-600">
          Delete
        </span>
      </button>
    </div>
  );
}

export default DeleteButton;