import React, { useState } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleSend() {
        if (!inputValue.trim()) return;
        setMessages([...messages, inputValue]);
        setInputValue('');
    }

    return (
        <div>
            <h2>Chat</h2>
            <div style={{ border: '1px solid #ccc', height: 200, overflowY: 'auto' }}>
                {messages.map((msg, idx) => (
                    <p key={idx}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={inputValue}
                placeholder="Type your message..."
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}