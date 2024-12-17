// // import React, { useRef, useEffect } from 'react';
// // import ChatMessage from './ChatMessage';

// // import VolumeUpIcon from '@mui/icons-material/VolumeUp';

// // const INITIAL_MESSAGE = {
// //   text: "Hello! I'm an AI assistant. How can I help you today?",
// //   isUser: false
// // };

// // function ChatHistory({ messages, score,lastMessage }) {
// //   const messagesEndRef = useRef(null);
// //   const handleSynthesis = async (text) => {
// //     console.log(text);
// //     try {
// //       const response = await fetch('http://66.66.66.23:9011/synthesize', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ 'text': text }), // Send the text as JSON
// //       });
  
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
  
// //       // Get the audio data as a Blob
// //       const audioBlob = await response.blob();
  
// //       // Create a URL for the Blob and play it
// //       const audioUrl = URL.createObjectURL(audioBlob);
// //       const audio = new Audio(audioUrl);
// //       audio.play();
  
// //       console.log('Synthesis complete and audio is playing.');
// //     } catch (error) {
// //       console.error('Error fetching API:', error);
// //     }
// //   };
  

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   useEffect(scrollToBottom, [messages]);

// //   const allMessages = [INITIAL_MESSAGE, ...messages];

// //   return (
// //     <div className="flex flex-col flex-1 p-4 sm:p-6 mt-4 w-full text-base text-white rounded-lg border border-solid bg-white bg-opacity-30 border-white border-opacity-20 max-w-[542px]">
// //       <div className="flex flex-col sm:flex-row gap-4 items-start w-full font-medium border-b border-white pb-2">
// //         <div className="flex flex-1 gap-4 items-center w-full sm:w-auto">
// //           <div className="flex gap-1 items-center">
// //             <div>Emotion Score</div>
// //             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f1d706cf189be04a450306fbd36e47167047b9697d84f99e292003b21d8501?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain w-6 h-6" />
// //           </div>
// //           <div>{score}</div>
// //         </div>
// //         <div onClick={()=>handleSynthesis(lastMessage)}><VolumeUpIcon /></div>
// //       </div>
// //       <div className="flex flex-col mt-4 w-full overflow-y-auto max-h-[400px] custom-scrollbar">
// //       {allMessages.map((message, index) => (
// //           <ChatMessage 
// //             key={index} 
// //             avatar={message.isUser ? "src/assets/images/avatar-1.png" : "https://cdn.builder.io/api/v1/image/assets/TEMP/7179f6b9d2b9c5a996cae2986b9a2fa9665962f1e297cd7998b7d383137242f9?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"} 
// //             message={message.text} 
// //             isUser={message.isUser} 
// //           />
// //         ))}
// //         <div ref={messagesEndRef} />
// //       </div>
// //       <style jsx>{`
// //         .custom-scrollbar {
// //           scrollbar-width: thin;
// //           scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
// //         }
// //         .custom-scrollbar::-webkit-scrollbar {
// //           width: 8px;
// //         }
// //         .custom-scrollbar::-webkit-scrollbar-track {
// //           background: transparent;
// //         }
// //         .custom-scrollbar::-webkit-scrollbar-thumb {
// //           background-color: rgba(155, 155, 155, 0.5);
// //           border-radius: 20px;
// //           border: transparent;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default ChatHistory;
// import React, { useRef, useEffect, useState } from 'react';
// import ChatMessage from './ChatMessage';

// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import MuteIcon from '@mui/icons-material/VolumeOff'; 

// const INITIAL_MESSAGE = {
//   text: "Hello! I'm an AI assistant. How can I help you today?",
//   isUser: false
// };

// function ChatHistory({ messages, score,lastMessage }) {
//   const messagesEndRef = useRef(null);
//   const [audio, setAudio] = useState(null); // To keep track of the playing audio
//   const [isPlaying, setIsPlaying] = useState(false);
//   // const handleSynthesis = async (text) => {
//   //   console.log(text);
//   //   try {
//   //     const response = await fetch('http://66.66.66.23:9011/synthesize', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ 'text': text }), // Send the text as JSON
//   //     });
  
//   //     if (!response.ok) {
//   //       throw new Error('Network response was not ok');
//   //     }
  
//   //     // Get the audio data as a Blob
//   //     const audioBlob = await response.blob();
  
//   //     // Create a URL for the Blob and play it
//   //     const audioUrl = URL.createObjectURL(audioBlob);
//   //     const audio = new Audio(audioUrl);
//   //     audio.play();
      
  
//   //     console.log('Synthesis complete and audio is playing.');
//   //   } catch (error) {
//   //     console.error('Error fetching API:', error);
//   //   }
//   // };
  

//   // const scrollToBottom = () => {
//   //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   // };

//   // useEffect(scrollToBottom, [messages]);

//   const allMessages = [INITIAL_MESSAGE, ...messages];
//   const handleSynthesis = async (text) => {
//     try {
//       const response = await fetch('http://66.66.66.23:9011/synthesize', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text }), // Send the text as JSON
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const audioBlob = await response.blob();
//       const audioUrl = URL.createObjectURL(audioBlob);
//       const newAudio = new Audio(audioUrl);
//       newAudio.play();

//       setAudio(newAudio);
//       setIsPlaying(true);

//       // Handle when audio ends to reset icons
//       newAudio.onended = () => {
//         setIsPlaying(false);
//         setAudio(null);
//       };

//       console.log('Synthesis complete and audio is playing.');
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };

//   const handleMute = () => {
//     if (audio) {
//       audio.pause(); // Pause the audio
//       audio.currentTime = 0; // Reset the audio to the start
//       setIsPlaying(false); // Update the state to reflect that it's no longer playing
//     }
//   };

//   return (
//     <div className="flex flex-col flex-1 p-4 sm:p-6 mt-4 w-full text-base text-white rounded-lg border border-solid bg-white bg-opacity-30 border-white border-opacity-20 max-w-[542px]">
//       <div className="flex flex-col sm:flex-row gap-4 items-start w-full font-medium border-b border-white pb-2">
//         <div className="flex flex-1 gap-4 items-center w-full sm:w-auto">
//           <div className="flex gap-1 items-center">
//             <div>Emotion Score</div>
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f1d706cf189be04a450306fbd36e47167047b9697d84f99e292003b21d8501?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="" className="object-contain w-6 h-6" />
//           </div>
//           <div>{score}</div>
//         </div>
//        <div onClick={() => (isPlaying ? handleMute() : handleSynthesis(lastMessage))}>
//       {isPlaying ? <MuteIcon /> : <VolumeUpIcon />}
//     </div>
//       </div>
//       <div className="flex flex-col mt-4 w-full overflow-y-auto max-h-[400px] custom-scrollbar">
//       {allMessages.map((message, index) => (
//           <ChatMessage 
//             key={index} 
//             avatar={message.isUser ? "src/assets/images/avatar-1.png" : "src/assets/images/MetaHuman_IND_FM.png"} 
//             message={message.text} 
//             isUser={message.isUser} 
//           />
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <style jsx>{`
//         .custom-scrollbar {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: rgba(155, 155, 155, 0.5);
//           border-radius: 20px;
//           border: transparent;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ChatHistory;
// import React, { useRef, useEffect, useState } from 'react';
// import ChatMessage from './ChatMessage';

// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import MuteIcon from '@mui/icons-material/VolumeOff'; 

// const INITIAL_MESSAGE = {
//   text: "Hello! I'm an AI assistant. How can I help you today?",
//   isUser: false
// };

// function ChatHistory({ messages, score,lastMessage, emotionScoreHover}) {
//   const messagesEndRef = useRef(null);
//   const [audio, setAudio] = useState(null); // To keep track of the playing audio
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isDisabled, setIsDisabled] = useState(false); 
//   const [isEmotionPopoverVisible, setEmotionPopoverVisible] = useState(false);

//   const handleEmotionMouseEnter = () => {
//     setEmotionPopoverVisible(true);
//   };

//   const handleEmotionMouseLeave = () => {
//     setEmotionPopoverVisible(false);
//   };


//   // const handleSynthesis = async (text) => {
//   //   console.log(text);
//   //   try {
//   //     const response = await fetch('http://66.66.66.23:9011/synthesize', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ 'text': text }), // Send the text as JSON
//   //     });
  
//   //     if (!response.ok) {
//   //       throw new Error('Network response was not ok');
//   //     }
  
//   //     // Get the audio data as a Blob
//   //     const audioBlob = await response.blob();
  
//   //     // Create a URL for the Blob and play it
//   //     const audioUrl = URL.createObjectURL(audioBlob);
//   //     const audio = new Audio(audioUrl);
//   //     audio.play();
      
  
//   //     console.log('Synthesis complete and audio is playing.');
//   //   } catch (error) {
//   //     console.error('Error fetching API:', error);
//   //   }
//   // };
  

//   // const scrollToBottom = () => {
//   //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   // };

//   // useEffect(scrollToBottom, [messages]);

//   const allMessages = [INITIAL_MESSAGE, ...messages];
//   const handleSynthesis = async (text) => {
//     try {
//       setIsDisabled(true);
//       const response = await fetch('http://66.66.66.23:9002/synthesize', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text }), // Send the text as JSON
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const audioBlob = await response.blob();
//       const audioUrl = URL.createObjectURL(audioBlob);
//       const newAudio = new Audio(audioUrl);
//       newAudio.play();

//       setAudio(newAudio);
//       setIsPlaying(true);
//       setIsDisabled(false);
//       // Handle when audio ends to reset icons
//       newAudio.onended = () => {
//         setIsPlaying(false);
//         setAudio(null);
//       };

//       console.log('Synthesis complete and audio is playing.');
//     } catch (error) {
//       setIsDisabled(false);
//       console.error('Error fetching API:', error);
//     }
//   };

//   const handleMute = () => {
//     if (audio) {
//       audio.pause(); // Pause the audio
//       audio.currentTime = 0; // Reset the audio to the start
//       setIsPlaying(false); // Update the state to reflect that it's no longer playing
//     }
//   };

//   return (
//     <div className="flex flex-col flex-1 p-4 sm:p-6 mt-4 w-full text-base text-white rounded-lg border border-solid bg-white bg-opacity-30 border-white border-opacity-20">
//       <div className="flex flex-col sm:flex-row gap-4 items-start w-full font-medium border-b border-white pb-2">
//         <div className="flex flex-1 gap-4 items-center w-full sm:w-auto">
//           {/* <div className="flex gap-1 items-center">
//             <div>Emotion Score</div>
//             <div 
//               className="relative flex items-center justify-center cursor-pointer"
//               onMouseEnter={handleEmotionMouseEnter}
//               onMouseLeave={handleEmotionMouseLeave}
//             >
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f1d706cf189be04a450306fbd36e47167047b9697d84f99e292003b21d8501?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
//                 alt="Info icon"
//                 className="object-contain w-6 h-6"
//               />
//               {isEmotionPopoverVisible && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-2 w-[200px] bg-gray-800 text-white text-sm rounded shadow-lg z-10 break-words">
//                 {emotionScoreHover}
//               </div>
//               )}
//             </div>         
//             </div> */}

//           {/* <div>{score}</div> */}
//         </div>
//         <div>
//         <button
//           onClick={() => (isPlaying ? handleMute() : handleSynthesis(lastMessage))}
//           disabled={isDisabled} // Disable the button while processing
//           className="p-2 rounded-full"
//         >
//           {isPlaying ? <MuteIcon /> : <VolumeUpIcon />}
//         </button>
//       </div>
//       </div>
//       <div className="flex flex-col mt-4 w-full overflow-y-auto max-h-[400px] custom-scrollbar">
//       {allMessages.map((message, index) => (
//           <ChatMessage 
//             key={index} 
//             avatar={message.isUser ? "src/assets/images/avatar-1.png" : "src/assets/images/Patient img(1)(1)rr.png"} 
//             message={message.text} 
//             isUser={message.isUser} 
//           />
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <style jsx>{`
//         .custom-scrollbar {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: rgba(155, 155, 155, 0.5);
//           border-radius: 20px;
//           border: transparent;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ChatHistory;
import React, { useRef, useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MuteIcon from '@mui/icons-material/VolumeOff'; 

const INITIAL_MESSAGE = {
  text: "Hello! Welcome to Zimmer Biomet's Specialist Support. I'm Mikaila, your AI assistant. How may I assist you today?",
  isUser: false
};

function ChatHistory({ isLoading,messages, lastMessage,streamingResponse}) {
  const messagesEndRef = useRef(null);
  const [audio, setAudio] = useState(null); // To keep track of the playing audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false); 
  // const [isEmotionPopoverVisible, setEmotionPopoverVisible] = useState(false);

  // const handleEmotionMouseEnter = () => {
  //   setEmotionPopoverVisible(true);
  // };

  // const handleEmotionMouseLeave = () => {
  //   setEmotionPopoverVisible(false);
  // };


  // const handleSynthesis = async (text) => {
  //   console.log(text);
  //   try {
  //     const response = await fetch('http://66.66.66.23:9011/synthesize', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ 'text': text }), // Send the text as JSON
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     // Get the audio data as a Blob
  //     const audioBlob = await response.blob();
  
  //     // Create a URL for the Blob and play it
  //     const audioUrl = URL.createObjectURL(audioBlob);
  //     const audio = new Audio(audioUrl);
  //     audio.play();
      
  
  //     console.log('Synthesis complete and audio is playing.');
  //   } catch (error) {
  //     console.error('Error fetching API:', error);
  //   }
  // };
  

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(scrollToBottom, [messages]);

  const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(scrollToBottom, [messages,streamingResponse]);
  

  const allMessages = [INITIAL_MESSAGE, ...messages];
  const handleSynthesis = async (text) => {
    try {
      setIsDisabled(true);
      const response = await fetch('http://66.66.66.23:9002/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }), // Send the text as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const newAudio = new Audio(audioUrl);
      newAudio.play();

      setAudio(newAudio);
      setIsPlaying(true);
      setIsDisabled(false);
      // Handle when audio ends to reset icons
      newAudio.onended = () => {
        setIsPlaying(false);
        setAudio(null);
      };

      console.log('Synthesis complete and audio is playing.');
    } catch (error) {
      setIsDisabled(false);
      console.error('Error fetching API:', error);
    }
  };

  const handleMute = () => {
    if (audio) {
      audio.pause(); // Pause the audio
      audio.currentTime = 0; // Reset the audio to the start
      setIsPlaying(false); // Update the state to reflect that it's no longer playing
    }
  };

  return (
    <div className="flex flex-col flex-1 p-4 sm:p-6 mt-4 w-full text-base text-white rounded-lg border border-solid bg-white bg-opacity-30 border-white border-opacity-20">
      <div className="flex flex-col sm:flex-row gap-4 items-start w-full font-medium border-b border-white pb-2">
        <div className="flex flex-1 gap-4 items-center w-full sm:w-auto">
          {/* <div className="flex gap-1 items-center">
            <div>Emotion Score</div>
            <div 
              className="relative flex items-center justify-center cursor-pointer"
              onMouseEnter={handleEmotionMouseEnter}
              onMouseLeave={handleEmotionMouseLeave}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f1d706cf189be04a450306fbd36e47167047b9697d84f99e292003b21d8501?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
                alt="Info icon"
                className="object-contain w-6 h-6"
              />
              {isEmotionPopoverVisible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-2 w-[200px] bg-gray-800 text-white text-sm rounded shadow-lg z-10 break-words">
                {emotionScoreHover}
              </div>
              )}
            </div>         
            </div> */}

          {/* <div>{score}</div> */}
        </div>
        <div>
        <button
          onClick={() => (isPlaying ? handleMute() : handleSynthesis(lastMessage))}
          disabled={isDisabled} // Disable the button while processing
          className="p-2 rounded-full"
        >
          {isPlaying ? <MuteIcon /> : <VolumeUpIcon />}
        </button>
      </div>
      </div>
      <div className="flex flex-col mt-4 w-full overflow-y-auto max-h-[400px] custom-scrollbar">
      {allMessages.map((message, index) => (
        <ChatMessage 
        key={index} 
        avatar={message.isUser ? "src/assets/images/avatar-1.png" : "src/assets/images/cropped-image (1).png"} 
        message={message.text} 
        isUser={message.isUser} 
        />
      ))}
      {isLoading && <ChatMessage isLoading={isLoading} avatar="src/assets/images/cropped-image (1).png" isUser={false}/>}
      {streamingResponse && <ChatMessage avatar="src/assets/images/cropped-image (1).png" message={streamingResponse} isUser={false}/>}
        <div ref={messagesEndRef} />
      </div>
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.5);
          border-radius: 20px;
          border: transparent;
        }
      `}</style>
    </div>
  );
}

export default ChatHistory;