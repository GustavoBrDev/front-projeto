import React from 'react';

export function WhiteContainer({ children }) {
  
  return (
    <div
      className="bg-white rounded-3xl w-full mx-6 p-5 relative overflow-y-24"
      style={{ height: 'calc(100vh - 48px)' }}
    >
      {children}
    </div>
  );
}
