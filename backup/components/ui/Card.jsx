import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`card ${className}`} 
      style={{ 
        backgroundColor: 'white', 
        padding: '32px', 
        borderRadius: 'var(--radius-md)', 
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-border)',
        height: '100%'
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
