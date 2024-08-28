import React from 'react';

interface ButtonProps {
    label: string;
    onClick: (label: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className="bg-gray-200 hover:bg-gray-300 text-lg font-semibold py-2 px-4 rounded border-2 w-full"
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    );
};

export default Button;
