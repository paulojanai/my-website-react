import React from 'react';
interface ButtonProps {
  size: 'small' | 'medium';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  size,
  disabled,
  className = '',
  href,
  onClick,
}: ButtonProps) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`${className} btn-primary ${
        disabled ? 'disabled' : ''
      } btn-${size}`}
    >
      {children}
    </a>
  );
};

export default Button;
