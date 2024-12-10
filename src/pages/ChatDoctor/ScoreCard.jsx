import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
function ScoreCard({ title, rewardScore, empathyScore, message, rewardScoreHover, empathyScoreHover}) {
  const [isRewardPopoverVisible, setRewardPopoverVisible] = useState(false);
  const [isEmpathyPopoverVisible, setEmpathyPopoverVisible] = useState(false);

  const handleRewardMouseEnter = () => {
    setRewardPopoverVisible(true);
  };

  const handleRewardMouseLeave = () => {
    setRewardPopoverVisible(false);
  };

  const handleEmpathyMouseEnter = () => {
    setEmpathyPopoverVisible(true);
  };

  const handleEmpathyMouseLeave = () => {
    setEmpathyPopoverVisible(false);
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 w-full text-base text-white rounded-lg border border-solid bg-white bg-opacity-30 border-white border-opacity-20">
      <div className="flex flex-col sm:flex-row gap-4 items-start w-full font-medium">
        
        {/* Reward Score Section */}
        <div className="flex flex-1 gap-4 items-center pb-2 border-b border-white w-full sm:w-auto relative">
          <div className="flex gap-1 items-center">
            <div>{title}</div>
            <div 
              className="relative flex items-center justify-center cursor-pointer"
              onMouseEnter={handleRewardMouseEnter}
              onMouseLeave={handleRewardMouseLeave}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f1d706cf189be04a450306fbd36e47167047b9697d84f99e292003b21d8501?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
                alt="Info icon"
                className="object-contain w-6 h-6"
              />
              {isRewardPopoverVisible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-2 w-[200px] bg-gray-800 text-white text-sm rounded shadow-lg z-10 break-words">
                {rewardScoreHover}
              </div>
              )}
            </div>
          </div>
          <div>{rewardScore}</div>
        </div>
        
        {/* Empathy Score Section */}
        <div className="flex flex-1 gap-4 items-center pb-2 border-b border-white w-full sm:w-auto relative">
          <div className="flex gap-1 items-center">
            <div>Empathy Score</div>
            <div
              className="relative flex items-center justify-center cursor-pointer"
              onMouseEnter={handleEmpathyMouseEnter}
              onMouseLeave={handleEmpathyMouseLeave}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f1d706cf189be04a450306fbd36e47167047b9697d84f99e292003b21d8501?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
                alt="Info icon"
                className="object-contain w-6 h-6"
              />
              {isEmpathyPopoverVisible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-2 w-[200px] bg-gray-800 text-white text-sm rounded shadow-lg z-10 break-words">
                {empathyScoreHover}
              </div>
              )}
            </div>
          </div>
          <div>{empathyScore}</div>
        </div>

      </div>
      <div className="mt-2 max-h-[200px] overflow-y-auto custom-scrollbar">
      <ReactMarkdown>{message}</ReactMarkdown>
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

export default ScoreCard;
