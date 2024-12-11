import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';

const Test = () => {
  const [state, setState] = useState('');
  const [response, setResponse] = useState([]);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear the response for a new request
    setResponse([]);

    const data = {
      messages: [
        {
          role: 'user',
          content: state || 'give me about gandhiji in one line',
        },
      ],
      use_knowledge_base: true,
      temperature: 0.7,
      top_p: 0.25,
      max_tokens: 1024,
      stop: [],
    };

    try {
      const response = await fetch('http://66.66.66.41:9000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.body) {
        throw new Error('ReadableStream is not supported.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;

        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setResponse((prevResponse) => [...prevResponse, chunk]);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse((prevResponse) => [...prevResponse, 'Error: Unable to process your request.']);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Chat with Llama
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={state}
            onChange={handleChange}
            margin="normal"
          />
          <Box display="flex" justifyContent="center" mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
        {response.length > 0 && (
          <Box mt={4}>
            <Typography variant="h6">Response:</Typography>
            <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
              {response.join('')} {/* Combine chunks into a single response */}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Test;


// // // import React, { useState } from 'react';
// // // import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';

// // // const Test = () => {
// // //   const [state, setState] = useState('');
// // //   const [response, setResponse] = useState('');

// // //   const handleChange = (event) => {
// // //     setState(event.target.value);
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     const data = {
// // //       messages: [
// // //         {
// // //           role: "user",
// // //           content: `${state}`,
// // //         },
// // //       ],
// // //       model: "llama3-8b-8192",
// // //       stream:true,
// // //     };

// // //     try {
// // //       const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
// // //         method: "POST",
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': 'Bearer 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',
// // //         },
// // //         body: JSON.stringify(data),
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error(`HTTP error! status: ${response.status}`);
// // //       }

// // //       const reader = response.body.getReader();
// // //       const decoder = new TextDecoder();
// // //       let content = '';

// // //       const stream = new ReadableStream({
// // //         start(controller) {
// // //           function push() {
// // //             reader.read().then(({ done, value }) => {
// // //               if (done) {
// // //                 controller.close();
// // //                 return;
// // //               }
// // //               content += decoder.decode(value, { stream: true });
// // //               setResponse(content);
// // //               controller.enqueue(value);
// // //               push();
// // //             }).catch(error => {
// // //               console.error('Stream error:', error);
// // //               setResponse('There was an error processing your request.');
// // //             });
// // //           }
// // //           push();
// // //         }
// // //       });

// // //       new Response(stream, { headers: { 'Content-Type': 'text/html' } });
// // //     } catch (error) {
// // //       console.error('Error:', error);
// // //       setResponse('There was an error processing your request.');
// // //     }
// // //   };

// // //   return (
// // //     <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
// // //       <Paper elevation={3} style={{ padding: '2rem' }}>
// // //         <Typography variant="h4" gutterBottom>
// // //           Chat with Llama
// // //         </Typography>
// // //         <form onSubmit={handleSubmit}>
// // //           <TextField
// // //             label="Enter your message"
// // //             variant="outlined"
// // //             fullWidth
// // //             multiline
// // //             rows={4}
// // //             value={state}
// // //             onChange={handleChange}
// // //             margin="normal"
// // //           />
// // //           <Box display="flex" justifyContent="center" mt={2}>
// // //             <Button type="submit" variant="contained" color="primary">
// // //               Submit
// // //             </Button>
// // //           </Box>
// // //         </form>
// // //         {response && (
// // //           <Box mt={4}>
// // //             <Typography variant="h6">Response:</Typography>
// // //             <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
// // //               {response}
// // //             </Typography>
// // //           </Box>
// // //         )}
// // //       </Paper>
// // //     </Container>
// // //   );
// // // };

// // // export default Test;
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box, Paper, IconButton } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// const Test = () => {
//   const [state, setState] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (state.trim() === '') return;

//     const userMessage = {
//       role: 'user',
//       content: state,
//     };

//     setMessages([...messages, userMessage]);

//     const data = {
//       messages: [userMessage],
//       model: 'llama3-8b-8192',
//       max_tokens: 200,
//     };

//     try {
//       const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer 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',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const resData = await response.json();
//       const botMessage = {
//         role: 'bot',
//         content: resData.choices[0].message.content,
//       };

//       setMessages([...messages, userMessage, botMessage]);
//       setState('');
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages([...messages, { role: 'bot', content: 'There was an error processing your request.' }]);
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: '2rem', position: 'relative' }}>
//       <Paper elevation={3} style={{ padding: '2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <Typography variant="h4" gutterBottom>
//           Chat with Llama
//         </Typography>
//         <Box flexGrow={1} overflow="auto">
//           {messages.map((msg, index) => (
//             <Box key={index} mt={2} p={2} bgcolor={msg.role === 'bot' ? 'black' : 'grey.200'} borderRadius="8px">
//               <Typography variant="body1" color={msg.role === 'bot' ? 'white' : 'black'} style={{ whiteSpace: 'pre-wrap' }}>
//                 {msg.content}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
//           <TextField
//             label="Enter your message"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={2}
//             value={state}
//             onChange={handleChange}
//             margin="normal"
//             style={{ marginRight: '1rem' }}
//           />
//           <IconButton type="submit" color="primary" size="large">
//             <SendIcon />
//           </IconButton>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Test;
// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Container, Typography, Box, Paper, IconButton, MenuItem, Select, FormControl, InputLabel, LinearProgress } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// const Test = () => {
//   const [state, setState] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch('https://api.groq.com/openai/v1/models', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer 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',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const resData = await response.json();
//         setModels(resData.data);
//         setSelectedModel(resData.data[0].id); // Set default model
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchModels();
//   }, []);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleModelChange = (event) => {
//     setSelectedModel(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (state.trim() === '') return;

//     const userMessage = {
//       role: 'user',
//       content: state,
//     };

//     setMessages([...messages, userMessage]);
//     setLoading(true);

//     const data = {
//       messages: [userMessage],
//       model: selectedModel,
//       max_tokens: 200,
//     };

//     try {
//       const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer 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',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const resData = await response.json();
//       const botMessage = {
//         role: 'bot',
//         content: resData.choices[0].message.content,
//       };

//       setMessages([...messages, userMessage, botMessage]);
//       setState('');
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages([...messages, { role: 'bot', content: 'There was an error processing your request.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: '2rem', position: 'relative' }}>
//       <Paper elevation={3} style={{ padding: '2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <Box display="flex" alignItems="center" justifyContent="space-between">
//           <Typography variant="h4" gutterBottom>
//             Chat with Llama
//           </Typography>
//           <FormControl variant="outlined" style={{ minWidth: 150 }}>
//             <InputLabel id="model-select-label">Model</InputLabel>
//             <Select
//               labelId="model-select-label"
//               value={selectedModel}
//               onChange={handleModelChange}
//               label="Model"
//             >
//               {models.map((model) => (
//                 <MenuItem key={model.id} value={model.id}>
//                   {model.id}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>
//         {loading && <LinearProgress />}
//         <Box flexGrow={1} overflow="auto" mt={2}>
//           {messages.map((msg, index) => (
//             <Box key={index} mt={2} p={2} bgcolor={msg.role === 'bot' ? 'black' : 'grey.200'} borderRadius="8px">
//               <Typography variant="body1" color={msg.role === 'bot' ? 'white' : 'black'} style={{ whiteSpace: 'pre-wrap' }}>
//                 {msg.content}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
//           <TextField
//             label="Enter your message"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={2}
//             value={state}
//             onChange={handleChange}
//             margin="normal"
//             style={{ marginRight: '1rem' }}
//           />
//           <IconButton type="submit" color="primary" size="large">
//             <SendIcon />
//           </IconButton>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Test;

// import React, { useState, useEffect, useRef } from 'react';
// import { TextField, Button, Container, Typography, Box, Paper, IconButton, MenuItem, Select, FormControl, InputLabel, LinearProgress } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// const Test = () => {
//   const [state, setState] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState('');
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch('https://api.groq.com/openai/v1/models', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer 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',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const resData = await response.json();
//         setModels(resData.data);
//         setSelectedModel(resData.data[0].id); // Set default model
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchModels();
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleModelChange = (event) => {
//     setSelectedModel(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (state.trim() === '') return;

//     const userMessage = {
//       role: 'user',
//       content: state,
//     };

//     setMessages([...messages, userMessage]);
//     setLoading(true);

//     const data = {
//       messages: [userMessage],
//       model: selectedModel,
//       max_tokens: 200,
//     };

//     try {
//       const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer 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',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const resData = await response.json();
//       const botMessage = {
//         role: 'bot',
//         content: resData.choices[0].message.content,
//       };

//       setMessages([...messages, userMessage, botMessage]);
//       setState('');
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages([...messages, { role: 'bot', content: 'There was an error processing your request.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: '2rem', position: 'relative' }}>
//       <Paper elevation={3} style={{ padding: '1rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
//           <Typography variant="h4" gutterBottom>
//             Chat with Llama
//           </Typography>
//           <FormControl variant="outlined" style={{ minWidth: 150 }}>
//             <InputLabel id="model-select-label">Model</InputLabel>
//             <Select
//               labelId="model-select-label"
//               value={selectedModel}
//               onChange={handleModelChange}
//               label="Model"
//             >
//               {models.map((model) => (
//                 <MenuItem key={model.id} value={model.id}>
//                   {model.id}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>
//         {loading && <LinearProgress />}
//         <Box flexGrow={1} overflow="auto" mb={2} p={1} bgcolor="#f5f5f5" borderRadius="8px" style={{ maxHeight: '60vh' }}>
//           {messages.map((msg, index) => (
//             <Box
//               key={index}
//               mt={2}
//               p={2}
//               borderRadius="8px"
//               bgcolor={msg.role === 'bot' ? 'primary.main' : 'grey.300'}
//               alignSelf={msg.role === 'bot' ? 'flex-start' : 'flex-end'}
//               style={{ maxWidth: '75%', alignSelf: msg.role === 'bot' ? 'flex-start' : 'flex-end' }}
//             >
//               <Typography variant="body1" color={msg.role === 'bot' ? 'white' : 'black'} style={{ whiteSpace: 'pre-wrap' }}>
//                 {msg.content}
//               </Typography>
//             </Box>
//           ))}
//           <div ref={messagesEndRef} />
//         </Box>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
//           <TextField
//             label="Enter your message"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={2}
//             value={state}
//             onChange={handleChange}
//             margin="normal"
//             style={{ marginRight: '1rem' }}
//           />
//           <IconButton type="submit" color="primary" size="large">
//             <SendIcon />
//           </IconButton>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Test;
// import React, { useState, useEffect, useRef } from 'react';
// import { TextField, Container, Typography, Box, Paper, IconButton, MenuItem, Select, FormControl, InputLabel, LinearProgress } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// const Test = () => {
//   const [state, setState] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState('');
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch('https://api.groq.com/openai/v1/models', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer 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',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const resData = await response.json();
//         setModels(resData.data);
//         setSelectedModel(resData.data[0].id); // Set default model
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchModels();
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleModelChange = (event) => {
//     setSelectedModel(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (state.trim() === '') return;

//     const userMessage = {
//       role: 'user',
//       content: state,
//     };

//     setMessages((prevMessages) => [...prevMessages, userMessage]);
//     setState('');
//     setLoading(true);

//     const data = {
//       messages: [userMessage],
//       model: selectedModel,
//       max_tokens: 200,
//     };

//     try {
//       const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer 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',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const resData = await response.json();
//       const botMessage = {
//         role: 'bot',
//         content: resData.choices[0].message.content,
//       };

//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: 'There was an error processing your request.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: '2rem', position: 'relative' }}>
//       <Paper elevation={3} style={{ padding: '1rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
//           <Typography variant="h4" gutterBottom>
//             Chat with Llama
//           </Typography>
//           <FormControl variant="outlined" style={{ minWidth: 150 }}>
//             <InputLabel id="model-select-label">Model</InputLabel>
//             <Select
//               labelId="model-select-label"
//               value={selectedModel}
//               onChange={handleModelChange}
//               label="Model"
//             >
//               {models.map((model) => (
//                 <MenuItem key={model.id} value={model.id}>
//                   {model.id}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>
//         {loading && <LinearProgress />}
//         <Box flexGrow={1} overflow="auto" mb={2} p={1} bgcolor="#f5f5f5" borderRadius="8px" style={{ maxHeight: '60vh' }}>
//           {messages.map((msg, index) => (
//             <Box
//               key={index}
//               display="flex"
//               justifyContent={msg.role === 'bot' ? 'flex-start' : 'flex-end'}
//             >
//               <Box
//                 mt={2}
//                 p={2}
//                 borderRadius="8px"
//                 bgcolor={msg.role === 'bot' ? '#663399' : 'grey.300'}
//                 style={{ maxWidth: '75%', textAlign: msg.role === 'bot' ? 'left' : 'right' }}
//               >
//                 <Typography variant="body1" color={msg.role === 'bot' ? 'white' : 'black'} style={{ whiteSpace: 'pre-wrap' }}>
//                   {msg.content}
//                 </Typography>
//               </Box>
//             </Box>
//           ))}
//           <div ref={messagesEndRef} />
//         </Box>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
//           <TextField
//             label="Enter your message"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={2}
//             value={state}
//             onChange={handleChange}
//             margin="normal"
//             style={{ marginRight: '1rem' }}
//           />
//           <IconButton type="submit" color="primary" style={{ color: '#663399' }} size="large">
//             <SendIcon  />
//           </IconButton>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Test;
// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Box,
//   Paper,
//   IconButton,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Slider,
//   LinearProgress,
//   Grid,
//   Stack
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// const Test = () => {
//   const [state, setState] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState('');
//   const [maxTokens, setMaxTokens] = useState(200);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch('https://api.groq.com/openai/v1/models', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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' // Replace YOUR_API_KEY_HERE with your actual API key
//           }
//         });
//         const resData = await response.json();
//         if (Array.isArray(resData.data)) {
//           setModels(resData.data);
//           if (resData.data.length > 0) {
//             setSelectedModel(resData.data[0].id);
//           }
//         } else {
//           console.error('Invalid models data:', resData);
//         }
//       } catch (error) {
//         console.error('Error fetching models:', error);
//       }
//     };

//     fetchModels();
//   }, []);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleModelChange = (event) => {
//     setSelectedModel(event.target.value);
//   };

//   const handleMaxTokensChange = (event, newValue) => {
//     setMaxTokens(newValue);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!state.trim()) return;

//     const userMessage = {
//       role: 'user',
//       content: state,
//     };

//     setMessages(prevMessages => [...prevMessages, userMessage]);

//     const data = {
//       messages: [userMessage],
//       model: selectedModel,
//       max_tokens: maxTokens,
//     };

//     setLoading(true);

//     try {
//       const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer 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' // Replace YOUR_API_KEY_HERE with your actual API key
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const resData = await response.json();
//       const botMessage = {
//         role: 'bot',
//         content: resData.choices && resData.choices.length > 0 ? resData.choices[0].message.content : 'No response from bot',
//       };

//       setMessages(prevMessages => [...prevMessages, botMessage]);
//       setState('');
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages(prevMessages => [...prevMessages, { role: 'bot', content: 'There was an error processing your request.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
//       <Paper elevation={3} style={{ padding: '2rem' }}>
//         <Grid container alignItems="center" justifyContent="space-between">
//           <Grid item>
//             <Typography variant="h4">Chat with Llama</Typography>
//           </Grid>
//           <Grid item>
//             <FormControl variant="outlined" size="small">
//               <InputLabel id="model-select-label">Model</InputLabel>
//               <Select
//                 labelId="model-select-label"
//                 value={selectedModel}
//                 onChange={handleModelChange}
//                 label="Model"
//                 style={{ width: 150 }}
//               >
//                 {models.map((model, index) => (
//                   <MenuItem key={index} value={model.id}>{model.id}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//         <Typography variant="h6" gutterBottom>Max Tokens:</Typography>
//         <Slider
//           value={maxTokens}
//           onChange={handleMaxTokensChange}
//           min={50}
//           max={1000}
//           step={50}
//           valueLabelDisplay="auto"
//           style={{color:"#663399"}}
//         />
//         {loading && <LinearProgress />}
//         <Box flexGrow={1} overflow="auto" style={{ height: '50vh', marginTop: '1rem', marginBottom: '1rem' }}>
//           {messages.map((msg, index) => (
//             <Box key={index} style={{ marginBottom: '1rem', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
//               <Paper elevation={3} style={{ padding: '1rem', display: 'inline-block', backgroundColor: msg.role === 'user' ? 'white' : '#663399', color: msg.role === 'user' ? '#663399' : 'white' }}>
//                 <Typography variant="body1">{msg.content}</Typography>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//             label="Enter your message"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={2}
//             value={state}
//             onChange={handleChange}
//             margin="normal"
//             style={{ marginRight: '1rem' }}
//           />
//           <IconButton type="submit" color="primary" style={{ color: "#663399" }} size="large">
//             <SendIcon />
//           </IconButton>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Test;
// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Container,
//   Typography,
//   Box,
//   Paper,
//   IconButton,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   LinearProgress,
//   Grid
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// const Test = () => {
//   const [state, setState] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch('https://api.groq.com/openai/v1/models', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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' // Replace YOUR_API_KEY_HERE with your actual API key
//           }
//         });
//         const resData = await response.json();
//         if (Array.isArray(resData.data)) {
//           setModels(resData.data);
//           if (resData.data.length > 0) {
//             setSelectedModel(resData.data[0].id);
//           }
//         } else {
//           console.error('Invalid models data:', resData);
//         }
//       } catch (error) {
//         console.error('Error fetching models:', error);
//       }
//     };

//     fetchModels();
//   }, []);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleModelChange = (event) => {
//     setSelectedModel(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!state.trim()) return;

//     const userMessage = {
//       role: 'user',
//       content: state,
//     };

//     setMessages(prevMessages => [...prevMessages, userMessage]);

//     const userDetails = JSON.parse(localStorage.getItem('userDetails'));
//     const empid = userDetails ? userDetails.empid : '';

//     const data = {
//       empid: empid,
//       message: state,
//       modelType: selectedModel,
//     };

//     setLoading(true);

//     try {
//       const response = await fetch('http://55.55.55.249:3000/api/v1/chat/message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const resData = await response.json();
//       const botMessage = {
//         role: 'bot',
//         content: resData.data || 'No response from bot',
//       };

//       setMessages(prevMessages => [...prevMessages, botMessage]);
//       setState('');
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages(prevMessages => [...prevMessages, { role: 'bot', content: 'There was an error processing your request.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
//       <Paper elevation={3} style={{ padding: '2rem' }}>
//         <Grid container alignItems="center" justifyContent="space-between">
//           <Grid item>
//             <Typography variant="h4">Chat with Llama</Typography>
//           </Grid>
//           <Grid item>
//             <FormControl variant="outlined" size="small">
//               <InputLabel id="model-select-label">Model</InputLabel>
//               <Select
//                 labelId="model-select-label"
//                 value={selectedModel}
//                 onChange={handleModelChange}
//                 label="Model"
//                 style={{ width: 150 }}
//               >
//                 {models.map((model, index) => (
//                   <MenuItem key={index} value={model.id}>{model.id}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//         {loading && <LinearProgress />}
//         <Box flexGrow={1} overflow="auto" style={{ height: '50vh', marginTop: '1rem', marginBottom: '1rem' }}>
//           {messages.map((msg, index) => (
//             <Box key={index} style={{ marginBottom: '1rem', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
//               <Paper elevation={3} style={{ padding: '1rem', display: 'inline-block', backgroundColor: msg.role === 'user' ? 'white' : '#663399', color: msg.role === 'user' ? '#663399' : 'white' }}>
//                 <Typography variant="body1">{msg.content}</Typography>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//             label="Enter your message"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={2}
//             value={state}
//             onChange={handleChange}
//             margin="normal"
//             style={{ marginRight: '1rem' }}
//           />
//           <IconButton type="submit" color="primary" style={{ color: "#663399" }} size="large">
//             <SendIcon />
//           </IconButton>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Test;
// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Container,
//   Typography,
//   Box,
//   Paper,
//   IconButton,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   LinearProgress,
//   Grid
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// const Test = () => {
//   const [state, setState] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch('http://55.55.55.249:3000/api/v1/chat/models', {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });
//         const resData = await response.json();
//         if (resData.success && Array.isArray(resData.data.models)) {
//           setModels(resData.data.models);
//           if (resData.data.models.length > 0) {
//             setSelectedModel(resData.data.models[0].id);
//           }
//         } else {
//           console.error('Invalid models data:', resData);
//         }
//       } catch (error) {
//         console.error('Error fetching models:', error);
//       }
//     };

//     fetchModels();
//   }, []);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleModelChange = (event) => {
//     setSelectedModel(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!state.trim()) return;

//     const userMessage = {
//       role: 'user',
//       content: state,
//     };

//     setMessages(prevMessages => [...prevMessages, userMessage]);

//     const userDetails = JSON.parse(localStorage.getItem('userDetails'));
//     const empid = userDetails ? userDetails.empid : '';

//     const data = {
//       empid: empid,
//       message: state,
//       modelType: selectedModel,
//     };

//     setLoading(true);

//     try {
//       const response = await fetch('http://55.55.55.249:3000/api/v1/chat/message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const resData = await response.json();
//       const botMessage = {
//         role: 'bot',
//         content: resData.data || 'No response from bot',
//       };

//       setMessages(prevMessages => [...prevMessages, botMessage]);
//       setState('');
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages(prevMessages => [...prevMessages, { role: 'bot', content: 'There was an error processing your request.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
//       <Paper elevation={3} style={{ padding: '2rem' }}>
//         <Grid container alignItems="center" justifyContent="space-between">
//           <Grid item>
//             <Typography variant="h4">Chat with Llama</Typography>
//           </Grid>
//           <Grid item>
//             <FormControl variant="outlined" size="small">
//               <InputLabel id="model-select-label">Model</InputLabel>
//               <Select
//                 labelId="model-select-label"
//                 value={selectedModel}
//                 onChange={handleModelChange}
//                 label="Model"
//                 style={{ width: 150 }}
//               >
//                 {models.map((model, index) => (
//                   <MenuItem key={index} value={model.id}>{model.id}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//         {loading && <LinearProgress />}
//         <Box flexGrow={1} overflow="auto" style={{ height: '50vh', marginTop: '1rem', marginBottom: '1rem' }}>
//           {messages.map((msg, index) => (
//             <Box key={index} style={{ marginBottom: '1rem', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
//               <Paper elevation={3} style={{ padding: '1rem', display: 'inline-block', backgroundColor: msg.role === 'user' ? 'white' : '#663399', color: msg.role === 'user' ? '#663399' : 'white' }}>
//                 <Typography variant="body1">{msg.content}</Typography>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//             label="Enter your message"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={2}
//             value={state}
//             onChange={handleChange}
//             margin="normal"
//             style={{ marginRight: '1rem' }}
//           />
//           <IconButton type="submit" color="primary" style={{ color: "#663399" }} size="large">
//             <SendIcon />
//           </IconButton>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Test;
