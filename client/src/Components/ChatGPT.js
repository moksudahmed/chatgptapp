import React, { useState } from 'react';
import "./chat.css";

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = event => {
    setInput(event.target.value);
  };
 
  const handleSubmit = async event => {
    event.preventDefault();
    fetch('https://chatgptapp-y25t.onrender.com/', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({prompt:input}),
      headers: {
        'Content-Type': 'application/json'
      }  
    })
    .then(response => response.json())
    .then(data => {
      setOutput(data);
      console.log(data.bot);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <div>
        <h1>ChatGPT</h1>
      </div>
      <div className="chat-container">
        <div className="chat-history">
          <div className="message-container-user">
            <p>User: {input}</p>
          </div>
          <div className="message-container-chatgpt">
            <p>ChatGPT: {output.bot}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input.bot}
            onChange={handleInputChange}
            placeholder="Type your message here..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ChatGPT;


