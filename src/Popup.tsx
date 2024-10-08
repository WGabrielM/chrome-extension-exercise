import React, { useEffect, useState } from 'react';
import { getMessages, markAsRead } from './storage';

interface Message {
  id: string;
  content: string;
  priority: string;
  timestamp: string;
  read: boolean;
}

const Popup: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages().then((data) => {
      setMessages(data);
      setLoading(false);
    });
  }, []);

  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, read: true } : msg
      )
    );
  };

  return (
    <div>
      <div className="header">Messages</div>
      {loading ? (
        <div>Loading...</div>
      ) : messages.length === 0 ? (
        <div className="empty-state">No messages available</div>
      ) : (
        <div className="message-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.read ? 'read' : 'unread'}`}
            >
              <div>{message.content}</div>
              {!message.read && (
                <div className="button-container">
                  <button onClick={() => handleMarkAsRead(message.id)}>
                    Mark as Read
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Popup;
