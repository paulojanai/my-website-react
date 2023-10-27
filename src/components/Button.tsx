import React from "react";

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, disabled }: ButtonProps) => {
  return (
    <a href="#" className={`btn-primary ${disabled ? "disabled" : ""}`}>
      {children}
    </a>
  );
};

export default Button;
