import React, { useState } from 'react';
// import Header from './Header';
import SummarizePage from './SummarizePage';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
// import Footer from './Footer';

function ChatInterface() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, isUser = true) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser }]);
  };

  return (
    <>
      <NavigationArrows title={'EMR Summarizer & Knowledge Graph'}/>
      <div className="flex overflow-hidden flex-col px-16 bg-[linear-gradient(180deg,#0d0d0d_0%,#08615F_100%)] max-md:px-5 min-h-screen">
        {/* <Header /> */}

        <SummarizePage
          messages={messages}
          addMessage={addMessage}
          setMessages={setMessages}
        />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default ChatInterface;
