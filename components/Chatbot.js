import React, { useState } from 'react';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [chatbotResponses, setChatbotResponses] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userInput }),
    });
    const data = await response.json();
    setChatbotResponses([...chatbotResponses, data.response]);
    setUserInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-responses">
        {chatbotResponses.map((response, index) => (
          <div key={index} className="chatbot-response">
            {response}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
