import React from "react";

const iconCardData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/644f3127891047f0b9914ce7c6c7bb2e1ca2bc3d93af0d53c3af186b9d4c102b?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6",
    title: "Innovative Cancer Treatment Solutions"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2408b2f40328e4dabdeba627c02b58dbe4c228590057db4ddc966a6bf553258d?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6",
    title: "Patient-Centered Care"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0659a65984b0e6531db4184308c5962fe9e03cdb9175104d27ddf896f10c5a1?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6",
    title: "Global Impact and Reach"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b15dabb5372acba87f53b9c93a606ae8fc730d10547198c5f7efe78daa0432e7?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6",
    title: "Research and Development"
  }
];

// function IconCard({ icon, title }) {
//   return (
//     <div className="flex flex-col justify-center items-center self-stretch p-6 rounded-lg bg-white bg-opacity-10 min-w-[240px] w-[318px] max-md:px-5">
//       <div className="flex flex-col justify-center items-center px-3 w-16 h-16 bg-sky-200 min-h-[64px] rounded-[50px]">
//         <img loading="lazy" src={icon} alt="" className="object-contain w-full aspect-[1.21]" />
//       </div>
//       <h3 className="mt-6 text-base font-bold text-white">{title}</h3>
//     </div>
//   );
// }

function IconCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center self-stretch p-6 rounded-lg bg-white bg-opacity-10 w-[440px] max-md:px-5">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-16 h-16 bg-sky-200 rounded-full">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain max-w-[32px] max-h-[32px]" // Maintain the original size of the heart icon
        />
      </div>
      {/* Text Container */}
      <div className="mt-6">
        <h3 className="text-base font-bold text-white text-center">{title}</h3>
      </div>
    </div>
  );
}



function IconCards() {
  return (
    <section className="flex gap-4 items-center mt-6 max-md:max-w-full">
      {iconCardData.map((card, index) => (
        <IconCard key={index} {...card} />
      ))}
    </section>
  );
}

export default IconCards;