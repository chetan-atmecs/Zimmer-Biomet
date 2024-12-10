import React from 'react';

const FileListHeader = () => {
  return (
    <div className="flex flex-wrap items-center w-full text-base font-medium leading-none bg-zinc-100 max-md:max-w-full">
      <div className="flex-1 shrink self-stretch p-2.5 my-auto min-w-[240px] max-md:max-w-full">
        File Name
      </div>
      <div className="flex-1 shrink self-stretch p-2.5 my-auto whitespace-nowrap min-w-[240px] max-md:max-w-full">
        Owner
      </div>
      <div className="flex-1 shrink self-stretch p-2.5 my-auto whitespace-nowrap min-w-[240px] max-md:max-w-full">
        Location
      </div>
    </div>
  );
};

export default FileListHeader;