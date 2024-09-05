import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hash = Math.random().toString(36).substring(2, 15);
    localStorage.setItem(hash, message);
    navigate(`/message/${hash}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your secret message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
