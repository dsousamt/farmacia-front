import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ category = 'primary', children, ...props }) => {
  const classes = category === 'primary' ? 'bg-red-500 text-white' : 'bg-white text-red-500 border border';

  return (
    <button
      className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;