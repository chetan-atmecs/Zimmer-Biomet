import React,{useState} from 'react';

const EHRHeader = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center p-4 mt-5 w-full rounded-t-lg bg-zinc-100 max-md:max-w-full">
      <h2 className="self-stretch my-auto text-xl leading-none text-neutral-700">
        EMR of Mr. Alex Thomas/CA456456
      </h2>
      <div className="flex flex-wrap gap-2 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
      
        <button className="gap-2.5 self-stretch px-3 my-auto text-base font-medium leading-7 text-blue-800 whitespace-nowrap rounded border border-blue-800 border-solid">
          Download
        </button>
        <button className="gap-2.5 self-stretch px-3 my-auto text-base font-medium leading-7 text-blue-800 whitespace-nowrap rounded border border-blue-800 border-solid">
          Export
        </button>
        <button className="gap-2.5 self-stretch px-3 my-auto text-base font-medium leading-7 text-blue-800 whitespace-nowrap rounded border border-blue-800 border-solid">
          Import
        </button>
        <button className="gap-2.5 self-stretch px-3 my-auto text-base font-medium leading-7 text-blue-800 whitespace-nowrap rounded border border-blue-800 border-solid">
          Print
        </button>
        <div
      className={`flex gap-3 items-center self-stretch p-2 my-auto rounded-lg cursor-pointer`}
      onClick={handleToggle}
    >
      <p className="self-stretch my-auto text-base leading-none text-neutral-600">
        PDF
      </p>
      <div className="flex flex-col self-stretch my-auto w-[52px]">
        <div
          className={`flex flex-col justify-center items-start py-0.5 rounded-2xl border border-solid ${
            isToggled ? "bg-blue-800 border-blue-800" : "bg-gray-300 border-gray-300"
          }`}
        >
          <div
            className={`flex shrink-0 w-6 h-6 rounded-2xl transition-transform duration-300 ${
              isToggled ? "bg-white translate-x-full" : "bg-blue-800"
            }`}
          />
        </div>
      </div>
      <p className="self-stretch my-auto text-base leading-none text-neutral-600">
        Form
      </p>
    </div>
      </div>
    </div>
  );
};

export default EHRHeader;
