import React from 'react';
import ReactMarkdown from 'react-markdown';
// import { dotWave } from 'ldrs'

import { dotStream } from 'ldrs'

dotStream.register()


function ChatMessage({ isLoading, avatar, message, isUser }) {
  return (
    <div className={`flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full ${isUser ? 'justify-end' : 'justify-start'} `}>
      {!isUser && <img loading="lazy" src={avatar} alt="User avatar" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[40px]" />}
      <div className={`flex-1 shrink self-stretch py-4 px-4 my-auto rounded-lg  ${isUser ? ' bg-slate-100 bg-opacity-100 text-black ' : 'bg-sky-500 bg-opacity-100 '} max-w-[485px] min-w-[240px] max-md:max-w-full `}>
      {isLoading &&


// Default values shown
<l-dot-stream
  size="60"
  speed="2.5" 
  color="white" 
></l-dot-stream>}
      <ReactMarkdown>
       {message}
       </ReactMarkdown>
      </div>
      {isUser && <img loading="lazy" src={avatar} alt="User avatar" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[40px]" />}
    </div>
  );
}

export default ChatMessage;