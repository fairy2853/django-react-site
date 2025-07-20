import { useEffect, useState , memo } from 'react';

const Message = memo(({ id, content, onRemove })  =>{
  const [visible, setVisible] = useState(true);


    
  useEffect(() => {
    // Fade out after [duration]
    const fadeOutTimer = setTimeout(() => {
      setVisible(false);
    }, 4500);

    // Remove after [duration + fade time]
    const removeTimer = setTimeout(() => {
      onRemove(id);
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  });

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        background: '#d1e7dd',
        color: '#0f5132',
        padding: '12px 16px',
        marginBottom: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '200px',
      }}
    >
      {content}
    </div>
  );
});

export default Message