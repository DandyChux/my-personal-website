import React from 'react';

interface ButtonProps {
    border: string;
    color: string;
    children?: React.ReactNode;
    onClick: () => void;
    height: string;
    width: string;
}

const Button: React.FC<ButtonProps> = ({border, color, children, onClick, height, width}: ButtonProps) => {
    return (
        <button onClick={onClick} style={{ 
            backgroundColor: color, 
            border,
            height,
            width
        }}>
            {children}
        </button>
    )
}

export default Button;