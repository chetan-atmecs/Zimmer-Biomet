import React from 'react';

function SectionHeader({ title }) {
  return (
    <h2 className="text-xl font-medium text-blue-800 max-md:max-w-full">
      {title}
    </h2>
  );
}

export default SectionHeader;