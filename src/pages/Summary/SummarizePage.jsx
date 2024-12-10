import React from 'react';
import ChatInfo from './ChatInfo';
import KnowledgeGraph from './KnowledgeGraph'
function SummarizePage({ messages, addMessage,setMessages }) {
  return (
    <main className="mt-7 w-full max-md:max-w-full flex-grow">
      <div className="flex gap-5 max-md:flex-col">
        {/* <ChatImage /> */}
        <KnowledgeGraph/>
        <ChatInfo messages={messages} addMessage={addMessage} setMessages={setMessages} />
      </div>
    </main>
  );
}

export default SummarizePage;