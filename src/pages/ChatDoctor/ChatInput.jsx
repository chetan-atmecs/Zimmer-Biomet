// // import React, { useState, useEffect } from 'react';

// // function ChatInput({
// //   lastMessage,
// //   setLastMessage,
// //   messages,
// //   addMessage,
// //   setRewardScore,
// //   setEmpathyScore,
// //   setEmotionScore,
// //   setMessage,
// //   setMessages
// // }) {
// //   const [inputValue, setInputValue] = useState('');
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [mediaRecorder, setMediaRecorder] = useState(null);
// //   const [selectedLanguage, setSelectedLanguage] = useState('English');

// //   useEffect(() => {
// //     if (isRecording) {
// //       startRecording();
// //     } else if (mediaRecorder) {
// //       stopRecording();
// //     }
// //     return () => {
// //       if (mediaRecorder) {
// //         mediaRecorder.stream.getTracks().forEach((track) => track.stop());
// //       }
// //     };
// //   }, [isRecording]);

// //   const startRecording = async () => {
// //     try {
// //       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// //       const recorder = new MediaRecorder(stream);
// //       let localAudioChunks = [];

// //       recorder.ondataavailable = (event) => {
// //         if (event.data.size > 0) {
// //           localAudioChunks.push(event.data);
// //         }
// //       };

// //       recorder.onerror = (error) => {
// //         console.error('Recorder error:', error);
// //       };

// //       recorder.onstart = () => {
// //         console.log('Recording started');
// //       };

// //       recorder.onstop = async () => {
// //         if (localAudioChunks.length === 0) {
// //           console.warn('No audio chunks available');
// //           return;
// //         }

// //         const audioBlob = new Blob(localAudioChunks, { type: 'audio/wav' });
// //         await handleAudioData(audioBlob);
// //       };

// //       recorder.start();
// //       setMediaRecorder(recorder);
// //     } catch (error) {
// //       console.error('Error accessing microphone:', error);
// //     }
// //   };

// //   const stopRecording = () => {
// //     if (mediaRecorder) {
// //       mediaRecorder.stop();
// //       setMediaRecorder(null);
// //     }
// //   };

// //   const toggleRecording = () => {
// //     setIsRecording((prevState) => !prevState);
// //   };

// //   const handleAudioData = async (audioBlob) => {
// //     const formData = new FormData();
// //     formData.append('audio', audioBlob, 'recording.wav');

// //     try {
// //       const response = await fetch('http://66.66.66.23:9001/transcribe', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }

// //       const data = await response.json();
// //       setInputValue(data.transcript);
// //     } catch (error) {
// //       console.error('Error fetching API:', error);
// //     }
// //   };

// //   const handleLanguageClick = async (currentLanguage) => {
// //     if (!lastMessage) return;
// //     setSelectedLanguage(currentLanguage);
// //     console.log('messages',messages)
// //     console.log('lastMessage',lastMessage)

// //     const payload = {
// //       text: lastMessage,
// //       target_language: currentLanguage,
// //     };

// //     try {
// //       const response = await fetch('http://66.66.66.23:9007/translate', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(payload),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }

// //       const data = await response.json();
// //       setLastMessage(data.translated_text);

// //       setMessages((prevMessages) => {
// //         if (prevMessages.length === 0) return prevMessages; // No messages to replace

// //         return [
// //           ...prevMessages.slice(0, -1), // Keep all but the last message
// //           { text: data.translated_text, isUser: false } // Replace the last message
// //         ];
// //       });
// //     } catch (error) {
// //       console.error('Error fetching API:', error);
// //     }
// //   };

// //   const fetchResponse = async (message) => {
    
// //     try {
// //       const response = await fetch('http://66.66.66.23:9070/get-response', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           text: message,
// //           session_id: '',
// //           query_type: 'medical',
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }

// //       const data = await response.json();
// //       console.log(data.normal.output)
      

// //       return data;
// //     } catch (error) {
// //       console.error('Error fetching API:', error);
// //       return { error: 'Failed to fetch response' };
// //     }
// //   };

// //   const handleRefresh = async () => {
// //     try {
// //       const response = await fetch('http://66.66.66.23:9070/create_new_session', {
// //         method: 'GET',
// //       });

// //       if (response.ok) {
// //         setMessages([]);
// //         setMessage('');
// //         setEmotionScore(0);
// //         setRewardScore(0);
// //         setEmpathyScore(0);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching API:', error);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (inputValue.trim()) {
// //       addMessage(inputValue);
// //       setInputValue('');

// //       const apiResponse = await fetchResponse(inputValue);

// //       if (apiResponse && !apiResponse.error) {
// //         setRewardScore(apiResponse.normal.reward.score || 'N/A');
// //         setEmotionScore(apiResponse.emotionalscore.Logit_Scale);
// //         setEmpathyScore(apiResponse.normal.empathy.score.Empathy);
        
        
// //         //handleLanguageClick(selectedLanguage);
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: apiResponse.translated_text, isUser: false },
// //         ]);
        
// //         addMessage(apiResponse.normal.output, false);
// //         setMessage(apiResponse.normal.output);
// //         setLastMessage(apiResponse.normal.output);
// //         handleLanguageClick(selectedLanguage);
// //       } else {
// //         setMessage(apiResponse.error || 'Failed to fetch response');
// //       }
      
// //     }
// //   };
 
  
// //   return (
// //     <div className="w-full max-w-[542px] mt-4">
// //       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center p-4 w-full rounded-lg bg-white bg-opacity-30 border border-white border-opacity-20">
// //         <div className="flex gap-2 justify-center items-center w-full sm:w-auto mb-4 sm:mb-0">
// //           <button type="button" className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors" onClick={handleRefresh}>
// //             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/87c5dced4d28375eafffa6832d9e797b6d3a39b12acb7da67198937fce17f62c?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="Attachment" className="w-6 h-6" />
// //           </button>
          
// //           <div className="relative group">
// //   <button
// //     type="button"
// //     className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline focus:ring-2 focus:ring-zinc-00 transition-colors"
// //   >
// //     <img
// //       loading="lazy"
// //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b0a314cd1527cfcff4a2a531ededecc6cc567bfff2e3135a9514694b381cbb4?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
// //       alt="Language"
// //       className="w-6 h-6"
// //     />
// //   </button>

// //   <div className="absolute z-10 mb-2 bottom-full w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 delay-100">
// //     <ul className="py-2 text-sm text-gray-700">
// //       <li
// //         className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
// //         onClick={() => handleLanguageClick('English')}
// //       >
// //         English
// //       </li>
// //       <li
// //         className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
// //         onClick={() => handleLanguageClick('Spanish')}
// //       >
// //         Spanish
// //       </li>
// //       <li
// //         className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
// //         onClick={() => handleLanguageClick('Telugu')}
// //       >
// //         Telugu
// //       </li>
// //       <li
// //         className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
// //         onClick={() => handleLanguageClick('Gujarati')}
// //       >
// //         Gujarati
// //       </li>
// //     </ul>
// //   </div>
// // </div>



// //         </div>
        
// //         <div className="flex flex-1 items-center p-2 bg-white rounded-full w-full ml-2">
// //           <input
// //             type="text"
// //             id="chatInput"
// //             value={inputValue}
// //             onChange={(e) => setInputValue(e.target.value)}
// //             placeholder="Type here..."
// //             className="flex-grow text-base text-black placeholder-black placeholder-opacity-20 bg-transparent border-none outline-none  px-3 py-2"
// //           />
// //           <button
// //             type="button"
// //             className={`flex justify-center items-center w-10 h-10 ${
// //               isRecording ? 'bg-red-500' : 'bg-zinc-100'
// //             } rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors ml-2`}
// //             onClick={toggleRecording}
// //           >
// //             <img
// //               loading="lazy"
// //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a476120c6a0360ee1015c40b89ddb98e6cbd756b3e09ffa59ebc39ea4034ae5b?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
// //               alt="Mic"
// //               className="w-6 h-6"
// //             />
// //           </button>
// //         </div>
        
// //         <button 
// //           type="submit" 
// //           className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors ml-2 mt-4 sm:mt-0"
// //         >
// //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46dfa525ef487268761330192a1049b5b38d2144923a5c74ebe492978159700d?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="Send" className="w-6 h-6" />
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ChatInput;

// import React, { useState, useEffect } from 'react';

// function ChatInput({
//   lastMessage,
//   setLastMessage,
//   messages,
//   addMessage,
//   setRewardScore,
//   setEmpathyScore,
//   setEmotionScore,
//   setMessage,
//   setMessages
// }) {
//   const [inputValue, setInputValue] = useState('');
//   const [isRecording, setIsRecording] = useState(false);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [selectedLanguage, setSelectedLanguage] = useState('English');

//   useEffect(() => {
//     if (isRecording) {
//       startRecording();
//     } else if (mediaRecorder) {
//       stopRecording();
//     }
//     return () => {
//       if (mediaRecorder) {
//         mediaRecorder.stream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [isRecording]);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const recorder = new MediaRecorder(stream);
//       let localAudioChunks = [];

//       recorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           localAudioChunks.push(event.data);
//         }
//       };

//       recorder.onerror = (error) => {
//         console.error('Recorder error:', error);
//       };

//       recorder.onstart = () => {
//         console.log('Recording started');
//       };

//       recorder.onstop = async () => {
//         if (localAudioChunks.length === 0) {
//           console.warn('No audio chunks available');
//           return;
//         }

//         const audioBlob = new Blob(localAudioChunks, { type: 'audio/wav' });
//         await handleAudioData(audioBlob);
//       };

//       recorder.start();
//       setMediaRecorder(recorder);
//     } catch (error) {
//       console.error('Error accessing microphone:', error);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop();
//       setMediaRecorder(null);
//     }
//   };

//   const toggleRecording = () => {
//     setIsRecording((prevState) => !prevState);
//   };

//   const handleAudioData = async (audioBlob) => {
//     const formData = new FormData();
//     formData.append('audio', audioBlob, 'recording.wav');

//     try {
//       const response = await fetch('http://66.66.66.23:9001/transcribe', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setInputValue(data.transcript);
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };

//   // const handleLanguageClick = async (prevLanguage,currentLanguage) => {
//   //   if (!lastMessage) return;
//   //   setSelectedLanguage(currentLanguage);
//   //   console.log('messages', messages);
//   //   console.log('lastMessage', lastMessage);

//   //   const payload = {
//   //     text: lastMessage,
//   //     source_language:prevLanguage,
//   //     target_language: currentLanguage,
//   //   };

//   //   try {
//   //     const response = await fetch('http://66.66.66.23:9008/translate', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(payload),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error('Network response was not ok');
//   //     }

//   //     const data = await response.json();
//   //     setLastMessage(data.translated_text);

//   //     setMessages((prevMessages) => {
//   //       if (prevMessages.length === 0) return prevMessages; // No messages to replace

//   //       return [
//   //         ...prevMessages.slice(0, -1), // Keep all but the last message
//   //         { text: data.translated_text, isUser: false }, // Replace the last message
//   //       ];
//   //     });
//   //   } catch (error) {
//   //     console.error('Error fetching API:', error);
//   //   }
//   // };

//   const fetchResponse = async (message) => {
//     try {
//       const response = await fetch('http://66.66.66.23:9070/get-response', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           text: message,
//           session_id: '',
//           query_type: 'general',
// // Send the selected language
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching API:', error);
//       return { error: 'Failed to fetch response' };
//     }
//   };

//   const handleRefresh = async () => {
//     try {
//       const response = await fetch('http://66.66.66.23:9070/create_new_session', {
//         method: 'GET',
//       });

//       if (response.ok) {
//         setMessages([]);
//         setMessage('');
//         setEmotionScore(0);
//         setRewardScore(0);
//         setEmpathyScore(0);
//       }
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       addMessage(inputValue);
//       setInputValue('');

//       const apiResponse = await fetchResponse(inputValue); // Fetch response from bot

//       if (apiResponse && !apiResponse.error) {
//         setRewardScore(apiResponse.normal.reward.score || 'N/A');
//         setEmotionScore(apiResponse.emotionalscore.Logit_Scale);
//         setEmpathyScore(apiResponse.normal.empathy.score.Empathy);

//         let botResponse = apiResponse.translated_text || apiResponse.normal.output;

//         // If a language other than English is selected, translate the bot's response
//         if (selectedLanguage !== 'English') {
//           const translatedResponse = await translateResponse(botResponse, selectedLanguage);
//           botResponse = translatedResponse.translated_text || botResponse; // Update to translated text
//         }

//         // Update the chat with the (translated) bot response
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: botResponse, isUser: false },
//         ]);

//         setMessage(botResponse);  // Set final message as translated output
//         setLastMessage(botResponse);  // Track the last message for translation later

//       } else {
//         setMessage(apiResponse.error || 'Failed to fetch response');
//       }
//     }
//   };

//   // Function to translate a given text
//   const translateResponse = async (text, targetLanguage) => {
//     const payload = {
//       text,
//       source_language: 'English', // Assuming the source language is always English; adjust if needed
//       target_language: targetLanguage,
//     };

//     try {
//       const response = await fetch('http://66.66.66.23:9008/translate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data; // Return translated text from the response
//     } catch (error) {
//       console.error('Error fetching API:', error);
//       return { translated_text: text }; // Return the original text if there's an error
//     }
//   };

//   // Handle language change and translate the last message
//   const handleLanguageClick = async (prevLanguage, currentLanguage) => {
//     if (!lastMessage) return;
//     setSelectedLanguage(currentLanguage); // Update selected language

//     const payload = {
//       text: lastMessage,
//       source_language: prevLanguage,
//       target_language: currentLanguage,
//     };

//     try {
//       const response = await fetch('http://66.66.66.23:9008/translate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setLastMessage(data.translated_text);

//       setMessages((prevMessages) => {
//         if (prevMessages.length === 0) return prevMessages; // No messages to replace

//         return [
//           ...prevMessages.slice(0, -1), // Keep all but the last message
//           { text: data.translated_text, isUser: false }, // Replace the last message
//         ];
//       });
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };

//   return (
//     <div className="w-full max-w-[542px] mt-4">
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center p-4 w-full rounded-lg bg-white bg-opacity-30 border border-white border-opacity-20">
//         <div className="flex gap-2 justify-center items-center w-full sm:w-auto mb-4 sm:mb-0">
//           <button type="button" className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors" onClick={handleRefresh}>
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/87c5dced4d28375eafffa6832d9e797b6d3a39b12acb7da67198937fce17f62c?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="Attachment" className="w-6 h-6" />
//           </button>
          
//           <div className="relative group">
//             <button
//               type="button"
//               className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline focus:ring-2 focus:ring-zinc-00 transition-colors"
//             >
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b0a314cd1527cfcff4a2a531ededecc6cc567bfff2e3135a9514694b381cbb4?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
//                 alt="Language"
//                 className="w-6 h-6"
//               />
//             </button>

//             <div className="absolute z-10 mb-2 bottom-full w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 delay-100">
//               <ul className="py-2 text-sm text-gray-700">
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'English')}
//                 >
//                   English
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Spanish')}
//                 >
//                   Spanish
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Telugu')}
//                 >
//                   Telugu
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Hindi')}
//                 >
//                  Hindi
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Kannada')}
//                 >
//                  Kannada
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Malayalam')}
//                 >
//                  Malayalam
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Afrikaans')}
//                 >
//                  Afrikaans
//                 </li>
                

//               </ul>
//             </div>
//           </div>
//         </div>
        
//         <div className="flex flex-1 items-center p-2 bg-white rounded-full w-full ml-2 sm:ml-4">
//         <div className="flex flex-1 items-center p-2 bg-white rounded-full w-full ml-2">
//          <input
//             type="text"
//             id="chatInput"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Type here..."
//             className="flex-grow text-base text-black placeholder-black placeholder-opacity-20 bg-transparent border-none outline-none  px-3 py-2"
//           />
//           <button
//             type="button"
//             className={`flex justify-center items-center w-10 h-10 ${
//               isRecording ? 'bg-red-500' : 'bg-zinc-100'
//             } rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors ml-2`}
//             onClick={toggleRecording}
//           >
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a476120c6a0360ee1015c40b89ddb98e6cbd756b3e09ffa59ebc39ea4034ae5b?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
//               alt="Mic"
//               className="w-6 h-6"
//             />
//           </button>
//         </div>
//         </div>
//           <button 
//            type="submit" 
//            className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors ml-2 mt-4 sm:mt-0"
//          >
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46dfa525ef487268761330192a1049b5b38d2144923a5c74ebe492978159700d?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="Send" className="w-6 h-6" />
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ChatInput;

// import React, { useState, useEffect, useRef } from 'react';
// import { formatJsonToString } from '../../layouts/custom_utils';
// function ChatInput({
//   lastMessage,
//   setLastMessage,
//   messages,
//   addMessage,
//   setRewardScore,
//   setEmpathyScore,
//   setEmotionScore,
//   setMessage,
//   setMessages,
//   setEmotionScoreHover,
//   setRewardScoreHover,
//   setEmpathyScoreHover
// }) {
//   const [inputValue, setInputValue] = useState('');
//   const [isRecording, setIsRecording] = useState(false);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [isTranscriptionReady, setIsTranscriptionReady] = useState(false);
//   const inputRef = useRef(); 
//   useEffect(() => {
//     if (isRecording) {
//       startRecording();
//     } else if (mediaRecorder) {
//       stopRecording();
//     }
//     return () => {
//       if (mediaRecorder) {
//         mediaRecorder.stream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [isRecording]);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const recorder = new MediaRecorder(stream);
//       let localAudioChunks = [];

//       recorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           localAudioChunks.push(event.data);
//         }
//       };

//       recorder.onerror = (error) => {
//         console.error('Recorder error:', error);
//       };

//       recorder.onstart = () => {
//         console.log('Recording started');
//       };

//       recorder.onstop = async () => {
//         if (localAudioChunks.length === 0) {
//           console.warn('No audio chunks available');
//           return;
//         }

//         const audioBlob = new Blob(localAudioChunks, { type: 'audio/wav' });
//         await handleAudioData(audioBlob);
//       };

//       recorder.start();
//       setMediaRecorder(recorder);
//     } catch (error) {
//       console.error('Error accessing microphone:', error);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop();
//       setMediaRecorder(null);
//     }
//   };

//   const toggleRecording = () => {
//     setIsRecording((prevState) => !prevState);
//   };

//   const handleAudioData = async (audioBlob) => {
//     const formData = new FormData();
//     formData.append('audio', audioBlob, 'recording.wav');

//     try {
//       const response = await fetch('http://66.66.66.23:9001/transcribe', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setInputValue(data.transcript);
//       inputRef.current = data.transcript;
//       setIsTranscriptionReady(true);
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };

//   // const handleLanguageClick = async (prevLanguage,currentLanguage) => {
//   //   if (!lastMessage) return;
//   //   setSelectedLanguage(currentLanguage);
//   //   console.log('messages', messages);
//   //   console.log('lastMessage', lastMessage);

//   //   const payload = {
//   //     text: lastMessage,
//   //     source_language:prevLanguage,
//   //     target_language: currentLanguage,
//   //   };

//   //   try {
//   //     const response = await fetch('http://66.66.66.23:9008/translate', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(payload),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error('Network response was not ok');
//   //     }

//   //     const data = await response.json();
//   //     setLastMessage(data.translated_text);

//   //     setMessages((prevMessages) => {
//   //       if (prevMessages.length === 0) return prevMessages; // No messages to replace

//   //       return [
//   //         ...prevMessages.slice(0, -1), // Keep all but the last message
//   //         { text: data.translated_text, isUser: false }, // Replace the last message
//   //       ];
//   //     });
//   //   } catch (error) {
//   //     console.error('Error fetching API:', error);
//   //   }
//   // };

//   const fetchResponse = async (message) => {
//     try {
//       const response = await fetch('http://66.66.66.23:9070/get-response', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           text: message,
//           session_id: '',
//           query_type: 'general',
// // Send the selected language
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching API:', error);
//       return { error: 'Failed to fetch response' };
//     }
//   };

//   const handleRefresh = async () => {
//     try {
//       const response = await fetch('http://66.66.66.23:9070/create-session', {
//         method: 'POST',
//       });

//       if (response.ok) {
//         setMessages([]);
//         setMessage('');
//         setEmotionScore(0);
//         setRewardScore(0);
//         setEmpathyScore(0);
//       }
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const currentInputValue = inputRef.current || inputValue;
//     if (currentInputValue.trim() !== '') {
//       addMessage(inputValue);
//       setInputValue('');

//       const apiResponse = await fetchResponse(inputValue); // Fetch response from bot

//       if (apiResponse && !apiResponse.error) {
//         setRewardScore(apiResponse.normal.reward.score || 'N/A');
//         setEmotionScore(apiResponse.emotionalscore.Logit_Scale || '0');
//         setEmpathyScore(apiResponse.normal.empathy.score.Empathy || '0');
//         setEmotionScoreHover(formatJsonToString(apiResponse.emotionalscore))
//         setRewardScoreHover(formatJsonToString(apiResponse.normal.reward.basicrewardscore))
//         setEmpathyScoreHover(formatJsonToString(apiResponse.normal.empathy.score))

//         let botResponse = apiResponse.translated_text || apiResponse.normal.output;
//         console.log(apiResponse)
//         // If a language other than English is selected, translate the bot's response
//         if (selectedLanguage !== 'English') {
//           const translatedResponse = await translateResponse(botResponse, selectedLanguage);
//           botResponse = translatedResponse.translated_text || botResponse; // Update to translated text
//         }

//         // Update the chat with the (translated) bot response
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: botResponse, isUser: false },
//         ]);

//         setMessage(botResponse);  // Set final message as translated output
//         setLastMessage(botResponse);  // Track the last message for translation later

//       } else {
//         setMessage(apiResponse.error || 'Failed to fetch response');
//       }
//     }
//   };
//   useEffect(() => {
//     if (isTranscriptionReady) {
//       handleSubmit();
//       setIsTranscriptionReady(false); // Reset the flag after handling submission
//     }
//   }, [isTranscriptionReady]);
//   useEffect(() => {
//     inputRef.current = inputValue;
//   }, [inputValue]);

//   // Function to translate a given text
//   const translateResponse = async (text, targetLanguage) => {
//     const payload = {
//       text,
//       source_language: 'English', // Assuming the source language is always English; adjust if needed
//       target_language: targetLanguage,
//     };

//     try {
//       const response = await fetch('http://66.66.66.23:9008/translate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data; // Return translated text from the response
//     } catch (error) {
//       console.error('Error fetching API:', error);
//       return { translated_text: text }; // Return the original text if there's an error
//     }
//   };

//   // Handle language change and translate the last message
//   const handleLanguageClick = async (prevLanguage, currentLanguage) => {
//     if (!lastMessage) return;
//     setSelectedLanguage(currentLanguage); // Update selected language

//     const payload = {
//       text: lastMessage,
//       source_language: prevLanguage,
//       target_language: currentLanguage,
//     };

//     try {
//       const response = await fetch('http://66.66.66.23:9008/translate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setLastMessage(data.translated_text);

//       setMessages((prevMessages) => {
//         if (prevMessages.length === 0) return prevMessages; // No messages to replace

//         return [
//           ...prevMessages.slice(0, -1), // Keep all but the last message
//           { text: data.translated_text, isUser: false }, // Replace the last message
//         ];
//       });
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };


//   return (
//     <div className="w-full  mt-4">
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center p-4 w-full rounded-lg bg-white bg-opacity-30 border border-white border-opacity-20">
//         <div className="flex gap-2 justify-center items-center w-full sm:w-auto mb-4 sm:mb-0">
//           <button type="button" className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors" onClick={handleRefresh}>
//           <span class="material-icons">refresh</span>
//             {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/87c5dced4d28375eafffa6832d9e797b6d3a39b12acb7da67198937fce17f62c?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="Attachment" className="w-6 h-6" /> */}
//           </button>
          
//           <div className="relative group">
//             <button
//               type="button"
//               className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline focus:ring-2 focus:ring-zinc-00 transition-colors"
//             >
//               <span class="material-icons">translate</span>
//               {/* <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b0a314cd1527cfcff4a2a531ededecc6cc567bfff2e3135a9514694b381cbb4?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
//                 alt="Language"
//                 className="w-6 h-6"
//               /> */}
//             </button>

//             <div className="absolute z-10 mb-2 bottom-full w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 delay-100">
//               <ul className="py-2 text-sm text-gray-700">
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'English')}
//                 >
//                   English
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Spanish')}
//                 >
//                   Spanish
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Mandarin')}
//                 >
//                   Mandarin
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageClick(selectedLanguage,'Hindi')}
//                 >
//                  Hindi
//                 </li>
                
                

//               </ul>
//             </div>
//           </div>
//         </div>
        
//         <div className="flex flex-1 items-center p-2 bg-white rounded-full w-full ml-2 sm:ml-4">
//         <div className="flex flex-1 items-center p-2 bg-white rounded-full w-full ml-2">
//          <input
//             type="text"
//             id="chatInput"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Type here..."
//             className="flex-grow text-base text-black placeholder-black placeholder-opacity-20 bg-transparent border-none outline-none  px-3 py-2"
//           />
//           <button
//             type="button"
//             className={`flex justify-center items-center w-10 h-10 ${
//               isRecording ? 'bg-red-500' : 'bg-zinc-100'
//             } rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors ml-2`}
//             onClick={toggleRecording}
//           >
//                         <span class="material-icons">mic</span>

//             {/* <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a476120c6a0360ee1015c40b89ddb98e6cbd756b3e09ffa59ebc39ea4034ae5b?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
//               alt="Mic"
//               className="w-6 h-6"
//             /> */}
//           </button>
//         </div>
//         </div>
//         <button 
//         type="submit" 
//         className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors ml-2 mt-4 sm:mt-0 aspect-square"
//         >
//           <span className="material-icons">send</span>
//         </button>

//       </form>
//     </div>
//   );
// }

// export default ChatInput;


import React, { useState, useEffect, useRef } from 'react';
import { formatJsonToString } from '../../layouts/custom_utils';
function ChatInput({
  lastMessage,
  setLastMessage,
  setStreamingResponse,
  messages,
  addMessage,
  setMessage,
  setMessages,
}) {
  const [inputValue, setInputValue] = useState('');

  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isTranscriptionReady, setIsTranscriptionReady] = useState(false);
  const inputRef = useRef(); 
  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else if (mediaRecorder) {
      stopRecording();
    }
    return () => {
      if (mediaRecorder) {
        mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      let localAudioChunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          localAudioChunks.push(event.data);
        }
      };

      recorder.onerror = (error) => {
        console.error('Recorder error:', error);
      };

      recorder.onstart = () => {
        console.log('Recording started');
      };

      recorder.onstop = async () => {
        if (localAudioChunks.length === 0) {
          console.warn('No audio chunks available');
          return;
        }

        const audioBlob = new Blob(localAudioChunks, { type: 'audio/wav' });
        await handleAudioData(audioBlob);
      };

      recorder.start();
      setMediaRecorder(recorder);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
  };

  const toggleRecording = () => {
    setIsRecording((prevState) => !prevState);
  };

  const handleAudioData = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');

    try {
      const response = await fetch('http://66.66.66.23:9001/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setInputValue(data.transcript);
      inputRef.current = data.transcript;
      setIsTranscriptionReady(true);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  // const handleLanguageClick = async (prevLanguage,currentLanguage) => {
  //   if (!lastMessage) return;
  //   setSelectedLanguage(currentLanguage);
  //   console.log('messages', messages);
  //   console.log('lastMessage', lastMessage);

  //   const payload = {
  //     text: lastMessage,
  //     source_language:prevLanguage,
  //     target_language: currentLanguage,
  //   };

  //   try {
  //     const response = await fetch('http://66.66.66.23:9008/translate', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     setLastMessage(data.translated_text);

  //     setMessages((prevMessages) => {
  //       if (prevMessages.length === 0) return prevMessages; // No messages to replace

  //       return [
  //         ...prevMessages.slice(0, -1), // Keep all but the last message
  //         { text: data.translated_text, isUser: false }, // Replace the last message
  //       ];
  //     });
  //   } catch (error) {
  //     console.error('Error fetching API:', error);
  //   }
  // };

//   const fetchResponse = async (message) => {
//     try {
//       const response = await fetch('http://66.66.66.23:9070/get-response', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           text: message,
//           session_id: '',
//           query_type: 'general',
// // Send the selected language
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching API:', error);
//       return { error: 'Failed to fetch response' };
//     }
//   };
const fetchStreamingResponse = async (userMessage) => {
  try {
    const response = await fetch('http://66.66.66.23:8083/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "messages": [
          {
            "role": "user",
            "content": userMessage
          }
        ],
        "use_knowledge_base": false,
        "temperature": 0.2,
        "top_p": 0.7,
        "max_tokens": 1024,
        "stop": []
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle streamed response
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Decode the chunk
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.trim() === '') continue;

        try {
          // Parse the JSON from each line and extract the content
          const parsed = JSON.parse(line.replace(/^data: /, '').trim());
          if (parsed.choices && parsed.choices[0] && parsed.choices[0].message) {
            result += parsed.choices[0].message.content;
            console.log("Recievd results",result)
            await new Promise(resolve => setTimeout(resolve, 60));
            setStreamingResponse(result)
          }
        } catch (e) {
          console.error('Failed to parse line:', line, e);
        }
      }
    }

    // Process the final result
    console.log('Complete response:', result);
    return result;
  } catch (error) {
    console.error('Error fetching API:', error);
    return { error: 'Failed to fetch response' };
  }
};

  const handleRefresh = async () => {
    try {
      const response = await fetch('http://66.66.66.23:9070/create-session', {
        method: 'POST',
      });

      if (response.ok) {
        setMessages([]);
        setMessage('');
      }
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentInputValue = inputRef.current || inputValue;
    if (currentInputValue.trim() !== '') {
      addMessage(inputValue);
      setInputValue('');

      const apiResponse = await fetchStreamingResponse(inputValue); // Fetch response from bot
      console.log("apiresposne is ",apiResponse);
      setStreamingResponse(false);
      if (apiResponse && !apiResponse.error) {

        let botResponse = apiResponse.translated_text || apiResponse;
        console.log(apiResponse)
        // If a language other than English is selected, translate the bot's response
        if (selectedLanguage !== 'English') {
          const translatedResponse = await translateResponse(botResponse, selectedLanguage);
          botResponse = translatedResponse.translated_text || botResponse; // Update to translated text
        }

        // Update the chat with the (translated) bot response
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUser: false },
        ]);

        setMessage(botResponse);  // Set final message as translated output
        setLastMessage(botResponse);  // Track the last message for translation later

      } else {
        setMessage(apiResponse.error || 'Failed to fetch response');
      }
    }
  };
  useEffect(() => {
    if (isTranscriptionReady) {
      handleSubmit();
      setIsTranscriptionReady(false); // Reset the flag after handling submission
    }
  }, [isTranscriptionReady]);
  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  // Function to translate a given text
  const translateResponse = async (text, targetLanguage) => {
    const payload = {
      text,
      source_language: 'English', // Assuming the source language is always English; adjust if needed
      target_language: targetLanguage,
    };

    try {
      const response = await fetch('http://66.66.66.23:9008/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data; // Return translated text from the response
    } catch (error) {
      console.error('Error fetching API:', error);
      return { translated_text: text }; // Return the original text if there's an error
    }
  };

  // Handle language change and translate the last message
  const handleLanguageClick = async (prevLanguage, currentLanguage) => {
    if (!lastMessage) return;
    setSelectedLanguage(currentLanguage); // Update selected language

    const payload = {
      text: lastMessage,
      source_language: prevLanguage,
      target_language: currentLanguage,
    };

    try {
      const response = await fetch('http://66.66.66.23:9008/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setLastMessage(data.translated_text);

      setMessages((prevMessages) => {
        if (prevMessages.length === 0) return prevMessages; // No messages to replace

        return [
          ...prevMessages.slice(0, -1), // Keep all but the last message
          { text: data.translated_text, isUser: false }, // Replace the last message
        ];
      });
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };


  return (
    <div className="w-full  mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center p-4 w-full rounded-lg bg-white bg-opacity-30 border border-white border-opacity-20">
        <div className="flex gap-2 justify-center items-center w-full sm:w-auto mb-4 sm:mb-0">
          <button type="button" className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors" onClick={handleRefresh}>
          <span class="material-icons">refresh</span>
            {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/87c5dced4d28375eafffa6832d9e797b6d3a39b12acb7da67198937fce17f62c?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt="Attachment" className="w-6 h-6" /> */}
          </button>
          
          <div className="relative group">
            <button
              type="button"
              className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline focus:ring-2 focus:ring-zinc-00 transition-colors"
            >
              <span class="material-icons">translate</span>
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b0a314cd1527cfcff4a2a531ededecc6cc567bfff2e3135a9514694b381cbb4?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
                alt="Language"
                className="w-6 h-6"
              /> */}
            </button>

            <div className="absolute z-10 mb-2 bottom-full w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 delay-100">
              <ul className="py-2 text-sm text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageClick(selectedLanguage,'English')}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageClick(selectedLanguage,'Spanish')}
                >
                  Spanish
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageClick(selectedLanguage,'Mandarin')}
                >
                  Mandarin
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageClick(selectedLanguage,'Hindi')}
                >
                 Hindi
                </li>
                
                

              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-1 items-center p-2 bg-white rounded-full w-full ml-2 sm:ml-4">
        <div className="flex flex-1 items-center p-2 bg-white rounded-full w-full ml-2">
         <input
            type="text"
            id="chatInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
            className="flex-grow text-base text-black placeholder-black placeholder-opacity-20 bg-transparent border-none outline-none  px-3 py-2"
          />
          <button
            type="button"
            className={`flex justify-center items-center w-10 h-10 ${
              isRecording ? 'bg-red-500' : 'bg-zinc-100'
            } rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors ml-2`}
            onClick={toggleRecording}
          >
                        <span class="material-icons">mic</span>

            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a476120c6a0360ee1015c40b89ddb98e6cbd756b3e09ffa59ebc39ea4034ae5b?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
              alt="Mic"
              className="w-6 h-6"
            /> */}
          </button>
        </div>
        </div>
        <button 
        type="submit" 
        className="flex justify-center items-center w-10 h-10 bg-zinc-100 rounded-full hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors ml-2 mt-4 sm:mt-0 aspect-square"
        >
          <span className="material-icons">send</span>
        </button>

      </form>
    </div>
  );
}

export default ChatInput;