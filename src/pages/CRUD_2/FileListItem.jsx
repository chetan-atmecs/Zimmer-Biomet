import React from 'react';

const FileListItem = ({ icon, name, owner, location }) => {
  return (
    <div className="flex flex-wrap items-center w-full border-b border-black border-opacity-10 max-md:max-w-full">
      <div className="flex flex-1 shrink gap-2.5 items-center self-stretch p-2.5 my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <div className="self-stretch my-auto">{name}</div>
      </div>
      <div className="flex-1 shrink gap-2.5 self-stretch p-2.5 my-auto min-w-[240px] max-md:max-w-full">
        {owner}
      </div>
      <div className="flex-1 shrink gap-2.5 self-stretch p-2.5 my-auto min-w-[240px] max-md:max-w-full">
        {location}
      </div>
    </div>
  );
};

export default FileListItem;