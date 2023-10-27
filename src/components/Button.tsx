import React from 'react';

interface ButtonProps {
  disabled: boolean;
  children: React.ReactNode;
}

const Button = ({ children, disabled }: ButtonProps) => {
  return <button className='disable'>{children}</button>;
};

export default Button;
