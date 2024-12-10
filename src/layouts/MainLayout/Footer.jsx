import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-2.5 mt-10 w-full text-xs text-white border-t border-white max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-2 items-center">
        <p className="self-stretch my-auto">Powered by</p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bd0527aed43b62c040d9939d795735228b8c9e99fbd84a950dc1ea95ab289b?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" className="object-contain shrink-0 self-stretch my-auto w-21 aspect-[2.86]" alt="Powered by logo" />
      </div>
    </footer>
  );
}

export default Footer;