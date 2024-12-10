import React from 'react';

function ChatImage() {
  return (
    <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
  <div className="flex grow gap-2.5 ">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/732de49c3072490a59855e7ed49303c425013cc16bf36055f78322ab1ab0f783?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
      alt="Chat interface visual"
      className="object-cover flex-1 w-full  rounded-lg"
    />
  </div>
</div>

  );
}

export default ChatImage;