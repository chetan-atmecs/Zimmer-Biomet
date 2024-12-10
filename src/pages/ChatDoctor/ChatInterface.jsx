import React, { useState } from 'react';
// import Header from './Header';
import MainContent from './MainContent';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
// import Footer from './Footer';

function ChatInterface() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, isUser = true) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser }]);
  };

  return (
    <>
      <NavigationArrows title={'Facing Specialist'}/>
      <div className="flex overflow-hidden flex-col px-16 bg-[linear-gradient(180deg,#0d0d0d_0%,#08615F_100%)] max-md:px-5 min-h-screen">
        {/* <Header /> */}

        <MainContent
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
