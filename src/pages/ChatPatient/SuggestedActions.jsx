import React from 'react';
import { formatJsonToString } from '../../layouts/custom_utils';
const suggestedActions = [
  "Suggest a physical therapy plan for post-surgery using Zimmer Biomet reverse shoulder replacement. ",
  "What are the long-term outcomes to be expected when using Zimmer Biomet's shoulder anthroplasty system?",
  "How can I address complications like stiffness in patients after total knee arthroplasty?"
];

function SuggestedActions({ addMessage,setMessage,setStreamingResponse,
  setMessages,
  setLastMessage,
  setIsLoading
 }) {
  // const fetchResponse = async (message) => {
  //   try {
  //     const response = await fetch('http://66.66.66.23:9070/get-response', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         'text': message,
  //         'session_id': "",
  //         'query_type': 'general'
  //       }), 
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json(); 
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching API:', error);
  //     return { error: 'Failed to fetch response ' };
  //   }
  // };
  
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
          "use_knowledge_base": true,
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
              setStreamingResponse(result)
              setIsLoading(false)
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


  const handleClick = async (inputValue) => {
    if (inputValue.trim()) {
      addMessage(inputValue);
      setIsLoading(true)
      
      // Fetch the response from the API
      const apiResponse = await fetchStreamingResponse(inputValue);
      console.log(apiResponse)
      setStreamingResponse(false)
      // Update the ScoreCard with the API response
      if (apiResponse && !apiResponse.error) {
        // setRewardScore(apiResponse.normal.reward.score || 'N/A');
        // setEmotionScore(apiResponse.emotionalscore.Logit_Scale || '0');
        // setEmpathyScore(apiResponse.normal.empathy.score.Empathy || '0');
        // setEmotionScoreHover(formatJsonToString(apiResponse.emotionalscore))
        // setRewardScoreHover(formatJsonToString(apiResponse.normal.reward.basicrewardscore))
        // setEmpathyScoreHover(formatJsonToString(apiResponse.normal.empathy.score))
        
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: apiResponse, isUser: false },
        ]);
        setMessage(apiResponse);
        // addMessage(apiResponse.response.normal.output,false);
        setLastMessage(apiResponse); 
      } else {
        setMessage(apiResponse.error || "Failed to fetch response");
      }
    }
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 mt-4 w-full text-sm text-white rounded-lg border border-solid bg-white bg-opacity-30 border-white border-opacity-20 ">
      <h3 className="text-base font-medium mb-2">Suggested Prompts</h3>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        {suggestedActions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleClick(action)}
            className="flex-grow sm:flex-grow-0 p-2 sm:p-2.5 bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 transition-colors text-left sm:text-center"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedActions;