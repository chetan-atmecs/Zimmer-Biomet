import React from 'react';

function Header() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center p-2.5 border-b border-white max-md:max-w-full">
      <a href="https://atmecs.com/">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67b6b6c10705a075d1e87dee8f39ec4c1e5650372cc1f8644058653a4c13b03e?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" className="object-contain shrink-0 self-stretch my-auto aspect-[3] w-[210px]" alt="Company logo" />
      </a>
      {/* <a href="https://www.varian.com/"> */}
      <a href="https://www.nvidia.com/en-in/">
      {/* <img loading="lazy" src="src\layouts\MainLayout\Varian2.png" className="object-contain shrink-0 self-stretch my-auto aspect-[2.86] w-[200px] h-[49px]" alt="Secondary logo" /> */}
      <img loading="lazy" src="src\assets\images\zimmer_biomet_logo_1.png" className="object-contain shrink-0 self-stretch my-auto aspect-[3] w-[210px]" alt="Secondary logo" />

      </a>
    </header>
  );
}

export default Header;