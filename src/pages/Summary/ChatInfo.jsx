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


import React, { useState } from 'react';
import ScoreCard from './ScoreCard';
import ChatHistory from './ChatHistory';
import SuggestedActions from './SuggestedActions';
import ChatInput from './ChatInput';

function ChatInfo({ messages, addMessage,setMessages }) {
  // State for score and message
  const [rewardScore, setRewardScore] = useState(0);
  const [empathyScore, setEmpathyScore] = useState(0);

  const [emotionScore, setEmotionScore] = useState(0);
  const [message, setMessage] = useState("");
  const [lastMessage,setLastMessage] = useState(messages?.length===0? "Hello! I'm Mekalai. How can I help you today?":'');
  
  const [empathyScoreHover, setEmpathyScoreHover] = useState("")
  const [rewardScoreHover, setRewardScoreHover] = useState("")

  const [emotionScoreHover, setEmotionScoreHover] = useState("")
  const [isLoading,setIsLoading] = useState(false);


  return (
    <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full min-h-[846px] max-md:mt-7 max-md:max-w-full">
        {/* <ScoreCard title="Reward Score" rewardScore={rewardScore} empathyScore={empathyScore}  message={message} empathyScoreHover={empathyScoreHover} rewardScoreHover={rewardScoreHover}/> */}
        <ChatHistory score={emotionScore} isLoading={isLoading} messages={messages} lastMessage={lastMessage} emotionScoreHover={emotionScoreHover} />
        <SuggestedActions addMessage={addMessage} setEmotionScore={setEmotionScore} setRewardScore={setRewardScore} setEmpathyScore={setEmpathyScore} setMessage={setMessage} 
        setEmotionScoreHover={setEmotionScoreHover} setEmpathyScoreHover={setEmpathyScoreHover} setRewardScoreHover={setRewardScoreHover} setMessages={setMessages} setLastMessage={setLastMessage}
        setIsLoading={setIsLoading}
        />
        
        <ChatInput lastMessage = {lastMessage} setLastMessage={setLastMessage} messages={messages} addMessage={addMessage} setEmotionScore={setEmotionScore} setRewardScore={setRewardScore} setEmpathyScore={setEmpathyScore} setMessage={setMessage} setMessages={setMessages} 
          setEmotionScoreHover={setEmotionScoreHover} setEmpathyScoreHover={setEmpathyScoreHover} setRewardScoreHover={setRewardScoreHover}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}

export default ChatInfo;
