import React from 'react';
import SidebarItem from './SideBarItem';

const Sidebar = () => {
  return (
    <aside className="flex overflow-hidden flex-col self-start mt-14 rounded shadow-[0px_2px_10px_rgba(0,0,0,0.1)] max-md:mt-10">
      <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7f6caf2956ccdb2bcb7f105738f350014e113dcac2f48c9262bf974be2d8e8a9?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" text="Folder" isActive={false} />
      <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f021b7508753ca3892b21524e8c729e2f3366ed97f69a002da11a82b8b63a649?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" text="File" isActive={true} />
    </aside>
  );
};

export default Sidebar;