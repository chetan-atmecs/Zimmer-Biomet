// import React, { useState } from 'react';

// function KnowledgeGraph() {
//   const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

//   // Video sources, replace these paths with your actual local video files
//   const videoSources = [
//     "src/assets/images/PatientFacing_Eng_FM.mp4",
//     "src/assets/images/PatientFacing_Spa_FM.mp4",
//     "src/assets/images/PatientFacing_Man_FM.mp4"
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
//             src="src\assets\images\Patient img.png"
//             alt="Chat interface visual"
//             className="object-cover flex-1 w-full h-full rounded-lg"
//           />
//         )}
//       </div>

//       {/* <div className="flex gap-4 mt-4">
//         {videoSources.map((video, index) => (
//           <button
//             key={index}
//             onClick={() => handlePlayVideo(index)}
//             className="bg-white text-black py-2 px-4 rounded-lg"
//           >
//             Play {language[index]}
//           </button>
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default KnowledgeGraph;



// // import React, { useState } from 'react';
// // import { PixelStreamingWrapper } from '../../layouts/PixelStreaming/PixelStreamingWrapper';

// // function ChatMedia() {
// //   const [isStreaming, setIsStreaming] = useState(false);

// //   const handleToggleStreaming = () => {
// //     setIsStreaming(true); // Start streaming when the button is clicked
// //   };

// //   return (
// //     <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
// //       <div className="flex grow gap-2.5 min-h-[846px]">
// //         {isStreaming ? (
// //           <div className="object-cover flex-1 w-full h-full rounded-lg">
// //             <PixelStreamingWrapper
// //               initialSettings={{
// //                 AutoPlayVideo: true,
// //                 AutoConnect: true,
// //                 ss: 'ws://66.66.66.41:30080',
// //                 StartVideoMuted: false,
// //                 HoveringMouse: true,
// //                 WaitForStreamer: true
// //               }}
// //               style={{
// //                 width: '100%',
// //                 height: '100%',
// //                 borderRadius: '0.5rem',
// //                 objectFit: 'cover',
// //               }}
// //             />
// //           </div>
// //         ) : (
// //           <img
// //             loading="lazy"
// //             src="src\assets\images\Render_04.png"
// //             alt="Chat interface visual"
// //             className="object-cover flex-1 w-full h-full rounded-lg"
// //           />
// //         )}
// //       </div>

// //       <div className="flex gap-4 mt-4">
// //         <button
// //           onClick={handleToggleStreaming}
// //           className="bg-white text-black py-2 px-4 rounded-lg"
// //         >
// //           Start Streaming
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ChatMedia;

// import React, { useEffect, useRef, useState } from 'react';

// const KnowledgeGraph = () => {
//   const vizRef = useRef(null); // Reference for the Neo4j visualization div
//   const [cypherQuery, setCypherQuery] = useState(''); // State to store user-input Cypher query
//   const vizInstance = useRef(null); // Reference to store Neovis instance

//   useEffect(() => {
//     const initializeNeoVis = async () => {
//       try {
//         const { NeoVis } = await import('./dist/neovis.js'); // Dynamically import NeoVis to avoid import issues

//         const config = {
//           containerId: 'viz',
//           neo4j: {
//             serverUrl: 'neo4j://66.66.66.23:7687',
//             serverUser: 'neo4j',
//             serverPassword: 'neo4j@123'
//           },
//           labels: {
//             Character: {
//               label: 'name',
//               value: 'pagerank',
//               group: 'community'
//             }
//           },
//           relationships: {
//             INTERACTS: {
//               value: 'weight'
//             }
//           },
//           initialCypher: 'MATCH p=()-[]->() RETURN p;'
//         };

//         vizInstance.current = new NeoVis(config);
//         vizInstance.current.render();
//       } catch (error) {
//         console.error('Failed to load NeoVis:', error);
//       }
//     };

//     initializeNeoVis();
//   }, []);

//   const handleReload = () => {
//     if (cypherQuery.length > 3) {
//       vizInstance.current.renderWithCypher(cypherQuery);
//     } else {
//       vizInstance.current.reload();
//     }
//   };

//   const handleStabilize = () => {
//     vizInstance.current.stabilize();
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
//       <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Neovis.js Graph Visualization</h2>
      
//       <div
//         id="viz"
//         ref={vizRef}
//         style={{
//           width: '100%',
//           height: '700px',
//           border: '1px solid lightgray',
//           borderRadius: '5px',
//           marginBottom: '20px',
//         }}
//       ></div>

//       <textarea
//         value={cypherQuery}
//         onChange={(e) => setCypherQuery(e.target.value)}
//         placeholder="Enter Cypher query here"
//         rows="4"
//         style={{
//           width: '100%',
//           maxWidth: '600px',
//           padding: '10px',
//           fontSize: '16px',
//           marginBottom: '10px',
//           borderRadius: '5px',
//           border: '1px solid #ccc',
//           resize: 'vertical'
//         }}
//       ></textarea>
      
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//         <button onClick={handleReload} style={buttonStyle}>
//           Submit
//         </button>
//         <button onClick={handleStabilize} style={buttonStyle}>
//           Stabilize
//         </button>
//       </div>
//     </div>
//   );
// };

// // Button styling
// const buttonStyle = {
//   padding: '10px 20px',
//   fontSize: '16px',
//   color: '#fff',
//   backgroundColor: '#4CAF50',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer'
// };

// export default KnowledgeGraph;

import React, { useEffect, useRef, useState } from 'react';

const Neo4jGraph = () => {
  const vizRef = useRef(null); // Ref for the div where the graph will render
  const [cypherQuery, setCypherQuery] = useState(''); // State for user Cypher input
  const vizInstance = useRef(null); // Ref for Neovis instance

  useEffect(() => {
    // Initialize Neovis when component mounts
    const config = {
      containerId: 'viz',
      neo4j: {
        serverUrl: 'neo4j://66.66.66.23:7687',
        serverUser: 'neo4j',
        serverPassword: 'test@123'
      },
      labels: {
        Character: {
          label: 'name', // Ensure this matches the actual property
          value: 'pagerank', // Optional
          group: 'community' // Optional
        }
      },
      relationships: {
        INTERACTS: {
          label: 'type', // Adjust based on the actual property
          value: 'weight' // Optional
        }
      },
      initialCypher: 'MATCH p=()-[]->() RETURN p LIMIT 100;'
    };
    

    // Instantiate and render Neovis
    vizInstance.current = new window.NeoVis.default(config); // Access NeoVis from the window object
    vizInstance.current.render(); // Render the visualization

    console.log("Neovis instance initialized:", vizInstance.current);
  }, []);

  const handleReload = () => {
    if (vizInstance.current) {
      // Reload with a custom Cypher query or default
      if (cypherQuery.length > 3) {
        vizInstance.current.renderWithCypher(cypherQuery);
      } else {
        vizInstance.current.reload();
      }
    }
  };

  const handleStabilize = () => {
    if (vizInstance.current) {
      vizInstance.current.stabilize(); // Stabilize the visualization
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      {/* <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Neovis.js Graph Visualization</h2> */}
      
      <div
        id="viz"
        ref={vizRef}
        style={{
          width: '100%',
          height: '700px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
      ></div>


      <button
        onClick={() => window.open('http://66.66.66.23:7474/browser/', '_blank')}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Neo4j Dashboard
      </button>

      {/* <textarea
        value={cypherQuery}
        onChange={(e) => setCypherQuery(e.target.value)}
        placeholder="Enter Cypher query here"
        rows="4"
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          resize: 'vertical'
        }}
      ></textarea>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={handleReload} style={buttonStyle}>
          Submit
        </button>
        <button onClick={handleStabilize} style={buttonStyle}>
          Stabilize
        </button>
      </div> */}


    </div>
  );
};

// Button styling
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#4CAF50',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Neo4jGraph;
