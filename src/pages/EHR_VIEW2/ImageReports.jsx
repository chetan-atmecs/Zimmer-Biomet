import React from 'react';

function ImageReports() {
  return (
    <div className="flex flex-col py-4 pl-4 bg-blue-50 rounded border border-solid border-black border-opacity-20 min-w-[240px] w-[345px]">
      <div className="flex gap-10 justify-between items-start w-full text-blue-800">
        <div className="text-base font-medium">Image Reports</div>
        <div className="text-sm mr-3">View More</div>
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-4 max-w-full w-[329px]">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="flex flex-col grow shrink min-h-[150px] w-[120px]">
            <img
              loading="lazy"
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/fdc7e0ad049cc903535f49c7a0ad4ffcbd1a18a7dbaa931a51c5e48d0961a63f?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6${index}`}
              alt={`Medical image report ${index}`}
              className="object-contain flex-1 aspect-square w-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageReports;