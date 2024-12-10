import React from 'react';

function InputField({ label, type = 'text', placeholder }) {
  return (
    <div className="flex flex-col mt-4 w-full">
      <label htmlFor={label.toLowerCase()} className="gap-1 self-start pb-1 text-sm text-white">
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase()}
        placeholder={placeholder}
        className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-400"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;