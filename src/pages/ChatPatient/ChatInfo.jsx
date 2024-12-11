// import React from 'react';
// import ScoreCard from './ScoreCard';
// import ChatHistory from './ChatHistory';
// import SuggestedActions from './SuggestedActions';
// import ChatInput from './ChatInput';

// function ChatInfo({ messages, addMessage }) {
//   return (
//     <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col w-full min-h-[846px] max-md:mt-7 max-md:max-w-full">
//         <ScoreCard title="Reward Score" score="1.25" message="Hi" />
//         <ChatHistory messages={messages} />
//         <SuggestedActions addMessage={addMessage} />
//         <ChatInput addMessage={addMessage} />
//       </div>
//     </div>
//   );
// }

// export default ChatInfo;


// import React, { useState } from 'react';
// import ScoreCard from './ScoreCard';
// import ChatHistory from './ChatHistory';
// import SuggestedActions from './SuggestedActions';
// import ChatInput from './ChatInput';

// function ChatInfo({ messages, addMessage,setMessages }) {
//   // State for score and message
//   const [rewardScore, setRewardScore] = useState(0);
//   const [empathyScore, setEmpathyScore] = useState(0);

//   const [emotionScore, setEmotionScore] = useState(0);
//   const [message, setMessage] = useState("");
//   const [lastMessage,setLastMessage] = useState(messages?.length===0? "Hello! I'm an AI assistant. How can I help you today?":'');
  

//   return (
//     <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col w-full min-h-[846px] max-md:mt-7 max-md:max-w-full">
//         <ScoreCard title="Reward Score" rewardScore={rewardScore} empathyScore={empathyScore}  message={message} />
//         <ChatHistory score={emotionScore} messages={messages} lastMessage={lastMessage} />
//         <SuggestedActions addMessage={addMessage} setEmotionScore={setEmotionScore} setRewardScore={setRewardScore} setEmpathyScore={setEmpathyScore} setMessage={setMessage} />
       
//         <ChatInput lastMessage = {lastMessage} setLastMessage={setLastMessage} messages={messages} addMessage={addMessage} setEmotionScore={setEmotionScore} setRewardScore={setRewardScore} setEmpathyScore={setEmpathyScore} setMessage={setMessage} setMessages={setMessages} />
//       </div>
//     </div>
//   );
// }

// export default ChatInfo;

import React, { useState } from 'react';
import ScoreCard from './ScoreCard';
import ChatHistory from './ChatHistory';
import SuggestedActions from './SuggestedActions';
import ChatInput from './ChatInput';

function ChatInfo(){
  // State for score and message
  // const [rewardScore, setRewardScore] = useState(0);
  // const [empathyScore, setEmpathyScore] = useState(0);

  // const [emotionScore, setEmotionScore] = useState(0);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessage,setLastMessage] = useState(messages?.length===0? "Hello! I'm an AI assistant. How can I help you today?":'');
  const [streamingResponse, setStreamingResponse] = useState(null);

  const addMessage = (message, isUser = true) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser }]);
  };
  // const [empathyScoreHover, setEmpathyScoreHover] = useState("")
  // const [rewardScoreHover, setRewardScoreHover] = useState("")

  // const [emotionScoreHover, setEmotionScoreHover] = useState("")

  return (
    <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full min-h-[846px] max-md:mt-7 max-md:max-w-full">
        {/* <ScoreCard title="Reward Score" rewardScore={rewardScore} empathyScore={empathyScore}  message={message} empathyScoreHover={empathyScoreHover} rewardScoreHover={rewardScoreHover}/> */}
        {/* <ChatHistory score={emotionScore} messages={messages} lastMessage={lastMessage} emotionScoreHover={emotionScoreHover} /> */}
        <ChatHistory streamingResponse={streamingResponse} messages={messages} lastMessage={lastMessage} />
        {/* <SuggestedActions addMessage={addMessage} setEmotionScore={setEmotionScore} setRewardScore={setRewardScore} setEmpathyScore={setEmpathyScore} setMessage={setMessage}  */}
        {/* setEmotionScoreHover={setEmotionScoreHover} setEmpathyScoreHover={setEmpathyScoreHover} setRewardScoreHover={setRewardScoreHover} setMessages={setMessages} setLastMessage={setLastMessage} */}
        {/* /> */}
        <SuggestedActions setStreamingResponse={setStreamingResponse}  addMessage={addMessage} setMessage={setMessage} setMessages={setMessages} setLastMessage={setLastMessage}  />

        {/* <ChatInput lastMessage = {lastMessage} setLastMessage={setLastMessage} messages={messages} addMessage={addMessage} setEmotionScore={setEmotionScore} setRewardScore={setRewardScore} setEmpathyScore={setEmpathyScore} setMessage={setMessage} setMessages={setMessages}  */}
          {/* setEmotionScoreHover={setEmotionScoreHover} setEmpathyScoreHover={setEmpathyScoreHover} setRewardScoreHover={setRewardScoreHover} */}
        {/* /> */}
        <ChatInput setStreamingResponse={setStreamingResponse} lastMessage = {lastMessage} setLastMessage={setLastMessage} messages={messages} addMessage={addMessage} setMessage={setMessage} setMessages={setMessages} />
      </div>
    </div>
  );
}

export default ChatInfo;