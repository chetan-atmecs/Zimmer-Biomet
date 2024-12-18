// import React, { useState } from 'react';

// function ChatMedia() {
//   const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

//   // Video sources, replace these paths with your actual local video files
//   const videoSources = [
//     "src/assets/images/SpecialistFacing_Eng_FM.mp4",
//     "src/assets/images/SpecialistFacing_Spa_FM.mp4",
//     "src/assets/images/SpecialistFacing_Man_FM.mp4"
//     // "/path-to-your-local-video3.mp4"
//   ];

//   const language = ["English", "Spanish", "Mandarin"]
//   const handlePlayVideo = (index) => {
//     setPlayingVideoIndex(index);
//   };

//   return (
//     <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
//       <div className="flex grow gap-2.5 min-h-[846px]">
//         {playingVideoIndex !== null ? (
//           <video
//             key={playingVideoIndex}
//             controls
//             className="object-cover flex-1 w-full h-full rounded-lg"
//           >
//             <source src={videoSources[playingVideoIndex]} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img
//             loading="lazy"
//             src="src/assets/images/Doctor img.png"
//             alt="Chat interface visual"
//             className="object-cover flex-1 w-full h-full rounded-lg"
//           />
//         )}
//       </div>

//       <div className="flex gap-4 mt-4">
//         {videoSources.map((video, index) => (
//           <button
//             key={index}
//             onClick={() => handlePlayVideo(index)}
//             className="bg-white text-black py-2 px-4 rounded-lg"
//           >
//             Play {language[index]}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChatMedia;


import React, { useState } from 'react';
import { PixelStreamingWrapper } from '../../layouts/PixelStreaming/PixelStreamingWrapper';

function ChatMedia() {




  // Define the API endpoint
const first_run = 'http://66.66.66.23:9502/first_run';

// Call the API
async function fetchData() {
  try {
    // Make the API call using fetch
    const response = await fetch(first_run, {
      method: 'GET', // HTTP method (e.g., GET, POST, PUT, DELETE)
      headers: {
        'Content-Type': 'application/json', // Set the content type
        Authorization: 'Bearer your-token-here', // Example header for auth
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();

    // Handle the response data
    console.log('Data received from API:', data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
  }
}

// Call the function





  const [isStreaming, setIsStreaming] = useState(false);

  const handleToggleStreaming = () => {
    fetchData();
    setIsStreaming(true); // Start streaming when the button is clicked
  };
 
  
  const StopStreaming = async () =>{
    // setIsStreaming(false)
    try {
      // Make the API call using fetch
      const response = await fetch("http://66.66.66.23:9502/stop_stream", {
        method: 'GET', // HTTP method (e.g., GET, POST, PUT, DELETE)
        headers: {
          'Content-Type': 'application/json', // Set the content type
        },
      });
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response JSON
      const data = await response.json();
  
      // Handle the response data
      console.log('Data received from API:', data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
    
  }
  return (
    <div className="flex flex-col w-[58%]  ">
  <div className="flex grow gap-2.5">
    {isStreaming ? (
      <div className="object-cover flex-1   rounded-lg overflow-hidden bg-teal">
        <PixelStreamingWrapper
          initialSettings={{
            AutoPlayVideo: true,
            AutoConnect: true,
            ss: 'ws://66.66.66.23:30080',
            StartVideoMuted: false,
            HoveringMouse: true,
            WaitForStreamer: true,
          }}
        />
      </div>
    ) : (
      <img
      style={{width:"715px"}}
        loading="lazy"
        src="src\assets\images\zimmerbiomikaila.png"
        alt="Chat interface visual"
        className="object-cover flex-1 w-full h-full rounded-lg"
      />
    )}
  </div>

  <div className="flex gap-4 mt-4">
    {!isStreaming&&<button
      onClick={handleToggleStreaming}
      className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      Start
    </button>}
    {isStreaming && <button
      onClick={StopStreaming}
      className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      Stop
    </button>}
  </div>
</div>

  );
}

export default ChatMedia;