import React from 'react';
import ChatImage from './ChatImage';
import ChatInfo from './ChatInfo';
import ChatVideo from './ChatVideo'
function MainContent({ messages, addMessage,setMessages }) {
  return (
    <main className="mt-7 w-full max-md:max-w-full flex-grow">
      <div className="flex gap-5 max-md:flex-col">
        {/* <ChatImage /> */}
        <ChatVideo/>
        <ChatInfo messages={messages} addMessage={addMessage} setMessages={setMessages} />
      </div>
    </main>
  );
}

export default MainContent;