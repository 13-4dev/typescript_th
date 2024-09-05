import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Textblock: React.FC = () => {
  const { hash } = useParams<{ hash: string }>();
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) {
      setMessage('Invalid message hash.');
      return;
    }

    const storedMessage = localStorage.getItem(hash);
    if (storedMessage) {
      setMessage(storedMessage);
      localStorage.removeItem(hash);
    } else {
      setMessage('This message has already been read.');
    }
  }, [hash]);

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={goBack}>Back to Home</button>
    </div>
  );
};

export default Textblock;
