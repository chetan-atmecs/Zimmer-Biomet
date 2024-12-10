import React from 'react';

function SocialLoginButton({ provider }) {
  const iconSrc = provider === 'google' ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/26a928f5ee0c97e8f7693936657340a251e7e437ba43b6ca95165325d05fb053?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6' : 'https://cdn.builder.io/api/v1/image/assets/TEMP/dd2d10a46e15ca05d0966995fd1a59a590efcbd3455ce1675427df876bb5fac9?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6';
  const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

  return (
    <button className="flex flex-col flex-1 shrink justify-center items-center border border-white border-solid basis-0 rounded-[50px] text-sm font-medium leading-none text-white uppercase">
      <div className="flex gap-2 justify-center items-center py-4 pr-4 pl-3">
        <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
        <span className="self-stretch my-auto">{providerName}</span>
      </div>
    </button>
  );
}

export default SocialLoginButton;