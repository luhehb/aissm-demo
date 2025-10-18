import React from 'react';

const Card = ({ title, description, buttons, className = '' }) => {
  return (
    <div className={`bg-gradient-to-br rounded-xl p-8 text-white shadow-xl ${className}`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-6 opacity-90">{description}</p>
      <div className="flex gap-4">
        {buttons?.map((btn, idx) => (
          <button
            key={idx}
            className={`px-6 py-2 rounded-lg transition-colors ${
              btn.primary 
                ? 'bg-cyan-500 hover:bg-cyan-600' 
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {btn.label} →
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;