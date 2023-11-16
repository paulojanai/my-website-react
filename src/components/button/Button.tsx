import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  disabled,
  className = '',
  href,
  onClick,
}: ButtonProps) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`${className} btn-primary ${disabled ? 'disabled' : ''}`}
    >
      {children}
    </a>
  );
};

export default Button;
