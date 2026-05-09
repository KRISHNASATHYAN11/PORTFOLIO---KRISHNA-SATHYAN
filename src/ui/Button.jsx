import React from 'react';

const Button = ({ children, primary, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${primary ? 'btn-primary' : 'btn-secondary'}`}
    >
      {children}
    </button>
  );
};

export default Button;