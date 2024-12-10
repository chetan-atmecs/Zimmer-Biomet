import React from 'react';

function Divider() {
  return (
    <div className="flex gap-1 items-center mt-2 w-full text-white">
      <hr className="flex-1 border-t border-white" />
      <span className="gap-2.5 self-stretch p-2.5 my-auto">or</span>
      <hr className="flex-1 border-t border-white" />
    </div>
  );
}

export default Divider;