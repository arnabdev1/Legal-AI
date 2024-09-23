import React from 'react';
import TypingText from './TypingText'; // Adjust the path as needed

const Messages = ({ messages }) => {
  
  
  return (
    <div className="bg-transparent p-4 rounded-md overflow-y-auto flex flex-col space-y-2 h-auto overflow-visible w-full">
      {messages.length === 0 ? (
        <p className="text-purple-300 italic text-center">Hi! I'm Mike, your AI law assistant, how can I help you today?</p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.sender === 'bot' ? 'items-start' : 'items-end'}`}
          >
            <p className={`text-sm text-white opacity-80 mb-2 ${msg.sender === 'bot' ? 'pl-3' : 'pr-3'}`}>
              {msg.sender === 'bot' ? 'Mike' : 'You'}
            </p>
            <div
              className={`overflow-auto max-w-[50%] h-auto p-3 rounded-[20px] shadow-md ${msg.sender === 'bot'
                ? 'bg-transparent border-2 border-white text-white' // Bot messages on the left
                : 'bg-purple-500 text-white' // User messages on the right
                }`}
            >
              <TypingText text={msg.text} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default React.memo(Messages);
