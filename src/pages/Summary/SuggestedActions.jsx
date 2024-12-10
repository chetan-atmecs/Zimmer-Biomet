import React from 'react';
import { formatJsonToString } from '../../layouts/custom_utils';
const suggestedActions = [
  "Suggest few clinical recommendations for the patient.",
  "Give me insights on the patient’s immunizations, and reports if any.",
  "Give me details on what vaccinations the patient received?"
];

function SuggestedActions({ addMessage,setEmotionScore,setEmpathyScore,setMessage,setRewardScore,
  setEmotionScoreHover,
  setRewardScoreHover,
  setEmpathyScoreHover,
  setMessages,
  setLastMessage
 }) {
  const fetchResponse = async (message) => {
    try {
      const response = await fetch('http://66.66.66.23:8453/get-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'message': message,
        }), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching API:', error);
      return { error: 'Failed to fetch response ' };
    }
  };
  const handleClick = async (inputValue) => {
    if (inputValue.trim()) {
      addMessage(inputValue);
      
      
      // Fetch the response from the API
      const apiResponse = await fetchResponse(inputValue);
      console.log(apiResponse)
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
          { text: apiResponse.response, isUser: false },
        ]);
        setMessage(apiResponse.response);
        // addMessage(apiResponse.response.normal.output,false);
        setLastMessage(apiResponse.response); 
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