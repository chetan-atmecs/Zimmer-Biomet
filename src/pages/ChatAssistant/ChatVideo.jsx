import React, { useState } from 'react';

function ChatMedia() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  // Video sources, replace these paths with your actual local video files
  const videoSources = [
    "src/assets/images/AssistantFacing_Eng_FM.mp4",
    "src/assets/images/AssistantFacing_Spa_FM.mp4"
    // "/path-to-your-local-video3.mp4"
  ];

  const language = ["English", "Spanish"]
  const handlePlayVideo = (index) => {
    setPlayingVideoIndex(index);
  };

  return (
    <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-2.5 min-h-[846px]">
        {playingVideoIndex !== null ? (
          <video
            key={playingVideoIndex}
            controls
            className="object-cover flex-1 w-full h-full rounded-lg"
          >
            <source src={videoSources[playingVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            loading="lazy"
            src="src\assets\images\MetaHuman_SA_FM1.png"
            alt="Chat interface visual"
            className="object-cover flex-1 w-full h-full rounded-lg"
          />
        )}
      </div>

      <div className="flex gap-4 mt-4">
        {videoSources.map((video, index) => (
          <button
            key={index}
            onClick={() => handlePlayVideo(index)}
            className="bg-white text-black py-2 px-4 rounded-lg"
          >
            Play {language[index]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChatMedia;


// import React, { useState } from 'react';
// import { PixelStreamingWrapper } from '../../layouts/PixelStreaming/PixelStreamingWrapper';

// function ChatMedia() {
//   const [isStreaming, setIsStreaming] = useState(false);

//   const handleToggleStreaming = (index) => {
//     setIsStreaming(true); // Enable streaming when a button is clicked
//   };

//   return (
//     <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
//       <div className="flex grow gap-2.5 min-h-[846px]">
//         {isStreaming ? (
//           <PixelStreamingWrapper
//             initialSettings={{
//               AutoPlayVideo: true,
//               AutoConnect: true,
//               ss: 'ws://66.66.66.41:30080',
//               StartVideoMuted: true,
//               HoveringMouse: true,
//               WaitForStreamer: true
//             }}
//             style={{
//               width: '100%',
//               height: '100%',
//               borderRadius: '0.5rem',
//               objectFit: 'cover',
//             }}
//           />
//         ) : (
//           <img
//             loading="lazy"
//             src="src/assets/images/MetaHuman_SA_FM1.png"
//             alt="Chat interface visual"
//             className="object-cover flex-1 w-full h-full rounded-lg"
//           />
//         )}
//       </div>

//       <div className="flex gap-4 mt-4">
//         <button
//           onClick={() => handleToggleStreaming()}
//           className="bg-white text-black py-2 px-4 rounded-lg"
//         >
//           Start Streaming
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatMedia;



// import React, { useState } from 'react';
// import { PixelStreamingWrapper } from '../../layouts/PixelStreaming/PixelStreamingWrapper';

// function ChatMedia() {
//   const [isStreaming, setIsStreaming] = useState(false);

//   const handleToggleStreaming = () => {
//     setIsStreaming(true); // Start streaming when the button is clicked
//   };

//   return (
//     <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
//       <div className="flex grow gap-2.5 min-h-[846px]">
//         {isStreaming ? (
//           <div className="object-cover flex-1 w-full h-full rounded-lg">
//             <PixelStreamingWrapper
//               initialSettings={{
//                 AutoPlayVideo: true,
//                 AutoConnect: true,
//                 ss: 'ws://66.66.66.41:30080',
//                 StartVideoMuted: false,
//                 HoveringMouse: true,
//                 WaitForStreamer: true
//               }}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 borderRadius: '0.5rem',
//                 objectFit: 'cover',
//               }}
//             />
//           </div>
//         ) : (
//           <img
//             loading="lazy"
//             src="src\assets\images\Render_04.png"
//             alt="Chat interface visual"
//             className="object-cover flex-1 w-full h-full rounded-lg"
//           />
//         )}
//       </div>

//       <div className="flex gap-4 mt-4">
//         <button
//           onClick={handleToggleStreaming}
//           className="bg-white text-black py-2 px-4 rounded-lg"
//         >
//           Start Streaming
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatMedia;
