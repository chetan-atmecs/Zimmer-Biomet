import React from "react";
import { Link } from "react-router-dom";

function MediaSection() {
  const btnstyle = {
    borderRadius: '8px',
    background: 'linear-gradient(90deg, #00D4FF 0%, #0083B0 100%)',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.20)',
    // padding: '20px',
    color: '#fff',
    textAlign: 'center',
  };


  return (
    <section className="mt-6 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-28 py-32 w-full text-4xl text-white rounded-lg min-h-[346px] max-md:px-5 max-md:py-24 max-md:max-w-full">
              <img loading="lazy"  src="src\assets\images\overview-mikaila.png" alt="Background" className="object-cover absolute inset-0 size-full rounded-lg" />
              {/* <div className="flex relative flex-col justify-center items-center w-full"> */}
                {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7630ce6a4f4b8f5ed685e873e822429729619b27c3eee329ee6ea60e6363e285?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain aspect-square w-[43px]" /> */}
                {/* <h2 className="mt-3">Learn how Lucia works?</h2> */}
              {/* </div> */}
            </div>
            <button
              style={btnstyle}
              className="flex flex-col justify-center items-center mt-3.5 w-full text-xl font-medium leading-none text-white uppercase rounded-lg min-h-[100px] max-md:max-w-full"
            >
              <Link
                to="/chat-doc"
                className="gap-2 self-stretch py-4 pr-4 pl-3 w-full text-center text-white"
              >
                Start Conversation with Mikaila
              </Link>
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
  <div className="flex overflow-hidden flex-col justify-center w-full text-2xl font-medium tracking-tight text-white rounded-lg min-h-[459px] max-md:mt-5 max-md:max-w-full">
    <img loading="lazy" src="src\assets\images\overview2.jpg" alt="Lucia AI Interface" className="flex-1 w-full rounded aspect-[1.89] max-md:max-w-full" />
    <div className="flex flex-wrap gap-4 p-4 w-full bg-sky-700 rounded-none min-h-[114px] max-md:max-w-full">
      <p className="flex-1 shrink basis-0 max-md:max-w-full tracking-normal">
        How Mikaila can make high-impact on advanced medicine and healthcare system?
      </p>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a486d4221d6cefa1f3d41cb18d9325ae0bb066a26a09913a4dbae8e7a334162?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 my-auto w-12 aspect-square" />
    </div>
  </div>
</div> */}

<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
  <div className="flex overflow-hidden flex-col justify-center w-full text-2xl font-medium tracking-tight text-white rounded-lg min-h-[459px] max-md:mt-5 max-md:max-w-full ">
    <div className="flex h-[380px]">
        <img loading="lazy" src="src\assets\images\overview2.jpg" alt="Lucia AI Interface" className="flex-1 w-full rounded aspect-[1.89] max-md:max-w-full" />
    </div>
    
    <div className="flex flex-wrap gap-4 p-4 w-full rounded-none min-h-[114px] max-md:max-w-full">
      {/* <br /> */}
      <p className="flex-1 shrink basis-0 max-md:max-w-full tracking-normal">
        How Mikaila can make high-impact on advanced medicine and healthcare system?
      </p>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a486d4221d6cefa1f3d41cb18d9325ae0bb066a26a09913a4dbae8e7a334162?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 my-auto w-12 aspect-square" />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default MediaSection;