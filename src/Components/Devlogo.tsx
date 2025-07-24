import React from 'react';
import './Devlogo.css'

const Loader: React.FC = () => {
  const text = 'DevOps Engineer';
  return (
    <div className="loader-wrapper">
      {text.split('').map((char, index) => (
        <span key={index} className="loader-letter" style={{ animationDelay: `${0.1 + index * 0.105}s` }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
