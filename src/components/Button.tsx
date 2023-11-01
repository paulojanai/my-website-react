import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, disabled, className = '', href }: ButtonProps) => {
  return (
    <a
      href={href}
      className={`${className} btn-primary ${disabled ? 'disabled' : ''}`}
    >
      {children}
    </a>
  );
};

export default Button;
