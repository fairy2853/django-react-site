import Message from './Message';
import { memo } from 'react';

const MessageList = ({ messages, removeMessage }) => {

  console.count('message list')
  
  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
      {messages.map((msg) => (
        <Message
          key={msg.id}
          id={msg.id}
          content={msg.content}
          onRemove={removeMessage}
        />
      ))}
    </div>
  );
}

export default memo(MessageList)
