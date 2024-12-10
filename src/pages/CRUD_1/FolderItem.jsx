import React from 'react';
import { useNavigate } from 'react-router-dom';

function FolderItem({ name }) {
  const navigate = useNavigate();
  const handleClick=()=>{
navigate('/crud-2');
  }
  return (
    <div className="flex flex-1 shrink gap-2.5 justify-center items-center self-stretch p-2.5 my-auto bg-blue-50 rounded basis-0 max-w-[318px] min-w-[251px]">
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto w-6 min-h-[24px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9ca8cab19765fe201bafba0d506ed57ba69548b84a19c96b64a2268995c01e?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain w-6 aspect-[1.2]" onClick={handleClick} />
      </div>
      <div className="flex-1 shrink self-stretch my-auto text-sm leading-none basis-0 text-neutral-600">
        {name}
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/42b722c5fdfb30128c3706b85f7a25d27f302bd8597878bb30a92adbafd680ab?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    </div>
  );
}

export default FolderItem;