import React from 'react';

function Button({ text }) {
  return (
    <button className="flex flex-col mt-6 w-full text-sm font-medium leading-none text-white uppercase whitespace-nowrap">
      <div className="flex flex-col justify-center items-center w-full rounded shadow-sm bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)]">
        <div className="gap-2 self-stretch py-4 pr-4 pl-3">{text}</div>
      </div>
    </button>
  );
}

export default Button;