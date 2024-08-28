import React from 'react';

interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
    return (
        <div className="bg-gray-100 text-right p-4 rounded text-2xl font-mono">
            {value}
        </div>
    );
};

export default Display;
