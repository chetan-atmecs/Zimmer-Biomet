import React from 'react';

const SidebarItem = ({ icon, text, isActive }) => {
  return (
    <div className={`flex gap-2 items-end p-2.5 w-full min-w-[150px] ${isActive ? 'bg-blue-50' : 'bg-white'}`}>
      <div className="flex overflow-hidden flex-col justify-center items-center w-6 min-h-[24px]">
        <img loading="lazy" src={icon} alt="" className="object-contain w-6 aspect-[1.2]" />
      </div>
      <div className="flex-1 shrink text-base basis-0 text-neutral-600">{text}</div>
    </div>
  );
};

export default SidebarItem;